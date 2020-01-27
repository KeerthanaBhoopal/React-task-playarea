import React from 'react'
import {connect} from 'react-redux'
import {taskcomp} from '../actions/task'

function TaskComplete(props){
     //console.log('hi')
    const handleClick=()=>{
        props.dispatch(taskcomp())
    }
    return(
        
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th><input type='checkbox' onClick={handleClick}/></th>
                        <th>Title</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.task.map((t)=>{
                        return <tr key={t.id}>
                                <td><input type='checkbox' onClick={handleClick}/></td>
                                <td>{t.name}</td>
                                <td>{t.completed ? 'completed' : 'pending'}</td>
                            </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}


const mapStateToProps=(state)=>{
    return{
        task:state.task
    }
        
}

export default connect(mapStateToProps)(TaskComplete)

