import { nodeResolve } from '@rollup/plugin-node-resolve'
import cleanup from 'rollup-plugin-cleanup'
import { minify } from 'rollup-plugin-swc-minify'

// eslint-disable-next-line import/no-default-export
export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/main.js',
      sourcemap: true,
    },
    {
      file: 'dist/main.cjs',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/main.umd.cjs',
      format: 'umd',
      name: 'unixPermissions',
      sourcemap: true,
    },
    {
      file: 'dist/main.umd.min.cjs',
      format: 'umd',
      name: 'unixPermissions',
      sourcemap: true,
      plugins: [minify()],
    },
  ],
  plugins: [nodeResolve(), cleanup()],
}
