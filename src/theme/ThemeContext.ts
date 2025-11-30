import { createContext } from "react";
import { ThemeContextProps } from "./types";

export const LOCAL_STORAGE_THEME_KEY = 'empty_box_theme';

export const ThemeContext = createContext<ThemeContextProps>({})