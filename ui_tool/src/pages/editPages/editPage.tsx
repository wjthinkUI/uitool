import { AdabtiveTab } from '@molecule/Edit/EditAdabtiveTab';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { EditPageDataType } from 'types';
import { GridContainer } from '@atom/public/GridContainer';
import { Image1 } from '@atom/Edit/Image1';

export const EditPage = () => {
  const [activeTab, setActiveTab] = useState<string>('desktop');
  const { id } = useParams();
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
    <div className='w-[100vw] h-auto'>
        <AdabtiveTab onTabChange={handleTabChange}/>
        <GridContainer deviceWidth={activeTab === 'desktop' ? 1220 : activeTab === 'tablet' ? 785 : activeTab === 'mobile' ? 375 : 0}>
        <p>{JSON.stringify(editPageData, null, 2)}</p>
        {layout.map((v: any, i: any) => (
          <p key={i}>{v.id}</p>
        ))}
        <Image1 />
        </GridContainer>
    </div>
  );
};
