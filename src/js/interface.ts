export interface IOrderLine {
  OrderQty: number;
  ProductId: number;
  UnitPrice: number;
  UnitPriceDiscount: number;
  [key: string]: any;
}