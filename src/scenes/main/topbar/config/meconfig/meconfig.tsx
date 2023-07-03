import avatar from '../../../../../assets/avatar.svg';
import './meconfig.css'
import useComponentVisible from '../../../../../hooks/useComponentVisible'
const Meconfig = () => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const handleClickAvatar = () => {
        setIsComponentVisible(true)
    }
    return (
        <div className="flex flex-col items-center md:order-2 relative" ref={ref} onClick={handleClickAvatar}>
            <button type="button" className="avatar-user-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span className="sr-only">Open user menu</span>
                <img className="w-8 h-8 rounded-full" src={avatar} alt="user photo" />
            </button>
            <div id="user-dropdown" className={`avatar-user-list ${(isComponentVisible) ? "block" : "hidden"}`}>
                <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green Green Green</span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                        <a href="#" className="avatar-user-list-item">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="avatar-user-list-item">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="avatar-user-list-item">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="avatar-user-list-item">Sign out</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Meconfig;