import { AdabtiveTab } from '@molecule/Edit/EditAdabtiveTab';
import {
  useParams,
  useLoaderData,
  Await,
  useFetcher,
  json,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EditPageDataType } from 'types';
import { GridContainer } from '@atom/public/GridContainer';
import { Image1 } from '@atom/Edit/Image1';
import { Image2 } from '@atom/Edit/Image2';
import { Image3 } from '@atom/Edit/Image3';
import { Image4 } from '@atom/Edit/Image4';
import { ImageCustom } from '@atom/Edit/ImageCustom';
import { Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@store/store';
export const EditPage = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
  const { id } = useParams();
  const { data }: any = useLoaderData(); //promise, page type
  console.log('loadedData', data);
  const dispatch = useDispatch<AppDispatch>();
  const initialState: EditPageDataType = {
    key: id,
    title: 'asd',
    page: `/${id}`,
    date: Date(),
    layout: [],
  };
  const [editPageData, setEditPageData] =
    useState<EditPageDataType>(initialState);

  useEffect(() => {
    editPageData;
    console.log('updated!', editPageData);
  }, [editPageData]);

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName);
  };
  const { layout } = editPageData;
  return (
    <Suspense
      fallback={
        <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-screen h-screen backdrop-brightness-90">
          <div className="border-8 border-solid rounded-full border-primary-950 w-96 h-96 animate-spin border-t-transparent" />
        </div>
      }
    >
      <Await resolve={data}>
        <div className="w-[100vw] h-auto">
          <AdabtiveTab onTabChange={handleTabChange} />
          <GridContainer
            deviceWidth={
              activeTab === 'desktop'
                ? 1220
                : activeTab === 'tablet'
                ? 785
                : activeTab === 'mobile'
                ? 375
                : 0
            }
          >
            <p>{JSON.stringify(editPageData, null, 2)}</p>
            {layout.map((v: any, i: any) => (
              <p key={i}>{v.id}</p>
            ))}
            <ImageCustom />
            <Image2 />
            <Image1 height="auto" />
            <Image3 />
            <Image4 />
          </GridContainer>
        </div>
      </Await>
    </Suspense>
  );
};
