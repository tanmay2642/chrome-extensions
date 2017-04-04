chrome.browserAction.onClicked.addListener(function(tab){
	//No tabs or host permissions needed
	console.log('Changing '+ tab.url + 'the font');
	chrome.tabs.executeScript({

		code:'document.body.style.font = "italic bold 20px arial,serif" '
	});

});