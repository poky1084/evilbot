<<<<<<< HEAD
# evilbot
stake.com, stake.us, primedice bot by me with ❤

a javascript coded bot for Stake, Primedice<br />
the strategy script must be coded in javascript (JsMode), or can run Lua script too. (LuaMode) 

# Videos: <br /> 
install extension: [https://vimeo.com/1092943750](https://vimeo.com/1092943750) <br />
demo: https://www.youtube.com/watch?v=9io2MuZwfCY
# Info: <br />
Please give a Star on the repo in case you liked/used it. Thank you!

<b>Donate1:</b> https://cwallet.com/t/87SPDPGG <br />
<b>Donate2:</b> https://ko-fi.com/poky <br />

<b>Discord</b>: fisk_992 <br />
<b>Telegram:</b>: https://t.me/poky_1084


<img width="1123" height="676" alt="Screenshot 2026-01-16 110728" src="https://github.com/user-attachments/assets/4eef67cb-d36a-428c-ba40-f66edc219ad6" />



# Use: <br />

<b>functions:</b> `resetseed('clientseed'), resetstats(), vault(amount), unvault(amount, 'password'), log('text'), view(bet.id), start(), stop(), sleep(1000), resetAll(), resetChart(), deleteLogs()` <br />

<b>Variables:</b> `game = "limbo", win, currentstreak, profit, wagered, balance, previousbet, currentprofit, bets, wins, losses, losestreak, winstreak, fastmode = true` <br />
<b>lastBet vars:</b> `lastBet.Roll, lastBet.win, lastBet.amount, lastBet.payout, lastBet.payoutMultiplier, lastBet.name, lastBet.id`

Use `bet.*` variable to access betting data. eg: `bet.payoutMultiplier` or `bet.crash?.event?.multiplier` or `bet.slide?.event?.status`

<b>Play sound effect on hit, use:</b> `ding()` or `beep()`

<b>Crash game manual cashout:</b> `cashout()` in script, or use it as command in Log tab

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

<b>primedice X: </b>
```javascript
game = "primedice"
condition = "rollOutside"  // use these: "rollBetween" or "rollBetweenTwo" or "rollOutside"
target1 = 5
target2 = 24
target3 = 45
target4 = 68
nextbet = 0
```

<b>Blackjack: </b>
```javascript
game = "blackjack"
nextbet=0
basebet=nextbet
nextAction = "BLACKJACK_STAND" // can be these: "BLACKJACK_DOUBLE" or "BLACKJACK_HIT" or "BLACKJACK_SPLIT" or "BLACKJACK_INSURANCE" or "BLACKJACK_NOINSURANCE"

function dobet() {
  if(win){
      nextbet = basebet
  } 	
}

function round(){

  if (currentBet.state.dealer[0].value === 11){
    	nextAction = "BLACKJACK_NOINSURANCE"
  } else {
    	nextAction = "BLACKJACK_STAND"
  }
  if (currentBet.state.player[0].actions.includes("insurance") || currentBet.state.player[0].actions.includes("noInsurance")) {
  	 	nextAction = "BLACKJACK_STAND"
  }
  return nextAction
}
```

<b>video poker: #1 </b>
```javascript
game = "videopoker"
nextbet = 0.0
target = null
hunt1 = ["2", "2", "2", "K", "K"];
hunt2 = ["2", "2", "K", "K", "K"];

function dobet() {
    const currentHand = bet.state.playerHand.map(card => card.rank);

    const isHit = [...new Set(hunt1)].every(r => 
        currentHand.filter(card => card === r).length === hunt1.filter(card => card === r).length
    );

    const isHit2 = [...new Set(hunt2)].every(r => 
        currentHand.filter(card => card === r).length === hunt2.filter(card => card === r).length
    );

    if (isHit) {
		stop();
		beep();
    }

    if (isHit2) {
		stop();
		beep();
    }
}
```

<b>video poker: #2 </b>
```javascript
game = "videopoker"
nextbet = 0.0
target = null
hunting = [
  { 10: 2, A: 3 },
  { 10: 3, A: 2 }
]
// what pattern to hunt, it stops if these cards hit the player hand

function dobet() {

  const finalHand  = bet.state.playerHand;
  const hitLabel = checkTargetHit(finalHand, hunting);
	if (hitLabel) {
		stop();
		beep();
	}
}
```

<b>video poker: #3 </b>
```javascript
game = "videopoker"
nextbet = 0.0
target = [
  { A: 2, K: 3 },
  { A: 3, K: 2 }
]
// target = null
// set this if want to run overall optimal strategy,
// or fill card labels and how many to find { card: amount, Q: 3 }

function dobet() {

  const finalHand  = bet.state.playerHand;
  const hitLabel = checkTargetHit(finalHand, target);
	if (hitLabel) {
		stop();
		beep();
	}
	
  if(bet.payoutMultiplier >= 799){
	stop();
	beep();
  }
  
  const handresult = bet.state.handResult;
  if(handresult == "fourOfAKind"){
    stop();
    beep();
  }
}

// Possible values:
//   "royalFlush"     → 800x
//   "straightFlush"  → 60x
//   "fourOfAKind"    → 22x
//   "fullHouse"      → 9x
//   "flush"          → 6x
//   "straight"       → 4x
//   "threeOfAKind"   → 3x
//   "twoPair"        → 2x
//   "onePair"  → 1x
```

<b>moles: </b>
```javascript
game = "moles"
nextbet = 0
moles = 6
picks = [0,1,1,1,2,6]
```

<b>drill: </b>
```javascript
game = "drill"
nextbet = 0
target = 2
pick = 1
```

<b>Tarot: </b>
```javascript
game = "tarot"
difficulty = "medium"
nextbet = 0
```

<b>Chicken: </b>
```javascript
game = "chicken"
steps = 1
difficulty = "medium"
nextbet = 0
```

<b>Packs: </b>
```javascript
game = "packs"
nextbet = 0
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
nextbet = { player: 0, banker: 0.004, tie: 0}
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

function dobet(){

}

function progress(){

	bet.crash?.event?.nextRoundIn !== undefined && bet.crash?.event?.nextRoundIn !== null ?  log(bet.crash?.event?.nextRoundIn) : true
	bet.crash?.event?.status !== undefined && bet.crash?.event?.status !== null ?  log(bet.crash?.event?.status) : true
	bet.crash?.event?.multiplier !== undefined && bet.crash?.event?.multiplier !== null ?  log(bet.crash?.event?.multiplier) : true

	bet.slide?.event?.nextRoundIn !== undefined && bet.slide?.event?.nextRoundIn !== null ?  log(bet.slide?.event?.nextRoundIn) : true
	bet.slide?.event?.status !== undefined && bet.slide?.event?.status !== null ?  log(bet.slide?.event?.status) : true
	bet.slide?.event?.multiplier !== undefined && bet.slide?.event?.multiplier !== null ?  log(bet.slide?.event?.multiplier) : true
}

USE THIS>>>> cashout() function in script to manually cashout!
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

function dobet(){
    card = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"].sort(() => Math.random() - 0.5).slice(0, 1).toString();
    startcard = {"rank":card,"suit":"H"}  
    //pattern = selection.sort(() => Math.random() - 0.5).slice(0, 1)
}	

function round(){
  currentCardRank = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
  payoutMultiplier = currentBet.state.rounds.at(-1)?.payoutMultiplier || 0;
  skippedCards = currentBet.state.rounds.filter(round => round.guess === 'skip').length;	
	
    if(currentBet.state.rounds.length < pattern.length){
	 guessing = pattern[currentBet.state.rounds.length]
    } else {
         return HILO_CASHOUT;
    }

	
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
=======
**Edit a file, create a new file, and clone from Bitbucket in under 2 minutes**

When you're done, you can delete the content in this README and update the file with details for others getting started with your repository.

*We recommend that you open this README in another tab as you perform the tasks below. You can [watch our video](https://youtu.be/0ocf7u76WSo) for a full demo of all the steps in this tutorial. Open the video in a new tab to avoid leaving Bitbucket.*

---

## Edit a file

You’ll start by editing this README file to learn how to edit a file in Bitbucket.

1. Click **Source** on the left side.
2. Click the README.md link from the list of files.
3. Click the **Edit** button.
4. Delete the following text: *Delete this line to make a change to the README from Bitbucket.*
5. After making your change, click **Commit** and then **Commit** again in the dialog. The commit page will open and you’ll see the change you just made.
6. Go back to the **Source** page.

---

## Create a file

Next, you’ll add a new file to this repository.

1. Click the **New file** button at the top of the **Source** page.
2. Give the file a filename of **contributors.txt**.
3. Enter your name in the empty file space.
4. Click **Commit** and then **Commit** again in the dialog.
5. Go back to the **Source** page.

Before you move on, go ahead and explore the repository. You've already seen the **Source** page, but check out the **Commits**, **Branches**, and **Settings** pages.

---

## Clone a repository

Use these steps to clone from SourceTree, our client for using the repository command-line free. Cloning allows you to work on your files locally. If you don't yet have SourceTree, [download and install first](https://www.sourcetreeapp.com/). If you prefer to clone from the command line, see [Clone a repository](https://confluence.atlassian.com/x/4whODQ).

1. You’ll see the clone button under the **Source** heading. Click that button.
2. Now click **Check out in SourceTree**. You may need to create a SourceTree account or log in.
3. When you see the **Clone New** dialog in SourceTree, update the destination path and name if you’d like to and then click **Clone**.
4. Open the directory you just created to see your repository’s files.

Now that you're more familiar with your Bitbucket repository, go ahead and add a new file locally. You can [push your change back to Bitbucket with SourceTree](https://confluence.atlassian.com/x/iqyBMg), or you can [add, commit,](https://confluence.atlassian.com/x/8QhODQ) and [push from the command line](https://confluence.atlassian.com/x/NQ0zDQ).
>>>>>>> 2564472de019aa5f98dbb29ea486064976d06893
