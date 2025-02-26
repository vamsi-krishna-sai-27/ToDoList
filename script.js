document.addEventListener("DOMContentLoaded", () => {
    const takeInput = document.querySelector(".text-input");
    const addTaskBtn = document.querySelector(".add-button");
    const taskList = document.querySelector(".list-to-do");
    const clearAllBtn = document.querySelector(".reset-button");

    // Add a new task
    addTaskBtn.addEventListener("click", () => {
        const taskText = takeInput.value.trim(); // Fixed: use takeInput instead of text-input
        if (taskText !== "") {
            addTask(taskText); // Fixed: call addTask instead of addTaskBtn
            takeInput.value = "";
        }
    });

    // Add task on pressing Enter
    takeInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addTaskBtn.click();
        }
    });

    // Clear all tasks
    clearAllBtn.addEventListener("click", () => {
        taskList.innerHTML = "";
    });

    // Function to add a task
    function addTask(taskText) {
        const li = document.createElement("li");

        // Task text
        const span = document.createElement("span");
        span.textContent = taskText;
        li.appendChild(span);

        // Complete button
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener("click", () => {
            span.classList.toggle("complete"); // Fixed: use "complete" as a string
        });
        li.appendChild(completeBtn);

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(li);
        });
        li.appendChild(deleteBtn);

        // Add task to the list
        taskList.appendChild(li);
    }
});