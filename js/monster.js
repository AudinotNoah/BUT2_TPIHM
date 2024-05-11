// variables globales

var nom;
var life;
var money;
var awake = true;


var newlife = document.getElementById("b1");
var run = document.getElementById("b2");
var fight = document.getElementById("b3");
var sleep = document.getElementById("b4");
var eat = document.getElementById("b5");
var show = document.getElementById("b6");
var work = document.getElementById("b7");

var actionbox = document.getElementById("actionbox");
var statusbox = document.getElementById("status")

function init(n, l, m){
    nom = n;
    life = l;
    money = m; 
}


function showme(){
    // alert("nom : " + nom + " life : " + life + " money : " + money + " awake : " + awake);
    log("Nom : "+nom+", Life : " + life + ", Money : " + money +", Awake : "+awake);
    displayStatus(life, money, awake);
}

function go() {
    init("test", 100, 10);

    show.addEventListener("click", showme);
}

function log(message) {
    let para = document.createElement("p");
    para.textContent = message;
    actionbox.insertBefore(para, actionbox.firstChild);
}

function displayStatus(life, money, awake) {
    let estawake = "Not awake";
    if (awake === true){
        estawake = "Awake"
    }

    statusbox.innerHTML = "<li>Life : " + life + "</li><li>Money : " + "</li><li>" + estawake + "</li>";
    // statusbox.innerHTML = `<li>Life : ${life}</li><li>Money : ${money}</li><li>${awake ? 'Awake' : 'Asleep'}</li>`;
}



window.addEventListener("load", go);