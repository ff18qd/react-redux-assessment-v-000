import React from 'react';
import './App.css';
import Nextstops from '../containers/Nextstops';
import { Route, Switch } from 'react-router-dom';
// import Home from './Home';
import ContactUs from './ContactUs';


const App = () => 
    <div className="App">
        <Switch>
             <Route exact path="/" component={Nextstops} />
             <Route exact path="/contactus" component={ContactUs} />
        </Switch>
        App container
       
    </div>;

export default App;

//  <Nextstops />