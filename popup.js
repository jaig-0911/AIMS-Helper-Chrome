
var whichButton = 0 ; // 0 : no button has been clicked
chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "getSource") {
    if (whichButton == 1)
    {
    	localStorage.setItem("DOM", request.source);
    	chrome.runtime.sendMessage({
    		action: "LaunchTimetableFile",
    		source: "hello"
    	}, function(data) {
    		console.log(chrome.runtime.lastError.message);
    	} );
    }
    else if (whichButton == 2)
    {

    }
    else
    {
    	console.log("You shouldn't be here. ");
    }
  }
});

function onWindowLoad() {
	chrome.tabs.executeScript(null, {
    file: "getSource.js"
  }, function() {
    if (chrome.runtime.lastError) {
      console.log(chrome.runtime.lastError.message);
    }
  });
}
document.getElementsByClassName("generate-timetable-button")[0].onclick = function() {
	whichButton = 1 ; // timetable button click event
	onWindowLoad();
};
document.getElementsByClassName("calculate-gpa-button")[0].onclick = function() {
	whichButton = 2 ; // GPA Button click event
	onWindowLoad();
};