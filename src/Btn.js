import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, reset, incrementBy} from './actions/count'

function Btn(props){
    return(
        <div>
            <button onClick={()=>{
                props.dispatch(increment())
            }}>UP</button>
            <button onClick={()=>{
                props.dispatch(decrement())
            }}>DOWN</button>
            <button onClick={()=>{
                props.dispatch(reset())
            }}>Reset</button>
            <button onClick={()=>{
                props.dispatch(incrementBy(10))
            }}>Increment by 10</button>
        </div>
    )
}

export default connect()(Btn)