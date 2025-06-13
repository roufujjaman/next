// $group $sum 

db.test.aggregate([
    { $group: { _id: "$address.country"}},
    { $count: "count" }
])


db.test.aggregate([
    { $group: { _id: "$address.country", count: { $sum: 1 } } }
])

db.test.aggregate([
    {
        $group:
        {
            _id: "$address.country",
            count: { $sum: 1 },
            people: { $push: "$name" }
        }
    }
])

db.test.aggregate([
    {
        $group:
        {
            _id: "$address.country",
            count: { $sum: 1},
            people: { $push: "$$ROOT"}
        }
    },
    {
        $project:
        {   
            "count": 1,
            "people.name": 1,
            "people.age": 1,
            "people.address": 1
        }
    }
])

db.test.aggregate([
    {
        $group:
        {
            _id: null,
            totalSalary: { $sum: "$salary" },
            minSalary: { $min: "$salary" },
            maxSalary: { $max: "$salary" },
            avgSalary: { $avg: "$salary" }
        }
    },
    {
        $project:
        {
            totalSalary: 1,
            minSalary: 1,
            maxSalary: 1,
            avgSalary: { $round: ["$avgSalary", 2]}
        }
    }
])