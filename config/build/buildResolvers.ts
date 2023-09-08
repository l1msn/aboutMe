import {ResolveOptions} from 'webpack';
import {IBuildOptions} from './types/config';

export function buildResolvers(options: IBuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js', '.glb','.jpg'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        alias: {'@': options.paths.src},
        fallback: { 'path': require.resolve('path-browserify') }
    };
}

