import { useState } from 'react';
import { ModalBlockDesignLargeBox } from '@atom/Modal/ModalBlockDesign/ModalBlockDesignLargeBox';
interface Cell {
  row: number;
  col: number;
}

export const TableContent = () => {
  const [clickedCell, setClickedCell] = useState<Cell | null>(null);

  const handleCellClick = (row: number, col: number) => {
    setClickedCell({ row, col });
  };

  const isCellClicked = (row: number, col: number) => {
    if (!clickedCell) return false;
    return row <= clickedCell.row && col <= clickedCell.col;
  };
  // className="flex items-center m-auto"
  return (
    <ModalBlockDesignLargeBox>
      {Array.from({ length: 8 }, (_, row) => (
        <div key={row}>
          {Array.from({ length: 5 }, (_, col) => (
            <div
              key={col}
              className={`w-[98px] h-[72px] border border-dashed border-gray-300 m-2 ${
                isCellClicked(row, col) ? 'bg-primary-100' : ''
              }`}
              onClick={() => handleCellClick(row, col)}
              onMouseEnter={() => setClickedCell({ row, col })}
              onMouseLeave={() => setClickedCell(null)}
            >
              ({row}, {col})
            </div>
          ))}
        </div>
      ))}
    </ModalBlockDesignLargeBox>
  );
};
