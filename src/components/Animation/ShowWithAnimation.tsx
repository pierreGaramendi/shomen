import { useDelayUnmount, mountedStyle, unmountedStyle } from "./useDelayUnmount";

export const ShowWithAnimation = ({ children, isMounted }: any) => {
    const showDiv = useDelayUnmount(isMounted, 50);
    return (
        <div>
            {
                showDiv && (
                    <div style={isMounted ? mountedStyle : unmountedStyle}>{children}</div>
                )
            }
        </div>
    );
}