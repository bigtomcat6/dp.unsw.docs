// Called to Set the Default values for the Axes of the Graph
function GraphingDefaults(){
	
	SmallGraphSetup();
	
	// Sets the number of major divisions for X and Y
	YDivisions = 5;
	XDivisions = 10;
	
	// Sets the number of minor divisions for X and Y
	LinesBetweenY = 2;
	LinesBetweenX = 2;
	
	// Sets the Maximum and Minimum Values to be Displayed on the Axes. For large and small numbers this will not include the power
	MaxDisplayX = 10;
	MaxDisplayY = 10;
	
	MinDisplayX = 0;
	MinDisplayY = 0;
	
	// Sets the power of the displayed numbers on the axes
	powerxvalue = 0;
	poweryvalue = 0;
	
	// Sets the type of default scaling
	ScaleType = "Automatic";
	
	// Sets the Titles of the Graph
	XTitle = "x (thing you change)";
	YTitle = "y (dependent variable)";
	
	
	
	// Colors of Lines
	AxesLineColor = "#000000";
	MainLineColor = "#000000";
	MinorLineColor = "#CCCCCC";
	
	$("#MinY").val(0);
	$("#MaxY").val(MaxDisplayY);
	$("#MinX").val(0);
	$("#MaxX").val(MaxDisplayX);
}

// Sets the properties of the data points that will be plotted
function DataPointProperties(){
	pointradius = 3;
	pointcolors = new Array("#990000", "#000099", "#009900", "#990099", "#ff9200", "#CCCCCC");
	pointlinewidth = 1;
}

// Called to Set Scales for the Axes of the Graph
function GraphingScales(){
	// Determines the Spread of Displayed Values on Scale
	XRange = MaxDisplayX - MinDisplayX;
	YRange = MaxDisplayY - MinDisplayY;
	
	// Determines the Increments for the Scales
	XInc = XRange/XDivisions;
	YInc = YRange/YDivisions;
	
	// Determines the Height and Width of the Graph
	YHeight = (LowGrid - HighGrid);
	XWidth = (RightGrid - LeftGrid);
	
	// Determines the Midpoint of the Graph
	MidX = XWidth/2 + LeftGrid;
	MidY = LowGrid - YHeight/2;
	
	// Determines the Scale of the Graph (Pixels/Number)
	XScale = XWidth/XRange;
	YScale = YHeight/YRange;
	
	// Determines the Spacing Between Divisions
	XSpace = XWidth/XDivisions;
	YSpace = YHeight/YDivisions;
	
	// Determines Extra Distance for Axis Arrow
	ExtraArrowLength = XSpace/2;
	ArrowWidth = ExtraArrowLength/2;
	
	// Determines the total number of horizontal and vertical grid lines
	XTotalGridLineNumber = XDivisions * LinesBetweenX;
	YTotalGridLineNumber = YDivisions * LinesBetweenY;
	
	// Determines spacing between minor gridlines
	XMinorSpace = XSpace/LinesBetweenX;
	YMinorSpace = YSpace/LinesBetweenY;
	
	//Sets the Title of the Graph
	GraphTitle = YTitle + " vs. " + XTitle;
	
}

// Draws the Axes for the graph
function DrawAxes(){
	
	// Draws the Main Axis
	// Draws Vertical Line with Arrow
	DrawArrow(LeftGrid, LowGrid, YHeight+ExtraArrowLength, AxesLineWidth, AxesLineColor, ArrowWidth, 270);
	// Draws Horizontal Line with Arrow
	DrawArrow(LeftGrid, LowGrid, XWidth+ExtraArrowLength, AxesLineWidth, AxesLineColor, ArrowWidth, 0);
	
	// Draws Vertical Grid Lines and X scale 
	for (i=0; i <= XTotalGridLineNumber; i++){
		if (i%LinesBetweenX){
			DrawLine(LeftGrid+i*XMinorSpace, LowGrid, YHeight, MinorLineWidth, MinorLineColor, 270);
		}
		else{
			numbertodisplay = MinDisplayX + i/LinesBetweenX*XInc;
			DrawLine(LeftGrid+i*XMinorSpace, LowGrid+ScaleFontSize, YHeight+1.0*ScaleFontSize, MainLineWidth, MainLineColor, 270);
			if (powerxvalue >= 3 || powerxvalue < 0){
				numbertodisplay = numbertodisplay/(Math.pow(10, powerxvalue));
			}
			if (numbertodisplay >=10){
				WriteText(LeftGrid+i*XMinorSpace, LowGrid+2.5*ScaleFontSize, numbertodisplay.toFixed(0), ScaleFontSize, ScaleFontColor, 0.5, ScaleFont, 0);
			}
			else{
				WriteText(LeftGrid+i*XMinorSpace, LowGrid+2.5*ScaleFontSize, numbertodisplay.toFixed(1), ScaleFontSize, ScaleFontColor, 0.5, ScaleFont, 0);
			}
			
		}
	}
	WriteText(MidX, LowGrid+5*ScaleFontSize, XTitle, AxesTitleFontSize, AxesFontColor, 0.5, AxesFont, 0);
	if (powerxvalue != 0){
		WriteText(RightGrid, LowGrid+4*ScaleFontSize, showxprefix, AxesTitleFontSize, AxesFontColor, 0.5, AxesFont, 0);
	}
	
	// Draws Horizontal Grid Lines and Y scale 
	for (i=0; i <= YTotalGridLineNumber; i++){
		if (i%LinesBetweenY){
			DrawLine(LeftGrid, LowGrid-i*YMinorSpace, XWidth, MinorLineWidth, MinorLineColor, 0);
		}
		else{
			numbertodisplay = MinDisplayY + i/LinesBetweenY*YInc;
			DrawLine(LeftGrid-1.0*ScaleFontSize, LowGrid-i*YMinorSpace, XWidth+1.0*ScaleFontSize, MainLineWidth, MainLineColor, 0);
			if (poweryvalue >= 3 || poweryvalue < 0){
				numbertodisplay = numbertodisplay/(Math.pow(10, poweryvalue));
			}
			if (numbertodisplay >=10){
				WriteText(LeftGrid-2.5*ScaleFontSize, LowGrid-i*YMinorSpace+0.25*ScaleFontSize, numbertodisplay.toFixed(0), ScaleFontSize, ScaleFontColor, 0.5, ScaleFont);
			}
			else{
				WriteText(LeftGrid-2.5*ScaleFontSize, LowGrid-i*YMinorSpace+0.25*ScaleFontSize, numbertodisplay.toFixed(1), ScaleFontSize, ScaleFontColor, 0.5, ScaleFont);
			}
		}
	}
	WriteText(LeftGrid-5*ScaleFontSize, MidY, YTitle, AxesTitleFontSize, AxesFontColor, 0.5, AxesFont, 270);
	
	if (poweryvalue != 0){
		WriteText(LeftGrid-4*ScaleFontSize, HighGrid-1.0*ScaleFontSize, showyprefix, AxesTitleFontSize, AxesFontColor, 0.5, AxesFont, 0);
	}
	
	WriteText(MidX, HighGrid-1.5*AxesTitleFontSize, GraphTitle, AxesTitleFontSize, AxesFontColor, 0.5, AxesFont, 0);
	
	ExpandContractArrow();
}

// Function to Actually plot out points on the graph
function PlotPoints(j){
	//Loops through all the data points for a given set of data and determines where to plot them on the graph
	for (i = 0; i <= data[j].xpoints.length; i++){
		xpos = LeftGrid + (data[j].xpoints[i]-MinDisplayX)*XScale;
		ypos = LowGrid - (data[j].ypoints[i]-MinDisplayY)*YScale;
		if (!(ignoredpoints[j].hidepoints.includes(i))){
			showpointcolor = pointcolors[j];
		}
		else{
			showpointcolor = "#999999";
		}
		if (ypos <= LowGrid && ypos >= HighGrid){
			DrawCircle (xpos, ypos, pointradius, showpointcolor, pointlinewidth);
		}
		
	}	
}

// Function to curves for curve fits
function PlotFunctions(j){
	//Loops through all the data points for a given set of data and determines where to plot them on the graph
	for (i = 0; i <= XWidth; i++){
		xpos = LeftGrid + i;
		xvalueatpoint = MinDisplayX + i/XScale;
		if (graphinfo[j].type == "proportional"){
			yvalueatpoint = graphinfo[j].graphconstant1 * xvalueatpoint;
		}
		if (graphinfo[j].type == "linear"){
			yvalueatpoint = graphinfo[j].graphconstant1 * xvalueatpoint + graphinfo[j].graphconstant2;
		}
		if (graphinfo[j].type == "inverse"){
			yvalueatpoint = graphinfo[j].graphconstant1/xvalueatpoint;
		}
		if (graphinfo[j].type == "square"){
			yvalueatpoint = graphinfo[j].graphconstant1*Math.pow(xvalueatpoint,2.0);
		}
		if (graphinfo[j].type == "cube"){
			yvalueatpoint = graphinfo[j].graphconstant1*Math.pow(xvalueatpoint,3.0);
		}
		if (graphinfo[j].type == "squareroot"){
			yvalueatpoint = graphinfo[j].graphconstant1*Math.pow(xvalueatpoint,0.5);
		}
		if (graphinfo[j].type == "inversesquareroot"){
			yvalueatpoint = graphinfo[j].graphconstant1/Math.pow(xvalueatpoint,0.5);
		}
		if (graphinfo[j].type == "inversesquare"){
			yvalueatpoint = graphinfo[j].graphconstant1/Math.pow(xvalueatpoint,2.0);
		}
		if (graphinfo[j].type == "exponential"){
			yvalueatpoint = graphinfo[j].graphconstant2*Math.exp(graphinfo[j].graphconstant1*xvalueatpoint);
		}
		if (graphinfo[j].type == "norelationship"){
			yvalueatpoint = graphinfo[j].graphconstant1;
		}
		ypos = LowGrid - (yvalueatpoint-MinDisplayY)*YScale;
		showpointcolor = pointcolors[j];
		if (ypos <= LowGrid && ypos >= HighGrid){
			DrawCircle (xpos, ypos, 1, showpointcolor, pointlinewidth);
		}
		
	}	
}

// Draws the expand and contract arrows

function ExpandContractArrow(){
	if (graphsize == "small"){
		DrawArrow(475, 350, 15, 2, "#990000", 4, 135);
	}
	else{
		DrawArrow(10, 620, 15, 2, "#990000", 4, 315);
	}
}

// This function will autoscale your axes based on the highest value of the data you have entered in any dataset

function FindMaximumValues(){
	MinDisplayY = 0;
	MinDisplayX = 0;
	xprefixvalue = 0;
	showxprefix = "";
		
	yprefixvalue = 0;
	showyprefix = "";
	
	MaxX = 0;
	MaxY = 0;
	for (i = 0; i < 5; i++){
		tempX = Math.max.apply(0, data[i].xpoints);
		tempY = Math.max.apply(0, data[i].ypoints);
		if (tempX > MaxX){
			MaxX = tempX;
		}
		if (tempY > MaxY){
			MaxY = tempY;
		}
	}
	
	SetAutoScales();

}

// For autoscale this will determine the maximum values for x and y axes 
function SetAutoScales(){
	if (MaxX == 0){
		MaxX = 5;
	}
	
	if (MaxY == 0){
		MaxY = 5;
	}
	
	WholeX = MaxX;
	powerxvalue = 0;
	
	while (WholeX >= 1000.0){
		WholeX = WholeX/1000;
		powerxvalue = powerxvalue + 3;
		showxprefix = "e+" + powerxvalue;
	}
	
	while (WholeX < 1){
		WholeX = WholeX*1000;
		powerxvalue = powerxvalue - 3;
		showxprefix = "e" + powerxvalue;
	}
	
	
	ScaledMaxX = MaxX/(Math.pow(10, powerxvalue));
	
	IncrementX = (Math.pow(10, powerxvalue))/XDivisions;
	
	if (ScaledMaxX >= 1){
		MaxDisplayX = 2*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 2){
		MaxDisplayX = 4*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 4){
		MaxDisplayX = 5*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 5){
		MaxDisplayX = 10*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 10){
		MaxDisplayX = 20*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 20){
		MaxDisplayX = 40*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 40){
		MaxDisplayX = 50*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 50){
		MaxDisplayX = 100*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 100){
		MaxDisplayX = 200*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 200){
		MaxDisplayX = 400*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 400){
		MaxDisplayX = 500*(Math.pow(10, powerxvalue));
	}
	
	if (ScaledMaxX >= 500){
		MaxDisplayX = 1000*(Math.pow(10, powerxvalue));
	}
	
	WholeY = MaxY;
	poweryvalue = 0;
	
	while (WholeY >= 1000.0){
		WholeY = WholeY/1000;
		poweryvalue = poweryvalue + 3;
		showyprefix = "e+" + poweryvalue;
	}
	
	while (WholeY < 1){
		WholeY = WholeY*1000;
		poweryvalue = poweryvalue - 3;
		showyprefix = "e" + poweryvalue;
	}
	
	
	ScaledMaxY = MaxY/(Math.pow(10, poweryvalue));
	
	IncrementY = (Math.pow(10, poweryvalue))/YDivisions;
	
	if (ScaledMaxY >= 1){
		MaxDisplayY = 2*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 2){
		MaxDisplayY = 4*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 4){
		MaxDisplayY = 5*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 5){
		MaxDisplayY = 10*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 10){
		MaxDisplayY = 20*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 20){
		MaxDisplayY = 40*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 40){
		MaxDisplayY = 50*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 50){
		MaxDisplayY = 100*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 100){
		MaxDisplayY = 200*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 200){
		MaxDisplayY = 400*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 400){
		MaxDisplayY = 500*(Math.pow(10, poweryvalue));
	}
	
	if (ScaledMaxY >= 500){
		MaxDisplayY = 1000*(Math.pow(10, poweryvalue));
	}
	
	$("#MinY").val(0);
	$("#MaxY").val(MaxDisplayY);
	$("#MinX").val(0);
	$("#MaxX").val(MaxDisplayX);
	
	GraphingScales();
}

// This function will manually scale your axes based on what is in the boxes for your max and mins
function ManuallyScaleAxes(){
	if (ScaleType == "Manual"){
		MaxDisplayX = Math.abs(parseFloat(document.getElementById("MaxX").value));
		MaxDisplayY = Math.abs(parseFloat(document.getElementById("MaxY").value));
		MinDisplayX = Math.abs(parseFloat(document.getElementById("MinX").value));
		MinDisplayY = Math.abs(parseFloat(document.getElementById("MinY").value));
		
		WholeX = MaxDisplayX;
		powerxvalue = 0;
		
		while (WholeX >= 1000.0){
			WholeX = WholeX/1000;
			powerxvalue = powerxvalue + 3;
			showxprefix = "e+" + powerxvalue;
		}
		
		while (WholeX < 1){
			WholeX = WholeX*1000;
			powerxvalue = powerxvalue - 3;
			showxprefix = "e" + powerxvalue;
		}
		
		WholeY = MaxDisplayY;
		poweryvalue = 0;
		
		while (WholeY >= 1000.0){
			WholeY = WholeY/1000;
			poweryvalue = poweryvalue + 3;
			showyprefix = "e+" + poweryvalue;
		}
		
		while (WholeY < 1){
			WholeY = WholeY*1000;
			poweryvalue = poweryvalue - 3;
			showyprefix = "e" + poweryvalue;
		}
		GraphingScales();
	}
	
	
}

// Changes the scale type
function SetScaleType(x){
	if (x){
		ScaleType = "Manual";
		ManuallyScaleAxes();
	}
	else{
		ScaleType = "Automatic";
		FindMaximumValues();
		GraphingScales();
	}
	
}

// Changes Size of Graph
function ChangeGraphSize(){
	
	if (graphsize == "small"){
		BigGraphSetup();
		GraphingScales();
		$('#DataEntrySide').hide();
		$('#BottomDisplayArea').hide();
		$('#LargeGraphKey').show();
		$('#AdjustGraphSizeButton').css({top: 590, left: 0});
	}
	else{
		SmallGraphSetup();
		GraphingScales();
		$('#DataEntrySide').show();
		$('#BottomDisplayArea').show();
		$('#LargeGraphKey').hide();
		$('#AdjustGraphSizeButton').css({top: 320, left: 450});
	}
	
}

function SmallGraphSetup(){
	//Sets the pix range for the graph
	HighGrid = 40;
	LowGrid = 310;
	LeftGrid = 530;
	RightGrid = 870;
	
	// Size of Lines
	AxesLineWidth = 2;
	MainLineWidth = 2;
	MinorLineWidth = 1;
	
	//Font Properties
	ScaleFontSize = 10;
	ScaleFontColor = "#000000";
	ScaleFont = "Ariel";
	AxesTitleFontSize = 15;
	AxesFontColor = "#990000";
	AxesFont = "Ariel";
	
	pointradius = 3;
	
	graphsize = "small";
	
}

function BigGraphSetup(){
	//Sets the pix range for the graph
	HighGrid = 100;
	LowGrid = 525;
	LeftGrid = 125;
	RightGrid = 575;
	
	// Size of Lines
	AxesLineWidth = 4;
	MainLineWidth = 4;
	MinorLineWidth = 2;
	
	//Font Properties
	ScaleFontSize = 20;
	ScaleFontColor = "#000000";
	ScaleFont = "Ariel";
	AxesTitleFontSize = 25;
	AxesFontColor = "#990000";
	AxesFont = "Ariel";
	
	pointradius = 6;
	
	graphsize = "big";
	
	SetUpBigKey();
}

function SetUpBigKey(){
	datastring = '';
	for (i = 0; i < 5; i++){
		if ((data[i].xpoints.length) || graphinfo[i].equation.length > 15){
			$("#LET" + i).css('color', pointcolors[i]);
			$("#LET" + i).html(DataSetName[i]);
			temptemp = graphinfo[i].equation.length;
			if (temptemp > 30){
				$("#LE" + i).css('font-size', '14px');	
			}
			else {
				$("#LE" + i).css('font-size', '18px');	
			}
			$("#LE" + i).html(graphinfo[i].equation);
			if (graphinfo[i].type == 'linear'){
				$("#LEC" + i).html('Correlation: ' + graphinfo[i].graphconstant3.toFixed(5));
			}
			else{
				$("#LEC" + i).html('');
			}
		}
	}
	MathJax.typeset();
	CenterEquation();
}

