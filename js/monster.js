// variables globales

var nom;
var life;
var money;
var awake = true;


var b1_newlife = document.getElementById("b1");
var k_kill = document.getElementById("k");
var b2_run = document.getElementById("b2");
var b3_fight = document.getElementById("b3");
var b4_sleep = document.getElementById("b4");
var b5_eat = document.getElementById("b5");
var b6_show = document.getElementById("b6");
var b7_work = document.getElementById("b7");


var actionbox = document.getElementById("actionbox");
var statusbox = document.getElementById("status")
var monstrebox = document.getElementById("monster");

var temps_dormir = 7000;
var temps_random = 12000;

function init(n, l, m){
    nom = n;
    life = l;
    money = m; 
}


function showme(){
    log("Nom : "+nom+", Life : " + life + "❤️, Money : " + money +"💸, Awake : "+awake);
    displayStatus(life, money, awake);
}

function go() {
    let nom_monstre = prompt("Nom de votre monstre : ")
    init(nom_monstre, 30, 30);
    b6_show.addEventListener("click", showme);
    displayStatus(life, money, awake);
}

function log(message) {
    let para = document.createElement("p");
    para.textContent = message;
    actionbox.insertBefore(para, actionbox.firstChild);
}

function displayStatus(life, money, awake) {
    let icon;
    let estawake = "Pas réveillé";
    if (awake === true){
        estawake = "Réveillé"
    }
    statusbox.innerHTML = "<li>Life : " + life + "❤️</li><li>Money : " +money+ "💸</li><li>" + estawake + "</li>";
    if (life <= 0) {
        monstrebox.style.backgroundColor = "black";
        monstrebox.querySelector("p").textContent = "☠️";
    } 
    else{
        if (life < 5) {
            monstrebox.style.backgroundColor = "red";
            icon = "😢";
        } else if (life < 10) {
            monstrebox.style.backgroundColor = "orange";
            icon = "😕";
        } else if (life < 15) {
            monstrebox.style.backgroundColor = "blue";
            icon = "😐";
        } else {
            monstrebox.style.backgroundColor = "green";
            icon = "😄"
        }
        monstrebox.querySelector("p").textContent = `${nom}\n${icon}`;
    }

    tremblement();


}


function run() {
    if (life > 0 && awake) {
        life -= 1;
        log(nom+ " court (-1 life❤️)");
        displayStatus(life, money, awake);
    } else {
        log(nom+ " ne peut pas courir.");
    }
}

function fight() {
    if (life > 0 && awake) {
        life -= 3;
        log(nom+" se bat (-3 life❤️)");
        displayStatus(life, money, awake);
    } else {
        log(nom+ " ne peut pas combattre.");
    }
}

function work() {
    if (life > 0 && awake) {
        life -= 1;
        money += 2;
        log(nom + " travaille (-1 life❤️, +2 money💸)");
        displayStatus(life, money, awake);
    } else {
        log(nom+  " ne peut pas travailler.");
    }
}

function eat() {
    if (life > 0 && awake && money >= 3) {
        life += 2;
        money -= 3;
        log(nom + " mange (+2 life❤️, -3 money💸) ");
        displayStatus(life, money, awake);
    } else {
        log(nom + " ne peut pas manger.");
    }
}

function sleep() {
    if (awake) {
        awake = false;
        log(nom + " s'endort.🛏️");
        displayStatus(life, money, awake);
        setTimeout(function() {
            awake = true;
            life += 1;
            log(nom + " se réveille (+1 life❤️)");
            displayStatus(life, money, awake);
        }, temps_dormir);
    } else {
        log(nom + " est déja entrain de dormir.");
    }
}

function kill() {
    life = 0;
    money = 0;
    awake = false;
    displayStatus(life, money, awake);
    log(nom + " est mort☠️.");
}

function newLife() {
    if (life <= 0) {
        let nom_monstre = prompt("Nom de votre monstre : ")
        init(nom_monstre, 30, 30);
        awake = true;
        displayStatus(life, money, awake);

        actionbox.textContent = ""; // reset de l'action box
        log(nom +" est né !");
    } else {
        log(nom + "est toujours en vie !");
    }
}


function hasard() {
    if (life > 0){
        let actions = [run, fight, work, eat];
        let action = actions[Math.floor(Math.random() * 4)];
        action();  
    }
}

function tremblement() {
    const styleoriginal = monstrebox.style.transform;
  
    function tremble() {
        if (life < 5 && life > 0) {
            const randomX = Math.random() * 10;
            const randomY = Math.random() * 10;
            monstrebox.style.transform = "translate("+randomX+"px,"+randomY+"px)";

            setTimeout(() => {
                tremble();
            }, 50);
        } else {
            monstrebox.style.transform = styleoriginal;
        }
    }
  
    tremble();
}

window.addEventListener("load", go);

b1_newlife.addEventListener("click",newLife);
k_kill.addEventListener("click",kill)
b2_run.addEventListener("click",run);
b3_fight.addEventListener("click",fight);
b4_sleep.addEventListener("click",sleep);
b5_eat.addEventListener("click",eat);
b7_work.addEventListener("click",work);
setInterval(hasard, temps_random);
