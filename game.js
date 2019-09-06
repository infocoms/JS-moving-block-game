
var stage = document.getElementById('myCanvas'),
    ctx = stage.getContext('2d');






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




function createChar(x,y,w,h) {
    ctx.drawImage(char, x, y , w,h);
}

function createEnemy(xi,yi,wi,hi) {
    ctx.drawImage(enemy, xi, yi , wi, hi);
}




createChar(x,y,w,h);
createEnemy(xi,yi,wi,hi);




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


    if ((y + h) < (yi) || (y) > (yi + hi) || (x + w) < (xi) || (x) > (xi+wi)) {
        console.log("Not colliding");



    }else {
        alert("you are dead madafakka");

    }




    /*( ( char.y + char.height ) < ( enemy.y ) ) ||
    ( char.y > ( enemy.y + enemy.height ) ) ||
    ( ( char.x + char.width ) < enemy.x ) ||
    ( char.x > ( enemy.x + enemy.width ) )*/










    ctx.clearRect(0,0, 1500, 900);
    createChar(x,y,w,h);
    createEnemy(xi,yi,wi,hi);



};










