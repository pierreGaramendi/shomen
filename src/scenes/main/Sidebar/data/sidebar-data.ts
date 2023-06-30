import { ISideMenuList } from "../types/sidebar-types";

export const Menu: ISideMenuList = [
    {
        title: 'Youtube',
        open: false,
        hasSubitems: false,
        subitems: [],
        icon: 'menu',
        path: '/'
    },
    {
        title: 'Dashboard',
        open: false,
        hasSubitems: true,
        subitems: [
            { title: 'Persona' },
            { title: 'Sub item 2' },
            { title: 'Sub item 3' },
        ],
        icon: 'account_balance',
        path: 'dashboard'
    },
    {
        title: 'Productos',
        open: false,
        hasSubitems: false,
        subitems: [],
        icon: 'emoji_events',
        path: 'productos'
    }
]