import dts from 'rollup-plugin-dts';

export default {
  input: './src/index.d.ts',
  output: [{file: './dist/rmmz_api.d.ts', format: 'es'}],
  plugins: [dts()],
};
