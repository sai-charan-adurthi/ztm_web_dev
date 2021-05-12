var database = [
  { username: "john", password: "pass" },
  { username: "sally", password: "pass123" },
  { username: "miranda", password: "abc123" },
];
var newsfeed = [
  { username: "john", timeline: "hellooo" },
  { username: "sarah", timeline: "yellooo!" },
  { username: "matt", timeline: "hi there" },
];

var userNamePrompt = prompt("whats your username ?");
var passWordPrompt = prompt("whats your password ?");

function isUserValid(user, pass) {
    for (var i=0; i < database.length; i++){
        if (user == database[0].username && pass == database[0].password) {
            return true;
          } 
    }
    return false;
};

function signIn(user, pass){
    if (isUserValid(user, pass)){
        console.log(newsfeed);
    }else{
        alert("incorrect credentials!");
    }
};

signIn(userNamePrompt, passWordPrompt);

