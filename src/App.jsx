import './App.css';

import TabPanel from './pages/TabPanel.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter as Router } from 'react-router-dom';

console.debug("this is from top level of App.jsx");

function App() {
    console.debug("this is from top level of App function component");

    return (
        <Router>
            <div>
                <TabPanel />
            </div>
        </Router>
    );
}

export default App;