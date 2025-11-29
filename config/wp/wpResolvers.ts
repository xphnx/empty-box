import { ResolveOptions } from "webpack"

export const wpResolvers = (): ResolveOptions => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
    }
}