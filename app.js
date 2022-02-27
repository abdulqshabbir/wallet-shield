const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

loadEventListeners()

function loadEventListeners() {
	document.addEventListener('DOMContentLoaded', getTasks)
	form.addEventListener('submit', addTask)
	taskList.addEventListener('click', removeTask)
	clearBtn.addEventListener('click', clearTasks)
	filter.addEventListener('keyup', filterTasks)
}

function addTask(e) {
	if (taskInput.value === '') {
		alert('Add a task')
	}

	const li = document.createElement('li')
	li.className = 'collection-item'
	li.innerText = taskInput.value

	const link = document.createElement('a')
	link.className = 'delete-item secondary-content'
	link.innerHTML = '<i class="fa fa-remove"></li>'
	li.appendChild(link)

	taskList.appendChild(li)
	storeTaskInLocalStorage(taskInput.value)

	taskInput.value = ''
	e.preventDefault()
}

function removeTask(e) {
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are you sure?')) {
			e.target.parentElement.parentElement.remove()
			removeTaskFromLocalStorage(e.target.parentElement.parentElement)
		}
	}
}

function removeTaskFromLocalStorage(taskItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = []
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}

	tasks.forEach(function(task, index) {
		if(taskItem.textContent === task) {
			tasks.splice(index, 1)
		}
	})

	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function clearTasks(e) {
	taskList.innerHTML = ''
	localStorage.clear()
}

function filterTasks(e) {
	const text = e.target.value.toLowerCase()

	document.querySelectorAll('.collection-item').forEach(function() {
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block'
		} else {
			task.style.display = 'none'
		}
	})
}

function storeTaskInLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = []
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.push(task)
	localStorage.setItem('tasks', JSON.stringify(tasks))
}

function getTasks() {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = []
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'))
	}
	tasks.forEach(function(task) {
		const li = document.createElement('li')
		li.className = 'collection-item'
		li.innerText = task

		const link = document.createElement('a')
		link.className = 'delete-item secondary-content'
		link.innerHTML = '<i class="fa fa-remove"></li>'
		li.appendChild(link)

		taskList.appendChild(li)
	})
}
