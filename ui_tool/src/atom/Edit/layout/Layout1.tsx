//Component for dividing the edit block into two parts
/**
 * edit block을 두 부분으로 나누는 component
 * div를 flex로 나누어서 구현
 * div 1/2, div 1/2
 * div > edit block / div > edit block
 * 
 */
import { EditAddSelectDesign } from "@molecule/Edit/EditAddSelectDesign"


export const Layout1 = (children: any) => {
    return (
        <div className="flex flex-row w-full h-full gap-5 p-10">
            <div className="w-1/2 h-full bg-red-500">
                <EditAddSelectDesign key={0} block_id={0} />
            </div>
            <div className="w-1/2 h-full bg-yellow-500">
                <EditAddSelectDesign key={1} block_id={1} />
            </div>
        </div>
    )
}
