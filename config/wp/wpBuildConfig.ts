import { Configuration } from "webpack"
import { BuildOptions } from "./types/config"
import { wpPlugins } from "./wpPlugins"
import { wpLoaders } from "./wpLoaders"
import { wpResolvers } from "./wpResolvers"

export const wpBuildConfig = (options: BuildOptions): Configuration => {

    const { mode, paths } = options;

    return {
        mode,
        entry: {
            index: paths.entry
        },
        output: {
            filename: '[name]-[contenthash].js',
            path: paths.output,
            clean: true,
        },
        plugins: wpPlugins(options),
        module: { rules: wpLoaders() },
        resolve: wpResolvers(),
    }
}