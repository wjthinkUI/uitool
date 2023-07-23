import { NavLink } from 'react-router-dom';
interface NavLinkProps {
  title: string;
  to: string;
  end?: boolean | undefined;
}

export const NavLinkCustom = ({ title, to, end }: NavLinkProps) => {
  const defaultClasses =
    'w-[177px] h-[64px] inline-flex items-center justify-center text-body2B';
  const active = 'rounded-[10px] bg-primary-950 text-grayscale-0';
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? `${defaultClasses} ${active}` : `${defaultClasses}`
      }
      end={end}
    >
      {title}
    </NavLink>
  );
};
