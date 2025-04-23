import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { ImageItem, Item } from '../const/Consts';
import { getCars } from '../dataRepositories/CarRepository.tsx';

const cars = getCars().sort((a, b) => {
    if (a.DisplayName < b.DisplayName) {
        return -1;
    }
    if (a.DisplayName > b.DisplayName) {
        return 1;
    }
    return 0;
});

export default function CarPage() {
    const [selectedIndex, setSelectedIndex] = React.useState('1');
    const [selectedCar, setSelectedCar] = React.useState(cars[0]);

    const handleListItemClick = ( event, index) => {
        setSelectedIndex(index);
        const car = cars.find(car => car.Id === index);
        setSelectedCar(car);
    }

    return (
        <Box>
            <Grid container rowSpacing={1} columns={24}>
                <Grid size={5} paddingRight={3}>
                    <Item style={{minHeight:400}}>
                        <List component="nav" aria-label="secondary mailbox folder">
                            {cars.map((car) => (
                            <ListItemButton selected={selectedIndex === car.Id} onClick={(event) => handleListItemClick(event, car.Id)}>
                                <ListItemText primary={car.DisplayName} />
                            </ListItemButton>
                            ))}
                        </List>
                    </Item>
                </Grid>
                <Grid container size={19}>
                    <Grid size={18}>
                        <ImageItem>
                            <img width='100%' style={{borderRadius: 3, display:'block'}} src={selectedCar ? selectedCar.Image : '' } alt='car photo' />
                        </ImageItem>
                    </Grid>
                    <Grid>
                        <Stack spacing={0.5} paddingLeft={2}>
                            <Item elevation={4}><p>车名：{selectedCar.DisplayName}</p></Item>
                            <Item elevation={4}><p>品牌：{selectedCar.Brand}</p></Item>
                            <Item elevation={4}><p>极速：{selectedCar.TopSpeed}km/h</p></Item>
                            <Item elevation={4}><p>0-100km/h用时：{selectedCar.ZeroTo100}s</p></Item>
                            <Item elevation={4}><p>长宽高：{selectedCar.Length}*{selectedCar.Width}*{selectedCar.Height}mm</p></Item>
                            <Item elevation={4}><p>重量：{selectedCar.Weight} kg</p></Item>
                            <Item elevation={4}><p>扭矩：{selectedCar.Torque}N*m</p></Item>
                            <Item elevation={4}><p>马力：{selectedCar.Horsepower}p</p></Item>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>         
        </Box>
    );
}