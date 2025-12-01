import path from 'path';
import { BuildPaths, EnvOptions } from './config/wp/types/config';
import { wpBuildConfig } from './config/wp/wpBuildConfig';



export default (env: EnvOptions) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    root: path.resolve(__dirname),
  }

  const mode = env.mode ?? 'development';
  const isDev = mode === 'development';
  const PORT = env.port ?? 3000;

  return wpBuildConfig({
    mode,
    paths,
    port: PORT,
    isDev,
  })
};