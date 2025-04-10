import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

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

const rows = [
    { id: '1', name: 'Cheetah猎豹', genus: 'Acinonyx猎豹属', family: 'Felidae猫科',
        binomialName: 'Acinonyx jubatus', speed: 120, picture: 'public/images/animals/cheetah.jpeg', datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '2', name: 'Pronghorn叉角羚', genus: 'Antilocapra叉角羚属', family: 'Antilocapridae叉角羚科', 
        binomialName: 'Antilocapra americana', speed: 96, picture: 'public/images/animals/pronghorn.jpeg', datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '3', name: 'Tsessebe转角牛羚', genus: 'Damaliscus转角牛羚属', family: 'Bovidae牛科',
        binomialName: 'Damaliscus lunatus', speed: 90, picture: 'public/images/animals/tsessebe.jpeg', datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '4', name: 'Thomson\'s gazelle汤氏瞪羚', genus: 'Eudorcas美羚属', family: 'Bovidae牛科',
        binomialName: 'Eudorcas thomsonii', speed: 90, picture: 'public/images/animals/thomsonsgazelle.jpeg', datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '5', name: 'Horse马', genus: 'Equus马属', picture: 'public/images/animals/horse.jpeg', family: 'Equidae马科',
        binomialName: 'Equus ferus caballus', speed: 89, datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '6', name: 'Springbok跳羚', genus: 'Antidorcas跳羚属', family: 'Bovidae牛科',
        binomialName: 'Antidorcas marsupialis', speed: 88, picture: 'public/images/animals/springbok.jpeg', datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '7', name: 'Wildebeest角马', genus: 'Connochaetes角马属', family: 'Bovidae牛科',
        binomialName: 'Antilope gnu', speed: 81, picture: 'public/images/animals/wildebeest.jpeg', datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '8', name: 'Blackbuck印度黑羚', genus: 'Antilope真羚属', family: 'Bovidae牛科',
        binomialName: 'Antilope cervicapra', speed: 80, picture: 'public/images/animals/blackbuck.jpeg', datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '9', name: 'Grant\'s gazelle葛氏苍羚', genus: 'Nanger苍羚属', family: 'Bovidae牛科',
        binomialName: 'Nanger granti', speed: 80, picture: 'public/images/animals/grantsgazelle.jpeg', datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '10', name: 'Hartebeest狷羚', genus: 'Alcelaphus狷羚属', family: 'Bovidae牛科',
        binomialName: 'Alcelaphus buselaphus', speed: 80, datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '11', name: 'Impala黑斑羚', genus: 'Aepyceros高角羚属', family: 'Bovidae牛科',
        binomialName: 'Aepyceros melampus', speed: 80, datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '12', name: 'Lion狮子', genus: 'Panthera豹属', family: 'Felidae猫科',
        binomialName: 'Panthera leo', speed: 80, datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
    { id: '13', name: 'Hare野兔', genus: 'Lepus兔属', family: 'Leporidae兔科',
        binomialName: 'Lepus timidus', speed: 80, datasource: 'https://en.wikipedia.org/wiki/Fastest_animals' },
];

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