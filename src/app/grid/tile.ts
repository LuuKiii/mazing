export type TileType = 'empty' | 'wall';

export class Tile {

  constructor(public x: number, public y: number, public type: TileType) { }

  setType(type: TileType) {
    this.type = type;
  }
}
