import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import { getCountries } from '../dataRepositories/CountryRepository.tsx';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    marginTop: theme.spacing(1),
    //textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const columns = [
    {
        field: 'id', headerName: 'ID', width: 60,
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

const paginationModel = { page: 0, pageSize: 20 };

export default function CountryPage() {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size={6}>
                    <Item>
                        <DataGrid
                            rowHeight={40}
                            columnHeaderHeight={45}
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[10, 20]}
                            sx={{ border: 0 }}
                        />
                    </Item>
                    <Item><a href='https://zh.wikipedia.org/wiki/世界各国和地区面积列表'>Source</a></Item>
                </Grid>
                <Grid size="grow">
                    <Item>4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}