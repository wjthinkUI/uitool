import { ListPage, ListProps } from "../molecule/List/ListPages";
import { ListHeader } from "../molecule/List/ListHeader";

interface DataType extends ListProps {
    key: React.Key;
}

const pageData: DataType[] = [
    {
        key: 0,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/1",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    },
    {
        key: 1,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/2",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    },
    {
        key: 2,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/3",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 3,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/4",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 4,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/5",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 5,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/6",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 6,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/7",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }
]

export const ManagePageTable = () => {

    return (
        <>
        <ListHeader />
        {pageData.map((v) => <ListPage key={v.key} name={v.name} date={v.date} query={v.query} menu={v.menu} />)}
        </>
    )
}