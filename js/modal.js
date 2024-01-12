var mainModal = document.getElementById("mainModal");
var imageModal = document.getElementById("imageModal");

var currentScene = 1;

function resizeModalBodyText() {
  var mainModalContent = document.getElementById("modalContent");
  var mainModalHeader = document.getElementById("modalHeader");
  var mainModalBodyTextWrapper = document.getElementById("modalBodyTextWrapper");
  var mainModalBodyText = document.getElementById("modalBodyText");

  mainModalBodyText.style.fontSize = "20px";
  while (mainModalBodyTextWrapper.getBoundingClientRect().height > mainModalContent.getBoundingClientRect().height - mainModalHeader.getBoundingClientRect().height) {
    mainModalBodyText.style.fontSize = (parseInt(mainModalBodyText.style.fontSize) - 1) + "px";
  }
}

function updateModalContent(scene) {
  document.getElementById("modalHeaderText").innerHTML = "Scene " + (scene) + ": " + scenes[scene - 1].title;
  document.getElementById("modalBodyImage").src = "assets/images/scene-" + (scene) + ".jpg";
  document.getElementById("imageModalImage").src = "assets/images/scene-" + (scene) + ".jpg";
  document.getElementById("audioTrack").src = "assets/audio/scene-" + (scene) + ".mp3";
  document.getElementById("audioElement").load();
  document.getElementById("modalBodyText").innerHTML = scenes[scene - 1].text;
  resizeModalBodyText();
}

function displayModal(scene) {
  currentScene = scene;
  updateModalContent(currentScene);
  mainModal.style.display = "block";
  resizeModalBodyText();
}

function displayImageModal() {
  imageModal.style.display = "block";
}

function previousScene() {
  currentScene--;
  if (currentScene < 1) currentScene = scenes.length;
  updateModalContent(currentScene);
}

function nextScene() {
  currentScene++;
  if (currentScene > scenes.length) currentScene = 1;
  updateModalContent(currentScene);
}

function closeMainModal() {
  mainModal.style.display = "none";
  stopAudio();
}

function closeImageModal() {
  imageModal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == mainModal) {
    closeMainModal();
  } else if (event.target == imageModal) {
    closeImageModal();
  }
}