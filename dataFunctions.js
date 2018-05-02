// /---------------------------------------
// Utility Functions
//---------------------------------------
//adds a space between words
function space(x) {
    return x.replace(/([a-z])([A-Z])/g, "$1 $2");
}
// -----------------------------------------------------------------------------
// CATIGORIZING PROGRAMS
// The below functions are used to put the program objects into arrays needed
// each of these functions is called by another function to produce data
// -----------------------------------------------------------------------------
// ---------------------------------------------------------------
//  Program Type functions each return arrays of objects
// ---------------------------------------------------------------
function mastersPrograms(){
	var mastersArray =[]
	for (var i in programs){
			if (programs[i].degreeType.masters === true) {
				mastersArray.push(programs[i]);
			}
	}
	return mastersArray;

}
function dualPrograms(){
	var dualArray =[]
	for (var i in programs){
			if (programs[i].degreeType.dual_degree === true) {
				dualArray.push(programs[i]);
			}
	}
	return dualArray;
}
function doctoralPrograms(){
	var doctoralArray =[]
	for (var i in programs){
			if (programs[i].degreeType.doctoral === true) {
				doctoralArray.push(programs[i]);
			}
	}
	return doctoralArray;
}
function certificatePrograms(){
	var certificatesArray =[]
	for (var i in programs){
			if (programs[i].degreeType.certificate === true) {
				certificatesArray.push(programs[i]);
			}
	}
	return certificatesArray;
}
// ---------------------------------------------------------------
//  Program format functions each return arrays of objects
// ---------------------------------------------------------------
function onlinePrograms(){
	var onlineArray =[]
	for (var i in programs){
			if (programs[i].formats.includes("Online")) {
				onlineArray.push(programs[i]);
			}
	}
	return onlineArray;
}
function hybridPrograms(){
	var hybridArray =[]
	for (var i in programs){
			if (programs[i].formats.includes("Hybrid")) {
				hybridArray.push(programs[i]);
			}
	}
	return hybridArray;
}
function acceleratedPrograms(){
	var acceleratedArray =[]
	for (var i in programs){
			if (programs[i].formats.includes("Accelerated")) {
				acceleratedArray.push(programs[i]);
			}
	}
	return acceleratedArray;
}
function campusPrograms(){
	var campusArray =[]
	for (var i in programs){
			if (programs[i].formats.includes("On-campus")) {
				campusArray.push(programs[i]);
			}
	}
	return campusArray;
}
// ---------------------------------------------------------------
//  Bucket format functions each return arrays of objects
// ---------------------------------------------------------------
function businessPrograms(){
	var businessArray =[]
	for (var i in programs){
			if (programs[i].buckets.includes("Business")) {
				businessArray.push(programs[i]);
			}
	}
	return businessArray;
}
function healthcarePrograms(){
	var healthcareArray =[]
	for (var i in programs){
			if (programs[i].buckets.includes("Healthcare")) {
				healthcareArray.push(programs[i]);
				
			}
	}
	return healthcareArray;
}
function leadershipPrograms(){
	var leadershipArray =[]
	for (var i in programs){
			if (programs[i].buckets.includes("Leadership")) {
				leadershipArray.push(programs[i]);
			}
	}
	return leadershipArray;
}
// -----------------------------------------------------------------------------
// FORMAT DEGREE OBJECT
// used to format the degree object into html code for each tab area
//
// -----------------------------------------------------------------------------
// -----------------------------
//  
// -----------------------------
function showTabsUser(tabSelection){
		//TODO verify this is the order of tabs for each option
	if (tabSelection == 'degree'){
		var mastersCode = codeTab(mastersPrograms());
		var dualCode = codeTab(dualPrograms());
		var doctoralCode = codeTab(doctoralPrograms());
		var certificateCode = codeTab(certificatePrograms());
		showCode(mastersCode, "tabOneResults");
		showCode(dualCode, "tabTwoResults");
		showCode(doctoralCode, "tabThreeResults");
		showCode(certificateCode, "tabFourResults");
	}

	if (tabSelection == 'format'){
		var onlineCode = codeTab(onlinePrograms());
		var hybridCode = codeTab(hybridPrograms());
		var acceleratedCode = codeTab(acceleratedPrograms());
		var campusCode = codeTab(campusPrograms());
		showCode(onlineCode, "tabOneResults");
		showCode(hybridCode, "tabTwoResults");
		showCode(acceleratedCode, "tabThreeResults");
		showCode(campusCode, "tabFourResults");
		
	}
	if (tabSelection == 'bucket'){
		var businessCode = codeTab(businessPrograms());
		var healthcareCode = codeTab(healthcarePrograms());
		var leadershipCode = codeTab(leadershipPrograms());
		showCode(businessCode, "tabOneResults");
		showCode(healthcareCode, "tabTwoResults");
		showCode(leadershipCode, "tabThreeResults");
	}
	
} 


function codeTabFull(programArray){
	var programCode = [];
	for (var i = 0; i < programArray.length; i++){
		
		var formats = programArray[i].formats;
		var buckets = programArray[i].buckets;
		var dataCatigories = formats.concat(buckets);
	
		if (programArray[i].degreeType.masters === true){
			dataCatigories.push("Masters");
		}
		if (programArray[i].degreeType.doctoral === true){
			dataCatigories.push("Doctoral");
		}
		if (programArray[i].degreeType.certificate === true){
			dataCatigories.push("Certificate");
		}
		//TODO it's possible the data catigories cant have commas
		var dataCatigoriesStr = dataCatigories.slice(0).join(' ')
		
		var programStarts = programArray[i].programStarts;
		//TODO Capital Case the months
		if (programStarts.length <= 1){
			var programMonthStr = programStarts;
		}
		if (programStarts.length == 2){
			var programMonthStr = programStarts.slice(0, -1).join(', ')+' and '+programStarts.slice(-1);
			
		}
		if (programStarts.length > 2){
			var programMonthStr = programStarts.slice(0, -1).join(', ')+', and '+programStarts.slice(-1);
			
		}
	var program = "<div class='program' data-category='" + dataCatigoriesStr +
	"'> <h3><a href= ' " +programArray[i].programLink+
	"'>" +programArray[i].name+
	"</a> </h3><p><strong>" +programArray[i].creditHours+
	"|" +formats+
	"</strong><br>" +programArray[i].description+
	"<br> <em class='start-months'> Starts in " +programMonthStr+
	"</em> </p>	</div>";
	programCode.push(program);
	}
	var programCodeStr = programCode.slice(0).join(' ');
	return programCodeStr;
}
function codeTabNoDesc(programArray){
	var programCode = [];
	for (var i = 0; i < programArray.length; i++){
		
		var formats = programArray[i].formats;
		var buckets = programArray[i].buckets;
		var dataCatigories = formats.concat(buckets);
	
		if (programArray[i].degreeType.masters === true){
			dataCatigories.push("Masters");
		}
		if (programArray[i].degreeType.doctoral === true){
			dataCatigories.push("Doctoral");
		}
		if (programArray[i].degreeType.certificate === true){
			dataCatigories.push("Certificate");
		}
		//TODO it's possible the data catigories cant have commas
		var dataCatigoriesStr = dataCatigories.slice(0).join(' ')
		
		var programStarts = programArray[i].programStarts;
		//TODO Capital Case the months
		if (programStarts.length <= 1){
			var programMonthStr = programStarts;
		}
		if (programStarts.length == 2){
			var programMonthStr = programStarts.slice(0, -1).join(', ')+' and '+programStarts.slice(-1);
			
		}
		if (programStarts.length > 2){
			var programMonthStr = programStarts.slice(0, -1).join(', ')+', and '+programStarts.slice(-1);
			
		}
	var program = "<div class='program' data-category='" + dataCatigoriesStr +
	"'> <h3><a href= ' " +programArray[i].programLink+
	"'>" +programArray[i].name+
	"</a> </h3><p><strong>" +programArray[i].creditHours+
	"|" +formats+
	"</strong><br> <span class='start-months'> Starts in " +programMonthStr+
	"</span> </p> </div>";
	programCode.push(program);
	}
	var programCodeStr = programCode.slice(0).join(' ');
	return programCodeStr;
}

// -----------------------------------------------------------------------------
// HANDINGLING THE FILTER
// below functions are used to create the filter HTML for the user
// -----------------------------------------------------------------------------
function showFilterUser(filterSelection){
	var filterCode = createFilter(filterSelection);
	showCode(filterCode, "tabOneResults");
	showCode(filterCode, "tabTwoResults");
	showCode(filterCode, "tabThreeResults");
	showCode(filterCode, "tabFourResults");
}
function createFilter(filterSelection){
	if (filterSelection == 'degree'){
		return codeFilter(['Masters', 'Doctoral', 'Certificate']);
	}
	if (filterSelection == 'bucket'){
		return codeFilter(['Leadership','Healthcare','Business']);
	}
	if (filterSelection == 'format'){
		return codeFilter(['Online', 'On-Campus', 'Accelerated','Hybrid']);
	}	
}
function codeFilter(filterArray){
	var filterCode = "<div> <form> <p style='display:inline;'><b>Filter:</b> </p> <input id='" + filterArray[0] + 
	"' name='filter-checkbox' type='checkbox' value=' " + filterArray[0] +
	"'>" + filterArray[0] + 
	" <input id=' " + filterArray[1] + 
	"' name='filter-checkbox' type='checkbox' value=' " + filterArray[1]+
	"'>" + filterArray[1] + 
	" <input id=' " + filterArray[2] + 
	"' name='filter-checkbox' type='checkbox' value=" + filterArray[2] + 
	"'>" + filterArray[2] + 
	" <input id=' " + filterArray[3] + 
	"' name='filter-checkbox' type='checkbox' value=" + filterArray[3] + 
	"'>" + filterArray[3] + 
	"</form> </div>";
	return filterCode
}


// -----------------------------------------------------------------------------
// NOT SURE
// 
//
// -----------------------------------------------------------------------------
// -----------------------------
//  Not sure
// -----------------------------
// 

// code that takes the selection from the first radio buttons and removing it from the checkboxes on the second area
function knockOutSelection(chosen){
	
}

function showFilterJavascriptUser(){
	var filterJavascript = addFilterJavascript();
	showCode( filterJavascript, "tabOneResults");
	showCode( filterJavascript, "tabTwoResults");
	showCode( filterJavascript, "tabThreeResults");
	showCode( filterJavascript, "tabFourResults");
}
function addFilterJavascript(){
	
return "<script type='text/javascript'>var $filterCheckboxes = $('input[type='checkbox']'); $filterCheckboxes.on('change', function() { var selectedFilters = {}; $filterCheckboxes.filter(':checked').each(function() {if (!selectedFilters.hasOwnProperty(this.name)) {selectedFilters[this.name] = [];}selectedFilters[this.name].push(this.value); }); var $filteredResults = $('.program');$.each(selectedFilters, function(name, filterValues) {$filteredResults = $filteredResults.filter(function() { var matched = false,currentFilterValues = $(this).data('category').split(' '); $.each(currentFilterValues, function(_, currentFilterValue) {if ($.inArray(currentFilterValue, filterValues) != -1) {matched = true; return false;}});return matched;});});$('.program').hide().filter($filteredResults).show();});var array = document.getElementsByClassName('tab-acc-content')[0].parentNode.childNodes[1].childNodes[1].childNodes;for (var i of array) {i.addEventListener('click', handleSelectTab);}function handleSelectTab(){if (($('#mastersFilter input:checkbox:checked').length > 0) || ($('#dualFilter input:checkbox:checked').length > 0)|| ($(.#certificatesFilter input:checkbox:checked').length > 0)){unCheckCheckboxes('mastersFilter', false);unCheckCheckboxes('dualFilter', false);unCheckCheckboxes('certificatesFilter', false);}};function unCheckCheckboxes(formname, checkStatus){var checkboxes = new Array();checkboxes = document[formname].getElementsByTagName('input');for (var i=0; i<checkboxes.length; i++)  { if (checkboxes[i].type == 'checkbox')   { checkboxes[i].checked = checkStatus;}}};</script>"
}
