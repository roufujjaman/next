// $match $project
db.test.aggregate([
    { $match: { gender: "Male" } },
    { $project: { name: 1, age: 1, gender: 1 } }
])

// addFields
db.test.aggregate([
    { $match: { gender: "Male" } },
    { $addFields: { username: { $toLower: "$name.firstName"}}},
    { $project: { name: 1, age: 1, gender: 1 , username: 1} }
])

// addFields
db.test.aggregate([
    { $match: { gender: "Male" } },
    { $addFields: { username: { $toLower: "$name.firstName"}}},
    { $project: { name: 1, age: 1, gender: 1 , username: 1} },
    // $merge to merge into current table    
    { $out: "userinfo"}
])

db.userinfo.find({})