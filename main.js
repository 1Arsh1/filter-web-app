maskX = 0;
maskY = 0;
function preload() {
    mask = loadImage('Mask.png')
}
function setup() {
    canvas = createCanvas(300, 300); canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function take_snapshot() {
    save('myFilterImage.png');
}

function gotPoses(results) {
    if (results > 0) {
        console.log(results);
        maskX = results[0].pose.mask.x -15 ;
        maskY = results[0].pose.mask.y -15 ;
        console.log("nose y = " + maskY);
        console.log("nose x = " + maskX);
    }
}
function draw() {
    image(video, 0, 0, 300, 300);
    image(mask, maskX, maskY, 200, 200);
}
