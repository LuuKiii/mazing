import { Grid } from "./grid/grid";
import { HtmlEventManager } from "./manager/htmlEventManager";

export class App {
  private htmlEventManager: HtmlEventManager;
  private grid: Grid;

  constructor() {
    this.htmlEventManager = HtmlEventManager.instance;
    this.grid = Grid.instance;
    this.grid.createGrid(10, 10);
    this.grid.drawGrid();
  }
}
