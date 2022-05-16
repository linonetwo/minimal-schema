module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'mocha-no-only'
  ],
  rules: {
    'mocha-no-only/mocha-no-only': ['error'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-irregular-whitespace': [
      'error',
      {
        skipStrings: true,
        skipComments: true,
        skipTemplates: true
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }
    ],
    'no-empty': [
      'error',
      {
        allowEmptyCatch: true
      }
    ],
    quotes: [
      'error',
      'single',
      {
        allowTemplateLiterals: true
      }
    ],
    curly: [
      'error',
      'all'
    ],
    'object-curly-spacing': [
      'error',
      'never'
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true
        }
      }
    ],
    indent: [
      'error',
      2,
      {SwitchCase: 1}
    ],
    'no-multi-spaces': 'error',
    'no-trailing-spaces': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always'
      }
    ],
    'max-len': [
      'error',
      120,
      {
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreUrls: true
      }
    ],
    'eol-last': 'error',
    'no-nested-ternary': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1
      }
    ],
    'semi': ['error', 'never'],
    'operator-linebreak': [
      'error',
      'after'
    ],
    'no-console': 'error',
    'lines-between-class-members': ['error', 'always'],
    'comma-spacing': 'error',
    'comma-dangle': ['error', {
      'arrays': 'never',
      'objects': 'never',
      'imports': 'never',
      'exports': 'never',
      'functions': 'never'
    }],
    'no-else-return': ['error', {'allowElseIf': false}],
    'padding-line-between-statements': ['error',
      {'blankLine': 'always', 'prev': '*', 'next': 'if'}
    ]
  }
}
