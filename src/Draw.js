import React from 'react'
import {remove} from './actions/draw'
import {connect} from 'react-redux'

function Draw(props){

    props.draw.map((d)=>{
        console.log(d.name) 
        })
    console.log(props)

    const rand=Math.round(Math.random()*2)
    var ele=''
    props.draw.map((d)=>{
        if(d.id==rand)
            ele= d.name 
    }) 
    
    return(
        <div>
            <center>
            {ele}
            <hr/>
            <table border={1}> 
            <tbody>
                {props.draw.map((d)=>{
                    if(d==0)
                    console.log("no draw")
                    else
                        return <tr key={d.id}><td>{d.name}</td></tr> 
                    }) } 
            </tbody>
            </table>
            <button onClick={()=>{
               
                // const ele=props.draw.find(d=>d.id == rand)
                const draw=props.draw.filter(d=>d.id !==rand)
                // props.draw.map((d)=>{
                //     if(d.id==rand)
                //         ele= d.name 
                // }) 
                props.dispatch(remove(draw))
            }}>DRAW</button>
            </center>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {
        draw:state.draw
    }
}

export default connect(mapStateToProps)(Draw)



// const customers = prevState.customers.filter(cust => cust._id !== response.data._id)