// Create a close button for each list item
var todoList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < todoList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  todoList[i].appendChild(span);
}

// Set up functionality to remove item upon clicking close
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add check symbol upon clicking list item
// var list = document.querySelector("ul");
// list.addEventListener(
//   "click",
//   function (ev) {
//     if (ev.target.tagName === "LI") {
//       ev.target.classList.toggle("checked");
//     }
//   },
//   false
// );

// Create a new list item when clicking "Add Task" button
// function newListItem() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementbyId("input").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === " ") {
//     alert("Task name cannot be blank.");
//   } else {
//     document.getElementsByClassName("todo").appendChild(li);
//   }
//   document.getElementById("input").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     };
//   }
// }

// export default newListItem;
