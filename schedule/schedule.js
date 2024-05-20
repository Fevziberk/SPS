let tasks = [];

function addTask() {
    const courseName = document.getElementById('course-name').value;
    const startHour = document.getElementById('start-hour').value;
    const endHour = document.getElementById('end-hour').value;
    const description = document.getElementById('description').value;
    const color = document.getElementById('color').value;
    const dayOfWeek = document.getElementById('day-of-week').value;

    if (!courseName || !startHour || !endHour || !description || !color || !dayOfWeek) {
        alert('Please fill out all fields.');
        return;
    }

    const task = {
        courseName,
        startHour,
        endHour,
        description,
        color,
        dayOfWeek
    };

    tasks.push(task);
    sortTasks();
    renderTasks();

    document.getElementById('course-name').value = '';
    document.getElementById('start-hour').value = '';
    document.getElementById('end-hour').value = '';
    document.getElementById('description').value = '';
    document.getElementById('color').value = '';
    document.getElementById('day-of-week').value = '';

    document.getElementById('add-task-fields').style.display = 'none';
}

function showAddTaskFields() {
    const addTaskFields = document.getElementById('add-task-fields');
    addTaskFields.style.display = addTaskFields.style.display === 'flex' ? 'none' : 'flex';
}

function sortTasks() {
    tasks.sort((a, b) => {
        const dayOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        if (a.dayOfWeek !== b.dayOfWeek) {
            return dayOrder.indexOf(a.dayOfWeek) - dayOrder.indexOf(b.dayOfWeek);
        }
        return a.startHour.localeCompare(b.startHour);
    });
}

function renderTasks() {
    const taskGrid = document.getElementById('task-grid');
    taskGrid.innerHTML = ''; // Clear existing tasks

    tasks.forEach((task, index) => {
        let columnIndex;
        switch (task.dayOfWeek) {
            case 'Monday':
                columnIndex = 1;
                break;
            case 'Tuesday':
                columnIndex = 2;
                break;
            case 'Wednesday':
                columnIndex = 3;
                break;
            case 'Thursday':
                columnIndex = 4;
                break;
            case 'Friday':
                columnIndex = 5;
                break;
            default:
                columnIndex = 1;
                break;
        }

        const startHourIndex = parseInt(task.startHour.split(':')[0], 10) - 9;
        const endHourIndex = parseInt(task.endHour.split(':')[0], 10) - 10;

        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.style.backgroundColor = task.color;
        taskItem.style.gridColumn = columnIndex;
        taskItem.style.gridRow = `${startHourIndex + 1} / span ${endHourIndex - startHourIndex}`;

        taskItem.innerHTML = `
            <h3>${task.courseName}</h3>
            <p>${task.startHour} - ${task.endHour}</p>
            <p>${task.description}</p>
            <p>${task.dayOfWeek}</p>
        `;

        // Add click event for removal
        taskItem.addEventListener('click', () => {
            if (removeMode) {
                removeTask(index);
            }
        });

        taskGrid.appendChild(taskItem);
    });
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

let removeMode = false;

function enableRemoveMode() {
    removeMode = !removeMode;
    const message = document.getElementById('remove-task-message');
    if (removeMode) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
}

// Add a div for the remove task message
document.body.insertAdjacentHTML('beforeend', '<div id="remove-task-message" style="display: none; color: white; text-align: center; margin-top: 10px;">Click on the task you want to remove</div>');
document.getElementById('remove-task-message').style.display = 'none';

document.querySelector('.button-remove').addEventListener('click', enableRemoveMode);
