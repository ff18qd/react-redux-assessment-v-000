import React, { Component } from 'react';
import './App.css';
import Nextstops from './Nextstops';

const nextstops = [
    {
        name: "Sichuan",
        budget: 4500,
        img_url: "http://www.pctours.com/wp-content/uploads/2014/10/Sichuan4.jpg",
        like: 0,
        dislike: 0
    },
    {   
        name: "Berlin",
        budget: 5500,
        img_url: "https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748",
        like: 0,
        dislike: 0
    }
]


class App extends Component {
    render() {
        return (
            <div className="App">
                App container
                <Nextstops nextstops={ nextstops }/>
            </div>
        )
    }
}

export default App;