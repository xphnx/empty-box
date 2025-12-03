import { RouteProps } from "react-router-dom"

import { AboutLazy, MainLazy } from "@pages"

enum AppRoute {
    MAIN = 'MAIN',
    ABOUT = 'ABOUT',
}

const routePaths: Record<AppRoute, string> = {
    [AppRoute.MAIN]: '/',
    [AppRoute.ABOUT]: '/about'
}

export const routeConfig: Record<AppRoute, RouteProps> = {
    [AppRoute.MAIN]: {
        path: routePaths.MAIN,
        element: <MainLazy />
    },
    [AppRoute.ABOUT]: {
        path: routePaths.ABOUT,
        element: <AboutLazy />
    }
}