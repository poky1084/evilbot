# evilbot
stake.com, stake.us, primedice bot by me with ❤

a javascript coded bot for Stake, Primedice<br />
the strategy script must be coded in javascript (JsMode), or can run Lua script too. (LuaMode) 

# Videos: <br /> 
install extension: [https://vimeo.com/1092943750](https://vimeo.com/1092943750) <br />
demo: https://www.youtube.com/watch?v=mtVi5s4OnkY
# Info: <br />
Please give a Star on the repo in case you liked/used it. Thank you!

<b>Donate:</b> https://ko-fi.com/poky <br />
https://cwallet.com/t/YHT4YK3M

<b>Discord</b>: fisk_992 <br />
<b>Stake</b>: poky1084 <br />
<b>Telegram:</b>: https://t.me/poky_1084

![Screenshot 2025-06-21 191559](https://github.com/user-attachments/assets/2f7229be-e874-4ea9-b459-415c0adcf44b)



# Use: <br />

<b>functions:</b> `resetseed('clientseed'), resetstats(), vault(amount), log('text'), start(), stop(), sleep(1000), resetAll(), resetChart(), deleteLogs()` <br />

<b>Variables:</b> `game = "limbo", win, currentstreak, profit, wagered, balance, previousbet, currentprofit, bets, wins, losses, losestreak, winstreak, fastmode = true` <br />
<b>lastBet vars:</b> `lastBet.Roll, lastBet.win, lastBet.amount, lastBet.payout, lastBet.payoutMultiplier, lastBet.name`

!!the strategy must be in `dobet()` method, and `dobet()` must be declared as shown below!!
```javascript
nextbet = 0.00001 //in crypto format, not USD

dobet = function(){
 //strategy code
}

# or:

function dobet(){
 //strategy code
}
```
<b>Bars: </b>
```javascript
game = "bars"
difficulty = "easy"
tiles = [2,3,4,5,6]
nextbet = 0
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
```
Use this values, and put them in the chips variable:

ranges = {{value = "range2536",amount = 0.0001},{value = "range1324",amount = 0.0001},{value = "range0112",amount = 0.0001},{value = "range0118",amount = 0.0001},{value = "range1936",amount = 0.0001}}
parities = {{value = "parityOdd",amount = 0.0001},{value = "parityEven",amount = 0.0001}}
colors = {{value = "colorRed",amount = 0.0001},{value = "colorBlack",amount = 0.0001}}
rows = {{value = "row3",amount = 0.0001},{value = "row2",amount = 0.0001},{value = "row1",amount = 0.0001}} 
numbers = {{value = "number0",amount = 0.0001},{value = "number1",amount = 0.0001},{value = "number2",amount = 0.0001}}
 ```

<b>flip:</b>
```javascript
game = "flip"
nextbet = 0
guesses = ["tails", "heads"]
 ```
<b>rock, paper, scissors:</b>
```javascript
game = "rps"
guesses = ["rock", "paper", "scissors"]
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
<b>Crash:</b>
```javascript
game = "crash"
target = 2
nextbet = 0 
```

<b>Slide:</b>
> Use: https://www.youtube.com/watch?v=TkDPeuxEOUM <br />
```javascript
game = "slide"
nextbet = 0
target = 1.5

dobet = function(){

 if(id["identifier01"]){
    log("identifier01 won.")
 }

 if(id["identifier02"] == false){
    log("identifier02 lost.")
 }

 makebet(nextbet, target, "identifier01")
 makebet(nextbet, target, "identifier02")
 makebet(nextbet, target, "identifier03")
}
```

<b>hilo:</b>
```javascript
game = "hilo"
nextbet = 0
startcard = {"rank":"A","suit":"H"}
pattern = [5,5]
//selection = [4,5]
index = 0  

function dobet(){
    card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"].sort(() => Math.random() - 0.5).slice(0, 1).toString();
    startcard = {"rank":card,"suit":"H"}  
    //pattern = selection.sort(() => Math.random() - 0.5).slice(0, 1)
    index = 0
}	

function round(){
  currentCardRank = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
  payoutMultiplier = currentBet.state.rounds.at(-1)?.payoutMultiplier || 0;
  skippedCards = currentBet.state.rounds.filter(round => round.guess === 'skip').length;	
	
    if(index < pattern.length){
	 guessing = pattern[index]
    } else {
         return HILO_CASHOUT;
    }
    index++ 
	
    if (currentCardRank === "A" && guessing === 4) {
        return HILO_BET_LOW;
    }
    
    if (currentCardRank === "J" && guessing === 4) {
        return HILO_BET_HIGH;
    }
    
    if (currentCardRank === "Q" && guessing === 4) {
        return HILO_BET_HIGH;
    }
    
    if (currentCardRank === "K" && guessing === 4) {
        return HILO_BET_HIGH;
    }
    
    if (parseInt(currentCardRank) <= 10 && parseInt(currentCardRank) >= 7 && guessing === 4) {
        return HILO_BET_HIGH;
    } 
 
    if (parseInt(currentCardRank) < 7 && guessing === 4) {
        return HILO_BET_LOW;
    } 
   	 if (currentCardRank === "A" && guessing === 5) {
        return HILO_BET_HIGH;
    }
    
    if (currentCardRank === "J" && guessing === 5) {
        return HILO_BET_LOW;
    }
    
    if (currentCardRank === "Q" && guessing === 5) {
        return HILO_BET_LOW;
    }
    
    if (currentCardRank === "K" && guessing === 5) {
        return HILO_BET_LOW;
    }
    
    if (parseInt(currentCardRank) <= 10 && parseInt(currentCardRank) >= 7 && guessing === 5) {
        return HILO_BET_LOW;
    } 

    if (parseInt(currentCardRank) < 7 && guessing === 5) {
        return HILO_BET_HIGH;
    } 
	
    if(guessing === 2){
        return HILO_BET_EQUAL
    }

    return HILO_SKIP;
}
 ```
