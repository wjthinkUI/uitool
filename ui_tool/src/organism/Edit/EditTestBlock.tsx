import { EditAddBlockHereTop, EditAddBlockHereBottom } from "@molecule/Edit/EditAddBlockHere"
import { EditGroupContainer } from "@molecule/Edit/EditGroupContainer"
import { EditToolsBox } from "@molecule/Edit/EditToolsBox"
export const EditTestBlock = () => {

    return (
        <EditGroupContainer>
            <EditAddBlockHereTop onClick={() => console.log('click')}/>
            <p className="w-[100%] h-[300px] text-center bg-lime-700 ">Test Block</p>
            <EditToolsBox block_id={1}/>
            <EditAddBlockHereBottom onClick={() => console.log('click')}/>
        </EditGroupContainer>
    )
}