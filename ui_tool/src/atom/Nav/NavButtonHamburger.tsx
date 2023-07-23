import { useState } from 'react';
export const NavButtonHamburger = () => {
  const [color, setColor] = useState('#B3B3B3');

  return (
    <button
      className="h-fit"
      onMouseEnter={() => {
        setColor('#EE7D00');
      }}
      onMouseLeave={() => setColor('#B3B3B3')}
    >
      <Hamburger color={color} />
    </button>
  );
};

interface HamburgerProps {
  color: string;
}

const Hamburger = ({ color }: HamburgerProps) => {
  return (
    <svg
      width="60"
      height="64"
      viewBox="0 0 60 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="64" fill={color} />
      <rect x="14" y="19" width="34" height="5" rx="2.5" fill="white" />
      <rect x="14" y="39" width="34" height="5" rx="2.5" fill="white" />
      <rect x="14" y="29" width="34" height="5" rx="2.5" fill="white" />
    </svg>
  );
};
