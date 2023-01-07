let greetings = 'Hello Tunde';
console.log(greetings)

greetings.toLowerCase()


let hero:string 

const getHero = () => {
    return 'thor'
}
hero = getHero()

const addNum = (num:number): number => {
    return num + 2
}

const getUpper = (val:string) => {
    return val.toUpperCase()
}

const loginUser = (name:string, email:string, isPaid:boolean = false) => {

}

const getValue = (myVal:number): boolean| string  => {
    if (myVal > 5) {
        return true
    }
    return "200 is 0k"

}

const heros = ["antman", "spiderman", "batman"]

heros.map((x):string => {
    return`x is ${heros}`
})

const consoleError = (errmsg: string) : void => {
    console.log(errmsg)
}

function handleError(errmsg: string) : never {
    throw new Error(errmsg)
}

loginUser('ade', 'asad.com') 

addNum(5)
getUpper('jjs')



export {} 