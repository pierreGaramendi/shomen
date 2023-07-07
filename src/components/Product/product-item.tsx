import Icon from '@mui/material/Icon';
export const ProductItem = () => {
    return (
        <div className="w-full max-w-sm bg-white relative border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='absolute flex items-center justify-center items-center justify-center w-7 h-7 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300 right-3 top-2'>
                {/*<Icon fontSize='small' className='cursor-pointer text-white right-3 top-2'>favorite</Icon>*/}
                <Icon fontSize='small' className='cursor-pointer text-white'>favorite_border</Icon>
            </div>
            <div className="cursor-pointer rounded-t-lg flex justify-center items-center w-full">
                <img className="rounded-t-lg h-full w-full" src="https://http2.mlstatic.com/D_NQ_NP_946608-MPE51047804490_082022-V.webp" alt="product image" />
            </div>
            <div className="p-4">
                <div className='cursor-pointer'>
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                        OFERTA DEL DÍA Macbook Air 13.6 (2022) Chip M2 Apple / 8gb Ram Ssd 256gb
                    </h5>
                </div>
                <div className="flex items-center mt-2">
                    <span className="flex flex-row items-center bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">
                        <Icon sx={{ fontSize: 15 }} className='text-white mr-1'>star</Icon>
                        <div className='text-xs font-semibold tracking-tight text-gray-900 dark:text-white'>4.5 (123 reviews)</div>
                    </span>
                </div>
                <div className='flex flex-row items-center mt-2'>
                    <div className="text-sm font-semibold text-gray-900 dark:text-gray-400 line-through mr-2">
                        $599
                    </div>
                    <div className="text-base font-semibold text-gray-900 dark:text-white">$599</div>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <button type="button" className="w-full mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <div className='flex flex-row justify-center items-center'>
                            Comprar
                        </div>
                    </button>
                    <button type="button" className="w-full ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        <div className='flex flex-row justify-center items-center'>
                            <Icon fontSize='small' className='text-white mr-2'>shopping_cart</Icon>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}