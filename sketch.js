//global variables
var r1,r2 //are two rectangle
var r3,r4,r5


//setup: like prepration
function setup(){
    createCanvas(500,700)
    r1= createSprite(200,200,60,60)
    r1.debug=true;
    r1.shapeColor="lighpink"

    r2= createSprite(400,100,60,60)
    r2.debug=true;
    r2.shapeColor="lighpink"

    r3= createSprite(300,300,60,60)
    r3.debug=true;
    r3.shapeColor="lighpink"

    r4= createSprite(300,100,60,60)
    r4.debug=true;
    r4.shapeColor="lighpink"

    r5= createSprite(300,200,60,60)
    r5.debug=true;
    r5.shapeColor="lighpink"

}

//draw
function draw(){
    background("yellow")
    r2.x=mouseX
    r2.y=mouseY
/*if(r2.isTouching(r1)){
    r2.shapeColor="blue"
}
else{
    r2.shapeColor="lighpink"
}*/
//ALGORITHM : a set of lines that performes a specific task
//calculate distance between them
console.log(r1.width/2+r2.width/2);
console.log(r1.x-r2.x);

if(touch(r5,r2)){
    r2.shapeColor="blue"
}
else{
    r2.shapeColor="lighpink"
}
//FUNCTION CALL
touch(r4,r2)

    drawSprites()
}

