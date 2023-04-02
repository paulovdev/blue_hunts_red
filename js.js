//just getting div from player and background game
var player1 = document.querySelector('#player1');
var player2 = document.querySelector('.player2');
var shoot = document.querySelector('.shoot')
var shoot2 = document.querySelector('.shoot2')
var main = document.querySelector('main')

//MENU:
var menu = document.querySelector('.menu')
var h1 = document.querySelector('h1')
var howtoplay = document.querySelector('.howtoplay')
var time = document.querySelector('.time')

//if you click on play, the menu element exits and the main element enters, which in this case is the game
main.style.display = 'none';
howtoplay.style.display = 'none';
time.style.display = 'none';
h1.onclick = function () {
    main.style.display = 'flex';
    menu.style.display = 'none';
    howtoplay.style.display = 'flex';
    time.style.display = 'block';
    clocktime();
}

//TIME:
time.innerText = 0
function clocktime() {
    time.innerText++
    setTimeout(clocktime, 1000);
}


//PLAYER 1 axes:
var x = 0
var y = 0
//PLAYER 2 axes:
var x2 = 0
var y2 = 0

function start() {
    player2.style.display = 'block'
    shoot2.style.display = 'block'
}
//PLAYER 1:
/* here we take the keys and as soon as we press the player walks 100px more in relation to x and y */
window.onkeydown = function game(e) {
    if (e.keyCode == '87') {
        y += 100
        player1.style.marginBottom = y + 'px'
        shoot.style.marginBottom = y + 'px'
    }
    if (e.keyCode == '65') {
        x -= 100
        player1.style.marginLeft = x + 'px'
        shoot.style.marginLeft = x + 'px'
    }
    if (e.keyCode == '83') {
        y -= 100
        player1.style.marginBottom = y + 'px'
        shoot.style.marginBottom = y + 'px'

    }
    if (e.keyCode == '68') {
        x += 100
        player1.style.marginLeft = x + 'px'
        shoot.style.marginLeft = x + 'px'
    }

    //PLAYER 2:
    /*here we take the keys and as soon as we press the player walks 100px more in relation to x and y */
    if (e.keyCode == '38') {
        y2 += 100
        player2.style.marginBottom = y2 + 'px'
        shoot2.style.marginBottom = y2 + 'px'
    }
    if (e.keyCode == '37') {
        x2 -= 100
        player2.style.marginLeft = x2 + 'px'
        shoot2.style.marginLeft = x2 + 'px'
    }
    if (e.keyCode == '40') {
        y2 -= 100
        player2.style.marginBottom = y2 + 'px'
        shoot2.style.marginBottom = y2 + 'px'

    }
    if (e.keyCode == '39') {
        x2 += 100
        player2.style.marginLeft = x2 + 'px'
        shoot2.style.marginLeft = x2 + 'px'
    }
    //PLAYER 1 COLLISION:
    //if the player's axis is greater than the main background it returns 200px

    if (x > 468) {
        x -= 200
        player1.style.marginLeft = x + 'px'
        shoot.style.marginLeft = x + 'px'
    }
    if (y > 468) {
        y -= 200
        player1.style.marginBottom = y + 'px'
        shoot.style.marginBottom = y + 'px'
    }
    //same from above but now for the negative axes
    if (x < -468) {
        x += 200
        player1.style.marginLeft = x + 'px'
        shoot.style.marginLeft = x + 'px'
    }
    if (y < -468) {
        y += 200
        player1.style.marginBottom = y + 'px'
        shoot.style.marginBottom = y + 'px'
    }




    //PLAYER 2 COLLISION:
    //if the player's axis is greater than the main background it returns 200px

    if (x2 > 468) {
        x2 -= 200
        player2.style.marginLeft = x2 + 'px'
        shoot2.style.marginLeft = x2 + 'px'
    }
    if (y2 > 468) {
        y2 -= 200
        player2.style.marginBottom = y2 + 'px'
        shoot2.style.marginBottom = y2 + 'px'
    }
    //same from above but now for the negative axes
    if (x2 < -468) {
        x2 += 200
        player2.style.marginLeft = x2 + 'px'
        shoot2.style.marginLeft = x2 + 'px'
    }
    if (y2 < -468) {
        y2 += 200
        player2.style.marginBottom = y2 + 'px'
        shoot2.style.marginBottom = y2 + 'px'
    }

    //PLAYERS COLLISIONS:
    /*if the x and y axis of black is the same as that of red, the red disappears*/
    if (x == x2 && y == y2) {
        player2.style.display = 'none'
        shoot2.style.display = 'none'
        setTimeout(() => {
            start()
        }, 1000);

    }
}



//dark menu:
var dark_menu = document.querySelector('input[type="checkbox"]')
var body = document.querySelector('body')

dark_menu.onclick = function () {
    body.classList.toggle("dark");
    time.classList.toggle("dark");
}