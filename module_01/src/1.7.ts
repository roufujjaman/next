// Spread Operator
const mechanical: string[] = ['Knox', 'Juliette', 'Terry', 'Teddy', 'Martha'];
const judicial: string[] = ['Meadows', 'Sims', 'Billings'];

const groupOne = mechanical.push(...judicial);



const personaInfo = {
    name: 'Juliette Nichols',
    age: 31
}

const affiliation = {
    affiliation: 'Mechanical',
    occupation: 'Engineer',
    currentOccupation: 'Sheriff',
}

const juliette = {...personaInfo, ...affiliation}


// Rest Operator
const sayHi = (...users: string[]) => {
    users.forEach((user: string)=> console.log(user))
}

nums()
