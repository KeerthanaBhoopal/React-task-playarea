export const addProd=(product)=>{
    return {type:'ADD_PRODUCT', payload:product}
}
export const remProd=(id)=>{
    return {type:'REM_PRODUCT', payload:id}
}

export const markAvailability=(id)=>{
    return {type:'PROD_AVAIL', payload:id}
}