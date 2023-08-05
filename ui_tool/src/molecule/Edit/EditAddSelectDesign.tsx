import { ReactComponent as IconMaginStick } from '@assets/icon/icon_magicStick.svg'
import type { AddBlock } from 'types'
import { useEffect, useState } from 'react'
import { ModalBlockDesign } from '@organism/Modal/ModalBlockDesign'

export const EditAddSelectDesign = (index:number) => {
    const [modal, setModal] = useState(false)
    const showModal = () => {
        setModal(true)
    }
    const closeModal = () => {
        setModal(false);
      };

      useEffect(() => {
        console.log(modal)
        }, [modal])

    return (
        <div onClick={showModal} className="h-[160px] select-none flex flex-col bg-grayscale-50 text-grayscale-400 items-center justify-center border-dashed border-t-2 border-grayscale-800 hover:bg-gray-200">
            <IconMaginStick />
            디자인을 선택하세요
            {(modal) ? <ModalBlockDesign blockIndex={index} closeModal={closeModal}/>:null}
        </div>
    )
}