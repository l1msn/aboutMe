import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer';
import {IBuildOptions} from './types/config';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// import CircularDependencyPlugin from 'circular-dependency-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

export function buildPlugins({paths, isDev, apiUrl, project}: IBuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev;
    const plugins =
        [new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new ForkTsCheckerWebpackPlugin({
            typescript: {
                diagnosticOptions: {
                    semantic: true,
                    syntactic: true,
                },
                mode: 'write-references',
            },
        }),
        // new CircularDependencyPlugin({
        //     exclude: /node_modules/,
        //     failOnError: false,
        // };
        ];

    if (isDev) {
        plugins.push(new ReactRefreshWebpackPlugin());
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false,
        },
        ));
    }

    if(isProd) {
        plugins.push(new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }))
        plugins.push(new CopyPlugin({
            patterns: [
                {from: paths.locales, to: paths.buildLocales},
            ],
        }))
    }

    return plugins;
}
