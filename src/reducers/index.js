import counterReducer from './counter';
import loggedReducer from './islogged';
import counterRedducer from './counter';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter : counterRedducer,
    isLogged : loggedReducer
})

export default allReducers;