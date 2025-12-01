import { Link } from "react-router-dom"

import { classNames } from "@shared/lib"

import { useTheme } from "./providers/theme"
import { AppRouter } from "./router"
import './styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames({primaryClass: 'app', additionalClasses: [theme]})}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <AppRouter />
        <button onClick={toggleTheme}>Theme</button>
    </div>
}