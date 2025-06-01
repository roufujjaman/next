const api = "http://api.open-notify.org/astros.json";

fetch(api)
    .then((res) => res.json())
    .then(console.log)