import React from 'react'
import {connect} from 'react-redux'
import {increment, decrement, reset, incrementBy} from './actions/count'
import Display from './Display'
import Btn from './Btn'
import Draw from './Draw'
import Home from './Home'


import {BrowserRouter, Route, Link} from 'react-router-dom'

import GenerateRand from './generateRand'
import ShowRandom from './assignment/ShowRandom'
import TaskComplete from './assignment/TaskComplete'
import ProductsList from './assignment/ProductsList'
import UserList from './assignment/UserList'
import UserShow from './assignment/UserShow'

//import Displayrand from './Displayrand'

function App(props)
{
    //console.log(props)
    return (
        <BrowserRouter>
        <div>
            <h2>PlayArea</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/generate">Generate Random no</Link></li>
                 <li><Link to="/draw">draw a name</Link></li>  
                 <li><Link to="/rand">List random no.</Link></li> 
                 <li><Link to="/task">Task Completion</Link></li>
                 <li><Link to="/products">Listing products</Link></li>
                 <li><Link to="/users">Listing Users</Link></li>
            </ul>
            <hr/>
            {/* <h2>{props.count}</h2>
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

            <Display/>
            <Btn/>   */}
            <Route path='/' component={Home} exact={true}/>
            <Route path='/generate' component={GenerateRand} exact={true}/>
            <Route path='/draw' component={Draw} exact={true}/>
            <Route path='/rand' component={ShowRandom}/>
            <Route path='/task' component={TaskComplete}/>
            <Route path='/products' component={ProductsList}/>
            <Route path='/users' component={UserList} exact={true}/>
            <Route path='/users/:id' component={UserShow}/>
             {/* <GenerateRand/>
              <Displayrand/> 
              <Draw/>*/}
            
        </div>
        </BrowserRouter>
    )
}

const mapStateToProps =(state)=>{ //this is a callback functions
    return{
        count:state.count
    }
}

// const wrappedComponent = connect()(App)
// export default wrappedComponent

export default connect(mapStateToProps)(App)