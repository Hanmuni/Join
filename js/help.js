/**
 * initialize help
 */
async function init_help() {
    await init();
    load_current_user_local();
    document.getElementById('sidebar-link-help').style.backgroundColor = "rgba(255, 255, 255, 0.6)";
}

/**
 * remove aktive from every part in the help header
 */
function remove_aktive_help_class() {
    document.getElementById('help-headline-first-steps').classList.remove('aktive-help');
    document.getElementById('help-headline-add-task').classList.remove('aktive-help');
    document.getElementById('help-headline-backlog').classList.remove('aktive-help');
    document.getElementById('help-headline-board').classList.remove('aktive-help');
    document.getElementById('help-headline-impressum').classList.remove('aktive-help');
    document.getElementById('help-headline-archiv').classList.remove('aktive-help');
}

/**
 * add first steps html and image
 */
function render_first_steps_at_help() {
    remove_aktive_help_class();
    document.getElementById('help-headline-first-steps').classList.add('aktive-help');
    document.getElementById('help-choosed-image').classList.remove('d-none');
    document.getElementById('help-choosed-image').src = './img/welcome_help.png';
    document.getElementById('help-choosed-text').innerHTML = `Welcome to the Join page of: Hong Hanh Chu, Ole Engelhardt and Fabian
    Kalus.<br> This is a project management tool based on the Kanban method to manage your projects and tasks. <br> Please navigate through our help section to see how you can use Join most efficiently.</p>`
}

/**
 * add add tasks html and image
 */
function render_add_task_at_help() {
    remove_aktive_help_class();
    document.getElementById('help-headline-add-task').classList.add('aktive-help');
    document.getElementById('help-choosed-image').classList.remove('d-none');
    document.getElementById('help-choosed-image').src = './img/addTaskHelp.png';
    document.getElementById('help-choosed-text').innerHTML = `In the 'Add Task' area you can prepare a task.<br>
    Enter title, category, description, due date, urgency and assign the task to one user. <br> All fields have to be filled.`
}

/**
 * add backlog html and image
 */
function render_backlog_at_help() {
    remove_aktive_help_class();
    document.getElementById('help-headline-backlog').classList.add('aktive-help');
    document.getElementById('help-choosed-image').classList.remove('d-none');
    document.getElementById('help-choosed-image').src = './img/backlogHelp.png';
    document.getElementById('help-choosed-text').innerHTML = ` The backlog shows every task the team added, that are on the wait list.<br> To activate the task, push it to the board. Otherwise delete it. <br>At the left and right border you can see the urgency of the task. <br>Red: High | Yellow: Medium | Green: Low`
}

/**
 * add board html and image
 */
function render_board_at_help() {
    remove_aktive_help_class();
    document.getElementById('help-headline-board').classList.add('aktive-help');
    document.getElementById('help-choosed-image').classList.remove('d-none');
    document.getElementById('help-choosed-image').src = './img/boardHelp.png';
    document.getElementById('help-choosed-text').innerHTML = `The board consists of four sections. <br> Per drag and drop you can move each task to a different section.<br>
    By clicking on the icons you can either edit, delete or archive the tasks.
    `;
}

/**
 * add archiv html and image
 */
function render_archiv_at_help() {
    remove_aktive_help_class();
    document.getElementById('help-headline-archiv').classList.add('aktive-help');
    document.getElementById('help-choosed-image').classList.remove('d-none');
    document.getElementById('help-choosed-image').src = './img/archiveHelp.png';
    document.getElementById('help-choosed-text').innerHTML = `The archive stores all your finished tasks from the board. <br> If you delete your task here, it's deleted permanently.
    `;
}

/**
 * add impressum and datenschutz text
 */
function render_impressum_at_help() {
    remove_aktive_help_class();
    document.getElementById('help-headline-impressum').classList.add('aktive-help');
    document.getElementById('help-choosed-image').classList.add('d-none');
    document.getElementById('help-choosed-text').innerHTML = `
    <h1>Impressum</h1>
        <span>Angaben gem???? ?? 5 TMG</span><br><span>Hong Hanh Chu <br>
            Wasserturmstr.55<br>
            69214 Eppelheim <br>
        </span>
        <span>Vertreten durch:<br>
            Hong Hanh Chu, Ole Engelhardt, Fabian Kalus<br>
        </span>

        
<h2>Haftungsausschluss</h2>
        <span>
         <h3><u>Haftung f??r Inhalte</u></h3>
        Die Inhalte unserer Seiten wurden mit gr????ter Sorgfalt erstellt. F??r die Richtigkeit, Vollst??ndigkeit und
        Aktualit??t der Inhalte k??nnen wir jedoch keine Gew??hr ??bernehmen. Als Diensteanbieter sind wir gem???? ?? 7 Abs.1
        TMG f??r eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach ???? 8 bis 10 TMG sind
        wir als Diensteanbieter jedoch nicht verpflichtet, ??bermittelte oder gespeicherte fremde Informationen zu
        ??berwachen oder nach Umst??nden zu forschen, die auf eine rechtswidrige T??tigkeit hinweisen. Verpflichtungen zur
        Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber??hrt.
        Eine diesbez??gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
        m??glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
        entfernen.<h3><u>Urheberrecht</u></h3>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht. Die Vervielf??ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au??erhalb der Grenzen
        des Urheberrechtes bed??rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und
        Kopien dieser Seite sind nur f??r den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf
        dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
        Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
        werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
        derartige Inhalte umgehend entfernen. <h3><u>Datenschutz</u></h3>
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten m??glich. Soweit auf unseren
        Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder eMail-Adressen) erhoben werden, erfolgt dies,
        soweit m??glich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdr??ckliche Zustimmung nicht an
        Dritte weitergegeben. <br>
        Wir weisen darauf hin, dass die Daten??bertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitsl??cken aufweisen kann. Ein l??ckenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        m??glich. <br>
        Der Nutzung von im Rahmen der Impressumspflicht ver??ffentlichten Kontaktdaten durch Dritte zur ??bersendung von
        nicht ausdr??cklich angeforderter Werbung und Informationsmaterialien wird hiermit ausdr??cklich widersprochen.
        Die Betreiber der Seiten behalten sich ausdr??cklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-Mails, vor.<br><br>

        Website Impressum erstellt durch <a href="https://www.impressum-generator.de">impressum-generator.de</a> von der
        <a href="https://www.kanzlei-hasselbach.de/" rel="nofollow">Kanzlei Hasselbach</a>

    </span>
`;
}