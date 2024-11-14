import React, {Component} from 'react';
import './puzzle2.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Home} from "./ui/Home/Home";


class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route component={NotFound}/>
                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;


const NotFound = () => (
    <div>
        <h1>404</h1>
        <h2>Not Found</h2>
    </div>
);