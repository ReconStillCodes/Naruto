//Home
$('#NavHomeBtn').on('click', () =>{
    window.location.href = 'Home.html'
})

$('#NavCharacterBtn').on('click', () =>{
    window.location.href = 'Character.html'
})

$('#NavAnimeBtn').on('click', () =>{
    window.location.href = 'Anime.html'
})

$('#NavMangaBtn').on('click', () =>{
    window.location.href = 'Manga.html'
})

$('#NavStoryBtn').on('click', () =>{
    window.location.href = 'Story.html'
})


var isMenu = 0 //0 hide, 1 show

$('#MenuLogo').on('click', ()=>{
    if(isMenu == 0){
        $('#BtnTheme').css({"z-index": "-1"})
        $('#NavBarContainer').show()
        $('#NavBarContainer').animate({"top": "0%"}, 300, "swing")
        
        isMenu = 1
    }
    else{
        $( '#BtnTheme').css({"z-index": "1"})
        $('#NavBarContainer').hide()
        $('#NavBarContainer').animate({"top": "-100%"}, 100, "swing")
        
        isMenu = 0
    }

})