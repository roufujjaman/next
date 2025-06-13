db.test.aggregate([
    {
        $facet: {
            "countFriends": [
                { $unwind: "$friends" },
                { $group: { _id: "$friends", count: { $sum: 1 } } }
            ],
            "universities": [
                { $unwind: "$education" },
                { $group: { _id: "$education.institute", count: { $sum: 1 } } }
            ],
            "allSkills": [
                { $unwind: "$skills" },
                { $group: { _id: "$skills.name", count: { $sum: 1 }}}
            ]
        }
    }
])