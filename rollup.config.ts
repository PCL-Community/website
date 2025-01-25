import commonjs from '@rollup/plugin-commonjs';

export default {
  output: {
    dir: 'output',
    format: 'cjs'
  },
  plugins: [commonjs()]
};