import { Table } from '@atom/Modal/Table';
import { useState, useCallback, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@store/store';
interface BlockDesignMap {
  [key: string]: () => JSX.Element;
}
type DesignType =
  | string
  | 'image'
  | 'line'
  | 'list'
  | 'text'
  | 'table'
  | 'layout';

export const useSelectBlockDesign = () => {
  const type = useSelector((state: RootState) => state.sidebar.selectItem);
  const [selectedDesign, setSelectedDesign] = useState<ReactNode>(null);

  const designComponents = useCallback((type: DesignType) => {
    const map: BlockDesignMap = {
      image() {
        return <div>이미지</div>;
      },
      line() {
        return <div>구분선</div>;
      },
      list() {
        return <div>리스트</div>;
      },
      text() {
        return <div>텍스트</div>;
      },
      table() {
        return <Table />;
      },
      layout() {
        return <div>레이아웃</div>;
      },
    };

    return map[type]();
  }, []);

  useEffect(() => {
    setSelectedDesign(designComponents(type));
  }, [type]);

  return { selectedDesign, type };
};
