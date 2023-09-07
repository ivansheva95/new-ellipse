type MenuLocals = 'ua' | 'en'

type MenuPages = {
    label: string
    href: string
}

export type MenuType = Record<MenuLocals, MenuPages[]>
