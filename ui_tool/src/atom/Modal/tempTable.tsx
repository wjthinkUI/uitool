import React, { useState } from 'react';

interface Cell {
  row: number;
  col: number;
}

export const Table: React.FC = () => {
  const [clickedCell, setClickedCell] = useState<Cell | null>(null);

  const handleCellClick = (row: number, col: number) => {
    setClickedCell({ row, col });
  };

  const isCellClicked = (row: number, col: number) => {
    if (!clickedCell) return false;
    return row <= clickedCell.row && col <= clickedCell.col;
  };

  return (
    <table className="mx-auto mt-8 table-fixed">
      <tbody>
        {Array.from({ length: 5 }, (_, row) => (
          <tr key={row}>
            {Array.from({ length: 8 }, (_, col) => (
              <td
                key={col}
                className={`w-16 h-16 border border-gray-300 ${
                  isCellClicked(row, col) ? 'bg-orange-500' : ''
                }`}
                onClick={() => handleCellClick(row, col)}
                onMouseEnter={() => setClickedCell({ row, col })}
                onMouseLeave={() => setClickedCell(null)}
              >
                ({row}, {col})
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
