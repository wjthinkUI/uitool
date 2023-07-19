import { Tree } from "antd"
import type { DataNode, DirectoryTreeProps } from "antd/es/tree"
import { List } from "../molec/list"

const treeData: DataNode[] = [
]

export const MenuListTree = () => {

    return (
        <div className="w-[1220px] h-[1704px] rounded-[26px] bg-grayscale-50 border border-grayscale-200 border-dashed w-[60vw]">
            <Tree 
                treeData={treeData}
            />
        </div>
    )
}