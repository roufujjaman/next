db.test.aggregate([
    {
        $unwind: "$friends"
    },
    {
        $group: { _id: "$friends", count: { $sum: 1}}
    }
])


db.test.aggregate([
    {
        $unwind: "$interests"
    },
    {
        $group: {
            _id: "$age",
            interest: { $push: "$interests" }
        }
    }
])