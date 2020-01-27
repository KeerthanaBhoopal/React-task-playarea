import React from 'react'
import {connect} from 'react-redux'

function UserShow(props){
    console.log(props)
    return(
        <div>
            {
                //this is done to keep the data on the screen even after reloading the page.
                props.users && (
                    <div>
                         <h2>User Name :{props.users.name}</h2>
                    </div>
                )
            }
           
        </div>
    )
}
const mapStateToProps=(state,props)=>{
    return {
        users:state.users.find(user=>user.id == props.match.params.id)
        //or we can use state.users.find(user=>user.id === parseInt(props.match.params.id))
    }
}

export default connect(mapStateToProps)(UserShow)