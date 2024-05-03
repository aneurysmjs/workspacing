import fs from 'node:fs';
import path from 'node:path';
import { URL, fileURLToPath } from 'node:url';

const appDirectory = fs.realpathSync(process.cwd());

const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

const dirname = fileURLToPath(new URL('.', import.meta.url));

export const ROOT = path.resolve(dirname, '../');

export const APPS = path.resolve(ROOT, 'apps');

export const MODULES = `${APPS}/demo/src/modules`;

export const PACKAGES = path.resolve(dirname, '../../');

export const TEMPLATES = resolveApp('config/plop/templates');
