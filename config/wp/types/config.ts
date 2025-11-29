export type BuildMode = 'production' | 'development';

export interface BuildPaths {
    entry: string;
    output: string;
    html: string;
}

export interface EnvOptions {
    port: number;
    mode: BuildMode;
}

export interface BuildOptions {
    mode: BuildMode,
    paths: BuildPaths,
    port: number;
    isDev: boolean;
}