// This code is the JavaScript file for a Chrome extension's popup page.
// It adds an event listener to the DOMContentLoaded event, which is triggered when the popup page is loaded.
// Inside the event listener, it queries the active tab and sends a message to the content script to fetch the transcript.
// If a response with a transcript is received, it updates the "transcript" element's text and generates a comment based on the transcript.
// If no transcript is found, it displays a default message in the "transcript" element.

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

// This function generates a comment based on the provided transcript.
// It takes the first 10 words of the transcript and constructs a comment string.
// The comment is then displayed in the "comment" element.

function generateComment(transcript) {
    let comment = `Great explanation on \"${transcript.split(' ').slice(0, 10).join(' ')}...\"! What do you think?`;
    document.getElementById("comment").innerText = comment;
}