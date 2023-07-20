import { ReactNode } from "react"
import { ListChildrenMenu, ListParentsMenu } from "../molecule/List/ListMenuTwoTypes"

interface treeDataProps {
        title: ReactNode,
        key: string,
}

const treeData: treeDataProps[] = [
    {
        title: <ListParentsMenu name={'웅진부끄러'} />,
        key: '0-0',
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 아기'}/>,
        key: '0-0-0'
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 도비'}/>,
        key: '0-0-1'
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 바비'}/>,
        key: '0-0-2'
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 켄'}/>,
        key: '0-0-3'
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 저기'}/>,
        key: '0-0-4'
    },
    {
        title: <ListParentsMenu name={'웅진부끄러'} />,
        key: '0-1',
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 아기'}/>,
        key: '0-1-0'
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 도비'}/>,
        key: '0-1-1'
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 바비'}/>,
        key: '0-1-2'
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 켄'}/>,
        key: '0-1-3'
    },
    {
        title: <ListChildrenMenu name={'웅진부끄러 저기'}/>,
        key: '0-1-4'
    },
]

export const MenuListTree = () => {

    return (
        <div className="flex flex-col items-end gap-2">
            {treeData.map((v) => <div key={v.key}>{v.title}</div>)}
        </div>
    )
}