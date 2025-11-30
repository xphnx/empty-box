import { Link, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { AboutLazy, MainLazy } from "../../pages"
import { useTheme } from "../../theme"
import { classNames } from "../../utils"

import '../../styles/index.scss'

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={classNames({primaryClass: 'app', additionalClasses: [theme]})}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<MainLazy />} />
                <Route path="/about" element={<AboutLazy />} />
            </Routes>
        </Suspense>
        <button onClick={toggleTheme}>Theme</button>
    </div>
}