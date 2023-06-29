import './sidebar.css'
import { Item } from './components/Item'
import { ISideMenuList } from './sidebar-types'
type SidebarProps = {
    menu: ISideMenuList
}
export const MySidebar = (props: SidebarProps) => {
    const { menu } = props;
    return (
        <nav className="list-box">
            <ul className='list'>
                {
                    menu.map((item, index) => {
                        return (
                            <Item item={item} key={index}></Item>
                        );
                    })
                }

            </ul>
        </nav>
    );
}