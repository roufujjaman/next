db.test.find({ age: { $exists: true } })

db.test.find({ unknown: { $exists: false } })

// all the docs have a postal code in their address
db.test.find({ "address.postalCode": { $exists: true } })

db.test.find({ age: { $type: "string" } })

// user that doesn't have any friends
db.test.find({ friends: { $size: 0 } })

// users who have only 5 firends 
db.test.find({ friends: { $size: 5 } })
    .projection({ friends: 1 })

// find a null field
db.test.find({ company: { $type: "null" } })


    
