var username, password

username = prompt("Enter username: ");

password = prompt("Enter password: ");

if(username == "admin" && password =="421$$")
{
    alert("Welcome login success");
    
} else if(username != "admin" && password == "421$$")
{
    alert("Sorry, username is wrong");

}else if(username == "admin" && password != "421$$")
{

    alert("Sorry, password is wrong");

}
else{
    alert("Sorry, username and password are wrong");
}

