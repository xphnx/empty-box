interface ClassNamesArgs {
    primaryClass: string;
    mods?: Record<string, string | boolean>;
    additionalClasses: string[]
}

export const classNames = ({ primaryClass, mods = {}, additionalClasses}: ClassNamesArgs) => {
    return [
        primaryClass,
        ...additionalClasses.filter(Boolean),
        Object.entries(mods).filter(([_, value]) => Boolean(value)).map(([key]) => key)
    ].join(' ')
}
