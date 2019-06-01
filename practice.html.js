<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Rod String Diagrmam</title>
    <script src="p5/p5.min.js"></script>
</head>
<body>
    

    <script>
// need to receive the measuremnt data and scale it into the variable
//render the image based on the data received
// draw the component according to the data---with changes in diameter and the appropriate length
// ex: for 
// ex: for 200ft diametr = 3inches
// ex: for 400ft diamter = 2 inches ect...

//covert these measurement to scale



// scaling the data into pixels
//1ft == 1px
//1inch == 3px 


//3 inch 200ft
//2 inch 400ft

//the scale is each inch equal 2 pixels.
// the scale is each ft equals 2 pixels
var firstDiameterInput = 3; //inches -received from user input
var firstHeightInput = 200; //ft     - received from user imput
var secondHeightInput = 400;
var secondDiameterInput = 2; 

const first={
 d:firstDiameterInput * 2,
 h:firstHeightInput * 2,

}

const second ={
    d:secondDiameterInput * 2,
    h:secondHeightInput * 2,
}
function setup() {
  createCanvas(500, 1000, WEBGL);
}

function draw() {
  background(200);
  cylinder(first.d,first.h,100);
  	translate(-0, 0);
	fill(0, 0, 0);
	
	push();
  	translate(0, first.h);
	fill(0,0, 0);
    cylinder(second.d, second.h,100);
	pop();
  
console.log(second.h);


//   rotateX(frameCount * 0.001);
//   rotateZ(frameCount * 0.001);
  cylinder(first.d,first.h,100);


}

    //  function setup(){
    //     createCanvas(500,1000, WEBGL);
    //  }

    //  function draw(){
    //     background(200);
    //     rotateX(200);
    //     rotateY(200)
 
    //     cylinder(first.d, first.h,200);
        // cylinder(second.d, second.h,200);
        
      
        // rect(second.h,second.d, second.h,second.d);
    //  };

    //  function draw(){
    //      cylinder(second.d,second.h,100);
    //  }
    
    
    
    </script>
</body>
</html>