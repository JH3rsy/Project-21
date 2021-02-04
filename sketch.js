var canvas;
var music;
var red
var blue
var purple
var green
var ball

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,800);


ball = createSprite(500,500,20,20)
ball.shapeColor = "yellow"

    red = createSprite(200,700,70,20);
    red.shapeColor = "red"

    blue = createSprite(400,700,70,20);
    blue.shapeColor = "blue"

    purple = createSprite(600,700,70,20);
    purple.shapeColor = "purple"

    green = createSprite(800,700,70,20);
    green.shapeColor = "green"
   
    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    ball.x = World.mouseX
    ball.y = World.mouseY

    music.play();
    background("black");

    //create edgeSprite

    if(blue.isTouching(ball)){
        ball.shapeColor = "blue"
        ball.velocityX = 0
        music.stop()
    }

    if(green.isTouching(ball)){
        ball.shapeColor = "green"
        ball.velocityX = 0
        music.stop()
    }

    if(purple.isTouching(ball)){
        ball.shapeColor = "purple"
        ball.velocityX = 0
        music.stop()
    }

    if(red.isTouching(ball)){
        ball.shapeColor = "red"
        ball.velocityX = 0
        music.stop()
    }

    //add condition to check if box touching surface and make it box
    drawSprites()
}
