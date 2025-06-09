db.test.find(
    { age: { $gt: 30 } }
)
    .projection(
        { name: 1, email: 1 }
    )

db.test.find(
    { favoutiteColor: { $in: ["Maroon", "Blue"] } }
)

db.test.find(
    { skills: { $eq: [] } }
)

db.test.find(
    {
        $and: [
            { "skills.name": "JAVASCRIPT" },
            { "skills.name": "JAVA" }
        ]
    })

db.test.updateOne({
    email: "amccurry3@cnet.com"
},
    {
        $addToSet: {
            skills: {
                name: "PYTHON",
                level: "Biginner",
                isLearning: true
            }
        }
    }
)

db.test.updateOne({
    email: "amccurry3@cnet.com"
}, {
    $addToSet: { languages: "Spanish" }
})

db.test.updateOne({
    email: "amccurry3@cnet.com"
}
    , {
        $pull:
        { skills: { "name": "KOTLIN"}}
    })


db.test.find({ email: "amccurry3@cnet.com" })