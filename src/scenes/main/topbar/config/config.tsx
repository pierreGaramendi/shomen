import { MyConfig } from './myconfig/myconfig';
import { IconShoppingCart } from '@tabler/icons-react';
import { IconBell } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';

export const TopbarConfig = () => {
    return (
        <>
            <div className='mr-3 cursor-pointer rounded-full flex justify-center items-center min-w-[40px] min-h-[40px]'>
            <ActionIcon variant="outline" size="lg"><IconBell size="1.3rem" /></ActionIcon>
            </div>
            <div className='mr-3 cursor-pointer flex justify-center items-center min-w-[40px] min-h-[40px]' >
               <ActionIcon variant="outline" size="lg"><IconShoppingCart size="1.3rem" /></ActionIcon>
            </div>
            <MyConfig/>
        </>
    );
}