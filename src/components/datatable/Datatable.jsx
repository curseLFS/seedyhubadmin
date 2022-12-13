import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows, productColumns, productRows, orderColumns, orderRows } from "./datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ type }) => {
  let page;

  switch (type) {
    case "user": 
      page={
        title: "Add New User",
        link: "/users/new",
        rows: userRows,
        columns: userColumns
      }
      break;
    case "product": 
      page={
        title: "Add New Product",
        link: "/products/new",
        rows: productRows,
        columns: productColumns
      }
      break;
    case "order": 
      page={
        title: "Add New Order",
        link: "/orders/new",
        rows: orderRows,
        columns: orderColumns
      }
      break;
    default: 
      break;
  };

  const [data, setData] = useState(page.rows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }; 

  const actionColumn = [{ 
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell:(params)=>{
      return(
        <div className="cellAction">
          <Link to={page.link} style={{textDecoration:"none"}}>
            <div className="viewButton">View</div>
          </Link>
          <div 
            className="deleteButton" onClick={()=> handleDelete(params.row.id)}>Delete</div>
        </div>
      );
    }
  }];
  
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {page.title}
        <Link to={page.link} className="link">
          Add New
        </Link>
      </div>
        <DataGrid
        className="datagrid"
        rows={data}
        columns={page.columns.concat(actionColumn )} 
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable