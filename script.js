
// // The Screen Capture API is relatively simple to use. Its sole method is MediaDevices.getDisplayMedia(), whose job is to ask the user to select a screen or portion of a screen to capture in the form of a MediaStream.

// // To start capturing video from the screen, you call getDisplayMedia() on the instance of Media navigator.mediaDevices:

// captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);


const videoElement = document.getElementById('video');
const button = document.getElementById('button');
const buttonChoose = document.getElementById('button-choose');


// Prompt user to select media stream, pass to video element, then play

async function selectMediaStream() {
    try {
        // This variable is waiting for the user to state which screen they want to share. 'await' waits for this before declaring the variable.
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        // Then we pass mediaStream (chosen media) to the source for the video player (i.e. a file to play)
        videoElement.srcObject = mediaStream;
        // When the video has loaded its metadata it will call a function which will play the video!
        videoElement.onloadeddata = () => {
            videoElement.play();
        }
    }
    catch (error) {
        //Catch error here
        console.log('Ah beans, there\'s an error:', error);
    }
}

button.addEventListener('click', async () => {
    // The line below was just me tinkering to see how I could add an attribute from JS
    // document.getElementById("video").hidden = true;

    // Disable button
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On load

buttonChoose.addEventListener('click', () => {
    selectMediaStream();
});