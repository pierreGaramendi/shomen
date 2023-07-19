import { Menu, Button, Text } from '@mantine/core';
import { IconSettings, IconSearch, IconPhoto, IconMessageCircle, IconTrash, IconArrowsLeftRight } from '@tabler/icons-react';
import avatar from '../../../../../assets/avatar.svg';
import { Avatar } from '@mantine/core';

export function MyConfig() {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <Avatar radius="md" src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80' style={{ height: '34px', width: '34px' }} alt="it's me" className='cursor-pointer' />
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Applicacion</Menu.Label>
                <Menu.Item icon={<IconSettings size={14} />}>Compras</Menu.Item>
                <Menu.Item icon={<IconMessageCircle size={14} />}>Preguntas</Menu.Item>
                <Menu.Item icon={<IconPhoto size={14} />}>Vender</Menu.Item>
                <Menu.Item
                    icon={<IconSearch size={14} />}
                    rightSection={<Text size="xs" color="dimmed">⌘K</Text>}
                >
                    Mi Perfil
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item color="red" icon={<IconTrash size={14} />}>Salir</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}