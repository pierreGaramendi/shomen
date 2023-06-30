import './sidebar.css'
import { ISideMenuList } from './types/sidebar-types'
import { Item } from './components/item'
type SidebarProps = {
    menu: ISideMenuList
}
export const MySidebar = (props: SidebarProps) => {
    const { menu } = props;
    return (
        <nav className="list-box">
            <div className='list'>
                {
                    menu.map((item, index) => {
                        return (
                            <Item item={item} key={index} />
                        );
                    })
                }

            </div>
        </nav>
    );
}