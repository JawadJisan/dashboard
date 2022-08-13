import React, { useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';
import useAllData from '../contexts/useAllData';




const Orders = () => {

  const [allData, setAllData] = useAllData();
  const sampleData = allData.slice(0, 10);
  const [abc, setAbc]= useState([]);



  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />

    
      

      {sampleData.map(item => 
      <GridComponent
        id="gridcomp"

        dataSource={[{
          OrderID: `${item._id}`,
          CustomerName: `${item.source}`,
          TotalAmount: `${item.intensity}`,
          OrderItems: `${item.pestle}`,
          Location: `${item.country}`,
          Status: `${item?.added}`,
          StatusBg: '#FB9678',
          // ProductImage:
            // product6,
        }]}

        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>)}

    </div>
  );
};
export default Orders;