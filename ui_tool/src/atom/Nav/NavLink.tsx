import { NavLink } from 'react-router-dom';

export const Nav = () => {
  return (
    <nav>
      {DUMMY_NAV.map((nav, idx) => (
        <NavLink to={nav.path} key={idx}>
          {nav.title}
        </NavLink>
      ))}
    </nav>
  );
};
