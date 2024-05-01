// variables globales décrivant l’état du monstre
var nom;
var life;
var money;
var awake = true;


var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");
var b4 = document.getElementById("b4");
var b5 = document.getElementById("b5");
var b6 = document.getElementById("b6");
var b7 = document.getElementById("b7");
var k = document.getElementById("k");

var action = document.getElementById("actionbox");
var status_monstre = document.getElementById("status");

function go(){
    init("Le Monstre", 100, 50);
    b6.addEventListener("click",showme)
    b2.addEventListener("click",run);
    b3.addEventListener("click",fight);
    b7.addEventListener("click",work);
    b4.addEventListener("click",sleep);
    b5.addEventListener("click",eat);
    console.log("go")
}

function init(n, l, m){
    nom = n;
    life = l;
    money = m;
}

function showme(){
    log("name : " + nom + " life : " + life + " money : "+money + " awake : " + awake);
} 

function log(message){
    msg = document.createElement("p");
    msg.textContent = message;
    console.log(msg);
    action.insertBefore(msg,action.firstChild)
}

function displayStatus(life, money, awake){
    // for (stas of status_monstre.querySelectorAll("li")){
    //     console.log(stas);
    // }
    status_monstre.innerHTML = ""

    let l = document.createElement("li");
    l.textContent = "Life : " + life;

    let m = document.createElement("li");
    m.textContent = "Money : " + money;

    let a = document.createElement("li");
    a.textContent = awake;

    status_monstre.appendChild(l);
    status_monstre.appendChild(m);
    status_monstre.appendChild(a);
    

} 

function run(){
    if (life > 0){
        if (awake === true){
            life--;
            log(nom + " court");
            displayStatus(life,money,"awake");
        }
        else {
            log("Action run impossible : "+ nom +" dort");
        }
    }
    else{
        log("Action run impossible : "+ nom +" est mort");
    }

}

function fight(){
    if (life > 3){
        if (awake === true){
            life -= 3;
            log(nom + " se bat");
            displayStatus(life,money,"awake");
        }
        else {
            log("Action fight impossible : "+ nom +" dort");
        }
    }
    else{
        if (life > 0){
            log("Action fight impossible : "+ nom +" est mort");
        }
        log("Action fight impossible : "+ nom +" pas assez de vie");
    }

}

function work(){
    if (life > 0){
        if (awake === true){
            life--;
            money += 2
            log(nom + " travaille");
            displayStatus(life,money,"awake");
        }
        else {
            log("Action run impossible : "+ nom +" dort");
        }
    }
    else{
        log("Action run impossible : "+ nom +" pas assez de vie");
    }

}

function eat(){
    if (life > 0){
        if (awake === true){
            life--;
            money += 2
            log(nom + " travaille");
            displayStatus(life,money,"awake");
        }
        else {
            log("Action run impossible : "+ nom +" dort");
        }
    }
    else{
        log("Action run impossible : "+ nom +" pas assez de vie");
    }

}

function sleep(){

}

window.addEventListener("load",go)