taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});

/*
👉 This listens for keyboard input on the input box. If the key pressed is "Enter", it calls addTask().

📖 DOM Concept:

event.key tells which key the user pressed.
*/