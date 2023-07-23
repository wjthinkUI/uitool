import { NavLink } from "react-router-dom"
import { ReactComponent as IconDesktop } from '@assets/icon_desktop.svg';
import { ReactComponent as IconTablet } from '@assets/icon_tablet.svg';
import { ReactComponent as IconMobile } from '@assets/icon_mobile.svg';

export const AdabtiveTab = () => {

    const tabStyle = {
        active: 'w-[76px] h-[63px] flex items-center justify-center bg-grayscale-900',
        pending: 'w-[76px] h-[63px] flex items-center justify-center bg-grayscale-600'
    }
    const { active, pending } = tabStyle;

    return (
        <>
            <div className="flex flex-row justify-center bg-grayscale-600">
                <NavLink to='#' className={({ isActive }) => isActive ? active : pending
                } >
                    <IconDesktop />
                </NavLink>
                <NavLink to='/' className={({ isActive }) => isActive ? active : pending
                } >
                    <IconTablet />
                </NavLink>
                <NavLink to='/' className={({ isActive }) => isActive ? active : pending
                } >
                    <IconMobile />
                </NavLink>
            </div>
        </>
    )
}