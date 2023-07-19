import { ManagePageTable } from "../organ/managePageTable"
import { MenuListTree } from "../organ/menuListTree"
import { TabLeft, TabRight } from "../atom/Tab"


export const AdminList = () => {


    return (
        <div className="w-[1220px] h-[1704px] rounded-[26px] bg-grayscale-50 border border-grayscale-200 border-dashed">
        {/* Tab state로 하위 organ 컴포넌트 전환 */}
        <TabLeft text={"메뉴 관리"} />
        <TabRight text={"페이지 관리"} />
         <MenuListTree/>
         <ManagePageTable />
        </div>
    )
}