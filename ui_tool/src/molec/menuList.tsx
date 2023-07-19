import { ReactComponent as ArrowIcon } from '../assets/icon_arrow.svg'
import { ReactComponent as SettingIcon } from '../assets/icon_setting.svg'
import { ReactComponent as CloseIcon } from '../assets/icon_close.svg'

export interface ListInnerData {
    name: string,
}

export const ParentsMenuList = (props: ListInnerData) => {

    return (
        <div className='w-[1150px] h-[70px] pb-0 flex flex-row content-center justify-between items-center border border-grayscale-300 rounded'>
            <div className='w-[70px] h-[70px] items-center justify-center flex border-grayscale-300 border-r'>
                <ArrowIcon />
            </div>
                <p className='ml-[20px] grow text-grayscale-600 text-body2m'>{props.name}</p>
                <div className='w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300'>
                    <SettingIcon />
                </div>
                <div className='w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300'>
                    <CloseIcon />
                </div>
        </div>
    )
}

export const ChildrenMenuList = (props: ListInnerData) => {

    return (
        <div className='w-[1080px] h-[70px] pb-0 flex flex-row content-center justify-between items-center border border-grayscale-300 rounded'>
                <p className='ml-[20px] grow text-grayscale-600 text-body2m'>{props.name}</p>
                <div className='w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300'>
                    <SettingIcon />
                </div>
                <div className='w-[70px] h-[70px] items-center justify-center flex border-l border-grayscale-300'>
                    <CloseIcon />
                </div>
        </div>
    )
}

//액티브 토글 로테이크 90Deg
