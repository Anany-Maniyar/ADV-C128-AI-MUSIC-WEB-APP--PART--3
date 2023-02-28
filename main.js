bones = "";
believer = "";
left_wrist_x = 0;
left_wrist_y = 0;
right_wrist_x = 0;
right_wrist_y = 0;

function preload() {
    bones = loadSound("bones.mp3");
    believer = loadSound("believer.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, model_loaded);
    poseNet.on("pose", gotPoses);
}

function model_loaded() {
    console.log("PoseNet model is loaded");
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        console.log("left_wrist_x = " + left_wrist_x + " left_wrist_y = " + left_wrist_y);

        right_wrist_x = results[0].pose.rightWrist.x;
        right_wrist_y = results[0].pose.rightWrist.y;
        console.log("right_wrist_x = " + right_wrist_x + " right_wrist_y = " + right_wrist_y);
    }
    
}

