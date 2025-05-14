import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { getCountries, getProvinces } from '../dataRepositories/CountryRepository.tsx';
import { DataTable } from '../components/DataTable.jsx';
import { Item } from '../const/Consts.jsx';

console.debug("this is from top level of CountryPage.jsx");

const columns = [
    {   field: 'rowNum' , 
        headerName: '排名', 
        filterable: false,
        width: 55,
        renderCell: (params) => params.api.getSortedRowIds().indexOf(params.id)+1 },
    {   field: 'id', headerName: 'ID', width: 60, },
    {   field: 'name_ch', headerName: '国家', width: 130, },
    {   field: 'name', headerName: 'Country', width: 150, },
    {   field: 'area', headerName: 'Area', type: 'number', width: 130,},
    {   field: 'population', headerName: 'Population', type: 'number', width: 130,}
];

const columnsProvinces = [
    {   field: 'rowNum' , 
        headerName: '排名', 
        filterable: false,
        width: 55,
        renderCell: (params) => params.api.getSortedRowIds().indexOf(params.id)+1 },
    {   field: 'id', headerName: 'ID', width: 60, },
    {   field: 'name_ch', headerName: '省份', width: 185, },
    {   field: 'name', headerName: 'Province', width: 200, },
    {   field: 'area', headerName: 'Area', type: 'number', width: 130 }
];

let rows = getCountries();
//let provinces = getProvinces("");

export default function CountryPage() {
    console.debug("this is from top level of CountryPage function component");

    const [selectedCountryId, setSelectedCountryId] = useState('');
    const [provinces, setProvinces] = useState(getProvinces(selectedCountryId));
    const handleCountryRowClick = (params) => {
        setSelectedCountryId(params.id);
        //The codes here will be executed when the component is rendered, so i moved the getProvinces function to the handleCountryRowClick function
        setProvinces(getProvinces(params.id));
    };

    return (
        <Box sx={{ marginTop: 3 }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={{xs:12, sm: 12, md: 6}}>
                    <Item>
                        <DataTable
                            rowHeight={40}
                            columnHeaderHeight={45}
                            rows={rows}
                            columns={columns}
                            onRowClick={handleCountryRowClick}
                            //sortModel={[{ field: 'area', sort: 'desc' }]} 
                            initialState={{
                                sorting: {
                                    sortModel: [
                                        { field: 'area', sort: 'desc' },
                                        { field: 'population', sort: 'asc' },
                                        { field: 'name', sort: 'asc' }
                                    ]
                                }
                            }}
                        />
                    </Item>
                    <Item><a href='https://zh.wikipedia.org/wiki/世界各国和地区面积列表'>Source</a></Item>
                </Grid>
                <Grid size={{xs:12, sm: 12, md: 6}}>
                    <Item>
                        <DataTable
                            rowHeight={40}
                            columnHeaderHeight={45}
                            rows={provinces}
                            columns={columnsProvinces}
                        />
                    </Item>
                    <Item><a href='https://zh.wikipedia.org/wiki/%E4%B8%AD%E5%8D%8E%E4%BA%BA%E6%B0%91%E5%85%B1%E5%92%8C%E5%9B%BD%E7%9C%81%E7%BA%A7%E8%A1%8C%E6%94%BF%E5%8C%BA%E5%9C%9F%E5%9C%B0%E9%9D%A2%E7%A7%AF%E5%88%97%E8%A1%A8'>Source</a></Item>
                </Grid>
            </Grid>
        </Box>
    );
}