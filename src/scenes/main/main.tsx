import { Topbar } from './topbar/topbar'
import { Outlet } from "react-router-dom"

export const Main = () => {
    return (
            <div className="flex flex-row h-full">
                <main className="content h-full">
                    <Topbar />
                    <div className="content-render h-full">
                        <Outlet />
                    </div>
                </main>
            </div>
    );
}