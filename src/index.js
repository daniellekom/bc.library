//connect to firebase
const {
  initializeApp,cert,
} = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

// import credentials "./" means my own file use 2 .. bc its outside of src file
const credentials = require("../credentials.json");

//connect to firebase
initializeApp({
  credential: cert(credentials),
});

//connect to firestore
const db = getFirestore();


//src folder is where ur personal code resides to seperate/organize
// in package.json go to main and change from index.js to src/index.js
//so can run

//how do u create a server? 3 lines of code- API related
//setting up express below
//1)
const express = require("express");
//2)
const app = express();
//3)
//this lets postman read .json file
app.use(express.json());

//response we will get for listening to port 300 hello world as example
app.get("/", (request, response) => {
 //in the body of the request we want to get things from db and return that from firestore
const userCollection = db.collection("users");

   userCollection
   .get()
   .then(snapshot =>{
     response.send(snapshot.docs)
   

})
// response.send("Hello world!");

});
//req.body is what gives you the access to information
//im posting in /users in postman
//4th endpoint is to establish an endpoint
app.post("/users", (request, response) => {
  const { name, age, email } = request.body;

  //long hand version of code above. same same
  //const {name} = req.body;

  const user = { name, age, email };

  //long hand for code above.
  // const user ={
  //     name:name,
  //     age: age,
  //     email: email
  // }

  const result = `My name is ${user.name}, I am ${user.age} years old and my email  is ${user.email}`;

  response.send(result);
});

app.listen(3000, () => {
  console.log("we are listening on port 3000");
});

// control C to close listening and re-run it everytime

// to get the http link do http://localhost:3000/
//command click on link send u to the website above
