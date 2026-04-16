import { defineConfig, globalIgnores } from 'eslint/config'

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = defineConfig([
    {
        extends: ['next/core-web-vitals'],
    },
    globalIgnores([
        '.next/**',
        'out/**',
        'build/**',
        'next-env.d.ts',
    ]),
])

export default eslintConfig
