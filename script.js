
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add a new task
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // ignore empty input

  const li = document.createElement('li');
  li.textContent = taskText;

  // click = toggle completed
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // right click = delete
  li.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = '';
});
