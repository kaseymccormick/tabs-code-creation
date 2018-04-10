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
	if (tabSelection == 'degree'){
		codeTab(mastersPrograms());
		codeTab(dualPrograms());
		codeTab(doctoralPrograms());
		codeTab(certificatePrograms());
	}
	if (tabSelection == 'format'){
		codeTab(onlinePrograms());
		codeTab(hybridPrograms());
		codeTab(acceleratedPrograms());
		codeTab(campusPrograms());
	}
	if (tabSelection == 'bucket'){
		codeTab(businessPrograms());
		codeTab(healthcarePrograms());
		codeTab(leadershipPrograms());
	}
	
} 


function codeTabs(programArray){
	var programCode = ""
	// for every object in the program array do
	// 	something with the object.keys
	// 	then push/put that something into program code
	//
	//
	//
	// "formats":["Hybrid","Accelerated"],
	// "buckets":["Healthcare"],
	// "degreeType": {
	// 	"masters": true,
	// 	"dual_degree": false,
	// 	"doctorate": false,
	// 	"certificate": false,
	// },
		//data catigory is a list comprised of all the entries for programs[0].formats programs[0].buckets programs[0].degreeType.(masters dual_deggree doctorate certificate "whatever is true")
	// "<div class='program' data-category='" + filterWord anotherFilterWord +
	// "'> <h3><a href= ' " +program link+
	// "'>" + programName +
	// "</a> </h3><p><strong>" +creditHours+
	// "|" + formatTYpes [online, hybrid, accelerated] +
	// "</strong><br>" +programDescription+
	// "<br> <em> Starts in " +programStarts month month and month+
	// "</em> </p>	</div>"
	
	return programCode
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
// listen for the submit, or selection of the radio buttons?

//when the tabs are selected this is run to grab and format the program data
function grabProgramData(tabSelection){
	//go to json?
	//uses all programs
	if (tabSelection == 'degree'){
		//start the data grab aka initiate the 4 degree functions
		mastersPrograms();
		dualPrograms();
		doctoralPrograms();
		certificatePrograms();
		
		// then -er AND put those arrays through formatting
		// but formatting doesn't spit out all in one place. Maybe arrays again? arrays of strings instead of objects...
		
	}

	if (tabSelection == 'format'){
		//start the data grab aka initiate the 4 format functions
		onlinePrograms();
		hybridPrograms();
		campusPrograms();
		acceleratedPrograms();
		
		// then -er AND put those arrays through formatting
		// but formatting doesn't spit out all in one place. Maybe arrays again? arrays of strings instead of objects...
	}
	else if (tabSelection =='bucket'){
		//start the data grab aka initiate the 3 existing bucket functions
		businessPrograms();
		healthcarePrograms();
		leadershipPrograms();
		// then -er AND put those arrays through formatting
		// but formatting doesn't spit out all in one place. Maybe arrays again? arrays of strings instead of objects...
	}
	
	else {
		alert("no tab format selected")
		console.log("no tab format selected")
	}
		
}
// function addFilterJavascript(){
// 	````
// // <!--javscript code for filter -->
// 			//make the filter selection select out the programs
// 		var $filterCheckboxes = $('input[type="checkbox"]');
//
// 		$filterCheckboxes.on('change', function() {
//
// 		  var selectedFilters = {};
//
// 		  $filterCheckboxes.filter(':checked').each(function() {
//
// 			if (!selectedFilters.hasOwnProperty(this.name)) {
// 			  selectedFilters[this.name] = [];
// 			}
//
// 			selectedFilters[this.name].push(this.value);
//
// 		  });
//
// 		  // create a collection containing all of the filterable elements
// 		  var $filteredResults = $('.program');
//
// 		  // loop over the selected filter name -> (array) values pairs
// 		  $.each(selectedFilters, function(name, filterValues) {
//
// 			// filter each .program element
// 			$filteredResults = $filteredResults.filter(function() {
//
// 			  var matched = false,
// 				currentFilterValues = $(this).data('category').split(' ');
//
// 			  // loop over each category value in the current .programs's data-category
// 			  $.each(currentFilterValues, function(_, currentFilterValue) {
//
// 				// if the current category exists in the selected filters array
// 				// set matched to true, and stop looping. as we're ORing in each
// 				// set of filters, we only need to match once
//
// 				if ($.inArray(currentFilterValue, filterValues) != -1) {
// 				  matched = true;
// 				  return false;
// 				}
// 			  });
//
// 			  // if matched is true the current .program element is returned
// 			  return matched;
//
// 			});
// 		  });
//
// 		  $('.program').hide().filter($filteredResults).show();
//
// 		});
// 	// add event listener to tabs, when switch a tab clear out the checkboxes
// 		var array = document.getElementsByClassName("tab-acc-content")[0].parentNode.childNodes[1].childNodes[1].childNodes;
//
// 		for (var i of array) {
// 			i.addEventListener("click", handleSelectTab);
// 		}
//
// 		function handleSelectTab(){
//
// 			// check if checkboxes are checked
// 			if (($("#mastersFilter input:checkbox:checked").length > 0) || ($("#dualFilter input:checkbox:checked").length > 0)|| ($("#certificatesFilter input:checkbox:checked").length > 0))
// 			{
// 			// and if so uncheck all checkboxes in forms with name dualFilter, certificatesFilter and mastersFilter
// 			unCheckCheckboxes('mastersFilter', false);
// 			unCheckCheckboxes('dualFilter', false);
// 			unCheckCheckboxes('certificatesFilter', false);
// 			}
// 		};
//
// 		function unCheckCheckboxes(formname, checkStatus){
// 		  var checkboxes = new Array();
// 		  checkboxes = document[formname].getElementsByTagName('input');
//
// 		  for (var i=0; i<checkboxes.length; i++)  {
// 		    if (checkboxes[i].type == 'checkbox')   {
// 		      checkboxes[i].checked = checkStatus;
// 		    }
// 		  }
// 		};
//
//
// ````
// }
