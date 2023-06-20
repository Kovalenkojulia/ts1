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
