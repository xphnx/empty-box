import { FC, PropsWithChildren, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from "../lib/ThemeContext"
import { Theme } from "../model/types";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.DARK;

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
   const [theme, setTheme] = useState(defaultTheme);

   const defaultProps = useMemo(() => ({
    theme,
    setTheme,
   }), [theme])


    return <ThemeContext.Provider value={defaultProps}>
        { children }
    </ThemeContext.Provider>
}