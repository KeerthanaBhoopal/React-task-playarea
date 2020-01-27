const productInitialvalue=[{id:1,name:'marker', price:15, description:'White board marker', available:true},
{id:2,name:'pen', price:20, description:'Blue pen', available:false}]

const productReducer=(state=productInitialvalue, action)=>{
    switch(action.type){
        case'ADD_PRODUCT':{
            return [...state, action.payload]
        }
        case 'REM_PRODUCT':{
            return state.filter(product=>product.id != action.payload)
        }
        case 'PROD_AVAIL':{
            return state.map(prod=>{
                if(prod.id==action.payload)
                return {...prod, ...{available: !prod.available}}
                else return {...prod}
            })
        }
        default:{
            return [...state]
        }
    }
}

export default productReducer