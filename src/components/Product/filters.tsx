export const SearchFilters = () => {
    return (
        <div className="border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-4 p-4 min-w-max">
            <span className="text-base font-semibold text-gray-500 dark:text-white">Filtros</span>
            <div id="search-filter-condition" className="mt-5">
                <span className="text-base font-semibold text-gray-500 dark:text-white">Condicion</span>
                <div className="flex items-center mt-2 mb-2">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label htmlFor="default-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nuevo</label>
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
                <div className="relative inline-block text-left">
                    <div>
                        <button type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                            Options
                            <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                    <div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                        <div className="py-1" role="none">
                            <a  className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Account settings</a>
                            <a  className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Support</a>
                            <a className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">License</a>
                            <form method="POST" action="#" role="none">
                                <button className="text-gray-700 block w-full px-4 py-2 text-left text-sm" role="menuitem" id="menu-item-3">Sign out</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}