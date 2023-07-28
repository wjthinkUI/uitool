import { ReactComponent as ArrowIcon } from '@assets/icon/icon_arrow.svg';
import { ReactComponent as SettingIcon } from '@assets/icon/icon_setting.svg';
import { ReactComponent as CloseIcon } from '@assets/icon/icon_close.svg';
import type { ListInnerData } from 'types';

export const ListParentsMenu = ({ name }: ListInnerData) => {
  return (
    <div className="w-[1150px] h-[70px] pb-0 flex flex-row content-center justify-between items-center bg-grayscale-0 border border-grayscale-300 rounded hover:bg-grayscale-50">
      <div className="w-[70px] h-[70px] items-center justify-center flex border-grayscale-300 border-r">
        <ArrowIcon />
      </div>
      <p className="ml-[20px] grow text-grayscale-600 text-body2m">{name}</p>
      <div className="w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300">
        <SettingIcon />
      </div>
      <div className="w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300">
        <CloseIcon />
      </div>
    </div>
  );
};

export const ListChildrenMenu = ({ name }: ListInnerData) => {
  return (
    <div className="w-[1080px] h-[70px] pb-0 flex flex-row content-center justify-between items-center bg-grayscale-0 border border-grayscale-300 rounded hover:bg-grayscale-50">
      <p className="ml-[20px] grow text-grayscale-600 text-body2m">{name}</p>
      <div className="w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300">
        <SettingIcon />
      </div>
      <div className="w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300">
        <CloseIcon />
      </div>
    </div>
  );
};

//액티브 토글 로테이크 90Deg
