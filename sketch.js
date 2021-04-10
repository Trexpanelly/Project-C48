var gameState = 1;
var footie, shoe, monster, boomerang;
var dart, dartGroup;
var footImage, shoeImage, boomerangImage, scientistImage, monsterImage, dartImage;


function preload(){
    footImage = loadImage('Footpick.png');
    shoeImage = loadImage('Shoemage.jpeg');
    boomerangImage = loadImage('Boomerang.webp')
    scientistImage = loadImage('Clork.png');
    monsterImage = loadImage('Bawer.jpg');
    dartImage = loadImage('Fireball-PNG-Download-Image.png');
}
function setup(){
   createCanvas(1000, 700);
   canvas.scale = 3;
   footie = createSprite(300, 500, 100, 100);
   footie.addImage(footImage);
   footie.scale = 0.5;
   shoe = createSprite(200, 600, 100, 200);
   shoe.addImage(shoeImage);
   shoe.velocityX = 9;
   shoe.scale = 0.5;
   boomerang = createSprite(300, 100, 200, 200);
   boomerang.addImage(boomerangImage);
   boomerang.scale = 0.3;
   
   scientist = createSprite (200, 600, 300, 100);
   scientist.addImage(scientistImage);
   scientist.scale = 0.4;
   scientist.visible = false;
   
   monster = createSprite(850, 400, 300, 200);
   monster.addImage(monsterImage);
  

   
   
   
   
   dartGroup = new Group();



   
   
   
}

function draw(){
    background(255);
    
    spawnDarts();

    if(gameState === 1){
        scientist.visible = true;
        text("Use what you have around you!", scientist.x, scientist.y - 150);
        if(keyIsDown(UP_ARROW)){
            footie.velocityY = -5;
        } 
        if(keyIsDown(DOWN_ARROW)){
            footie.velocityY = 5;
        } 
        if(keyIsDown(RIGHT_ARROW)){
            footie.velocityX = 3;
        } 
        if(keyIsDown(LEFT_ARROW)){
            footie.velocityX = -3;
        } 
        
        if(keyCode === 32){
            boomerang.velocityX = 7;
            
        } 
        if(keyCode === 67){
            boomerang.velocityY = 7;
        }
    }
    
    
    if(footie.isTouching(dartGroup)){
        gameState = 0;
        
    }
    if(boomerang.isTouching(dartGroup)){
        boomerang.destroy();
    }
    
    if(gameState === 0){
        footie.destroy();
        dartGroup.destroyEach();
        dartGroup.setVelocityXEach(0);
        scientist.destroy();
        text("You Lost!", 500, 300);
        textSize(50);
    }

    if(boomerang.isTouching(monster)){
        gameState = 2;
    }

    if(gameState === 2){
        monster.destroy();
        dartGroup.destroyEach();
        dartGroup.setVelocityXEach(0);
        shoe.x = 500;
        shoe.y = 700;
        boomerang.destroy();
        scientist.destroy();
        textSize(75);

        text("You Win!", 300, 300);

        textSize(15);
        text("I was so scared", 500, 650);
        text("I was so scared", 300, 400);

    }
    
    
    
    if(shoe.x < 1500){
        
    text("AHHHHHHHHH!", shoe.x, shoe.y + 100);
    }
    

    drawSprites();
}


    

function spawnDarts(){
    if(frameCount % 20 === 0){
        dart = createSprite(800, monster.y, 20, 5);
        dart.addImage(dartImage);
        dart.scale = 0.1;
        dart.velocityX = -9;
        dartGroup.add(dart);
    }
}