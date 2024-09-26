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

        // Info
        $('.InfoTitle').css({
            "color": "orange",
            "webkit-text-stroke": "7px #403e3b"
        })

        $('#SeeMoreBtn').css({
            "background-color":  "black",
            "color": "white",
            "border": "2px solid white"
        })


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

        // Info
        $('.InfoTitle').css({
            "color": "orangered",
            "webkit-text-stroke": "7px black"
        })

        $('#SeeMoreBtn').css({
            "background-color":  "white",
            "color": "black",
            "border": "2px solid black"
        })

        isTheme = 0

    }
    initVideoCanva()
})


var mangaList = [
    {
        name: "NARUTO",
        author: "MASASHI KISHIMOTO",
        rating: "4.0",
        background: "naruto-bg.jpg",
        genre: "Action, Adventure",
        year: "1999",
        sypnosis: "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the village's leader.",
    },
    {
        name: "NARUTO SHIPPUDEN",
        author: "MASASHI KISHIMOTO",
        rating: "4.5",
        background: "naruto-shippuden-bg.jpg",
        genre: "Action, Adventure",
        year: "1999",
        sypnosis: "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the village's leader.",
    },
    {
        name: "BORUTO",
        author: "UKYO KODACHI",
        rating: "3.5",
        background: "boruto-bg.avif",
        genre: "Action, Adventure",
        year: "1999",
        sypnosis: "Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the village's leader.",
    }

]


//Manga Cover
var coverDiff = 180
var coverMid = 150
var currManga = 0

function mangaSlide(idx){
    let currCover = document.getElementById('Cover' + idx)

    let style = getComputedStyle(currCover)
    let left = parseInt(style.left)
    currManga = idx
    initManga(idx)

    if(left > coverMid){
        let diff = (left - coverMid) / coverDiff
        moveCover(-coverDiff * diff)
    }

    else if(left == coverMid){
        moveCover(0)
    }

    else if(left < coverMid){
        let diff = (coverMid - left) / coverDiff
        moveCover(coverDiff * diff)
    }

}

function moveCover(x){
    for(let i=0; i<3; i++){

        if(i == currManga){
            $('#Cover'+i).css({
                "left": "+=" + x + "px",
                "transform": "scale(1.2)",
                "bottom": "30px"
            })
        }
        else{
            $('#Cover'+i).css({
                "left": "+=" + x + "px",
                "transform": "scale(1)",
                "bottom": "50px"
            })
        }
    } 
}

function initManga(idx){

    document.getElementById("Background").style.backgroundImage = `url(asset/manga/${mangaList[idx].background})`

    document.getElementById('InfoTitle').innerText = mangaList[idx].name

    document.getElementById('InfoAuthor').innerText = mangaList[idx].author

    document.getElementById('InfoRating').innerText = mangaList[idx].rating

    document.getElementById('ScrollAuthor').innerText = mangaList[idx].author

    document.getElementById('ScrollRating').innerText = mangaList[idx].rating

    document.getElementById('ScrollGenre').innerText = mangaList[idx].genre

    document.getElementById('ScrollYear').innerText = mangaList[idx].year

    document.getElementById('ScrollSummary').innerText = mangaList[idx].sypnosis
}

mangaSlide(currManga)

$('#PopUp').hide()

$('#ScrollBtn').on('click', ()=>{
    $('#PopUp').hide()
})

$('#SeeMoreBtn').on('click', ()=>{
    $('#PopUp').show()
})