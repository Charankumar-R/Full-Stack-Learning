//5. Checking empty input
if (taskText === "") {
  alert("Please enter a task!");
  return;
}


//👉 Prevents adding an empty task.

//6. Creating a new <li>
const li = document.createElement("li");
li.textContent = taskText;

/*
👉 This creates a new list item in memory and sets its text.

📖 DOM Concept:

document.createElement("li") → creates an element (not yet on the page).

.textContent → sets the text inside that element.
*/
//7. Mark task as complete (toggle class)
li.addEventListener("click", () => {
  li.classList.toggle("completed");
});

/*
👉 If the user clicks on the task, we toggle the class completed (which adds line-through styling).

📖 DOM Concept:

.classList.toggle("classname") → adds the class if not present, removes it if already present.
*/
//8. Adding a Delete Button
const deleteBtn = document.createElement("button");
deleteBtn.textContent = "❌";
deleteBtn.style.marginLeft = "10px";
deleteBtn.addEventListener("click", () => {
  li.remove();
});

/*
👉 We create a button, give it text "❌", and add a click event that removes the task.

📖 DOM Concept:

.remove() → removes the element from the DOM completely.

.style.property → lets you change CSS directly from JS.
*/
//9. Appending elements
li.appendChild(deleteBtn);
taskList.appendChild(li);

/*
👉 Finally, we attach the delete button inside the <li>, and then attach the <li> inside the <ul>.

📖 DOM Concept:

.appendChild() → puts one element inside another.
*/
//10. Clearing input
taskInput.value = "";


//👉 Resets the input box after adding a task.