import { Tree } from "antd"
import type { DataNode, DirectoryTreeProps } from "antd/es/tree"
import { List } from "../molec/list"

const treeData: DataNode[] = [
    {
        title: <List name={"뱌뱌뱌"} date={"2020202020"} query={"/1234"}/>,
        key: '0-0',
        children: [
            {
                title: <List name={"뱌뱌뱌앳큥"} date={"2020202020"} query={"/1234/1"}/>,
                key: '0-0-0',
            },
            {
                title: <List name={"뱌뱌뱌앳챵"} date={"2020202020"} query={"/1234/2"}/>,
                key: '0-0-1',
            },
            {
                title: <List name={"뱌뱌뱌애치"} date={"2020202020"} query={"/1234/3"}/>,
                key: '0-0-2',
            },
            {
                title: <List name={"뱌뱌뱌바바"} date={"2020202020"} query={"/1234/4"}/>,
                key: '0-0-3',
            },
            {
                title: <List name={"뱌뱌뱌날봐"} date={"2020202020"} query={"/1234/5"}/>,
                key: '0-0-4',
            },
        ]
    }
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