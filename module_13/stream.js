function fetchData(id) {
    return new Promise((resolve) => 
        setTimeout(() => 
            resolve("working")
        , 1000)
    )
}


fetchData(100).then((data) => console.log(data))