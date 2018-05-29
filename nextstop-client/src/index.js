import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
import Footer from './components/Footer';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';


const link = {
  width: '100px',
  padding: '12px',
  margin: '0px 6px 6px',
  background: '#2F558E',
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
        background: '#2F55ff'
      }}
    >Home</NavLink>
    <NavLink
      to="/about"
      exact
      style={link}
      activeStyle={{
        background: '#2F55ff'
      }}
    >About</NavLink>
    <NavLink
      to="/nextstops"
      exact
      style={link}
      activeStyle={{
        background: '#2F55ff'
      }}
    >Nextstops List</NavLink>
    <NavLink
      to="/contactus"
      exact
      style={link}
      activeStyle={{
        background: '#2F55ff'
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

