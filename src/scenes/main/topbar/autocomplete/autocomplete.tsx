import Downshift from 'downshift'
import './autocomplete.css'
import { useContainerDimensions } from './hooks/dimensions'
import { useRef } from 'react'
export const Autocomplete = () => {
    const componentRef = useRef(null)
    const items = [
        { value: 'apple' },
        { value: 'pear' },
        { value: 'orange' },
        { value: 'grape' },
        { value: 'banana' },
        { value: 'apple1' },
        { value: 'pear1' },
        { value: 'orange1' },
        { value: 'grape1' },
        { value: 'banana1' },
    ]

    const handleSelected = (selection: any) => {
        console.log(selection.value)
    }

    const getValue = (item: any) => (item ? item.value : '')
    const { width } = useContainerDimensions(componentRef)
    return (
        <Downshift onChange={(selection) => handleSelected(selection)} itemToString={getValue} >
            {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
                getRootProps,
            }) => (
                <div ref={componentRef}>
                    <div className="relative hidden md:block" {...getRootProps({}, { suppressRefError: true })}>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z">
                                </path>
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input  className="autcomplete-list-input" {...getInputProps()}  placeholder="Buscar productos..."/>
                    </div>
                    <div className='dark:bg-gray-700 dark:border-gray-100' style={{ position: 'absolute', borderRadius: '5px', borderColor: 'red' }} {...getInputProps()}>
                        {isOpen
                            ? items
                                .filter(item => !inputValue || item.value.includes(inputValue))
                                .map((item, index) => (
                                    <div
                                        className={`autcomplete-list-item ${(highlightedIndex === index) ? "dark:bg-gray-600" : "dark:bg-gray-700"}`}
                                        {...getItemProps({ key: item.value, index, item, style: {width:width, fontWeight: selectedItem === item ? 'bold' : 'normal', }, })}
                                    >
                                        {item.value}
                                    </div>
                                ))
                            : null}
                    </div>
                </div>
            )}
        </Downshift>
    );
}