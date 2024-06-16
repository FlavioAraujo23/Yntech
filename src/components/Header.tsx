import React from 'react';
import Filter from './Filter';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Search from './icons/Search';

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  return (
    <header>
      <div className="w-full flex justify-between items-center p-9 border-b border-gray-200 bg-[#500E7F]">
        {!isHome && (
          <button className="rounded-full w-10 h-10 p-1 bg-white shadow-[0px 0px 4px 0px #00000040]">
            <img
              src="./arrow-left.svg"
              alt="arrow left icon"
              width={25}
              height={24}
            />
          </button>
        )}
        <div className=" w-screen flex-1 flex justify-center">
          <span
            className={`text-white text-center text-2xl font-bold ${
              isMobile ? 'hidden' : 'block'
            }`}
          >
            Yntech News
          </span>
          {isMobile && (
            <span className="text-white text-2xl font-bold text-center">
              Geral
            </span>
          )}
        </div>
        <div
          className={
            isMobile
              ? ''
              : 'bg-[#360B54] w-56 h-[38px] flex items-center justify-end rounded-[14px]'
          }
        >
          <Search isMobile={isMobile} className={isMobile ? '' : 'mr-3'} />
        </div>
      </div>
      <Filter />
    </header>
  );
};

export default Header;
