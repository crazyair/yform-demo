import { IBundleOptions } from 'father';

const options: IBundleOptions = {
    entry: 'src/index.tsx',
    // cjs: 'rollup',
    esm: 'rollup',
    // cjs: 'babel',
    // esm: 'babel',
    preCommit: { eslint: true, prettier: true },
    extraBabelPlugins: [['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
    doc: {
        typescript: true,
        title: 'yform-demo',
        repository: 'https://github.com/crazyair/yform-demo',
        files: './**/*.{md,markdown,mdx}',
        theme: 'docz-theme-umi-yform',
        themeConfig: {
            codemirrorTheme: 'docz-light',
            menus: [
                { title: '发布日志', link: 'https://github.com/crazyair/yform-demo/releases' },
                { title: 'Github', link: 'https://github.com/crazyair/yform-demo' },
            ],
        },
    },
} as any;

export default options;
