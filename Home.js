
var isTheme = 0 //0 light, 1 dark

$('#BtnTheme').on('click', ()=>{
    
    if(isTheme == 0){
        $('#BtnTheme').css({"background-color": "black"})

        $('#BtnThemeCirc').css({
            "width": "15px", 
            "height": "15px",
            "background-color": "white"
        })

        $('#BtnThemeMoon').animate({"left": "7px"}, 150, "swing")

        $('#Section1').css({"background-color": "rgb(240, 144, 153)"})

        // Story

        $('#StoryBackgroundImg').attr('src', "asset/bg_story_jp.jpg")

        $('#StoryTitleImg').attr('src', "asset/title/story.svg")

        $('#StoryContentWritingContainer').css({"background-color": "black",
            "color": "white"
        })

        $('#StoryContentTitle').css({"border-bottom": "2px solid white"})

        $('#StoryContentButton').css({"border": "2px solid white"})

        //video

        $('#VideoContentDesc').css({    
            "border": "2px solid white",
            "color": "white",
            "background-color": "black"
        })

        //Character

        $('#CharacterBackgroundImg').attr('src', "asset/bg_comics_jp.webp")

        $('#CharacterTitleImg').attr('src', "asset/title/character.png")

        $('.CharacterItemContainer').css({
            "background-color": "black",
            "color": "white"
        })
        
        $('.CharacterBtn').css({
            "border": "2px solid white",
            "background-color": "black"
        })

        $('.CharacterContentBtn').css({
            "border": "2px solid white",
            "background-color": "black",
            "color": "white"
        })

        //Anime
        $('#AnimeBackgroundImg').attr('src', "asset/home//anime/background.jpg")

        $('#AnimeTitleImg').attr('src', "asset/title/Anime.png")

        $('.AnimeBtn').css({
            "border": "2px solid white",
            "background-color": "black"
        })

        //Manga
        $('#MangaBackgroundImg').attr('src', "asset/home/manga/background.jpg")

        $('#MangaBtn').css({
            "border": "2px solid white",
            "background-color": "black",
            "color": "white"
        })

        //Gallery
        $('#GalleryTitleImg').attr('src', "asset/title/gallery.png")



        isTheme = 1
    }
    else{
        $('#BtnTheme').css({"background-color": "white"})

        $('#BtnThemeCirc').css({
            "width": "7px", 
            "height": "7px",
            "background-color": "black"
        })

        $('#BtnThemeMoon').animate({"left": "30px"}, 0, "swing")

        $('#Section1').css({"background-color": "rgb(98, 197, 204)"})

        //Story

        $('#StoryBackgroundImg').attr('src', "asset/bg_story_jp-light.png")

        $('#StoryTitleImg').attr('src', "asset/title/story-light.png")

        $('#StoryContentWritingContainer').css({"background-color": "white",
            "color": "black"
        })

        $('#StoryContentTitle').css({"border-bottom": "2px solid black"})

        $('#StoryContentButton').css({"border": "2px solid black"})

        //Video

        $('#VideoContentDesc').css({    
            "border": "2px solid black",
            "color": "black",
            "background-color": "white"
        })

        //Character

        $('#CharacterBackgroundImg').attr('src', "asset/bg_comics_jp_light.png")

        $('#CharacterTitleImg').attr('src', "asset/title/character-light.png")

        $('.CharacterItemContainer').css({
            "background-color": "white",
            "color": "black"
        })
        
        $('.CharacterBtn').css({
            "border": "2px solid black",
            "background-color": "white"
        })

        $('.CharacterContentBtn').css({
            "border": "2px solid black",
            "background-color": "white",
            "color": "black"
        })

        //Anime
        $('#AnimeBackgroundImg').attr('src', "asset/home//anime/background-light.png")

        $('#AnimeTitleImg').attr('src', "asset/title/Anime-light.png")

        $('.AnimeBtn').css({
            "border": "2px solid black",
            "background-color": "white"
        })

        //Manga
        $('#MangaBackgroundImg').attr('src', "asset/home/manga/background-light.png")

        $('#MangaBtn').css({
            "border": "2px solid black",
            "background-color": "white",
            "color": "black"
        })

        //Gallery
        $('#GalleryTitleImg').attr('src', "asset/title/gallery-light.png")


        isTheme = 0

    }
    initVideoCanva()
})


//Story Hover
$('#StoryContentButton').on('mouseenter', ()=>{
    if(isTheme == 0){
        $('#StoryContentButton').css({"background-color": "black",
            "color": "white",
            "cursor": "pointer"
        })
    }else{
        $('#StoryContentButton').css({"background-color": "white",
            "color": "black",
            "cursor": "pointer"
        })
    }
})

$('#StoryContentButton').on('mouseleave', ()=>{
    $('#StoryContentButton').css({"background-color": "", "color": "", "cursor": ""
    })
})


//Redirect

//Character
$('.CharacterBtn').on('click', () =>{
    window.location.href = 'Character.html'
})

$('#CharacterContentBtn').on('click', () =>{
    window.location.href = 'Character.html'
})

//Anime
$('.AnimeBtn').on('click', () =>{
    window.location.href = 'Anime.html'
})

$('#AnimeContentBtn').on('click', () =>{
    window.location.href = 'Anime.html'
})

//Manga
$('#MangaBtn').on('click', ()=>{
    window.location.href = 'Manga.html'
})





//background1
var background1 = document.getElementById('Section1')
background1.width = window.innerWidth;
background1.height = window.innerHeight;

var context1 = background1.getContext('2d')

var mountainImg = new Image()
mountainImg.src = "asset/home/mountain.webp"
mountainImg.height = mountainImg.naturalHeight
mountainImg.width = background1.width
// mountainImg.onload = function(){
//     loadMountain()
// }

var cloudImg = new Image()
cloudImg.src = "asset/home/cloud.webp"
cloudImg_height = cloudImg.naturalHeight
cloudImg_width = cloudImg.naturalWidth

var cloudImg_px = -background1.width
var cloudImg_py = -background1.height + cloudImg_height 

var scaleMountainFactor = 1

function drawBackground1(){
    context1.clearRect(0, 0, background1.width, background1.height)

    //cloud animation
    context1.save()
    context1.beginPath()
    context1.translate(cloudImg_px , cloudImg_py)
    context1.drawImage(cloudImg, 0, -130 ,cloudImg_width, cloudImg_height)
    context1.restore()

    //Moutain
    context1.save()
    context1.beginPath()
    context1.translate(mountainImg.width/2, mountainImg.height/2)
    context1.scale(scaleMountainFactor, scaleMountainFactor)
    context1.drawImage(mountainImg, -mountainImg.width/2, -mountainImg.height/2, mountainImg.width, mountainImg.height)
    context1.restore()

    // scaleMountainFactor += window.scrollY/1000

    if(cloudImg_px < background1.width){
        cloudImg_px += 1
    }
    else{
        cloudImg_px = -background1.width
    }
    
    requestAnimationFrame(drawBackground1)
}

drawBackground1()
// loadMountain()

window.addEventListener('wheel', (event) =>{

    if (event.deltaY < 0) {
        scaleMountainFactor *= (1 + 0.01); // Zoom in
    } else if (event.deltaY > 0) {
        scaleMountainFactor /= (1 + 0.01); // Zoom out
    }

    if(scaleMountainFactor < 1){
        scaleMountainFactor = 1
    }

    if(scaleMountainFactor >2.5){
        scaleMountainFactor = 2.5
    }

    moveSection()

    console.log(scaleMountainFactor)
})



//Function Letter Animation
function moveSection(){
    if(scaleMountainFactor < 1.2){
        document.getElementById('Section1').scrollIntoView({ behavior: 'smooth' });
        LetterAnimation(0)
    }
    else if(scaleMountainFactor >= 1.2 && scaleMountainFactor < 1.4){
        document.getElementById('Section2').scrollIntoView({ behavior: 'smooth' });
        LetterAnimation(1)
    }
    else if(scaleMountainFactor >= 1.4 && scaleMountainFactor < 1.6){
        document.getElementById('Section3').scrollIntoView({ behavior: 'smooth' });
        LetterAnimation(2)
    }
    else if(scaleMountainFactor >= 1.6 && scaleMountainFactor < 1.8){
        document.getElementById('Section4').scrollIntoView({ behavior: 'smooth' });
        LetterAnimation(3)
    }
    else if(scaleMountainFactor >= 1.8 && scaleMountainFactor < 2){
        document.getElementById('Section5').scrollIntoView({ behavior: 'smooth' });
        LetterAnimation(4)
    }
    else if(scaleMountainFactor >= 2 && scaleMountainFactor < 2.2){
        document.getElementById('Section6').scrollIntoView({ behavior: 'smooth' });
        LetterAnimation(5)
    }
    else if(scaleMountainFactor >= 2.2 && scaleMountainFactor < 2.4){
        document.getElementById('Section7').scrollIntoView({ behavior: 'smooth' });
        LetterAnimation(6)
    }
}

function LetterAnimation(idx){
    for(let i = 1; i<=6; i++){
        if(idx == i){
            $('#Letter' + i).css({
                "visibility": "visible",
                "left": "0em"
            })
        }
        else{
            $('#Letter' + i).css({
                "visibility": "",
                "left": ""
            })
        }
    }
}

window.addEventListener('wheel', (event) => {
    event.preventDefault(); // Prevent touch scroll
}, { passive: false });



// Video Section
var videoCanva = document.getElementById('VideoCanvas')
videoCanva.width = window.innerWidth
videoCanva.height = window.innerHeight;

var videoCanvaCtx = videoCanva.getContext('2d')
initVideoCanva()

function initVideoCanva(){
    let c
    // let imgVideoName
    if(isTheme == 0){
        c = "white"
        // imgVideoName = "intermission_1_light.png"
    }else{
        c = "black"
        // imgVideoName = "intermission_1.webp"
    }

    // let imgVideo = new Image()
    // // img.src = "asset/home/intermission/" + imgName
    // // imgVideo.src = "asset/home/intermission/intermission_1_light.png"
    // imgVideo.src = "asset/uzumaki.png"
    // imgVideo_width = imgVideo.naturalWidth
    // imgVideo_height = imgVideo.naturalHeight

    // videoCanvaCtx.clearRect(0, 0, videoCanva.width.width, videoCanva.width.height)

    

    //Upper Rectangle
    videoCanvaCtx.save()
    videoCanvaCtx.beginPath()
    rect_width = 1800
    rect_height = 300
    videoCanvaCtx.translate(1200, 0)
    videoCanvaCtx.rotate(10 * (Math.PI / 180))
    videoCanvaCtx.fillStyle = c
    videoCanvaCtx.fillRect(-rect_width/2, -rect_height/2, rect_width, rect_height)
    videoCanvaCtx.restore()

    //Lower Rectangle
    videoCanvaCtx.save()
    videoCanvaCtx.beginPath()
    rect1_width = 1800
    rect1_height = 300
    videoCanvaCtx.translate(1500, 800)
    videoCanvaCtx.rotate(-10 * (Math.PI / 180))
    videoCanvaCtx.fillStyle = c
    videoCanvaCtx.fillRect(-rect1_width/2, -rect1_height/2, rect1_width, rect1_height)
    videoCanvaCtx.restore()

    // //Img
    // videoCanvaCtx.save()
    // videoCanvaCtx.beginPath()
    // videoCanvaCtx.translate(0, 0)
    // videoCanvaCtx.drawImage(imgVideo, 500, -500, 330, 150)
    // videoCanvaCtx.restore()

}



//Book Galery animation
function NextPage(idx){
    
    let paper = document.getElementById(`page${idx}`)
    paper.classList.add('flipped')

    switch(idx){
        case 1:
            paper.style.zIndex = 1
            break;
        case 2:
            paper.style.zIndex = 2
            break;
    }
}

function PrevPage(idx){
    let paper = document.getElementById(`page${idx}`)
    paper.classList.remove('flipped')

    switch(idx){
        case 1:
            paper.style.zIndex = 2
            break;
        case 2:
            paper.style.zIndex = 1
            break;
    }
}


//Game
var gameList = [
    //Naruto
    [ 
        {path: "naruto/idle/idle", variant: 5, width: 60, height: 80}, //Idle
        {path: "naruto/jumping_down/down", variant: 1, width: 80, height: 80}, //Down
        {path: "naruto/jumping_up/up", variant: 1, width: 60, height: 80}, //Up 
        {path: "naruto/running/running", variant: 5, width: 100, height: 80} //Running
    ],
    //Sasuke
    [ 
        {path: "sasuke/idle/idle", variant: 11, width: 60, height: 80}, //Idle
        {path: "sasuke/jumping_down/down", variant: 1, width: 80, height: 80}, //Down
        {path: "sasuke/jumping_up/jumping", variant: 1, width: 60, height: 80}, //Up 
        {path: "sasuke/running/running", variant: 5, width: 100, height: 80} //Running
    ]
]

var gameCanvas = document.getElementById('Game')
gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight * 0.2

var gameCtx = gameCanvas.getContext('2d')

var imgGame = new Image()
// imgGame.src = "asset/game_asset/naruto/idle/idle0.png"
var imgGame_height = 80
var imgGame_width 
var px = gameCanvas.width / 4
var py = gameCanvas.height - imgGame_height
var py_min = gameCanvas.height - imgGame_height
var py_max = gameCanvas.height - imgGame_height - 30
var dy = 0
var dx = 0
var dx_dirr = 1
var imgGame_action = 0 //0 idle, 1 up, 2 down, 3 running
var variant = 0

function gameAnimate(){
    gameCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height)

    gameCtx.save()
    gameCtx.beginPath()

    // gameCtx.translate(gameCanvas.width/2, gameCanvas.height/3)
    imgGame.src = "asset/game_asset/" + gameList[isTheme][imgGame_action].path + variant + ".png"
    imgGame_height = gameList[isTheme][imgGame_action].height
    imgGame_width = gameList[isTheme][imgGame_action].width

    gameCtx.translate(px, py)
    gameCtx.scale(dx_dirr, 1)
    gameCtx.drawImage(imgGame, 0, 0, gameList[isTheme][imgGame_action].width, gameList[isTheme][imgGame_action].height)

    gameCtx.restore()
    
    py += dy
    px += dx

    if(py == py_min){
        dy = 0
        if(dx == 0)
            imgGame_action = 0 
        else
            imgGame_action = 3
        
    }
    if(py < py_max && py != py_min){
        dy = 1
        imgGame_action = 1
        variant = 0
    }
    

    requestAnimationFrame(gameAnimate)
}

document.addEventListener('keydown', (event)=>{
    if(event.key == 'a' || event.key == 'A'){
        dx = -2
        dx_dirr = -1 
        setRunningAction()    
    }
    else if(event.key == 'd' || event.key == 'D'){
        dx = 2
        dx_dirr = 1
        setRunningAction()
    }
    else if((event.key == 'w' || event.key == 'W') && py >= py_min){
        dy = -1
        imgGame_action = 2
        variant = 0
    }

    if(px > gameCanvas.width + 30){
        px = 0 - 20
    }
    else if(px < 0- 30){
        px = gameCanvas.width + 20
    }
})

function setRunningAction(){
    if(py == py_min){
        imgGame_action = 3
        // variant = 0
    }
}

document.addEventListener('keyup', (event) =>{
    if(event.key == 'a' || event.key == 'A' || event.key == 'd' || event.key == 'D'){
        dx = 0
        
        if(py == py_min){
            imgGame_action = 0
            variant = 0
        }
        
    }
})

setInterval(() => {
    variant++
    if(variant > gameList[isTheme][imgGame_action].variant){
        variant = 0
    }
}, 200);

gameAnimate()