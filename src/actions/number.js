export const genRand=(n)=>{
    return {type:'RAND', payload:n}
}

export const clear=()=>{
    return {type:'CLEAR'}
}