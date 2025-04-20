import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import PhotoWall from './PhotoWall.jsx';
import CountryPage from './CountryPage.jsx';
import AnimalPage from './AnimalPage.jsx';
import CarPage from './CarPage.jsx';

console.debug("this is from top level of TabPanel.jsx");

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    console.debug("this is from top level of TabPanel function component");
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Animals" {...a11yProps(0)} />
                        <Tab label="Countries" {...a11yProps(1)} />
                        <Tab label="Photo Wall" {...a11yProps(2)} />
                        <Tab label="Cars" {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <AnimalPage></AnimalPage>                   
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <CountryPage></CountryPage>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <PhotoWall></PhotoWall>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <CarPage></CarPage>
                </CustomTabPanel>
            </Box>
    );
}