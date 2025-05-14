import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate } from 'react-router-dom';

import PhotoWall from './PhotoWall.jsx';
import CountryPage from './CountryPage.jsx';
import AnimalPage from './AnimalPage.jsx';
import CarPage from './CarPage.jsx';

console.debug("this is from top level of TabPanel.jsx");

export default function BasicTabs() {
    console.debug("this is from top level of TabPanel function component");
    const navigate = useNavigate();
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleChange = (event, newValue) => {
        switch (newValue) {
            case 0:
                navigate('/animals');
                setSelectedTab(0);
                break;
            case 1:
                navigate('/countries');
                setSelectedTab(1);
                break;
            case 2:
                navigate('/photo-wall');
                setSelectedTab(2);
                break;
            case 3:
                navigate('/cars');
                setSelectedTab(3);
                break;
            default:
                break;
        }
    };

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <Tabs
                    value={selectedTab} // Disable default tab selection
                    onChange={handleChange}
                    variant="scrollable"
                    indicatorColor="secondary"
                    textColor="inherit"
                    scrollButtons="auto"
                    allowScrollButtonsMobile                    
                >
                    <Tab label="Animals" />
                    <Tab label="Countries" />
                    <Tab label="Photo Wall" />
                    <Tab label="Cars" />
                </Tabs>
            </Box>
            <Routes>
                <Route path="/animals" element={<AnimalPage />} />
                <Route path="/countries" element={<CountryPage />} />
                <Route path="/photo-wall" element={<PhotoWall />} />
                <Route path="/cars" element={<CarPage />} />
            </Routes>
        </Box>
    );
}