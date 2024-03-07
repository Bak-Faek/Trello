const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");
const cardContainer = document.getElementById("cardContainer")
const card = document.getElementById("card")

function addTask() {

    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  
  inputBox.value = "";
  saveData()
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData()
  }
});

function addCard() {
  let newCard = card.cloneNode(true)
  cardContainer.appendChild(newCard)
}

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML );
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
