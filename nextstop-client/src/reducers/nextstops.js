export default (state = [], action) => {
    switch(action.type) {
        case "GET_NEXTSTOPS_SUCCESS":
            return action.nextstops;
            
        case "CREATE_NEXTSTOP_SUCCESS":
            return state.concat(action.nextstop);
            
        case "DELETE_NEXTSTOP_SUCCESS":
            return action.nextstopId;
            
        case "LIKE_NEXTSTOP_SUCCESS":
            const id = action.nextstop.id;
            const index = state.findIndex(n => n.id === id);
            console.log(index);
            return [...state.slice(0, index), action.nextstop, ...state.slice(index + 1)];
           
        
        default:
            return state;
    }
    
}