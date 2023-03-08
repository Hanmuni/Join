async function init_archive() {
    await init();
    load_current_user_local();
    render_archive();
    document.getElementById('sidebar-link-archive').style.backgroundColor = "rgba(255, 255, 255, 0.6)";
}

/**
 * initialize archiv
 */
function render_archive() {
    document.getElementById('archive-task-container').innerHTML = '';
    render_empty_archive();
    for (let i = 0; i < archivs.length; i++) {
        document.getElementById('archive-task-container').innerHTML +=
            add_archive_html(i);
    }
}

function render_empty_archive() {
    if (archivs.length == 0) {
        document.getElementById('backlog-headline').classList.add('d-none');
        document.getElementById('archive-task-container').innerHTML = `
        <div class="empty-backlog-container">
        <p>Archive is empty.</p>
        </div>
        `
    }
}

/**
 * render HTML Code of the element in archivs
 * @param {number} i number of the elemnte in the JSON archivs 
 */
function add_archive_html(i) {
    return `
    <div class="backlog-task">

    <div class="task-area">


        <img class="profile-picture" src=${archivs[i].user[0]['user-image']}>

        <span class="assigned-user"> ${archivs[i].user[0].name} </span>

    </div>

    <div class="task-area">
        <p class="headline-mobile"> Title </p>
        <span>${archivs[i].title}</span>
    </div>

    <div class="task-area">
        <p class="headline-mobile"> Date </p>
        <span>${archivs[i].date}</span>

    </div>

    <div class="task-area">
        <p class="headline-mobile"> Description </p>
        <span>${archivs[i].description}</span>

    </div>

    <div class="task-area">
        <p class="headline-mobile"> Category </p>
        <span>${archivs[i].category}</span>

    </div>

    <div onclick="deleteArchiv(${i})"
        class="task-area small-width-section">
        <p class="headline-mobile"> Delete </p>
        <img class="cursor" src="./img/trash-2-32.png">
    </div>

</div>
    `;
}

/**
 * delete the choosen element from archivs
 * @param {number} position number of the elemnte in the JSON archivs
 */
function deleteArchiv(position) {
    archivs.splice(position, 1);
    backend.setItem('archivs', JSON.stringify(archivs));
    render_archive();
}