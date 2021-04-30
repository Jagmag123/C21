var fixrect, movingrect, gameobject1, gameobjest2, gameobject3, gameobject4


function setup() {
  createCanvas(800,400);
fixrect = createSprite(200,200,50,50)
fixrect.shapeColor="yellow"
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "green"
gameobject1 = createSprite(100,100,50,50);
gameobject1.shapeColor = "green"
gameobject2 = createSprite(200,100,50,50)
gameobject2.shapeColor = "green"
gameobject3 = createSprite(300,100,50,50)
gameobject3.shapeColor ="green"
gameobject3.velocityY = -5
gameobject4 = createSprite(400,100,50,50)
gameobject4.shapeColor = "green"
gameobject4.velocityX = 5
}

function draw() {
  background(0,255,0);
  movingrect.x = World.mouseX
movingrect.y = World.mouseY

bounceOff(gameobject3,gameobject4)
  if(isTouching(movingrect,gameobject2)){
    movingrect.shapeColor = "pink"
    gameobject2.shapeColor = "pink"
  }else{
    movingrect.shapeColor = "green"
    gameobject2.shapeColor = "yellow"
  }
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2
    &&object1.y-object2.y<object2.height/2+object1.height/2
    &&object2.y-object1.y<object2.height/2+object1.height/2){
      return true
  }else {
    return false
    
  }
}

function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2
    &&object2.x-object1.x<object2.width/2+object1.width/2){
      object1.velocityX = object1.velocityX*(-1)
      object2.velocityX = object1.velocityX*(-1)
    }
    if(object1.y-object2.y<object2.height/2+object1.height/2
      &&object2.y-object1.y<object2.height/2+object1.height/2){
        object1.velocityY = object1.velocityY*(-1)
        object2.velocityY = object1.velocityY*(-1)
      }
}