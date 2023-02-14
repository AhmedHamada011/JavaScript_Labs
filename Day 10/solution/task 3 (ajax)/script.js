window.onload = function () {
  
  var xhtml = new XMLHttpRequest();

  xhtml.onload = function (params) {
    var allData = JSON.parse(this.responseText);
    var users = allData.data;
    var usersData = document.getElementById("usersData");
    for(user of users){
      console.log(user);
      usersData.innerHTML += `<tr>
        <td>${user.email}</td>
        <td><img src=${user.avatar}></td>
      </tr>`
      console.log(usersData);
      // usersData(user.email)
    }
  }
  xhtml.open("GET","https://reqres.in/api/users?page=2")
  xhtml.send();
}