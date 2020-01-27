
const drawReducer=(state=[{id:0,name:'sam'},{id:1,name:'mark'},{id:2,name:'joe'}], action)=>{
    switch(action.type){
        case 'DRAW':{
            
            return action.payload.n
        }
        default:{
            return state
        }
    }

}

export default drawReducer

