// ===========================
// TO-DO LIST APPLICATION
// Local Storage & DOM Management
// ===========================

// DOM Elements
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const tasksList = document.getElementById('tasksList');
const emptyState = document.getElementById('emptyState');
const prioritySelect = document.getElementById('prioritySelect');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompletedBtn');
const deleteAllBtn = document.getElementById('deleteAllBtn');
const totalCount = document.getElementById('totalCount');
const completedCount = document.getElementById('completedCount');
const pendingCount = document.getElementById('pendingCount');
const editModal = document.getElementById('editModal');
const editInput = document.getElementById('editInput');
const editPriority = document.getElementById('editPriority');
const saveEditBtn = document.getElementById('saveEditBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const modalClose = document.querySelector('.modal-close');

// State
let tasks = [];
let currentFilter = 'all';
let editingTaskId = null;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
    renderTasks();
    updateStats();
});

// ===== EVENT LISTENERS =====
addBtn.addEventListener('click', addTask);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

clearCompletedBtn.addEventListener('click', clearCompleted);
deleteAllBtn.addEventListener('click', deleteAll);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderTasks();
    });
});

saveEditBtn.addEventListener('click', saveEdit);
cancelEditBtn.addEventListener('click', closeEditModal);
modalClose.addEventListener('click', closeEditModal);
editModal.addEventListener('click', (e) => {
    if (e.target === editModal) closeEditModal();
});

// ===== TASK FUNCTIONS =====
function addTask() {
    const text = todoInput.value.trim();
    const priority = prioritySelect.value;

    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false,
        priority: priority,
        date: new Date().toLocaleDateString()
    };

    tasks.unshift(task);
    todoInput.value = '';
    prioritySelect.value = 'medium';
    saveTasks();
    renderTasks();
    updateStats();
}

function deleteTask(id) {
    if (confirm('Are you sure you want to delete this task?')) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
        updateStats();
    }
}

function toggleTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
        updateStats();
    }
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    if (task) {
        editingTaskId = id;
        editInput.value = task.text;
        editPriority.value = task.priority;
        editModal.classList.add('show');
        editInput.focus();
    }
}

function saveEdit() {
    const newText = editInput.value.trim();
    const newPriority = editPriority.value;

    if (newText === '') {
        alert('Task cannot be empty!');
        return;
    }

    const task = tasks.find(task => task.id === editingTaskId);
    if (task) {
        task.text = newText;
        task.priority = newPriority;
        saveTasks();
        renderTasks();
        updateStats();
        closeEditModal();
    }
}

function closeEditModal() {
    editModal.classList.remove('show');
    editingTaskId = null;
    editInput.value = '';
    editPriority.value = 'medium';
}

function clearCompleted() {
    if (tasks.filter(task => task.completed).length === 0) {
        alert('No completed tasks to clear!');
        return;
    }

    if (confirm('Remove all completed tasks?')) {
        tasks = tasks.filter(task => !task.completed);
        saveTasks();
        renderTasks();
        updateStats();
    }
}

function deleteAll() {
    if (tasks.length === 0) {
        alert('No tasks to delete!');
        return;
    }

    if (confirm('Delete all tasks? This cannot be undone!')) {
        tasks = [];
        saveTasks();
        renderTasks();
        updateStats();
    }
}

// ===== RENDERING =====
function renderTasks() {
    tasksList.innerHTML = '';

    let filteredTasks = tasks.filter(task => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'pending') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
        if (currentFilter === 'high') return task.priority === 'high';
        return true;
    });

    if (filteredTasks.length === 0) {
        emptyState.classList.add('show');
        return;
    }

    emptyState.classList.remove('show');

    filteredTasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
    });
}

function createTaskElement(task) {
    const div = document.createElement('div');
    div.className = `task-item ${task.priority}-priority ${task.completed ? 'completed' : ''}`;
    div.setAttribute('data-id', task.id);

    div.innerHTML = `
        <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''} onchange="toggleTask(${task.id})">
        <div class="task-content">
            <div class="task-text">${escapeHtml(task.text)}</div>
            <div class="task-meta">
                <span class="task-priority ${task.priority}">${task.priority}</span>
                <span class="task-date">📅 ${task.date}</span>
            </div>
        </div>
        <div class="task-actions">
            <button class="task-btn edit-btn" onclick="editTask(${task.id})" title="Edit task">
                <i class="fas fa-edit"></i>
            </button>
            <button class="task-btn delete-btn" onclick="deleteTask(${task.id})" title="Delete task">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `;

    return div;
}

// ===== STATISTICS =====
function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    totalCount.textContent = total;
    completedCount.textContent = completed;
    pendingCount.textContent = pending;
}

// ===== LOCAL STORAGE =====
function saveTasks() {
    localStorage.setItem('todoTasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('todoTasks');
    if (savedTasks) {
        try {
            tasks = JSON.parse(savedTasks);
        } catch (error) {
            console.error('Error loading tasks:', error);
            tasks = [];
        }
    }
}

// ===== UTILITY FUNCTIONS =====
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Escape key closes modal
    if (e.key === 'Escape' && editModal.classList.contains('show')) {
        closeEditModal();
    }
});