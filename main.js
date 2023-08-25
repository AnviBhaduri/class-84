canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

rover_height = 90;
rover_width = 100;

bg_image = "mars.jpg";
rvr_image = "rover.png";

rover_x = 100;
rover_y = 100;

function add(){
    background_image = new Image();
    background_image = uploadBackground;
    background_image.src = bg_image;

    rover_image = new Image();
    rover_image.onload = uploadRover;
    rover_image.src = rvr_image;
}

function uploadBackground(){
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    ctx.drawImage(rover_image, rover_x, rover_y, rover.width, rover.height);
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keypressed = e.keycode;
    console.log(keypressed);
        if(keypressed == '38'){
            up();
            console.log("up");
        }
        if(keypressed == '37'){
            left();
            console.log("left");
        }
        if(keypressed == '40'){
            down();
            console.log("down");
        }
        if(keypressed == '39'){
            right();
            console.log("right");
        }
    }