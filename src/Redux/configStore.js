import{combineReducers,createStore}from'redux'
import {BaiTapOanTuXiReducer} from './BaiTapOanTuXiReducer'
const rootReducer = combineReducers({
    BaiTapOanTuXiReducer
})

export const store=createStore(rootReducer)