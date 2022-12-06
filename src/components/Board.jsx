import Row from "./Row";

const Board = ({ board }) => {
  let maxWidth = 0;
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    if (maxWidth < row.length) {
      maxWidth = row.length;
    }
  }

  return (
    <div className="board">
      {board.map((row, i) => (
        <Row key={i} rowOffset={i} row={row} maxWidth={maxWidth} />
      ))}
    </div>
  );
};

export default Board;
