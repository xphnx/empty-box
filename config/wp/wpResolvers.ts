import path from "path"
import { ResolveOptions } from "webpack"
import { BuildOptions } from "./types/config"

export const wpResolvers = (options: BuildOptions): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
             '@*': path.resolve(options.paths.root, 'src/*'),
        }
    }
}