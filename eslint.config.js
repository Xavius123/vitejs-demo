import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    { ignores: ['dist'] },
    {
        extends: [js.configs.recommended, ...tseslint.configs.recommended],
        files: ['**/*.{ts,tsx}'],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
        },
        plugins: {
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
        },
        rules: {
            ...reactHooks.configs.recommended.rules,
            'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
            '@typescript-eslint/explicit-function-return-type': ['error'],
            'react/function-component-definition': 'off',
            'react/jsx-props-no-spreading': 'off',
            'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
            'react/react-in-jsx-scope': 'off',
            'no-use-before-define': 'off',
            'no-shadow': 'off',
            'import/prefer-default-export': 'off',
            'no-param-reassign': 'off',
            'import/extensions': [
                'error',
                'ignorePackages',
                {
                    ts: 'never',
                    tsx: 'never',
                },
            ],
            'sort-imports': 'off',
            'import/order': 'off',
            'jsx-a11y/media-has-caption': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
            'no-plusplus': 'off',
            'no-nested-ternary': 'off',
            'jsx-a11y/click-events-have-key-events': 'off',
            'react/no-danger': 'off',
            'react/require-default-props': 'off',
        },
    }
);
