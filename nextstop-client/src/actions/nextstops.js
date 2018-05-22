// const API_URL = process.env.REACT_APP_API_URL;
const API_URL = "http://ec2-18-218-171-133.us-east-2.compute.amazonaws.com:8081/api";

// action creator
const setNextstops = nextstops => {
    return {
        type: "GET_NEXTSTOPS_SUCCESS",
        nextstops
    };
};

const addNextstop = nextstop => {
    return {
        type: "CREATE_NEXTSTOP_SUCCESS",
        nextstop
    };
};

//async actions
export const getNextstops = () => {
   return dispatch => {
        // fetch("http://ec2-18-218-171-133.us-east-2.compute.amazonaws.com:8081/api/nextstops")
        fetch(`${API_URL}/nextstops`)
        .then(response => response.json())
        .then(nextstops => {
        return dispatch(setNextstops(nextstops))})
        .catch(error => console.log(error));
   }
}

export const createNextstop = (nextstop) => {
    debugger
    return dispatch => {
        return fetch(`${API_URL}/nextstops`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nextstop: nextstop})
        })
        .then(response => response.json())
        .then(nextstop => dispatch(addNextstop(nextstop)))
        .catch(error => console.log(error));
    }
}





        
        // let nextstops = [{name:"Yosamite National Park", budget: 800, img_url: "https://cdn.unifiedcommerce.com/content/product/large/628136609470.jpg", like: 0, dislike: 0}]
        // this.setState({nextstops})})
        
        // return dispatch(setNextstops(nextstops))
