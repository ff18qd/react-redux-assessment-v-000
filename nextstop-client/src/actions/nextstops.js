import { resetNextstopForm } from "./nextstopForm";
import fetch from 'isomorphic-fetch';

// const API_URL = process.env.REACT_APP_API_URL;
// private IP 172.31.35.66
const API_URL = "http://ec2-52-14-153-64.us-east-2.compute.amazonaws.com:8081/api";

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

const likedNextstop = nextstop => {
    return {
        type: "LIKE_NEXTSTOP_SUCCESS",
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
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
        .then(response => response.json()) //get Unexpected Json syntax error
        .then(nextstopId => dispatch(deletedNextstop(nextstopId)))
        .catch(error => console.log(error));
    };
};

export const likeNextstop = (nextstopId, likeData) => {
     return dispatch => {
        return fetch(`${API_URL}/nextstops/${nextstopId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(likeData) //change the parsing-in data format to {}
        })
        .then(response => response.json())
        .then(nextstop => {
            console.log(nextstop);
            return dispatch(likedNextstop(nextstop))
            })
        .catch(error => console.log(error));
    }
}

        
        // let nextstops = [{name:"Yosamite National Park", budget: 800, img_url: "https://cdn.unifiedcommerce.com/content/product/large/628136609470.jpg", like: 0, dislike: 0}]
        // this.setState({nextstops})})
        
        // return dispatch(setNextstops(nextstops))
