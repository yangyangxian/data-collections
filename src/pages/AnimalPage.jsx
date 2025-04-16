import * as React from 'react';
import Grid from '@mui/material/Grid';
import { getAnimals } from '../dataRepositories/AnimalRepository.tsx';
import { DataTable } from '../components/DataTable.jsx';
import { Item } from '../const/Consts.jsx';

const columns = [
    { 
        field: 'rowNum' , 
        headerName: '排名', 
        filterable: false,
        renderCell: (params) => params.api.getAllRowIds().indexOf(params.id)+1
    },
    {   field: 'id', headerName: 'ID', width: 60 },
    {   field: 'name', headerName: 'Name', width: 240 },
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

export default function AnimalPage() {
    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid size='auto'>
                <Item>
                    <DataTable
                        rows={rows}
                        columns={columns}
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
    );
}
