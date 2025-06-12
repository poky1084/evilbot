# evilbot
stake.com, stake.us, primedice bot by me with ❤

# bot4stake  <br /> 
a javascript coded bot for Stake, Primedice, ()<br />
the strategy script must be coded in javascript, and not Lua script. 

# Videos: <br /> 
install extension: https://vimeo.com/954123726 <br />

# Info: <br />
Please favourite the repo in case you liked/used it. Thank you!

<b>Discord</b>: fisk_992 <br />
<b>Stake</b>: poky1084 <br />
<b>Telegram:</b>: https://t.me/poky_1084


# Use: <br />

<b>functions:</b> `resetseed('clientseed'), resetstats(), vault(amount), log('text'), start(), stop(), resetAll(), resetChart(), deleteLogs()`

!!the strategy must be in `dobet()` method, and `dobet()` must be declared as shown below!!
```javascript
nextbet = 0.00001 //in crypto format, not USD

dobet = function(){
 //strategy code
}

or:

function dobet(){
 //strategy code
}
```


<b>Plinko: </b>
```javascript
game = "plinko"
rows = 8
risk = "low"
nextbet = 0
```
<b>Keno:</b>
```javascript
game = "keno"
numbers = [1,2,3,4,5,6,7,8]
risk = "low"
nextbet = 0
```
<b>Mines:</b>
```javascript
game = "mines"
fields = [1,2,3,4,5,6,7,8]
mines = 3
nextbet = 0
```
<b>Limbo:</b>
```javascript
game = "limbo"
target = 2
nextbet = 0 
```
<b>Dice:</b>
```javascript
game = "dice"
chance = 49.5
nextbet = 0
bethigh = false
 ```
<b>Wheel:</b>
```javascript
game = "wheel"
nextbet = 0
risk = "low"
segments = 10
 ```
<b>baccarat:</b>
```javascript
game = "baccarat"
player = 0.001
banker = 0
tie = 0
 ```
<b>dragon tower:</b>
```javascript
game = "dragontower"
nextbet = 0
difficulty = "easy"
eggs = [0,1]
 ```
<b>Roulette:</b>
```javascript
game = "roulette"
chips = [{"value": "number0", "amount": 0.001},{"value": "colorBlack", "amount": 0.001}]
 ```
<b>flip:</b>
```javascript
game = "flip"
nextbet = 0
guesses = 1
 ```
<b>rock, paper, scissors:</b>
```javascript
game = "rps"
guesses = ["rock", "paper"]
nextbet = 0
 ```
<b>pump:</b>
```javascript
game = "pump"
difficulty = "easy"
pumps = 1
nextbet = 0
 ```
<b>snakes:</b>
```javascript
game = "snakes"
difficulty = "easy"
rolls = 1
nextbet = 0
 ```
<b>cases:</b>
```javascript
game = "cases"
difficulty = "easy"
nextbet = 0
 ```
<b>darts:</b>
```javascript
game = "darts"
difficulty = "easy"
nextbet = 0
 ```

<b>diamonds:</b>
```javascript
game = "diamonds"
nextbet = 0
 ```
<b>videopoker:</b>
```javascript
game = "videopoker"
nextbet = 0
 ```
<b>bluesamurai:</b>
```javascript
game = "bluesamurai"
nextbet = 0
 ```
<b>scarabspin:</b>
```javascript
game = "scarabspin"
lines = 1
nextbet = 0
 ```
<b>tomeoflife:</b>
```javascript
game = "tomeoflife"
lines = 1
nextbet = 0
 ```
<b>darts:</b>
```javascript
game = "darts"
nextbet = 0
 ```

<b>hilo:</b>
```javascript
game = "hilo"
startcard = {"rank":"A","suit":"H"}
nextbet = 0

function dobet(){
  
}  

function round(){
  currentCardRank = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
  payoutMultiplier = currentBet.state.rounds.at(-1)?.payoutMultiplier || 0;
  skippedCards = currentBet.state.rounds.filter(round => round.guess === 'skip').length;  

  if (payoutMultiplier >= 1.1) {
        return HILO_CASHOUT;
    }
    if (currentCardRank === "A") {
        return HILO_BET_HIGH;
    }
    
    if (currentCardRank === "J") {
        return HILO_BET_LOW;
    }
    
    if (currentCardRank === "Q") {
        return HILO_BET_LOW;
    }
    
    if (currentCardRank === "K") {
        return HILO_BET_LOW;
    }
    
    if (parseInt(currentCardRank) <= 10 && parseInt(currentCardRank) > 7) {
        return HILO_BET_LOW;
    } 
  
    if (parseInt(currentCardRank) === 7 && skippedCards <= 52) {
        return HILO_SKIP;
    }
    return HILO_BET_HIGH;
}
 ```
