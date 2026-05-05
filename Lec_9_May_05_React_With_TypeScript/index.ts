let x:number=5 // let x:number=5 //one line initializer
x=12
console.log(x)

let myname:string='terry' // not with interface

type USER_TYPE={
    name:string,
    age:number,
    hobbies:string[]
    isActive?:boolean
}

const user1:USER_TYPE={
    name:'john',
    age:12,
    hobbies:['cricket','baseball'],
    isActive:false    
}

interface IAnimal{
    name:string
}
interface IAnimal{
    barks:boolean
}
const animal1:IAnimal={
    name:'lion',
    barks:true
}

type ANIMAL_TYPE1={
    name:string
}
type ANIMAL_TYPE2={
    barks:boolean
}

const cat:ANIMAL_TYPE1 & ANIMAL_TYPE2={
    name:'oggy',
    barks:false
}

function sum(a:number,b:number):number{
    return a+b
}
console.log(sum(2,4))