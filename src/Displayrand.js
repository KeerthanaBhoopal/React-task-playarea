import React from 'react'
import {connect} from 'react-redux'

function DisplayRand(props){
    return (
        <div>
            <h2>{props.number}</h2>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        number:state.number
    }
}

export default connect(mapStateToProps)(DisplayRand)


