// const User = {
//     name: "tunde",
//     email: "tunde@gmail.com",
//     isActive: true
// }

type User = {
    readonly _id: string,
    name:string,
    email:string,
    isActive: boolean,
    // cardDetails?: number,

}

let myUser: User = {
    _id: '1234',
    name: 'h',
    email: 'h@v.com',
    isActive: true
}

myUser.email = 'kkjk.com'
// myUser._id = '124'

type cardNumber ={
    cardnumber: number
}

type cardName ={
    cardname: string
}

type cardDetails = cardNumber & cardName & {cvv: number} 

const myCardnum: cardNumber ={ cardnumber: 1234 }
const myCardname: cardName = { cardname: 'asad' }


// const createUser = (user:User):User => {
//     return ({name:'', email:'', isActive:true})
// }
// // function createUser({name: string, isPaid: boolean}){}

// let newUser = ({name:'tunde', isPaid:false, email:"tunde@gmail.com"})

// createUser({name:"", email:"", isActive: true})

// const createCourse =() : {name:string, price:number} => {
//     return {name:"tunde", price:399}
// }





export {}