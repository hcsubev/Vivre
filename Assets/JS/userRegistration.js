function User(username, password, email){
    this.id = 1;
    this.username = username;
    var password = password;
    this.email = email;

    this.getPassword = function(){
        return password;
    }
    this.setPassword = function(newPassword){
        password = newPassword;
    }
};

function UsersDB(){
    this.users = [];
    this.addUser = function(user){
       this.users.push(user);
    }
};

var userDB = new UsersDB;

document.getElementById("regButton").addEventListener("click",function(event){
    event.preventDefault();
    if(!userDB.users.some(a=>a.username==document.getElementById("username").value)){
        var user = document.getElementById("username").value;
    }else{
        alert("Това потребителско име вече съществува.");
        document.getElementById("username").value="";
    }
    if(document.getElementById("passwordFirst").value===document.getElementById("passwordSecond").value){
        var pass = document.getElementById("passwordFirst").value;
    }else{
        alert("Въведените пароли са различни.")
        return;
    }
    var email = document.getElementById("email").value;
    if(user && pass && email){
        var user = new User(user, pass, email);
        userDB.addUser(user);
    }
    event.preventDefault();
    console.log(userDB.users);
});
