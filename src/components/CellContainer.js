import React from 'react';
function CellsContainer({ numbers,onClick }) {
  //Determine the number of cells per row based on the level of cells
const cellsPerRow = Math.sqrt(numbers.length);
const rows = [];
for (let i = 0; i < numbers.length; i += cellsPerRow) {
rows.push(numbers.slice(i, i + cellsPerRow));
}
    return ( 
      <div>
       {rows.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((number, index) => (
                        <span key={index} onClick={() => onClick(rowIndex * cellsPerRow + index)}>
                            {number}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}
export default CellsContainer;