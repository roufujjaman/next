db.test.find()

db.test.aggregate([
    {
        $bucket: {
            groupBy: "$age",
            boundaries: [20, 40, 50, 80],
            default: "80_Plus",
            output: {
                count: { $sum: 1},
                people: { $push: "$name.firstName"}
            }
        }
    }
])
    .sort({count: 1})
