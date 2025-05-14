import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

import PhotoWall from './PhotoWall.jsx';
import CountryPage from './CountryPage.jsx';
import AnimalPage from './AnimalPage.jsx';
import CarPage from './CarPage.jsx';

console.debug("this is from top level of TabPanel.jsx");

export default function BasicTabs() {
    console.debug("this is from top level of TabPanel function component");
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedTab, setSelectedTab] = React.useState(0);

    // Map routes to tab indices
    const routeToTabIndex = {
        '/animals': 0,
        '/countries': 1,
        '/photo-wall': 2,
        '/cars': 3,
    };

    // Update selectedTab based on the current route
    React.useEffect(() => {
        const currentTab = routeToTabIndex[location.pathname] ?? 0; // Default to 0 if route is not found
        setSelectedTab(currentTab);
    }, [location.pathname]);

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
        switch (newValue) {
            case 0:
                navigate('/animals');
                break;
            case 1:
                navigate('/countries');
                break;
            case 2:
                navigate('/photo-wall');
                break;
            case 3:
                navigate('/cars');
                break;
            default:
                break;
        }
    };

    return (
        <Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <Tabs
                    value={selectedTab}
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
                <Route path="*" element={<AnimalPage />} /> {/* Default route */}
            </Routes>
        </Box>
    );
}