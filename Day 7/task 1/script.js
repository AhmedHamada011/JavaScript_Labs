

var sub = document.getElementById("submit");

sub.addEventListener("click",function(event){

  event.preventDefault();
  let myModal = new bootstrap.Modal(document.getElementById("myModal"), {
    keyboard: false,
  });

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let modalBody = document.getElementById("modal-body");

  if(email === "" || password === "")
  {
    modalBody.innerHTML = "Please enter email and password"
    myModal.show();

  }else if(email === 'admin' && password === '123')
  {
    modalBody.innerHTML = "welcome"
    myModal.show();
  }else{
    modalBody.innerHTML = "Sorry, you are not registered"
    myModal.show();
  }

});

function login(elem){

  

  
}