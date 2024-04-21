import globals from 'globals';

import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import path from 'path';
import { fileURLToPath } from 'url';

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: pluginJs.configs.recommended
});

export default [
    {
        ignores: ['./dist'],
        languageOptions: {
            globals: globals.node
        }
    },
    ...compat.extends('standard', 'prettier')
];
