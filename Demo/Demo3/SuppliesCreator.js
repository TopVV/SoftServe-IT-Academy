export class Supply {
  constructor(supplyID, supplyName, supplyType='Общий' ,supplyInfo = '-', supplyAmount = '') {
    this.id = supplyID;
    this.name = supplyName;
    this.type = supplyType;
    this.info = supplyInfo;
    this.amount = supplyAmount;
  }
}