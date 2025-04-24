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

const carItemListStyle = { backgroundColor: 'rgba(124, 68, 183, 0.81)', color: 'white', minHeight:400};
const descriptionItemStyle = { backgroundColor: 'rgba(124, 68, 183, 0.81)', color: 'white', minWidth: 200 };

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
                <Grid size={4.5} paddingRight={1}>
                    <Item style={carItemListStyle}>
                        <List sx={{ maxHeight: 600, overflowY: 'auto' }} component="nav" aria-label="secondary mailbox folder">
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
                        <Stack spacing={0.5} paddingLeft={2}>
                            <ImageItem>
                                <img width='100%' style={{borderRadius: 8, display:'block'}} src={selectedCar ? selectedCar.Image : '' } alt='car photo' />
                            </ImageItem>
                        </Stack>    
                    </Grid>
                    <Grid paddingLeft={0.5}>
                        <Stack spacing={0.5} paddingLeft={2}>
                            <Item style={descriptionItemStyle}><p>极速：{selectedCar.TopSpeed}km/h</p></Item>
                            <Item style={descriptionItemStyle}><p>0-100km/h加速：{selectedCar.ZeroTo100}s</p></Item>
                            <Item style={descriptionItemStyle}><p>长宽高：{selectedCar.Length}*{selectedCar.Width}*{selectedCar.Height}mm</p></Item>
                            <Item style={descriptionItemStyle}><p>重量：{selectedCar.Weight}kg</p></Item>
                            <Item style={descriptionItemStyle}><p>扭矩：{selectedCar.Torque}Nm</p></Item>
                            <Item style={descriptionItemStyle}><p>马力：{selectedCar.Horsepower}p</p></Item>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>         
        </Box>
    );
}