import { NavLinkCustom } from '@atom/Nav/NavLinkCustom';
import { NavButtonHamburger } from '@atom/Nav/NavButtonHamburger';
import { NavButtonSearch } from '@atom/Nav/NavButtonSearch';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

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
    path: '/test3',
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
  const navigation = useSelector((state: RootState) => state.navigations);
  return (
    <nav>
      <ul className="inline-flex">
        {DUMMY_NAV.map((el, idx) => (
          <li key={idx}>
            <NavLinkCustom title={el.title} to={el.path} end />
          </li>
        ))}
        {/* {navigation.map((item, idx) => (
          <li key={idx}>
            <NavLinkCustom
              title={item.category.name}
              to={item.category.path}
              end
            />
          </li>
        ))} */}
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
