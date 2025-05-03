"use strict";
// Spread Operator
const mechanical = ['Knox', 'Juliette', 'Terry', 'Teddy', 'Martha'];
const judicial = ['Meadows', 'Sims', 'Billings'];
const groupOne = mechanical.push(...judicial);
const personaInfo = {
    name: 'Juliette Nichols',
    age: 31
};
const affiliation = {
    affiliation: 'Mechanical',
    occupation: 'Engineer',
    currentOccupation: 'Sheriff',
};
const juliette = Object.assign(Object.assign({}, personaInfo), affiliation);
// Rest Operator
const sayHi = (...users) => {
    users.forEach((user) => console.log(user));
};
nums();
