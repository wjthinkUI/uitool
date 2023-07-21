import { ManageMenuListTree } from "../../organism/Management/ManagementMenuListTree"
import { ManagePageTable } from "../../organism/Management/ManagementPageTable"
import { TabLeft, TabRight } from "../../atom/Tab"
import { WjHeader } from "../../molecule/Header"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"

export const AdminManageList = () => {
    const activeTab = useSelector((state: RootState) => state.tab.activeTab)

    return (
        <div className="w-[1220px] h-auto">
            <WjHeader />
            {/* Tab state로 하위 organ 컴포넌트 전환 */}
            <TabLeft text={"메뉴 관리"} />
            <TabRight text={"페이지 관리"} />
            <div>
                {activeTab === 0 ?
                    <ManageMenuListTree />
                    :
                    <ManagePageTable />
                }
            </div>
        </div>
    )
}