import { Ordre } from "./ordre";

/**
 * getHtmlTable
 */
export function getHtmlTable(orders:Array<Ordre>):HTMLTableElement {
  let table:HTMLTableElement = document.createElement('table');
  let tRows: Array<HTMLTableRowElement> = Array();
  let tHead: HTMLTableRowElement = document.createElement('tr');
  let hasHeader: boolean = false;
  
  orders.forEach(o => {
    let oid:number = o.orderId;

    o.orderListe.forEach(ol => {
      
    

      if (!hasHeader) {
        let tHeadRow: HTMLTableHeaderCellElement = document.createElement('th');
        tHeadRow.appendChild(document.createTextNode("OrdreID"));
        tHead.appendChild(tHeadRow);

        for (let key in ol.orderline) {
          if (ol.orderline.hasOwnProperty(key)) {
            let tHeadRow: HTMLTableHeaderCellElement = document.createElement('th');
            tHeadRow.appendChild(document.createTextNode(key.toString()));
            tHead.appendChild(tHeadRow);
          }
        }
        tRows.push(tHead);
        hasHeader = true;
      }

      let tBodyRow: HTMLTableRowElement = document.createElement('tr');

      let tBodyRowData: HTMLTableDataCellElement = document.createElement('td');
      tBodyRowData.appendChild(document.createTextNode(oid.toString()));
      tBodyRow.appendChild(tBodyRowData);

      for (let key in ol.orderline) {
        if (ol.orderline.hasOwnProperty(key)) {
          let tBodyRowData: HTMLTableDataCellElement = document.createElement('td');
          tBodyRowData.appendChild(document.createTextNode(ol.orderline[key.toString()].toString()));
          tBodyRow.appendChild(tBodyRowData);
        }
      }

      tRows.push(tBodyRow);

    });
  });

  tRows.forEach(tr => {
    table.appendChild(tr);
  });

  return table;
}