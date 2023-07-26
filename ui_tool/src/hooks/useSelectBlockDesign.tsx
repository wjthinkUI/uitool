import { Table } from '@atom/Modal/Table';
import { useState, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
interface BlockDesignMap {
  id: number;
  type: string;
  name: string;
  element: () => JSX.Element;
}

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
      return <div>이미지</div>;
    },
  },
  {
    id: 2,
    type: 'line',
    name: '구분선',
    element() {
      return <div>구분선</div>;
    },
  },
  {
    id: 3,
    type: 'list',
    name: '목록',
    element() {
      return <div>리스트</div>;
    },
  },
  {
    id: 4,
    type: 'text',
    name: '텍스트',
    element() {
      return <div>텍스트</div>;
    },
  },
  {
    id: 5,
    type: 'table',
    name: '표',
    element() {
      return <Table />;
    },
  },
  {
    id: 6,
    type: 'layout',
    name: '레이아웃',
    element() {
      return <div>레이아웃</div>;
    },
  },
];

const sidebarInfo = blockDesignData.map((el) => ({
  id: el.id,
  type: el.type,
  name: el.name,
}));
