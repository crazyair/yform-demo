import { IBundleOptions } from 'father';

const options: IBundleOptions = {
    entry: 'src/index.tsx',
    // cjs: 'rollup',
    esm: 'rollup',
    preCommit: { eslint: true, prettier: true },
    extraBabelPlugins: [['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]],
    doc: {
        typescript: true,
        files: './**/*.{md,markdown,mdx}',
        theme: 'docz-theme-umi',
        themeConfig: { codemirrorTheme: 'dracula' },
    },
} as any;

export default options;
