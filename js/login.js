/**
 * users for login example
 */
// Profil = [proilnummer Name, Bild, Usesrname, Passwort, E-Mail]
let profiles = [
    ['profil00', 'Guest User', './img/guest_user_white.png', 'GUEST', 'PASSWORT', '123@mailvorbei.com'],
    ['profil01', 'Ole Engelhardt', './img/p36.jpg', 'Ole Engelhardt', 'olee', 'ole.engelhardt@mail.com'],
    ['profil02', 'Fabian Kalus', './img/p24.jpg', 'Fabian Kalus', 'fabiank', 'fabian.kalus@mail.com'],
    ['profil03', 'Hong Hanh Chu', './img/HongHanh.jpg', 'Hong Hanh Chu', 'hhchu', 'honghanh.chu@mail.com'],
]

/**
 * you can use the enter button to login
 */
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        check_login();
    }
});

/**
 * fill the value of the login inputs with the data of the guest user
 */
function guest_login() {
    document.getElementById('login-username').value = profiles[0][3];
    document.getElementById('login-passwort').value = profiles[0][4];
}

/**
 * check the input fields, if it´s a correct username and if this name matches with the password
 */
function check_login() {
    let input_user_field = document.getElementById('login-username').value;
    let input_passwort_field = document.getElementById('login-passwort').value;
    current_user = [];
    for (let i = 0; i < profiles.length; i++) {
        if (profiles[i][3] == input_user_field) {
            if (profiles[i][4] == input_passwort_field) {
                current_user.push(profiles[i]);
                save_current_user_local();
                window.location.href = './help.html';
                return;
            } else {
                alert('Das eingegebene Passwort ist nicht korrekt');
                return;
            }
        }
    }
    alert('Der eingebene Benutzername ist nicht vergeben.')
}

/**
 * save the current user in local storage
 */
function save_current_user_local() {
    let current_userAsText = JSON.stringify(current_user);
    localStorage.setItem('current_user', current_userAsText);
}