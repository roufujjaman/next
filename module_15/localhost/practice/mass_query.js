db.mass.find({}).limit(10)

db.mass.aggregate([
{ $match: { isActive: true } },
{ $group: { _id: "$gender", count: { $sum: 1 } } }
    ])
    
db.mass.aggregate([
    { $match: { isActive: true, favoriteFruit: "banana" } },
    {
        $project: {
            name: 1,
            email: 1
        }
    }
])

db.mass.aggregate([
    { $group: { 
        _id: "$favoriteFruit",
        avgAge: { $avg: "$age"}
    }},
    { $sort: { avgAge: -1}}
])

db.mass.aggregate([
    { $unwind: "$friends" },
    {
        $match: {
            "friends.name": /^W/,
        }
    },
    {
        $group: {
            _id: "$_id",
            uniqueFriends: { $addToSet: "$friends.name" }
        }
    }
])

db.mass.aggregate([
    ])

