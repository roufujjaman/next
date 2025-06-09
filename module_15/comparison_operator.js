db.test.find({age: {$gt: 30}})


db.test.find(
    { gender: "Female", age: { $gte: 18, $lt: 25 } },
    { name: 1, age: 1, gender: 1 })
    .sort({ age: 1 })


// $in
db.test.find(
    { gender: "Female", age: { $in: [18, 19, 20] } },
    { name: 1, age: 1, gender: 1 }
    .sort({ age: 1 }))
    
db.test.find(
    {gender: "Female", interests: {$in: ["Cooking"]}})
    .projection({name: 1, age: 1, gender: 1, interests: 1})
    .sort({age: 1})



// $and $or
db.test.find({
    $and: [
        { interests: {$in : ["Reading", "Writing"]}},
        { age: { $ne: 16 } },
        { age: { $lte: 25 } }
    ]
})
    .projection({
        name: 1,
        age: 1,
        interests: 1
    })
    .sort({ age: 1 })
    
db.test.find({
    $or: [
        { interests: "Travelling" },
        { interests: "Cooking" }
    ]
})
    .project({
        name: 1, age: 1, interests: 1
    })
    
db.test.find(
    {
        $and: [
            { "education.major": "Philosophy" },
            { "education.year": { $gt: 2010 } }
        ]
    })
    .projection({ education: 1 })


