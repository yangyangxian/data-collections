import * as React from 'react';
import Grid from '@mui/material/Grid';
import { getMountains } from '../dataRepositories/MountainRepository.tsx';
import { DataTable } from '../components/DataTable.jsx';
import { Item } from '../const/Consts.jsx';

const columns = [
    {
        field: 'rank',
        headerName: '排名',
        width: 80,
        filterable: false,
        sortable: false,
        renderCell: (params) => params.api.getSortedRowIds().indexOf(params.id) + 1
    },
    { field: 'name_ch', headerName: '中文名', width: 160 },
    { field: 'name', headerName: 'English Name', width: 180 },
    { field: 'height_m', headerName: '海拔 (m)', width: 110, type: 'number' },
    { field: 'range', headerName: '山脉', width: 140 },
    { field: 'countries', headerName: '所在国家/地区', width: 160 },
    { field: 'first_ascent', headerName: '首登年份', width: 110 },
    { field: 'datasource', headerName: '数据来源', width: 240, renderCell: (p) => <a href={p.value} target="_blank" rel="noreferrer">来源</a> }
];

const rows = getMountains();

export default function MountainPage() {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size={16}>
                <Item>
                    <DataTable
                        rows={rows}
                        columns={columns}
                        autoHeight
                        density='compact'
                    />
                </Item>
            </Grid>
        </Grid>
    );
}
