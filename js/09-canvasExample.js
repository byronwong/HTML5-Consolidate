"use strict";

// Canvas JS 

// Invokes on loads
function example1() {

    var elem = document.getElementById("canvas-example1");
    var canvas = elem.getContext("2d");
    
    // Colours have to be defined before strokeRect/ fillRect
    
    // Fill colour
    canvas.fillStyle = "#0000ff"; // blue
    // Stroke colour
    canvas.strokeStyle = "#ff0000"; // red
    
    
    // Creating a stroke
    canvas.strokeRect(100, 100, 120, 120);

    /*
        x	The x-coordinate of the upper-left corner of the rectangle	Play it »
        y	The y-coordinate of the upper-left corner of the rectangle	Play it »
        width	The width of the rectangle, in pixels	Play it »
        height	The height of the rectangle, in pixels
    */
    
    // Draw a filled rectangle
    canvas.fillRect(110, 110, 100, 100);
    
    // Clear - removes areas in shape
    canvas.clearRect(130,130,30,30);
}

// Gradients
function example2() {

    var elem = document.getElementById("canvas-example2");
    var canvas = elem.getContext("2d");
    
    // Creating gradients
    var gradient = canvas.createLinearGradient(0, 0, 10, 100); // x0, y0, x1, y1

    /*
        x0	The x-coordinate of the start point of the gradient
        y0	The y-coordinate of the start point of the gradient
        x1	The x-coordinate of the end point of the gradient
        y1	The y-coordinate of the end point of the gradient
    */
    
    // Adding colour to our gradient
    // obj.addColorStop([postion], [color]);
    gradient.addColorStop(0.5, "#0000ff"); // blue
    gradient.addColorStop(1, "#ff0000"); // red
    
    // Fill rules to use gradient (gives the whole canvas the gradient)
    canvas.fillStyle = gradient;

    // To give the gradient to a specific shape
    // give the shape a variable name and assign the fillrect() the gradient. 
    // http://www.w3schools.com/tags/canvas_createlineargradient.asp

    
    // Create the shapees
    canvas.fillRect(150, 10, 200, 100);
    canvas.fillRect(400, 10, 100, 100);

}


// Custom drawing
function example3() {

    var elem = document.getElementById("canvas-example3");
    var canvas = elem.getContext("2d");

    canvas.beginPath();

    // go to starting loaction without drawing
    canvas.moveTo(200, 200);
    // start drawing
    canvas.lineTo(200, 400);
    canvas.lineTo(400, 400);
    canvas.closePath();

    // canvas.stroke();
    canvas.fill();
}


// Custom Effects (clipping)
function example4() {

    var elem = document.getElementById("canvas-example4");
    var canvas = elem.getContext("2d");

    canvas.beginPath();

    // go to starting loaction without drawing
    canvas.moveTo(200, 200);
    // satrt drawing
    canvas.lineTo(200, 400);
    canvas.lineTo(400, 400);
    canvas.closePath();

    // use to clip
    canvas.clip();

    // to demonstrate clip we will add some more elements
    canvas.beginPath();
    for (var i = 0; i < 400; i = i + 5)
    {
        canvas.moveTo(0, i);// (x,y) move to postion 
        canvas.lineTo(500, i);// draw line to x=500, y=i
    }
    
    canvas.stroke();


}

// Custom drawing - creating Arcs
function example5() {

    var elem = document.getElementById("canvas-example5");
    var canvas = elem.getContext("2d");

    canvas.beginPath();

    // Creating a full circle
    // canvas.arc([x], [y], [radius], [starting angle], [number of degrees in radians], [anti-clockwise? false= clockwise]  )
    // canvas.arc(200, 200, 75, Math.PI * 2, false);

    // remember that PI is 180 deg
    // so if we want to create less than a circle 
    var radiansFromDegrees = Math.PI / 180 * 60; // NOTE: PI = 180 deg, divide by 180 to get 1 deg.
    canvas.arc(200,200,75,0, radiansFromDegrees);


    canvas.stroke();
}


// Quadratic curve
function example6() {

    var elem = document.getElementById("canvas-example6");
    var canvas = elem.getContext("2d");

    canvas.beginPath();
    canvas.moveTo(100, 100);

    // canvas.quadraticCurveTo([x], [y], [end x], [end y])
    canvas.quadraticCurveTo(150, 200, 100, 300);
    canvas.stroke();

    // by adjusting the control point 
    canvas.beginPath();
    canvas.moveTo(100, 100);
    canvas.quadraticCurveTo(50, 150, 100, 300);
    canvas.stroke();
}


// Bezier curve
function example7() {

    var elem = document.getElementById("canvas-example7");
    var canvas = elem.getContext("2d");

    canvas.beginPath();
    canvas.moveTo(150, 50);

    // a bezier curve has two control points 
    canvas.bezierCurveTo(50, 100, 200, 150, 100, 250);

    // other adjustments we can make 
    canvas.lineWidth = 5;
    canvas.lineCap = "round";

    canvas.stroke();
}


// Text canvas
function example8() {

    var elem = document.getElementById("canvas-example8");
    var canvas = elem.getContext("2d");

    canvas.font = "bold 20px segoe UI, sans-serif";
    canvas.textAlign = "start";
    

    // canvas.fillText("Hello HTML 5!", 200, 200);

    canvas.textBaseLine = "bottom";
    var message = "Hello HTML 5!";
    canvas.fillText(message, 200, 220);

    var textSize = canvas.measureText(message); // returns a object 
    canvas.strokeRect(200,200, textSize.width, 20 );

    canvas.stroke();
}



addEventListener("load", example1);
addEventListener("load", example2);
addEventListener("load", example3);
addEventListener("load", example4);
addEventListener("load", example5);
addEventListener("load", example6);
addEventListener("load", example7);
addEventListener("load", example8);