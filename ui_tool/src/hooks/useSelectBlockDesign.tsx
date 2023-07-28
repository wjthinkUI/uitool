import { useState, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
import { ImageContent } from '@molecule/Modal/ModalBlockDesign/ImageContent';
import { LineContent } from '@molecule/Modal/ModalBlockDesign/LineContent';
import { ListContent } from '@molecule/Modal/ModalBlockDesign/ListContent';
import { TextContent } from '@molecule/Modal/ModalBlockDesign/TextContent';
import { TableContent } from '@molecule/Modal/ModalBlockDesign/TableContent';
import { LayoutContent } from '@molecule/Modal/ModalBlockDesign/LayoutContent';
import type { BlockDesignMap } from 'types';

export const useSelectBlockDesign = () => {
  const selectedType = useSelector(
    (state: RootState) => state.sidebar.selectItem
  );
  const [selectedDesign, setSelectedDesign] = useState<ReactNode>(null);

  useEffect(() => {
    const data = blockDesignData.find((el) => el.type === selectedType);
    setSelectedDesign(data?.element());
  }, [selectedType]);

  return { selectedDesign, selectedType, sidebarInfo };
};

const blockDesignData: BlockDesignMap[] = [
  {
    id: 1,
    type: 'image',
    name: '이미지',
    element() {
      return <ImageContent />;
    },
  },
  {
    id: 2,
    type: 'line',
    name: '구분선',
    element() {
      return <LineContent />;
    },
  },
  {
    id: 3,
    type: 'list',
    name: '목록',
    element() {
      return <ListContent />;
    },
  },
  {
    id: 4,
    type: 'text',
    name: '텍스트',
    element() {
      return <TextContent />;
    },
  },
  {
    id: 5,
    type: 'table',
    name: '표',
    element() {
      return <TableContent />;
    },
  },
  {
    id: 6,
    type: 'layout',
    name: '레이아웃',
    element() {
      return <LayoutContent />;
    },
  },
];

const sidebarInfo = blockDesignData.map((el) => ({
  id: el.id,
  type: el.type,
  name: el.name,
}));
