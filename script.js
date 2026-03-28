const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//Load tasks to localstorage
window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
};
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText === "") return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // to delete task
    li.addEventListener('click', () => {
        taskList.removeChild(li);
    });

    taskList.appendChild(li);
    taskInput.value = "";
});