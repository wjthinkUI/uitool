import { NavLink } from 'react-router-dom';
import type { TapProps } from 'types';

export const AdminManageTab = ({ LeftText, RightText, LeftTo, RightTo }: TapProps) => {
    const tabStyle = {
    active: `text-grayscale-50 bg-primary-950`,
    inactive: `text-grayscale-950 bg-primary-50`,
  };
    const { active, inactive } = tabStyle;
  return (
    <div className='w-[1220px] flex'>
    {/* Left */}
    <NavLink
      to={LeftTo}
      className={({ isActive }) => `${isActive ? active : inactive} w-[50%] h-16 rounded-l-[10px] font-bold text-center border border-grayscale-100 px-10 py-5`}
      >
      {LeftText}
    </NavLink>
    {/* Right */}
    <NavLink
    to={RightTo}
    className={({ isActive }) => `${isActive ? active : inactive} w-[50%] h-16 rounded-r-[10px] font-bold text-center border border-grayscale-100 px-10 py-5`}
    >
    {RightText}
  </NavLink> 
  </div>
  )
}