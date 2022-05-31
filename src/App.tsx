import './App.css';
import { BoardComponent } from './components/BoardComponent';
import { useEffect, useState } from 'react';
import { Board } from './models/Board';

export const App = () => {
  const [board, setBoard] = useState(new Board())

  useEffect(()=>{
    restart()
  },[])

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }

  return (
    <div className="app">
      <BoardComponent/>
    </div>
  )
};


