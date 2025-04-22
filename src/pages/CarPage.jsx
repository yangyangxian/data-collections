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
            <Grid container rowSpacing={1} columns={16}>
                <Grid size={3} paddingRight={3}>
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
                <Grid container size={13}>
                    <Grid size={12}>
                        <ImageItem>
                            <img width='100%' style={{borderRadius: 3, display:'block'}} src={selectedCar ? selectedCar.Image : '' } alt='car photo' />
                        </ImageItem>
                    </Grid>
                    <Grid>
                        <Stack spacing={0.5} paddingLeft={2}>
                            <Item><p>车名：{selectedCar.DisplayName}</p></Item>
                            <Item><p>品牌：{selectedCar.Brand}</p></Item>
                            <Item><p>极速：{selectedCar.TopSpeed}</p></Item>
                            <Item><p>0-100km/h用时：{selectedCar.ZeroTo100}</p></Item>
                            <Item><p>长度：{selectedCar.Length}</p></Item>
                            <Item><p>宽度：{selectedCar.Width}</p></Item>
                            <Item><p>高度：{selectedCar.Height}</p></Item>
                            <Item><p>重量：{selectedCar.Weight}</p></Item>
                            <Item><p>扭矩：{selectedCar.Torque}</p></Item>
                            <Item><p>马力：{selectedCar.Horsepower}</p></Item>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>         
        </Box>
    );
}