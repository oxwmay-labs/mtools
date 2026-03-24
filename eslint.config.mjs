'use strict';

import globals from 'globals';
import typescriptEslint from 'typescript-eslint';
import pluginJs from '@eslint/js';
import {globalIgnores} from 'eslint/config';

/** @type {import('eslint').Linter.Config[]} */
export default [
  globalIgnores([
    'dist/',
    '.github/',
    '**/*.d.ts'
  ]),
  {
    files: ['**/*.js'],
    languageOptions: {sourceType: 'commonjs'}
  },
  {
    languageOptions: {globals: globals.node}
  },
  pluginJs.configs.recommended,
  {
    rules: {
      'quotes': [2, 'single', {'avoidEscape': true, 'allowTemplateLiterals': true}],
      'no-console': 2,
      'no-debugger': 'error',
      'no-tabs': 2,
      'no-unreachable': 2,
      'no-multi-spaces': 2,
      'no-proto': 2,
      'no-multiple-empty-lines': ['error', {'max': 1, 'maxEOF': 0}],
      'max-len': [2, 120],
      'generator-star-spacing': [2, {'before': false, 'after': true}],
      'no-duplicate-imports': 2,
      'no-useless-constructor': 2,
      'no-var': 2,
      'no-useless-escape': 0,
      'semi': 2,
      'semi-spacing': 2,
      'semi-style': 2,
      'indent': [2, 2, {'SwitchCase': 1, 'VariableDeclarator': 1}],
      'arrow-parens': ['error', 'as-needed'],
      'arrow-spacing': [2, {'before': true, 'after': true}],
      'no-plusplus': 'off',
      'lines-between-class-members': ['error', 'always', {exceptAfterSingleLine: true}],
      'comma-dangle': ['error', {
        'arrays': 'never',
        'objects': 'never',
        'imports': 'never',
        'exports': 'never',
        'functions': 'never'
      }],
      'prefer-destructuring': [2, {'object': true, 'array': false}],
      'keyword-spacing': ['error']
    }
  },
  {
    files: ['**/*.{ts,tsx}'],

    plugins: {
      '@typescript-eslint': typescriptEslint.plugin
    },

    linterOptions: {
      reportUnusedDisableDirectives: true
    },

    languageOptions: {
      parser: typescriptEslint.parser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.test.json'],
        tsconfigRootDir: process.cwd()
      }
    },

    rules: {
      ...typescriptEslint.configs.recommendedTypeChecked[0].rules,
      'no-await-in-loop': 0,
      'lines-between-class-members': 0,
      'require-await': 0,
      'dot-notation': 0,
      '@typescript-eslint/no-unsafe-assignment': 0,
      '@typescript-eslint/no-unused-expressions': 0,
      '@typescript-eslint/await-thenable': 0,
      '@typescript-eslint/no-unsafe-member-access': 0,
      '@typescript-eslint/restrict-template-expressions': 0,

      'no-shadow': 0,
      '@typescript-eslint/no-shadow': 2,

      '@typescript-eslint/dot-notation': [2, {allowIndexSignaturePropertyAccess: true}],
      '@typescript-eslint/prefer-for-of': 2,
      '@typescript-eslint/no-empty-interface': 2,
      '@typescript-eslint/no-magic-numbers': [2, {
        ignoreEnums: true,
        ignore: [1, -1, 0],
        ignoreArrayIndexes: true,
        ignoreReadonlyClassProperties: true,
        ignoreNumericLiteralTypes: true
      }],
      '@typescript-eslint/consistent-type-assertions': 2,
      '@typescript-eslint/no-use-before-define': 2,
      '@typescript-eslint/prefer-readonly': 2,
      '@typescript-eslint/array-type': [2, {
        default: 'array'
      }],
      '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,

      'use-isnan': 2,
      'no-undef-init': 2,
      'no-unused-expressions': [2, {
        allowShortCircuit: true,
        allowTernary: true
      }],
      'no-empty': 2,
      'no-unsafe-finally': 2,
      'no-fallthrough': 2,
      'no-template-curly-in-string': 2,
      'no-cond-assign': 2,
      'no-duplicate-case': 2,
      'constructor-super': 2,
      'no-useless-catch': 2,
      'no-setter-return': 2,
      'no-import-assign': 2,
      'no-async-promise-executor': 2,
      'no-dupe-else-if': 2,
      'global-require': 2,
      'no-path-concat': 2,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }]
    }
  },
  {
    files: ['config/**/*.{ts,tsx}'],

    rules: {
      '@typescript-eslint/no-magic-numbers': 0
    }
  }
];