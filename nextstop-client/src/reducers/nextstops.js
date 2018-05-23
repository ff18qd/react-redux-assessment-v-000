export default (state = [], action) => {
    switch(action.type) {
        case "GET_NEXTSTOPS_SUCCESS":
            return action.nextstops;
            
        case "CREATE_NEXTSTOP_SUCCESS":
            return state.concat(action.nextstop);
            
        case "DELETE_NEXTSTOP_SUCCESS":
            return action.nextstopId;
            
        case "LIKE_NEXTSTOP_SUCCESS":
            let id = action.nextstop.id;
            let index = state.findIndex(n => n.id === id);
            return [...state.slice(0, index), action.nextstop, ...state.slice(index + 1)];
           
        case "DISLIKE_NEXTSTOP_SUCCESS":
            id = action.nextstop.id;
            index = state.findIndex(n => n.id === id);
            return [...state.slice(0, index), action.nextstop, ...state.slice(index + 1)];
        
        default:
            return state;
    }
    
}