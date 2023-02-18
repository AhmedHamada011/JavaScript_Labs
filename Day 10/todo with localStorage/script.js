var main = document.getElementById("main");
task = document.getElementById("task-input");
addTask = document.getElementById("add-task");

if(localStorage.getItem("counter") === null)
localStorage.setItem("counter", 1);

addTask.addEventListener("click", function () {
  
  if (task !== "") {
    let counter = localStorage.getItem("counter");

    var elemBody = `<div class="task-container ps-3 pt-3 row border-bottom border-1 gx-0">
  <p class="task col-9">${task.value}</p>
  <div class="buttons col-3 d-flex justify-content-center align-items-baseline">
    <button type="button" class="btn btn-success lh-1 me-1" id=item${counter}-complete onclick="complete(this)"><i class="bi bi-check"></i>
    </button>
    <button type="button" class="btn btn-danger lh-1" id=item${counter}-remove onclick="remove(this)"><i class="bi bi-trash"></i></button>
  </div>
  </div>
  `;

    localStorage.setItem("item" + counter, elemBody);

    var currentItem = localStorage.getItem("item" + counter);

    main.innerHTML += currentItem;

    localStorage.setItem("counter", Number(counter) + 1);

  }

  task.value = "";
});

function getElmentID(elem) {
  return elem.id.split("-")[0];
}

function complete(elem) {
  let elemId = getElmentID(elem);
  let parentElement = elem.parentNode.parentNode;

  parentElement.classList.add("complete");

  localStorage.setItem(elemId,parentElement.outerHTML);

}

function remove(elem) {
  let counter = localStorage.getItem("counter");
  let elemId = elem.id.split("-")[0];
  localStorage.removeItem(elemId)
  elem.parentNode.parentNode.remove();
  localStorage.setItem("counter",Number(counter) - 1 )
}

function loadFromLocalStorage(){
  let counter = localStorage.getItem("counter");
  if(localStorage.length > 1){
    for (var item = 1; item <= Number(counter); item++) {
      if(localStorage.getItem("item" + item) === null)
        continue;
      main.innerHTML += localStorage.getItem("item" + item);

    }
  }
}

window.onload = loadFromLocalStorage;
