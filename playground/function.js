//hof- function which takes a fucntion as an argument or a function that returns a function is an higher order fucntion.

//hof- forEach(), find(), filter(), event listeners

function add(n){
    return (m)=>{
        return n+m
    }
}

console.log(add(5)(10)) // output: 15
console.log(add(5)) //output: [function]


//hoc - a component which takes a component as an argument or a component that returns a component is called a higher order component

//hoc - are nothing but functions