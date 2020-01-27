

const numberReducer=(state='',action)=>{
switch(action.type)
{
    case 'RAND' :{
        return action.payload
    }
    case 'CLEAR':{
        return ' '
    }
    default:{
        return state
    }
}
}

export default numberReducer