import { Dropdown } from '../dropdown/dropdown';
import { productosResult } from './data/products-datalist';
import { SearchFilters } from './filters';
import { ProductItem } from './product-item';
import { useSearchParams } from 'react-router-dom';
import { Select } from '@mantine/core';

export const Product = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get('search')); // 'name'

    const title: string = 'Resultados para'
    const searchValue = ` ${searchParams.get('search')} `
    const resultsQuantity = '(1000+)'
    return (
        <div className="p-5 lg:mx-20 mt-5 flex flex-row">
            <SearchFilters></SearchFilters>
            <div className='flex flex-col'>
                <div className='flex flex-row items-center justify-between my-4'>
                    <div className='flex flex-row items-center justify-center'>
                        <span className="text-xl font-semibold text-gray-500 dark:text-white">{title}
                            <span className="text-xl font-semibold text-blue-700">{searchValue}</span>
                            <span className='text-sm font-semibold text-gray-500 dark:text-gray-400'>{resultsQuantity}</span>
                        </span>
                    </div>
                    <div className='flex flex-row items-center'>
                        <div className='text-sm text-gray-900 dark:text-white mr-2'>Ordenar por: </div>
                        {/* <Dropdown /> */}
                        <Select
                            placeholder="Pick one"
                            data={[
                                { value: 'react', label: 'Menor Precio' },
                                { value: 'ng', label: 'Mayor Precio' },
                                { value: 'svelte', label: 'Mas Relevantes' }
                            ]}
                        />
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