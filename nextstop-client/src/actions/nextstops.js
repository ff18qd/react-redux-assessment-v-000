// action creator
const setNextstops = nextstops => {
    return {
        type: "GET_NEXTSTOPS_SUCCESS",
        nextstops
    }
}

//async actions
//use fetch data instead after fix the fetch api issue
export const getNextstops = () => {
   return dispatch => {
        // let nextstops = [{name:"Yosamite National Park", budget: 800, img_url: "https://cdn.unifiedcommerce.com/content/product/large/628136609470.jpg", like: 0, dislike: 0}]
        
        fetch("http://ec2-18-222-85-245.us-east-2.compute.amazonaws.com:8081/api/nextstops")
        .then(response => response.json())
        .then(nextstops => {
            // console.log(nextstops);
        return dispatch(setNextstops(nextstops))})
   }
}
            // this.setState({nextstops})})
        
        // return dispatch(setNextstops(nextstops))
