import type { Config } from 'jest';
import path from 'node:path';
import fs from 'node:fs';

const resolveFullPath = (dir: string) => path.resolve(__dirname, dir);

type WorkspaceInfo = [string, string[]];

const WORKSPACES = ['apps', 'packages'];

const resolveWorkspaceDirs = (workspace: string) =>
  fs
    .readdirSync(workspace)
    .filter((name) => fs.lstatSync(path.join(workspace, name)).isDirectory());

const projectWorkspacesInfo = WORKSPACES.map((workspace) => [
  workspace,
  resolveWorkspaceDirs(resolveFullPath(workspace)),
]) as WorkspaceInfo[];

/**
 * @see https://swc.rs/docs/configuration/compilation#jsctransform
 * @see https://github.com/swc-project/jest/issues/70
 */
const swcConfig = JSON.parse(fs.readFileSync(`${__dirname}/.swcrc`, 'utf-8'));

const makeJestProjects = (workspaceInfo: WorkspaceInfo) => {
  const [workspaceName, workspaces] = workspaceInfo;

  return workspaces.map((workspace) => ({
    testEnvironment: 'jest-environment-jsdom',
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node', 'mjs'],
    displayName: workspace,
    testMatch: [
      `<rootDir>/${workspaceName}/${workspace}/**/?(*.)+(spec|test).[jt]s?(x)`,
      `<rootDir>/${workspaceName}/${workspace}/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}`,
    ],
    transform: {
      '^.+\\.(t|j)sx?$': [
        '@swc/jest',
        {
          ...swcConfig,
        },
      ],
      '^.+\\.css$': '<rootDir>/config/jest/cssTransform.cjs',
    },

    moduleNameMapper: {
      '^@/(.+)': `<rootDir>/${workspaceName}/${workspace}/src/$1`,
    },
  }));
};

const projects = projectWorkspacesInfo.map(makeJestProjects).flat();

const config: Config = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore -> ts-jest's transform options types doesn't align with Jest's transform
  projects,
};

export default config;
