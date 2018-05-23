import { resetNextstopForm } from "./nextstopForm";

// const API_URL = process.env.REACT_APP_API_URL;
// private IP 172.31.35.66
const API_URL = "http://ec2-18-191-80-244.us-east-2.compute.amazonaws.com:8081/api";

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

const deletedNextstop = nextstopId => {
    return {
        type: "DELETE_NEXTSTOP_SUCCESS",
        nextstopId
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
    return dispatch => {
        return fetch(`${API_URL}/nextstops`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({nextstop: nextstop})
        })
        .then(response => response.json())
        .then(nextstop => {
            dispatch(addNextstop(nextstop))
            dispatch(resetNextstopForm())
            })
        .catch(error => console.log(error));
    }
}

export const deleteNextstop = (nextstopId) => {
    return dispatch => {
        return fetch(`${API_URL}/nextstops/${nextstopId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({nextstop: nextstop})
        })
        .then(response => response.json())
        .then(nextstopId => {
            dispatch(deletedNextstop(nextstopId))
            })
        .catch(error => console.log(error));
    }
    
}



        
        // let nextstops = [{name:"Yosamite National Park", budget: 800, img_url: "https://cdn.unifiedcommerce.com/content/product/large/628136609470.jpg", like: 0, dislike: 0}]
        // this.setState({nextstops})})
        
        // return dispatch(setNextstops(nextstops))
