/**
 * initialize backlog page
 */
async function init_backlog() {
    await init();
    load_current_user_local();
    render_backlog();
    document.getElementById('sidebar-link-backlog').style.backgroundColor = "rgba(255, 255, 255, 0.6)";
}


/**
 * render backlog page elemente from backend saved as tasks
 */
function render_backlog() {
    document.getElementById('backlog-task-container').innerHTML = '';
    render_empty_backlog();
    for (let i = 0; i < tasks.length; i++) {
        document.getElementById('backlog-task-container').innerHTML +=
            add_backlog_html(i);
        document.getElementById(`backlog-task-name${i}`).innerHTML = '';
        for (let j = 0; j < tasks[i].user.length; j++) {
            document.getElementById(`backlog-task-name${i}`).innerHTML +=
                add_backlog_task_name_html(i, j);
        }
        add_urgency_color(i);
        add_category_color(i);
    }
}

/**
 * create an div container if backlog is empty
 */
function render_empty_backlog() {
    if (tasks.length == 0) {
        document.getElementById('backlog-headline').classList.add('d-none');
        document.getElementById('backlog-task-container').innerHTML = `
        <div class="empty-backlog-container">
        <p>Backlog is empty, please add a task.</p>
        </div>
        `
    }
}

/**
 * add html code to the backlog elements
 * @param {number} i number of the elemnte in the JSON tasks
 * 
 */
function add_backlog_html(i) {
    return `  
        <div id="backlog-task${i}" class="backlog-task">

            <div id="backlog-task-assigned-to${i}" class="task-area">


                <img id="backlog-task-image${i}" class="profile-picture" src=${tasks[i].user[0]['user-image']}>

                <span id="backlog-task-name${i}" class="assigned-user"> ${tasks[i].user[0].name} </span>

            </div>

            <div class="task-area" id="backlog-task-title${i}">
                <p class="headline-mobile"> Title </p>
                <span>${tasks[i].title}</span>
            </div>

            <div class="task-area" id="backlog-task-due-date${i}">
                <p class="headline-mobile"> Date </p>
                <span backlog-task-due-date${i}>${tasks[i].date}</span>

            </div>

            <div class="task-area" id="backlog-task-details${i}">
                <p class="headline-mobile"> Description </p>
                <span>${tasks[i].description}</span>

            </div>

            <div class="task-area" id="backlog-task-category${i}">
                <p class="headline-mobile"> Category </p>
                <span>${tasks[i].category}</span>

            </div>

            <div onclick="deleteTask(${i}); render_backlog()" id="backlog-task-details${i}"
                class="task-area small-width-section">
                <p class="headline-mobile"> Delete </p>
                <img class="cursor" src="./img/trash-2-32.png">
            </div>

            <div onclick="create_todo(${i}); render_backlog()" id="backlog-task-details${i}"
                class="task-area small-width-section">
                <p class="headline-mobile"> To Board </p>
                <img class="cursor" src="./img/right-circular-32.png">
            </div>

        </div>
    `;
}

/**
 * html code of users names
 * @param {number} i number of the elemnte in the JSON tasks
 * @param {number} j number of the amount of users the task i have
 */
function add_backlog_task_name_html(i, j) {
    return `<p class="" > ${tasks[i].user[j].name} </p>  
    `
}


/**
 * change the color of the category word corresponding to the category
 * @param {number} i number of the elemnte in the JSON tasks
 */
function add_category_color(i) {
    if (tasks[i].category == 'HTML') {
        document.getElementById(`backlog-task-category${i}`).classList.add('html-color');

    }
    if (tasks[i].category == 'CSS') {
        document.getElementById(`backlog-task-category${i}`).classList.add('css-color');
    }
    if (tasks[i].category == 'JavaScript') {
        document.getElementById(`backlog-task-category${i}`).classList.add('javascript-color');
    }
}

/**
 * change the color of the border left and right corresponding to the urgency
 * @param {number} i number of the elemnte in the JSON tasks
 */
function add_urgency_color(i) {
    if (tasks[i].urgency == 'High') {
        document.getElementById(`backlog-task${i}`).style = `border-left: 10px solid #F5004B;
        border-right: 10px solid #F5004B;`;
    }
    if (tasks[i].urgency == 'Medium') {
        document.getElementById(`backlog-task${i}`).style = `border-left: 10px solid #FFF205;
        border-right: 10px solid #FFF205;`;
    }
    if (tasks[i].urgency == 'Low') {
        document.getElementById(`backlog-task${i}`).style = `border-left: 10px solid #0BF518;
        border-right: 10px solid #0BF518;`;
    }
}

/**
 * move a task from the backlog to the board. Now it´s change from a task to a todo. 
 * @param {number} position number of the elemnte in the JSON tasks
 */
function create_todo(position) {
    let todo;
    create_todo_element(position);
    tasks.splice(position, 1);
    backend.setItem('tasks', JSON.stringify(tasks));
    let todosAsString = JSON.stringify(todos);
    backend.setItem('todos', todosAsString);
    console.log(todos);
}

function create_todo_element(position) {
    let todo = {
        'id': '',
        'title': tasks[position].title,
        'category': tasks[position].category,
        'description': tasks[position].description,
        'date': tasks[position].date,
        'urgency': tasks[position].urgency,
        'user': tasks[position].user,
        'status': 'todo',
    };
    todos.push(todo);
}

/**
 * delete the selcted array at tasks
 *@param {number} position number of the elemnte in the JSON tasks
 */
function deleteTask(position) {
    tasks.splice(position, 1);
    backend.setItem('tasks', JSON.stringify(tasks));
}

