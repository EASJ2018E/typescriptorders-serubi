import { IOrderLine } from "./interface";
import { OrderLinie } from "./ordrelinie";
import { Ordre } from "./ordre";
import { getHtmlTable } from "./global";

let iorderline1: IOrderLine = { OrderQty: 2, ProductId: 54, UnitPrice: 22, UnitPriceDiscount: 12 };
let orderline1: OrderLinie = new OrderLinie(iorderline1);
let iorderline2: IOrderLine = { OrderQty: 5, ProductId: 26, UnitPrice: 53, UnitPriceDiscount: 8 };
let orderline2: OrderLinie = new OrderLinie(iorderline2);

let arrayOLines:Array<OrderLinie> = new Array();
arrayOLines.push(orderline1);
arrayOLines.push(orderline2);
let order:Ordre = new Ordre(1, arrayOLines);

let orders: Array<Ordre> = new Array();
orders.push(order);

let content:HTMLDivElement = <HTMLDivElement>document.getElementById("content");
let html: string = "";

html += "OrderQty: " + iorderline1.OrderQty;
html += "<br>ProductId: " + iorderline1.ProductId;
html += "<br>UnitPrice: " + iorderline1.UnitPrice;
html += "<br>UnitPriceDiscount: " + iorderline1.UnitPriceDiscount;
html += "<br>";
html += "<br>BeregnSum: " + orderline1.BeregnSum();
html += "<br>BeregnMoms: " + orderline1.BeregnMoms();
html += "<br>BeregnTotal: " + orderline1.BeregnTotal();
html += "<br>";
html += "<br>";
html += "<br>Total sum af alle ordrelines: " + order.totalSum();

//content.innerHTML = html;




let tableContent: HTMLTableElement = <HTMLTableElement>document.getElementById("dumpcontent");
let dumphtml: string = "";
let hasHeader:boolean = false;

// orders.forEach(o => {

//   let newRow:string = "";

//   o.orderListe.forEach(ol => {

//     if(!hasHeader) {
//       newRow += "<tr>";
//       for (let key in ol.orderline) {
//         if (ol.orderline.hasOwnProperty(key)) {
//           newRow += "<th>";
//           newRow += key.toString();
//           newRow += "</th>";
//         }
//       }
//       newRow += "</tr>";
//       hasHeader = true;
//     }

//     newRow += "<tr>";
//     for (let key in ol.orderline) {
//       if (ol.orderline.hasOwnProperty(key)) {
//         newRow += "<td>";
//         newRow += ol.orderline[key.toString()];
//         newRow += "</td>";
//       }
//     }
//     newRow += "</tr>";
//   });

//   dumphtml += newRow;
// });

// tableContent.innerHTML = dumphtml;

content.appendChild(getHtmlTable(orders));
