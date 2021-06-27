var canvas =document.querySelector('canvas'); //select canvas from html document

//Resizing canvas to cover whole screen of browser through js
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//returning a 2D drawing context to variable brush--- think of it as a magical brush for canvas :)
var brush =canvas.getContext('2d');


//Adding Animated moving circle
var radius=50; // radius of circle
 
// Generating random start point for the circle
var RANDOM_X=Math.floor(Math.random()*innerWidth);
var RANDOM_Y=Math.floor(Math.random()*innerHeight);
if(RANDOM_X>innerWidth/2){RANDOM_X-=radius;}
else if(RANDOM_X<innerWidth/2){RANDOM_X+=radius;}
if(RANDOM_Y>innerHeight/2){RANDOM_Y-=radius;}
else if(RANDOM_Y<innerWidth/2){RANDOM_Y+=radius;}

var x=RANDOM_X,y=RANDOM_Y;

var velx=5; //velocity in x
var vely=5; //velocity in y

// function for motion of circle
function animate(){
    requestAnimationFrame(animate); //looping
    brush.clearRect(0,0,innerWidth,innerHeight); // clearing canvas to draw new circle  and remove previous one to have the motion effect
    //drawing circle
    brush.beginPath();
    brush.arc(x,y,radius,0,Math.PI*2,false);
    //brush.strokeStyle ="Red";
    //brush.stroke(); // for making only stroke boundries
    brush.fillStyle="Red";
    brush.fill(); // for making fill solid
    // changing position coordinate
    x+=velx;
    if(x<=radius || x>=innerWidth-radius){velx*=-1;} //If collision happen change direction of velocity

    y+=vely;
    if(y<=radius || y>=innerHeight-radius){vely*=-1;} //If collision happen change direction of velocity

    }

animate(); //function call