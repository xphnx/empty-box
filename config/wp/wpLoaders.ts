import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const wpLoaders = (options: BuildOptions): RuleSetRule[] => {
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
          options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                auto: (path: string) => Boolean(path.includes('.module.')),
                localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:5]",
              }
            }
          },
          "sass-loader",
        ],
      }

    const tsLoader = 
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        }
      
    return [
        tsLoader,
        cssLoader,
    ]
}