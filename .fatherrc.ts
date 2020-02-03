import { IBundleOptions } from 'father';

const options: IBundleOptions = {
    entry: 'src/index',
    cjs: 'rollup',
    esm: 'rollup',
    doc: {
        typescript: true,
        files: './**/*.{md,markdown,mdx}',
        theme: 'docz-theme-umi',
        themeConfig: {
            codemirrorTheme: 'dracula',
        },
        extraBabelPlugins: [
            [
                'babel-plugin-import',
                {
                    libraryName: 'antd',
                    libraryDirectory: 'es',
                    style: true,
                },
            ],
        ],
    },
} as any;

export default options;
