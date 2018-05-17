import React, { Component } from 'react';
import './App.css';
import Nextstops from './Nextstops';

const nextstops = [
    {
        name: "Sichuan",
        budget: 4500,
        img_url: "test.com",
        like: 0
    },
    {   
        name: "Germany",
        budget: 5500,
        img_url: "test.com",
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