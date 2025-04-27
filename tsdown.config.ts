import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/*.ts'],
  target: 'node18.12',
  clean: true,
  dts: true,
})
