export default (state = [], action) => {
    switch(action.type) {
        case "GET_NEXTSTOPS_SUCCESS":
            return action.nextstops;
        default:
            return state;
    }
    
}