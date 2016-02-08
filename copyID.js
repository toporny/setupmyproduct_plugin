selection = window.getSelection().toString();

chrome.runtime.sendMessage({action:'set', mailToParse: selection}, function(response) {
  console.log(response.farewell);
});