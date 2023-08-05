import { EditAddBlockHereTop, EditAddBlockHereBottom } from "@molecule/Edit/EditAddBlockHere"
import { EditGroupContainer } from "@molecule/Edit/EditGroupContainer"
import { EditToolsBox } from "@molecule/Edit/EditToolsBox"
import { ReactNode } from "react"

interface EditBlockProps {
    children: ReactNode
    onClickTop: () => void
    onClickBottom: () => void
}
export const EditBlock = ({children, onClickTop, onClickBottom}:EditBlockProps) => {

    return (
        <EditGroupContainer>
            <EditAddBlockHereTop onClick={onClickTop}/>
            <p className="w-[100%] h-auto text-center ">
                {children}
            </p>
            <EditToolsBox block_id={1}/>
            <EditAddBlockHereBottom onClick={onClickBottom}/>
        </EditGroupContainer>
    )
}