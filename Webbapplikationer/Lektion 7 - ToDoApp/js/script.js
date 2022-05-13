const form = document.getElementById("new-task-form");
const input = document.getElementById("new-task-input");
const tasks = document.getElementById("tasks");

// getTasks
const getTasks = () => {
  let allTasks = localStorage.getItem("taskList");
  if (allTasks != "") {
    allTasks = allTasks.split(",");
    tasks.innerHTML = allTasks
      .map(
        (element, index) => `
      <div class="task">
      <div class="content">
      <input class="text" type="text" readonly value="${element}">
      </div>
      <div class="actions">
      <button class="delete" onclick="deleteTask(${index})">Delete</button>
      </div>
      </div>
      `
      )
      .join("");
  } else {
    tasks.innerHTML = `
    <div class="no-tasks-found">
    <h2>No tasks found</h2>
    </div>`;
  }
};

// addTask
const addTask = (task) => {
  let allTasks = localStorage.getItem("taskList"); // Hämtar alla element i localStorage
  allTasks = allTasks ? allTasks.split(",") : []; // Om allTasks är tomt så skapar vi en tom array
  allTasks.push(task); // Lägger till task i slutet av arrayen
  localStorage.setItem("taskList", allTasks); // Sparar alla element till localStorage
};

// deleteTask
const deleteTask = (index) => {
  let allTasks = localStorage.getItem("taskList"); // Hämtar alla element i localStorage.
  allTasks = allTasks.split(","); // Delar upp textsträngen till en array av strängar.
  allTasks.splice(index, 1); // Tar bort elementet vid specifikt index.
  localStorage.setItem("taskList", allTasks); // Sparar alla element till localStorage.
  getTasks();
};

// Form submit
form.onsubmit = (event) => {
  event.preventDefault();
  let task = input.value;
  addTask(task);
  getTasks();
  form.reset();
};

window.onload = getTasks;
