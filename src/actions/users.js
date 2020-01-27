import Axios from "axios"

//1. to fetching the apis from the server.
//2. to store data within the redux store.
//3. prefix the actions with the keyword 'start', to indicate the action generator to fetch the apis.

export const setUser=(users)=>{
    return {type:'SET_USER', payload:users}
}

export const startGetUser=()=>{
    return(dispatch)=>{
        Axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
            const users=response.data
            console.log(users)
            dispatch(setUser(users))
    })
    }
}