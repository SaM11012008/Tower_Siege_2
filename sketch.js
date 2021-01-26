const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
function setup(){
    var canvas = createCanvas(1920,935);
    engine = Engine.create();
    world = engine.world;

    strokeWeight(2);
    
    push()
    stroke("black");
    platform = new Platform(900,510,400,20);
    pop()

    push()
    stroke("white");
    
    block1 = new Block1(890,355);
    block2 = new Block2(920,395);
    block3 = new Block2(890,395);
    block4 = new Block2(860,395);
    block5 = new Block3(950,435);
    block6 = new Block3(920,435);
    block7 = new Block3(890,435);
    block8 = new Block3(860,435);
    block9 = new Block3(830,435);
    block10 = new Block4(800,475);
    block11 = new Block4(830,475);
    block12 = new Block4(860,475);
    block13 = new Block4(890,475);
    block14 = new Block4(920,475);
    block15 = new Block4(950,475);
    block16 = new Block4(980,475);
    pop()

    polygon = new Polygon(100,400,50,50);
  
    catapult = new slingshot(polygon.body,{x:200,y:400});

    
  

   
}

function draw() {
    background(150,200,200);
    Engine.update(engine);

    platform.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    catapult.display()
    polygon.display()
   
    textSize(30);
    fill("black");
    text("Drag the hexagonal stone, and release it towards the Blocks",500,100);
    text("Press Space to Play Again",700,200);
}

function mouseDragged() {
	Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	catapult.fly()
}

function keyPressed() {
    if(keyCode === 32) {
        Matter.Body.setPosition(polygon.body,{x:100,y:400});
        catapult.attach(polygon.body);
    }
}