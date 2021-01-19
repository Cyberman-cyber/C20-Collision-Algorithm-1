var fr,mr;

function setup() 
{ 
    createCanvas(1200,800); 
    fr = createSprite(400,300,50,50);
    fr.shapeColor = "blue";
    mr = createSprite(200,200,80,50);
    mr.shapeColor = "blue"; 
}

function draw() 
{
  background(0); 
  mr.x = World.mouseX; 
  mr.y = World.mouseY; 

  // console.log(fr.x,mr.x,fr.x-mr.x); 
  console.log(fr.y,mr.y,fr.y-mr.y);

  if(fr.x-mr.x <fr.width/2+mr.width/2 &&
     mr.x-fr.x < fr.width/2+mr.width/2 && 
     fr.y-mr.y < fr.height/2+mr.height/2 && 
     mr.y-fr.y<fr.height/2+mr.height/2)
     {
        fr.shapeColor = "yellow";
        mr.shapeColor = "yellow"; 
     } 
      else 
      {
        fr.shapeColor = "blue"; 
        mr.shapeColor = "blue"; 
      } 

    drawSprites(); 
}