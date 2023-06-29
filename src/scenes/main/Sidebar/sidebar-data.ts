import { ISideMenuList } from "./sidebar-types";

export const Menu: ISideMenuList = [
    {
        title: 'Youtube',
        open: false,
        hasSubitems: false,
        subitems: [],
        icon: 'menu'
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
        icon: 'account_balance'
    },
    {
        title: 'Productos',
        open: false,
        hasSubitems: false,
        subitems: [],
        icon: 'emoji_events'
    },
    {
        title: 'Usuarios',
        open: false,
        hasSubitems: true,
        subitems: [
            { title: 'Admins' },
            { title: 'Personas' },
            { title: 'Escalvos' },
        ],
        icon: 'festival'
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
        icon: 'adjust'
    },
    {
        title: 'Productos',
        open: false,
        hasSubitems: false,
        subitems: [],
        icon: 'album'
    },
    {
        title: 'Usuarios',
        open: false,
        hasSubitems: true,
        subitems: [
            { title: 'Admins' },
            { title: 'Personas' },
            { title: 'Escalvos' },
        ],
        icon: 'back_hand'
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
        icon: 'emoji_emotions'
    },
    {
        title: 'Productos',
        open: false,
        hasSubitems: false,
        subitems: [],
        icon: 'favorite'
    },
    {
        title: 'Usuarios',
        open: false,
        hasSubitems: true,
        subitems: [
            { title: 'Admins' },
            { title: 'Personas' },
            { title: 'Escalvos' },
        ],
        icon: 'flag_circle'
    },
]