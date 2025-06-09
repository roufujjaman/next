db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
}, { $set: { age: 80 } })


db.test.updateOne(
    { _id: ObjectId("6406ad63fc13ae5a40000066") },
    {
    $addToSet: {
        interests: "Coding"
        }
    })

db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
},
    {
        $addToSet: {
            interests: {
                $each: ["sking", "surfing", "driving"]
            }
        }
    }
)


db.test.updateOne({
    _id: ObjectId("6406ad63fc13ae5a40000066")
},
    {
        $push: {
            interests: {
                $each: ["sking", "surfing", "driving"]
            }
        }
    }
)