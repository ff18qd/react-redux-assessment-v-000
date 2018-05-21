import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import nextstops from './reducers/nextstops';
import nextstopFormData from './reducers/nextstopFormData';


const reducers = combineReducers({
    nextstops,
    nextstopFormData
})

const middleware = [thunk];

export default createStore(
    reducers,
    window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_(),
    applyMiddleware(...middleware)
)