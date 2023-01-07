interface User {
    readonly dbId: number
    email:string,
    userId: number
    googleId?: string,
    // startTrail: () => string 
    startTrail():string 
    getCoupon(coupName:string, value:number):number 
}

interface User {
    token:string
}

interface Admin extends User {
    role: 'tunji' | 'bola' | 'god'
}

const tunde: Admin = {email:'t"gmail.com', userId:123, dbId:101, startTrail: () => { return 'help me'}, getCoupon: (name:'tuns', val:12) => {return 2}, token:'github Token', role: 'tunji' }
tunde.email = 't@mail.com'
// tunde.dbId = 000