import Meconfig from './meconfig/meconfig';
import { Notifications } from './notification/notification';
export const TopbarConfig = () => {
    return (
        <>
            <div className='mr-3 cursor-pointer rounded-full hover:bg-gray-600 flex justify-center items-center min-w-[40px] min-h-[40px]'>
                <Notifications></Notifications>
            </div>
            <div className='mr-3 cursor-pointer rounded-full hover:bg-gray-600 flex justify-center items-center min-w-[40px] min-h-[40px]' >
               {/*  <Icon className='cursor-pointer text-white'>shopping_cart</Icon> */}
            </div>
            <Meconfig></Meconfig>
        </>
    );
}