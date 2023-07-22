import { useState } from 'react';
export const NavButtonSearch = () => {
  const [color, setColor] = useState('#808080');

  return (
    <button
      className="h-fit"
      onMouseEnter={() => {
        setColor('#EE7D00');
      }}
      onMouseLeave={() => setColor('#808080')}
    >
      <Search color={color} />
    </button>
  );
};

interface SearchProps {
  color: string;
}

const Search = ({ color }: SearchProps) => {
  return (
    <svg
      width="60"
      height="64"
      viewBox="0 0 60 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="60" height="64" fill={color} />
      <path
        d="M37.9307 36.9263H36.3551L35.7967 36.3881C38.1899 33.5977 39.4264 29.7907 38.7484 25.7445C37.811 20.2035 33.1841 15.7786 27.5999 15.1009C19.1638 14.0645 12.0639 21.1602 13.101 29.5914C13.779 35.1723 18.2065 39.7965 23.7508 40.7333C27.7994 41.4109 31.6086 40.1752 34.4007 37.7834L34.9391 38.3414V39.9161L43.4151 48.3871C44.2328 49.2043 45.569 49.2043 46.3867 48.3871C47.2044 47.5699 47.2044 46.2345 46.3867 45.4172L37.9307 36.9263ZM25.9645 36.9263C20.9986 36.9263 16.99 32.92 16.99 27.957C16.99 22.9939 20.9986 18.9876 25.9645 18.9876C30.9305 18.9876 34.9391 22.9939 34.9391 27.957C34.9391 32.92 30.9305 36.9263 25.9645 36.9263Z"
        fill="white"
      />
    </svg>
  );
};
