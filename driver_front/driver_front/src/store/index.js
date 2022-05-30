import { legacy_createStore } from 'redux';

import reducer from '../components/Active'

// const rootReducer = combineReducers({
//     active: reducer
// })



export default legacy_createStore(reducer)

