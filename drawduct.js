
function draw() {

//set the (x ,y) location of dimension text drawn on the canvas[i] box
var rightDimx = 370;
var rightDimy = 300;
var leftDimx = 130;
var leftDimy = 300;

//initialise variable to use to set .getContext to the desired box
var ctx = "";

//piece information should be an array of arrays as follows pieces[pieceData[0..[i]]] with piece being pieceData[[draw[true/false], [pieceType(to add additional piece types all need is a different drawing pattern)]]]
//array with 6 items, each item holding an (x) or (y) coordinate for a specific piece
var p2xa = [0,0,0,0,0,0];
var p2ya = [500,500,500,500,500,500];
var p3xa = [400,400,400,400,400,400];
var p3ya = [400,400,400,400,400,400];
var p4xa = [400,400,400,400,400,400];
var p4ya = [100,100,100,100,100,100];

//initialise variables to be used for points to be used in the drawing operations
var p2x = "";
var p2y = "";
var p3x = "";
var p3y = "";
var p4x = "";
var p4y = "";
var adj = "";

//change this from looping through 6 boxes, to the max number of boxes where the “ready to draw” tickbox is ticked

//loop through canvas[i] to draw in boxes on page.
for (var i = 0; i < 6; i++) {
	
//variables p[2, 3, 4][x, y]a[i] are currently set into fixed array of 6
//need to dynamically set the size of array or change the way this information is held.
//maybe an array of pieces with each piece being an array of required points and additional id
//retrieve (x) and (y) coordinates for drawing to canvas[i] 
	adj = "";
	p2x = p2xa[i];
	p2y = p2ya[i];
	p3x = p3xa[i];
	p3y = p3ya[i];
	p4x = p4xa[i];
	p4y = p4ya[i];
	
	//check if canvas[i].getContext has a valid value, if so proceed, if not, next [i] 
	if (
document.getElementById("canvas" + i).getContext) 
//roadmap put here a loop to check if the box array has a "ready to draw " tick on the form (update a variable to boolian True False and either skip it or draw it then move on. change to if...then...else
				{
//set variable .getContext to the canvas[i]of the page
		ctx = document.getElementById("canvas" + i).getContext('2d');
//use .getContext variable to write text to canvas[i]
		ctx.font = "30px Arial";
		ctx.textAlign = 'center';
		ctx.textWidth = 50;
		ctx.fillText("500 X 300", leftDimx, leftDimy);
		ctx.fillText("300 X 500", rightDimx, rightDimy);
		
//roadmap-different pieces: insert if..else to choose correct drawing instructions based on item in array pieceData[..,[pieceType],..]
// save the canvas translate state to (0, 0)
	ctx.save();
	
// translate start point to required offset position
  	ctx.translate(50, 50);
		
// use .getCanvas variable to draw piece
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(p2x, p2y);
    ctx.lineTo(p3x - adj, p3y);
    ctx.lineTo(p4x - adj, p4y);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.stroke();
    
// restore the canvas translate state to (0, 0)
    ctx.restore();
			}

			
   }
   

} 

function cl() {

var boxNumber = 2;
var boxIndex = boxNumber - 1;
var cgc ="";
var c = "";
c = document.getElementById("canvas" + boxIndex)
cgc = document.getElementById("canvas" + boxIndex).getContext('2d');

	cgc.clearRect(0, 0, c.width, c.height);
	
	//show button after clear to open form to enter data
	
}





