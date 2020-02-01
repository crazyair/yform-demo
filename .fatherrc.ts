import { IBundleOptions } from 'father';

const options: IBundleOptions = {
    cjs: 'rollup',
    esm: 'rollup',
    doc: { typescript: true },
} as any;

export default options;
