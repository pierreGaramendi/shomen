import { ShowWithAnimation } from '../../../../components/Animation/ShowWithAnimation';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import { Subitem } from './subitem';
import { IItemProps } from '../types/sidebar-types';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const Item = (props: IItemProps) => {
    const { item } = props
    const [open, setOpen] = useState(item.open);
    const [isMounted, setIsMounted] = useState(false);
    let navigate = useNavigate();
    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className="item">
            <div className='item-link' onClick={() => handleNavigation(item.path)}>
                {/* <Icon className='icon'>{item.icon}</Icon> */}
                <span className="nav-text">{item.title}</span>
                <KeyboardArrowUp />
            </div>
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