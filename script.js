let wordList = ["algoritmus","programozás","adatbázis","számítógép","program","szoftver","hardver","rendszer","szerver","hálózat","internet","protokoll","weboldal","fejlesztés","kódolás","debuggolás","felhőszolgáltatás","mobilalkalmazás","mesterségesintelligencia","bigdata","blokklánc","szimuláció","adattárház","szövegszerkesztő","operációsrendszer","felhasználóifelület","grafikusfelhasználóifelület","tárolás","adatkezelés","biztonság","titkosítás","jelszóvédelem","tűzfal","vírusvédelem","hackelés","phishing","szoftverfrissítés","hardverfrissítés","periféria","billentyűzet","egér","monitor","nyomtató","processzor","memória","merevlemez","flashmeghajtó","BIOS","feladat","folyamat","szál","szinkronizáció","aszinkron","szálbiztonság","szemafór","kritikusszakasz","blokkolóhívás","interrupt","szálakközöttikommunikáció","memóriakezelés","párhuzamosprogramozás","szerializáció","deszerializáció","szerveroldali","kliensoldali","IPcím","router","switch","hub","firewall","gateway","modem","Wi-Fi","Ethernet","megosztotthálózat","vezetékeshálózat","vezetéknélkülihálózat","topológia","csomópont","csomópontihálózat","csillagtopológia","busztopológia","gyűrűtopológia","hibatűrés","teljesítmény","skálázhatóság","felhasználóiélmény","ergonómia","interfész","mobilszámítógép","tabletgép","laptop","notebook","szerverpark","virtualizáció"]

//fetch("szavak.json").then( res => res.json() ).then( data => { wordList = data; } )
let selectedWord = wordList[Math.floor(Math.random()*wordList.length)];
let currentWord = "";

selectedWord = selectedWord.toUpperCase();
let wordDiv = document.getElementById("word");
let health = document.getElementById("health")

let hp = 545;

for (let i = 0; i < selectedWord.length; i++) {
    wordDiv.innerHTML += `<div class="letter"><span></span></div>`
    currentWord += " ";
}

function letterClick(l) {
    if (selectedWord.includes(l)) {
        for (let i = 0; i < selectedWord.length; i++) {
            if (selectedWord[i] == l) {
                let elemDiv = document.querySelector(`#word > div:nth-child(${i+1})`);
                let elemSpan = document.querySelector(`#word > div:nth-child(${i+1}) > span`);

                elemDiv.classList.add("letter-active")
                elemSpan.innerHTML = l
            }
        }
    }
    else {
        hp -= 50
        health.style.width = `${hp}px`;
    }
}