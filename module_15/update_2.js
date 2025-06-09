db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
},
    { $addToSet: { interests: ["driving", "sking"] } }
)

// unset one field
db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
},
    {
        $unset: {
            birthday: 1
        }
    }
)

db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
},
    {
        $unset: {
            skills: 1
        }
    }
)

db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
},
    {
        $pop: {
            languages: 1
        }
    })


db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
},
    {
        $pull: {
            languages: "Estonian"
        }

    })

db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
},
    {
        $set:
        {
            "address.street": "Praia",
            "address.city": "Serra",
            "address.state": "Leiria",
            "address.postalCode": 885
        }
    })

db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
}, {
    $set: {
        
    }
})
