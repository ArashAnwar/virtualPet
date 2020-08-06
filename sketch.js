//Create variables here
var dog;
var happyDog;
var FoodS;
var foodStock;
function preload()
{
  //load images here
  loadImage("images/doglmg.png");
  loadImage("images/doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  var dog = loadImage("images/doglmg.png");
  var happyDog  = loadImage("images/doglmg.png");
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background((46, 139, 87))
 if(keyWentDown(UP_ARROW)){
    writeStock(FoodS);
    dog.addImage(happyDog);
 }
  drawSprites();
  //add styles here
print(foodStock);
}
function readStock(data){
  FoodS = data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}
