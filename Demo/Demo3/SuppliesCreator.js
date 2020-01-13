export class Supply {
  constructor(supplyName, supplyType='Общий' ,supplyInfo = '-', supplyAmount = '') {
    this.name = supplyName;
    this.type = supplyType;
    this.info = supplyInfo;
    this.amount = supplyAmount;
  }
}