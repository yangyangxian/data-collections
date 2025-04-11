import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { getAnimals } from '../dataLayer/DataRetriever.tsx';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const columns = [
    {   field: 'id', headerName: 'ID', width: 60 },
    {   field: 'name', headerName: 'Name', width: 200 },
    //{   field: 'genus', headerName: 'Genus属', width: 180},
    {   field: 'family', headerName: '科', width: 200  },
    {   field: 'binomialName', headerName: '学名', width: 200,},
    {
        field: 'picture', headerName: '照片', width: 220, renderCell: (params) => {
            return (
                <div>
                    <img src={params.value} alt='' object-fit= 'contain' width='90%' height='100%' />
                </div>
            )
        }
    },
    {   field: 'speed', headerName: '最高速度', width: 100, type: 'number'},
    {
        field: 'datasource', headerName: '数据来源', width: 260, renderCell: (params) => {
            return (
                <div>
                    <a href={params.value}>Click to view the source</a>
                </div>
            )
        } },
];

const rows = getAnimals();

const paginationModel = { page: 0, pageSize: 50 };

export default function AnimalPage() {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size='auto'>
                    <Item>
                        <DataGrid
                            rowHeight={110}
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[25, 50]}
                            sx={{ border: 0 }}
                            onCellClick={(params, event) => {
                                console.log('点击的列字段:', params.field);
                                console.log('行数据:', params.row);
                                if (params.field == 'picture') {

                                }
                            }}
                        />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}