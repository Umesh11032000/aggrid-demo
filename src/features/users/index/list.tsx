import React, { useState, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeBalham,
  type ColDef,
} from "ag-grid-community";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const UserList: React.FC = () => {
  const [rowData] = useState([
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Alice", age: 32 },
    { id: 3, name: "Bob", age: 45 },
    // add more rows as needed
  ]);

  const columnDefs = useMemo<ColDef[]>(
    () => [
      { field: "id", headerName: "ID", sortable: true, filter: true },
      { field: "name", headerName: "Name", sortable: true, filter: true },
      { field: "age", headerName: "Age", sortable: true, filter: true },
    ],
    []
  );

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: "100%" }}>
      <AgGridReact
        theme={themeBalham}
        rowData={rowData}
        columnDefs={columnDefs}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default UserList;
