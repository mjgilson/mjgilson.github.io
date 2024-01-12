var touchIgnored = false;
var touchElement = "";

window.addEventListener('touchstart', onTouchStart, false);
window.addEventListener('touchend', onTouchEnd, false);
window.addEventListener('touchcancel', ignoreTouch, false);
document.addEventListener('contextmenu', event => event.preventDefault());

function ignoreTouch(evt) {
    evt.preventDefault();
    touchIgnored = true;
    touchElement = "";
}

function onTouchStart(evt) {
    if (TouchList.length > 1) {
        ignoreTouch(evt);
    }
    else {
        evt.preventDefault();
        touchIgnored = false;
        touchElement = evt.target.id;
    }
}

function onTouchEnd(evt) {
    if (touchIgnored == true || touchElement == "" || touchElement != evt.target.id) {
        ignoreTouch(evt);
    }
    else {
        evt.preventDefault();
        var elementType = evt.target.id;
        var elementNumber = 0;
        if (elementType.substr(0, 5) == "scene") {
            elementNumber = parseInt(elementType.substr(5, 2));
            elementType = "scene";
        }
        switch (elementType) {
            case "scene":
                if (elementNumber < 1 || elementNumber > scenes.length) {
                    ignoreTouch(evt);
                    break;
                } else {
                    displayModal(elementNumber);
                    break;
                }
            case "modalBodyImage":
                displayImageModal();
                break;
            case "modalPrevious":
            case "modalPreviousIcon":
                previousScene();
                break;
            case "modalNext":
            case "modalNextIcon":
                nextScene();
                break;
            case "modalClose":
                closeMainModal();
                break;
            case "mainModal":
                closeMainModal();
                break;
            case "imageModal":
                closeImageModal();
                break;
            case "imageModalImage":
                closeImageModal();
                break;
            case "modalAudioIcon":
                playAudio();
                break;
            default:
                ignoreTouch(evt);
        }
    }
}