export default (state = [], action) => {
    switch(action.type) {
        case "GET_NEXTSTOPS_SUCCESS":
            return action.nextstops;
            
        case "CREATE_NEXTSTOP_SUCCESS":
            return state.concat(action.nextstop);
            
        case "DELETE_NEXTSTOP_SUCCESS":
            return action.nextstopId;
        
        default:
            return state;
    }
    
}