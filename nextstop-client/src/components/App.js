import React from 'react';
import './App.css';
import Nextstops from '../containers/Nextstops';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import NextstopShow from '../containers/NextstopShow';


const App = () => 
    <div className="App">
        <Switch>
             <Route exact path="/" component={Nextstops} />
             <Route exact path="/about" component={About} />
             <Route exact path="/contactus" component={ContactUs} />
             <Route path="/nextstops/:nextstopId" component={NextstopShow}/>
        </Switch>

    </div>;

export default App;

//  <Nextstops />