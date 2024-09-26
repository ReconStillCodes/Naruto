const characterList = [
    {
        nickname:"NARUTO",
        name: "NARUTO UZUMAKI",
        card: "Naruto.jpg",
        img: "naruto.png",
        desc: "Naruto Uzumaki is a ninja from the Hidden Leaf Village. He is energetic and determined to become the strongest ninja and the Hokage of the village."
    },
    {
        nickname:"SAKURA",
        name:"SAKURA HARUNO",
        card:"Sakura.jpg",
        img:"sakura.png",
        desc:"Sakura Haruno is a ninja from the Hidden Leaf Village. She is known for her intelligence, strength, and medical ninjutsu skills."
    },
    {
        nickname:"SASUKE",
        name:"SASUKE UCHIHA",
        card:"sasuke.png",
        img:"sasuke.png",
        desc:"Sasuke Uchiha is one of the last surviving members of the Uchiha clan. He is skilled in the Sharingan and is determined to avenge his clan."
    },
    {
        nickname:"KAKASHI",
        name:"KAKASHI HATAKE",
        card:"kakashi.jpg",
        img:"Kakashi.webp",
        desc:"Kakashi Hatake is a jonin from the Hidden Leaf Village. Known as the Copy Ninja, he is skilled in many techniques and has a mysterious past"
    },
    {
        nickname:"INO",
        name:"INO YAMANAKA",
        card:"ino.jpg",
        img:"ino.webp",
        desc:"Ino Yamanaka is a member of the Yamanaka clan, known for their mind-controlling abilities. She is a skilled ninja and a loyal friend."
    },
    {
        nickname:"HINATA",
        name:"HINATA HYUGA",
        card:"hinata.jpg",
        img:"hinata.png",
        desc:"Hinata Hyuga is a member of the Hyuga clan, known for their Byakugan. She is gentle and kind, but strong-willed and determined to protect those she loves."
    },
    {
        nickname:"SHIKAMARU",
        name:"SHIKAMARU NARA",
        card:"shikamaru.png",
        img:"shikamaru.png",
        desc:"Shikamaru Nara is a member of the Nara clan, known for their shadow manipulation techniques. He is incredibly intelligent and a brilliant strategist."
    },
    {
        nickname:"KIBA",
        name:"KIBA INUZUKA",
        card:"kiba.png",
        img:"kiba.webp",
        desc:"Kiba Inuzuka is a member of the Inuzuka clan, known for their connection with dogs. He is always accompanied by his loyal dog, Akamaru"
    },
]

 initCharacters()
 function initCharacters(){
    
    for(var i=0; i<characterList.length; i++){
        document.getElementById('CharacterContainer').innerHTML += 

        `<div class="CharacterItemContainer">
            
            <div class="CharacterItemImg" style="background-image: url(asset/home/character-card/${characterList[i].card})"></div>

            <div class="CharacterItemName"><b>${characterList[i].nickname}</b></div>

            <div class="CharacterBTN" onclick="readMore(${i})">Read More</div>

        </div>
        `
    }
    
 }

var isTheme = 0 //0 light, 1 dark

// $('#NavBarContainer').hide()


$('#BtnTheme').on('click', ()=>{
    if(isTheme == 0){
        $('#BtnTheme').css({"background-color": "black"})

        $('#BtnThemeCirc').css({
            "width": "15px", 
            "height": "15px",
            "background-color": "white"
        })

        $('#BtnThemeMoon').animate({"left": "7px"}, 150, "swing")

        $('#TitlePage').css({
            "background-color": "black",
            "color": "white"
        })

        $('.CharacterItemContainer').css({
            "border": "5px solid white"
        })

        $('.CharacterItemName').css({
            "color": "white",
            "background-color": "#575654"
        })

        $('.PopUpName').css({
            "color": "white",
            "background-color": "#575654",
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

        $('#TitlePage').css({
            "background-color": "white",
            "color": "black"
        })

        $('.CharacterItemContainer').css({
            "border": "5px solid black"
        })

        $('.CharacterItemName').css({
            "color": "black",
            "background-color": "white"
        })

        $('.PopUpName').css({
            "color": "black",
            "background-color": "white",
            "border": "2px solid black"
        })

        isTheme = 0

    }
})


$('#PopUpContainer').on('click', ()=>{
    document.getElementById("PopUpContainer").style.visibility = "hidden"
})

function readMore(i){
    
    document.getElementById("PopUpCharImg").src = "asset/character/character/" + characterList[i].img 

    // console.log(characterList[i].name)
    document.getElementById("PopUpName").innerText = characterList[i].name

    document.getElementById("PopUpDesc").innerText = characterList[i].desc

    const img = document.getElementById('PopUpCharImg')
   
    const { R, G, B } =  avgColor(img)
  
    document.getElementById("PopUpChar").style.background = `
    radial-gradient(closest-side, rgba(${R}, ${G},${B},1), transparent)`

    document.getElementById("PopUpContainer").style.visibility = "visible"
}

function avgColor(img){
    // const img = document.getElementById('PopUpCharImg')
    let data, length, i = 0, count = 0, R = 0, G = 0, B = 0;

    const canvas =  document.createElement("canvas");

    let height = canvas.height = img.naturalHeight
    let width = canvas.width = img.naturalWidth

    const imgCanva = canvas.getContext("2d")
    imgCanva.drawImage(img, 0, 0)

    data = imgCanva.getImageData(0, 0, width, height)
    length = data.data.length


    for(i = 0; i< length; i+= 4){
        R += data.data[i]
        G += data.data[i + 1]
        B += data.data[i + 2]
        count++
    }
    R = (R / count)
    G = (G / count)
    B = (B / count)
    return{R, G, B}
}

// $("#TitlePage").on('input', () =>{
//     $().($(this).val())
// })

function getCharByString(x){
    for(var i=0; i<characterList.length; i++){
        console.log(characterList[i].nickname.includes(x))
        
        if((characterList[i].nickname.includes(x.toUpperCase()))){
            document.getElementById('CharacterContainer').innerHTML += 

        `<div class="CharacterItemContainer">
            
            <div class="CharacterItemImg" style="background-image: url(asset/home/character-card/${characterList[i].card})"></div>

            <div class="CharacterItemName"><b>${characterList[i].nickname}</b></div>

            <div class="CharacterBTN" onclick="readMore(${i})">Read More</div>

        </div>
        ` 
        }
        
        
    }
}

document.getElementById("SearchBar").addEventListener('input', (event)=>{
    
    document.getElementById('CharacterContainer').innerHTML = ""

    let x = event.target.value
    // console.log(x)
    getCharByString(x)

})