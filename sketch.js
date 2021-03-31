const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    //backgroundImg = loadImage("sunrise1.png")

    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30);
    if(hour >= 12){
        text("Time: "+ hour%12 + "PM", 100,50);
    }
    else if(hour== 0){
        text("Time:12 AM ", 100,50);  
    }
    else{
        text("Time: "+ hour%12 + "AM", 100,50);
    }

}

async function getBackgroundImg(){

    
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseType =  await response.json();
    console.log(responseType);

    var dt=responseType.datetime;
    console.log(dt)

    hour = dt.slice(11,13)
    console.log(hour)


    if(hour >= 04 && hour <= 06){
        // debugger;
        bg ="sunrise1.png"
    }
    else if(hour >= 06 && hour <= 08){
        // debugger;
        bg = "sunrise2.png"
    }
    else if(hour >= 08 && hour <= 11){
        // debugger;
        bg = "sunrise3.png"
    }
    else if(hour >= 11 && hour <= 13){
        // debugger;
        bg = "sunrise4.png"
    }
    else if(hour >= 13 && hour <= 15){
        // debugger;
        bg = "sunrise5.png"
    }
    else if(hour >= 15 && hour <= 17){
        // debugger;
        bg = "sunrise6.png"
    }
    else if(hour >= 17 && hour <= 19){
        // debugger;
        bg = "sunset7.png"
    }
    else if(hour >= 19 && hour <= 21){
        // debugger;
        bg = "sunset8.png"
    }
   else if(hour >= 21 && hour <= 23){
        // debugger;
        bg = "sunset9.png"
    }
    else if(hour >= 23 && hour == 0){
        // debugger;
        bg = "sunset10.png"
    }
    else if(hour == 0 && hour <= 03){
        // debugger;
        bg = "sunset11.png"
    }
    else{
        // debugger;
        bg = "sunset12.png"
    }

    backgroundImg = loadImage(bg)
    console.log(backgroundImg)  
}
