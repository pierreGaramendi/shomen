import { useRef, useState } from "react";
import useComponentVisible from "../../hooks/useComponentVisible";
import './dropdown.css'
export const Dropdown = () => {
    const options = [
        {
            label: 'Mas revelantes'
        },
        {
            label: 'Menor Precio'
        },
        {
            label: 'Mayor Precio'
        },
    ]
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [selected, setSelected] = useState(options[0])
    const handleClickGeneral = () => {
        setIsComponentVisible(true)
    }

    const handleClickItem = (element: any) => {
        setSelected(element)
        setIsComponentVisible(false)
    }

    return (
        <>
            <div ref={ref} className="relative">
                <button onClick={handleClickGeneral} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">{selected.label}
                    <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>
                <div id="dropdown" className={`dropdown-list ${(isComponentVisible) ? "block" : "hidden"}`}>
                    <ul className="py-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        {
                            options.map((item, index) =>
                                <li key={index} onClick={() => handleClickItem(item)}>
                                    <a href="#" className={`dropdown-list-item ${(item.label===selected.label) ? "dark:bg-gray-800 " : ""}`}>
                                        {item.label}
                                    </a>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </>
    );
}
