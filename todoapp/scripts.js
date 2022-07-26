const taskInput = document.querySelector("#input");
const inputButton = document.querySelector("#input-button");
const taskList = document.querySelector("#tasklist");

inputButton.addEventListener("click", addTask);
taskList.addEventListener("click", removeTask);

function addTask(e) {
   if(taskInput.value === "") {
        alert("type something");
   };
   // Create new li and add class
   const li = document.createElement("li");
   li.className = "task";
   // create new text node and put in li
   li.appendChild(document.createTextNode(taskInput.value));
   // create link
   const link = document.createElement("a");
   // add class to <a>
   link.className = "delete-todo";
    // add x to <a>
   link.innerHTML = "<h3>X</h3>";
   // add link in li
   li.appendChild(link);
   // add li in ul
   taskList.appendChild(li);
   //delete strings in text box which we submitted
   taskInput.value = "";
   
   e.preventDefault();
};

function removeTask(e) {
   if (e.target.parentElement.classList.contains("delete-todo")) {
         e.target.parentElement.parentElement.remove();
   }
}