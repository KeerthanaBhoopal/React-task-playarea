import {createStore, combineReducers, applyMiddleware}from 'redux'
import thunk from 'redux-thunk'

import countReducer from '../reducers/count'
import numberReducer from '../reducers/number'
import drawReducer from '../reducers/draw'
import randomReducer from '../reducers/random'
import taskReducer from '../reducers/task'
import productReducer from '../reducers/product'
import userReducer from '../reducers/users'

const configureStore=()=>{
    const store = createStore(combineReducers({
        count:countReducer,
        number:numberReducer,
        draw:drawReducer,
        random:randomReducer,
        task:taskReducer,
        product:productReducer,
        users:userReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore