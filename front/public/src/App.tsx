import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import FactionSelection from './Views/CreateNew/FactionSelection/FactionSelection';
import StartMenu from './Views/StartMenu/StartMenu';
import './Styles/colors.scss'
import './Styles/main.scss'


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/faction-selection">
                        <FactionSelection />
                    </Route>
                    <Route path="/">
                        <StartMenu />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
