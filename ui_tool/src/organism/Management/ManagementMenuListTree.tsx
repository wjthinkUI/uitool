import {
  ListChildrenMenu,
  ListParentsMenu,
} from '@molecule/List/ListMenuTwoTypes';
import { ListAddMenu } from '@molecule/List/ListAddMenu';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';

//타입 any 많음 -> 수정 필요
export const ManageMenuListTree = () => {
  const menuData = useSelector((state: any) => state.navigations);

  const menuDataMappingFlat = (menuData: any) => {    
    const result: any[] = [];
    menuData?.forEach((menuData: any) => {
      if (menuData.category.isParent) {
        result.push(menuData.category);
      }
      if (menuData.category.children.length > 0) {
        menuData.category.children.forEach((child: any) => {
          result.push(child);
        });
      }
    });
    return result
  }
  const mappingmenuData = useMemo(() => menuDataMappingFlat(menuData), [menuData]);  
  
  return (
    <>
      <ListAddMenu />
      <div className="w-[1220px] h-auto p-8 rounded-[26px] bg-grayscale-50 border border-grayscale-200 border-dashed">
        <div className="flex flex-col items-end gap-2">
          {mappingmenuData.map((value, index) => (
            (value.isParent) ? (<ListParentsMenu key={index} id={value.id} title={value.name} path={value.children[0].path} category={value.name} date={value.date} isParent={value.isParent} />) : (<ListChildrenMenu key={index} id={value.idx} title={value.name} path={value.path} category={value.name} date={value.date} isParent={value.isParent} />))
          )}
        </div>
      </div>
    </>
  );
};

//ListInnermenuData 타입 지정 다시하기 0801
//(<ListChildrenMenu key={key} title={title} path={path} category={category} date={date} isParent={isParent}