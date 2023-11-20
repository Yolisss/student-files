fetch('https://randomuser.me/api/?results=12')
//reads the response and converting it to json 
    .then(response => response.json())
    //after successfully fetching data, we grab list of 
    //students from results prop
    //passing results as arg for generateStudents func
    .then(data => generateStudents(data.results));


function generateStudents(users){
    users.forEach(user => {
        console.log('list of users', user)
    })
}