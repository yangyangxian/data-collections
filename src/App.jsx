import { useEffect, useState } from 'react';
import './App.css';

import TabPanel from './pages/TabPanel.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
    const [forecasts, setForecasts] = useState();

    useEffect(() => {
        //populateWeatherData();
    }, []);

    return (
        <div>
            <TabPanel>
            </TabPanel>
        </div>
    );
}

export default App;