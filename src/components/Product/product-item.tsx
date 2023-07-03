import Icon from '@mui/material/Icon';
export const ProductItem = () => {
    return (
        <div className="w-full max-w-sm bg-white relative border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Icon fontSize='small' className='absolute cursor-pointer text-white right-3 top-2'>favorite</Icon>
                <Icon fontSize='small' className='absolute cursor-pointer text-white right-3 top-2'>favorite_border</Icon>
            <div className="rounded-t-lg flex justify-center items-center">
                <img className="p-5 rounded-t-lg h-40 w-40" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
            </div>
            <div className="px-4 pb-4">
                <a href="#">
                    <h5 className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
                        Reproductor Mp3 Mp4 Con Bluetooth + Micro Sd 32gb Kingston
                    </h5>
                </a>
                <div className="flex items-center mt-2 mb-2">
                    <Icon fontSize='small' className='cursor-pointer text-white'>star</Icon>
                    <Icon fontSize='small' className='cursor-pointer text-white'>star</Icon>
                    <Icon fontSize='small' className='cursor-pointer text-white'>star</Icon>
                    <Icon fontSize='small' className='cursor-pointer text-white'>star</Icon>
                    <Icon fontSize='small' className='cursor-pointer text-white'>star</Icon>
                </div>
                <div className='flex flex-row items-center'>
                    <div className="text-sm my-2 mr-2 font-semibold text-gray-900 dark:text-gray-400 line-through">
                        $599
                        </div>
                    <div className="text-base my-2 font-semibold text-gray-900 dark:text-white">$599</div>
                </div>
                <div className="flex items-center justify-between">
                    <button type="button" className="w-full mr-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                        <div className='flex flex-row justify-center items-center'>
                            <Icon fontSize='small' className='text-white mr-2'>shopping_cart</Icon>
                            Comprar
                        </div>
                    </button>
                    <button type="button" className="w-full ml-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        Agregar al carrito
                    </button>
                </div>
            </div>
        </div>
    );
}