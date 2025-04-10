import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns = [
    { field: 'id', headerName: 'ID',
        align: 'center',
        width: 60
    },
    { field: 'country', headerName: 'Country', 
        width: 120 
    },
    {
        field: 'area',
        headerName: 'Area',
        type: 'number',
        width: 130,
    }
];

const rows = [
    { id: 1, country: 'Russia', area: 17098246 },
    { id: 2, country: 'Canada', area: 9984670 },
    { id: 3, country: 'China', area: 9600000 },
    { id: 4, country: 'United States', area: 9373000 },
    { id: 5, country: 'Brazil', area: 8515770 },
    { id: 6, country: 'Australia', area: 7692024 },
    { id: 7, country: 'India', area: 3287263 },
    { id: 8, country: 'Argentina', area: 2780400 },
    { id: 9, country: 'Kazakhstan', area: 2724902 },
    { id: 10, country: 'Algeria', area: 2380000 },
];

const paginationModel = { page: 0, pageSize: 50 };

export default function DataTable() {
    return (
        <Paper sx={{ height: '100%', width: '100%', border: '0px' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{ pagination: { paginationModel } }}
                pageSizeOptions={[5, 10]}
                sx={{ border: 0 }}
            />
        </Paper>
    );
}