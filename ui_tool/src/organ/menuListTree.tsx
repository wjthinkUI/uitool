import { Tree } from "antd"
import type { DataNode } from "antd/es/tree"
import { ChildrenMenuList, ParentsMenuList } from "../molec/menuList"


const treeData: DataNode[] = [
    {
        title: <ParentsMenuList name={'웅진부끄러'} />,
        key: '0-0',
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 아기'}/>,
        key: '0-0-0'
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 도비'}/>,
        key: '0-0-1'
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 바비'}/>,
        key: '0-0-2'
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 켄'}/>,
        key: '0-0-3'
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 저기'}/>,
        key: '0-0-4'
    },
    {
        title: <ParentsMenuList name={'웅진부끄러'} />,
        key: '0-0',
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 아기'}/>,
        key: '0-0-0'
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 도비'}/>,
        key: '0-0-1'
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 바비'}/>,
        key: '0-0-2'
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 켄'}/>,
        key: '0-0-3'
    },
    {
        title: <ChildrenMenuList name={'웅진부끄러 저기'}/>,
        key: '0-0-4'
    },
]

export const MenuListTree = () => {

    return (
        <div className="flex flex-col items-end">
            <Tree 
                treeData={treeData}
            />
        </div>
    )
}