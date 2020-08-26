
function draw() {

var rightDimx = 370;
var rightDimy = 300;
var leftDimx = 130;
var leftDimy = 300;


// loop all pieces

//var box = ['canvas, "canvas2", 'canvas3', canvas4, canvas5, canvas6];


var ctx = "";

var p2xa = [0,0,0,0,0,0];
var p2ya = [500,500,500,500,500,500];
var p3xa = [400,400,400,400,400,400];
var p3ya = [400,400,400,400,400,400];
var p4xa = [400,400,400,400,400,400];
var p4ya = [100,100,100,100,100,100];
var p2x = "";
var p2y = "";
var p3x = "";
var p3y = "";
var p4x = "";
var p4y = "";
var adj = "";


for (var i = 0; i < 6; i++) {

	adj = "";
	p2x = p2xa[i];
	p2y = p2ya[i];
	p3x = p3xa[i];
	p3y = p3ya[i];
	p4x = p4xa[i];
	p4y = p4ya[i];
	
	if (
document.getElementById("canvas" + i).getContext) {
		ctx = document.getElementById("canvas" + i).getContext('2d');


	/* 
	
var canvas2 = document.getElementById('canvas2');
  if (canvas2.getContext) {
		var ctx2 = canvas2.getContext('2d');
	*/
		

		ctx.font = "30px Arial";
		ctx.textAlign = 'center';
		ctx.textWidth = 50;
		ctx.fillText("500 X 300", leftDimx, leftDimy);
		ctx.fillText("300 X 500", rightDimx, rightDimy);
// draw piece

	ctx.save()
  	ctx.translate(50, 50);

    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(p2x, p2y);
    ctx.lineTo(p3x - adj, p3y);
    ctx.lineTo(p4x - adj, p4y);
    ctx.lineTo(0, 0);
    ctx.closePath();
    ctx.stroke();
    
    // need to add here to reset the transform back to 0
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





