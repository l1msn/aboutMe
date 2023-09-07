import webpack, { RuleSetRule } from 'webpack';
import { IBuildPaths } from '../build/types/config';
import path from 'path';
import buildCSSLoader from '../build/loaders/buildCSSLoader';

function webpackConfigStorybook({ config }: { config: webpack.Configuration }) {
    const paths: IBuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: '',
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx', '.svg');
    config!.resolve!.alias = {
        ...config!.resolve!.alias,
        '@': paths.src,
    };

    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/ };
        }
        return rule;
    });

    config!.module!.rules.push({
        test: /\.svg$/,
        loader: '@svgr/webpack',
    });
    config!.module!.rules!.push(buildCSSLoader(true));
    config!.plugins!.push(
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(true),
            __API__: JSON.stringify('https://testapi.com'),
            __PROJECT__: JSON.stringify('storybook'),
        }),
    );

    return config;
}

export default webpackConfigStorybook;
