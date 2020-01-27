import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import { startGetUser } from '../actions/users'

function UserList(props){
    //we can call the dispatch in the component only to maintain the data after the first access.
    if(props.users.length==0)
    {
        props.dispatch(startGetUser())
    }
    return (
        <div>
            <h2>Listing Users - {props.users.length}</h2>
            <ul>
                {props.users.map(user=>{
                return <li key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                })}
            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        users:state.users
    }
}
export default connect(mapStateToProps)(UserList)