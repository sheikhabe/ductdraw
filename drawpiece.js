//New comment 2.07pm
function drawPiece() {

//clear the canvas
cl();

//set the (x ,y) location of dimension text drawn on the canvas[i] box
var rightDimx = 490;
var rightDimy = 300;
var leftDimx = 110;
var leftDimy = 300;

//Initialise Variable for pieceType
var pieceType = "";

//initialise variable to use to set .getContext to the desired box
var ctx = "";

//take drawing dimensions input from form fields
var end1Width = document.getElementById("end1Width").value;
var end1Height = document.getElementById("end1Height").value;
var end2Width = document.getElementById("end2Width").value;
var end2Height = document.getElementById("end2Height").value;
var length = document.getElementById("length").value;

//setUp SetDown details
var set = document.getElementById("set").value;
var setudtb = document.getElementById("setudtb").value;
var setDir = document.getElementById("setDir").value;

var txtSet = set;
var txtsetDir = setDir;
var txtsetudtb = setudtb;

//Lagging Details
var lag = document.getElementById("lag").value;

var txtlag = lag;

//set array for offset
var offset = [0,0,0,0,0];



//piece information should be an array of arrays as follows pieces[pieceData[0..[i]]] with piece being pieceData[[draw[true/false], [pieceType(to add additional piece types all need is a different drawing pattern)]]]
//array with 6 items, each item holding an (x) or (y) coordinate for a specific piece

//initialise variables to be used for points to be used in the drawing operations
var offsetPos = document.getElementById("offsetPos").value;
console.log(offsetPos);
offset[offsetPos] = document.getElementById("offset").value;
console.log(offsetPos);
console.log(offset);

if (offsetPos=="0") {
	//  block of code to be executed if condition1 is true */
	var pieceType = "Offset Top Left";
	var p1x = parseInt("0");
	var p1y = parseInt(offset[0]);
	var p2x = parseInt(p1x);
	var p2y = p1y + parseInt(end1Width);
	var p3x = parseInt(length);
	var p3y = p2y + parseInt(offset[1]) - parseInt(offset[2]) + (parseInt(end2Width) + parseInt(offset[3]) - parseInt(p2y));
	var p4x = p3x;
	var p4y = p3y - parseInt(end2Width);
	var p5x = p1x;
	var p5y = p1y;
	var adj = "";
	var adjCanLocY = Math.min(p1y, p4y);
	console.log("This is offsetPos:",offsetPos," Top Left");
	/*console.log(adjCanLocY);*/
	console.log("p1", p1x, p1y);
	console.log("p2", p2x, p2y);
	console.log("p3", p3x, p3y);
	console.log("p4", p4x, p4y);
	console.log("p5", p5x, p5y);

} else if (offsetPos=="1") {
	//  block of code to be executed if the condition1 is false and condition2 is true
	var pieceType = "Offset Bottom Left";
	var p1x = parseInt("0");
	var p1y = parseInt(offset[0]);
	var p2x = parseInt(p1x);
	var p2y = p1y + parseInt(end1Width);
	var p3x = parseInt(length);
	var p3y = p2y + parseInt(offset[1]) - parseInt(offset[2]) + (parseInt(end2Width) + parseInt(offset[3]) - parseInt(p2y));
	var p4x = p3x;
	var p4y = p3y - parseInt(end2Width);
	var p5x = p1x;
	var p5y = p1y;
	var adj = "";
	var adjCanLocY = Math.min(p1y, p4y);
	console.log("This is offsetPos:",offsetPos," Bottom Left");
	/*console.log(adjCanLocY);*/
	console.log("p1", p1x, p1y);
	console.log("p2", p2x, p2y);
	console.log("p3", p3x, p3y);
	console.log("p4", p4x, p4y);
	console.log("p5", p5x, p5y);

} else if (offsetPos=="2") {
	//  block of code to be executed if the condition1 is false and condition2 is true
	var pieceType = "Offset Bottom Right";
	var p1x = parseInt("0");
	var p1y = parseInt(offset[0]);
	var p2x = parseInt(p1x);
	var p2y = p1y + parseInt(end1Width);
	var p3x = parseInt(length);
	var p3y = p2y + parseInt(offset[1]) - parseInt(offset[2]) + (parseInt(end2Width) + parseInt(offset[3]) - parseInt(p2y));
	var p4x = p3x;
	var p4y = p3y - parseInt(end2Width);
	var p5x = p1x;
	var p5y = p1y;
	var adj = "";
	var adjCanLocY = Math.min(p1y, p4y);
	console.log("This is offsetPos:",offsetPos," Bottom Right");
	/*console.log(adjCanLocY);*/
	console.log("p1", p1x, p1y);
	console.log("p2", p2x, p2y);
	console.log("p3", p3x, p3y);
	console.log("p4", p4x, p4y);
	console.log("p5", p5x, p5y);

} else if (offsetPos=="3") {
	//  block of code to be executed if the condition1 is false and condition2 is true
	var pieceType = "Offset Top Right";
	var p1x = parseInt("0");
	var p1y = parseInt(offset[0]);
	var p2x = parseInt(p1x);
	var p2y = p1y + parseInt(end1Width);
	var p3x = parseInt(length);
	var p3y = p2y + parseInt(offset[1]) - parseInt(offset[2]) + (parseInt(end2Width) + parseInt(offset[3]) - parseInt(p2y));
	var p4x = p3x;
	var p4y = p3y - parseInt(end2Width);
	var p5x = p1x;
	var p5y = p1y;
	var adj = "";
	var adjCanLocY = Math.min(p1y, p4y);
	console.log("This is offsetPos:",offsetPos," Top Right");
	/*console.log(adjCanLocY);*/
	console.log("p1", p1x, p1y);
	console.log("p2", p2x, p2y);
	console.log("p3", p3x, p3y);
	console.log("p4", p4x, p4y);
	console.log("p5", p5x, p5y);

} else {

	//  block of code to be executed if the condition1 is false and condition2 is false
	var pieceType = "Equal Taper";
	var p1x = parseInt("0");
	var p1y = parseInt(offset[0]);
	var p2x = parseInt(p1x);
	var p2y = p1y + parseInt(end1Width);
	var p3x = parseInt(length);
	var p3y = p2y + parseInt(offset[1]) - parseInt(offset[2]) + (parseInt(end2Width) + parseInt(offset[3]) - parseInt(p2y));
	var p4x = p3x;
	var p4y = p3y - parseInt(end2Width);
	var p5x = p1x;
	var p5y = p1y;
	var adj = "";
	var adjCanLocY = Math.min(p1y, p4y);
	console.log("This is offsetPos:",offsetPos," Equal Taper");
	/*console.log(adjCanLocY);*/
	console.log(offset)
	console.log("p1", p1x, p1y);
	console.log("p2", p2x, p2y);
	console.log("p3", p3x, p3y);
	console.log("p4", p4x, p4y);
	console.log("p5", p5x, p5y);
}



//change this from looping through 6 boxes, to the max number of boxes where the “ready to draw” tickbox is ticked

//loop through canvas[i] to draw in boxes on page.

for (var i = 0; i < 1; i++) {
	
//variables p[2, 3, 4][x, y]a[i] are currently set into fixed array of 6
//need to dynamically set the size of array or change the way this information is held.
//maybe an array of pieces with each piece being an array of required points and additional id
//retrieve (x) and (y) coordinates for drawing to canvas[i] 
/*
	adj = "";
	p2x = p2xa[i];
	p2y = p2ya[i];
	p3x = p3xa[i];
	p3y = p3ya[i];
	p4x = p4xa[i];
	p4y = p4ya[i];
	*/

	//check if canvas[i].getContext has a valid value, if so proceed, if not, next [i] 
	if (
document.getElementById("canvas" + i).getContext) {
//roadmap put here a loop to check if the box array has a "ready to draw " tick on the form (update a variable to boolian True False and either skip it or draw it then move on. change to if...then...else
				
//set variable ctx to .getContext of the canvas[i]of the page
		ctx = document.getElementById("canvas" + i).getContext('2d');

//use .getContext variable to write text to canvas[i]
		
		var txte1 = end1Width.concat('x', end1Height);
		var txte2 = end2Width.concat('x', end2Height);
		
		ctx.font = "30px Arial";
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle'
		ctx.textWidth = 50;
		//Try Word Wrap Dimensions
		//ctx.fillText(txte1, leftDimx, leftDimy);
		wrapitup(ctx, txte1, 12, "red");
		ctx.fillText(txte2, rightDimx, rightDimy);
		ctx.fillText(pieceType, 300,30);
		if ((txtsetudtb == "FOB" || txtsetudtb == "FOT")) {
			ctx.fillText(txtsetudtb, 300, 300);
			ctx.strokeRect(250, 280, 100, 40);
		} else {
			
		ctx.fillText(txtsetDir, 300, 270);
		ctx.fillText(txtSet, 300, 330);
		ctx.fillText(txtsetudtb, 300, 300);
	}
//var txtsetDir = setDir;
//var txtsetudtb = setudtb;
		
//roadmap-different pieces: insert if..else to choose correct drawing instructions based on item in array pieceData[..,[pieceType],..]
// save the canvas translate state to (0, 0)
	ctx.save();
	
// translate start point to required offset position
  	ctx.translate(50, 50-adjCanLocY);
		
// use .getCanvas variable to draw piece
    ctx.beginPath();
    ctx.moveTo(p1x, p1y);
    ctx.lineTo(p2x, p2y);
    ctx.lineTo(p3x, p3y);
    ctx.lineTo(p4x, p4y);
    ctx.closePath();
    ctx.stroke();
    
// restore the canvas translate state to (0, 0)
	ctx.restore();

	/*
// create PNG URL

	var canvas0URL = ctx.toDataURL();
	console.log(canvas0URL);

*/
			}
   }
}




function cl() {

var boxNumber = 1;
var boxIndex = boxNumber - 1;
var cgc ="";
var c = "";
c = document.getElementById("canvas" + boxIndex)
cgc = document.getElementById("canvas" + boxIndex).getContext('2d');

	cgc.clearRect(0, 0, c.width, c.height);
	
	//show button after clear to open form to enter data
	
}

function wrapitup(ctx, text, fontSize, fontColor) {
    var max_width  = 55;
    var fontSize   =  30;
    var lines      =  new Array();
    var width = 0, i, j;
    var result;
    var color = fontColor || "white";

    // Font and size is required for ctx.measureText()
    ctx.font   = fontSize + "px Arial";

    
    // Start calculation
    while ( text.length ) {
    	for( i=text.length; ctx.measureText(text.substr(0,i)).width > max_width; i-- );
    
    	result = text.substr(0,i);
    
    	if ( i !== text.length )
    		for( j=0; result.indexOf(" ",j) !== -1; j=result.indexOf(" ",j)+1 );
    	
    	lines.push( result.substr(0, j|| result.length) );
    	width = Math.max( width, ctx.measureText(lines[ lines.length-1 ]).width );
    	text  = text.substr( lines[ lines.length-1 ].length, text.length );
    }
    
    
    // Calculate canvas size, add margin
    ctx.canvas.width  = 14 + width;
    ctx.canvas.height =  8 + ( fontSize + 5 ) * lines.length;
    ctx.font   = fontSize + "px Arial";

    // Render
    ctx.fillStyle = color;
    for ( i=0, j=lines.length; i<j; ++i ) {
		ctx.fillText( lines[i], 8, 5 + fontSize + (fontSize+5) * i );
		
	}
	/* call using this
	wrapitup(ctx, txte1, 12, "red");*/
}


/*
function wrapText(context, text, x, y, maxWidth, lineHeight) {
	var words = text.split(' ');
	var line = '';

	for(var n = 0; n < words.length; n++) {
	  var testLine = line + words[n] + ' ';
	  var metrics = context.measureText(testLine);
	  var testWidth = metrics.width;
	  if (testWidth > maxWidth && n > 0) {
		context.fillText(line, x, y);
		line = words[n] + ' ';
		y += lineHeight;
	  }
	  else {
		line = testLine;
	  }
	}
	context.fillText(line, x, y);
  }
  
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');
  var maxWidth = 400;
  var lineHeight = 25;
  var x = (canvas.width - maxWidth) / 2;
  var y = 60;
  var text = 'All the world \'s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.';

  context.font = '16pt Calibri';
  context.fillStyle = '#333';

  wrapText(context, text, x, y, maxWidth, lineHeight);
} */