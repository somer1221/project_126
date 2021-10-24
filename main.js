song_1 = '';
song_2 = '';

function preload() {
    song_1 = loadSound("night running.mp3")
    song_2 = loadSound("dire dire docks but weird.mp3")
}

function setup() {
    canvas = createCanvas(500,600);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 600);
}

