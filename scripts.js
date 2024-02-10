var menus = document.getElementById('menus');
var menuJouer = document.getElementById('menuJouer');
var menuRegle = document.getElementById('menuRegle');
var menuModes = document.getElementById('menuModes');
var sourisNiveau = document.getElementById('sourisNiveau');

var home = document.getElementById('home')
var bouton_jouer = document.getElementById('bouton_jouer')
var bouton_regles = document.getElementById('bouton_regles')
var niveau1 = document.getElementById('niveau1')
const boutonGlobal = document.getElementsByClassName('boutonGlobal')

const mouseMove = document.querySelector(".mouseMove");

window.addEventListener('mousemove', (e) =>{
    mouseMove.style.left = e.pageX + "px";
    mouseMove.style.top = e.pageY + "px";
})

window.onload = function(){
    menuRegle.style.display = "none"
    menuModes.style.display = "none"
    sourisNiveau.style.display = "none"
}

bouton_regles.onclick = function() {
    menuRegle.style.display = "block"
    menuJouer.style.display = "none"
}

bouton_jouer.onclick = function() {
    menuModes.style.display = "block"
    menuJouer.style.display = "none"
}

niveau1.onclick = function() {
    sourisNiveau.style.display = "block"
    menuModes.style.display = "none"
    menus.style.display = "none"
    document.body.style.cursor = "crosshair";


    const bubbleMaker = () => {
        const createBubble = () => {
            const bulle = document.createElement("span");
            bulle.classList.add("bulle");
            document.body.appendChild(bulle);
    
            const size = Math.random() * 200 + 100 + "px";
            bulle.style.height = size;
            bulle.style.width = size;
    
            bulle.style.top = Math.random() * 100 - 10 + "%";
            bulle.style.left = Math.random() * 100 - 10 + "%";
    
            bulle.addEventListener('click', () => {
                bulle.classList.remove("bulle");
                setTimeout(() => {
                    document.body.removeChild(bulle);
                    createBubble();
                }, 100);
            });
        };
    
        createBubble();
    };
    
    bubbleMaker();
    
}