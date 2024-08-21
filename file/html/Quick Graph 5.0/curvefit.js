// Opens and closes the curve fit window

// Sets the type of curve fit to use. 
function SetFit(x){
	if (graphinfo[activedatasetnumber].type == x){
		graphinfo[activedatasetnumber].active = 0;
		graphinfo[activedatasetnumber].type = "none";
		graphinfo[activedatasetnumber].equation = "\\[y = \\]";
		graphinfo[activedatasetnumber].fitkind = 'none';
		$("#EquationOnly").html(graphinfo[activedatasetnumber].equation);
		$('#SpotForEquation').html(graphinfo[activedatasetnumber].equation);
		MathJax.typeset();
		SetManualCurveFits();
		CenterEquation();
	}
	else{
		graphinfo[activedatasetnumber].type = x;
		if (x == "exponential"){
			DetermineExponentialConstants();
		}
		else if (x == "norelationship"){
			DetermineNoRelationshipConstants();
		}
		else if (x == "proportional"){
			DetermineProportionalConstants();
		}
		else{
			DetermineGraphConstants();
		}
		
	}
}

// This function will center the equation in the area provided for it 
function CenterEquation(){
	EquationWidth = parseFloat($("#EquationOnly").css("width"));
	KeyEquationBoxWidth = parseFloat($("#KeySectionEquation").css("width"));
	XPosOfEquation = KeyEquationBoxWidth/2 - EquationWidth/2;
	$("#EquationOnly").css("left", XPosOfEquation);
}

// Determining the equations for most graph types
function DetermineGraphConstants(){
// Linear Regression
	
	term1 = 0.0;
	term2 = 0.0;
	term3 = 0.0;
	term4 = 0.0;
	term5 = 0.0;
	
	NTerms = 0;
	N = data[activedatasetnumber].xpoints.length;
	
	for (i=0; i<N; i++){
		xi = data[activedatasetnumber].xpoints[i];
		yi = data[activedatasetnumber].ypoints[i];
		if (!(ignoredpoints[activedatasetnumber].hidepoints.includes(i)) && (xi || xi == 0) && (yi || yi == 0)){
			
			if (graphinfo[activedatasetnumber].type == "linear"){
				yi = yi;
			}
			if (graphinfo[activedatasetnumber].type == "inverse"){
				xi = 1/xi;
			}
			if (graphinfo[activedatasetnumber].type == "square"){
				xi = xi*xi;
			}
			if (graphinfo[activedatasetnumber].type == "cube"){
				xi = xi*xi*xi;
			}
			if (graphinfo[activedatasetnumber].type == "squareroot"){
				xi = Math.pow(xi,0.5);
			}
			if (graphinfo[activedatasetnumber].type == "inversesquareroot"){
				xi = 1/Math.pow(xi,0.5);
			}
			if (graphinfo[activedatasetnumber].type == "inversesquare"){
				xi = 1/Math.pow(xi,2.0);
			}
			if (graphinfo[activedatasetnumber].type == "exponential"){
				yi = Math.log(yi);
			}
			term1 = term1 + parseFloat(xi)*parseFloat(yi);
			term2 = term2 + parseFloat(xi); 
			term3 = term3 + parseFloat(yi);
			term4 = term4 + parseFloat(xi)*parseFloat(xi);
			term5 = term5 + parseFloat(yi)*parseFloat(yi);
			NTerms++;
		}	
	}
	
	slope = (NTerms*term1-term2*term3)/(NTerms*term4-term2*term2);
	tempcor = (NTerms*term4 - term2*term2)*(NTerms*term5-term3*term3);
	corevalue = Math.abs((NTerms*term1 - term2*term3)/(Math.pow(tempcor,0.5)));
	
	totalbvalue = 0;
	for (i=0; i<N; i++){
		if (!(ignoredpoints[activedatasetnumber].hidepoints.includes(i)) && (xi || xi == 0) && (yi || yi == 0)){
			xi = data[activedatasetnumber].xpoints[i];
			yi = data[activedatasetnumber].ypoints[i];
			bvalue = yi - slope*xi;
			totalbvalue=totalbvalue + bvalue;
		}
	}

	actualbvalue = totalbvalue/NTerms;
	
	//Stores values into object
	graphinfo[activedatasetnumber].graphconstant1 = slope;
	graphinfo[activedatasetnumber].graphconstant2 = actualbvalue;
	graphinfo[activedatasetnumber].graphconstant3 = corevalue;
	graphinfo[activedatasetnumber].fitkind = 'automatic';
	
	// Sets up the display of the equation for the different kinds of graphs
	
	if (Math.abs(slope) > 10000 || Math.abs(slope) < .01){
		displayslope = slope.toExponential(3);
	}
	else{
		displayslope = slope.toPrecision(4);
	}
	
	if ((Math.abs(actualbvalue) > 10000 || Math.abs(actualbvalue) < .01) && Math.abs(actualbvalue) != 0){
		displaybvalue = actualbvalue.toExponential(3);
	}
	else{
		displaybvalue = actualbvalue.toPrecision(4);
	}
		
	// Formats and Stores Equation
	FormatAndStoreEquation();
	
	// Sets window for Manual fits so it is ready if called
	SetManualCurveFits();
}

// Determining the equation for a proportional graph
function DetermineProportionalConstants(){
// Linear Regression
	
	term1 = 0.0;
	term2 = 0.0;
	term3 = 0.0;
	term4 = 0.0;
	term5 = 0.0;
	
	NTerms = 0;
	N = data[activedatasetnumber].xpoints.length;
	for (i=0; i<N; i++){
		xi = data[activedatasetnumber].xpoints[i];
		yi = data[activedatasetnumber].ypoints[i];
		if (!(ignoredpoints[activedatasetnumber].hidepoints.includes(i)) && (xi || xi == 0) && (yi || yi == 0)){
			
			
			term1 = term1 + parseFloat(xi)*parseFloat(yi);
			term2 = term2 + parseFloat(xi); 
			term3 = term3 + parseFloat(yi);
			term4 = term4 + parseFloat(xi)*parseFloat(xi);
			term5 = term5 + parseFloat(yi)*parseFloat(yi);
			NTerms++;
		}	
	}
	
	slope = term1/term4;
	tempcor = (NTerms*term4 - term2*term2)*(NTerms*term5-term3*term3);
	corevalue = Math.abs((NTerms*term1 - term2*term3)/(Math.pow(tempcor,0.5)));
	
	//Stores values into object
	graphinfo[activedatasetnumber].graphconstant1 = slope;
	graphinfo[activedatasetnumber].graphconstant2 = 0;
	graphinfo[activedatasetnumber].graphconstant3 = corevalue;
	graphinfo[activedatasetnumber].fitkind = 'automatic';
	
	// Sets up the display of the equation for the different kinds of graphs
	
	if (Math.abs(slope) > 10000 || Math.abs(slope) < .01){
		displayslope = slope.toExponential(3);
	}
	else{
		displayslope = slope.toPrecision(4);
	}
	
	actualbvalue = 0;
	
	// Formats and Stores Equation
	FormatAndStoreEquation();
	
	// Sets window for Manual fits so it is ready if called
	SetManualCurveFits();
}

// Determining the equation for a proportional graph
function DetermineNoRelationshipConstants(){
// Linear Regression
	
	term3 = 0.0;
	
	NTerms = 0;
	N = data[activedatasetnumber].xpoints.length;
	for (i=0; i<N; i++){
		xi = data[activedatasetnumber].xpoints[i];
		yi = data[activedatasetnumber].ypoints[i];
		if (!(ignoredpoints[activedatasetnumber].hidepoints.includes(i)) && (xi || xi == 0) && (yi || yi == 0)){
			
			 
			term3 = term3 + parseFloat(yi);
			NTerms++;
		}	
	}
	
	averagevalue = term3/NTerms;
	
	//Stores values into object
	graphinfo[activedatasetnumber].graphconstant1 = averagevalue;
	graphinfo[activedatasetnumber].graphconstant2 = 0;
	graphinfo[activedatasetnumber].graphconstant3 = 0;
	graphinfo[activedatasetnumber].fitkind = 'automatic';
	
	// Sets up the display of the equation for the different kinds of graphs
	
	if (Math.abs(averagevalue) > 10000 || Math.abs(averagevalue) < .01){
		displayslope = averagevalue.toExponential(3);
	}
	else{
		displayslope = averagevalue.toPrecision(4);
	}
		
	// Formats and Stores Equation
	FormatAndStoreEquation();
	
	// Sets window for Manual fits so it is ready if called
	SetManualCurveFits();
}

// Determining the graph constants for exponential graphs
function DetermineExponentialConstants(){
// Linear Regression
	
	term1 = 0.0;
	term2 = 0.0;
	term3 = 0.0;
	term4 = 0.0;
	term5 = 0.0;
	
	NTerms = 0;
	N = data[activedatasetnumber].xpoints.length;
	for (i=0; i<N; i++){
		xi = data[activedatasetnumber].xpoints[i];
		yi = data[activedatasetnumber].ypoints[i];
		if (!(ignoredpoints[activedatasetnumber].hidepoints.includes(i)) && (xi || xi == 0) && (yi || yi == 0)){
			
			yi = Math.log(yi);
			term1 = term1 + parseFloat(xi)*parseFloat(yi);
			term2 = term2 + parseFloat(xi); 
			term3 = term3 + parseFloat(yi);
			term4 = term4 + parseFloat(xi)*parseFloat(xi);
			term5 = term5 + parseFloat(yi)*parseFloat(yi);
			NTerms++;
		}	
	}
	
	slope = (NTerms*term1-term2*term3)/(NTerms*term4-term2*term2);
	tempcor = (NTerms*term4 - term2*term2)*(NTerms*term5-term3*term3);
	corevalue = Math.abs((NTerms*term1 - term2*term3)/(Math.pow(tempcor,0.5)));
	
	totalbvalue = 0;
	for (i=0; i<N; i++){
		if (!(ignoredpoints[activedatasetnumber].hidepoints.includes(i)) && (xi || xi == 0) && (yi || yi == 0)){
			xi = data[activedatasetnumber].xpoints[i];
			yi = data[activedatasetnumber].ypoints[i];
			yi = Math.log(yi);
			bvalue = yi - slope*xi;
			totalbvalue=totalbvalue + bvalue;
		}
	}

	actualbvalue = Math.exp(totalbvalue/NTerms);

	//Stores values into object
	graphinfo[activedatasetnumber].graphconstant1 = slope;
	graphinfo[activedatasetnumber].graphconstant2 = actualbvalue;
	graphinfo[activedatasetnumber].graphconstant3 = corevalue;
	graphinfo[activedatasetnumber].fitkind = 'automatic';
	
	if (Math.abs(slope) > 10000 || Math.abs(slope) < .01){
		displayslope = slope.toExponential(3);
	}
	else{
		displayslope = slope.toPrecision(4);
	}
	
	if ((Math.abs(actualbvalue) > 10000 || Math.abs(actualbvalue) < .01) && Math.abs(actualbvalue) != 0){
		displaybvalue = actualbvalue.toExponential(3);
	}
	else{
		displaybvalue = actualbvalue.toPrecision(4);
	}
	
	// Formats and Stores Equation
	FormatAndStoreEquation();
	
	// Sets window for Manual fits so it is ready if called
	SetManualCurveFits();
		
		
}

function FormatAndStoreEquation(){
	if (graphinfo[activedatasetnumber].type == "proportional"){	 
			
		graphinfo[activedatasetnumber].equation = "\\[y = (" + displayslope + ")*x\\]";
		
	}
	
	if (graphinfo[activedatasetnumber].type == "linear"){	 
			
		graphinfo[activedatasetnumber].equation = "\\[y = (" + displayslope + ")*x + (" + displaybvalue + ")\\]";
		
	}
	
	if (graphinfo[activedatasetnumber].type == "inverse"){ 
		
		graphinfo[activedatasetnumber].equation = "\\[y = \\frac{(" + displayslope + ")}{x}\\]";
		
	}
	
	if (graphinfo[activedatasetnumber].type == "square"){
		
		graphinfo[activedatasetnumber].equation = "\\[y = (" + displayslope + ")x^2\\]";
		
	}
	if (graphinfo[activedatasetnumber].type == "cube"){
		
		graphinfo[activedatasetnumber].equation = "\\[y = (" + displayslope + ")x^3\\]";
		
	}
	
	if (graphinfo[activedatasetnumber].type == "squareroot"){
		
		graphinfo[activedatasetnumber].equation = "\\[y = (" + displayslope + ")\\sqrt{x}\\]";
		
	}
	
	if (graphinfo[activedatasetnumber].type == "inversesquareroot"){
		
		graphinfo[activedatasetnumber].equation = "\\[y = \\frac{(" + displayslope + ")}{\\sqrt{x}}\\]";
		
	}
	
	if (graphinfo[activedatasetnumber].type == "inversesquare"){
		
		graphinfo[activedatasetnumber].equation = "\\[y = \\frac{(" + displayslope + ")}{x^2}\\]";
		
	}
	
	if (graphinfo[activedatasetnumber].type == "exponential"){
		
		graphinfo[activedatasetnumber].equation = "\\[y = (" + displaybvalue + ")e^{(" + displayslope + "*x)}\\]";
		
	}
	
	if (graphinfo[activedatasetnumber].type == "norelationship"){	 
			
		graphinfo[activedatasetnumber].equation = "\\[y = (" + displayslope + ")\\]";
		
	}
	
	graphinfo[activedatasetnumber].active = 1;
		
	$("#EquationOnly").html(graphinfo[activedatasetnumber].equation);
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
}

function SetManualCurveFits(){
	CurveFitType = graphinfo[activedatasetnumber].type;
	if (GraphTypeNames[CurveFitType].constants == 2){
		document.getElementById("GraphConstant1").value = graphinfo[activedatasetnumber].graphconstant1;
		document.getElementById("GraphConstant2").value = graphinfo[activedatasetnumber].graphconstant2;
		$('#GraphConstant1').show();
		$('#GraphConstant2').show();
		$("#GraphConstant1").css('left', 75);
		$("#GraphConstant2").css('left', 225);
	}
	else if (GraphTypeNames[CurveFitType].constants == 1){
		document.getElementById("GraphConstant1").value = graphinfo[activedatasetnumber].graphconstant1;
		$('#GraphConstant1').show();
		$('#GraphConstant2').hide();
		$("#GraphConstant1").css('left', 150);
		
	}
	else{
		$('#GraphConstant1').hide();
		$('#GraphConstant2').hide();
	}
	
	$('#ManualEquationOverride span').html('Your Graph Type is: ' + GraphTypeNames[CurveFitType].name + '<p>To adjust your curve fit, change the value of any graph constants below.</p>');
}

function UpdateEquation(x){
	if (x == 1){
		slope = parseFloat($('#GraphConstant1').val());
		if (Math.abs(slope) > 10000 || Math.abs(slope) < .01){
			displayslope = slope.toExponential(3);
		}
		else{
			displayslope = slope.toPrecision(4);
		}
	}
	else{
		actualbvalue = parseFloat($('#GraphConstant2').val());
		if (Math.abs(actualbvalue) > 10000 || Math.abs(actualbvalue) < .01){
			displaybvalue = actualbvalue.toExponential(3);
		}
		else{
			displaybvalue = actualbvalue.toPrecision(4);
		}
	}
	
	//Stores values into object
	graphinfo[activedatasetnumber].graphconstant1 = slope;
	graphinfo[activedatasetnumber].graphconstant2 = actualbvalue;
	graphinfo[activedatasetnumber].graphconstant3 = 0;
	graphinfo[activedatasetnumber].fitkind = 'manual';
	
	// Formats and Stores Equation
	FormatAndStoreEquation();
	
}