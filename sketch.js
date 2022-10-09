const speed = 5;                                                                                                                                                                                                                      var monkey,monkeyImg;
var platform1,platform2,platform3;
var platform4,platform5,platform6;
var platform7,platform8,platform9;

var ladder1,ladder2,ladder3,ladder4;
var ladder1,ladder2,ladder3,ladder4;

function preload(){
monkeyImg = loadAnimation("./assets/Monkey.png");
platformImg = loadImage("./assets/Platform.png")
ladderImg = loadImage("./assets/Ladder.png")
}

function setup(){
    createCanvas(700,1000);
    monkey = createSprite(250,250,10,10);
    monkey.addAnimation("moving",monkeyImg);
    monkey.scale = 0.3;

    platform1 = createSprite(350,850,50,50);
    platform1.addImage(platformImg);
    platform1.scale = 0.6;

    platform2 = createSprite(350,740,50,50);
    platform2.addImage(platformImg);
    platform2.scale = 0.6;

    platform3 = createSprite(483,683,50,50);
    platform3.addImage(platformImg);
    platform3.scale = 0.25;

    platform4 = createSprite(217,683,50,50);
    platform4.addImage(platformImg);
    platform4.scale = 0.25;

    platform5 = createSprite(350,583,50,50);
    platform5.addImage(platformImg);
    platform5.scale = 0.6;

    platform6 = createSprite(480,530,50,50);
    platform6.addImage(platformImg);
    platform6.scale = 0.25;

    platform7 = createSprite(350,485,50,50);
    platform7.addImage(platformImg);
    platform7.scale = 0.25;

    platform8 = createSprite(220,440,50,50);
    platform8.addImage(platformImg);
    platform8.scale = 0.25;

    platform9 = createSprite(350,337,50,50);
    platform9.addImage(platformImg);
    platform9.scale = 0.6;

    ladder1 = createSprite(130,830,50,50);
    ladder1.addImage(ladderImg);
    ladder1.scale = 0.5;

    ladder2 = createSprite(393,735,50,50);
    ladder2.addImage(ladderImg);
    ladder2.scale = 0.35;

    ladder3 = createSprite(304,735,50,50);
    ladder3.addImage(ladderImg);
    ladder3.scale = 0.35;

    ladder4 = createSprite(127,660,50,50);
    ladder4.addImage(ladderImg);
    ladder4.scale = 0.35;

    ladder5 = createSprite(568,577,50,50);
    ladder5.addImage(ladderImg);
    ladder5.scale = 0.35;

    ladder6 = createSprite(400,523,50,50);
    ladder6.addImage(ladderImg);
    ladder6.scale = 0.2;

    ladder7 = createSprite(280,477,50,50);
    ladder7.addImage(ladderImg);
    ladder7.scale = 0.2;

    ladder8 = createSprite(130,415,50,50);
    ladder8.addImage(ladderImg);
    ladder8.scale = 0.35;
}

function draw(){
    background("black");
    //keyPressed();
    drawSprites();
}

function keyPressed(){
    monkey.animation.stop(); //stop animation unless arrrow is pressed

    if(keyDown(LEFT_ARROW)){
        monkey.position.x -= speed;
        monkey.rotation = 180;
        monkey.animation.play();
    }
    else if(keyDown(RIGHT_ARROW)){
        monkey.position.x += speed;
        monkey.rotation = 0;
        monkey.animation.play();
    }
    else if(keyDown(UP_ARROW)){
        monkey.position.y -= speed;
        monkey.rotation = -90;
        monkey.animation.play();
    }
    else if(keyDown(DOWN_ARROW)){
        monkey.position.y += speed;
        monkey.rotation = 90;
        monkey.animation.play();
    }
}

