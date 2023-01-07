let score: number | string = 22
score = 'll'

type User = {
    name:string,
    id:number
}

type Admin = {
    username:string,
    id:number
}

let contactDetails: User | Admin = {name:'dekoy', id:123}

contactDetails = {username:'dekoyaaaa', id:12}

// function nameid(id:number | string){
//     console.log(`name is :${id}`)
// }

nameid('2')
nameid(2)

function nameid(id:number | string){
    if(typeof id === 'string'){
        id.toLowerCase()
    }
}


const data:number[] = [1,2,3]
const data1:string[] = ['1','2','3']
const data2:(string | number | boolean)[] = ['1','2','3',2,4,5, true]


let friends: 'debo' | 'lans' | 'timo'

friends = 'debo'