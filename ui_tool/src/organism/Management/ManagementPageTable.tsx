import { useState, SetStateAction, useEffect } from 'react';
import { Input, ConfigProvider, Pagination } from 'antd';
import { ListPage } from '@molecule/List/ListPages';
import { ListHeader } from '@molecule/List/ListHeader';
import type { DataType } from 'types';
import { RootState } from '@store/store';
import { useSelector } from 'react-redux';
import { Space, Spin } from 'antd';
interface State {
  id: number;
  title: string;
  path: string;
  category: string;
  date: string;
}
export const ManagePageTable = () => {
  const pageData = useSelector((state: RootState) => state.pagesinfo);
  const [data, setData] = useState<State[]>(pageData);
  const [current, setCurrent] = useState(1);
  const { Search } = Input;

  useEffect(() => {
    setData(() => pageData);
  }, [pageData, setData]);

  const onSearch = (value: string) => {
    const searchData: SetStateAction<DataType[]> = [];
    if (value.length > 1) {
      pageData.map((v: any) => {
        if (v.title.split(value).length > 1) {
          searchData.push(v);
        }
      });
      setData(searchData);
    } else {
      setData(pageData);
    }
  };
  const pageChange = (current: number) => {
    setData(() => data.slice((current - 1) * 10, current * 10));
  };
  useEffect(() => {
    pageChange(current);
  }, [current]);

  return (
    <>
      {!data && (
        <Space size="middle">
          <Spin size="large" />
        </Space>
      )}
      {data && Array.isArray(data) && (
        <>
          <ConfigProvider
            theme={{
              token: {
                borderRadius: 10,
                colorFillAlter: '#fff',
              },
            }}
          >
            <div className="flex justify-end m-3">
              <Search
                placeholder="페이지명"
                allowClear
                style={{ width: 245 }}
                size="large"
                onSearch={onSearch}
              />
            </div>
          </ConfigProvider>
          <ListHeader />
          {data.map(({ id, title, path, category, date }) => (
            <ListPage
              key={id}
              id={id}
              title={title}
              date={date}
              path={path}
              category={category}
            />
          ))}
          <Pagination
            onChange={(page) => setCurrent(page)}
            defaultCurrent={1}
            total={pageData.length}
          />
        </>
      )}
    </>
  );
};
