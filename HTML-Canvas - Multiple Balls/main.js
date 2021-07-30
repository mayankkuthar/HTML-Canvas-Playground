var canvas =document.querySelector('canvas'); //select canvas from html document

//Resizing canvas to cover whole screen of browser through js
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

//returning a 2D drawing context to variable brush--- think of it as a magical brush for canvas :)
var brush =canvas.getContext('2d');


//Creating a javascript object -Circle
function Circle(x,y,velx,vely,radius,color){
    //Giving starting position x any value to every circle
    this.x=x;
    this.y=y;

    this.velx = velx; //velocity in x
    this.vely= vely; //velocity in y

    this.color=color; //selecting color of ball

    this.radius=radius; // radius of circle

    //Creating a method to draw circles
    this.draw = function(){
        //drawing circle
        brush.beginPath();
        brush.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        //brush.strokeStyle ="Red";
        //brush.stroke(); // for making only stroke boundries
        brush.fillStyle=color;
        brush.fill(); // for making fill solid
    }

    //Create a method to give motion to circle
    this.motion = function(){
        // changing position coordinate
        this.x+=this.velx;
        if(this.x<=this.radius || this.x>=innerWidth-this.radius){this.velx*=-1;} //If collision happen change direction of velocity

        this.y+=this.vely;
        if(this.y<=this.radius || this.y>=innerHeight-this.radius){this.vely*=-1;} //If collision happen change direction of velocity

        //After updating the postion for motion we need to draw the circle
        this.draw();
    }
}


//Array to store multple circles
var circleArr=[];
var colorArr=["Red","Green","Orange","Blue","Yellow"]
for (let index = 0; index < 100; index++) {

    //Generating random radius
    var radius=Math.ceil(Math.random()*50);

    //Generating random velocity
    var velx=Math.ceil(Math.random()*10/3);
    var vely=Math.ceil(Math.random()*10/3);

    // Generating random start point for the circle
    var RANDOM_X=Math.floor(Math.random()*innerWidth);
    var RANDOM_Y=Math.floor(Math.random()*innerHeight);
    if(RANDOM_X>innerWidth/2){RANDOM_X-=radius;}
    else if(RANDOM_X<innerWidth/2){RANDOM_X+=radius;}
    if(RANDOM_Y>innerHeight/2){RANDOM_Y-=radius;}
    else if(RANDOM_Y<innerWidth/2){RANDOM_Y+=radius;}

    var x=RANDOM_X,y=RANDOM_Y;

    //Selecting Random Color
    var index_color =(Math.floor(Math.random()*100))%5;

    //pushing new circle object to array
    circleArr.push(new Circle(x,y,velx,vely,radius,colorArr[index_color]));
    
}

//Make a new object instance - circle
var circle = new Circle(200,200,5,5,50);


// function for motion of circle
function animate(){
    requestAnimationFrame(animate); //looping
    brush.clearRect(0,0,innerWidth,innerHeight); // clearing canvas to draw new circle  and remove previous one to have the motion effect

    for (let index = 0; index < circleArr.length; index++) {
        //Making circle move
        circleArr[index].motion();
    }

    }

animate(); //function call