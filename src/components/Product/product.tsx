import { Dropdown } from '../dropdown/dropdown';
import { productosResult } from './data/products-datalist';
import { ProductItem } from './product-item';

export const Product = () => {
    return (
        <div className="p-5 lg:mx-20 mt-5">
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-between'>
                    <div className="text-xl my-2 font-semibold text-gray-900 dark:text-white text-center align-middle">Resultados para headphones</div>
                    <div className='flex flex-row '>
                        <div className='text-base text-gray-900 dark:text-white mr-2'>Ordenar por</div>
                        <Dropdown/>
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-4'>
                    {productosResult.map((todo, index) =>
                        <ProductItem key={index} />
                    )}
                </div>
            </div>
        </div>
    );
}