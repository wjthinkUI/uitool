import { ReactComponent as IconMaginStick } from '@assets/icon_magicStick.svg'

interface AddBlock {
    onClick: (event: React.MouseEvent<HTMLElement>) => void
}

export const EditAddSelectDesign = ({onClick}: AddBlock) => {

    return (
        <div onClick={onClick} className="h-[160px] flex flex-col bg-grayscale-50 text-grayscale-400 items-center justify-center border-dashed border-t-2 border-grayscale-800 hover:bg-gray-200">
            <IconMaginStick />
            디자인을 선택하세요
        </div>
    )
}