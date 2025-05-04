"use strict";
// destructuring
{
    const user = {
        id: 3003,
        name: {
            fname: 'Juliette',
            mname: '',
            lname: 'Nichole'
        },
        contactNo: '012456781',
        address: 'US'
    };
    // destructuring and aliasing the lname --> lastName
    const { contactNo, name: { lname: lastName } } = user;
    console.log(contactNo, lastName);
    // array destructuring
    const people = ['Juliette', 'Knox', 'Sims', 'Martha'];
    const [sheriff, , judicial] = people;
    console.log(sheriff, judicial);
}
