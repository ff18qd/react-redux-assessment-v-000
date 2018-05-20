import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const nextstops = (state = [], action) => {
    switch(action.type) {
        // case "SUCCESSFULLY_ADD ":
        //     return action.nextstops;
        case "GET_NEXTSTOPS_SUCCESS":
            return action.nextstops;
        default:
            return state;
    }
    
}

const reducers = combineReducers({
    nextstops: nextstops
})

const middleware = [thunk];

export default createStore(
    reducers,
    applyMiddleware(...middleware),
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)