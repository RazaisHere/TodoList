const inputbox = document.getElementById("input-Box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputbox.value == "") {
    alert("Enter Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputbox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputbox.value = "";
  SaveData();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      SaveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      SaveData();
    }
  },
  false
);
function SaveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();
