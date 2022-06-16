import { Colors } from 'src/models/Colors';
import { Figures } from 'src/models/figures/Figures';
import { Board } from 'src/models/Board';

export  class Player {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figures | null;
  board: Board;
  available: boolean;
  id: number;
}