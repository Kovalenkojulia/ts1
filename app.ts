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
