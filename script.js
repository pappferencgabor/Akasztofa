let wordList = ["algoritmus", "programozás", "adatbázis", "számítógép", "program", "szoftver", "hardver", "rendszer", "szerver", "hálózat", "internet", "protokoll", "weboldal", "fejlesztés", "kódolás", "debuggolás", "felhőszolgáltatás", "mobilalkalmazás", "mesterségesintelligencia", "bigdata", "blokklánc", "szimuláció", "adattárház", "szövegszerkesztő", "operációsrendszer", "felhasználóifelület", "grafikusfelhasználóifelület", "tárolás", "adatkezelés", "biztonság", "titkosítás", "jelszóvédelem", "tűzfal", "vírusvédelem", "hackelés", "phishing", "szoftverfrissítés", "hardverfrissítés", "periféria", "billentyűzet", "egér", "monitor", "nyomtató", "processzor", "memória", "merevlemez", "flashmeghajtó", "BIOS", "feladat", "folyamat", "szál", "szinkronizáció", "aszinkron", "szálbiztonság", "szemafór", "kritikusszakasz", "blokkolóhívás", "interrupt", "szálakközöttikommunikáció", "memóriakezelés", "párhuzamosprogramozás", "szerializáció", "deszerializáció", "szerveroldali", "kliensoldali", "IPcím", "router", "switch", "hub", "firewall", "gateway", "modem", "Wi-Fi", "Ethernet", "megosztotthálózat", "vezetékeshálózat", "vezetéknélkülihálózat", "topológia", "csomópont", "csomópontihálózat", "csillagtopológia", "busztopológia", "gyűrűtopológia", "hibatűrés", "teljesítmény", "skálázhatóság", "felhasználóiélmény", "ergonómia", "interfész", "mobilszámítógép", "tabletgép", "laptop", "notebook", "szerverpark", "virtualizáció"]

//fetch("szavak.json").then( res => res.json() ).then( data => { wordList = data; } )

let wordDiv = document.getElementById("word");
let health = document.getElementById("health")
let hp;
let selectedWord;
let currentWord = "";

function generateWord() {
    let word = wordList[Math.floor(Math.random() * wordList.length)];
    let cWord = "";
    word = word.toUpperCase();

    selectedWord = word;

    hp = 550;

    for (let i = 0; i < selectedWord.length; i++) {
        if (selectedWord[i] == " " || selectedWord[i] == "-") {
            if (selectedWord[i] == " ") {
                wordDiv.innerHTML += `<div class="letter letter-active"><span> </span></div>`
            }
            if (selectedWord[i] == "-") {
                wordDiv.innerHTML += `<div class="letter letter-active"><span>-</span></div>`
            }
        }
        else {
            wordDiv.innerHTML += `<div class="letter"><span class="let"></span></div>`
        }
        cWord += " ";
    }
    currentWord = cWord;
}


function letterClick(l) {
    if (selectedWord.includes(l)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] == l) {
                let elemDiv = document.querySelector(`#word > div:nth-child(${i + 1})`);
                let elemSpan = document.querySelector(`#word > div:nth-child(${i + 1}) > span`);

                elemDiv.classList.add("letter-active")
                elemSpan.innerHTML = l
                currentWord[i] = l
            }
        }
    }
    else {
        hp -= 50;
        health.style.width = `${hp}px`;
    }
    document.getElementById(`button${l}`).classList.add("key-disabled")
    document.getElementById(`button${l}`).removeAttribute("onclick")

    if (getCurrentWord() == selectedWord) {
        alert("Kitaláltad a feladott szót!")
    }
}

function getCurrentWord() {
    let elements = Array.from(document.getElementsByClassName("let"))
    let word = "";
    
    elements.forEach(element => {
        word += element.innerHTML.toUpperCase();
    });

    return word;
}

function countdown() {
    let element = document.getElementById("countdown")
    let current = parseInt(element.innerHTML);

    if (current - 1 >= 0) {
        element.innerHTML = current - 1;
    }
    else {
        generateWord();
    }
}