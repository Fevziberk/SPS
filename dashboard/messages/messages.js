let tasks = [];

function addTask() {
    const studentName = document.getElementById('student-name').value;
    const storedStudentName = localStorage.getItem('studentName');

    if (!studentName && !storedStudentName) {
        alert('Please provide a student name.');
        return;
    }

    if (studentName) {
        localStorage.setItem('studentName', studentName);
    }

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
        studentName: studentName || storedStudentName,
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

    document.getElementById('student-name').value = '';
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

    tasks.forEach(task => {
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
            <h3>${task.studentName}</h3>
            <p>${task.courseName}</p>
            <p>${task.startHour} - ${task.endHour}</p>
            <p>${task.description}</p>
            <p>${task.dayOfWeek}</p>
        `;

        taskGrid.appendChild(taskItem);
    });
}
