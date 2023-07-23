import { NavLinkCustom } from '@atom/Nav/NavLinkCustom';
import { NavButtonHamburger } from '@atom/Nav/NavButtonHamburger';
import { NavButtonSearch } from '@atom/Nav/NavButtonSearch';

const DUMMY_NAV = [
  {
    title: '교육 서비스',
    path: '/',
  },
  {
    title: '웅진씽크빅',
    path: '/test',
  },
  {
    title: '웅진북클럽',
    path: '/adminlist',
  },
  {
    title: '웅진스마트올',
    path: '/4',
  },
  {
    title: '출판/e러닝',
    path: '/5',
  },
  {
    title: '이벤트/혜택',
    path: '/6',
  },
];

export const NavBottom = () => {
  return (
    <nav>
      <ul className="inline-flex">
        {DUMMY_NAV.map((el, idx) => (
          <li key={idx}>
            <NavLinkCustom title={el.title} to={el.path} end />
          </li>
        ))}
        <li>
          <NavButtonHamburger />
        </li>
        <li>
          <NavButtonSearch />
        </li>
      </ul>
    </nav>
  );
};
