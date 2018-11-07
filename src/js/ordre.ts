import { OrderLinie } from "./ordrelinie";

export class Ordre {

  private _orderListe:Array<OrderLinie>;
  private _orderId: number;

  constructor(ordreid:number, ordrelines:Array<OrderLinie>) {
    this._orderListe = ordrelines;
    this._orderId = ordreid;
  }

  public get orderListe(): Array<OrderLinie> {
    return this._orderListe;
  }

  public get orderId() : number {
    return this._orderId;
  }
  
  
  

  /**
   * totalSum
   */
  public totalSum():number {
    let total:number = 0;

    this._orderListe.forEach(line => {
      total += line.BeregnTotal();
    });

    return total;
  }
}