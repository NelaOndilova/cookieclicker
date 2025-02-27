let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");

let numberOfCookies = 0;
let cookieIncraseNumber = 1;
cookie.onclick = () => {
    numberOfCookies += cookieIncraseNumber;
    counter.innerHTML = numberOfCookies;
}

let wrapper = document.getElementById("wrapper");
let addbutton = document.getElementById("add");

addbutton.onclick = () => {
    wrapper.innerHTML += "<p>ahoj</p>";
    wrapper.innerText += "<p>ahoj</p>";
}

let box = document.getElementById("box");

box.onclick = () => {
    box.style.backgroundColor = "red";
}

let secondBox = document.getElementById("box2");

secondBox.onclick = () => {
    secondBox.innerHTML++; //++ inkrement - zveda o 1
}

let thirdBox = document.getElementById("box3")
let leftPos = 0;
let topPos = 0;
thirdBox.onclick = () => {
    leftPos++;
    //topPos = topPos + 2;
    topPos += 2;
    thirdBox.style.left = leftPos + "6px";
    thirdBox.style.top = topPos + "6px";
}

let clickUpgradeBtn = document.getElementById("clickUpgrade");
let clickUpgradeCost = 10;

clickUpgradeBtn.onclick = () => {
    if (numberOfCookies >= clickUpgradeCost) {
        numberOfCookies -= clickUpgradeCost; //odečteme cenu upgradu od sušenek
        clickUpgradeCost += 10; //zvětšíme cenu upgradu
        counter.innerHTML = numberOfCookies;
        cookieIncraseNumber++;
        clickUpgradeBtn.innerHTML = "Click upgrade (Cost: "+ clickUpgradeCost +")";
    }
}

let autoclickUpgrade = document.getElementById("autoclickUpgrade");
let autoclickUpgradeCost = 50;

autoclickUpgrade.onclick = () => {
    if (numberOfCookies >= clickUpgradeCost) {
        numberOfCookies -= clickUpgradeCost; 
        clickUpgradeCost *= 2; 
        counter.innerHTML = numberOfCookies;
        autoclickUpgrade.innerHTML = "Autoclick upgrade (Cost: "+ autoclickUpgradeCost +")";
        setInterval(() => {
            numberOfCookies++;
            counter.innerHTML = numberOfCookies;
        }, 1000);
    }
}