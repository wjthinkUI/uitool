import { ListPage, ListProps } from "../../molecule/List/ListPages";
import { ListHeader } from "../../molecule/List/ListHeader";
import { Input, ConfigProvider, Pagination } from "antd";
import { useState, SetStateAction } from 'react';

interface DataType extends ListProps {
    key: React.Key;
}

/** fetching data로 대체할 것 */
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
        name: "내게",
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
    },
    {
        key: 7,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/1",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    },
    {
        key: 8,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/2",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    },
    {
        key: 9,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/3",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 10,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/4",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 11,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/5",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 12,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/6",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 13,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/7",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 14,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/1",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    },
    {
        key: 15,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/2",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    },
    {
        key: 16,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/3",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 17,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/4",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 18,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/5",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 19,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/6",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }, {
        key: 20,
        name: "내게 맞는 북클럽 찾기",
        query: "/page/7",
        menu: '웅진북클럽',
        date: "2022-09-23 16.35.09",
    }
]

export const ManagePageTable = () => {
    const [datas, setDatas] = useState(pageData);

    const { Search } = Input;
    const onSearch = (value: string) => {
        const searchDatas: SetStateAction<DataType[]> = [];
        if (value.length > 1) {
            pageData.map((v) => {
                if (v.name.split(value).length > 1) {
                    searchDatas.push(v)
                }
            })
            setDatas(searchDatas)
        } else {
            setDatas(pageData);
        }
    }
    const pageChange = (page: number) => {
        setDatas(pageData.slice((page-1)*10, page*10))
    }

    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        borderRadius: 10,
                        colorFillAlter: '#fff',
                    }
                }}
            >
                <Search
                    placeholder="페이지명"
                    allowClear
                    style={{ width: 200 }}
                    size="large"
                    onSearch={onSearch}
                />
            </ConfigProvider>
            <ListHeader />
            {datas.map(({ key, name, query, menu, date }) => <ListPage key={key} name={name} date={date} query={query} menu={menu} />)}
            <Pagination onChange={page => pageChange(page)} defaultCurrent={1} total={pageData.length} />
        </>
    )
}