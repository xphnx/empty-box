import { FC, PropsWithChildren } from "react";
import { Link, LinkProps } from "react-router-dom";

interface AppLinkProps extends LinkProps {
    className?: string;
}

export const AppLink: FC<PropsWithChildren<AppLinkProps>> = ({ to, className, children, ...rest }) => 
    <Link to={to} className={className} { ...rest }>
        { children }
    </Link>
