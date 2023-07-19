import { Checkbox } from '@mantine/core';

export const SearchFilters = () => {
    return (
        <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-4 p-4 min-w-max">
            <span className="text-base font-semibold text-gray-500 dark:text-white">Filtros</span>
            <div id="search-filter-condition" className="mt-5">
                <span className="text-base font-semibold text-gray-500 dark:text-white">Condicion</span>
                <div className="flex items-center mt-2 mb-2">

                <Checkbox label="Nuevo" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>

{/*                     <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nuevo</label> */}
                </div>
                <div className="flex items-center">
                    <input checked id="checked-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="checked-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Usado</label>
                </div>
            </div>
            <div id="search-filter-color" className="mt-5">
                <span className="text-base font-semibold text-gray-500 dark:text-white">Color principal</span>
                <div className="grid grid-cols-6 gap-1 gap-y-2 mt-2">
                    <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full dark:border-gray-900 mr-2"></div>
                    <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 rounded-full dark:border-gray-900 mr-2"></div>
                    <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-green-500 rounded-full dark:border-gray-900 mr-2"></div>
                    <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-yellow-500 rounded-full dark:border-gray-900 mr-2"></div>
                    <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo-500 rounded-full dark:border-gray-900 mr-2"></div>
                    <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-purple-500 rounded-full dark:border-gray-900 mr-2"></div>
                    <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-pink-500 rounded-full dark:border-gray-900 mr-2"></div>
                    <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full dark:border-gray-900 mr-2"></div>
                </div>

            </div>
            <div>
            </div>
        </div>
    );
}