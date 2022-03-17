if ('pictureInPictureEnabled' in document) {
    pipButton.classList.remove('hidden')
    pipButton.disabled = false;

    pipButton.addEventListener('click', () => {
        video.requestPictureInPicture();
    });
}
// The Screen Capture API is relatively simple to use. Its sole method is MediaDevices.getDisplayMedia(), whose job is to ask the user to select a screen or portion of a screen to capture in the form of a MediaStream.

// To start capturing video from the screen, you call getDisplayMedia() on the instance of Media navigator.mediaDevices:

captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
