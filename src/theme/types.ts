export enum Theme {
    LIGHT = "LIGHT",
    DARK = "DARK",
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (them: Theme) => void;
}

export interface UseThemeReturn {
    theme: Theme;
    toggleTheme: () => void;
}