import path from 'path';
import { BuildPaths } from './config/wp/types/config';
import { wpBuildConfig } from './config/wp/wpBuildConfig';

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html'),
}

const mode = 'development';
const isDev = mode === 'development';

const config = wpBuildConfig({
  mode,
  paths,
  isDev,
})

export default config;