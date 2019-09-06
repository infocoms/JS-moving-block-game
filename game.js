
var stage = document.getElementById('myCanvas'),
    ctx = stage.getContext('2d'),
    life = 3;



console.log(life);


var char = new Image();
char.src = "img/pikachu.svg";
    x = 200;
    y = 500;
    w = 70;
    h = 70;



var enemy = new Image();
enemy.src = "img/meowth.svg";
    xi = 100;
    yi = 100;
    wi = 70;
    hi = 70;


var heart = new Image();
heart.src = "img/life.svg";
h1x = 100;


yh = 10;
wh = 30;
hh = 30;








function createChar(x,y,w,h) {
    ctx.drawImage(char, x, y , w,h);
    ctx.font = "30px Arial";
    ctx.fillText("Life: "+ life,10,30);

}

function createEnemy(xi,yi,wi,hi) {
    ctx.drawImage(enemy, xi, yi , wi, hi);
}

function gameOver() {
    ctx.clearRect(0,0, stage.width, stage.height);
    location.reload()


}


ctx.drawImage(heart, 100, yh , wh, hh);
ctx.drawImage(heart, 140, yh , wh, hh);
ctx.drawImage(heart, 180, yh , wh, hh);
createChar(x,y,w,h);
createEnemy(xi,yi,wi,hi);



/*key-controls*/

window.onkeydown = function(event) {
    var keyPr = event.keyCode;

    if(keyPr === 39 && x<=1220){
        x = x+10;
    }
    else if(keyPr === 37 && x>8){
        x = x-10;

    }
    else if(keyPr === 38 && y>8) {
        y = y-10;

    }
    else if(keyPr === 40 && y<=620){
        y = y+10;
    }



    ctx.clearRect(0,0, 1500, 900);
    createChar(x,y,w,h);
    createEnemy(xi,yi,wi,hi);


    if ((y + h) < (yi) ||
        (y) > (yi + hi) ||
        (x + w) < (xi) ||
        (x) > (xi+wi)) {
        console.log("Not colliding");
        if (life === 3){
            ctx.drawImage(heart, 100, yh , wh, hh);
            ctx.drawImage(heart, 140, yh , wh, hh);
            ctx.drawImage(heart, 180, yh , wh, hh);
        }
        else if(life === 2){
            ctx.drawImage(heart, 100, yh , wh, hh);
            ctx.drawImage(heart, 140, yh , wh, hh);
        }
        else if(life === 1){
            ctx.drawImage(heart, 100, yh , wh, hh);
        }


    }else {

        life = life - 1;
        console.log(life);


        if(life <= 0){
            gameOver();
            alert("you Died!")
        }
    }



};










