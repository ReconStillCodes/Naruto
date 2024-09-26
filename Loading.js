var canvas = document.getElementById('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d')

// context.fillRect(50, 20, 100, 50);

var angle = 0
var loadingWidth = 50
var loadingWidthMax = canvas.width /2
var cloud1_px = -50
var cloud1_py = -50

var cloud2_px = 0
var cloud2_py = 0

var image = new Image()
image.src = "asset/uzumaki.png"

var cloud = new Image()
cloud.src = "asset/akatsuki_cloud.png"

function draw(){

    context.clearRect(0, 0, canvas.width, canvas.height)

    //Cloud1 Animation
    context.save()
    context.beginPath()
    context.translate(0, canvas.height / 4)
    context.drawImage(cloud, cloud1_px, cloud1_py, 200, 150)
    context.restore();

    //Cloud2 Animation
    context.save()
    context.beginPath()
    context.translate(canvas.width/0.9  , canvas.height/1.5)
    context.scale(-1, 1)
    context.drawImage(cloud, cloud2_px, cloud2_py, 200, 150)
    context.restore();

    //Rotating Load Screen
    context.save()
    context.beginPath()
    context.translate(canvas.width / 2, canvas.height / 3)
    context.rotate(angle * Math.PI / 180)
    context.drawImage(image, -165, -75, 330, 150)
    context.restore();
    
    //Loading bar max
    context.save()
    context.beginPath()
    context.translate(canvas.width / 4  , canvas.height / 1.7)
    // context.rotate(angle * Math.PI / 180)
    context.fillStyle = 'grey';
    context.fillRect(0, 0, loadingWidthMax, 20);
    context.restore();


    //Loading Bar
    context.save()
    context.beginPath()
    context.translate(canvas.width / 4  , canvas.height / 1.7)
    context.fillStyle = 'white';
    context.fillRect(0, 0, loadingWidth, 20);
    context.restore();


    loadingWidth = loadingWidth + 1
    angle += 1
    cloud1_px +=2
    cloud1_py -= 0.1
    cloud2_px +=2
    cloud2_py += 0.2

    if(loadingWidth < loadingWidthMax){
        requestAnimationFrame(draw)
    }
    else{
        window.location.href = 'Home.html'
    }
    
}

draw()

function drawRect(x, y, width, height, radius){
}