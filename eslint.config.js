// eslint.config.js (ESLint 9.x with flat config)
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['src/**/*.ts'], // Specify the files you want to lint
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      'space-before-function-paren': [
        'off',
        { anonymous: 'always', named: 'always' },
      ],
      camelcase: 'off',
      'no-return-assign': 'off',
      quotes: ['error', 'single'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': 'error',
    },
    ignores: [
      'logs/**',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'lerna-debug.log*',
      '.pnpm-debug.log*',
      'report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json',
      'pids/**',
      '*.pid',
      '*.seed',
      '*.pid.lock',
      'lib-cov/**',
      'coverage/**',
      '*.lcov',
      '.nyc_output/**',
      '.grunt/**',
      'bower_components/**',
      '.lock-wscript',
      'build/Release/**',
      'node_modules/**',
      'jspm_packages/**',
      'web_modules/**',
      '*.tsbuildinfo',
      '.npm/**',
      '.eslintcache',
      '.stylelintcache',
      'rpt2_cache/**',
      'rts2_cache_cjs/**',
      'rts2_cache_es/**',
      'rts2_cache_umd/**',
      '.node_repl_history',
      '*.tgz',
      '.yarn-integrity',
      '.env',
      '.env.development.local',
      '.env.test.local',
      '.env.production.local',
      '.env.local',
      '.cache/**',
      '.parcel-cache/**',
      '.next/**',
      'out/**',
      '.nuxt/**',
      'dist/**',
      '.cache/**',
      '.vuepress/dist/**',
      '.temp/**',
      '.docusaurus/**',
      '.serverless/**',
      '.fusebox/**',
      '.dynamodb/**',
      '.tern-port',
      '.vscode-test/**',
      '.yarn/cache/**',
      '.yarn/unplugged/**',
      '.yarn/build-state.yml',
      '.yarn/install-state.gz',
      '.pnp.*',
      '.webpack/**',
      '.svelte-kit/**',
    ],
  },
];
