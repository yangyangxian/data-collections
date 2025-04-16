import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { getCountries, getProvinces } from '../dataRepositories/CountryRepository.tsx';
import { DataTable } from '../components/DataTable.jsx';
import { Item } from '../const/consts';

const columns = [
    { 
        field: 'rowNum' , 
        headerName: '排名', 
        filterable: false,
        renderCell: (params) => params.api.getAllRowIds().indexOf(params.id)+1
    },
    {
        field: 'id', headerName: 'ID', width: 60, hide: true 
    },
    {
        field: 'name_ch', headerName: '国家', width: 120,
    },
    {
        field: 'name', headerName: 'Country', width: 120,
    },
    {
        field: 'area', headerName: 'Area', type: 'number', width: 130,
    }
];
const rows = getCountries();

const columnsProvinces = [
    { 
        field: 'rowNum' , 
        headerName: '排名', 
        filterable: false,
        renderCell: (params) => params.api.getAllRowIds().indexOf(params.id)+1
    },
    {
        field: 'id', headerName: 'ID', width: 60,
    },
    {
        field: 'name_ch', headerName: '省份', width: 160,
    },
    {
        field: 'name', headerName: 'Province', width: 120,
    },
    {
        field: 'area', headerName: 'Area', type: 'number', width: 130,
    }
];

export default function CountryPage() {
    const [selectedCountryId, setSelectedCountryId] = useState('1');

    const handleCountryRowClick = (params) => {
        setSelectedCountryId(params.id);
    };

    let rowsProvinces = getProvinces(selectedCountryId);

    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={6}>
                    <Item>
                        <DataTable
                            rowHeight={40}
                            columnHeaderHeight={45}
                            rows={rows}
                            columns={columns}
                            onRowClick={handleCountryRowClick}
                        />
                    </Item>
                    <Item><a href='https://zh.wikipedia.org/wiki/世界各国和地区面积列表'>Source</a></Item>
                </Grid>
                <Grid size={6}>
                    <Item>
                        <DataTable
                            rowHeight={40}
                            columnHeaderHeight={45}
                            rows={rowsProvinces}
                            columns={columnsProvinces}
                        />
                    </Item>
                    <Item><a href='https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%9C%81%E7%BA%A7%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9C%9F%E5%9C%B0%E9%9D%A2%E7%A7%AF%E5%88%97%E8%A1%A8'>Source</a></Item>
                </Grid>
            </Grid>
        </Box>
    );
}