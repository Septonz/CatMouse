var garden
var cat
function preload() {
    //load the images here
     gardenImg=loadImage("images/garden.png")
moImg1=loadImage("images/mouse1.png")
 catImg2=loadImage("images/cat1.png")
catImg=loadAnimation("images/cat2.png","images/cat3.png")
catImg3=loadImage("images/cat3.png")
moImg2=loadImage("images/mouse4.png")
moani=loadAnimation("images/mouse2.png","images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
 garden=createSprite(500,400);
garden.addImage(gardenImg)
cat=createSprite(918,656)
cat.addImage(catImg2)
cat.scale=0.07

mo=createSprite(379,651)
mo.addImage(moImg1)
mo.scale=0.07
}

function draw() {

    background(225);
    cat.velocityY=0
    text(mouseX+','+mouseY,10,45)
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mo.x < (cat.width - mo.width)/2){
cat.addAnimation("catLastImage", catImg3)
cat.changeAnimation("catLastImage")
cat.velocityX=0
mo.addAnimation("moLastImage", moImg2)
mo.changeAnimation("moLastImage")
}

    keyPressed()
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX= -5;
    cat.addAnimation("catRunning", catImg)
    cat.changeAnimation("catRunning")

    
    mo.addAnimation("mostand", moani)
    mo.changeAnimation("mostand")
}

}
