// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const signupContainer = document.getElementById('signup-container');
    const loginContainer = document.getElementById('login-container');
    const todoContainer = document.getElementById('todo-container');

    const signupForm = document.getElementById('signup-form');
    const loginForm = document.getElementById('login-form');
    const todoForm = document.getElementById('todo-form');

    const showLogin = document.getElementById('show-login');
    const showSignup = document.getElementById('show-signup');
    const logoutButton = document.getElementById('logout-button');

    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const users = {};

    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        if (username in users) {
            alert('Username already exists');
        } else {
            users[username] = password;
            alert('Sign up successful');
            signupForm.reset();
            toggleContainers('login');
        }
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;
        if (users[username] && users[username] === password) {
            alert('Login successful');
            loginForm.reset();
            toggleContainers('todo');
        } else {
            alert('Invalid username or password');
        }
    });

    showLogin.addEventListener('click', () => {
        toggleContainers('login');
    });

    showSignup.addEventListener('click', () => {
        toggleContainers('signup');
    });

    logoutButton.addEventListener('click', () => {
        toggleContainers('login');
    });

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask(todoInput.value);
        todoInput.value = '';
    });

    function addTask(task) {
        if (task === '') return;

        const li = document.createElement('li');
        li.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete-button';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });

        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }

    function toggleContainers(container) {
        signupContainer.style.display = container === 'signup' ? 'block' : 'none';
        loginContainer.style.display = container === 'login' ? 'block' : 'none';
        todoContainer.style.display = container === 'todo' ? 'block' : 'none';
    }
});
