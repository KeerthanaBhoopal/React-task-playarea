import React from 'react'
import {connect} from 'react-redux'
import ProductForm from '../assignment/ProductForm'
import {remProd, markAvailability} from '../actions/product'

function ProductsList (props){
    const handleRemove=(id)=>{
        const confirmRemove=window.confirm("are you sure?")
        if(confirmRemove)
        props.dispatch(remProd(id))
    }
    const handleClick=(id)=>{
        props.dispatch(markAvailability(id))
    }
    
    return (
        <div>
            <h2>Products List - {props.product.length}</h2>
            <table border={2}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Available(yes/no)</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    
                        {props.product.map((p)=>{
                            return (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.price}</td>
                                    <td>{p.description}</td>
                                    <td>{p.available? 'Available':'Not-Available'} <input type="checkbox" onChange={()=>{
                                        handleClick(p.id)
                                    }}/></td>
                                    
                                    <td><button onClick={()=>{handleRemove(p.id)}}>Remove</button></td>
                                </tr>
                            )
                        })}
                    
                </tbody>
            </table>
            <hr/>
            <ProductForm/>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        product:state.product
    }
}

export default connect(mapStateToProps)(ProductsList)