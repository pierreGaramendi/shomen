import { Topbar } from './topbar/topbar'
import { Outlet } from "react-router-dom"
import { MantineProvider } from '@mantine/core';

export const Main = () => {
    return (

        <MantineProvider theme={{ colorScheme: 'dark' }} withGlobalStyles withNormalizeCSS>


            <div className="flex flex-row h-full">
                <main className="content h-full">
                    <Topbar />
                    <div className="content-render h-full">
                        <Outlet />
                    </div>
                </main>
            </div>
        </MantineProvider>
    );
}