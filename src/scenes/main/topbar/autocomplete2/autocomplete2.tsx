import { useEffect, useState } from 'react';
import { Autocomplete } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';
import { createSearchParams, useNavigate } from 'react-router-dom';

export function Demo() {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        if (value !== '') {
            console.log('search suggestions-->', value)
        }
    }, [value])

    const onItemSubmit = (item: any) => {
        navigate({
            pathname: "productos",
            search: `?${createSearchParams({
                search: item.value
            })}`
        });
    }

    return (
        <Autocomplete
            icon={<IconSearch size={16} />}
            placeholder="Buscar productos..."
            value={value}
            onChange={setValue}
            onItemSubmit={onItemSubmit}
            data={['React', 'Angular', 'Svelte', 'Vue']}
        />
    );
}