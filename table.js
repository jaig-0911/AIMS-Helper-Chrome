

var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var slots = ["09:00-09:55", "10:00-10:55", "11:00-11:55", "12:00-12:55", "14:30-15:55", "16:00-17:25"] // Add 5:30-7 later

var parser = new DOMParser();
var DOM = parser.parseFromString(localStorage.getItem("DOM"), "text/html");
var data_deg_dtl = DOM.getElementsByClassName("studentDegDtls")[0].getAttribute("data-deg-dtl");
var studentDegreeString = "stdntDeg_x_"+data_deg_dtl+"_1"; // Course Div String (x represents the serial number of the course)
var allSelectsInDom = DOM.getElementsByTagName("select");

var currentID = 1 ;

while (true)
{
	var courseCodeID = "cCd_"+currentID+"_"+data_deg_dtl+"_1";
	var timetableRowsClass = "timeTabTr_"+currentID+"_"+data_deg_dtl+"_1";
	var currentTimetableRows = DOM.getElementsByClassName(timetableRowsClass);
	var currentCourseCodeInput = DOM.getElementById(courseCodeID);
	if (currentCourseCodeInput == null)
		break ;

	for (var i = 0 ; i < currentTimetableRows.length ; i++)
	{
		console.log(currentTimetableRows[i]);
	}
	currentID += 1 ;
}