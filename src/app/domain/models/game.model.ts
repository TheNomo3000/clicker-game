import { GameType } from './game-type.enum';

export interface GameModel {
  name: string;
  clicks: number;
  type: GameType;
  items: {
    autoclicker: number
  }
}
