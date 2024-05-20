function addTask() {
    const studentName = document.getElementById('student-name').value;
    const storedStudentName = localStorage.getItem('studentName');

    if (!studentName && !storedStudentName) {
        alert('Please provide a student name.');
        return;
    }

    // If the student name is provided, store it in local storage
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

    // Determine the column index based on the selected day
    let columnIndex;
    switch (dayOfWeek) {
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
            columnIndex = 1; // Default to Monday if no valid day selected
            break;
    }

    // Determine the row index based on the start hour
    const startHourIndex = parseInt(startHour.split(':')[0], 10) - 9; // Start from 9:00 AM
    const endHourIndex = parseInt(endHour.split(':')[0], 10) - 10; // Start from 10:00 AM

    const taskGrid = document.getElementById('task-grid');
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.style.backgroundColor = color;
    taskItem.style.gridColumn = columnIndex;
    taskItem.style.gridRow = `${startHourIndex + 1} / span ${endHourIndex - startHourIndex}`;

    taskItem.innerHTML = `
        <h3>${studentName || storedStudentName}</h3>
        <p>${courseName}</p>
        <p>${startHour} - ${endHour}</p>
        <p>${description}</p>
        <p>${dayOfWeek}</p>
    `;

    taskGrid.appendChild(taskItem);

    // Clear input fields
    document.getElementById('student-name').value = '';
    document.getElementById('course-name').value = '';
    document.getElementById('start-hour').value = '';
    document.getElementById('end-hour').value = '';
    document.getElementById('description').value = '';
    document.getElementById('color').value = '';
    document.getElementById('day-of-week').value = '';

    // Hide input fields
    document.getElementById('add-task-fields').style.display = 'none';
}

function showAddTaskFields() {
    const addTaskFields = document.getElementById('add-task-fields');
    if (addTaskFields.style.display === 'flex') {
        addTaskFields.style.display = 'none';
    } else {
        addTaskFields.style.display = 'flex';
    }
}
