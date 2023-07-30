import { ReactNode } from 'react';
import {
  ListChildrenMenu,
  ListParentsMenu,
} from '@molecule/List/ListMenuTwoTypes';
import { ListAddMenu } from '@molecule/List/ListAddMenu';
import type { treeDataProps } from 'types';

const treeData: treeDataProps[] = [
  {
    title: <ListParentsMenu name={'웅진부끄러'} key={'123'} />,
    key: '0-0',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 아기'} key={'123'} />,
    key: '0-0-0',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 도비'} key={'123'} />,
    key: '0-0-1',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 바비'} key={'123'} />,
    key: '0-0-2',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 켄'} key={'123'} />,
    key: '0-0-3',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 저기'} key={'0-0-4'}/>,
    key: '0-0-4',
  },
  {
    title: <ListParentsMenu name={'웅진부끄러'} key={'123'} />,
    key: '0-1',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 아기'} key={'123'} />,
    key: '0-1-0',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 도비'} key={'123'} />,
    key: '0-1-1',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 바비'} key={'123'} />,
    key: '0-1-2',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 켄'} key={'123'} />,
    key: '0-1-3',
  },
  {
    title: <ListChildrenMenu name={'웅진부끄러 저기'} key={'123'} />,
    key: '0-1-4',
  },
];

export const ManageMenuListTree = () => {
  return (
    <>
      <ListAddMenu />
      <div className="w-[1220px] h-auto p-8 rounded-[26px] bg-grayscale-50 border border-grayscale-200 border-dashed">
        <div className="flex flex-col items-end gap-2">
          {treeData.map(({ key, title }) => (
            <div key={key}>{title}</div>
          ))}
        </div>
        
      </div>
    </>
  );
};
