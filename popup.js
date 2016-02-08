
function pasteID() {
  chrome.tabs.executeScript({
    file: 'pasteID.js'
  }); 
}


function copyID() { 
  chrome.tabs.executeScript({
    file: 'copyID.js'
  });
}



document.getElementById('pasteID').addEventListener('click', pasteID);
document.getElementById('copyID').addEventListener('click', copyID);



