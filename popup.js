// popup.js
document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "fetchTranscript" }, function (response) {
            if (response && response.transcript) {
                document.getElementById("transcript").innerText = response.transcript;
                generateComment(response.transcript);
            } else {
                document.getElementById("transcript").innerText = "No transcript found.";
            }
        });
    });
});