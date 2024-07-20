import { trTR } from '@mui/x-data-grid/locales';
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function DataGridCustomers() {
    const [customers, setcustomers] = useState([])

    useEffect(() => {
     
        axios.get("https://northwind.vercel.app/api/customers")
        .then(res=>{
            setcustomers(res.data)
        })
      }
    , [])
    
    const columns = [
        {
            field: "id",
            headerName: "ID",
            flex: 0.1
        },
        {
            field: "companyName",
            headerName: "Company Name",
            flex: 0.3
        },
        {
            field: "contactTitle",
            headerName: "Contact Title",
            flex: 0.3
        },
    ]

  return <>
  <div style={{ height: 500 }}>
      <DataGrid
          rows={customers} //DataSource
          columns={columns}
          slots={{ toolbar: GridToolbar }}
          slotProps={{
              toolbar: {
                showQuickFilter: true,
              },
            }}
            localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
      />
  </div>

</>
}

export default DataGridCustomers