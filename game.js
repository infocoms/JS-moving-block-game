var stage = document.getElementById('myCanvas'),
    ctx = stage.getContext('2d'),
    life = 3;
console.log(life);
/*object to load on load*/


var char = new Image();
char.src = "img/pikachu.svg";
x = 200;
y = 500;
w = 70;
h = 70;


var enemy = new Image();
enemy.src = "img/meowth.svg";
xi = 100;
yi = 300;
wi = 70;
hi = 70;


var heart = new Image();
heart.src = "img/life.svg";
yh = 10;
wh = 30;
hh = 30;


var food = new Image();
food.src = "img/food.svg";
fx = 800;
fy = 500;
fw = 40;
fh = 40;


Start();
window.setInterval(ReRender, 10);
window.setInterval(enemyMoves, 200);


function ReRender() {
    ctx.clearRect(0, 0, 1500, 900);
    Start();
}

function Start() {
    createChar(x, y, w, h);
    createEnemy(xi, yi, wi, hi);
    theLives();
    foodrender();
}


function createChar(x, y, w, h) {
    ctx.drawImage(char, x, y, w, h);
    ctx.font = "30px Arial";
    ctx.fillText("Life: " + life, 10, 30);

}

function createEnemy(xi, yi, wi, hi) {
    ctx.drawImage(enemy, xi, yi, wi, hi);
}

function gameOver() {
    ctx.clearRect(0, 0, stage.width, stage.height);
    location.reload()


}

function foodrender() {
    ctx.drawImage(food, fx, fy, fw, fh);
}


function foodspawn() {
    ctx.drawImage(food, fx, fy, fw, fh);

    if (life < 5) {
        console.log("spawning food");
        fx = Math.floor((Math.random() * 1220));
        fy = Math.floor((Math.random() * 600));
    }
}


function theLives() {
    /*heart icons corresponds to amount of lives */
    if (life === 5) {
        ctx.drawImage(heart, 100, yh, wh, hh);
        ctx.drawImage(heart, 140, yh, wh, hh);
        ctx.drawImage(heart, 180, yh, wh, hh);
        ctx.drawImage(heart, 220, yh, wh, hh);
        ctx.drawImage(heart, 260, yh, wh, hh);
    } else if (life === 4) {
        ctx.drawImage(heart, 100, yh, wh, hh);
        ctx.drawImage(heart, 140, yh, wh, hh);
        ctx.drawImage(heart, 180, yh, wh, hh);
        ctx.drawImage(heart, 220, yh, wh, hh);
    } else if (life === 3) {
        ctx.drawImage(heart, 100, yh, wh, hh);
        ctx.drawImage(heart, 140, yh, wh, hh);
        ctx.drawImage(heart, 180, yh, wh, hh);
    } else if (life === 2) {
        ctx.drawImage(heart, 100, yh, wh, hh);
        ctx.drawImage(heart, 140, yh, wh, hh);
    } else if (life === 1) {
        ctx.drawImage(heart, 100, yh, wh, hh);
    }

}


function enemyMoves() {
    if (xi <= 1220) {
        xi = xi + 10;
    }
    if (xi >= 1220) {
        xi = xi - 10;
    } else if (yi <= 620) {
        yi = yi + 10;

    } else if (yi >= 620) {
        yi = yi - 10;

    } else if (xi >= 10) {
        xi = xi - 10;
    } else if (xi <= 10) {
        xi = xi + 10;

    } else if (yi >= 10) {
        yi = yi - 10;
    } else if (yi <= 10) {
        yi = yi + 10;
    }
}


/*key-controls*/
window.onkeydown = function (event) {
    var keyPr = event.keyCode;
    if (keyPr === 39 && x <= 1220) {
        x = x + 10;
    } else if (keyPr === 37 && x > 8) {
        x = x - 10;

    } else if (keyPr === 38 && y > 8) {
        y = y - 10;

    } else if (keyPr === 40 && y <= 620) {
        y = y + 10;
    }

    /*Enemy hitbox: collision*/
    if ((y + h) < (yi) ||
        (y) > (yi + hi) ||
        (x + w) < (xi) ||
        (x) > (xi + wi)) {

    } else {

        life = life - 1;
        console.log(life);

        window.setTimeout(foodspawn, 30000);


        if (life <= 0) {
            gameOver();
            alert("you Died!")
        }
    }


    /*Food hitbox: collision and randomizer*/
    if ((y + h) < (fy) ||
        (y) > (fy + fh) ||
        (x + w) < (fx) ||
        (x) > (fx + fw)) {
        console.log("No food");

    } else {

        console.log("Catch food");
        life = life + 1;
        console.log(life);
        fx = -1000;
        window.setTimeout(foodspawn, 30000);

        /*MAX LIFE*/

        if (life >= 5) {
            life = 5;
            console.log("stop spawning food");


        }

    }


};









