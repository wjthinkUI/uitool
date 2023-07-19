import { ManagePageTable } from "../organ/managePageTable"
import { MenuListTree } from "../organ/menuListTree"
import { TabLeft, TabRight } from "../atom/Tab"
import { WjHeader } from "../molec/header"


export const AdminList = () => {


    return (
        <>
        <WjHeader />
        {/* Tab state로 하위 organ 컴포넌트 전환 */}
        <TabLeft text={"메뉴 관리"} />
        <TabRight text={"페이지 관리"} />
        <div className="w-[1220px] h-auto p-10 rounded-[26px] bg-grayscale-50 border border-grayscale-200 border-dashed">
         <MenuListTree/>
         <ManagePageTable />
        </div>
        </>
    )
}