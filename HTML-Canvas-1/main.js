var canvas =document.querySelector('canvas'); //select canvas from html document

//Resizing canvas to cover whole screen of browser through js
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//returning a 2D drawing context to variable brush--- think of it as a magical brush for canvas :)
var brush =canvas.getContext('2d');

// use to make rectangle using fillrect(x,y,width,height)
brush.fillStyle ='rgba(255,0,0,0.5)'; // coloring our rectangle, property apply to all fill object below it
brush.fillRect(0,0,100,100)
brush.fillStyle ='rgba(0,255,0,0.5)'; // coloring our rectangle, property apply to all fill object below it
brush.fillRect(100,100,100,100)
brush.fillStyle ='rgba(0,0,255,0.5)'; // coloring our rectangle, property apply to all fill object below it
brush.fillRect(200,200,100,100)
brush.fillStyle ='rgba(95,100,40,0.5)'; // coloring our rectangle, property apply to all fill object below it
brush.fillRect(100,300,100,100)
brush.fillStyle ='rgba(100,30,60,0.5)'; // coloring our rectangle, property apply to all fill object below it
brush.fillRect(0,400,100,100)

//Line
brush.beginPath();
brush.moveTo(500,500); //start point of line
brush.lineTo(600,400); //end point of line
brush.stroke(); // making line visible

// Triangle By lines
brush.beginPath();
brush.moveTo(500,500); //start point of line
brush.lineTo(600,400); //end point of 1st line and starting point of second line
brush.lineTo(700,500);
brush.lineTo(500,500);
brush.strokeStyle ="Red"; // coloring our lines
brush.stroke();
brush.beginPath();//Ending our line to stop connectng to upcoming figures


//Arc / Circle using arc(x,y,radius,start_angle in radian,end_angle in radian,anticlock-wise:bool)
brush.arc(400,300,70,0,Math.PI*2,false);
brush.strokeStyle ="Green";
brush.stroke();

// drawing multiple circle using for loop
var j=100;
for(var i=1;i<4;i++){
    brush.beginPath();
    brush.arc(400+j,300,70,0,Math.PI*2,false);
    j+=100;
    brush.strokeStyle ="Green";
    brush.stroke();
}

// drawing multiple random circle using for loop
var x=0,y=0;
let colors = ["Red","Blue","Green","Yellow","Orange"];
for(var i=1;i<5;i++){
    x=Math.random()*window.innerWidth;
    y=Math.random()*window.innerHeight;
    var index_color =(Math.floor(Math.random() * 10))%5; //generating random numbers from 0-3
    brush.beginPath();
    brush.arc(x,y,50,0,Math.PI*2,false);
    brush.strokeStyle =colors[index_color];
    brush.stroke();
}
