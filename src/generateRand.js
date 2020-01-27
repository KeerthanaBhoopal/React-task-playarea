import React from 'react'
import { connect } from 'react-redux'
import { genRand, clear } from './actions/number'

function GenarateRand(props){
    return (
        <div>
            <h2>{props.number}</h2>
            <button onClick={()=>{
                const number=Math.round(Math.random()*100)
                props.dispatch(genRand(number))
            }}>Generate Random no.</button>
            <button onClick={()=>{
                props.dispatch(clear())
            }}>Clear </button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        number:state.number
    }
}

export default connect(mapStateToProps)(GenarateRand)