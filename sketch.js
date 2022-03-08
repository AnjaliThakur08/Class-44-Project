//pizza Ingredients
var base , sause , toppings 
var sSauces , sToppings; 
//pizza = base + sause + toppings
var pBase , pSause , pToppings,  pFinal;

//burger Ingredients
var bun, tikki;
//burger = lower bun + tikki(salad)  + top bun 
var bBun, bTikki, bFinal;

//sandwitch Ingredients
var bread, cheese; 
// sandwitch = bread + veggies + cheese
var sBread, sCheese, sFinal;


function preload(){
    //ingredient 
sauce = loadImage("Images/3-Sauces.png");
toppings = loadImage("Images/Toppings.png");



//steps of improvemnets 

pBase = loadImage("Images/pBase.png");
pSauce = loadImage("Images/pSauce.jpg");
pFinal = loadImage("Images/pFinal.jpg");
pBackground = loadImage("Images/pBackground.webp");
pToppings = loadImage("Images/pToppings.jpg");
}

function setup(){
    createCanvas(1000,600);
    sSauces= createSprite(800,159,150,150);
    
    

   // sToppings = createSprite(650,400,20,20);
    
    
    pizza = createSprite(200,379,370,370);
    //sprite.addImage(image_name)
    pizza.addImage(pBase);
    
}


function draw(){
background(pBackground);
console.log(mouseX +  "," + mouseY);


drawSprites();


}