import { ManageMenuListTree } from "../organism/Management/ManagementMenuListTree"
import { ManagePageTable } from "../organism/Management/ManagementPageTable"
import { TabLeft, TabRight } from "../atom/Tab"
import { WjHeader } from "../molecule/Header"


export const AdminList = () => {


    return (
        <>
        <WjHeader />
        {/* Tab state로 하위 organ 컴포넌트 전환 */}
        <TabLeft text={"메뉴 관리"} />
        <TabRight text={"페이지 관리"} />
        <div className="w-[1220px] h-auto p-10 rounded-[26px] bg-grayscale-50 border border-grayscale-200 border-dashed">
         <ManageMenuListTree/>
         <ManagePageTable />
        </div>
        </>
    )
}