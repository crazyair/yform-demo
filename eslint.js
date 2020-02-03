module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb', 'airbnb/hooks', 'prettier'],
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true,
        jest: true,
        jasmine: true,
    },
    rules: {
        // https://eslint.org/docs/rules/linebreak-style
        'linebreak-style': 'off',
        // https://eslint.org/docs/rules/generator-star-spacing
        'generator-star-spacing': 'off',
        // 函数必须要有明确的返回值
        // https://eslint.org/docs/rules/consistent-return
        'consistent-return': 'off',
        // React propTypes 的类型不允许出现 any, array, object
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/forbid-prop-types.md
        'react/forbid-prop-types': 'off',
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        // https://eslint.org/docs/rules/global-require
        'global-require': 'off',
        // When there is only a single export from a module, prefer using default export over named export.
        // https://github.com/benmosher/eslint-plugin-import/blob/HEAD/docs/rules/prefer-default-export.md
        'import/prefer-default-export': 'off',
        // 组件中必须使用结构，暂时改为警告
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
        'react/destructuring-assignment': 'warn',
        // No .bind() or Arrow Functions in JSX Props
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-bind.md
        'react/jsx-no-bind': 'off',
        // TODO 强制要求配置 propTypes
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': 'off',
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/jsx-wrap-multilines': [
            'error',
            {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'ignore',
            },
        ],
        // This option limits every line in JSX to one expression each.
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-one-expression-per-line.md
        'react/jsx-one-expression-per-line': ['off', { allow: 'single-child' }],
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-wrap-multilines.md
        'react/no-multi-comp': 'off',
        // jsx 缩进规则，启用并且设置缩进为4个空格
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        'react/jsx-indent': ['error', 4],
        // jsx props 缩进规则，启用并且设置缩进为4个空格
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        'react/jsx-indent-props': ['error', 4],
        // 存在 return 则不需要 esle
        // https://eslint.org/docs/rules/no-else-return
        'no-else-return': ['error', { allowElseIf: false }],
        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/f7bd328f7b86c9f6d95c58c261b0b513df14bbd5/docs/rules/no-extraneous-dependencies.md
        'import/no-extraneous-dependencies': 'off',
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        'jsx-a11y/no-static-element-interactions': 'off',
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-noninteractive-element-interactions.md
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/click-events-have-key-events.md
        'jsx-a11y/click-events-have-key-events': 'off',
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md
        'jsx-a11y/anchor-is-valid': 'off',
        // https://eslint.org/docs/rules/no-nested-ternary
        'no-nested-ternary': 'off',
        // https://eslint.org/docs/rules/arrow-body-style
        'arrow-body-style': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/f7bd328f7b86c9f6d95c58c261b0b513df14bbd5/docs/rules/extensions.md
        'import/extensions': 'off',
        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': 'off',
        // https://eslint.org/docs/rules/no-cond-assign
        'no-cond-assign': 'off',
        // https://github.com/benmosher/eslint-plugin-import/blob/f7bd328f7b86c9f6d95c58c261b0b513df14bbd5/docs/rules/no-unresolved.md
        'import/no-unresolved': 'off',
        // https://eslint.org/docs/rules/camelcase
        camelcase: 'off',
        // https://eslint.org/docs/rules/comma-dangle
        // https://prettier.io/docs/en/options.html#trailing-commas
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'ignore',
            },
        ],
        // https://eslint.org/docs/rules/object-curly-newline
        'object-curly-newline': 'off',
        // https://eslint.org/docs/rules/function-paren-newline
        'function-paren-newline': 'off',
        // https://eslint.org/docs/rules/no-underscore-dangle
        'no-underscore-dangle': 'off',
        // 20180829 更新规则 start
        // 禁止变量声明覆盖外层作用域的变量，考虑到 actions 在 connect 之后内部外 import 同名的习惯关闭该规则
        // http://eslint.cn/docs/rules/no-shadow
        'no-shadow': 'off',
        // http://eslint.cn/docs/rules/no-plusplus
        'no-plusplus': 'off',
        // 禁止未使用过的表达式
        // http://eslint.cn/docs/rules/no-unused-expressions
        'no-unused-expressions': 'off',
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/455
        'jsx-a11y/label-has-for': 'off',
        // "class-methods-use-this": "off",
        // https://eslint.org/docs/rules/no-restricted-globals
        'no-restricted-globals': [
            2,
            { name: 'event', message: 'Use local parameter instead.' },
            { name: 'find', message: '禁止使用 `window.find`' },
        ],
        'no-param-reassign': 'off',
        'import/no-cycle': 'off',
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md
        'react/jsx-props-no-spreading': 'off',
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/state-in-constructor.md
        'react/state-in-constructor': 'off',

        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/static-property-placement.md
        'react/static-property-placement': ['error', 'static public field'],
    },
    // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true,
        },
    },
    settings: {
        polyfills: ['fetch', 'promises'],
    },
};
