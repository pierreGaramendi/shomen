import { MySidebar } from "./Sidebar/sidebar"
import { Menu } from "./Sidebar/data/sidebar-data"
import { Topbar } from './topbar/topbar'
import { Outlet } from "react-router-dom"

export const Main = () => {
    return (
        <div className="flex flex-row h-full">
            <MySidebar menu={Menu} />
            <main className="content">
                <Topbar />
                <div className="content-render">
                    <Outlet />
                </div>
            </main>
            </div>
    );
}