alert ('Hello, I am your pet rock.');
let rock = document.getElementById("rockImg");
rock.onclick = function tochRock () {
    let userName = prompt ("Как Вас зовут?", "Введите Ваше имя.");
    if (userName) {
        alert ("Рад Вас видеть, " + userName + ".");
        document.getElementById("rockImg").src = "rock_happy.png";
    }
}