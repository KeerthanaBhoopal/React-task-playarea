import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'

import configureStore from './store/configureStore'
import { startGetUser } from './actions/users'
// import {increment, decrement, reset, incrementBy} from './actions/count'

const store =configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})
console.log(store.getState())
//for api calling 
store.dispatch(startGetUser())

// store.dispatch(increment())
// store.dispatch(increment())

// store.dispatch(decrement())

// store.dispatch(reset())

// store.dispatch(incrementBy(10))

const  jsx=(
    <Provider store={store}>
        <App/>
    </Provider>
)



ReactDOM.render(jsx,document.getElementById('root'))