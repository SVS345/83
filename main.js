var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;
var color;
var width_of_line;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 5;
    var new_width=srcreen_width-100;
    var new_height=srcreen_height-400;

    if(width < 992){
        document,getElementById("myCanvas").width = new_width;
        dodcumet.getElementById("myCanvas").height = new_height;
    }
    canvas.addEventListener("touchstart",my_touchstart);
    function my_touchstart(e);
    {
        console.log("my_touchstart");
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;

        last_position_of_x = e.touches[0].client.x-canvas.offsetTop;
        last_position_of_y = e.touches[0].client.y-canvas.offsetTop;

    }
    canvas.addEventListener("touchmove",my_touchmove);
    function my_touchmove (e);
    {
        console.log("my_touchmove");
        last_position_of_mouse_x = e.touches[0].client.x-canvas.offsetTop;
        last_position_of_mouse_y = e.touches[0].client.y-canvas.offsetTop;

        ctx.beginpath();
    ctx.strokestyle = color;
    ctx.linewidth = width_of_line;

    console.log("last_position_of_x and y coordinates = ");
    console.log("x ="+ current_position_of_mouse_x + "y =" + current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.strokestyle();

    last_position_of_x=current_position_of_mouse_x;
    last_position_of_y=current_position_of_mouse_y;
}
function   cear_drawing(){
    ctx.clearReact(0,0,canvas_width,canvas_height);
}
    

    
    
    
