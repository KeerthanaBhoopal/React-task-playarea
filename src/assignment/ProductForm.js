//this form data need not be present in the redux coz we are not sharing the data of the form

import React from 'react'
import {connect} from 'react-redux'
import {addProd} from '../actions/product'

class ProductForm extends React.Component{
    constructor()
    {
        super()
        this.state={
            name:'',
            price:'',
            description:'',
            available:false
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleCheck=(e)=>{
        this.setState({
            [e.target.name]:e.target.checked
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:Number(new Date()),
            name:this.state.name,
            price:this.state.price,
            description:this.state.description,
            available:this.state.available
        }
        console.log(formData)
        this.props.dispatch(addProd(formData))

    }
    render()
    {
        return(
            <div>
                <h3>Add Product</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="price">Price</label>
                    <input type="text" id="price" name="price" value={this.state.price} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="description">Description</label>
                    <input type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}/>
                    <br/>
                    <label htmlFor="available">Available</label>
                    <input type="checkbox" id="available" name="available" checked={this.state.available} onChange={this.handleCheck}/>
                    <br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }

}

export default connect()(ProductForm)