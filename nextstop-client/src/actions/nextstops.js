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
        let nextstops = [{name:"Yosamite National Park", budget: 800, img_url: "https://cdn.unifiedcommerce.com/content/product/large/628136609470.jpg", like: 0, dislike: 0}]
        return dispatch(setNextstops(nextstops))
    }
}