import { ReactComponent as IconDesktop } from '@assets/icon/icon_desktop.svg';
import { ReactComponent as IconTablet } from '@assets/icon/icon_tablet.svg';
import { ReactComponent as IconMobile } from '@assets/icon/icon_mobile.svg';
import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSubmit } from 'react-router-dom';
import type { AdabtiveTabProps } from 'types';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

export const AdabtiveTab = ({ onTabChange }: AdabtiveTabProps) => {
  const tabStyle = {
    active:
      'w-[76px] h-[63px] flex items-center justify-center bg-grayscale-900',
    pending:
      'w-[76px] h-[63px] flex items-center justify-center bg-grayscale-600 hover:bg-grayscale-700',
  };
  const { active, pending } = tabStyle;
  const [currentTab, setCurrentTab] = useState<string>('desktop');
  const handleClick = (tabName: string) => {
    setCurrentTab(tabName);
    onTabChange(tabName);
  };
  const { id } = useParams();
  const location = useLocation();

  const pageData = useSelector((state: RootState) => state.editPage);
  const submit = useSubmit();
  const handlePageSubmit = () => {
    const url = location.pathname;

    submit(pageData, {
      method: 'POST',
      action: url, // 메뉴관리 페이지관리에서 사용하도록 url설정
      encType: 'application/json',
    });
  };
  return (
    <div className="relative w-screen ">
      <div className="flex flex-row justify-center bg-grayscale-600">
        <div
          className={currentTab === 'desktop' ? active : pending}
          onClick={() => handleClick('desktop')}
        >
          <IconDesktop />
        </div>
        <div
          className={currentTab === 'tablet' ? active : pending}
          onClick={() => handleClick('tablet')}
        >
          <IconTablet />
        </div>
        <div
          className={currentTab === 'mobile' ? active : pending}
          onClick={() => handleClick('mobile')}
        >
          <IconMobile />
        </div>
      </div>
      <div className="absolute right-0 inline-block mr-5 top-1 w-fit h-fit">
        <button
          className="w-[120px] h-[55px] text-primary-600 bg-grayscale-500 rounded-lg text-body1r hover:text-primary-950"
          onClick={handlePageSubmit}
        >
          적용하기
        </button>
      </div>
    </div>
  );
};
