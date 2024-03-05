const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");

function addTask() {
  if (inputBox.value === "") {
    alert("Merci d'entrer une tâche");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData()
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML );
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
