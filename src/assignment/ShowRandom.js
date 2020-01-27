import React from 'react'
import {connect} from 'react-redux'
import {addRand} from '../actions/random'

function ShowRandom (props){
     const handleClick = () => {
        const num=Math.round(Math.random()*100)
        props.dispatch(addRand(num))
    }
    return (
        <div>
           <p> {props.random[props.random.length -1]}</p>
            <button onClick={handleClick}>Generate Random</button>
            <ul>
                {props.random.map((n,i)=>{
                return <li key={i}>{n}</li>
                
            })}
            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        random:state.random
    }
}

export default connect(mapStateToProps)(ShowRandom)