var todoList = document.getElementsByClassName("list-item");
var i;
for (i = 0; i < todoList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  todoList[i].appendChild(span);
}
