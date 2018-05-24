import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const Navbar = () =>
  <div>
    <NavLink
      to="/"
      /* set exact so it knows to only set activeStyle when route is deeply equal to link */
      exact
      /* add styling to Navlink */
      style={link}
      /* add prop for activeStyle */
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/contactus"
      exact
      style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >ContactUs</NavLink>
  </div>;


ReactDOM.render(
    <Router>
    <div>
        <Navbar />
        <Provider store={store}>
          <App store={store}/>
        </Provider>
        <Footer />
     </div>
     </Router>, 
    document.getElementById('root')
);

registerServiceWorker();


          // <Switch>
          //   <Route exact path="/" component={Home} />
          //   <Route exact path="/contactus" component={ContactUs} />
          // </Switch>