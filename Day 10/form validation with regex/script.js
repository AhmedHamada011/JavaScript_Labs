

var sub = document.getElementById("submit");

var usernameRegex =  /^[a-zA-Z\s]+$/;

sub.addEventListener("click",function(event){

  event.preventDefault();

  // initialize modal
  let myModal = new bootstrap.Modal(document.getElementById("myModal"), {
    keyboard: false,
  });

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let modalBody = document.getElementById("modal-body");

  if(username === "" || password === "")
  {
    modalBody.innerHTML = "Please enter username and password"
    myModal.show();
  }
  
  if(usernameRegex.test(username) === true){
    modalBody.innerHTML = "you enter valid username"
    myModal.show();
  }else
  {
    modalBody.innerHTML = "Please, enter valid username, Only charachers."
    myModal.show();
  }

});

