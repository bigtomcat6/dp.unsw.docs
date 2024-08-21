// Setting the parameters needed when program starts

activedatasetnumber = 0;

ignoredpoints = [];

data = [];

graphinfo = [];

temparray = [];

DataSetName = ["Data Set 1", "Data Set 2", "Data Set 3", "Data Set 4", "Data Set 5"];

graphsize = "small";

for (i = 0; i < 5; i++){
	data[i] = {xpoints: [], ypoints: []};
	ignoredpoints[i] = {hidepoints: []};
	graphinfo[i] = {type: 'none', graphconstant1: 0, graphconstant2: 0, graphconstant3: 0, equation: '\\[ y = \\]', active: 0, fitkind: 'none'};
	
}

GraphTypeNames = {"none":{name:"Undetermined", constants:0},"proportional":{name:"Proportional", constants:1}, "linear":{name:"Linear", constants:2}, "square":{name:"Squared", constants:1}, "cube":{name:"Cubed", constants:1}, "squareroot":{name:"Square Root", constants:1}, "norelationship":{name:"No Relationship", constants:1}, "inverse":{name:"Inverse", constants:1}, "inversesquareroot":{name:"Inverse Square Root", constants:1}, "inversesquare":{name:"Inverse Squared", constants:1}, "exponential":{name:"Exponential", constants:2}};

function initialize(){	
	
	// Loads in all parameters needed for the graph
	GraphingDefaults();
	GraphingScales();
	DataPointProperties();
	$(".MainDataTable").hide();
	$("#MainDataTable0").show();
	$("#Tips").delay(5000).fadeOut();
	
	// Sets up Canvas for Drawing		
	theCanvas = document.getElementById("CanvasOne");
	ctx = theCanvas.getContext("2d");
	
	// Calls the drawing part every 1/10th of a second
	StartItMoving = setInterval(drawingpart, 100);
	
	CreateDataTables();
	for (i = 0; i < 5; i++){
		$("#EquationOnly").html(graphinfo[i].equation);
	}
	
	CenterEquation();
	SetManualCurveFits();
	MathJax.typeset();
	
	URLVars = getUrlVars();
	putUrlVars();
	
}
function drawingpart(){
	ctx.fillStyle="#FFFFFF";
	ctx.fillRect(0,0,900,640);
	DrawAxes();
	for (p = 0; p < 5; p++){
		PlotPoints(p);
		if (graphinfo[p].type != "none"){
			PlotFunctions(p);
		}
	}
}


function ToggleWindow(x){
	WindowToToggle = "#" + x;
	$(WindowToToggle).toggle(500);
	if (x == "SaveGraphSection"){
		FormatSavingDataLink();
	}
}

function DrawCircle(xp, yp, rc, pc, pw){
	ctx.lineWidth = pw;
	ctx.strokeStyle = pc;
	ctx.beginPath();
	ctx.arc(xp,yp,rc,0,2*Math.PI);
	ctx.stroke();
	
}

// Draws a line with length ll starting at (lx1,ly1) with a line thickness of lw, a color of lc at an angle of langle)
function DrawLine(lx1, ly1, ll, lw, lc, langle){
	
	angrad = langle/180*Math.PI;
	ctx.save();
	ctx.translate(lx1, ly1);
	ctx.rotate(angrad);
	ctx.lineWidth = lw;
	ctx.strokeStyle = lc;
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(ll,0);
	ctx.stroke();
	ctx.restore();
}


// Draws an arrow with length al starting at (ax1,ay1) with a line thickness of aw, a color of ac an arrow tip of atip width and at an angle of aangle)
function DrawArrow(ax1, ay1, al, aw, ac, atip, aangle){
	
	angrad = aangle/180*Math.PI;
	ctx.save();
	ctx.translate(ax1, ay1);
	ctx.rotate(angrad);
	ctx.lineWidth = aw;
	ctx.strokeStyle = ac;
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(al,0);
	ctx.moveTo(al,0);
	ctx.lineTo(al-atip,0-atip);
	ctx.moveTo(al,0);
	ctx.lineTo(al-atip,0+atip);
	ctx.stroke();
	ctx.restore();
}

// Used for Writing Text Anywhere on the Canvas
function WriteText(x,y,t,s,c,m,f,a){
	angrad = a/180*Math.PI;
	ctx.fillStyle = c;
	ctx.font= s + "px " + f;
	temptext = t;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(angrad);
	metrics = ctx.measureText(temptext);
	textWidth = metrics.width;
	xposition = 0 - m*textWidth;
	ctx.fillText(temptext,xposition, 0);
	ctx.restore();
}