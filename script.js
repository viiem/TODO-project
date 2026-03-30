const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

//Load tasks to localstorage
window.onload = function() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.completed));
};
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    addTaskToDOM(taskText, false);
    saveTask(taskText, false);

    taskInput.value = "";

    taskList.appendChild(li);
    taskInput.value = "";
});
//Add to DOM
function addTaskToDOM(text,completed){
    const li = document.createElement('li)');
    li.textContent = text;
    if (completed) li.classList.add('completed');

  /*  // to delete task
    li.addEventListener('click', () => {
        li.classList.toggle('completed');
        updateTaskInStorage(li.textContent, li.classList.contains('completed'));
    });
    taskList.appendChild(li);
*/
}
//save task to localstorage
function saveTask(text,completed){
    //tasks
    //tasks.push
}
//update task in localstorage
function updateTaskInStorage(text, completed){
    const tasks
    const task
}
