function getFullName(userEntity: {firstName: string, surname: string}): string {
    return `${userEntity.firstName} ${userEntity.surname}`;
}

const user = {
    firstName: 'Alex',
    surname: 'Alvarez',
    city: 'Madrid',
    age: 30,
    skills: {
        dev: true,
        devops: true
    }
}

const skills: string[] = ['Dev', 'Devops']

for(const skill of skills){
    console.log(skill)
}

skills.filter((s: string) => s !== 'Devops')
    .map(s => s + '! ')
    .reduce((a, b) => a + b)


const skill: readonly [number, string] = [1, 'Dev']



enum StatusCode {
    SUCCESS = 1,
    IN_PROCESS,
    FAILED
}
const res = {
    message: 'payment success',
    statusCode: StatusCode.SUCCESS
}
if(res.statusCode === StatusCode.SUCCESS) {

}
//UNION TYPES
function logId(id: string | number | boolean){
    if(typeof  id === 'string'){
        console.log(id.toLowerCase())
    } else if(typeof id === 'number'){
        console.log(id)
    } else {
        console.log(id)
    }
}

function logError(err: string | string[]){
    if(Array.isArray(err)){
        console.log(err)
    } else {
        console.log(err)

    }
}

function logObject(obj: {a: number} | {b: number}){
    if('a' in obj){
        console.log(obj.a)
    } else {
        console.log(obj.b)
    }
}

function logMultipleIds(a: string | number, b: string | boolean){
    if (a === b){

    } else {
        console.log(a)
    }
}

// Literal Types

type httpMethod = 'post' | 'get'
function fetchWithAuth(url: string, method: httpMethod){

}

// Aliases

type User = {
    name: string,
    age: number,
    skills: string[]
}
type Role = {
    id: number
}
type UserWithRole = User & Role
let user2: UserWithRole = {
    name: 'hghg',
    age: 33,
    skills: ['1', '2'],
    id: 1212
}

//Interfaces

interface User2 {
    name: string,
    age: number,
    skills: string[]
}

interface UserWithRole2 extends User{
    roleId: number
}

//Optional
function multiply (first: number, second?: number){
    if(!second) {
        return first * first
    }
    return first * second

}
