// This function gets all the data from the URL bar when opening a saved file

function getUrlVars(){
	var vars = {};
	quickcount = 0;
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&#]*)/gi, function(m,key,value){
		vars[key] = value;
		quickcount++;
	});
	
	quickcount = quickcount/2;
	return vars;
	
}

//  This puts the data into the data tables.

function putUrlVars(){
	for (key in Object.keys(URLVars)){
		textboxvalue = decodeURI(URLVars[Object.keys(URLVars)[key]]);
		if (textboxvalue){
			$("#"+Object.keys(URLVars)[key]).val(textboxvalue);
		}
	}
	LoadDataIntoArrays();
	ChangeAxesTitles();
}

// This function gets the column names when you have imported data
function GetColumnNames(){
	lines = $('#PastedTextArea').val().split(/\n/);
	
	texts = [];
	
	words = [];
	
	ColumnTitles = [];

	HasTitles = "no";
	
	$('#xaxisselection').empty();
	$('#yaxisselection').empty();
	
	// only push this line if it contains a non whitespace character.
	if (/\S/.test(lines[0])) {
		texts.push($.trim(lines[0]));
		ColumnTitles = (texts[0]).split(/[\t,]/);
		NumberOfColumns = ColumnTitles.length;
		if(isNaN(ColumnTitles[0])){
			HasTitles = "yes";
		}
		else{
			for (i = 0; i < NumberOfColumns; i++){
				j = i + 1;
				ColumnTitles[i] = "Column " + j;
			}
		}
	}
	
	optionx = '<option>x-axis</option>';
	optiony = '<option>y-axis</option>';
	for (i=0;i<ColumnTitles.length;i++){
		optionx += '<option value="'+ i + '">' + ColumnTitles[i] + '</option>';
		optiony += '<option value="'+ i + '">' + ColumnTitles[i] + '</option>';
	}
	$('#xaxisselection').append(optionx);
	$('#yaxisselection').append(optiony);
	
}

function ImportX(){
	for (j = 0; j < 5; j++){
		for (i = 0; i <= NumberOfRowsOfData; i++){
			pointx = "#x" + i + "table" + j;
			$(pointx).val('');
		}
	}
	
	lines = $('#PastedTextArea').val().split(/\n/);
	
	if (HasTitles == "yes"){
		startat = 1;
		$("#xaxistitle").val(ColumnTitles[$("#xaxisselection").val()]);
	}
	else{
		startat = 0;
	}
	
	if (lines.length > NumberOfRowsOfData){
		StartAtRow = NumberOfRowsOfData + 1;
		for (k = 0; k < 5; k++){
			for (i = StartAtRow; i <=lines.length; i++){
				j = i - 1;
				insertstring = '<tr><td id = "point' + i + 'table' + k + '" class = "activepoint" onclick = "SwitchActivity(' + j + ')">' + i + '</td><td><input type="text" id = "x' + i + 'table' + k + '" class = "DataInputs"  onkeyup = "LoadDataIntoArrays(' + k + ',' + i + ',1)"/></td><td><input type="text" id = "y' + i + 'table' + k + '" class = "DataInputs"  onkeyup = "LoadDataIntoArrays(' + k + ',' + i + ',2)"/></td></td></tr>';
				
				$('#MainDataTable' + k + ' > tbody:last-child').append(insertstring);
			}
		}
		NumberOfRowsOfData = lines.length;
	}
	
	for (j = 0; j < 5; j++){
		for (i=startat; i < lines.length; i++) {
		// only push this line if it contains a non whitespace character.
			if (/\S/.test(lines[i])) {
			    texts.push($.trim(lines[i]));
			    words = (texts[i]).split(/[\t,]/);
				pointx = "#x" + i + "table" + j;
				$(pointx).val(words[$("#xaxisselection").val()]);
		  	}
		}
	}
	LoadDataIntoArrays();
	ChangeAxesTitles();
}


function ImportY(){
	for (i = 0; i <= NumberOfRowsOfData; i++){
		pointy = "#y" + i + "table" + activedatasetnumber;
		$(pointy).val('');
	}
	
	lines = $('#PastedTextArea').val().split(/\n/);
	
	if (HasTitles == "yes"){
		startat = 1;
		if (activedatasetnumber == 0)
		$("#yaxistitle").val(ColumnTitles[$("#yaxisselection").val()]);
	}
	else{
		startat = 0;
	}
	
	if (lines.length > NumberOfRowsOfData){
		StartAtRow = NumberOfRowsOfData + 1;
		for (k = 0; k < 5; k++){
			for (i = StartAtRow; i <=lines.length; i++){
				j = i - 1;
				insertstring = '<tr><td id = "point' + i + 'table' + k + '" class = "activepoint" onclick = "SwitchActivity(' + j + ')">' + i + '</td><td><input type="text" id = "x' + i + 'table' + k + '" class = "DataInputs"  onkeyup = "LoadDataIntoArrays(' + k + ',' + i + ',1)"/></td><td><input type="text" id = "y' + i + 'table' + k + '" class = "DataInputs"  onkeyup = "LoadDataIntoArrays(' + k + ',' + i + ',2)"/></td></td></tr>';
				
				$('#MainDataTable' + k + ' > tbody:last-child').append(insertstring);
			}
		}
		NumberOfRowsOfData = lines.length;
	}
	
	for (i=startat; i < lines.length; i++) {
	// only push this line if it contains a non whitespace character.
		if (/\S/.test(lines[i])) {
		    texts.push($.trim(lines[i]));
		    words = (texts[i]).split(/[\t,]/);
			pointy = "#y" + i + "table" + activedatasetnumber;
			$(pointy).val(words[$("#yaxisselection").val()]);
	  	}
	}
	LoadDataIntoArrays();
	ChangeAxesTitles();
}
