import { FC } from "react"
import { Link } from "react-router-dom"

import { classNames } from "@shared/lib"

import * as cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames({primaryClass: cls.nav, additionalClasses: [className]})}>
            <div className={cls['nav-links']}>
                <Link to="/">Main</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    )
}
