import { Link, Routes, Route } from "react-router-dom"
import * as cls from './App.module.scss'
import { Suspense } from "react"
import { AboutLazy, MainLazy } from "../../pages"

export const App = () => {
    return <div className={cls.app}>
        <Link to="/">Main</Link>
        <Link to="/about">About</Link>
        <Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<MainLazy />} />
                <Route path="/about" element={<AboutLazy />} />
            </Routes>
        </Suspense>
    </div>
}