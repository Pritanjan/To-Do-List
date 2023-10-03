document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText !== "") {
            const taskItem = document.createElement("li");
            taskItem.textContent = taskText;
            taskList.appendChild(taskItem);

            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    });
});
