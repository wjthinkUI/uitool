import { EditAddBlockHereTop, EditAddBlockHereBottom } from "@molecule/Edit/EditAddBlockHere"
import { EditGroupContainer } from "@molecule/Edit/EditGroupContainer"

export const EditTestBlock = () => {

    return (
        <EditGroupContainer>
            <EditAddBlockHereTop onClick={() => console.log('click')}/>
            <p className="w-[100%] h-[300px] text-center bg-lime-700 ">Test Block</p>
            <EditAddBlockHereBottom onClick={() => console.log('click')}/>
        </EditGroupContainer>
    )
}