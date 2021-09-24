// import commonjs from 'rollup-plugin-commonjs'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/App.vue',
  output: {
    file: './dist/bundle.js',
    format: 'iife',
    name: 'MyComponent'
  },
  plugins: [ vue() ]
}