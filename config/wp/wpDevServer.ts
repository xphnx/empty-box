import { Configuration } from "webpack-dev-server"
import { BuildOptions } from "./types/config"

export const wpDevServer = (options: BuildOptions): Configuration => {
    return {
        port: options.port,
        open: true,
    }
}