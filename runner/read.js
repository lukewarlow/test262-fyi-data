import fs from 'node:fs/promises';
import { join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const defaultPatchPath = fileURLToPath(new URL('../patches/', import.meta.url));

export default async (test262Path, preludes, runtime, hook, patchPath = process.env.FYI_PATCH_TESTS ?? defaultPatchPath) => {
  const testPath = join(test262Path, 'test');

  const alwaysPrelude = runtime + preludes['assert.js'] + preludes['sta.js'];

  const tests = [];
  const scan = async (x, root, prefix = '') => {
    const dir = await fs.readdir(x, { withFileTypes: true });

    const promises = [];
    for (const entry of dir) {
      const file = entry.name;
      if (entry.isFile() && file.endsWith('.js')) {
        if (file.includes('_FIXTURE')) continue;
        promises.push(read(join(x, file), root, prefix));
        continue;
      }

      if (entry.isDirectory()) promises.push(scan(join(x, file), root, prefix));
      continue;
    }

    await Promise.all(promises);
  };

  const done = {};
  const read = async (file, root, prefix) => {
    if (done[file]) return;
    done[file] = true;

    let contents = await fs.readFile(file, 'utf8');
    const sourcePath = resolve(file);
    file = prefix + relative(root, file).split('\\').join('/');
    if (hook) return hook({ file, contents });

    const flags = {};
    let flagsRaw = contents.match(/^flags: \[(.*)\]$/m)?.[1];
    if (!flagsRaw && contents.includes('flags:')) {
      // check for md style list as fallback
      flagsRaw = contents.match(/^flags:\n(  - .*\s*\n)+/m);
      if (flagsRaw) flagsRaw = flagsRaw[0].replaceAll('\n  - ',',').slice(7, -1);
    }
    if (flagsRaw) {
      for (const x of flagsRaw.split(',')) {
        flags[x.trim()] = true;
      }
    }

    const includes = (contents.match(/^includes: \[(.*)\]$/m)?.[1] ?? '').split(',');

    if (!flags.raw) {
      contents = (flags.onlyStrict ? '"use strict";\n' : '') +
        (flags.async ? preludes['doneprintHandle.js'] : '') +
        (includes.reduce((acc, x) => acc + (preludes[x.trim()] ?? ''), '')) +
        alwaysPrelude + contents;
    }

    let negative = contents.match(/^negative:\s*\n\s*phase:\s*(.*)\s*\n\s*type:\s*(.*)\s*$/m);
    if (negative) negative = {
      phase: negative[1],
      type: negative[2]
    };
    if (flags.negative && !negative) negative = true;

    tests.push({
      file,
      sourcePath,
      contents,
      flags,
      negative,
      strictRerun: !flags.module && !flags.onlyStrict && !flags.noStrict && !flags.raw
    });
  };

  await scan(testPath, testPath);
  if (patchPath) {
    try {
      await fs.stat(patchPath);
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      if (process.env.FYI_PATCH_TESTS) throw error;
      return tests;
    }
    await scan(patchPath, patchPath, 'patches/');
  }
  return tests;
};
