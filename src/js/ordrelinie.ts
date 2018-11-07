import { IOrderLine } from "./interface";

export class OrderLinie {
  private _orderline: IOrderLine;

  constructor(OLine: IOrderLine) {
    this._orderline = {
      OrderQty: OLine.OrderQty,
      ProductId: OLine.ProductId,
      UnitPrice: OLine.UnitPrice,
      UnitPriceDiscount: OLine.UnitPriceDiscount
    }
  }

  public get orderline(): IOrderLine {
    return this._orderline;
  }
  

  /**
   * BeregnSum
   */
  public BeregnSum(): number {
    return this._orderline.OrderQty * (this._orderline.UnitPrice - this._orderline.UnitPriceDiscount);
  }

  /**
   * BeregnMoms
   */
  public BeregnMoms(): number {
    return this.BeregnSum() * 0.25;
  }

  /**
   * BeregnTotal
   */
  public BeregnTotal(): number {
    return this.BeregnSum() + this.BeregnMoms();
  }
}