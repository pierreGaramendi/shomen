import { KeyboardArrowUp,KeyboardArrowDown } from '@mui/icons-material';
import Icon from '@mui/material/Icon';
import { Subitem } from './subitem';
import { IItem } from '../sidebar-types';
import { useState } from 'react';
type ItemProps = {
    item: IItem
}
export const Item = (props: ItemProps) => {
    const { item } = props
    const [open, setOpen] = useState(item.open);
    return (
        <li className="item">
            <a href="#" className='item-link' onClick={() => setOpen(!open)}>
                <Icon className='icon'>{item.icon}</Icon>
                <span className="nav-text">
                    {item.title}
                </span>
                {item.hasSubitems && (open ? <KeyboardArrowUp /> : <KeyboardArrowDown />)}
            </a>
            {
                open && <ul className='sublist'>
                    {
                        item.subitems.map(
                            (subitem: any, index: any) => {
                                return (
                                    <Subitem subitem={subitem} key={index}></Subitem>
                                )
                            }
                        )
                    }
                </ul>
            }
           {/*  <div className='divider'></div> */}
        </li>
    );
}