function updateTabs(tabs) {
	tabs.forEach(tab => {
		chrome.tabs.update(tab.id, { autoDiscardable: false });
	});
}

chrome.runtime.onInstalled.addListener(function() {
	chrome.tabs.query({ autoDiscardable: true }, function(tabs) {
		updateTabs(tabs);
	});
});

chrome.windows.onCreated.addListener(function() {
	chrome.tabs.query({ autoDiscardable: true }, function(tabs) {
		tabs.forEach(tab => {
			updateTabs(tabs);
		});
	});
});

chrome.tabs.onCreated.addListener(function(tab) {
	updateTabs([tab]);
});
