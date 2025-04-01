let level = 0
let money = 0
let totalMoney = 0
let numLemonade = 0
let levelRequirement = [0,3,6]
let lemonadePrice = document.getElementById("lemonadePrice")
let levelDisplay = document.getElementById("level")
let moneyCounter = document.getElementById("moneyCounter");
let levelUpButton = document.getElementById("LevelUp")
let askMoney = document.getElementById("askForMoney")
let lemonadeStand = document.getElementById("lemonadeStand")
let lemonadeInfo = document.getElementById("lemonadeInfo")
let lemonadeCost = 20
askMoney.setAttribute("disabled", "")
lemonadeStand.setAttribute("disabled", "")

function updateMoney(){
    moneyCounter.innerText = money;
    if (money>levelRequirement[level]){
        levelUpButton.removeAttribute("disabled", "") 
    }
}
function updateInfo(element,info){
    (element).innerText = info
}
function updateCost(element,info){
    (element).innerText = info
}
function unlock(action){
    (action).removeAttribute("disabled", "")
}
function updateLevel(){
    levelDisplay.innerText = level;
}
function addMoney(amt){
    money += (amt)
    totalMoney += (amt)
    updateMoney()
}
function levelUp(){
    level+=1
    levelUpButton.setAttribute("disabled", "")
    updateLevel();
    if (level>0){
        levelUpButton.innerText = "LEVEL UP"
        unlock(askMoney)
    if (level>1){
        unlock(lemonadeStand)
    }
    }
}
levelUpButton.addEventListener("click", function(){
    levelUp();
})
askMoney.addEventListener("click", function(){
    addMoney(1)
})
lemonadeStand.addEventListener("click", function(){
    if (money>=lemonadeCost){
    numLemonade += 1
    addMoney(-lemonadeCost)
    updateInfo(lemonadeInfo,numLemonade)
    lemonadeCost = lemonadeCost + lemonadeCost*2
    updateCost(lemonadePrice,lemonadeCost)
}
})
