import { useMemo } from "react";
import "./App.css";
import Board from "./components/Board";
import getMap from "./util/getMap";

function App() {
  const board = useMemo(getMap, []);

  return (
    <div>
      <Board board={board} />
    </div>
  );
}

export default App;
