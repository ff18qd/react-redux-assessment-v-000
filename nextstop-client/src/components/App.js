import React from 'react';
import './App.css';
import Nextstops from '../containers/Nextstops';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import ContactUs from './ContactUs';
import NextstopsPage from '../containers/NextstopsPage';
import NextstopShow from '../containers/NextstopShow';


const App = () => 
    <div className="App">
        <Switch>
             <Route exact path="/" component={Nextstops} />
             <Route exact path="/about" component={About} />
             <Route exact path="/contactus" component={ContactUs} />
             <Route exact path="/nextstops" component={NextstopsPage} />
             <Route exact path="/nextstops/:nextstopId" component={NextstopShow}/>
        </Switch>
    </div>;

export default App;

//  <Nextstops />