var animeList = [
    {
        cover: "naruto.jpg",
        sypnosis: `"Naruto" is a Japanese anime series based on Masashi Kishimoto's manga of the same name. It follows the journey of Naruto Uzumaki, a young ninja with a dream of becoming the strongest ninja and the leader of his village, known as the Hokage. Naruto is an orphan, and he harbors the powerful Nine-Tails Fox, a fearsome creature sealed within him at birth`,
        author: "MASASHI KISHIMOTO",
        director: "HAYATO DATE",
        studio: "PIERROT",
        gallery: [
            "naruto/naruto.jpg", 
            "naruto/naruto-2.jpg", 
            "naruto/naruto-3.jpg", 
            "naruto/naruto-4.jpg"
        ]
    },

    {
        cover: "naruto-shippuden.jpg",
        sypnosis: `"Naruto Shippuden" continues the story of Naruto Uzumaki, now older and facing even greater challenges as he strives to protect his village and achieve his dream of becoming Hokage.`,
        author: "MASASHI KISHIMOTO",
        director: "HAYATO DATE",
        studio: "PIERROT",
        gallery: [
            "naruto-shippuden/naruto-shippuden-1.png", 
            "naruto-shippuden/naruto-shippuden-2.png", 
            "naruto-shippuden/naruto-shippuden-3.jpg", 
            "naruto-shippuden/naruto-shippuden-4.jpg"
        ]
    },

    {
        cover: "boruto.jpg",
        sypnosis: `"Boruto: Naruto Next Generations" follows the adventures of Naruto Uzumaki's son, Boruto, as he navigates the challenges of being a young ninja in a time of peace, while dealing with the legacy of his famous father.`,
        author: "UKYO KODACHI",
        director: "NORIYUKI ABE",
        studio: "PIERROT",
        gallery: [
            "boruto/boruto-1.avif", 
            "boruto/boruto-2.webp", 
            "boruto/boruto-3.jpg", 
            "boruto/boruto-4.jpg"
        ]
    }
]

var isTheme = 0 //0 light, 1 dark
var animeIdx = 0

$('#BtnTheme').on('click', ()=>{
    
    if(isTheme == 0){
        $('#BtnTheme').css({"background-color": "black"})

        $('#BtnThemeCirc').css({
            "width": "15px", 
            "height": "15px",
            "background-color": "white"
        })

        $('#BtnThemeMoon').animate({"left": "7px"}, 150, "swing")

        //Star Shower
        $('#Shower').css({
            "background-color": "black"
        })

        color = 'white'
        colorRgba = 'rgba(255, 255, 255, 0)'

        //Page Title
        $('.TitleContainer').css({
            "color": "white"
        })

        $('.Title').css({
            "background-color": "black",
            "border": "2px solid white"
        })

        //Jumbotron
        $('.Cover').css({
            "border": "2px solid white",

        })


        //Content
        $('.ContentContainer').css({
            "background-color": "black"
        })

        $('.Sub2Container').css({
            "color": "white"
        })

        $('.TitleContent').css({
            "border-bottom": "2px solid white"
        })

        $('.GalleryItem').css({
            "border": "2px solid white"
        })

        $('.InfoContainer').css({
            "background-color": "white",
            "color": "black"
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

        //Star Shower
        $('#Shower').css({
            "background-color": "white"
        })

        color = 'black'
        colorRgba = 'rgba(0, 0, 0, 0)'

        //Page Title
        $('.TitleContainer').css({
            "color": "black"
        })

        $('.Title').css({
            "background-color": "white",
            "border": "2px solid black"
        })

        //Jumbotron
        $('.Cover').css({
            "border": "2px solid black"
        })

        //Content
        $('.ContentContainer').css({
            "background-color": "white"
        })

        $('.Sub2Container').css({
            "color": "black"
        })

        $('.TitleContent').css({
            "border-bottom": "2px solid black"
        })

        $('.GalleryItem').css({
            "border": "2px solid black"
        })

        $('.InfoContainer').css({
            "background-color": "black",
            "color": "white"
        })

        isTheme = 0

    }
    initVideoCanva()
})

// $('.Cover').hover(()=>{
//     if(isTheme == 0){
//         $('.Cover').css({
//             "box-shadow": "0 0px 20px white"
//         })
//     }else{
//         $('.Cover').css({
//             "box-shadow": "0 0px 20px black"
//         })
//     }
// })

var canvas = document.getElementById('Shower')
canvas.width = window.innerWidth
canvas.height = window.innerHeight * 0.25
var ctx = canvas.getContext('2d')


var color = 'black'
var colorRgba = 'rgba(0, 0, 0, 0)'

function Star(px, py, dy){
    this.resetX = px
    this.resetY = py
    this.px = px
    this.py = py
    this.radius = 2
    this.lineWidth = 3
    this.length = 70
    this.dx = dy
    this.dy = dy

    this.draw = function(){
        
        let gradient = ctx.createLinearGradient(this.px, this.py, this.px + 70, this.py - 70)
        gradient.addColorStop(0, color)
        gradient.addColorStop(1, colorRgba)
        

        ctx.save()
        ctx.beginPath()

        ctx.fillStyle = color
        ctx.strokeStyle = gradient

        //Circle
        // console.log(this.radius)
        ctx.arc(this.px, this.py, 2, 0, Math.PI * 2, false)
        ctx.fill()

        //Line
        ctx.lineWidth = this.lineWidth
        ctx.moveTo(this.px, this.py)
        ctx.lineTo(this.px + this.length, this.py - this.length)
        ctx.stroke();

        ctx.restore()
    }

    this.update = function(){
        
        if(this.py -70 > canvas.height){
            
            let newpx = Math.random() * canvas.width
            let newpy = -2
            this.px = newpx
            this.py = newpy
        }else{
            this.px -= this.dx
            this.py += this.dy
            this.draw()
        } 
    }
}

var starList = []
for(let i = 0; i < 15; i++){
    let px = Math.random() * canvas.width
    let py = -2
    let dy = (Math.random() * 1) + 5
    starList.push(new Star(px, py, dy))
}

function animate(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for(let i = 0; i<starList.length; i++){
        starList[i].update()
    }
    requestAnimationFrame(animate)
}

animate()

function initAnime(idx){
    for(let i = 0; i<3; i++){
        if(i == idx){
            $('#Cover' + i).css({
                "top": "1.5em",
                "filter": "none"
            })
        }else{
            $('#Cover' + i).css({
                "top": "",
                "filter": ""
            })
        }
    }

    let jumbotron = document.getElementById('Jumbotron')
    let sypnosis = document.getElementById('sypnosis')
    let gallery0 = document.getElementById('GalleryItem0')
    let gallery1 = document.getElementById('GalleryItem1')
    let gallery2 = document.getElementById('GalleryItem2')
    let gallery3 = document.getElementById('GalleryItem3')
    let author = document.getElementById('Author')
    let director = document.getElementById('Director')
    let studio = document.getElementById('Studio')

    jumbotron.style.backgroundImage = `url(asset/anime/${animeList[idx].cover}`
    sypnosis.innerText = `${animeList[idx].sypnosis}`
    gallery0.style.backgroundImage = ` url(asset/anime/${animeList[idx].gallery[0]})`
    gallery1.style.backgroundImage = ` url(asset/anime/${animeList[idx].gallery[1]})`
    gallery2.style.backgroundImage = ` url(asset/anime/${animeList[idx].gallery[2]})`
    gallery3.style.backgroundImage = ` url(asset/anime/${animeList[idx].gallery[3]})`
    author.innerText = `${animeList[idx].author}`
    director.innerText = `${animeList[idx].director}`
    studio.innerText = `${animeList[idx].studio}`

    animeIdx = idx
    // document.getElementById('sypnosis')
}

initAnime(animeIdx)


$('.PopUp').hide()

function popUp(idx){
    $('.PopUp').show()

    let imgPopUp = document.getElementById('ImgPopUp')
    imgPopUp.src = `asset/anime/${animeList[animeIdx].gallery[idx]}`

    $('#ImgPopUp').css({
        "transform": "scale(1)"
    })
}

function closePopUp(){
    $('#ImgPopUp').css({
        "transform": ""
    })
    
    $('.PopUp').hide()
}