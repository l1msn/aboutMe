type BuildMode = 'production' | 'development';

interface IBuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
    locales: string,
    buildLocales: string,
}

interface IBuildOptions {
    mode: BuildMode;
    paths: IBuildPaths;
    isDev: boolean;
    port: number;
    apiUrl: string;
    project: 'storybook' | 'frontend' | 'jest';
}

interface IBuildEnv {
    mode: BuildMode;
    port: number;
    apiUrl: string;
}

export type {BuildMode};
export type {IBuildPaths, IBuildOptions, IBuildEnv};

