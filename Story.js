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

        //Content
        $('.Scrollable').css({
            "color": "white", 
            "background-color": "black"
        })

        $('.Title').css({
            "border": "2px solid white"
        })

        $('.ItemTitle').css({
            "background-color": "grey",
            "border": "2px solid white"
        })

        $('.ItemContent').css({
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

        //Content
        $('.Scrollable').css({
            "color": "black", 
            "background-color": "white"
        })

        $('.Title').css({
            "border": "2px solid black"
        })

        $('.ItemTitle').css({
            "background-color": "white",
            "border": "2px solid black"
        })

        $('.ItemContent').css({
            "border": "2px solid black"
        })

        isTheme = 0

    }
})


var storyList = [
    {
        title: "Prologue — Land of Waves",
        img: "land-of-waves.jpg",
        desc: "Naruto, Sasuke, and Sakura form Team 7 under Kakashi Hatake. Their first major mission takes them to the Land of Waves, where they protect a bridge builder from the mercenary Zabuza Momochi and his apprentice Haku. This mission is pivotal as it challenges Team 7 with life-threatening dangers and deepens their bonds. The arc also explores the themes of dreams, sacrifice, and the harsh realities of the ninja world, leaving a lasting impact on the team, especially Naruto, as he witnesses the complexities of being a true ninja. The emotional depth and character development during this mission set the tone for the series. The Land of Waves arc is not just an action-packed adventure but also a story about the importance of courage and teamwork. The bond between Naruto, Sasuke, and Sakura is tested and strengthened as they face their fears and work together to protect the bridge builder and the people of the Land of Waves. This mission also introduces the concept of ninjas with complex motivations and backstories, as seen with Zabuza and Haku. Their tragic end leaves a profound impact on Naruto, shaping his understanding of the world and his resolve to become stronger.",
        isOpen: 0
    },
    {
        title: "Chunin Exams",
        img: "chunnin-exam.jpg",
        desc: "Team 7 participates in the Chunin Exams, a series of tests to advance to a higher ninja rank. They face challenges such as the Forest of Death and the preliminary and final rounds of the exams. This arc introduces many new characters and explores the developing abilities of the main characters. The Chunin Exams are not just a test of strength but also of strategy, teamwork, and resilience. The intense battles and personal rivalries set the stage for future conflicts and alliances, highlighting the growth and potential of each young ninja. This arc provides a deeper look into the ninja world's politics and the various villages' dynamics. The Forest of Death is a particularly harrowing part of the exams, filled with dangerous creatures and rival ninja teams. It tests the participants' survival skills and teamwork, pushing them to their limits. The preliminary and final rounds feature one-on-one battles that showcase each character's unique abilities and fighting styles. This arc also highlights the emotional and psychological growth of the characters, particularly Naruto, Sasuke, and Sakura. The Chunin Exams serve as a rite of passage, marking a significant step in their journey to become stronger and more mature ninjas.",
        isOpen: 0
    },
    {
        title: "Konoha Crush",
        img: "konoha-crush.webp",
        desc: "Orochimaru, a rogue ninja, attacks the Hidden Leaf Village during the Chunin Exam finals. The village faces a major crisis, leading to significant battles and the death of the Third Hokage. This arc is crucial as it exposes the vulnerability of the village and the dark ambitions of Orochimaru. The battles are intense and personal, showcasing the strength and sacrifice of the Leaf Village's defenders. The death of the Third Hokage marks a turning point, forcing the village to confront its past and prepare for future threats. This arc delves into the complex history and politics of the Hidden Leaf Village. The emotional impact of the Third Hokage's death is felt throughout the village, particularly by Naruto and his friends. It serves as a harsh lesson about the realities of being a ninja and the sacrifices that come with it. The village's response to the attack reveals the deep bonds and sense of duty that hold the community together. Orochimaru's motives and backstory are further explored, adding layers to his character and setting up future conflicts. The Konoha Crush arc is a pivotal moment in the series, highlighting the themes of loss, resilience, and the constant struggle to protect what is important.",
        isOpen: 0
    },
    {
        title: "Search for Tsunade",
        img: "search-for-tsunade.jpg",
        desc: "Naruto, Jiraiya, and others search for Tsunade, a legendary Sannin, to become the Fifth Hokage. Naruto learns the Rasengan technique, and Tsunade accepts the position after overcoming her fear of blood. This arc delves into Tsunade's tragic past and her hesitation to take on the role of Hokage. Naruto's determination and growth during this mission are highlighted, as he strives to master the Rasengan. The journey also strengthens the bond between Naruto and Jiraiya, setting the stage for future challenges. Tsunade's character is explored in depth, revealing her vulnerabilities and the reasons behind her reluctance to lead. The arc also features significant battles, including a confrontation with Orochimaru and Kabuto. These encounters test Naruto's newfound skills and determination, pushing him to grow even stronger. The bond between Jiraiya and Tsunade is also explored, adding depth to their characters and their shared history. The search for Tsunade is not just about finding a new leader for the village but also about healing and moving forward from past traumas. Tsunade's acceptance of the role marks a new beginning for the village, bringing hope and stability in the wake of the Third Hokage's death.",
        isOpen: 0
    },
    {
        title: "Sasuke Recovery Mission",
        img: "sasuke-recovery.jpg",
        desc: "Sasuke, feeling inferior to Naruto and driven by the desire for power, leaves the village to join Orochimaru. Naruto and a group of his friends form a team to bring Sasuke back, resulting in several intense battles. This mission tests the strength and resolve of Naruto and his friends as they confront formidable opponents. Each member of the team faces personal challenges and grows through the experience. The emotional conflict between Naruto and Sasuke reaches a critical point, emphasizing themes of friendship, loyalty, and the pursuit of power. The battles are intense and highlight the diverse skills and strategies of each team member. The arc delves into the psychological and emotional struggles of the characters, particularly Naruto and Sasuke. Sasuke's desire for power and his internal conflict are explored in depth, providing insight into his motivations and the darkness that drives him. Naruto's unwavering determination to bring Sasuke back highlights his loyalty and belief in their bond. The Sasuke Recovery Mission is a turning point in the series, marking the end of the characters' childhood and the beginning of their journey into adulthood. The mission's outcome has lasting repercussions for the village and the relationships between the main characters.",
        isOpen: 0
    },
    {
        title: "Kazekage Rescue Mission",
        img: "kazekage-rescue-misssion.jpg",
        desc: "Naruto returns to the village after two and a half years of training. The Akatsuki kidnaps Gaara, the Kazekage, leading to a mission to rescue him. This mission showcases the growth of Naruto and his teammates after their time apart. The stakes are high as they face the deadly Akatsuki members. The rescue mission emphasizes the theme of redemption and the importance of bonds formed through shared struggles. Gaara's transformation from a feared weapon to a respected leader highlights the impact of Naruto's influence on others. The arc features intense battles and strategic planning, showcasing the improved abilities of Naruto and his friends. The mission to save Gaara is not just about rescuing a friend but also about confronting the Akatsuki's growing threat. The teamwork and determination of the characters are highlighted throughout the mission. The Kazekage Rescue Mission also delves into Gaara's past and his growth as a character. His journey from a lonely, feared individual to a beloved leader mirrors Naruto's own struggles and growth. The mission reinforces the series' themes of friendship, redemption, and the power of perseverance.",
        isOpen: 0
    },
    {
        title: "Sasuke and Sai",
        img: "sasuke-and-sai.jpg",
        desc: "Team Kakashi is joined by Sai and Yamato as they search for Sasuke, now with Orochimaru. The arc delves into Sai's mysterious background and the evolving dynamics within Team Kakashi. This mission is marked by internal conflicts and the struggle to understand and trust the new team members. Sai's introduction adds complexity to the team dynamics, with his loyalty and motives being questioned. The search for Sasuke continues to be a driving force, with the team encountering new challenges and forging stronger bonds through their shared quest. The arc explores the theme of trust and the importance of teamwork in overcoming obstacles. The arc also provides insight into Sai's character and his connections to the mysterious Root organization. His interactions with Naruto and the others reveal his hidden depths and the emotional barriers he must overcome. Yamato's leadership and unique abilities also play a crucial role in the team's efforts to find Sasuke. The Sasuke and Sai arc highlights the evolving relationships within Team Kakashi and their determination to bring Sasuke back. The mission tests their resolve and showcases their growth as ninjas and individuals. The challenges they face strengthen their bonds and prepare them for the greater battles ahead.",
        isOpen: 0
    },
    {
        title: "Hidan and Kakuzu",
        img: "hidan-and-kakuzu.webp",
        desc: "The Akatsuki members Hidan and Kakuzu attack, leading to a confrontation with Team Asuma. Asuma's death prompts Shikamaru to seek revenge. This arc is intense and emotional, showcasing the devastating impact of the Akatsuki's actions on the Leaf Village. Shikamaru's character development is a highlight, as he takes on a leadership role and plans a strategic counterattack. The battles are brutal and highlight the bonds between the team members. The arc emphasizes themes of loss, vengeance, and the enduring strength of friendship. Asuma's death is a turning point for Shikamaru, pushing him to grow as a leader and strategist. His journey of revenge against Hidan and Kakuzu is both personal and professional, showcasing his tactical brilliance and emotional depth. The arc also highlights the camaraderie and support among the members of Team Asuma. The Hidan and Kakuzu arc is a powerful exploration of the consequences of war and the resilience of those left behind. The intense battles and emotional struggles of the characters add depth to the series and reinforce the themes of loyalty, sacrifice, and the unbreakable bonds of friendship.",
        isOpen: 0
    },
    {
        title: "Itachi Pursuit Mission",
        img: "itachi-pursuit.jpg",
        desc: "Naruto and his team continue their pursuit of Sasuke, who is now hunting down his brother Itachi. This arc includes battles with other Akatsuki members. The mission is driven by the emotional and psychological struggles of the characters, particularly Naruto and Sasuke. The pursuit of Itachi reveals the complex relationship between the Uchiha brothers and their tragic past. Sasuke's quest for revenge against Itachi is a central theme, highlighting his internal conflict and the darkness that drives him. Naruto's determination to bring Sasuke back remains unwavering, showcasing his loyalty and belief in their bond. The arc features intense battles and strategic planning, with the team encountering various Akatsuki members. These encounters test their skills and determination, pushing them to grow even stronger. The mission also delves into the motivations and backstories of the Akatsuki members, adding depth to their characters. The Itachi Pursuit Mission is a pivotal moment in the series, marking a turning point in the characters' journeys. The revelations about Itachi's true motives and the Uchiha clan's history add layers of complexity to the story, setting the stage for future conflicts and alliances.",
        isOpen: 0
    },
    {
        title: "Tale of Jiraiya the Gallant",
        img: "tale-of-jiraiya-the-gallant.webp",
        desc: "Jiraiya infiltrates the Hidden Rain Village to gather information on the Akatsuki leader Pain. The arc ends with Jiraiya's death after a fierce battle with Pain. This arc is a poignant exploration of Jiraiya's character and his enduring legacy. Jiraiya's journey into the Hidden Rain Village is fraught with danger and suspense, highlighting his determination and bravery. His confrontation with Pain is a climactic battle that showcases his formidable skills and unwavering resolve. The arc delves into Jiraiya's past and his relationships with his students, including Naruto. The emotional impact of Jiraiya's death is profound, particularly for Naruto. It serves as a catalyst for Naruto's growth and determination to continue Jiraiya's legacy. The arc also explores the philosophical and ideological differences between Jiraiya and Pain, adding depth to their characters and their motivations. The Tale of Jiraiya the Gallant is a powerful and emotional story that highlights the themes of legacy, sacrifice, and the enduring impact of a mentor's teachings. Jiraiya's death is a turning point in the series, leaving a lasting impression on the characters and the story as a whole.",
        isOpen: 0
    },
    {
        title: "Pain's Assault",
        img: "pain-assault.webp",
        desc: "Pain attacks the Hidden Leaf Village, causing widespread destruction. Naruto confronts Pain in a climactic battle and learns the truth about the Akatsuki leader's motivations. This arc is a dramatic and emotional highlight of the series, showcasing the epic confrontation between Naruto and Pain. The attack on the village is devastating, with Pain's powerful abilities causing massive destruction and loss. The battles between Pain and the village's defenders are intense and highlight the strength and resilience of the characters. Naruto's arrival and his confrontation with Pain are the climax of the arc, showcasing his growth and determination. The battle between Naruto and Pain is not just a physical confrontation but also a clash of ideologies. Naruto learns about Pain's tragic past and his vision of a world without suffering. This revelation adds depth to Pain's character and his motivations, making the conflict more complex and emotionally charged. Pain's Assault is a turning point in the series, marking the end of an era and the beginning of a new chapter for the characters and the village. The arc emphasizes themes of resilience, redemption, and the power of understanding and forgiveness.",
        isOpen: 0
    },
    {
        title: "Five Kage Summit",
        img: "five-kage-summit.webp",
        desc: "The Five Kage Summit is convened to address the threat of the Akatsuki. Sasuke attacks the summit, leading to major confrontations and the declaration of the Fourth Great Ninja War. This arc is a critical moment in the series, setting the stage for the final battles and the resolution of the main conflicts. The summit brings together the leaders of the major ninja villages, highlighting the political dynamics and tensions between them. Sasuke's attack on the summit is a dramatic and intense event, showcasing his growing power and the lengths he is willing to go for revenge. The confrontations between Sasuke and the Kage are fierce and highlight the high stakes of the conflict. The arc also explores the relationships and alliances between the different villages, adding depth to the story and the characters. The declaration of the Fourth Great Ninja War is a significant turning point, marking the beginning of the final and most intense battles of the series. The Five Kage Summit arc emphasizes themes of power, revenge, and the complex nature of leadership and alliances. The events of the summit have lasting repercussions for the characters and the world, setting the stage for the epic conclusion of the series.",
        isOpen: 0
    },
    {
        title: "Fourth Great Ninja War: Countdown",
        img: "fourth-great-ninja-war-countdown.webp",
        desc: "The Ninja Alliance prepares for war against the Akatsuki. Naruto undergoes training to control the Nine-Tails' chakra. This arc is the beginning of the final conflict, showcasing the preparations and strategies of the characters and the world. The formation of the Ninja Alliance is a significant event, bringing together ninjas from different villages to fight against a common enemy. The arc highlights the unity and cooperation between the villages, emphasizing the theme of solidarity in the face of a great threat. The preparations for war are intense and filled with suspense. Naruto's training to control the Nine-Tails' chakra is a crucial part of the arc, showcasing his growth and determination. The training is challenging and tests Naruto's resolve and abilities. The bond between Naruto and the Nine-Tails is also explored, adding depth to their relationship and the story. The Countdown to the Fourth Great Ninja War sets the stage for the epic battles to come, highlighting the stakes and the characters' readiness to face the final challenge. The arc emphasizes themes of unity, determination, and the power of preparation and teamwork.",
        isOpen: 0
    },
    {
        title: "Fourth Great Ninja War: Confrontation",
        img: "fourth-great-ninja-war-confrontation.webp",
        desc: "The war begins, with major battles occurring on multiple fronts. Naruto and Killer Bee join the fight against the reanimated ninja controlled by Kabuto. This arc is filled with intense action and high stakes, showcasing the epic scale of the conflict. The battles are fierce and involve numerous characters, highlighting their skills and strategies. The reanimated ninja add a layer of complexity to the conflict, as the characters must confront powerful enemies from the past. The arc also explores the psychological and emotional impact of the war on the characters. Naruto and Killer Bee's involvement in the war is significant, showcasing their growth and abilities. Their fight against the reanimated ninja is intense and highlights their determination to protect their allies and the world. The bond between Naruto and Killer Bee is also explored, adding depth to their characters. The Fourth Great Ninja War: Confrontation arc is a turning point in the series, marking the beginning of the final and most intense battles. The arc emphasizes themes of sacrifice, resilience, and the power of unity and cooperation in the face of overwhelming odds.",
        isOpen: 0
    },
    {
        title: "Fourth Great Ninja War: Climax",
        img: "fourth-great-ninja-war-climax.webp",
        desc: "The war reaches its peak as the Ninja Alliance battles Madara Uchiha, Obito Uchiha, and the Ten-Tails. Naruto and Sasuke gain new powers and fight alongside their allies. This arc is the culmination of the series' main conflicts, with high-stakes battles and dramatic revelations. The battles are intense and involve numerous characters, highlighting their growth and development throughout the series. The arc explores the depths of Madara and Obito's ambitions and their impact on the world. The introduction of the Ten-Tails adds a new level of danger and urgency to the conflict. Naruto and Sasuke's growth and evolving powers are central to the arc, showcasing their determination and resilience. Their teamwork and rivalry are highlighted as they fight together against the overwhelming threat. The arc also delves into the emotional and psychological struggles of the characters as they face the ultimate battle. The Fourth Great Ninja War: Climax is a turning point in the series, bringing the main conflicts to a head and setting the stage for the final resolution. The arc emphasizes themes of sacrifice, resilience, and the enduring power of friendship and teamwork.",
        isOpen: 0
    },
    {
        title: "Birth of the Ten-Tails' Jinchuriki",
        img: "birth-of-ten-tail-jinchuriki.webp",
        desc: "Obito becomes the Ten-Tails' jinchuriki, leading to a final showdown between him and the Ninja Alliance. This arc is a critical moment in the series, showcasing the epic scale and high stakes of the final battles. The transformation of Obito into the Ten-Tails' jinchuriki is a dramatic and intense event, highlighting his immense power and the danger he poses to the world. The battles that follow are fierce and filled with high-stakes drama, showcasing the determination and resilience of the Ninja Alliance. The arc delves into Obito's motivations and backstory, adding depth to his character and the conflict. The psychological and emotional struggles of the characters are also explored, particularly Naruto and Sasuke as they confront Obito and their own inner demons. The bond between Naruto and his friends is a central theme, emphasizing the power of unity and cooperation. The Birth of the Ten-Tails' Jinchuriki arc is a pivotal moment in the series, setting the stage for the final resolution of the main conflicts. The intense battles and dramatic revelations highlight the themes of sacrifice, resilience, and the enduring power of friendship and teamwork.",
        isOpen: 0
    },
    {
        title: "Kaguya Otsutsuki Strikes",
        img: "kaguya-otsusuki.jpg",
        desc: "The true mastermind behind the conflict, Kaguya Otsutsuki, emerges. Naruto, Sasuke, and their allies confront her in a battle to save the world. This arc is the culmination of the series' main conflicts, with high-stakes battles and dramatic revelations. Kaguya's emergence adds a new level of danger and urgency to the conflict, showcasing her immense power and the threat she poses to the world. The battles that follow are intense and filled with high-stakes drama, highlighting the determination and resilience of Naruto, Sasuke, and their allies. The arc delves into Kaguya's motivations and backstory, adding depth to her character and the conflict. The psychological and emotional struggles of the characters are also explored, particularly Naruto and Sasuke as they confront Kaguya and their own inner demons. The bond between Naruto and his friends is a central theme, emphasizing the power of unity and cooperation. The Kaguya Otsutsuki Strikes arc is a pivotal moment in the series, bringing the main conflicts to a head and setting the stage for the final resolution. The intense battles and dramatic revelations highlight the themes of sacrifice, resilience, and the enduring power of friendship and teamwork.",
        isOpen: 0
    },
    {
        title: "Konoha Hiden: The Perfect Day for a Wedding",
        img: "naruto-wedding.avif",
        desc: "The final arc of 'Naruto: Shippuden,' focusing on Naruto and Hinata's wedding. This arc is a heartwarming and emotional conclusion to the series, showcasing the characters' growth and the bonds they have formed. The preparations for Naruto and Hinata's wedding bring together characters from across the series, highlighting their relationships and the impact they have had on each other's lives. The arc is filled with touching moments and reflections on the characters' journeys and growth. The wedding itself is a joyous and emotional event, symbolizing the culmination of Naruto and Hinata's relationship and the end of their long and arduous journey. The arc emphasizes the themes of love, friendship, and the importance of cherished memories and shared experiences. Konoha Hiden: The Perfect Day for a Wedding is a fitting conclusion to the series, celebrating the characters' growth and the bonds they have formed. The arc highlights the enduring power of love and friendship and the importance of cherishing the moments that make life meaningful.",
        isOpen: 0
    },
]


//Initialize Items
initItem()

function initItem(){
    let dropDown = document.getElementById('ContentContainer')
    dropDown.innerHTML = ''
    for(let i=0; i<storyList.length; i++){
        dropDown.innerHTML += 
        `
        <div class="Item" id="Item${i}">
            <div class="ItemTitle" id="ItemBtn${i}" onclick="dropDown(${i})">
                <img class="ItemTitleImg" src="asset/uzumaki.png">
            
                <span id="ItemTitle${i}">${storyList[i].title}</span>
            </div>


            <div class="ItemContent" id="ItemContent${i}">
                <img class="ItemContentImg" src="asset/story/${storyList[i].img}">
                
                <div class="ItemCC">
                    <div class="ItemContentDesc">${storyList[i].desc}</div>
                </div>
            </div>
        </div>
`
    }
}


//DropDown
function dropDown(idx){
    if(storyList[idx].isOpen == 0){
        $('#Item' + idx).css({
            "height": "50vh"
        })
    
        $('#ItemContent' + idx).css({
            "top": "10vh"
        })

        storyList[idx].isOpen = 1
    }

    else{
        $('#Item' + idx).css({
            "height": ""
        })
    
        $('#ItemContent' + idx).css({
            "top": ""
        }) 

        storyList[idx].isOpen = 0
    }

    
}