fetch('https://randomuser.me/api/?results=12')
//reads the response and returns a promise that resolves to json
    .then(response => response.json())
    .then(data => console.log(data.results));


