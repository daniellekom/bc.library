//src folder is where ur personal code resides to seperate/organize
// in package.json go to main and change from index.js to src/index.js 
//so can run

//how do u create a server? 3 lines of code

const express = require('express');

const app = express();

//this lets postman read .json file
app.use(express.json());

//response we will get for listening to port 300 hello world as example
app.get('/', (request,response) => {
    response.send('Hello world!');

})

//req.body is what gives you the access to information
//im posting in /users in postman
app.post('/users',(request,response) => {
   const{name,age,email} = request.body;

//long hand version of code above. same same
//const {name} = req.body;

const user = {name,age,email};

//long hand for code above.
// const user ={
//     name:name,
//     age: age,
//     email: email
// }

const result = `My name is ${user.name}, I am ${user.age} years old and my email  is ${user.email}`;

response.send(result);

})

app.listen(3000, () => {
    console.log('we are listening on port 3000');
})


// control C to close listening and re-run it everytime 

// to get the http link do http://localhost:3000/
//command click on link send u to the website above