document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employee-form');
    const employeeItems = document.getElementById('employee-items');
    const message = document.getElementById('message');
    let employees = [];
    let nextId = 1;

    document.getElementById('add-employee').addEventListener('click', () => {
        const name = document.getElementById('name').value.trim();
        const profession = document.getElementById('profession').value.trim();
        const age = parseInt(document.getElementById('age').value.trim(), 10);

        if (name && profession && age) {
            const newEmployee = {
                id: nextId++,
                name: name,
                profession: profession,
                age: age
            };
            employees.push(newEmployee);
            displayEmployees();
            showMessage('Employee added successfully!', 'success');
        } else {
            showMessage('All fields are required!', 'error');
        }
    });

    function displayEmployees() {
        employeeItems.innerHTML = '';
        employees.forEach(employee => {
            const listItem = document.createElement('li');
            listItem.className = 'employee-item';
            listItem.innerHTML = `
                ${employee.name} - ${employee.profession} - ${employee.age}
                <button class="delete-button" data-id="${employee.id}">Delete</button>
            `;
            employeeItems.appendChild(listItem);
        });

        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const id = parseInt(e.target.getAttribute('data-id'), 10);
                employees = employees.filter(emp => emp.id !== id);
                displayEmployees();
            });
        });
    }

    function showMessage(text, type) {
        message.textContent = text;
        if (type === 'success') {
            message.className = 'success-message';
        } else if (type === 'error') {
            message.className = 'error-message';
        }
    }
});
