//Defining variable
var mak,happymak;
var database,food,foodStock,readStock

//to loading pictures
function preload()
{
  makIMG= loadImage("images/dogImg.png");
  happymakIMG = loadImage("images/dogImg1.png");
}

//To setup all the codes
function setup() {
  database = firebase.database();
  console.log(database);

//Ceating canvas
  createCanvas(500, 500);

// Creating sprites
  mak = createSprite(250,250,10,10);
  mak.addImage(makIMG)
  mak.scale = 0.2
// Reffering food which is written in database
  foodStock = database.ref("food");
  foodStock.on("value",readStock)
}

// To draw all the things
function draw() { 

// Creating background
  background(46, 139, 87);

// creating text,size of text,color of text
  textSize(30);
  stroke(255,0,0);
  text("press uparrow to feed mak",75,50);
  textSize(30);
  stroke(255,215,0);
  text("milk bottles = 20",150,100);

// using if command for UP_ARROW key
  if (keyWentDown(UP_ARROW)){
    writeStock(food)
      mak.addImage(happymakIMG);
  }
  drawSprites();

}

// using function readStock
function readStock(data){
  food-data.val();
}

// using writeStock
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({

})

}