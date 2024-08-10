import { Canvas } from "../canvas/canvas";
import { Tile } from "./tile";

export class Grid {
  private static _instance: Grid;
  private tileConfig: { width: number, height: number } = { width: 10, height: 10 };
  private tiles: Tile[][] = [];
  private canvas: Canvas = Canvas.instance;
  private constructor() { }

  public static get instance(): Grid {
    if (!Grid._instance) {
      Grid._instance = new Grid();
    }
    return Grid._instance;
  }

  setTiles(tiles: Tile[][]) {
    this.tiles = tiles;
  }

  getTiles(): Tile[][] {
    return this.tiles;
  }

  getTile(x: number, y: number): Tile | undefined {
    return this.tiles[y]?.[x];
  }

  setTile(x: number, y: number, tile: Tile) {
    this.tiles[y][x] = tile;
  }

  clear() {
    this.tiles = [];
  }

  createGrid(numberOfTilesX: number, numberOfTilesY: number) {
    this.clear();
    for (let y = 0; y < numberOfTilesY; y++) {
      this.tiles[y] = [];
      for (let x = 0; x < numberOfTilesX; x++) {
        this.tiles[y][x] = new Tile(x, y, 'empty');
      }
    }
  }

  drawTile(x: number, y: number) {
    const tile = this.getTile(x, y);
    if (tile) {
      const ctx = this.canvas.getContext();
      ctx.fillStyle = tile.type === 'empty' ? 'white' : 'black';
      ctx.fillRect(x * this.tileConfig.width, y * this.tileConfig.height, this.tileConfig.width, this.tileConfig.height);
    }
  }

  drawGrid() {
    for (let y = 0; y < this.tiles.length; y++) {
      for (let x = 0; x < this.tiles[y].length; x++) {
        this.drawTile(x, y);
      }
    }
  }
}
