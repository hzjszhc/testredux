import { combineReducers } from 'redux'
import counter from './counter'
import infoMember from './infoMember'

//使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    counter,
    infoMember
});

export default rootReducer;
