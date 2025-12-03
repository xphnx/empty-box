import { classNames } from "@shared/lib"
import { Navbar } from "@widgets"

import { useTheme } from "./providers/theme"
import { AppRouter } from "./providers/router"
import './styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames({primaryClass: 'app', additionalClasses: [theme]})}>
            <Navbar />
            <AppRouter />
            <button onClick={toggleTheme}>Theme</button>
        </div>
    )
}