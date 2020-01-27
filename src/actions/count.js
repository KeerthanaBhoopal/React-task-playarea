//action generator / action creator
//to export multiple functions in a file use the export keyword instead of [export default increment /decrement ] etc..
export const increment=()=>{
    return {type:'INCREMENT'}
}

export const decrement=()=>{
    return {type:'DECREMENT'}
}

export const reset=()=>{
    return {type:'RESET'}
}

export const incrementBy=(n)=>{
    return {type:'INCBY', payload:n}
}

/*
export default increment

*/