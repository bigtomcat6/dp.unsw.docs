// These are all the functions for working with the data from the data tables

// This function creates the datatables for the data section upon page loading
function CreateDataTables(){
	NumberOfRowsOfData = 25;
	for (k = 0; k < 5; k++){
		for (i = 2; i <=NumberOfRowsOfData; i++){
			j = i - 1;
			insertstring = '<tr><td id = "point' + i + 'table' + k + '" class = "activepoint" onclick = "SwitchActivity(' + j + ')">' + i + '</td><td><input type="text" id = "x' + i + 'table' + k + '" class = "DataInputs"  onkeyup = "LoadDataIntoArrays(' + k + ',' + i + ',1)"/></td><td><input type="text" id = "y' + i + 'table' + k + '" class = "DataInputs"  onkeyup = "LoadDataIntoArrays(' + k + ',' + i + ',2)"/></td></td></tr>';
			
			$('#MainDataTable' + k + ' > tbody:last-child').append(insertstring);
		}

	}
}

// Gets the data from the data table and puts it into arrays for graphing and analysis

function LoadDataIntoArrays(){
	for (j = 0; j < 5; j++){
		data[j].xpoints = [];
		data[j].ypoints = [];
		for (i = 1; i <= NumberOfRowsOfData; i++){
			pointx = "#x" + i + "table" + j;
			pointy = "#y" + i + "table" + j;
			arraylocation = i - 1;
			if ($(pointx).val() != ''){
				tempx = $(pointx).val();
				tempxvalue = tempx.replace(/,/g, '');
				data[j].xpoints[arraylocation] = Math.abs(tempxvalue);
			}
			if ($(pointy).val() != ''){
				tempy = $(pointy).val();
				tempyvalue = tempy.replace(/,/g, '');
				data[j].ypoints[arraylocation] = Math.abs(tempyvalue);
			}
		}
			
	
		if (ScaleType == "Automatic"){
			FindMaximumValues();
		}
		
		if (graphinfo[j].fitkind == 'automatic'){
			if (graphinfo[j].fitkind == 'exponential'){
				DetermineExponentialConstants();
			}
			else if (graphinfo[j].fitkind == 'proportional'){
				DetermineProportionalConstants();
			}
			else if (graphinfo[j].fitkind == 'norelationship'){
				
			}
			else{
				DetermineGraphConstants();
			}
		}
	}
}

// Changes the Titles of the x and y axes
function ChangeAxesTitles(){
	XTitle = $("#xaxistitle").val();
	YTitle = $("#yaxistitle").val();
	//Sets the Title of the Graph
	GraphTitle = YTitle + " vs. " + XTitle;
}

// Changes the Active Dataset
function ChangeDataSet(){
	$(".MainDataTable").hide();
	activedatasetnumber++;
	if (activedatasetnumber > 4){
		activedatasetnumber = 0;
	}
	LiveDataTable = "#MainDataTable" + activedatasetnumber;
	$(LiveDataTable).show();
	document.getElementById("KeySectionTitle").innerHTML = DataSetName[activedatasetnumber];
	$("#KeySectionTitle").css('color', pointcolors[activedatasetnumber]);
	$(".activepoint").css('color', pointcolors[activedatasetnumber]);
	
	$("#EquationOnly").html(graphinfo[activedatasetnumber].equation);
	$("#EquationOnly").css('color', pointcolors[activedatasetnumber]);;
	$('#SpotForEquation').html(graphinfo[activedatasetnumber].equation);
	$("#SpotForEquation").css('color', pointcolors[activedatasetnumber]);
	MathJax.typeset();
	CenterEquation();
	if (graphinfo[activedatasetnumber].type == 'linear'){
		$("#Correlation").css('color', pointcolors[activedatasetnumber]);
		$('#Correlation').html('Correlation: ' + graphinfo[activedatasetnumber].graphconstant3.toFixed(5));
	}
	else{
		$('#Correlation').html('');
	}
	
	
	SetManualCurveFits();
	
	$(".datatableheading").css('background-color', pointcolors[activedatasetnumber]);
}

// Switches which data is displayed on the x and y axis
function SwitchData(){
	DisplayX = document.getElementById("xaxistitle").value;
	DisplayY = document.getElementById("yaxistitle").value;
	
	tempdisplay = DisplayX;
	XTitle = DisplayY;
	YTitle = tempdisplay;
	
	document.getElementById("xaxistitle").value = XTitle;
	document.getElementById("yaxistitle").value = YTitle;
	
	

	for (i = 0; i < 5; i++){
		for (j = 1; j < 16; j++){
			pointx = "x" + j + "table" + i;
			pointy = "y" + j + "table" + i;
			arraylocation = j - 1;
			temp = document.getElementById(pointx).value;
			temp2 = document.getElementById(pointy).value;
			if (temp != "" && temp2 != ""){
				xelem = document.getElementById(pointx);
				xelem.value = temp2;
				yelem = document.getElementById(pointy);
				yelem.value = temp;
			}
		}
		temparray = data[i].xpoints;
		data[i].xpoints = data[i].ypoints;
		data[i].ypoints = temparray;
	}
	if (ScaleType == "Automatic"){
		FindMaximumValues();
	}
}

// This function is designed to turn activate and deactivate points from a dataset

ignoredpoints[i] = {hidepoints: []};

function SwitchActivity(x){
	
	if ((ignoredpoints[activedatasetnumber].hidepoints.includes(x))){
		ignoredpoints[activedatasetnumber].hidepoints = $.grep(ignoredpoints[activedatasetnumber].hidepoints, function(value) {
			return value != x;
		});	
	}
	else{
		ignoredpoints[activedatasetnumber].hidepoints.push(x);
	}
	j = x + 1;
	divtofix = "#point" + j + "table" + activedatasetnumber;
	$(divtofix).toggleClass("activepoint inactivepoint");
}

function RemoveTips(){
	$("#Tips").hide();
}

function RenameDataSet(){
	temp = DataSetName[activedatasetnumber];
	DataSetName[activedatasetnumber] = prompt("Change the Name of the Dataset (optional)", temp);
	document.getElementById("KeySectionTitle").innerHTML = DataSetName[activedatasetnumber];	
}

// Mathmatical change to x data
function xchange(x){
	N = data[activedatasetnumber].xpoints.length;
	CValue = parseFloat($("#XC").val());
	for (i = 0; i < N; i++){
		datapointnumber = i + 1;
		pointx = "x" + datapointnumber + "table" + activedatasetnumber;
		temp = parseFloat(data[activedatasetnumber].xpoints[i]);
		if (temp != ""){
			if (x == "plus"){
				temptemp = temp + CValue;
			}
			if (x == "minus"){
				temptemp = temp - CValue;
			}
			if (x == "multiply"){
				temptemp = temp * CValue;
			}
			if (x == "divide"){
				if (CValue != 0){
					temptemp = temp/CValue;
				}
			}
			if (x == "inverse"){
				if (temp != 0){
					temptemp = 1/temp;
				}
			}
			if (x == "square"){
				if (temp != 0){
					temptemp = Math.pow(temp, 2.0);
				}
			}
			if (x == "cube"){
				if (temp != 0){
					temptemp = Math.pow(temp, 3.0);
				}
			}
			if (x == "squareroot"){
				if (temp != 0){
					temptemp = Math.pow(temp, 0.5);
				}
			}
			if (x == "degtorad"){
				if (temp != 0){
					temptemp = temp*Math.PI/180;
				}
			}
			if (x == "sine"){
				temptemp = Math.sin(temp);
			}
			
			if (Number.isInteger(temptemp)){
				temptemp = temptemp;
			}
			else{
				temptemp = temptemp.toPrecision(4);
			}
			
			document.getElementById(pointx).value = temptemp;
			data[activedatasetnumber].xpoints[i] = temptemp;
		}	
	}
	
	// Make changes to the x-axis title when data is modified
	if (x == "inverse"){
		if (XTitle.startsWith('1/[')){
			XTitleLength = XTitle.length;
			XTitle = XTitle.slice(3, XTitleLength-1);
		}
		else{
			XTitle = "1/[" + XTitle + "]";
		}
		
	}
	if (x == "square"){
		if (XTitle.endsWith(']^0.5')){
			XTitleLength = XTitle.length;
			XTitle = XTitle.slice(1, XTitleLength-5);
		}
		else{
			XTitle = "[" + XTitle + "]^2";
		}
	}
	if (x == "cube"){
		XTitle = "[" + XTitle + "]^3";
	}
	if (x == "squareroot"){
		if (XTitle.endsWith(']^2')){
			XTitleLength = XTitle.length;
			XTitle = XTitle.slice(1, XTitleLength-3);
		}
		else{
			XTitle = "[" + XTitle + "]^0.5";
		}
	}
	if (x == "sine"){
		XTitle = "sin[" + XTitle + "]";
	}
	
	// Update the scales and graph title
	if (ScaleType == "Automatic"){
		FindMaximumValues();
		GraphingScales();
	}
}


// Mathmatical change to y data
function ychange(x){
	N = data[activedatasetnumber].ypoints.length;
	CValue = parseFloat($("#YC").val());
	for (i = 0; i < N; i++){
		datapointnumber = i + 1;
		pointy = "y" + datapointnumber + "table" + activedatasetnumber;
		temp = parseFloat(data[activedatasetnumber].ypoints[i]);
		if (temp != ""){
			if (x == "plus"){
				temptemp = temp + CValue;
			}
			if (x == "minus"){
				temptemp = temp - CValue;
			}
			if (x == "multiply"){
				temptemp = temp * CValue;
			}
			if (x == "divide"){
				if (CValue != 0){
					temptemp = temp/CValue;
				}
			}
			if (x == "inverse"){
				if (temp != 0){
					temptemp = 1/temp;
				}
			}
			if (x == "square"){
				if (temp != 0){
					temptemp = Math.pow(temp, 2.0);
				}
			}
			if (x == "cube"){
				if (temp != 0){
					temptemp = Math.pow(temp, 3.0);
				}
			}
			if (x == "squareroot"){
				if (temp != 0){
					temptemp = Math.pow(temp, 0.5);
				}
			}
			if (x == "degtorad"){
				if (temp != 0){
					temptemp = temp*Math.PI/180;
				}
			}
			if (x == "sine"){
				temptemp = Math.sin(temp);
			}
			
			if (Number.isInteger(temptemp)){
				temptemp = temptemp;
			}
			else{
				temptemp = (temptemp).toPrecision(4);
			}
			
			document.getElementById(pointy).value = temptemp;
			data[activedatasetnumber].ypoints[i] = temptemp;
		}	
	}
	if (x == "inverse"){
		if (YTitle.startsWith('1/[')){
			YTitleLength = YTitle.length;
			YTitle = YTitle.slice(3, YTitleLength-1);
		}
		else{
			YTitle = "1/[" + YTitle + "]";
		}
		
	}
	if (x == "square"){
		if (YTitle.endsWith(']^0.5')){
			YTitleLength = YTitle.length;
			YTitle = YTitle.slice(1, YTitleLength-5);
		}
		else{
			YTitle = "[" + YTitle + "]^2";
		}
	}
	if (x == "cube"){
		YTitle = "[" + YTitle + "]^3";
	}
	if (x == "squareroot"){
		if (YTitle.endsWith(']^2')){
			YTitleLength = YTitle.length;
			YTitle = YTitle.slice(1, YTitleLength-3);
		}
		else{
			YTitle = "[" + YTitle + "]^0.5";
		}
	}
	if (x == "sine"){
		YTitle = "sin[" + YTitle + "]";
	}
	
	if (ScaleType == "Automatic"){
		FindMaximumValues();
		GraphingScales();
	}
}

function FormatSavingDataLink(){
	linkstring = window.location.href.split("?")[0] + "?";
	
	
	$("#xaxistitle, #yaxistitle, #DataSection input").each(function(){
		inputname = $(this).prop("id");
		inputvalue = $(this).val();
		if (inputvalue){
			linkstring += inputname + "=" + inputvalue + "&";
		}
		
	});
	
		
	linkstring = linkstring.substring(0, linkstring.length - 1);
	
	$("#SaveLink").prop("href", linkstring);
}