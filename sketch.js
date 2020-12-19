const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var Ground1, Ground2, Ground3, Ground4

var Partical = []
var Plinko = []
var Division = []

var DivisionHeight = 300

function setup() {
    createCanvas(480, 800);

    engine = Engine.create();
    world = engine.world;

    Ground1 = new ground(0, 400, 4, 800);
    Ground2 = new ground(480, 400, 4, 800);
    Ground3 = new ground(240, 800, 480, 4);

    for (a = 0; a <= width; a = a + 80) {
        Division.push(new division(a, height - DivisionHeight / 2, 10, DivisionHeight))
    }


    for (c = 40; c <= width - 20; c = c + 50) {
        Plinko.push(new plinko(c, 75, 10))
    }

    for (d = 15; d <= width; d = d + 50) {
        Plinko.push(new plinko(d, 175, 10))
    }

    for (e = 40; e <= width - 20; e = e + 50) {
        Plinko.push(new plinko(e, 275, 10))
    }

    for (f = 15; f <= width; f = f + 50) {
        Plinko.push(new plinko(f, 375, 10))
    }


    if (frameCount % 60 === 0) {
        Partical.push(new partical(random(width / 2 - 10, width / 2 + 10), 10, 10))
    }


}

function draw() {
    rectMode(CENTER);

    background(0);
    Engine.update(engine)

    //DIVISONS


    for (b = 0; b < Division.length; b++) {
        Division[b].display();
    }

    for (g = 0; g < Plinko.length; g++) {
        Plinko[g].display();
    }

    for (h = 0; h < Partical.length; h++) {
        Partical[h].display();
    }


    Ground1.display();
    Ground2.display();
    Ground3.display();

    drawSprites();
}