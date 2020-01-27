const initialValue= [{id:1, name:'db back', completed:false},
                     {id:2, name:'deploy app', completed:false}]
    
const taskReducer= (state=initialValue, action)=>{
    switch(action.type)
    {
        case 'COMP':{
            return state.map(task=>{
                return {...task, ...{completed: !task.completed}}
                //or we can use return state.concat(action.payload)
            })
        }
        default:{
            return [...state]
        }
    }
}

export default taskReducer