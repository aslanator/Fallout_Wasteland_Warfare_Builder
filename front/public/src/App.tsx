import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import FactionSelection from './Views/CreateNew/FactionSelection/FactionSelection';
import StartMenu from './Views/StartMenu/StartMenu';
import { Provider } from 'react-redux'
import store from './Redux/store';
import './Styles/colors.scss'
import './Styles/main.scss'
import Create from './Views/CreateNew/Create/Create';


function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/faction-selection">
                            <FactionSelection />
                        </Route>
                        <Route path="/create/:faction">
                            <Create />
                        </Route>
                        <Route path="/">
                            <StartMenu />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
