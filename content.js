
// content.js
function getTranscript() {
    let transcriptContainer = document.querySelector('.ytd-transcript-body-renderer');
    if (transcriptContainer) {
        let transcriptText = [...transcriptContainer.querySelectorAll('span')]
            .map(span => span.innerText)
            .join(' ');
        return transcriptText;
    }
    return null;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fetchTranscript") {
        sendResponse({ transcript: getTranscript() });
    }
});