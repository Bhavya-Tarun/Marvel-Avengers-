var canvas=new fabric.Canvas("myCanvas");

block_width=30;
block_height=30;

player_x=10;
player_y=10;

var player_objects="";
var player_part="";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_objects=Img;
        
        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_objects);
    });
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey== true && keyPressed=='80'){
        console.log("p and shift pressed together.");
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElemntById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
    }
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed=='77'){
        console.log("m and shift pressed together.");
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElemntById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
}
if(keyPressed=='38')
{
    Up();
    console.log("up");
}
if(keyPressed='40');
{
    Down();
    console.log("down");
}
if(keyPressed='37');
{
    Left();
    console.log("left");
}
if(keyPressed='39');
{
    Right();
    console.log("right");
}
if(keyPressed='70');
{
    new_image('ironman_face.png');
    console.log("f");
}
if(keyPressed='66');
{
    new_image('spiderman_body.png');
    console.log("b");
}
if(keyPressed='76');
{
    new_image('hulk_legs.png');
    console.log("l");
}
if(keyPressed='82');
{
    new_image('thor_right_hand.png');
    console.log("r");
}
if(keyPressed='72');
{
    new_image('captain_america_left_hand.png');
    console.log("h");
}
}
function Up(){
    if(player_y>=0){
        player_y=player_y-block_height;
        console.log("block_image_height"+block_height);
        console.log("When up arrow is pressed"+" x="+player_x+" and "+"y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}
function Down(){
    if(player_y<=500){
        player_y=player_y+block_height;
        console.log("block_image_height"+block_height);
        console.log("When up arrow is pressed"+" x="+player_x+" and "+"y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}
function Left(){
    if(player_x>0){
        player_x=player_x-block_width;
        console.log("block_image_width"+block_width);
        console.log("When up arrow is pressed"+" x="+player_x+" and "+"y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}
function Right(){
    if(player_x<=850){
        player_x=player_x+block_width;
        console.log("block_image_width"+block_width);
        console.log("When up arrow is pressed"+" x="+player_x+" and "+"y="+player_y);
        canvas.remove(player_objects);
        player_update();
    }
}