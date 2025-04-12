import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

import Button from '@mui/material/Button';

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
    {
        field: 'id', headerName: 'ID',
        align: 'center',
        width: 60
    },
    {
        field: 'country', headerName: 'Country',
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

export default function CountryPage() {
    return (
        <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid size="auto">
                    <Button variant="contained">TestMe</Button>
                </Grid>
                <Grid size={6}>
                    <Item>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            initialState={{ pagination: { paginationModel } }}
                            pageSizeOptions={[25, 50]}
                            sx={{ border: 0 }}
                        />
                    </Item>
                </Grid>
                <Grid size="grow">
                    <Item>4</Item>
                </Grid>
            </Grid>
        </Box>
    );
}