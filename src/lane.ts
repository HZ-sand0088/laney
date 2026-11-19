import LaneNumber from "./laneNumber.js";

export default class Lane {
  private numbers: LaneNumber[];

  public constructor() {
    this.numbers = [];
  }

  /**
   * Adds a number to the array
   * @param number Number to add to array
   */
  public addNumber(number: LaneNumber): void {
    this.numbers.push(number);
  }

  public getTotal(): number {
    let total: number = 0;
    for(let i:number = 0; i < this.numbers.length; i++) {
      total = total + this.numbers[i].getValue();
    }
    return total;

    // return this.numbers.reduce((sum: number, num: LaneNumber) => sum + num.getValue(), 0);
  }

  public isBusted(): boolean {
    return false;
  }
}
