import {combineReducers} from 'redux';
import listReducers from './list_reducer';
import {reducer as formReducer} from 'redux-form';



const rootReducer = combineReducers({
    list: listReducers,
    form: formReducer
});

export default rootReducer;