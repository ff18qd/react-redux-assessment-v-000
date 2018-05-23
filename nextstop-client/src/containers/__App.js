import React from 'react';

import './App.css';
import Nextstops from './Nextstops';

const App = () => 
    <div className="App">
        App container
        <Nextstops />
    </div>

export default App;

// const nextstops = [
//     {
//         name: "Sichuan",
//         budget: 4500,
//         img_url: "http://www.pctours.com/wp-content/uploads/2014/10/Sichuan4.jpg",
//         like: 0,
//         dislike: 0
//     },
//     {   
//         name: "Berlin",
//         budget: 5500,
//         img_url: "https://lonelyplanetwp.imgix.net/2015/12/brandenburg-gate-berlin-GettyRF-1500-cs.jpg?crop=entropy&fit=crop&h=421&sharp=10&vib=20&w=748",
//         like: 0,
//         dislike: 0
//     }
// ]



// class App extends Component {

    
    // componentDidMount() {
    //     // fetch("https://ec2-52-15-78-33.us-east-2.compute.amazonaws.com:8080/api/nextstops")
    //     axios.get("https://80887eaf7a0b474e9fa06d513302b5b6.vfs.cloud9.us-east-2.amazonaws.com:8080/api/nextstops"
    //         //, {
    //         //   headers : { 
    //         //     'Content-Type': 'application/json',
    //         //     'Accept': 'application/json'
    //         //   },
    //         //   mode: 'no-cors',
    //          // credentials: "include"
    //         //}
    //     )
    //         .then(response => response.json())
    //         .then(nextstops => {
    //             console.log(nextstops);
    //             this.setState({nextstops})})

    // }
    
    
//     render() {
//         return (
//             <div className="App">
//                 App container
//                 <Nextstops />
//             </div>
//         )
//     }
// }


// const mapStateToProps = (state) => { 
//   return { nextstops: state.nextstops };
// };
 
// export default connect(mapStateToProps)(App);

