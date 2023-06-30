import { ShowWithAnimation } from '../../../../components/Animation/ShowWithAnimation';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import Icon from '@mui/material/Icon';
import { Subitem } from './subitem';
import { IItemProps } from '../types/sidebar-types';
import { useState } from 'react';


export const Item = (props: IItemProps) => {
    const { item } = props
    const [open, setOpen] = useState(item.open);
    const [isMounted, setIsMounted] = useState(false);
    return (
        <div className="item">
            <a href="#" className='item-link' onClick={() => setOpen(!open)}>
                <Icon className='icon'>{item.icon}</Icon>
                <span className="nav-text">
                    {item.title}
                </span>
                <KeyboardArrowUp />
            </a>
            <div className='sublist'>
                {
                    item.subitems.map(
                        (subitem: any, index: any) => {
                            return (
                                <Subitem subitem={subitem} key={index}></Subitem>
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}