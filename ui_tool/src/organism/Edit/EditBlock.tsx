import { EditAddBlockHereTop, EditAddBlockHereBottom } from "@molecule/Edit/EditAddBlockHere"
import { EditGroupContainer } from "@molecule/Edit/EditGroupContainer"
import { EditToolsBox } from "@molecule/Edit/EditToolsBox"
import { ReactNode, useState } from "react"

interface EditBlockProps {
    children: ReactNode
    onClickTop: () => void
    onClickBottom: () => void
    index: number
}
export const EditBlock = ({children, onClickTop, onClickBottom, index}:EditBlockProps) => {
    const [modal, setModal] = useState(false)

console.log(index)
    return (
        <EditGroupContainer>
            <EditAddBlockHereTop onClick={onClickTop}/>
            <p className="w-[100%] h-auto text-center ">
                {children}
            </p>
            <EditToolsBox block_id={index}/>
            <EditAddBlockHereBottom onClick={onClickBottom}/>
        </EditGroupContainer>
    )
}