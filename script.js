// Select elements
        var taskInput = document.getElementById("taskInput");
        var addBtn = document.getElementById("addBtn");
        var taskList = document.getElementById("taskList");

        
        addBtn.addEventListener("click", addTask);

        
        taskInput.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                addTask();
            }
        });

        
        function addTask() {
            var taskText = taskInput.value.trim();
            
            if (taskText === "") {
                alert("Please enter a task");
                return;
            }

            var li = document.createElement("li");

           
            var checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkbox");
            
            checkbox.addEventListener("change", function() {
                li.classList.toggle("completed");
            });

            
            var taskSpan = document.createElement("span");
            taskSpan.classList.add("task-text");
            taskSpan.textContent = taskText;

            
            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.classList.add("delete");

            deleteBtn.addEventListener("click", function() {
                li.remove();
            });

            li.appendChild(checkbox);
            li.appendChild(taskSpan);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
            
            taskInput.value = "";
        }