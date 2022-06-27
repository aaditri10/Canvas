canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "red";
line_width = 3;
mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

canvas.addEventListener("mousedown", myMouseDown);
//events are in double quotes, calling a function we don't add a () when you are writing the function as a parameter//
function myMouseDown(e) {
color = document.getElementById("colorofmouse").value ;
line_width = document.getElementById("linewidthofmouse").value ;
mouseEvent = "mouseDown";
}
canvas.addEventListener("mouseup", Mymouseup);
function Mymouseup(e) {
    mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", Mymouseleave);
function Mymouseleave(e) {
    mouseEvent = "mouseLeave";
}
canvas.addEventListener("mousemove", Mymousemove);
function Mymousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    //= means assigning and == means comparing operator
    if(mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
        console.log("Last position of x is"+last_position_of_x+"and last position of y is"+last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Current position of x is"+current_position_of_mouse_x+"and current position of y is"+current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
function clearcanvas() {
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
    //x, y, width, height//
}
