import { Link, Routes, Route } from "react-router-dom"
import { Suspense } from "react"
import { AboutLazy, MainLazy } from "../../pages"

import '../../styles/index.scss'
import { useTheme } from "../../theme"

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return <div className={`app ${theme}`}>
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