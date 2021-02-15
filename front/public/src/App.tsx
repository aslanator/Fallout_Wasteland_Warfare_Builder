import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import FactionSelection from './CreateNew/FactionSelection/FactionSelection';
import StartMenu from './StartMenu/StartMenu';
import './App.css';

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
