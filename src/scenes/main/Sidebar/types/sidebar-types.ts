export type ISideMenuList = IItem[]

export interface IItem {
  title: string
  open: boolean
  hasSubitems: boolean
  icon: string
  subitems: ISubitem[]
  path: string
}

export interface ISubitem {
  title: string
  icon?: string
}


export type IItemProps = {
  item: IItem
}