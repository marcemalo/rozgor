
let employees = [];
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const salary = document.getElementById('salary').value.trim();
    const amount = document.getElementById('amount').value.trim()
    localStorage.setItem("myContent", amount , salary , name);


    if (name === '' || salary === '' || amount === '') {
        alert('Please enter both name and salary.');
        return;
    }

    const employee = {
        name: name.toUpperCase(),
        salary: `$${salary}`,
        amount: `${amount}`
    };


    employees.push(employee);

 
    document.getElementById('name').value = '';
    document.getElementById('salary').value = '';
    document.getElementById('amount').value = '';

    updateEmployeeList();
    updateEmployeeTable();
}

function updateEmployeeList() {
    const ul = document.getElementById('employeeList');
    ul.innerHTML = '';

    employees.forEach(emp => {
        const li = document.createElement('li');
        li.textContent = `${emp.name}: ${emp.salary}: ${emp.amount}`;
        ul.appendChild(li);
    });
}

function updateEmployeeTable() {
    const div = document.getElementById('employeeTable');
    div.innerHTML = ''; 

    if (employees.length === 0) {
        div.textContent = 'No employees registered.';
        return;
    }

    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headers = ['Name', 'Salary' , 'Amount'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    employees.forEach(emp => {
        const row = table.insertRow();
        const nameCell = row.insertCell();
        const salaryCell = row.insertCell();
        const amountCell = row.insertCell()

        nameCell.textContent = emp.name;
        salaryCell.textContent = emp.salary;
        amountCell.textContent = emp.amount
    });

    div.appendChild(table);
}


const form = document.getElementById('employeeForm');
form.addEventListener('submit', handleSubmit);
