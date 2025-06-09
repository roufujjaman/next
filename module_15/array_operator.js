// finds exact match
db.test.find({
    "interests": ["Travelling", "Gaming", "Reading"]
})
    .projection({ interests: 1 })

// finds match in any order
db.test.find({
    "interests": { $all: ["Travelling", "Gaming", "Reading"] }
})
    .projection({ interests: 1 })

// exact match
db.test.find({ skills: { name: "PYTHON", level: "Beginner", isLearning: false } })
    
// element match
db.test.find({
    skills: {
        $elemMatch: {
            name: "PYTHON",
            level: "Intermidiate"
        }
    }
})
    
    
    
    