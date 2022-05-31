import { Colors } from '../models/Colors';
import { Figures } from '../models/figures/Figures';
import { Board } from '../models/Board';

export class Cell {
  readonly x: number;
  readonly y: number;
  readonly color: Colors;
  figure: Figures | null;
  board: Board;
  availabel: boolean;
  id: number;

  constructor( board: Board, x: number, y: number, color: Colors, figure: Figures | null ) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.board = board;
    this.availabel = false;
    this.id = Math.random()
  }
}