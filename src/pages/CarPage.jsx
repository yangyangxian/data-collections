import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';

import { ImageItem, Item } from '../const/Consts';
import { getCars } from '../dataRepositories/CarRepository.tsx';

const cars = getCars();

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
            <Grid container rowSpacing={1}>
                <Grid size={2} paddingRight={3}>
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
                <Grid container size={10}>
                    <Grid size={8}>
                        <ImageItem>
                            <img width='100%' style={{borderRadius: 3, display:'block'}} src={selectedCar ? selectedCar.Image : '' } alt='car photo' />
                        </ImageItem>
                    </Grid>
                    <Grid>
                        <Stack spacing={0.5} paddingLeft={2}>
                            <Item><p>车名：{selectedCar.DisplayName}</p></Item>
                            <Item><p>品牌：{selectedCar.Brand}</p></Item>
                            <Item><p>极速：{selectedCar.TopSpeed}</p></Item>
                        </Stack>
                    </Grid>
                </Grid>
            </Grid>         
        </Box>
    );
}