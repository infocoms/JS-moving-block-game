const SCREEN_WIDTH = 1220;
const SCREEN_HEIGHT = 630;

class Enemy {
    constructor(screenWidth, screenHeight) {
        this.image = document.getElementById("enemy-image");
        this.speed = {x: 2, y: 2};
        this.position = {x: 10, y: 10};
        this.size = 70;
        this.screenWidth = screenWidth;
        this.screenHeight = screenHeight;
    }

    draw() {
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);

    }


    update(deltaTime) {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        if (this.position.x > this.screenWidth || this.position.x < 0) {
            this.speed.x = -this.speed.x;
        }

        if (this.position.y > this.screenHeight || this.position.y < 0) {
            this.speed.y = -this.speed.y;
        }


        let enemybox = this.position.y + this.size;
        let character = y;
        let leftsidechar = x;
        let rightsidechar = x + h;


        if (enemybox >= character
            && this.position.x >= leftsidechar
            && this.position.x + this.size <= rightsidechar
        ) {
            this.speed.y = -this.speed.y;
            this.position.y = y - this.size;

            life = life - 1;
            console.log(life);

            window.setTimeout(foodspawn, 30000);


            if (life <= 0) {
                gameOver();
                alert("you Died!")
            }


        }
    }


}


let lastTime = 0;


var stage = document.getElementById('myCanvas'),
    ctx = stage.getContext('2d'),
    life = 3;

console.log(life);




/*object to load on load*/
let enemy = new Enemy(SCREEN_WIDTH, SCREEN_HEIGHT);

var char = new Image();
char.src = "img/pikachu.svg";
x = 200;
y = 500;
w = 70;
h = 70;


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

//window.setInterval(enemyMoves, 200);


function ReRender() {
    ctx.clearRect(0, 0, 1500, 900);
}

function Start(timestamp) {
    var deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    requestAnimationFrame(Start);
    createChar(x, y, w, h);
    theLives();
    foodrender();
    enemy.update(deltaTime);
    enemy.draw(ctx);

}


function createChar(x, y, w, h) {
    ctx.drawImage(char, x, y, w, h);
    ctx.font = "30px Arial";
    ctx.fillText("Life: " + life, 10, 32);
    ctx.fillStyle = "white";

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









