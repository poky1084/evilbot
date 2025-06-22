 document.body.insertAdjacentHTML("beforebegin", `<body><div id="botWrapLicenseBox">
      <style>
        .bot-input {
          all: revert;
          padding: 2px;
          border: 1px solid #ccc;
          border-radius: 3px;
        }
        
        .btn-grad {
          all: revert;
          cursor: pointer;
          background-image: linear-gradient(to right, #ffb347 0%, #ffcc33  51%, #ffb347  100%);
          text-align: center;
          transition: 0.5s;
          padding: 3px;
          background-size: 200% auto;
          border: #ffc107;
          border-radius: 3px;
        }
        
        .btn-grad:hover {
          background-position: right center;
          text-decoration: none;
        }
        
        .btn-grad:active {
          opacity: .65;
        }
        
        .btn-grad:disabled {
          cursor: auto;
          opacity: .65;
          color: #fff;
        }

        #botLicenseAlert {
          text-align: left!important;
          color: red;
          margin-top: 5px;
        }
      </style>

      </div><div id="botWrap"><style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

#bot {
  all: revert;
  width: 1000px;
  font-family: "Courier New", monospace;
  font-size: 12px!important;
  text-align: left;
  background: #036ffc;
  color: #fff;
  line-height: 1.5!important;
  position: absolute;
  z-index: 2147483002;
  border: 0.6px solid #ccc;
  border-radius: 3px;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
}

#botHeader,
#botFooter {
  cursor: move;
  height: 20px;
  padding: 3px 5px;
}

.bot-toggle {
  cursor: pointer;
  padding: 5px;
  z-index: 2147483003;
}

#botMenu {
  padding: 3px;
}

#botMenu select,
#botMenu span input[type=number] {
  all: revert;
  background: #fff!important;
  padding: 3px 5px;
  border: 1px solid #ccc;
  border-radius: 0;
  border-radius: 3px;
}

#botMenu span input[type=number] {
  width: 86px;
}

.switch {
  position: relative;
  display: inline-block;
  width: 45px;
  height: 19px;
  background: #03c6fc;
}

.switch input { 
  width: 0;
  height: 0;
}

.slider {
  all: revert;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 3px;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  content: "";
  position: absolute;
  background: white;
  height: 13px;
  width: 13px;
  left: 3px;
  bottom: 3.5px;
  border-radius: 3px;
  -webkit-transition: .3s;
  transition: .3s;
}


input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.btn-grad {
  all: revert;
  cursor: pointer;
  text-align: center;
  transition: 0.5s;
  padding: 3px;
  background-size: 200% auto;
  border: #ffc107;
  border-radius: 3px;
  background-color: #03c6fc;
}

.btn-grad:hover {
  background-position: right center;
  text-decoration: none;
}

.btn-grad:active {
  opacity: .65;
}

.btn-grad:disabled {
  cursor: auto;
  opacity: .65;
  color: #fff;
}

.btn-control {
  padding-top: 10px!important;
  padding-bottom: 10px!important;
}

#botOpenLUAScript,
#botOpenJSScript {
  all: revert;
}

#botChart,
#botWrapHistory {
  height: 200px;
  padding: 3px;
}

#botWrapHistory {
  overflow-x: auto;
}

#botWrapHistory table {
  border-collapse: collapse;
  font-size: 11px!important;
}

#botWrapHistory table thead tr th {
  text-align: left;
  padding: 1px;
  border: 1px solid #ccc;
}

#botHistory tr {
  border-bottom: 1px solid #fff;
  color: #000!important;
}

#botHistory tr:last-child {
  border-bottom: 1px solid #ccc;
}

#botHistory tr td {
  all: revert;
  white-space: nowrap;
  padding: 1.5px;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
}

#botHistory tr td:first-child {
  border-left: 1px solid #ccc;
}

#botHistory tr td:last-child {
  border-right: 1px solid #ccc;
}

#botHistory tr td input {
  all: revert;
}

#botAdvancedMode,
#botWrapMode,
#botWrapVariables,
#botWrapFunctions,
#botWrapTips {
  overflow: scroll;
  height: 340px;
}

#botWrapVariables pre,
#botWrapFunctions pre,
#botWrapTips pre {
  all: revert;
  background: #fff;
  color: #000;
  margin: 0;
}

.botSim {
	overflow: auto;
	visibility : visible;
	grid-area: 1 / 1;
	width: 100%;
	overflow: auto
}
.code-lua {
	overflow: auto;
	visibility : hidden;
	grid-area: 1 / 1;
	width: 100%;
	overflow: auto
}
.code-js {
	visibility : visible;
	z-index: 10;
	grid-area: 1 / 1;
	overflow: auto;
	width: 100%;
}

#botWrapLog {
	visibility : hidden;
	z-index: 10;
	grid-area: 1 / 1;
	overflow: scroll;
}

#botLog li {
	font-size: 6px!important;
}

#botSimLog {
	font-size: 11px!important;
}

#botOpenScript {
  all: revert;
}

.CodeMirror {
   height: 299px;
  min-height: 299px;
}

.bot-stats,
.bot-flex-container {
    display: flex;
    align-items: stretch;
    font-weight: bold;
    font-size: 14px;
    position: relative; /* Enable absolute positioning inside */
  }

  .overlay-text {
	font-size: 30px;
    position: absolute;
    top: 10px; /* Adjust position as needed */
    left: 390px;
    color: #000; /* or white, depending on background */
    background: rgba(255, 255, 255, 0.7); /* optional background */
    padding: 4px 8px;
    border-radius: 4px;
    pointer-events: none; /* So it doesn't block clicks */
  }

.bot-stats div {
  flex-grow: 1;
  padding: 2px 32px;
}

.bot-stats div li {
  list-style: none;
}

.bot-advanced-item {
  line-height: 2;
  padding: 3px 0;
  border-bottom: 1px solid #e7e7e7;
}

.bot-advanced-item:last-child {
  border: none;
}

.bot-advanced-item input {
  all: revert;
}

.bot-advanced-item input[type=number] {
  width: 86px;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.float-left {
  float: left!important;
}

.float-right {
  float: right!important;
}

.bot-menu2 {
  display: flex;
  font-size: 11px!important;
}

.bot-menu2 span {
  padding: 3px 6px;
  text-align: center;
}

#botTabMenu,
#botControlMenu {
  display: flex; flex-wrap: wrap;
  margin-top: 3px;
}

#botTabMenu button,
#botControlMenu button {
  flex-basis: 0;
  flex-grow: 1;
  margin: 3px;
}


/**
 *
 * In this pen:
 * added stylesheets with CDN:
 *   -  //cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/codemirror.css
 *   -  //cdnjs.cloudflare.com/ajax/libs/codemirror/5.13.4/theme/material.css
 *
 */

*, *:after, *:before {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,
body {
	height: 100%;
}
html {
	text-rendering: optimizeLegibility;
	line-height: 1.5em;
	letter-spacing: .3px;
	font-family: "Poppins", sans-serif;
	-webkit-text-size-adjust: 100%;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
body {
}
html {
	font-family: "Geneva", sans-serif;
}


/* ----------
	WRAPPERS & CONTAINERS
---------- */
section {
	position: relative;
	padding: 2.5rem 0;
}
.container {
	position: relative;
	margin: auto;
	padding: 0 20px;
	width: 100%;
	max-width: 970px;
}
section:after, .container:after, .row:after {
	display: table;
	content: "";
	clear: both;
}


/* ----------
	ANHOR TAG
---------- */
a {
	cursor: pointer;
	outline: 0;
}
h1 > a,
h2 > a,
h3 > a,
h4 > a,
h5 > a,
h6 > a,
p  > a {
	color: #ed9d0a;
	text-decoration: none;
}
h1 > a:hover,
h2 > a:hover,
h3 > a:hover,
h4 > a:hover,
h5 > a:hover,
h6 > a:hover,
p  > a:hover {
	text-decoration: underline;
}


/* ----------
	TYPOGRAPHY
---------- */
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
ul {
	margin-bottom: 1rem;
	-ms-word-break: break-word;
	-ms-word-wrap: break-word;
	-webkit-word-break: break-word;
	-webkit-word-wrap: break-word;
	word-break: break-word;
	word-wrap: break-word;
}
h1:last-child,
h2:last-child,
h3:last-child,
h4:last-child,
h5:last-child,
h6:last-child,
p:last-child,
blockquote:last-child,
ul:last-child {
	margin-bottom: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
	line-height: 1.25em;
	letter-spacing: 1px;
	font-weight: 600;
}
h1:not(:first-child),
h2:not(:first-child),
h3:not(:first-child),
h4:not(:first-child),
h5:not(:first-child),
h6:not(:first-child) {
	margin-top: 1.5em;
}
h1 {
	letter-spacing: 2px;
	font-size: 1.75rem;
}
h2 {
	font-size: 1.5rem;
}
h1 strong,
h2 strong,
h3 strong,
h4 strong,
h5 strong,
h6 strong {
	font-weight: 700;
}
p {
	line-height: 1.5em;
}
ul {
	padding-left: 1.5rem;
}
hr {
	border: 0;
	border-top: 1px solid #e1e1e1;
}


/* ----------
	CODE BLOCK
---------- */
.code-container {
	display: grid;
	position: relative;
	margin-bottom: 1.5rem;
	overflow: auto;
	border-radius: 3px;
	box-shadow: 3px 3px 6px rgba(0, 0, 0, .3);
	width: 100%;
}
.code-container:last-child {
	margin-bottom: 0;
	width: 100%;
}

.btn {
	background-color: #ed9d0a;
	color: #fff;
	padding: 4px 10px;
	text-decoration: none;
	border-radius: 3px;
	box-shadow: 0 8px 6px -6px rgba(0, 0, 0, .15);
	-webkit-backface-visibility: hidden;
	-webkit-transition: 200ms -webkit-transform ease, 200ms transform ease, 200ms box-shadow ease;
			transition: 200ms -webkit-transform ease, 200ms transform ease, 200ms box-shadow ease;
}
.btn:hover {
	box-shadow: 0 6px 6px -4px rgba(0, 0, 0, .2);
	-webkit-transform: translateY(-2px);
			transform: translateY(-2px);
}
.btn.btn-left {
	float: left;
}
.btn.btn-right {
	float: right;
}


.row {
	margin-bottom: 1.5rem;
	width: 100%;
}
.row:last-child {
	margin-bottom: 0;
}

#runcmd {
	width: 30%
}

#runinput {
	width: 60%
}

.fastmode{
     display: flex;
    align-items: center;
    justify-content: flex-end; /* Aligns contents to the right inside .fastmode */
    text-align: right;
    padding: 10px;
     font-weight: bold;
	 position: absolute; /* Or use relative/other as needed */
    top: 40px;
    right: 10px;
}
a:hover {
  color: white;
  text-decoration: underline;
}
a:link {
  color: white;
  text-decoration: underline;
}

#result {
	font-size: 16px;
}

#userBal {
	font-size: 14px;
}

#botStopOnWinButton {
	font-size: 14px;
}

#botStopButton {
	font-size: 14px;
}

#botStartButton {
	font-size: 14px;
}

.loader {
  display: none;
  color: #ffffff;
  font-size: 19px;
  overflow: hidden;
  width: 1em;
  height: 1em;
  border-radius: 30%;
  transform: translateZ(0);
  animation: mltShdSpin 1.7s infinite ease, round 1.7s infinite ease;
}

@keyframes mltShdSpin {
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
    -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
     -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
     -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
     -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
     -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
    0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
}

@keyframes round {
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
}
 
   
.button-wrapper {
  position: relative;
  display: inline-block;
}

.button-wrapper .loader {
  position: absolute;
  top: 30%;
  left: 46%;
  transform: translate(-50%, -50%) rotateZ(45deg);
  z-index: 2;
  pointer-events: none; /* so the button is still clickable if needed */
}

#timerDown {
  display: inline-block;
  color: #ffffff;
  font-size: 14px;
  width: 1em;
  height: 1em;
  position: absolute;
  top: 30%;
  left: 46%;
  z-index: 2;
}
</style>
<center>
<div id="bot">
  <div id="botHeader">
    <div class="clearfix">
      <div class="float-left" style="padding-left: 5px;">
        #evilbot | stake.com | stake.us | primedice
      </div>
      <div class="float-right">
        <span class="bot-toggle" id="botToggleMinimal">▼</span>
      </div>
    </div>
  </div>
<div id="botBody"> 
  <div id="botMain">
    <div id="botMenu">
      <select id="botMenuMode" class="bot-select">
        <option value="js" selected="selected">JsMode</option>
		<option value="lua">LuaMode</option>
      </select>
      <select id="botMenuCoin" class="bot-select">
	  <option value="btc" selected="selected">btc</option>
      </select>
	  <select id="gameselect" class="gameselect">
        <option value="dice" selected="selected">dice</option>
		<option value="limbo">limbo</option>
		<option value="mines">mines</option>
		<option value="keno">keno</option>
		<option value="plinko">plinko</option>
		<option value="hilo">hilo</option>
		<option value="wheel">wheel</option>
		<option value="roulette">roulette</option>
		<option value="dragontower">dragontower</option>
		<option value="baccarat">baccarat</option>
		<option value="pump">pump</option>
		<option value="flip">flip</option>
		<option value="darts">darts</option>
		<option value="snakes">snakes</option>
		<option value="cases">cases</option>
		<option value="rps">rps</option>
		<option value="tomeoflife">tomeoflife</option>
		<option value="scarabspin">scarabspin</option>
		<option value="bluesamurai">bluesamurai</option>
		<option value="diamonds">diamonds</option>
		<option value="crash">crash</option>
		<option value="slide">slide</option>
      </select>
	   <select id="mirrors" class="mirrors">
      </select>
	  <span style="font-size: 13px;font-weight: bold;">API:</span> <input type="password" id="tokenkey" value="" style="width: 33%;color: white;border-style: solid;border-radius: 5px;border-width: 1px;" placeholder="Stake or Primedice api key here">
      
	  <span>
        Records
        <input type="number" id="botMaxRows" value="20" style="width: 40px;">
		<select id="thememod" class="thememod">
		<option value="light" >light</option>
		<option value="blue" >blue</option>
		<option value="dark" >dark</option>
		<option value="grey" >grey</option>
		<option value="green" >green</option>
		<option value="brown" >brown</option>
      </select>
      </span>
      <span id="scriptName"></span>
    </div>

    <div class="bot-menu2">
    <center>
      <span style="padding-top: 19px;">
        <button class="btn-grad" id="resetstat">ResetStats</button>
      </span>
      <span style="padding-top: 19px;">
        <button class="btn-grad" id="resetChart">ResetChart</button>
      </span>
      <span style="padding-top: 19px;">
        <button class="btn-grad" id="deleteTable">ResetHistory</button>
      </span>
      <span style="padding-top: 19px;">
        <button class="btn-grad" id="deleteLog">ResetLog</button>
      </span>
      <span style="padding-top: 19px;">
        <button class="btn-grad" id="resetsee">ResetSeed</button>
      </span>
      <span style="padding-top: 19px;">
        <button class="btn-grad" id="resetAlles">ResetAll</button>
      </span>
	  <div class="fastmode"> Fast Mode:
			<label class="switch">
				<input id="speedChange" type="checkbox"> <span class="slider"></span>
			</label>
			
		</div>
	  </center>
    </div>

    <div class="bot-stats" id="botStats">
      <div>
        <li class="clearfix">
          <span class="float-left">Time:</span>
          <span class="float-right"><span id="botTime">0:0:0:0</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">Balance:</span>
          <span class="float-right"><span id="botBalance">0.00000000</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">Wagered:</span>
          <span class="float-right">(<span id="botPercentWagered">0.00</span>x) <span id="botWagered">0.00000000</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">Profit:</span>
          <span class="float-right" id="botWrapPercentProfit">(<span id="botPercentProfit">0.00</span>%) <span id="botProfit">0.00000000</span></span>
        </li>
      </div>
      
      <div>
        <li class="clearfix">
          <span class="float-left">HighBet:</span>
          <span class="float-right"><span id="botHighBet">0.00000000</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">HighLose:</span>
          <span class="float-right"><span id="botHighLose">0.00000000</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">HighProfit:</span>
          <span class="float-right"><span id="botHighProfit">0.00000000</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">High/Low-Streak:</span>
          <span class="float-right"><span id="botHighLowStreak">0 / 0</span></span>
        </li>
      </div>

      <div style="flex-grow: 1; padding: 2px 32px;">
        <li class="clearfix">
          <span class="float-left">Bets:</span>
          <span class="float-right"><span id="botBets">0</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">Wins:</span>
          <span class="float-right"><span id="botWins">0</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">Losses:</span>
          <span class="float-right"><span id="botLosses">0</span></span>
        </li>
        <li class="clearfix">
          <span class="float-left">CurrentStreak:</span>
          <span class="float-right"><span id="botCurrentStreak">0</span></span>
        </li>
      </div>
    </div>

    <div class="bot-flex-container" id="botWrapControl">
	  
      <div style="flex-grow: 1; width: 50%;">
        <div id="chartContainer" style="height: 195px; width:100%;"></div>

        <div id="botWrapHistory">
          <table>
            <thead>
              <tr>
                <th>Bets</th>
                <th>Amount</th>
                <th>High</th>
                <th>TargetChance</th>
                <th>RollChance</th>
                <th>Profit</th>
				<th>Payout</th>
                <th>TargetNumber</th>
                <th>RollNumber</th>
                <th>Game</th>
                <th>BetID</th>
              </tr>
            </thead>
            <tbody id="botHistory"></tbody>
          </table>
        </div>
      </div>

      <div style="flex-grow: 1; width: 50%; padding-left: 5px;">
        <div id="botTabMenu">
          <button class="btn-grad" id="botShowMode"  >Code</button>
          <button class="btn-grad" id="botShowLog" >Log</button>
		  <button class="btn-grad" id="botShowSim" >Sim (dice)</button>
        </div>

        <div>
          <div id="botWrapMode">
            <div id="botLUAMode">
              <div style="padding: 5px 2px 5px">
                <button class="btn-grad" id="botSaveScriptButton">Save</button>
                <input style="margin: 0 3px;" type="file" id="botOpenScript" accept=".txt, .js, .lua">
              </div>
<div class="code-container">



<div class="code-js">
<textarea id="jscode">chance=49.5
bethigh=true
nextbet=0.00000000
basebet=nextbet

dobet = function() {
  if (win) {
    nextbet=basebet
  } else {
    nextbet=previousbet*2
  }
}</textarea></div>
<div class="code-lua">
	<textarea id="luacode">chance=49.5
bethigh=true
basebet=0.00000000
nextbet=basebet

function dobet()
  if (win) then
    nextbet=basebet
  else
    nextbet=previousbet*2
  end
end</textarea></div>
     

          <div class="botSim">
			ServerSeed:<input id="serverseed" type="text" style="color:black; background:white;"></br>
            ClientSeed:<input id="clientseed" type="text" style="color:black; background:white;"></br>
			Nonce:<input id="nonce" type="text" value="1" style="color:black; background:white;"></br>
			<button id="runsim" type="button">Simulate</button>
			<button id="stopsim" type="button">Stop</button>
			<textarea id="botSimLog" style="width: 100%; height: 80%; color:white; background:black;"></textarea>
          </div>
     

          <div id="botWrapLog">
            <textarea id="botLog" style="width: 100%; height: 262px; font-size: 11px; color:white; background:black;"></textarea>
			<button class="btn-grad" id="runcmd" type="button">Command</button><input id="runinput" type="text" style="background:white;color:black">
          </div>
 </div>   
	</div>
          </div>



 
	</div>
          </div>
          <div id="botWrapVariables" style="display: none;">
            <pre>chance : % win chance in next game
plinkoRow : Plinko rows, only for plinko game, some site not have
plinkoRisk : risk level for plinko game (low, medium, high)
bethigh : Bet side in next game (true is over/above, false is under/below)
nextbet : Amount in next game
lastBet.amount, previousbet : Amount in previous game
lastBet.chance : % win chance in previous game
lastBet.roll : % roll chance in previous game
lastBet.target : Target number in previous game (some sites have)
lastBet.result : Result number in previous game (some sites have)
lastBet.profit, currentprofit : Profit in previous game
lastBet.nonce : Current seed nonce
lastBet.id : Bet ID in previous game
currency : Currency to play (some site not work)
balance : Current balance
profit : Session profit
wagered : Session wagered
win : State in previous game (true is win, false is lose)
bets : Bet count
wins : Win count
winstreak  : Winning streak
losses : Lose count
losestreak : Losing streak
currentstreak : Current streak (smaller 0 is losing streak and vice versa)
partialprofit : partialprofit (same in other dicebot)
scriptname : Name of script u use</pre>
          </div>

          <div id="botWrapFunctions" style="display: none;">
<pre>dobet() : Main function for betting
stop() : Stop betting
resume() : Resume betting with current params
resetseed() : Reset fairness
resetstats() : Reset statistics
resetchart() : Reset chart
resethistory() : Reset history
resetlog() : Reset log
resetall() : Reset time, statistics, chart, history, log
checkbalance() : Check actual balance
ching() : Alert with sound
log(message) : Write a message in Log area
sleep(sec) : Pause betting system with sec
resetpartialprofit() : Reset partialprofit</pre>
          </div>

          <div id="botWrapTips" style="display: none;">
            <pre>Click ▼ or ▲ on to see something change
Disable chart, history, log to have best performance
Hold top or bottom area to move the bot around</pre>
          </div>
        </div>

        <div id="botControlMenu">
          <button id="botStartButton" class="btn-grad btn-control fontbigger" >Start</button>
          <button id="botStopButton" class="btn-grad btn-control fontbigger" >Stop</button>
         <div class="button-wrapper">
			<button id="result" class="btn-grad btn-control fontbigger" style="width:250px;height:45px;background-color:#03A8FC;color:white;"></button>
			<span class="loader"></span>
			<span id="timerDown"></span>
		  </div>
          <button id="botStopOnWinButton" disabled="disabled" class="btn-grad btn-control fontbigger" >StopOnWin</button>
          <button class="btn-grad btn-control fontbigger" id="userBal">CheckBalance</button>
        </div>
      </div>
	  </div>
	   <div id="botFooter">
    <div class="clearfix">
      <div id="infobar" class="float-left" style="padding-left: 5px;color:white"> 
        <a href="https://github.com/poky1084" target="_blank" rel="noopener noreferrer">github.com/poky1084</a> | Discord: fisk_992 | Telegram: <a href="https://t.me/poky_1084" target="_blank" rel="noopener noreferrer">https://t.me/poky_1084</a>  
      </div>
      <div id="infospeed" class="float-right" style="color:white">
        <span id="botSpeed" style="color:white">0</span>
        <span class="bot-toggle" id="botToggleHideControlBot" >▲</span>
      </div>
    </div>
  </div>
    </div>
</center>
</body>`)
 function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}



function addCss(src, cb) {
    var s = document.createElement('link');
    s.rel = 'stylesheet';
    s.href = src;
    s.onload = cb;
    document.head.appendChild(s);
}

function addJs(src, cb) {
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = cb;
    document.head.appendChild(s);
}


addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/codemirror.min.css', () => {})
addCss('https://cdnjs.cloudflare.com/ajax/libs/codemirror/6.65.7/theme/darcula.min.css', () => {})



var tokenapi = "";
var currency = null;
var target_multi = 1.01;
var basebet = 0;
var amount = basebet;
var running = true;
var nextbet = 0;
var win = false;

var bethigh = false;
var chance = 49.5
var game = "dice";

var losestreak = 0;
var winstreak  = 0;
var highest_streak = [0];
var lowest_streak = [0];
var current_balance = 0;
var balance = 0;
var betcount = 0;
var bets = 0
var wins = 0;
var losses = 0;
var wagered = 0;
var profit_total = 0;
var highest_profit = [0];
var lowest_profit = [0];
var highest_bet = [0];
var currentstreak = 0;
var profit = 0;
var previousbet = 0;
var currentprofit = 0;
var current_profit = 0;

var lastBet = {'amount': 0, 'win': false, 'Roll': 0, 'payoutMultiplier': 0, 'chance': 0, 'target': 0, 'payout': 0, 'percent': 0, 'targetNumber': 0, 'name': null}

var dps = []
var chart = ''
var color = "red"

var started_bal = 0;

var condition = "below";

serverSeed = "";
clientSeed = "";
nonce = 0;
simrunning = false;
balance_sim = 0;
target_sim = 0;
condition_sim = "above";
bet_sim = 0

var chartcolor = "#000"
//let opensocket = []

var sendDate = (new Date()).getTime();
var errorgame = false
//var sleep = 0
var htmlEditor = ''
var htmlEditor2 = ''
var fastmode = false;
var startMS = performance.now()
let mines = 1
let fields = [1,2,3]
let risk = "low"
let difficulty = "easy"
let numbers = [1,2,3,4,5,6,7,8,9]
let rows = 8
let segments = 10
let chips = [{"value":"colorBlack", "amount":0.0001}]
let banker = 0
let player = 0
let tie = 0
let eggs = [0]
let pumps = 1
let lines = 1
let guesses = 1
let rolls = 1
let target = 1.01
let samuraiskip = false
let spinType = "complete"
let guessed = "skip"
let hiloguess = null
let cards = []
let startcard = {}
let pattern = []
let patternlist = []
let HILO_BET_EQUAL = 2
let HILO_SKIP = 7
let HILO_BET_HIGH = 5
let HILO_BET_LOW = 4
let HILO_CASHOUT = 3
let currentBet = null
let cashout_done = false
let ms = 0
let sleeptime = 0
let timeoutClear = null
var timeouts = [];
var measures = [];
var socketstart = [];

var stopped = true;
var bet_found = false;
var run_clicked = false;
var bet_placed = false;
var starting_done = false;
var cashedoutauto = false;
var bet_has_been_made = false;
var dobet_run = false;
var crash_bet_placed = false;
var slide_bet_placed = false;
var crash_game_ran = false;
var slide_game_ran = false;
var make_slide_bet = false;
dobet = function(){}
var gamelist = {}
var makecount = 0
var id = {}
var betidentifier = "identity01"
var betlist = []
var finished_round = false
var mirror = "stake.ac"


let websocket = null;
let reconnectTimeout = null;
let isReconnecting = false;
let opensocket = [];
let pingSent = [];
let connectObj = [];
let connectionTimeout = [];

const reconnectDelay = 10000;
let pingInterval = null;

function addBot(){

/*var svelt = document.getElementById("svelte");
if(svelt != undefined){
	//svelt.remove();
}*/

if (localStorage.getItem("mirror") != null) {
	mirror = window.location.host
	localStorage.setItem("mirror", mirror);
	var selectMirror = document.getElementById('mirrors');
	selectMirror.innerHTML = "";
	var opt1 = document.createElement('option');
	opt1.value = mirror;
    opt1.innerHTML = mirror;
    selectMirror.appendChild(opt1);
} else {
	mirror = window.location.host
	localStorage.setItem("mirror", mirror);
	var selectMirror = document.getElementById('mirrors');
	selectMirror.innerHTML = "";
	var opt1 = document.createElement('option');
	opt1.value = mirror;
    opt1.innerHTML = mirror;
    selectMirror.appendChild(opt1);
}

if(getCookie("session") != undefined){
	if(localStorage.getItem("apitoken") != null && localStorage.getItem("apitoken") != ""){
		document.getElementById("tokenkey").value = localStorage.getItem("apitoken");
		tokenapi = localStorage.getItem("apitoken");
	} else {
	tokenapi = getCookie("session"); 
	document.getElementById("tokenkey").value = tokenapi;
	localStorage.setItem("apitoken", tokenapi);
	}
} else {
	if(localStorage.getItem("apitoken") != null && localStorage.getItem("apitoken") != ""){
		document.getElementById("tokenkey").value = localStorage.getItem("apitoken");
		tokenapi = localStorage.getItem("apitoken");
	}
}


initUser();			
//loadLua();	
resetChart();
startSocket();

htmlEditor = CodeMirror.fromTextArea(document.getElementById("luacode"), {
	lineNumbers: true,
	mode: 'lua',
	// theme: 'default',
});

htmlEditor2 = CodeMirror.fromTextArea(document.getElementById("jscode"), {
	lineNumbers: true,
	mode: 'javascript',
	// theme: 'default',
});

if(localStorage.getItem("jscode") != null){
	htmlEditor2.setValue(localStorage.getItem("jscode"));
} else {
	htmlEditor2.setValue(`chance=49.5
bethigh=true
nextbet=0.00000000
basebet=nextbet

dobet = function() {
  if (win) {
    nextbet=basebet
  } else {
    nextbet=previousbet*2
  }
}`);
	localStorage.setItem("jscode", htmlEditor2.getValue());
}

setTimeout(() => htmlEditor2.refresh(), 300);
setTimeout(() => htmlEditor.refresh(), 300);

if(localStorage.getItem("luacode") != null){
	htmlEditor.setValue(localStorage.getItem("luacode"));
} 


if (localStorage.getItem("thememod") != null) {
	document.getElementById("thememod").value = localStorage.getItem("thememod");
	var thememod = localStorage.getItem("thememod");
	var themesel = document.getElementById('bot')
	var simtheme = document.getElementById('botSimLog')
	var logtheme = document.getElementById('botLog')
	var keytheme = document.getElementById('tokenkey')
	var infobar = document.getElementById('infobar')
	var infospeed = document.getElementById('infospeed')
	var infoms = document.getElementById("botSpeed")
	//var buttonCss = document.getElementsByClassName("btn-grad")[0]
	var botMenuMod = document.getElementById("botMenuMode")
	var botMenuC = document.getElementById("botMenuCoin")
	var gameselectVal = document.getElementById("gameselect")
	var mirrorsVal = document.getElementById("mirrors")
	var botMaxRow = document.getElementById("botMaxRows")
	var thememod2 = document.getElementById("thememod")
	var fonter = document.getElementsByClassName("fontbigger")
	var fontResult = document.getElementById("result")
	var btnColor = document.getElementsByClassName("btn-grad")
	var swColor = document.getElementsByClassName("switch")
	
	for (const element of fonter) {
		element.style.fontSize = "15px"
	}
	fontResult.style.fontSize  = "20px"

	
	botMenuMod.style.color = "black"
	botMenuC.style.color = "black"
	gameselectVal.style.color = "black"
	mirrorsVal.style.color = "black"
	botMaxRow.style.color = "black"
	thememod2.style.color = "black"
	
	themesel.style.color = "white"
	themesel.style.background = "#036ffc"
	simtheme.style.color = "white"
	simtheme.style.background = "#036ffc"
	logtheme.style.color = "white"
	logtheme.style.background = "#036ffc"
	keytheme.style.color = "white"
	keytheme.style.background = "#036ffc"
	infospeed.style.color = "white"
	infospeed.style.background = "#036ffc"
	infobar.style.color = "white"
	infobar.style.background = "#036ffc"
	infoms.style.color = "white"
	infoms.style.background = "#036ffc"
	
	if(thememod == 'brown'){
		themesel.style.color = "white"
		themesel.style.background = "#452a06"
		simtheme.style.color = "white"
		simtheme.style.background = "#452a06"
		logtheme.style.color = "white"
		logtheme.style.background = "#452a06"
		keytheme.style.color = "white"
		keytheme.style.background = "#452a06"
		infospeed.style.color = "white"
		infospeed.style.background = "#452a06"
		infobar.style.color = "white"
		infobar.style.background = "#452a06"
		infoms.style.color = "white"
		infoms.style.background = "#452a06"
		for (const element1 of btnColor) {
		element1.style.background = "#693f04"
		}
		for (const element2 of swColor) {
		element2.style.background = "#693f04"
		}
		chartcolor = "#000"
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
	if(thememod == 'green'){
		themesel.style.color = "white"
		themesel.style.background = "#0e6602"
		simtheme.style.color = "white"
		simtheme.style.background = "#0e6602"
		logtheme.style.color = "white"
		logtheme.style.background = "#0e6602"
		keytheme.style.color = "white"
		keytheme.style.background = "#0e6602"
		infospeed.style.color = "white"
		infospeed.style.background = "#0e6602"
		infobar.style.color = "white"
		infobar.style.background = "#0e6602"
		infoms.style.color = "white"
		infoms.style.background = "#0e6602"
		for (const element1 of btnColor) {
		element1.style.background = "#18a805"
		}
		for (const element2 of swColor) {
		element2.style.background = "#18a805"
		}
		chartcolor = "#000"
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
	if(thememod == 'grey'){
		themesel.style.color = "white"
		themesel.style.background = "#707371"
		simtheme.style.color = "white"
		simtheme.style.background = "#707371"
		logtheme.style.color = "white"
		logtheme.style.background = "#707371"
		keytheme.style.color = "white"
		keytheme.style.background = "#707371"
		infospeed.style.color = "white"
		infospeed.style.background = "#707371"
		infobar.style.color = "white"
		infobar.style.background = "#707371"
		infoms.style.color = "white"
		infoms.style.background = "#707371"
		for (const element1 of btnColor) {
		element1.style.background = "#4f4e4e"
		}
		for (const element2 of swColor) {
		element2.style.background = "#4f4e4e"
		}
		chartcolor = "#000"
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
	if(thememod == 'dark'){
		themesel.style.color = "white"
		themesel.style.background = "black"
		simtheme.style.color = "white"
		simtheme.style.background = "black"
		logtheme.style.color = "white"
		logtheme.style.background = "black"
		keytheme.style.color = "white"
		keytheme.style.background = "black"
		infospeed.style.color = "white"
		infospeed.style.background = "black"
		infobar.style.color = "white"
		infobar.style.background = "black"
		infoms.style.color = "white"
		infoms.style.background = "black"
		for (const element1 of btnColor) {
		element1.style.background = "#696868"
		}
		for (const element2 of swColor) {
		element2.style.background = "#696868"
		}
		chartcolor = "#000"
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
	if(thememod == 'light'){
		themesel.style.color = "black"
		themesel.style.background = "white"
		simtheme.style.color = "black"
		simtheme.style.background = "white"
		logtheme.style.color = "black"
		logtheme.style.background = "white"
		keytheme.style.color = "black"
		keytheme.style.background = "white"
		infospeed.style.color = "black"
		infospeed.style.background = "white"
		infobar.style.color = "black"
		infobar.style.background = "white"
		infoms.style.color = "black"
		infoms.style.background = "white"
		chartcolor = "#fff"
		for (const element1 of btnColor) {
		element1.style.background = "#03c6fc"
		}
		for (const element2 of swColor) {
		element2.style.background = "#03c6fc"
		}
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "black";  
			}
		} 
		
	}
	
	if(thememod == 'blue'){
		themesel.style.color = "white"
		themesel.style.background = "#036ffc"
		simtheme.style.color = "white"
		simtheme.style.background = "#036ffc"
		logtheme.style.color = "white"
		logtheme.style.background = "#036ffc"
		keytheme.style.color = "white"
		keytheme.style.background = "#036ffc"
		infospeed.style.color = "white"
		infospeed.style.background = "#036ffc"
		infobar.style.color = "white"
		infobar.style.background = "#036ffc"
		infoms.style.color = "white"
		infoms.style.background = "#036ffc"
		chartcolor = "#036ffc"
		for (const element1 of btnColor) {
		element1.style.background = "#03c6fc"
		}
		for (const element2 of swColor) {
		element2.style.background = "#03c6fc"
		}
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}	
	
} else {
	changeTheme();
}

htmlEditor.on("change", function (e) {
	localStorage.setItem("luacode", e.getValue());
});
htmlEditor2.on("change", function (e) {
	localStorage.setItem("jscode", e.getValue());
});



}
const toggleBtn = document.getElementById("botToggleHideControlBot");
const toggleBtn1 = document.getElementById("botToggleMinimal");
const botBody = document.getElementById("botBody");


toggleBtn.addEventListener("click", () => {
  const isHidden = botBody.style.display === "none";
  botBody.style.display = isHidden ? "block" : "none";
  toggleBtn.textContent = isHidden ? "▼" : "▲";
});

toggleBtn1.addEventListener("click", () => {
  const isHidden = botBody.style.display === "none";
  botBody.style.display = isHidden ? "block" : "none";
  toggleBtn1.textContent = isHidden ? "▼" : "▲";
});

/*
const bot1 = document.getElementById("bot");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

bot1.style.position = "absolute"; // Make sure it's positionable

bot1.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - bot.offsetLeft;
  offsetY = e.clientY - bot.offsetTop;
  bot.style.zIndex = 9999; // bring to front
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    bot1.style.left = e.clientX - offsetX + "px";
    bot1.style.top = e.clientY - offsetY + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});
*/

function sleep(ms){
	sleeptime = ms || 0
}

function sleepfor (time) {
	timeouts = [];
  return new Promise((resolve) => timeouts.push(setTimeout(resolve, time)));
}

function countTime() {
	startTime = new Date()
    setInterval(() => {
	if(running && errorgame == false){
        playTime = (new Date().getTime()) - startTime;
        playDays = Math.floor(playTime / (1e3 * 6e1 * 6e1 * 24));
        playHours = Math.floor((playTime % (1e3 * 6e1 * 6e1 * 24)) / (1e3 * 6e1 * 6e1));
        playMinutes = Math.floor((playTime % (1e3 * 6e1 * 6e1)) / (1e3 * 6e1));
        playSeconds = Math.floor((playTime % (1e3 * 6e1)) / 1e3);
        $('#botTime').html(`${playDays}:${playHours}:${playMinutes}:${playSeconds}`);
		}
    }, 1e3)
}

function deleteTable(){
		document.getElementById("botHistory").innerHTML = "";
}

if(localStorage.getItem("modecode") != null){
	//document.getElementById("botMenuMode").options.selectedIndex = parseInt(localStorage.getItem("modecode"));
	//showOnChange(true);
} 


function makebet(n, y, betidentifier){
	if(game == "slide"){
		makecount++;
		betlist.push([n, y, betidentifier])
		
	}
}
function dataslide(json, betidentifier){
	if(json.data.hasOwnProperty("multiplayerSlideBet")){
		//console.log(json.data.multiplayerSlideBet.id)
		gamelist[json.data.multiplayerSlideBet.id] = betidentifier
		log("Slide bet placed. ID:" + betidentifier + " | amount: " + nextbet.toFixed(8) + " | target: " + target.toFixed(2))
		slide_bet_placed = true;
		if(json.data.multiplayerCrashBet.hasOwnProperty("slideResult")){
			if(json.data.multiplayerCrashBet.slideResult == "pending"){
					slide_bet_placed = true;	
										
			}
		}
	}
}


function datacrash(json){
	if(json.data.hasOwnProperty("multiplayerCrashBet")){
		
		if(json.data.multiplayerCrashBet.hasOwnProperty("result")){
			if(json.data.multiplayerCrashBet.result == "pending"){
				crash_bet_placed = true;
				cbamount = json.data.multiplayerCrashBet.amount
				cbtarget = json.data.multiplayerCrashBet.cashoutAt
			log("Crash bet placed | Amount: " + cbamount.toFixed(8) + " | Target: " + cbtarget.toFixed(2))
				
			}
		}
	}
}



function crashbet(betsize, target_multi){
	
	//socketstart.push(setTimeout(() => {startSocket()}, 15000))
	
	
	var body = {
		variables:{
        "cashoutAt": target_multi,
        "amount": betsize,
        "currency": currency
		},
		query:"mutation MultiplayerCrashBet($amount: Float!, $currency: CurrencyEnum!, $cashoutAt: Float!) {\n  multiplayerCrashBet(amount: $amount, currency: $currency, cashoutAt: $cashoutAt) {\n    ...MultiplayerCrashBet\n    user {\n      id\n      activeCrashBet {\n        ...MultiplayerCrashBet\n      }\n    }\n  }\n}\n\nfragment MultiplayerCrashBet on MultiplayerCrashBet {\n  id\n  user {\n    id\n    name\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n}\n"		}
		
	fetch('https://' +  mirror + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => datacrash(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				//crashbet(betsize, target_multi)							
			}, "2000");
			
		}
	});
	
}

function slidebet(betsize, slideat, betidentifier){
	//socketstart.push(setTimeout(() => {startSocket()}, 15000))
	
	var body = {
		variables:{
        "identifier": randomString(21),
        "cashoutAt": slideat,
        "amount": betsize,
        "currency": currency
		},
		query:"mutation MultiplayerSlideBet($amount: Float!, $currency: CurrencyEnum!, $cashoutAt: Float!, $identifier: String!) {\n  multiplayerSlideBet(\n    amount: $amount\n    currency: $currency\n    cashoutAt: $cashoutAt\n    identifier: $identifier\n  ) {\n    __typename\n    ...MultiplayerSlideBet\n    user {\n      id\n      activeSlideBet {\n        ...MultiplayerSlideBet\n      }\n    }\n  }\n}\n\nfragment MultiplayerSlideBet on MultiplayerSlideBet {\n  id\n  user {\n    id\n    name\n    preferenceHideBets\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  slideResult: result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n  active\n  createdAt\n}\n"		}
		
	
	fetch('https://' +  mirror + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => dataslide(json, betidentifier))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				//slidebet(betsize, target_multi)							
			}, "2000");
			
		}
	});
	
}


function resetseed(e){

 var client = e;
 if(client == undefined){
	client = randomString(10);
 }
var body = {
		operationName:"RotateSeedPair",
		variables:{
        "seed": client
		},
		query:"mutation RotateSeedPair($seed: String!) {\n  rotateSeedPair(seed: $seed) {\n    clientSeed {\n      user {\n        id\n        activeClientSeed {\n          id\n          seed\n          __typename\n        }\n        activeServerSeed {\n          id\n          nonce\n          seedHash\n          nextSeedHash\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
		
	
	fetch('https://' + mirror + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outseed(json))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}


function outseed(json){
	if(json.errors != undefined){
		log(json.errors[0].errorType);
	} else {
		log("Seed has been reset.")
	}

}

function toFixedNo(num, fixed) {
    var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
    return num.toString().match(re)[0];
}

function randomString(length) {
	var chars = '_-0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
	var result = '';
	for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
}

function sLeep(n){
    var now = new Date().getTime();
    while(new Date().getTime() < now + n){ /* do nothing */ };
    //console.log("betdelay: " +n+ " ms");  
}

function isHiLow(lastCard) {
    let result = "1";
    try {
        const strArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        const index = strArray.indexOf(lastCard);
        if (index === -1) {
            throw new Error("Invalid card");
        }

        const num1 = numArray[index];
        const num2 = numArray[6]; // 7 is the middle value

        if (num1 > num2) {
            result = 0;
        } else if (num1 < num2) {
            result = 1;
        }
        // If num1 === num2, result stays "1" as per original logic
    } catch (e) {
        // silently fail like in the C# code
    }
    return result;
}

function showOnChange(e) {
	var elem = document.getElementById("botMenuMode");
	var value = document.getElementById("botMenuMode").value;
	if(value === "lua")
	{
		document.getElementsByClassName('code-lua')[0].style.visibility  = "visible";
		document.getElementsByClassName('code-js')[0].style.visibility  = "hidden";
	}
	else if(value === "js")
	{
		document.getElementsByClassName('code-lua')[0].style.visibility  = "hidden";
		document.getElementsByClassName('code-js')[0].style.visibility  = "visible";
	}
	document.getElementById('botWrapLog').style.visibility  = "hidden";
	document.getElementsByClassName('botSim')[0].style.visibility = "hidden";
 }




if(localStorage.getItem("clientseed") != null){
	document.getElementById("clientseed").value = localStorage.getItem("clientseed");
	serverSeed = localStorage.getItem("clientseed");
} 

if(localStorage.getItem("serverseed") != null){
	document.getElementById("serverseed").value = localStorage.getItem("serverseed");
	serverSeed = localStorage.getItem("serverseed");
} 

const serverHandler = function(e) {
  localStorage.setItem("serverseed", e.target.value);
  serverSeed = e.target.value;
}

seedchange = document.getElementById("serverseed");
seedchange.addEventListener('input', serverHandler);


const clientHandler = function(e) {
  localStorage.setItem("clientseed", e.target.value);
  serverSeed = e.target.value;
}

clientchange = document.getElementById("clientseed");
clientchange.addEventListener('input', clientHandler);


const inputHandler = function(e) {
  localStorage.setItem("apitoken", e.target.value);
  tokenapi = e.target.value;
	initUser()
	startSocket();
}

const inputHandler2 = function(e) {
	var selectMirror = document.getElementById('mirrors');
	selectMirror.innerHTML = "";
	var opt1 = document.createElement('option');
	opt1.value = mirror;
    opt1.innerHTML = mirror;
    selectMirror.appendChild(opt1);
	var input_mirror = document.getElementById('mirrors').value;;
	localStorage.setItem("mirror", input_mirror);
	mirror = input_mirror;
	if (localStorage.getItem("currenc") != null) {
		document.getElementById("botMenuCoin").value = localStorage.getItem("currenc");
	}
	initUser()
	//startSocket();
}

const inputHandler3 = function(e) {
	var curry = document.getElementById('botMenuCoin').value;
	localStorage.setItem("currenc", curry);
	currency = curry;
	userBalances();
	//startSocket();
}

const inputHandler4 = function(e) {
	finished_round = true
	var games = document.getElementById('gameselect').value;
	localStorage.setItem("gameselect", document.getElementById('gameselect').value);
	game = document.getElementById('gameselect').value;
	document.getElementById("result").innerHTML = ""
	const loader1 = document.querySelector('.loader');
	loader1.style.display = 'none';
	//fengari.load('game=undefined')()

}

const inputHandler5 = function(e) {
	//var menumode = document.getElementById('botMenuMode').value;
	localStorage.setItem("menumode", document.getElementById('botMenuMode').value);
	var elem = document.getElementById("botMenuMode");
	var value = document.getElementById("botMenuMode").value;
	if(value === "lua")
	{
		document.getElementsByClassName('code-lua')[0].style.visibility  = "visible";
		document.getElementsByClassName('code-js')[0].style.visibility  = "hidden";
	}
	else if(value === "js")
	{
		document.getElementsByClassName('code-lua')[0].style.visibility  = "hidden";
		document.getElementsByClassName('code-js')[0].style.visibility  = "visible";
	}
	document.getElementById('botWrapLog').style.visibility  = "hidden";
	document.getElementsByClassName('botSim')[0].style.visibility = "hidden";
	
}

const inputHandler6 = function(e) {
	changeTheme();

}

function changeTheme(){
	var thememod = document.getElementById('thememod').value;
	localStorage.setItem("thememod", thememod);
	var themesel = document.getElementById('bot')
	var simtheme = document.getElementById('botSimLog')
	var logtheme = document.getElementById('botLog')
	var keytheme = document.getElementById('tokenkey')
	var infobar = document.getElementById('infobar')
	var infospeed = document.getElementById('infospeed')
	var infoms = document.getElementById("botSpeed")
	//var buttonCss = document.getElementsByClassName("btn-grad")[0]
	var botMenuMod = document.getElementById("botMenuMode")
	var botMenuC = document.getElementById("botMenuCoin")
	var gameselectVal = document.getElementById("gameselect")
	var mirrorsVal = document.getElementById("mirrors")
	var botMaxRow = document.getElementById("botMaxRows")
	var thememod2 = document.getElementById("thememod")
	var fonter = document.getElementsByClassName("fontbigger")
	var fontResult = document.getElementById("result")
	var btnColor = document.getElementsByClassName("btn-grad")
	var swColor = document.getElementsByClassName("switch")
	
	for (const element of fonter) {
		element.style.fontSize = "15px"
	}
	fontResult.style.fontSize  = "20px"

	
	botMenuMod.style.color = "black"
	botMenuC.style.color = "black"
	gameselectVal.style.color = "black"
	mirrorsVal.style.color = "black"
	botMaxRow.style.color = "black"
	thememod2.style.color = "black"
	
	themesel.style.color = "white"
	themesel.style.background = "#036ffc"
	simtheme.style.color = "white"
	simtheme.style.background = "#036ffc"
	logtheme.style.color = "white"
	logtheme.style.background = "#036ffc"
	keytheme.style.color = "white"
	keytheme.style.background = "#036ffc"
	infospeed.style.color = "white"
	infospeed.style.background = "#036ffc"
	infobar.style.color = "white"
	infobar.style.background = "#036ffc"
	infoms.style.color = "white"
	infoms.style.background = "#036ffc"
	
	if(thememod == 'brown'){
		themesel.style.color = "white"
		themesel.style.background = "#452a06"
		simtheme.style.color = "white"
		simtheme.style.background = "#452a06"
		logtheme.style.color = "white"
		logtheme.style.background = "#452a06"
		keytheme.style.color = "white"
		keytheme.style.background = "#452a06"
		infospeed.style.color = "white"
		infospeed.style.background = "#452a06"
		infobar.style.color = "white"
		infobar.style.background = "#452a06"
		infoms.style.color = "white"
		infoms.style.background = "#452a06"
		for (const element1 of btnColor) {
		element1.style.background = "#693f04"
		}
		for (const element2 of swColor) {
		element2.style.background = "#693f04"
		}
		chartcolor = "#000"
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
	if(thememod == 'green'){
		themesel.style.color = "white"
		themesel.style.background = "#0e6602"
		simtheme.style.color = "white"
		simtheme.style.background = "#0e6602"
		logtheme.style.color = "white"
		logtheme.style.background = "#0e6602"
		keytheme.style.color = "white"
		keytheme.style.background = "#0e6602"
		infospeed.style.color = "white"
		infospeed.style.background = "#0e6602"
		infobar.style.color = "white"
		infobar.style.background = "#0e6602"
		infoms.style.color = "white"
		infoms.style.background = "#0e6602"
		for (const element1 of btnColor) {
		element1.style.background = "#18a805"
		}
		for (const element2 of swColor) {
		element2.style.background = "#18a805"
		}
		chartcolor = "#000"
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
	if(thememod == 'grey'){
		themesel.style.color = "white"
		themesel.style.background = "#707371"
		simtheme.style.color = "white"
		simtheme.style.background = "#707371"
		logtheme.style.color = "white"
		logtheme.style.background = "#707371"
		keytheme.style.color = "white"
		keytheme.style.background = "#707371"
		infospeed.style.color = "white"
		infospeed.style.background = "#707371"
		infobar.style.color = "white"
		infobar.style.background = "#707371"
		infoms.style.color = "white"
		infoms.style.background = "#707371"
		for (const element1 of btnColor) {
		element1.style.background = "#4f4e4e"
		}
		for (const element2 of swColor) {
		element2.style.background = "#4f4e4e"
		}
		chartcolor = "#000"
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
	if(thememod == 'dark'){
		themesel.style.color = "white"
		themesel.style.background = "black"
		simtheme.style.color = "white"
		simtheme.style.background = "black"
		logtheme.style.color = "white"
		logtheme.style.background = "black"
		keytheme.style.color = "white"
		keytheme.style.background = "black"
		infospeed.style.color = "white"
		infospeed.style.background = "black"
		infobar.style.color = "white"
		infobar.style.background = "black"
		infoms.style.color = "white"
		infoms.style.background = "black"
		for (const element1 of btnColor) {
		element1.style.background = "#696868"
		}
		for (const element2 of swColor) {
		element2.style.background = "#696868"
		}
		chartcolor = "#000"
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
	if(thememod == 'light'){
		themesel.style.color = "black"
		themesel.style.background = "white"
		simtheme.style.color = "black"
		simtheme.style.background = "white"
		logtheme.style.color = "black"
		logtheme.style.background = "white"
		keytheme.style.color = "black"
		keytheme.style.background = "white"
		infospeed.style.color = "black"
		infospeed.style.background = "white"
		infobar.style.color = "black"
		infobar.style.background = "white"
		infoms.style.color = "black"
		infoms.style.background = "white"
		chartcolor = "#fff"
		for (const element1 of btnColor) {
		element1.style.background = "#03c6fc"
		}
		for (const element2 of swColor) {
		element2.style.background = "#03c6fc"
		}
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "black";  
			}
		} 
		
	}
	
	if(thememod == 'blue'){
		themesel.style.color = "white"
		themesel.style.background = "#036ffc"
		simtheme.style.color = "white"
		simtheme.style.background = "#036ffc"
		logtheme.style.color = "white"
		logtheme.style.background = "#036ffc"
		keytheme.style.color = "white"
		keytheme.style.background = "#036ffc"
		infospeed.style.color = "white"
		infospeed.style.background = "#036ffc"
		infobar.style.color = "white"
		infobar.style.background = "#036ffc"
		infoms.style.color = "white"
		infoms.style.background = "#036ffc"
		chartcolor = "#036ffc"
		for (const element1 of btnColor) {
		element1.style.background = "#03c6fc"
		}
		for (const element2 of swColor) {
		element2.style.background = "#03c6fc"
		}
		var links = document.getElementsByTagName("a");
		for(var i=0;i<links.length;i++)
		{
			if(links[i].href)
			{
				links[i].style.color = "white";  
			}
		} 
		
	}
	
}

apichange = document.getElementById("tokenkey");
apichange.addEventListener('input', inputHandler);

//apichange2 = document.getElementById("tokenkey");
//apichange2.addEventListener('change', inputHandler);

sitechange = document.getElementById("mirrors");
sitechange.addEventListener('change', inputHandler2);

sitechange = document.getElementById("botMenuCoin");
sitechange.addEventListener('change', inputHandler3);


gamechange = document.getElementById("gameselect");
gamechange.addEventListener('change', inputHandler4);

menumode = document.getElementById("botMenuMode");
menumode.addEventListener('change', inputHandler5);

thememode = document.getElementById("thememod");
thememode.addEventListener('change', inputHandler6);

if (localStorage.getItem("gameselect") != null) {
	document.getElementById("gameselect").value = localStorage.getItem("gameselect");
	game = document.getElementById("gameselect").value
	document.getElementById("result").innerHTML = ""
}

if (localStorage.getItem("mirror") != null) {
	mirror = window.location.host
	localStorage.setItem("mirror", mirror);
	var selectMirror = document.getElementById('mirrors');
	selectMirror.innerHTML = "";
	var opt1 = document.createElement('option');
	opt1.value = mirror;
    opt1.innerHTML = mirror;
    selectMirror.appendChild(opt1);
}

if (localStorage.getItem("currenc") != null) {
	document.getElementById("botMenuCoin").value = localStorage.getItem("currenc");
}



if (localStorage.getItem("menumode") != null) {
	document.getElementById("botMenuMode").value = localStorage.getItem("menumode");
	var elem = document.getElementById("botMenuMode");
	var value = document.getElementById("botMenuMode").value;
	if(value === "lua")
	{
		document.getElementsByClassName('code-lua')[0].style.visibility  = "visible";
		document.getElementsByClassName('code-js')[0].style.visibility  = "hidden";
	}
	else if(value === "js")
	{
		document.getElementsByClassName('code-lua')[0].style.visibility  = "hidden";
		document.getElementsByClassName('code-js')[0].style.visibility  = "visible";
	}
	document.getElementById('botWrapLog').style.visibility  = "hidden";
	document.getElementsByClassName('botSim')[0].style.visibility = "hidden";
	
}
/*
$('#gameselect').on('change', function (e) {
	var mirror = document.getElementById('gameselect');
	var input_mirror = mirror.options[mirror.selectedIndex].value;
	localStorage.setItem("gameselect", input_mirror);
	//window.location.reload(true);
});

$('#botMenuMode').on('change', function (e) {
	var codemode = document.getElementById("botMenuMode").options.selectedIndex;
	localStorage.setItem("modecode", codemode);
	document.getElementById("botMenuMode").options.selectedIndex = parseInt(localStorage.getItem("modecode"));
	showOnChange(e);
	//window.location.reload(true);
});


$('#mirrors').on('change', function (e) {
	var mirror = document.getElementById('mirrors');
	var input_mirror = mirror.options[mirror.selectedIndex].value;
	localStorage.setItem("mirror", input_mirror);
	window.location.reload(true);
});
*/
function downloadFile() {

}

let currentAnimationId = null;
let lastDisplayValue = 0;

function updateCountdown(element, newMs, duration = 30) {
    // Cancel ongoing animation if too frequent
    if (currentAnimationId) {
        cancelAnimationFrame(currentAnimationId);
    }

    const startValue = lastDisplayValue;
    const endValue = newMs;
    const startTime = performance.now();

    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const interpolatedValue = startValue + (endValue - startValue) * progress;

        lastDisplayValue = interpolatedValue;
        element.textContent = (interpolatedValue / 1000).toFixed(2);

        if (progress < 1) {
            currentAnimationId = requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}

function animateCounter(element, toValue, duration = 1000, decimals = 2) {
	
    const fromValue = parseFloat(element.textContent) || 1;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const currentValue = fromValue + (toValue - fromValue) * progress;
		if(finished_round == false){
				element.textContent = currentValue.toFixed(decimals) + "x";
		}
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    requestAnimationFrame(update);
	
}

const checkbox = document.getElementById('speedChange')

checkbox.addEventListener('change', (event) => {
	//var textFs = document.getElementById("textFast");
  if (event.currentTarget.checked) {
		fastmode = true;
		//textFs.style.display = "inline-block";
  } else {
		fastmode = false;
		//textFs.style.display = "none";
  }
})

document.getElementById('botOpenScript').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function(e) {
	let value = document.getElementById("botMenuMode").value;
	if(value === "lua")
	{
		 htmlEditor.setValue(e.target.result)
		 localStorage.setItem("luacode", e.target.result);
	} else {
		 htmlEditor2.setValue(e.target.result)
		 localStorage.setItem("jscode", e.target.result);
	}
	  
   
  };

  reader.readAsText(file);
});

function saveToFile() {

}

function promptSave() {
	let text = htmlEditor2.getValue();
	var value = document.getElementById("botMenuMode").value;
	if(value === "lua")
	{
		text = htmlEditor.getValue();
	} else {
		text = htmlEditor2.getValue();
	}
  
  const defaultFilename = "myFile.txt";

  const filename = prompt("Enter file name:", defaultFilename);
  if (!filename) return; // user cancelled

  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}



var inputcommand = document.getElementById("runinput");

inputcommand.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {

    event.preventDefault();
	
    document.getElementById("runcmd").click();

  }
});


function safeExecute(jsCode) {
  try {
    // Try Function (most CSPs block it)
    return new Function(jsCode)();
  } catch (e1) {
    try {
      // Try creating a script tag with blob (often blocked too)
      const blob = new Blob([jsCode], { type: 'application/javascript' });
      const url = URL.createObjectURL(blob);
      const script = document.createElement('script');
      script.src = url;
      document.head.appendChild(script);
    } catch (e2) {
      console.warn("All dynamic execution methods blocked by CSP.");
    }
  }
}

var inputcmd = document.getElementById("runinput").value;
var cmdrunn = document.getElementById("runcmd");
cmdrunn.addEventListener('click', function() {  
eval(document.getElementById("runinput").value)

 }, false);


function ShowConsoleLog(){

		document.getElementsByClassName('code-lua')[0].style.visibility  = "hidden";
		document.getElementsByClassName('code-js')[0].style.visibility  = "hidden";
		document.getElementById('botWrapLog').style.visibility  = "visible";
		document.getElementsByClassName('botSim')[0].style.visibility = "hidden";
}

function ShowSimulate(){

		document.getElementsByClassName('code-lua')[0].style.visibility  = "hidden";
		document.getElementsByClassName('code-js')[0].style.visibility  = "hidden";
		document.getElementById('botWrapLog').style.visibility  = "hidden";
		document.getElementsByClassName('botSim')[0].style.visibility = "visible";
}


var downloadBtn = document.getElementById("botSaveScriptButton");
downloadBtn.addEventListener('click', function() { promptSave(); }, false);
var resetstat1 = document.getElementById("resetstat");
resetstat1.addEventListener('click', function() { resetstats(); }, false);
var resetChart1 = document.getElementById("resetChart");
resetChart1.addEventListener('click', function() { resetChart(); }, false);
var deleteTable1 = document.getElementById("deleteTable");
deleteTable1.addEventListener('click', function() { deleteTable(); }, false);
var deleteLogs1 = document.getElementById("deleteLog");
deleteLogs1.addEventListener('click', function() { deleteLogs(); }, false);
var resetseed1 = document.getElementById("resetsee");
resetseed1.addEventListener('click', function() { resetseed(); }, false);
var resetAll1 = document.getElementById("resetAlles");
resetAll1.addEventListener('click', function() { resetAll(); }, false);
var userBalances1 = document.getElementById("userBal");
userBalances1.addEventListener('click', function() { userBalances(); }, false);

var showOnChange1 = document.getElementById("botShowMode");
showOnChange1.addEventListener('click', function() { showOnChange(this); }, false);
var botShowLog1 = document.getElementById("botShowLog");
botShowLog1.addEventListener('click', function() { ShowConsoleLog(); }, false);
var botShowSim1 = document.getElementById("botShowSim");
botShowSim1.addEventListener('click', function() { ShowSimulate(); }, false);

function initUser(){

var body = {
		operationName:"UserBalances",
		variables:{},
		query:"query UserBalances {\n  user {\n    id\n    balances {\n      available {\n        amount\n        currency\n        __typename\n      }\n      vault {\n        amount\n        currency\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
		
	
	fetch('https://' + mirror + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outjson(json))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});


}

function outjson(json){

	//let nicker = json.data.user.name
	//localStorage.setItem("nicks", nicker);
	
	select = document.getElementById('botMenuCoin');
	select.innerHTML = "";
	balance = 0
	var balan1 = document.getElementById("botBalance");
	balan1.innerHTML = balance.toFixed(8);
	for (var i = 0; i < json.data.user.balances.length; i++)
	{
		var opt = document.createElement('option');
		opt.value = json.data.user.balances[i].available.currency;
		opt.innerHTML = json.data.user.balances[i].available.currency;
		select.appendChild(opt);
		document.getElementById("botMenuCoin").options[0].selected = 'selected';
	}
	
	for (var i = 0; i < json.data.user.balances.length; i++)
	{
		if (json.data.user.balances[i].available.currency == currency)
		{
			current_balance = json.data.user.balances[i].available.amount;
			balance = current_balance;
			var balan = document.getElementById("botBalance");
			balan.innerHTML = balance.toFixed(8);

		}
	}
	if (localStorage.getItem("currenc") != null) {
		document.getElementById("botMenuCoin").value = localStorage.getItem("currenc");
	}
}
/*
$('#botMenuCoin').on('change', function (e) {
	var curry = document.getElementById('botMenuCoin').value;
	localStorage.setItem("currenc", curry);
	currency = curry;
	userBalances();
});

*/

function indexMatchingText(text) {
    var opts = document.getElementById("botMenuCoin").options;
	for(var i = 0; i < opts.length; i++) {
		if(opts[i].innerText == text) {
			return i;
		}
	}
	return 0;
}


function drawChart() {
    dps = [{ x: betcount, y: profit_total }]
    chart = new CanvasJS.Chart('chartContainer', {
        backgroundColor: "transparent",
        theme: 'light2',
        title: {
            //text: BOT_URL,
            fontColor: 'white',
            fontSize: 20
        },
        data: [{
            type: 'line',
            markerSize: 0,
            dataPoints: dps
        }]
    })
    chart.render();
}

function updateChart() {
    dps.push({
        x: betcount,
        y: profit_total,
        color: color
    })
    if (dps[dps.length - 2]) dps[dps.length - 2].lineColor = color;
    if (dps.length > 100) dps.shift();
    chart.render();
}


function resetChart() {
    betcount = 0;
    profit_total = 0;
    return drawChart();
}

function log(val){
	document.getElementById("botLog").value  += val + "\n"
	document.getElementById("botLog").scrollTop = document.getElementById("botLog").scrollHeight 
	var text = $("#botLog").val();   
	var lines = text.split(/\r|\r\n|\n/);
	var count = lines.length;
	if(parseInt(count) > 200){
		$('#botLog').val(function(_, val){    
			return val.split('\n').slice(1).join('\n');
		});
	}
}

function logSim(val){
	document.getElementById("botSimLog").value  += val + "\n"
	document.getElementById("botSimLog").scrollTop = document.getElementById("botSimLog").scrollHeight 
	var text = $("#botSimLog").val();   
	var lines = text.split(/\r|\r\n|\n/);
	var count = lines.length;
	if(parseInt(count) > 200){
		$('#botSimLog').val(function(_, val){    
			return val.split('\n').slice(1).join('\n');
		});
	}
}

function deleteLogs(){
	document.getElementById("botLog").value = "";
}

function stopOnWin() {
    running = false;
	btnStart.disabled = false;
	simrunning = false;
	cashout_done = false;
}


setTimeout(() => {
	if (localStorage.getItem("currenc") != null) {
	//document.getElementById("currenc").value = localStorage.getItem("currenc");
		currency = localStorage.getItem("currenc");
		if(document.getElementById("botMenuCoin").options[indexMatchingText(currency)] != undefined){
		document.getElementById("botMenuCoin").options[indexMatchingText(currency)].selected = 'selected';
		}
	} else {
		currency = document.getElementById("botMenuCoin").value;
	}
	userBalances();	
}, "500");

function userBalances(){

var body = {
		operationName:"UserBalances",
		variables:{},
		query:"query UserBalances {\n  user {\n    id\n    balances {\n      available {\n        amount\n        currency\n        __typename\n      }\n      vault {\n        amount\n        currency\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
		
	
	fetch('https://' + mirror + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outbals(json))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});


}

function outbals(json){

	balance = 0
	var balan1 = document.getElementById("botBalance");
	balan1.innerHTML = balance.toFixed(8);
	for (var i = 0; i < json.data.user.balances.length; i++)
	{
		if (json.data.user.balances[i].available.currency == document.getElementById('botMenuCoin').value)
		{
			current_balance = json.data.user.balances[i].available.amount;
			balance = current_balance;
			var balan = document.getElementById("botBalance");
			balan.innerHTML = balance.toFixed(8);

		}
	}
	//document.getElementById("botMenuCoin").options[indexMatchingText(localStorage.getItem("currenc"))].selected = 'selected';
}

function vault(e){

 var client = e;
 if(client == undefined){
	return log("Please specify vault amount.")
 }
var body = {
		operationName:"CreateVaultDeposit",
		variables:{
        "currency": currency,
        "amount": e
		},
		query:"mutation CreateVaultDeposit($currency: CurrencyEnum!, $amount: Float!) {\n  createVaultDeposit(currency: $currency, amount: $amount) {\n    id\n    amount\n    currency\n    user {\n      id\n      balances {\n        available {\n          amount\n          currency\n          __typename\n        }\n        vault {\n          amount\n          currency\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n"		}
	
	fetch('https://' + mirror + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outvault(json))
	.catch(function(err, json) {
		//console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});
}

function outvault(json){
	if(json.errors != undefined){
		log(json.errors[0].errorType);
	} else {
		log("Deposited " + json.data.createVaultDeposit.amount.toFixed(10) + " to vault.")
	}

}

function hiloBet(betsize, startcard){
	
	var body = {
    "identifier": randomString(21),
    "currency": currency,
    "amount": betsize,
    "startCard": startcard
}
		
	
	fetch('https://' + mirror + '/_api/casino/hilo/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				hiloBet(betsize, startcard)
				}				
			}, "1000");
			
		}
	});
	
}

function hiloNext(guessed){
	var body = {
    "guess": guessed
	}
		
	
	fetch('https://' + mirror + '/_api/casino/hilo/next', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				hiloNext(guessed)
				}				
			}, "1000");
			
		}
	});
	
}

function hiloCash(){

	var body = {
    "identifier": randomString(21)
	}
		
	
	fetch('https://' + mirror + '/_api/casino/hilo/cashout', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				hiloCash()
				}				
			}, "1000");
			
		}
	});
	
}

function dartsBet(betsize, diff){

	var body = {
    "currency": currency,
    "amount": betsize,
    "identifier": randomString(21),
    "difficulty": diff
}
		
	
	fetch('https://' + mirror + '/_api/casino/darts/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				dartsBet(betsize, diff)
				}				
			}, "1000");
			
		}
	});
	
}

function videopokerBet(betsize){
	
	var body = {
    "currency": currency,
    "amount": betsize
	}
		
	
	fetch('https://' + mirror + '/_api/casino/video-poker/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				videopokerBet(betsize)
				}				
			}, "1000");
			
		}
	});
	
}


function samuraiBet(betsize){

	spinType = "complete"
	
	var body = {
    "currency": currency,
    "amount": betsize,
    "identifier": randomString(21)
	}
		
	
	fetch('https://' + mirror + '/_api/casino/slots-samurai/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				samuraiBet(betsize)
				}				
			}, "1000");
			
		}
	});
	
}

function samuraiNext(){
	
	var body = {
    "identifier": randomString(21)
	}
		
	
	fetch('https://' + mirror + '/_api/casino/slots-samurai/next', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				samuraiNext()
				}				
			}, "1000");
			
		}
	});
	
}


function scarabBet(betsize, lines){
	
	var body = {
    "currency": currency,
    "amount": betsize,
    "lines": lines,
    "identifier": randomString(21)
	}
		
	
	fetch('https://' + mirror + '/_api/casino/slots/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				scarabBet(betsize, lines)
				}				
			}, "1000");
			
		}
	});
	
}


function tomeBet(betsize, lines){
	
	var body = {
		"currency": currency,
		"amount": betsize,
		"lines": lines,
		"identifier": randomString(21)
	}
		
	
	fetch('https://' + mirror + '/_api/casino/slots-tome-of-life/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				tomeBet(betsize, lines)
				}				
			}, "1000");
			
		}
	});
	
}


function diamondBet(betsize){

	var body = {
    "currency": currency,
    "amount": betsize,
    "identifier": randomString(21)
	}
		
	
	fetch('https://' + mirror + '/_api/casino/diamonds/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				diamondBet(betsize)
				}				
			}, "1000");
			
		}
	});
	
}

function caseBet(betsize, difficulty){

	var body = {
    "currency": currency,
    "amount": betsize,
    "identifier": randomString(21),
    "difficulty": difficulty
	}
		
	
	fetch('https://' + mirror + '/_api/casino/cases/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				caseBet(betsize, difficulty)
				}				
			}, "1000");
			
		}
	});
	
}


function flipBet(betsize, guesses){

	var body = {
    "query": "mutation FlipBet($amount: Float!, $currency: CurrencyEnum!, $identifier: String, $guesses: [FlipConditionEnum!]!) {\n  flipBet(\n    amount: $amount\n    currency: $currency\n    identifier: $identifier\n    guesses: $guesses\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameFlip\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameFlip on CasinoGameFlip {\n  currentRound\n  payoutMultiplier\n  playedRounds\n  flips\n}\n",
    "variables": {
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "guesses": guesses
    }
	}
		
	
	fetch('https://' + mirror + '/_api/graphql', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				flipBet(betsize, guesses)
				}				
			}, "1000");
			
		}
	});
	
}

function rockpaperBet(betsize, guesses){
	
	var body = {
    "currency": currency,
    "amount": betsize,
    "identifier": randomString(21),
    "guesses": guesses
	}
		
	
	fetch('https://' + mirror + '/_api/casino/rock-paper-scissors/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				rockpaperBet(betsize, guesses)
				}				
			}, "1000");
			
		}
	});
	
}

function snakesBet(betsize, snakedifficulty, snakerolls){

	var body = {
    "currency": currency,
    "amount": betsize,
    "identifier": randomString(21),
    "difficulty": snakedifficulty,
    "rollCount": snakerolls
	}
		
	
	fetch('https://' + mirror + '/_api/casino/snakes/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				snakesBet(betsize, snakedifficulty, snakerolls)
				}				
			}, "1000");
			
		}
	});
	
}


function baccaratbet(baccarattie, baccaratplayer, baccaratbanker){
	
	var body = {
        "currency": currency,
        "identifier": randomString(21),
        "tie": baccarattie,
        "banker": baccaratbanker,
		"player": baccaratplayer
		}
		
	
	fetch('https://' + mirror + '/_api/casino/baccarat/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				baccaratbet(baccarattie, baccaratplayer, baccaratbanker)
				}				
			}, "1000");
			
		}
	});
	
}

function dragontowerBet(betsize, dragondifficulty, dragoneggs){
	
	var body = {
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "difficulty": dragondifficulty,
        "eggs": dragoneggs
		}
		
	
	fetch('https://' + mirror + '/_api/casino/dragon-tower/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				dragontowerBet(betsize, dragondifficulty, dragoneggs)
				}				
			}, "1000");
			
		}
	});
	
}

function roulettebet(selection){
	
	let roulette_row = []
	let roulette_parity = []
	let roulette_range = []
	let roulette_color = []
	let roulette_number = []
	
	selection.forEach(function(obj){
		if(obj.value.indexOf("row") >= 0){
			roulette_row.push(obj)
		}
		if(obj.value.indexOf("parity") >= 0){
			roulette_parity.push(obj)
		}
		if(obj.value.indexOf("range") >= 0){
			roulette_range.push(obj)
		}
		if(obj.value.indexOf("color") >= 0){
			roulette_color.push(obj)
		}
		if(obj.value.indexOf("number") >= 0){
			roulette_number.push(obj)
		}
	});
	
	var body = {
        "currency": currency,
        "identifier": randomString(21),
        "numbers": roulette_number,
		"colors": roulette_color,
		"ranges": roulette_range,
		"rows": roulette_row,
		"parities": roulette_parity
		}
		
	
	fetch('https://' + mirror + '/_api/casino/roulette/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{	
			setTimeout(() => {
				if(running){
				roulettebet(selection)
				}				
			}, "1000");
			
		}
	});
	
}

function wheelbet(betsize, wheelsegments, wheelrisk){
	
	var body = {
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "risk": wheelrisk,
        "segments": wheelsegments
		}
		
	
	fetch('https://' + mirror + '/_api/casino/wheel/spin', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				wheelbet(betsize, wheelsegments, wheelrisk)	
				}				
			}, "1000");
			
		}
	});
	
}

function plinkobet(betsize, plinkorows, plinkorisk){
	
	var body = {
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "risk": plinkorisk,
        "rows": plinkorows
		}
		
	
	fetch('https://' + mirror + '/_api/casino/plinko/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				plinkobet(betsize, plinkorows, plinkorisk)
				}				
			}, "1000");
			
		}
	});
	
}

function kenobet(betsize, kenoselected, kenorisk){
	
	var body = {
        "amount": betsize,
        "currency": currency,
        "identifier": randomString(21),
        "risk": kenorisk,
        "numbers": kenoselected
		}
		
	
	fetch('https://' + mirror + '/_api/casino/keno/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				kenobet(betsize, kenoselected, kenorisk)
				}				
			}, "1000");
			
		}
	});
	
}

function minebet(betsize, fieldcount, minecount){
	
	var body = {
    "amount": betsize,
    "currency": currency,
    "identifier": randomString(21),
    "minesCount": minecount,
    "fields": fieldcount
}
		
	
	fetch('https://' + mirror + '/_api/casino/mines/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				minebet(betsize, fieldcount, minecount)	
				}				
			}, "1000");
			
		}
	});
	
}


function pumpBet(betsize, rounds, difficulty){
	
	var body = {
    "amount": betsize,
    "currency": currency,
    "identifier": randomString(21),
    "round": rounds,
    "difficulty": difficulty
	}
		
	fetch('https://' + mirror + '/_api/casino/pump/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		//console.log(err, json);
		if(running == true)
		{
			setTimeout(() => {
				if(running){
				pumpBet(betsize, rounds, difficulty)
				}				
			}, "2000");
			
		}
	});
	
}


function LimboBet(amount, target_multi){
	
	/*var body = {
		variables:{
		"multiplierTarget": target_multi,
        "identifier": randomString(21),
        "amount": amount,
        "currency": document.getElementById('botMenuCoin').value
		},
		query:"mutation LimboBet($amount: Float!, $multiplierTarget: Float!, $currency: CurrencyEnum!, $identifier: String!) {\n  limboBet(\n    amount: $amount\n    currency: $currency\n    multiplierTarget: $multiplierTarget\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameLimbo\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameLimbo on CasinoGameLimbo {\n  result\n  multiplierTarget\n}\n"	}
		*/
		var body = {
			"multiplierTarget": target_multi,
			"identifier": randomString(21),
			"amount": amount,
			"currency": currency
		}
	
	fetch('https://' + mirror + '/_api/casino/limbo/bet', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				LimboBet(amount, target_multi)							
			}, "2000");
			
		}
	});
	
}

function DiceBet(amount, chance, bethigh){

	if(mirror.includes("primedice")){
	
		var targetdice = 49.5
		if(bethigh == false){
			targetdice = chance
			cond = "below"
		} else {
			targetdice = 100 - 0.01 - chance
			cond = "above"
		}
		

		var body = {
			variables:{ 
			"target": targetdice,
			"condition": cond,
			"amount": amount,
			"currency": currency
			},
			operationName: "PrimediceRoll",
			query:"mutation PrimediceRoll($amount: Float!, $target: Float!, $condition: CasinoGamePrimediceConditionEnum!, $currency: CurrencyEnum!) {\n  primediceRoll(amount: $amount, target: $target, condition: $condition, currency: $currency) {\n    ...CasinoBetFragment\n    state {\n      ...PrimediceStateFragment\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment CasinoBetFragment on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n    __typename\n  }\n  __typename\n}\n\nfragment PrimediceStateFragment on CasinoGamePrimedice {\n  result\n  target\n  condition\n  __typename\n}\n"	}
			
		
		fetch('https://' + mirror + '/_api/graphql', {
			method: 'post',
			body:    JSON.stringify(body),
			headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
		})
		.then(res => res.json())
		.then(json => data(json))
		.catch(function(err, json) {
			console.log(err);
			if(running == true)
			{
				setTimeout(() => {
					 DiceBet(amount, chance, bethigh)							
				}, "2000");
				
			}
		});
	
	} else {
	
	var targetdice = 49.5
	if(bethigh == false){
		targetdice = chance
		cond = "below"
	} else {
		targetdice = 100 - chance
		cond = "above"
	}
	

	/*var body = {
		variables:{ 
		"target": target,
        "condition": cond,
        "identifier": randomString(21),
        "amount": amount,
        "currency": document.getElementById('botMenuCoin').value
		},
		query:"mutation DiceRoll($amount: Float!, $target: Float!, $condition: CasinoGameDiceConditionEnum!, $currency: CurrencyEnum!, $identifier: String!) {\n  diceRoll(\n    amount: $amount\n    target: $target\n    condition: $condition\n    currency: $currency\n    identifier: $identifier\n  ) {\n    ...CasinoBet\n    state {\n      ...CasinoGameDice\n    }\n  }\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment CasinoGameDice on CasinoGameDice {\n  result\n  target\n  condition\n}\n"	}
	*/
	var body = {
    "target": targetdice,
    "condition": cond,
    "identifier": randomString(21),
    "amount": amount,
    "currency": currency
		}
	
	fetch('https://' + mirror + '/_api/casino/dice/roll', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => data(json))
	.catch(function(err, json) {
		console.log(err);
		if(running == true)
		{
			setTimeout(() => {
				 DiceBet(amount, chance, bethigh)							
			}, "2000");
			
		}
	});
	}
	
}

function data(json){
		if(json.errors != null){
			if(!json.errors[0].errorType.includes("parallelCasinoBet")){
			log(json.errors[0].errorType + ". " +json.errors[0].message )
			errorgame = true
			}
			if(json.errors[0].errorType.includes("existingGame")){
				hiloguess = round()
			}
			if(json.errors[0].errorType.includes("insignificantBet") && game === "hilo"){
				cashout_done = true
			} else {
				cashout_done = false
			}
			//return;
		} else {
		errorgame = false
		if(!json.hasOwnProperty("data")){
			if(!json.hasOwnProperty("hiloNext") && !json.hasOwnProperty("hiloCashout"))
			{
			const endMS = performance.now();
			var meter = document.getElementById("botSpeed");
			measures.push(endMS - startMS)
			if(measures.length > 3){
				measures.shift()
			}
			meter.innerHTML = (1000 / (measures.reduce((partialSum, a) => partialSum + a, 0)/measures.length)).toFixed(1) + " bet/s"
			startMS = performance.now();
			}
		} else {
			const endMS = performance.now();
			var meter = document.getElementById("botSpeed");
			measures.push(endMS - startMS)
			if(measures.length > 3){
				measures.shift()
			}
			meter.innerHTML = (1000 / (measures.reduce((partialSum, a) => partialSum + a, 0)/measures.length)).toFixed(1) + " bet/s"
			startMS = performance.now();
		}
		if(json.hasOwnProperty("data")){
		if(json.data.hasOwnProperty("primediceRoll"))
		{
			
			var table = document.getElementById("botHistory");
			var nicname = "";
			var crpamount = json.data.primediceRoll.amount;
			var payout = json.data.primediceRoll.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = json.data.primediceRoll.state.result.toFixed(2);
			var multiplierTarget = json.data.primediceRoll.state.target.toFixed(2);
			
			lastBet.name = json.data.primediceRoll.user.name
			lastBet.amount = json.data.primediceRoll.amount;
			lastBet.payoutMultiplier = json.data.primediceRoll.payoutMultiplier;
			lastBet.Roll = json.data.primediceRoll.state.result;
			lastBet.payout = json.data.primediceRoll.payout;
			lastBet.target = json.data.primediceRoll.state.target;
			
			if(json.data.primediceRoll.state.condition == "below"){
				bethigh = false;
			} else {
				bethigh = true;
			}
			
			if(bethigh == false){
				lastBet.chance = json.data.primediceRoll.state.target;
			} else {
				lastBet.chance = 100 - 0.01 - json.data.primediceRoll.state.target;
			}
			
			
			if(json.data.primediceRoll.payoutMultiplier > 0){
				win = true;
				lastBet.win = true;
				color = "green"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
					
			} else {

				win = false;
				lastBet.win = false;
				color = "red"
				losses++;
				losestreak++;
				winstreak = 0;
				
											
			} 
		
			current_profit = parseFloat(json.data.primediceRoll.payout) - parseFloat(json.data.primediceRoll.amount);
			profit_total += parseFloat(json.data.primediceRoll.payout) - parseFloat(json.data.primediceRoll.amount);
			wagered += parseFloat(json.data.primediceRoll.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.data.primediceRoll.amount.toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = "checked";
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.chance.toFixed(4)
			if(bethigh == false){
				tdRollChance.innerHTML = json.data.primediceRoll.state.result.toFixed(4)
			} else {
				tdRollChance.innerHTML = (100 - 0.01 - json.data.primediceRoll.state.result).toFixed(4)
			}
			
			tdProfit.innerHTML = current_profit.toFixed(8)
			if(bethigh){
				lastBet.targetNumber = (99 /  (lastBet.chance - 0.01));
				tdTargetNumber.innerHTML = ">" + (99 /  (lastBet.chance - 0.01)).toFixed(4)
			} else {
				lastBet.targetNumber = (99 / lastBet.chance);
				tdTargetNumber.innerHTML = ">" + (99 / lastBet.chance).toFixed(4)
			}
			tdRollNumber.innerHTML = json.data.primediceRoll.state.result.toFixed(2)
			tdNonce.innerHTML = json.data.primediceRoll.game;
			tdBetID.innerHTML = json.data.primediceRoll.id;
			tdPayout.innerHTML = json.data.primediceRoll.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < json.data.primediceRoll.amount){
				highest_bet.pop();
				highest_bet.push(json.data.primediceRoll.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.data.primediceRoll.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)
			lastBet.amount = json.data.primediceRoll.amount;
			lastBet.target = json.data.primediceRoll.state.target;
			
			
			
		
		}
		if(json.data.hasOwnProperty("flipBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.data.flipBet.user.name
			lastBet.amount = json.data.flipBet.amount;
			lastBet.payoutMultiplier = json.data.flipBet.payoutMultiplier;
			lastBet.Roll = json.data.flipBet.state.currentRound;
			lastBet.payout = json.data.flipBet.payout;
			
			

			if(json.data.flipBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.data.flipBet.payout) - parseFloat(json.data.flipBet.amount);
			profit_total += parseFloat(json.data.flipBet.payout) - parseFloat(json.data.flipBet.amount);
			wagered += parseFloat(json.data.flipBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.data.flipBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			lastBet.target = guesses.length
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = guesses.length;
			lastBet.targetNumber = guesses.length;
			tdRollNumber.innerHTML = lastBet.Roll;
			tdNonce.innerHTML = json.data.flipBet.game;
			tdBetID.innerHTML = json.data.flipBet.id;
			tdPayout.innerHTML = json.data.flipBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}
		
		} else {
		
		if(json.hasOwnProperty("diceRoll"))
		{
			
			var table = document.getElementById("botHistory");
			var nicname = "";
			var crpamount = json.diceRoll.amount;
			var payout = json.diceRoll.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = json.diceRoll.state.result.toFixed(2);
			var multiplierTarget = json.diceRoll.state.target.toFixed(2);
			
			lastBet.name = json.diceRoll.user.name
			lastBet.amount = json.diceRoll.amount;
			lastBet.payoutMultiplier = json.diceRoll.payoutMultiplier;
			lastBet.Roll = json.diceRoll.state.result;
			lastBet.payout = json.diceRoll.payout;
			lastBet.target = json.diceRoll.state.target;
			if(json.diceRoll.state.condition == "below"){
				bethigh = false;
			} else {
				bethigh = true;
			}
			
			if(bethigh == false){
				lastBet.chance = json.diceRoll.state.target;
			} else {
				lastBet.chance = 100 - json.diceRoll.state.target;
			}
			
			
			if(json.diceRoll.payoutMultiplier > 0){
				win = true;
				lastBet.win = true;
				color = "green"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
					
			} else {

				win = false;
				lastBet.win = false;
				color = "red"
				losses++;
				losestreak++;
				winstreak = 0;
				
											
			} 
		
			current_profit = parseFloat(json.diceRoll.payout) - parseFloat(json.diceRoll.amount);
			profit_total += parseFloat(json.diceRoll.payout) - parseFloat(json.diceRoll.amount);
			wagered += parseFloat(json.diceRoll.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.diceRoll.amount.toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = "checked";
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.chance.toFixed(4)
			if(bethigh == false){
				tdRollChance.innerHTML = json.diceRoll.state.result.toFixed(4)
			} else {
				tdRollChance.innerHTML = (100 - json.diceRoll.state.result).toFixed(4)
			}
			
			tdProfit.innerHTML = current_profit.toFixed(8)
			if(bethigh){
				lastBet.targetNumber = (99 / (lastBet.chance));
				tdTargetNumber.innerHTML = ">" + (99 / (lastBet.chance)).toFixed(4)
			} else {
				lastBet.targetNumber = (99 / lastBet.chance);
				tdTargetNumber.innerHTML = ">" + (99 / lastBet.chance).toFixed(4)
			}
			tdRollNumber.innerHTML = json.diceRoll.state.result.toFixed(2)
			tdNonce.innerHTML = json.diceRoll.game;
			tdBetID.innerHTML = json.diceRoll.id;
			tdPayout.innerHTML = json.diceRoll.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);			
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < json.diceRoll.amount){
				highest_bet.pop();
				highest_bet.push(json.diceRoll.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.diceRoll.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)
			lastBet.amount = json.diceRoll.amount;
			lastBet.target = json.diceRoll.state.target;
			
			
			
		}
		if(json.hasOwnProperty("limboBet"))
		{
			
			var table = document.getElementById("botHistory");
			var nicname = "";
			var crpamount = json.limboBet.amount;
			var payout = json.limboBet.payout;
			
			var str_amount = crpamount;
			var str_payout = payout.toFixed(8);
			var str_currency = currency;
			var str_game = "limbo";
			var str_user = "poky1084";
			var str_updatedAt = "2023"
			var current_result = json.limboBet.state.result.toFixed(2);
			var multiplierTarget = json.limboBet.state.multiplierTarget.toFixed(2);
			
			lastBet.name = json.limboBet.user.name
			lastBet.amount = json.limboBet.amount;
			lastBet.payoutMultiplier = json.limboBet.payoutMultiplier;
			lastBet.Roll = json.limboBet.state.result;
			lastBet.chance = 99 / json.limboBet.state.multiplierTarget;
			lastBet.payout = json.limboBet.payout;
			lastBet.target = json.limboBet.state.multiplierTarget;
			
			if(json.limboBet.payoutMultiplier > 0){
				win = true;
				lastBet.win = true;
				color = "green"
				//win
				winstreak++;
				wins++;
				losestreak = 0;
					
			} else {

				win = false;
				lastBet.win = false;
				color = "red"
				losses++;
				losestreak++;
				winstreak = 0;
				
											
			} 
		
			current_profit = parseFloat(json.limboBet.payout) - parseFloat(json.limboBet.amount);
			profit_total += parseFloat(json.limboBet.payout) - parseFloat(json.limboBet.amount);
			wagered += parseFloat(json.limboBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.limboBet.amount.toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = (99 / json.limboBet.state.multiplierTarget).toFixed(4)
			tdRollChance.innerHTML = (99 / json.limboBet.state.result).toFixed(4)
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = ">" + json.limboBet.state.multiplierTarget.toFixed(4)
			lastBet.targetNumber = json.limboBet.state.multiplierTarget;
			tdRollNumber.innerHTML = json.limboBet.state.result.toFixed(2)
			tdNonce.innerHTML = json.limboBet.game;
			tdBetID.innerHTML = json.limboBet.id;
			tdPayout.innerHTML = json.limboBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < json.limboBet.amount){
				highest_bet.pop();
				highest_bet.push(json.limboBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.limboBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
			

			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.limboBet.state.result, 2);
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)
			lastBet.amount = json.limboBet.amount;
			lastBet.target = json.limboBet.state.multiplierTarget;

			
		}
		if(json.hasOwnProperty("pumpBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.pumpBet.user.name
			lastBet.amount = json.pumpBet.amount;
			lastBet.payoutMultiplier = json.pumpBet.payoutMultiplier;
			lastBet.Roll = json.pumpBet.state._popPoint;
			lastBet.payout = json.pumpBet.payout;
			lastBet.target = pumps;
			
			
			
			if(json.pumpBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.pumpBet.payout) - parseFloat(json.pumpBet.amount);
			profit_total += parseFloat(json.pumpBet.payout) - parseFloat(json.pumpBet.amount);
			wagered += parseFloat(json.pumpBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.pumpBet.amount.toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			//tdRollChance.innerHTML = (99 / json.pumpBet.state.result).toFixed(4)
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = pumps
			lastBet.targetNumber = pumps;
			tdRollNumber.innerHTML = json.pumpBet.state._popPoint
			tdNonce.innerHTML = json.pumpBet.game;
			tdBetID.innerHTML = json.pumpBet.id;
			tdPayout.innerHTML = json.pumpBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < json.pumpBet.amount){
				highest_bet.pop();
				highest_bet.push(json.pumpBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.pumpBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
			//chance = 99 / json.pumpBet.state.multiplierTarget;

			
			updateChart();
			
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.pumpBet.state.result, 2);
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)

			
			lastBet.amount = json.pumpBet.amount;
			lastBet.target = json.pumpBet.state.round
			

			
		}
	
		if(json.hasOwnProperty("baccaratBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.baccaratBet.user.name
			lastBet.amount = json.baccaratBet.amount;
			lastBet.payoutMultiplier = json.baccaratBet.payoutMultiplier;
			var elem = document.getElementById("botMenuMode");
			var value = document.getElementById("botMenuMode").value;
			if(value == "lua"){
				lastBet.Roll = JSON.stringify(json.baccaratBet.state.result);
			} else if(value == "js"){
				lastBet.Roll = json.baccaratBet.state.result;
			}
			
			lastBet.payout = json.baccaratBet.payout;
			
			

			if(json.baccaratBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.baccaratBet.payout) - parseFloat(json.baccaratBet.amount);
			profit_total += parseFloat(json.baccaratBet.payout) - parseFloat(json.baccaratBet.amount);
			wagered += parseFloat(json.baccaratBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.baccaratBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			let bettext = ""
			let bettie = json.baccaratBet.state.tie
			let betbanker = json.baccaratBet.state.banker
			let betplayer = json.baccaratBet.state.player
			if(bettie > 0){
				bettext += "t|"
			}
			if(betbanker > 0){
				bettext += "b|"
			}
			if(betplayer > 0){
				bettext += "p"
			}
			lastBet.target = 0
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = bettext
			lastBet.targetNumber = bettext
			tdRollNumber.innerHTML = json.baccaratBet.state.result;
			tdNonce.innerHTML = json.baccaratBet.game;
			tdBetID.innerHTML = json.baccaratBet.id;
			tdPayout.innerHTML = json.baccaratBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < json.baccaratBet.amount){
				highest_bet.pop();
				highest_bet.push(json.baccaratBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = json.baccaratBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)

			

			
		}

		if(json.hasOwnProperty("dragonTowerBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.dragonTowerBet.user.name
			lastBet.amount = json.dragonTowerBet.amount;
			lastBet.payoutMultiplier = json.dragonTowerBet.payoutMultiplier;
			lastBet.Roll = json.dragonTowerBet.state.currentRound;
			lastBet.payout = json.dragonTowerBet.payout;
			
			

			if(json.dragonTowerBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.dragonTowerBet.payout) - parseFloat(json.dragonTowerBet.amount);
			profit_total += parseFloat(json.dragonTowerBet.payout) - parseFloat(json.dragonTowerBet.amount);
			wagered += parseFloat(json.dragonTowerBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.dragonTowerBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			lastBet.target = eggs.length
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = json.dragonTowerBet.state.difficulty + "|" + eggs.length
			lastBet.targetNumber = json.dragonTowerBet.state.difficulty + "|" + eggs.length
			tdRollNumber.innerHTML = lastBet.payoutMultiplier;
			tdNonce.innerHTML = json.dragonTowerBet.game;
			tdBetID.innerHTML = json.dragonTowerBet.id;
			tdPayout.innerHTML = json.dragonTowerBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)

			

			
		}

		if(json.hasOwnProperty("rouletteBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.rouletteBet.user.name
			lastBet.amount = json.rouletteBet.amount;
			lastBet.payoutMultiplier = json.rouletteBet.payoutMultiplier;
			lastBet.Roll = json.rouletteBet.state.result;
			lastBet.payout = json.rouletteBet.payout;
			
			

			if(json.rouletteBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.rouletteBet.payout) - parseFloat(json.rouletteBet.amount);
			profit_total += parseFloat(json.rouletteBet.payout) - parseFloat(json.rouletteBet.amount);
			wagered += parseFloat(json.rouletteBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.rouletteBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			lastBet.target = json.rouletteBet.state.numbers.length
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = ""
			lastBet.targetNumber = ""
			tdRollNumber.innerHTML = lastBet.Roll;
			tdNonce.innerHTML = json.rouletteBet.game;
			tdBetID.innerHTML = json.rouletteBet.id;
			tdPayout.innerHTML = json.rouletteBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("wheelSpin"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.wheelSpin.user.name
			lastBet.amount = json.wheelSpin.amount;
			lastBet.payoutMultiplier = json.wheelSpin.payoutMultiplier;
			lastBet.Roll = json.wheelSpin.state.result;
			lastBet.payout = json.wheelSpin.payout;
			
			

			if(json.wheelSpin.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.wheelSpin.payout) - parseFloat(json.wheelSpin.amount);
			profit_total += parseFloat(json.wheelSpin.payout) - parseFloat(json.wheelSpin.amount);
			wagered += parseFloat(json.wheelSpin.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.wheelSpin.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			lastBet.target = json.wheelSpin.state.segments
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = json.wheelSpin.state.risk + "|" + json.wheelSpin.state.segments
			lastBet.targetNumber = json.wheelSpin.state.risk + "|" + json.wheelSpin.state.segments
			tdRollNumber.innerHTML = lastBet.Roll;
			tdNonce.innerHTML = json.wheelSpin.game;
			tdBetID.innerHTML = json.wheelSpin.id;
			tdPayout.innerHTML = json.wheelSpin.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		

		if(json.hasOwnProperty("plinkoBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.plinkoBet.user.name
			lastBet.amount = json.plinkoBet.amount;
			lastBet.payoutMultiplier = json.plinkoBet.payoutMultiplier;
			lastBet.Roll = json.plinkoBet.payoutMultiplier;
			lastBet.payout = json.plinkoBet.payout;
			
			

			if(json.plinkoBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.plinkoBet.payout) - parseFloat(json.plinkoBet.amount);
			profit_total += parseFloat(json.plinkoBet.payout) - parseFloat(json.plinkoBet.amount);
			wagered += parseFloat(json.plinkoBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.plinkoBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			lastBet.target = json.plinkoBet.state.rows
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = json.plinkoBet.state.risk + "|" + json.plinkoBet.state.rows
			lastBet.targetNumber = json.plinkoBet.state.risk + "|" + json.plinkoBet.state.rows
			tdRollNumber.innerHTML = lastBet.Roll;
			tdNonce.innerHTML = json.plinkoBet.game;
			tdBetID.innerHTML = json.plinkoBet.id;
			tdPayout.innerHTML = json.plinkoBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("kenoBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.kenoBet.user.name
			lastBet.amount = json.kenoBet.amount;
			lastBet.payoutMultiplier = json.kenoBet.payoutMultiplier;
			lastBet.Roll = json.kenoBet.state.drawnNumbers;
			lastBet.payout = json.kenoBet.payout;
			
			var rounds = json.kenoBet.state.drawnNumbers;
			var kenofield =  json.kenoBet.state.selectedNumbers;
			
			
			var hitkeno = kenofield.filter(function(n) {
				return rounds.indexOf(n) !== -1;
			});
			

			if(json.kenoBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.kenoBet.payout) - parseFloat(json.kenoBet.amount);
			profit_total += parseFloat(json.kenoBet.payout) - parseFloat(json.kenoBet.amount);
			wagered += parseFloat(json.kenoBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.kenoBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			let hitnumbers = hitkeno
			if(hitnumbers == "undefined") {
				hitnumbers = ""
			} else {
				hitnumbers = hitkeno
			}
			
			lastBet.target = kenofield.length
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML =  json.kenoBet.state.risk + "|" + kenofield.length
			lastBet.targetNumber =  json.kenoBet.state.risk + "|" + kenofield.length
			tdRollNumber.innerHTML = hitkeno.length + "x";
			tdNonce.innerHTML = json.kenoBet.game;
			tdBetID.innerHTML = json.kenoBet.id;
			tdPayout.innerHTML = json.kenoBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("minesBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.minesBet.user.name
			lastBet.amount = json.minesBet.amount;
			lastBet.payoutMultiplier = json.minesBet.payoutMultiplier;
			lastBet.Roll = json.minesBet.state.mines;
			lastBet.payout = json.minesBet.payout;
			
			var rounds = json.minesBet.state.rounds;
			var minefield =  json.minesBet.state.mines;
			var str_field = [];
			rounds.forEach(function(round){
				str_field.push(round.field)
			});
			
			//lastBet.target = str_field;
			
			var hitmines = str_field.filter(function(n) {
				return minefield.indexOf(n) !== -1;
			});
			

			if(json.minesBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.minesBet.payout) - parseFloat(json.minesBet.amount);
			profit_total += parseFloat(json.minesBet.payout) - parseFloat(json.minesBet.amount);
			wagered += parseFloat(json.minesBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.minesBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = str_field.length
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML =  minefield.length + "|" + str_field.length
			lastBet.targetNumber =  minefield.length + "|" + str_field.length
			tdRollNumber.innerHTML = hitmines;
			tdNonce.innerHTML = json.minesBet.game;
			tdBetID.innerHTML = json.minesBet.id;
			tdPayout.innerHTML = json.minesBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("casesBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.casesBet.user.name
			lastBet.amount = json.casesBet.amount;
			lastBet.payoutMultiplier = json.casesBet.payoutMultiplier;
			lastBet.Roll = json.casesBet.state.result;
			lastBet.payout = json.casesBet.payout;
			
			
			

			if(json.casesBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.casesBet.payout) - parseFloat(json.casesBet.amount);
			profit_total += parseFloat(json.casesBet.payout) - parseFloat(json.casesBet.amount);
			wagered += parseFloat(json.casesBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.casesBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = json.casesBet.state.difficulty
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML =  json.casesBet.state.difficulty
			lastBet.targetNumber =  json.casesBet.state.difficulty
			tdRollNumber.innerHTML = json.casesBet.state.result;
			tdNonce.innerHTML = json.casesBet.game;
			tdBetID.innerHTML = json.casesBet.id;
			tdPayout.innerHTML = json.casesBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("snakesBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.snakesBet.user.name
			lastBet.amount = json.snakesBet.amount;
			lastBet.payoutMultiplier = json.snakesBet.payoutMultiplier;
			
			lastBet.payout = json.snakesBet.payout;
			
			
			

			if(json.snakesBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.snakesBet.payout) - parseFloat(json.snakesBet.amount);
			profit_total += parseFloat(json.snakesBet.payout) - parseFloat(json.snakesBet.amount);
			wagered += parseFloat(json.snakesBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.snakesBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = rolls
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML =  json.snakesBet.state.difficulty + "|" + rolls
			lastBet.targetNumber =  json.snakesBet.state.difficulty + "|" + rolls
			
			
			let snakecount = 0
			Object.keys(json.snakesBet.state.rounds).forEach(function (key) {
			   if(json.snakesBet.state.rounds[key].payoutMultiplier > 0){
				   snakecount++;
			   }
			});
			lastBet.Roll = snakecount;
			tdRollNumber.innerHTML = snakecount;
			tdNonce.innerHTML = json.snakesBet.game;
			tdBetID.innerHTML = json.snakesBet.id;
			tdPayout.innerHTML = json.snakesBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("rockPaperScissorsBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.rockPaperScissorsBet.user.name
			lastBet.amount = json.rockPaperScissorsBet.amount;
			lastBet.payoutMultiplier = json.rockPaperScissorsBet.payoutMultiplier;
			lastBet.Roll = json.rockPaperScissorsBet.payoutMultiplier;
			lastBet.payout = json.rockPaperScissorsBet.payout;
			
			
			

			if(json.rockPaperScissorsBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.rockPaperScissorsBet.payout) - parseFloat(json.rockPaperScissorsBet.amount);
			profit_total += parseFloat(json.rockPaperScissorsBet.payout) - parseFloat(json.rockPaperScissorsBet.amount);
			wagered += parseFloat(json.rockPaperScissorsBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.rockPaperScissorsBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = json.rockPaperScissorsBet.state.difficulty
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML =  guesses.length
			lastBet.targetNumber =  guesses.length
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdNonce.innerHTML = json.rockPaperScissorsBet.game;
			tdBetID.innerHTML = json.rockPaperScissorsBet.id;
			tdPayout.innerHTML = json.rockPaperScissorsBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("slotsTomeOfLifeBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.slotsTomeOfLifeBet.user.name
			lastBet.amount = json.slotsTomeOfLifeBet.amount;
			lastBet.payoutMultiplier = json.slotsTomeOfLifeBet.payoutMultiplier;
			lastBet.Roll = json.slotsTomeOfLifeBet.payoutMultiplier;
			lastBet.payout = json.slotsTomeOfLifeBet.payout;
			
			
			

			if(json.slotsTomeOfLifeBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.slotsTomeOfLifeBet.payout) - parseFloat(json.slotsTomeOfLifeBet.amount);
			profit_total += parseFloat(json.slotsTomeOfLifeBet.payout) - parseFloat(json.slotsTomeOfLifeBet.amount);
			wagered += parseFloat(json.slotsTomeOfLifeBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.slotsTomeOfLifeBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = lines
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML =  lines
			lastBet.targetNumber = lines
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdNonce.innerHTML = json.slotsTomeOfLifeBet.game;
			tdBetID.innerHTML = json.slotsTomeOfLifeBet.id;
			tdPayout.innerHTML = json.slotsTomeOfLifeBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("slotsBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.slotsBet.user.name
			lastBet.amount = json.slotsBet.amount;
			lastBet.payoutMultiplier = json.slotsBet.payoutMultiplier;
			lastBet.Roll = json.slotsBet.payoutMultiplier;
			lastBet.payout = json.slotsBet.payout;
			
			
			

			if(json.slotsBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.slotsBet.payout) - parseFloat(json.slotsBet.amount);
			profit_total += parseFloat(json.slotsBet.payout) - parseFloat(json.slotsBet.amount);
			wagered += parseFloat(json.slotsBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.slotsBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = lines
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = lines
			lastBet.targetNumber = lines
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdNonce.innerHTML = json.slotsBet.game;
			tdBetID.innerHTML = json.slotsBet.id;
			tdPayout.innerHTML = json.slotsBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}

		if(json.hasOwnProperty("slotsSamuraiBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			
	
			lastBet.name = json.slotsSamuraiBet.user.name
			lastBet.amount = json.slotsSamuraiBet.amount;
			lastBet.payoutMultiplier = json.slotsSamuraiBet.payoutMultiplier;
			lastBet.Roll = json.slotsSamuraiBet.payoutMultiplier;
			lastBet.payout = json.slotsSamuraiBet.payout;
			
			
			

			if(json.slotsSamuraiBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.slotsSamuraiBet.payout) - parseFloat(json.slotsSamuraiBet.amount);
			profit_total += parseFloat(json.slotsSamuraiBet.payout) - parseFloat(json.slotsSamuraiBet.amount);
			wagered += parseFloat(json.slotsSamuraiBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.slotsSamuraiBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = 0
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = spinType === "complete" ? "" : spinType
			lastBet.targetNumber = spinType === "complete" ? "" : spinType
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdNonce.innerHTML = json.slotsSamuraiBet.game;
			tdBetID.innerHTML = json.slotsSamuraiBet.id;
			tdPayout.innerHTML = json.slotsSamuraiBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
			
			if(json.slotsSamuraiBet.state.nextSpinType === "special" || json.slotsSamuraiBet.state.nextSpinType === "bonus"){
				samuraiNext()
				samuraiskip = true
				spinType = json.slotsSamuraiBet.state.nextSpinType
				return;
			}
		}
		
		if(json.hasOwnProperty("slotsSamuraiNext"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.slotsSamuraiNext.user.name
			lastBet.amount = json.slotsSamuraiNext.amount;
			lastBet.payoutMultiplier = json.slotsSamuraiNext.payoutMultiplier;
			lastBet.Roll = json.slotsSamuraiNext.payoutMultiplier;
			lastBet.payout = json.slotsSamuraiNext.payout;
			
			
			

			if(json.slotsSamuraiNext.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.slotsSamuraiNext.payout) - parseFloat(json.slotsSamuraiNext.amount);
			profit_total += parseFloat(json.slotsSamuraiNext.payout) - parseFloat(json.slotsSamuraiNext.amount);
			wagered += parseFloat(json.slotsSamuraiNext.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.slotsSamuraiNext.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = 0
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = spinType === "complete" ? "" : spinType
			lastBet.targetNumber = spinType === "complete" ? "" : spinType
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdNonce.innerHTML = json.slotsSamuraiNext.game;
			tdBetID.innerHTML = json.slotsSamuraiNext.id;
			tdPayout.innerHTML = json.slotsSamuraiNext.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
			samuraiskip = false
			
			if(json.slotsSamuraiNext.state.nextSpinType === "special" || json.slotsSamuraiNext.state.nextSpinType === "bonus"){
					samuraiNext()
					spinType = json.slotsSamuraiNext.state.nextSpinType
					samuraiskip = true
					return;
				}
			}

		if(json.hasOwnProperty("diamondsBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.diamondsBet.user.name
			lastBet.amount = json.diamondsBet.amount;
			lastBet.payoutMultiplier = json.diamondsBet.payoutMultiplier;
			lastBet.Roll = json.diamondsBet.payoutMultiplier;
			lastBet.payout = json.diamondsBet.payout;
			
			
			

			if(json.diamondsBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.diamondsBet.payout) - parseFloat(json.diamondsBet.amount);
			profit_total += parseFloat(json.diamondsBet.payout) - parseFloat(json.diamondsBet.amount);
			wagered += parseFloat(json.diamondsBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.diamondsBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = 0
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = ""
			lastBet.targetNumber = ""
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdNonce.innerHTML = json.diamondsBet.game;
			tdBetID.innerHTML = json.diamondsBet.id;
			tdPayout.innerHTML = json.diamondsBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}
		if(json.hasOwnProperty("dartsBet"))
		{
			
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.dartsBet.user.name
			lastBet.amount = json.dartsBet.amount;
			lastBet.payoutMultiplier = json.dartsBet.payoutMultiplier;
			lastBet.Roll = json.dartsBet.payoutMultiplier;
			lastBet.payout = json.dartsBet.payout;
			
			
			

			if(json.dartsBet.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.dartsBet.payout) - parseFloat(json.dartsBet.amount);
			profit_total += parseFloat(json.dartsBet.payout) - parseFloat(json.dartsBet.amount);
			wagered += parseFloat(json.dartsBet.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.dartsBet.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = 0
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = json.dartsBet.state.difficulty
			lastBet.targetNumber = json.dartsBet.state.difficulty
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdNonce.innerHTML = json.dartsBet.game;
			tdBetID.innerHTML = json.dartsBet.id;
			tdPayout.innerHTML = json.dartsBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
		}
		if(json.hasOwnProperty("hiloBet"))
		{
			
			currentBet = json.hiloBet
			
		
		}	

		if(json.hasOwnProperty("hiloNext"))
		{
			currentBet = json.hiloNext
			if(json.hiloNext.active){
				cashout_done = false
				
	
			} else {
			cashout_done = true	
				
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.hiloNext.user.name
			lastBet.amount = json.hiloNext.amount;
			lastBet.payoutMultiplier = json.hiloNext.payoutMultiplier;
			lastBet.Roll = json.hiloNext.payoutMultiplier;
			lastBet.payout = json.hiloNext.payout;
			
			
			

			if(json.hiloNext.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.hiloNext.payout) - parseFloat(json.hiloNext.amount);
			profit_total += parseFloat(json.hiloNext.payout) - parseFloat(json.hiloNext.amount);
			wagered += parseFloat(json.hiloNext.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.hiloNext.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = 0
			cards = []
			cards.push(startcard.rank)
			json.hiloNext.state.rounds.forEach((index) => {
				cards.push(index.card.rank)
			});
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = ""
			lastBet.targetNumber = ""
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdRollChance.innerHTML = cards.join(",")
			tdNonce.innerHTML = json.hiloNext.game;
			tdBetID.innerHTML = json.hiloNext.id;
			tdPayout.innerHTML = json.hiloNext.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
			
			
			}
			
			
		
		}	

		if(json.hasOwnProperty("hiloCashout"))
		{
			cashout_done = true
			var table = document.getElementById("botHistory");
	
			lastBet.name = json.hiloCashout.user.name
			lastBet.amount = json.hiloCashout.amount;
			lastBet.payoutMultiplier = json.hiloCashout.payoutMultiplier;
			lastBet.Roll = json.hiloCashout.payoutMultiplier;
			lastBet.payout = json.hiloCashout.payout;
			
			
			

			if(json.hiloCashout.payoutMultiplier >= 1){
				win = true;
				lastBet.win = true;
				color = "#05f711"
				//win
				winstreak++;
				wins++;
				losestreak = 0;

			} else {

				win = false;
				lastBet.win = false;
				color = "#f72a42"
				losses++;
				losestreak++;
				winstreak = 0;

											
			} 
		
			current_profit = parseFloat(json.hiloCashout.payout) - parseFloat(json.hiloCashout.amount);
			profit_total += parseFloat(json.hiloCashout.payout) - parseFloat(json.hiloCashout.amount);
			wagered += parseFloat(json.hiloCashout.amount);
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = json.hiloCashout.amount.toFixed(8)
			
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			tdcheck.checked = "checked";
			tdcheck.id = "checked";
			
			
			lastBet.target = 0
			cards = []
			cards.push(startcard.rank)
			json.hiloCashout.state.rounds.forEach((index) => {
				cards.push(index.card.rank)
			});
			
			tdhigh.appendChild(tdcheck);
			tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + "x"
			tdProfit.innerHTML = current_profit.toFixed(8)
			tdTargetNumber.innerHTML = ""
			lastBet.targetNumber = ""
			tdRollNumber.innerHTML = lastBet.payoutMultiplier.toFixed(2);
			tdRollChance.innerHTML = cards.join(",")
			tdNonce.innerHTML = json.hiloCashout.game;
			tdBetID.innerHTML = json.hiloCashout.id;
			tdPayout.innerHTML = json.hiloCashout.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);	
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < lastBet.amount){
				highest_bet.pop();
				highest_bet.push(lastBet.amount);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;

			
			updateChart();
			
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)	
			
			
		
		}
		}
		if(game != "hilo"){
			cashout_done = true
		}
		var elem = document.getElementById("botMenuMode");
		var value = document.getElementById("botMenuMode").value;
		if(value == "lua"){
			sendLua();
		} else if(value == "js"){
			if(game == "hilo"){
			if(cashout_done) {
				dobet();
			} else {
				hiloguess = round()
			}
			} else {
				dobet();
			}
			
			
		}
		if(hiloguess == 3 && running == false && cashout_done == false && game === "hilo" && win == false){
			//cashout_done = true
			hiloCash()
		}
		}
		if(running && samuraiskip == false){
			sleepfor(sleeptime).then(() => {
			sleeptime = 0
			if(running){
			if(game == "hilo"){
				if(cashout_done){
				cashout_done = false
				hiloBet(nextbet, startcard)
				} else {
				if(hiloguess == 7 || hiloguess == 5 || hiloguess == 4 || hiloguess == 2){
					let lastCard = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
					if(hiloguess == 2){
						guessed = 'equal'
						hiloNext(guessed)
					} else if(hiloguess == 7){
						guessed = 'skip'
						hiloNext(guessed)
					} else if(hiloguess == 5){
					if(lastCard == "A"){
						guessed = "higher"
					}
					if(lastCard == "K"){
						guessed = "equal"
					}
					if(lastCard == "Q"){
						guessed = "higherEqual"
					}
					if(lastCard == "J"){
						guessed = "higherEqual"
					}
					if(parseInt(lastCard) <= 10 && parseInt(lastCard) != NaN){
						guessed = "higherEqual"
					}
					hiloNext(guessed)
					} else if(hiloguess == 4){
					if(lastCard == "A"){
						guessed = "equal"
					}
					if(lastCard == "K"){
						guessed = "lower"
					}
					if(lastCard == "Q"){
						guessed = "lowerEqual"
					}
					if(lastCard == "J"){
						guessed = "lowerEqual"
					}
					if(parseInt(lastCard) <= 10 && parseInt(lastCard) != NaN){
						guessed = "lowerEqual"
					}
					hiloNext(guessed)
					//hiloguess = 3
					} 
				} else if(hiloguess == 3){
					hiloCash()
					
				}
				}
				} 
			
			if(game == "tomeoflife"){
			tomeBet(nextbet, lines)
			} 
			if(game == "scarabspin"){
			scarabBet(nextbet, lines)
			} 
			if(game == "bluesamurai"){
			 samuraiBet(nextbet)
			} 
			if(game == "diamonds"){
			diamondBet(nextbet)
			} 
			if(game == "cases"){
			caseBet(nextbet, difficulty)
			} 
			if(game == "videopoker"){
			videopokerBet(nextbet)
			} 
			if(game == "rps"){
			rockpaperBet(nextbet, guesses)
			} 
			if(game == "flip"){
			flipBet(nextbet, guesses)
			} 
			if(game == "snakes"){
			snakesBet(nextbet, difficulty, rolls)
			} 
			if(game == "pump"){
			pumpBet(nextbet, pumps, difficulty)
			} 
			if(game == "baccarat"){
			baccaratbet(tie, player, banker)
			} 
			if(game == "dragontower"){
			dragontowerBet(nextbet, difficulty, eggs)
			} 			
			if(game == "roulette"){
			roulettebet(chips)
			} 
			if(game == "wheel"){
			wheelbet(nextbet, segments, risk)
			} 		
			if(game == "plinko"){
			plinkobet(nextbet, rows, risk)
			} 
			if(game == "mines"){
			minebet(nextbet, fields, mines)
			}
			if(game == "keno"){
			kenobet(nextbet, numbers, risk)
			}
			if(game == "dice"){
			DiceBet(nextbet, chance, bethigh)
			}
			if(game == "limbo"){
			LimboBet(nextbet, target);
			}
			if(game == "darts"){
			dartsBet(nextbet, difficulty)
			} 
			}
			});
		}		
}



function stop(){

	running = false;
	run_clicked = false;
	simrunning = false;
	cashout_done = false;
	btnStart.disabled = false;
	fastmode = false;
	mirror = document.getElementById("mirrors").value;
	document.getElementById("result").innerHTML = ""
	for (var i=0; i<timeouts.length; i++) {
	  clearTimeout(timeouts[i]);
	}
	timeouts = [];
	dobet = function(){}
}

function resetAll(){
 resetstats();
 resetChart();
 deleteTable();
 deleteLogs();
}

function payouted(condition, target, edge, maxroll) {
	var payout = 0;
  if (condition === 'above') {
  if(mirror.includes("primedice")){
		payout = parseFloat((99.9999999 - edge) / (99.9999999 - target));
	} else {
		payout = parseFloat((maxroll - edge) / (maxroll - target));
	}
    return payout;
  } else {
    payout = parseFloat((maxroll - edge) / target);
    return payout;
  }
  return payout;
}

function op(roll, condition, target) {
  var op = {
    'above': roll > target,
    'below': roll < target
  };
  return op[condition];
}


function RunSimDice(){
	timeout();
	function timeout() {
		setTimeout(function () {
			if(simrunning){
				serverSeed = document.getElementById('serverseed').value;
				clientSeed = document.getElementById('clientseed').value;
				document.getElementById('nonce').value = nonce;
				let rolled = 1
				if(mirror.includes("primedice")){
					rolled = generatePrimeDiceResult(serverSeed, clientSeed, nonce) 
				} else {
					rolled = generateDiceResult(serverSeed, clientSeed, nonce)
				}
				logSim("nonce: " + nonce + "| result: " + toFixedNo(rolled, 4));
				nonce += 1;
				document.getElementById('nonce').value = nonce;
				if(bethigh){
					if(mirror.includes("primedice")){
						target_sim = 100 - chance;
					} else {
						target_sim = 100 - chance;			
					}
					condition_sim = "above";	
				} else {
					target_sim = chance;
					condition_sim = "below";
				}
				
				multiplier = payouted(condition_sim, target_sim, 1, 100);
				if (op(rolled, condition_sim, target_sim)){
					win = true;
					lastBet.win = true;
					color = "green"
					//win
					winstreak++;
					wins++;
					losestreak = 0;
				} else {
					win = false;
					lastBet.win = false;
					color = "red"
					losses++;
					losestreak++;
					winstreak = 0;
					multiplier = 0;
				}
				
			var table = document.getElementById("botHistory");
			
			
			lastBet.amount = nextbet;
			lastBet.payoutMultiplier = multiplier;
			lastBet.Roll = rolled;
			lastBet.payout = multiplier * nextbet;
			lastBet.target = chance;
			
			if(condition_sim == "below"){
				bethigh = false;
			} else {
				bethigh = true;
			}
			
			if(bethigh == false){
				lastBet.chance = chance;
			} else {
				if(mirror.includes("primedice")){
					lastBet.chance = 100 - 0.01 - chance;
				} else {
					lastBet.chance = 100 - chance;
				}
			}
			
			
		
			current_profit = (nextbet * multiplier) - nextbet
			profit_total += (nextbet * multiplier) - nextbet
			wagered += parseFloat(nextbet);
			balance_sim += (nextbet * multiplier) - nextbet
			balance =  balance_sim;
			bet_sim = nextbet;
			
			var row = document.createElement("tr");
			
			var tdbets = document.createElement("td");
			var tdamount = document.createElement("td");
			var tdhigh = document.createElement("td");
			var tdTargetChance = document.createElement("td");
			var tdRollChance= document.createElement("td");
			var tdProfit = document.createElement("td");
			var tdPayout = document.createElement("td");
			var tdTargetNumber = document.createElement("td");
			var tdRollNumber = document.createElement("td");
			var tdNonce = document.createElement("td");
			var tdBetID = document.createElement("td");
			
			tdbets.innerHTML = wins + losses;
			tdamount.innerHTML = bet_sim.toFixed(8)
			
			var tdcheck = document.createElement("input");
			tdcheck.type = "checkbox";
			tdcheck.name = "checked";
			if(bethigh){
				tdcheck.checked = true;
			} else {
				tdcheck.checked = false;
			}
			tdcheck.id = "checked";
			
			tdhigh.appendChild(tdcheck);
			
			if(bethigh == false){
				tdTargetChance.innerHTML = lastBet.chance.toFixed(4)
				tdRollChance.innerHTML = toFixedNo(rolled, 4);
			} else {
				tdTargetChance.innerHTML = (100 - lastBet.chance).toFixed(4)
				if(mirror.includes("primedice")){
					tdRollChance.innerHTML = (100 - 0.01 - rolled).toFixed(4)
				} else {
					tdRollChance.innerHTML = (100 - rolled).toFixed(4)
				}
			}
			
			tdProfit.innerHTML = current_profit.toFixed(8)
			
			if(bethigh){
				if(mirror.includes("primedice")){
					lastBet.targetNumber = (99 /  (100 - lastBet.chance - 0.01));
					tdTargetNumber.innerHTML = ">" + (99 /  (100 - lastBet.chance - 0.01)).toFixed(4)
				} else {
					lastBet.targetNumber = (99 / (100 - lastBet.chance));
					tdTargetNumber.innerHTML = ">" + (99 / (100 - lastBet.chance)).toFixed(4)
				}
			} else {
				lastBet.targetNumber = (99 / lastBet.chance);
				tdTargetNumber.innerHTML = ">" + (99 / lastBet.chance).toFixed(4)
			}
			
			
			tdRollNumber.innerHTML = toFixedNo(rolled, 4);
			tdNonce.innerHTML = "sim";
			tdBetID.innerHTML = "id";
			tdPayout.innerHTML = lastBet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdRollChance);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdNonce);
			row.appendChild(tdBetID);			
					
			

				
			
			
			
			if(win){
				row.style.background = "#91F190";
			} else {
				row.style.background = "#FFC0CB";
			}
			
			table.prepend(row);
			
			if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
			{
				table.deleteRow(table.rows.length - 1);
			}
		
			
			if(winstreak > losestreak){
				currentstreak = winstreak;
			} else {
				currentstreak = -losestreak;
			}
		
			if(highest_bet[highest_bet.length-1] < nextbet){
				highest_bet.pop();
				highest_bet.push(nextbet);
			}
			if(highest_profit[highest_profit.length-1] < profit_total){
				highest_profit.pop();
				highest_profit.push(profit_total);
			}
			if(lowest_profit[lowest_profit.length-1] > profit_total){
				lowest_profit.pop();
				lowest_profit.push(profit_total);
			}
			if(highest_streak[highest_streak.length-1] < currentstreak){
				highest_streak.pop();
				highest_streak.push(currentstreak);
			}
			if(lowest_streak[lowest_streak.length-1] > currentstreak){
				lowest_streak.pop();
				lowest_streak.push(currentstreak);
			}

			profit = profit_total;
			previousbet = lastBet.amount
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
		
			
			updateChart();
			
			var balan = document.getElementById("botBalance");
			balan.innerHTML = balance_sim.toFixed(8);
			//document.getElementById("multi").innerHTML = toFixedNo(json.limboBet.state.result, 2);
			document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
			document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
			document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
			document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
			document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
			document.getElementById("botBets").innerHTML = bets;
			document.getElementById("botWins").innerHTML = wins;
			document.getElementById("botLosses").innerHTML = losses;
			document.getElementById("botCurrentStreak").innerHTML = currentstreak;
			document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
			document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
			document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
			
			lastBet.percent = (profit_total / started_bal * 100)
				
				

				var elem = document.getElementById("botMenuMode");
				var value = document.getElementById("botMenuMode").value;
				if(value == "lua"){
					sendLua();
				} else if(value == "js"){
					dobet();
				}
				 if(balance_sim >= nextbet){
					timeout();
				  } else {
					log('No enough balance to play.')
					btnStartSim.disabled = false;
					btnStart.disabled = false;
				 }
				
			}
		}, 1);
	}
}

var btnStartSim = document.getElementById("runsim");
btnStartSim.addEventListener('click', function() {  
	//loadLua();
	btnStartSim.disabled = true;
	running = false; 
	simrunning = true; 
	nonce = parseInt(document.getElementById('nonce').value);
	localStorage.setItem("jscode", htmlEditor2.getValue());
	localStorage.setItem("luacode", htmlEditor.getValue());
	
	var elem = document.getElementById("botMenuMode");
	var value = document.getElementById("botMenuMode").value;
	if(value == "lua"){
		var code = htmlEditor.getValue();
			code = code.replace(/!=/g, "~=");
			code = code.replace(/!/g, "not ");
			code = code.replace(/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, '$1=$1+$2 ');
			code = code.replace(/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, '$1=$1-$2 ');
			code = code.replace(/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, '$1=$1*$2 ');
			code = code.replace(/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, '$1=$1/$2 ');
			fengari.load(code)();
			nextbet = fengari.load('return nextbet')();
			chance = fengari.load('return chance')();
			bethigh = fengari.load('return bethigh')();
			balance_sim = fengari.load('return balance')();
			//currency = document.getElementById('botMenuCoin').value;
	 
			 btnStart.disabled = true; 
			 //tokenapi = document.getElementById("tokenkey").value; 
			 //userBalances(); 
			 bet_sim = nextbet;
			 started_bal = balance_sim; 
			 balance = started_bal
			 //amount = nextbet;

				var selectedGame = document.getElementById("gameselect").value;
				if(selectedGame == "dice"){
					RunSimDice();
					drawChart();
				} else if(selectedGame == "limbo"){
					 drawChart();
				}
	} else if(value == "js"){
		//eval(htmlEditor2.getValue());
	setTimeout(htmlEditor2.getValue() + `
		balance_sim = balance;
		//currency = document.getElementById('botMenuCoin').value;
 
		 btnStart.disabled = true; 
		 //tokenapi = document.getElementById("tokenkey").value; 
		 //userBalances(); 
		 bet_sim = nextbet;
		 started_bal = balance_sim; 
		 balance = started_bal
		 //amount = nextbet;

			var selectedGame = document.getElementById("gameselect").value;
			if(selectedGame == "dice"){
				RunSimDice();
				drawChart();
			} else if(selectedGame == "limbo"){
				 drawChart();
			}`, 0);
	}		
 
 



}, false);

var btnStopSim = document.getElementById("stopsim");
btnStopSim.addEventListener('click', function() {  simrunning = false; btnStartSim.disabled = false; btnStart.disabled = false;}, false);



function generateDiceResult(serverSeed, clientSeed, nonce) {
  let round = 0;
  let nonceSeed = `${clientSeed}:${nonce}:${round}`;
  let hash = CryptoJS.HmacSHA256(nonceSeed, serverSeed).toString();
  let i = 0;
  let end = 0;
  while (i < 4) {
      end += parseInt(hash.substring(i * 2, i * 2 + 2), 16) / Math.pow(256, i + 1);
      i++;
  }
  end *= 10001;
  end = parseInt(end) / 100 
  //end = parseFloat(end)
  return end
}



function generatePrimeDiceResult(serverSeed, clientSeed, nonce) {
  const nonceClientSeed = `${clientSeed}-${nonce}`;

  const hex =  CryptoJS.HmacSHA512(nonceClientSeed, serverSeed).toString();

  let index = 0;

  let lucky = parseInt(hex.substring(index * 5, index * 5 + 5), 16);

  while (lucky >= 1e6) {
    index += 1;
    lucky = parseInt(hex.substring(index * 5, index * 5 + 5), 16);

    // we have reached the end of the hash and they all must have been ffffff
    if (index * 5 + 5 > 129) {
      lucky = 9999;
      break;
    }
  }

  return [lucky % 1e4] * 1e-2;
}


function resetstats(){
	losestreak = 0;
	winstreak  = 0;
	highest_streak = [0];
	lowest_streak = [0];
	current_balance = 0;
	betcount = 0;
	bets = 0
	wins = 0;
	losses = 0;
	wagered = 0;
	profit_total = 0;
	highest_profit = [0];
	lowest_profit = [0];
	highest_bet = [0];
	currentstreak = 0;
	profit = 0;
	currentprofit = 0;
	current_profit = 0;
	started_bal = balance;

	profit = profit_total;
	currentprofit = current_profit;
	bets = betcount;
	document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
	document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
	
	
	resetChart();
	
	document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
	document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
	document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
	document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
	document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
	document.getElementById("botBets").innerHTML = bets;
	document.getElementById("botWins").innerHTML = wins;
	document.getElementById("botLosses").innerHTML = losses;
	document.getElementById("botCurrentStreak").innerHTML = currentstreak;
	document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
}

function username(){
	return lastBet.name
}

function loadLua() {
    fengari.load(`function resetseed(n)
        js.global:resetseed(n)
    end`)()
    fengari.load(`function print(n)
        js.global:log(n)
    end`)()
    fengari.load(`function log(n)
        js.global:log(n)
    end`)()
    fengari.load(`function start()
        js.global:start()
    end`)()
    fengari.load(`function stop()
        js.global:stop()
    end`)()
    fengari.load(`function resetstats()
        js.global:resetstats()
    end`)()
	fengari.load(`function sleep(n)
        js.global:sLeep(n)
    end`)()
	fengari.load(`function vault(n)
        js.global:vault(n)
    end`)()
	fengari.load(`function username()
        return js.global:username()
    end`)()
	var elem = document.getElementById("botMenuMode");
	var value = document.getElementById("botMenuMode").value;
	if(value == "lua"){
		fengari.load('balance=' + balance)()
	}
}

function sendLua() {
    // Basic stats
    fengari.load(`
        previousbet = ${previousbet}
        win = ${win}
        balance = ${balance}
        profit = ${profit_total}
        currentprofit = ${currentprofit}
        currency = ${JSON.stringify(currency)}
    `)();

    // Counters
    fengari.load(`
        bets = ${betcount}
        wins = ${wins}
        losses = ${losses}
        winstreak = ${winstreak}
        losestreak = ${losestreak}
        currentstreak = ${currentstreak}
    `)();

    // Last bet info
    if (lastBet) {
        fengari.load(`
            lastBet = {
				win = ${win},
                chance = ${lastBet.chance},
                roll = ${lastBet.Roll},
                target = ${lastBet.target},
                payout = ${lastBet.payout},
                amount = ${lastBet.amount},
				payoutMultiplier = ${lastBet.payoutMultiplier},
                profit = ${profit_total}
            }
        `)();
    }

    // Set game before calling dobet
    if (!game) {
        game = document.getElementById("gameselect").value;
    }
    fengari.load(`game = ${JSON.stringify(game)}`)();

    // Call Lua logic
    fengari.load(`dobet()`)();

    // Fetch updated Lua values
    game = fengari.load(`return game`)();
	fastmode = fengari.load(`return fastmode`)();
    nextbet = fengari.load(`return nextbet`)();
    chance = fengari.load(`return chance`)();
    bethigh = fengari.load(`return bethigh`)();
    target = fengari.load(`return target`)();
    pumps = fengari.load(`return pumps`)();
    difficulty = fengari.load(`return difficulty`)();
    tie = fengari.load(`return tie`)();
    player = fengari.load(`return player`)();
    banker = fengari.load(`return banker`)();

    // Arrays (safely stringify and parse)
    eggs = JSON.parse(fengari.load(`return "[" .. table.concat(eggs or {1}, ",") .. "]"`)());
    fields = JSON.parse(fengari.load(`return "[" .. table.concat(fields or {1}, ",") .. "]"`)());
    numbers = JSON.parse(fengari.load(`return "[" .. table.concat(numbers or {1}, ",") .. "]"`)());
    guesses = fengari.load(`return table.concat(guesses or {1}, ",")`)().split(",");

    // Direct values
    chips = fengari.load(`return chips`)();
    if (chips !== undefined) chips = JSON.parse(chips);

    mines = fengari.load(`return mines`)();
    rows = fengari.load(`return rows`)();
    lines = fengari.load(`return lines`)();
    segments = fengari.load(`return segments`)();
    rolls = fengari.load(`return rolls`)();
    startcard = fengari.load(`return startcard`)();

    // Token key
    tokenapi = fengari.load(`return tokenapi`)();
    if (tokenapi === undefined || tokenapi === null) {
        tokenapi = document.getElementById("tokenkey").value;
    }
	
	if (fastmode === undefined || fastmode === null) {
        fastmode = document.getElementById('speedChange').checked
    }
}


function start(){
		running = true; cashout_done = false; countTime(); 
		fastmode = document.querySelector('#speedChange').checked;
		mirror = document.getElementById("mirrors").value;
		run_clicked = true;document.getElementById("result").innerHTML = ""
		var elem = document.getElementById("botMenuMode");
		var value = document.getElementById("botMenuMode").value;
		if(value == "lua"){
			game=undefined
			fengari.load('game=undefined')()
			loadLua();	
			var code = htmlEditor.getValue();
				code = code.replace(/!=/g, "~=");
				code = code.replace(/!/g, "not ");
				code = code.replace(/([a-zA-Z]*[0-9]*\s*)\+\=(\s*[a-zA-Z]*[0-9]*)/g, '$1=$1+$2 ');
				code = code.replace(/([a-zA-Z]*[0-9]*\s*)\-\=(\s*[a-zA-Z]*[0-9]*)/g, '$1=$1-$2 ');
				code = code.replace(/([a-zA-Z]*[0-9]*\s*)\*\=(\s*[a-zA-Z]*[0-9]*)/g, '$1=$1*$2 ');
				code = code.replace(/([a-zA-Z]*[0-9]*\s*)\/\=(\s*[a-zA-Z]*[0-9]*)/g, '$1=$1/$2 ');
				fengari.load(code)();
				game = fengari.load('return game')();
				fastmode = fengari.load(`return fastmode`)();
				nextbet = fengari.load('return nextbet')();
				chance = fengari.load('return chance')();
				bethigh = fengari.load('return bethigh')();
				target = fengari.load('return target')();
				pumps = fengari.load('return pumps')();
				difficulty = fengari.load('return difficulty')();
				tie = fengari.load('return tie')();
				player = fengari.load('return player')();
				banker = fengari.load('return banker')();
				eggs = fengari.load('return "[" .. table.concat(eggs or {1}, ",") .. "]"')();
				chips = fengari.load('return chips')();
				fields = fengari.load('return "[" .. table.concat(fields or {1}, ",") .. "]"')();
				numbers = fengari.load('return "[" .. table.concat(numbers or {1}, ",") .. "]"')();
				mines = fengari.load('return mines')();
				rows = fengari.load('return rows')();
				lines = fengari.load('return lines')();
				segments = fengari.load('return segments')();
				guesses = fengari.load('return table.concat(guesses or {1}, ",")')();
				rolls = fengari.load('return rolls')();
				startcard = fengari.load('return startcard')();
				
				
		
				if (chips != undefined){
				chips = JSON.parse(chips);
				}
				
				eggs = JSON.parse(eggs)
				fields = JSON.parse(fields)
				numbers = JSON.parse(numbers)
				guesses = guesses.split(',')
				
				tokenapi = fengari.load(`return tokenapi`)();
				if (tokenapi === undefined || tokenapi === null) {
					tokenapi = document.getElementById("tokenkey").value;
				}
							
				if (fastmode === undefined || fastmode === null) {
					fastmode = document.getElementById('speedChange').checked
				}
				
				
				
				//localStorage.setItem("jscode", htmlEditor2.getValue());
				localStorage.setItem("luacode", htmlEditor.getValue());
			 
			 //currency = document.getElementById('botMenuCoin').value;
			 
			 btnStart.disabled = true; 
			 //tokenapi = document.getElementById("tokenkey").value; 
			 userBalances(); 
			 started_bal = balance; 
			 amount = nextbet;
				var selectedGame = document.getElementById("gameselect").value;
				if(game === undefined){
					game = selectedGame
				}
				if(game == "hilo"){
				hiloBet(nextbet, startcard)
				} 
				if(game == "bluesamurai"){
				 samuraiBet(nextbet)
				} 
				if(game == "darts"){
					if(fastmode){
						setTimeout(function () {
							dartsBet(nextbet, difficulty)
						}, 5);
						setTimeout(function () {
							dartsBet(nextbet, difficulty)
						}, 50);
					}  else {
						dartsBet(nextbet, difficulty)
					}
				}
				if(game == "tomeoflife"){
					if(fastmode){
						setTimeout(function () {
							tomeBet(nextbet, lines)
						}, 5);
						setTimeout(function () {
							tomeBet(nextbet, lines)
						}, 50);
					}  else {
						tomeBet(nextbet, lines)
					}
				
				} 
				if(game == "scarabspin"){
					if(fastmode){
						setTimeout(function () {
							scarabBet(nextbet, lines)
						}, 5);
						setTimeout(function () {
							scarabBet(nextbet, lines)
						}, 50);
					}  else {
						scarabBet(nextbet, lines)
					}
				
				} 
				if(game == "diamonds"){
					if(fastmode){
						setTimeout(function () {
							diamondBet(nextbet)
						}, 5);
						setTimeout(function () {
							diamondBet(nextbet)
						}, 50);
					}  else {
						diamondBet(nextbet)
					}
				
				} 
				if(game == "cases"){
					if(fastmode){
						setTimeout(function () {
							caseBet(nextbet, difficulty)
						}, 5);
						setTimeout(function () {
							caseBet(nextbet, difficulty)
						}, 50);
					}  else {
						caseBet(nextbet, difficulty)
					}
				
				} 
				if(game == "rps"){
					if(fastmode){
						setTimeout(function () {
							rockpaperBet(nextbet, guesses)
						}, 5);
						setTimeout(function () {
							rockpaperBet(nextbet, guesses)
						}, 50);
					}  else {
						rockpaperBet(nextbet, guesses)
					}
				
				} 
				if(game == "flip"){
					if(fastmode){
						setTimeout(function () {
							flipBet(nextbet, guesses)
						}, 5);
						setTimeout(function () {
							flipBet(nextbet, guesses)
						}, 50);
					}  else {
						flipBet(nextbet, guesses)
					}
				
				} 
				if(game == "snakes"){
					if(fastmode){
						setTimeout(function () {
							snakesBet(nextbet, difficulty, rolls)
						}, 5);
						setTimeout(function () {
							snakesBet(nextbet, difficulty, rolls)
						}, 50);
					}  else {
						snakesBet(nextbet, difficulty, rolls)
					}
				
				} 
				if(game == "pump"){
					if(fastmode){
						setTimeout(function () {
							pumpBet(nextbet, pumps, difficulty)
						}, 5);
						setTimeout(function () {
							pumpBet(nextbet, pumps, difficulty)
						}, 50);
					}  else {
						pumpBet(nextbet, pumps, difficulty)
					}
				
				} 
				if(game == "baccarat"){
					if(fastmode){
						setTimeout(function () {
							baccaratbet(tie, player, banker)
						}, 5);
						setTimeout(function () {
							baccaratbet(tie, player, banker)
						}, 50);
					}  else {
						baccaratbet(tie, player, banker)
					}
				
				} 
				if(game == "dragontower"){
					if(fastmode){
						setTimeout(function () {
							dragontowerBet(nextbet, difficulty, eggs)
						}, 5);
						setTimeout(function () {
							dragontowerBet(nextbet, difficulty, eggs)
						}, 50);
					}  else {
						dragontowerBet(nextbet, difficulty, eggs)
					}
				
				} 			
				if(game == "roulette"){
					if(fastmode){
						setTimeout(function () {
							roulettebet(chips)
						}, 5);
						setTimeout(function () {
							roulettebet(chips)
						}, 50);
					}  else {
						roulettebet(chips)
					}
				
				} 
				if(game == "wheel"){
					if(fastmode){
						setTimeout(function () {
							wheelbet(nextbet, segments, risk)
						}, 5);
						setTimeout(function () {
							wheelbet(nextbet, segments, risk)
						}, 50);
					}  else {
						wheelbet(nextbet, segments, risk)
					}
				
				} 		
				if(game == "plinko"){
					if(fastmode){
						setTimeout(function () {
							plinkobet(nextbet, rows, risk)
						}, 5);
						setTimeout(function () {
							plinkobet(nextbet, rows, risk)
						}, 50);
					}  else {
						plinkobet(nextbet, rows, risk)
					}
				
				} 
				if(game == "mines"){
					if(fastmode){
						setTimeout(function () {
							minebet(nextbet, fields, mines)
						}, 5);
						setTimeout(function () {
							minebet(nextbet, fields, mines)
						}, 50);
					}  else {
						minebet(nextbet, fields, mines)
					}
				
				}
				if(game == "keno"){
					if(fastmode){
						setTimeout(function () {
							kenobet(nextbet, numbers, risk)
						}, 5);
						setTimeout(function () {
							kenobet(nextbet, numbers, risk)
						}, 50);
					}  else {
						kenobet(nextbet, numbers, risk)
					}
				
				}
				if(game == "dice"){
					if(fastmode){
						setTimeout(function () {
							DiceBet(nextbet, chance, bethigh)
						}, 5);
						setTimeout(function () {
							DiceBet(nextbet, chance, bethigh)
						}, 50);
					}  else {
						DiceBet(nextbet, chance, bethigh)
					}
				
				}
				if(game == "limbo"){
					if(fastmode){
						setTimeout(function () {
							LimboBet(nextbet, target);
						}, 5);
						setTimeout(function () {
							LimboBet(nextbet, target);
						}, 50);
					}  else {
						LimboBet(nextbet, target);
					}
				
				}
			 
			 drawChart();
		} else if(value == "js"){
			//eval(htmlEditor2.getValue());
			game=undefined
			setTimeout(htmlEditor2.getValue() + `
			localStorage.setItem("jscode", htmlEditor2.getValue());
			//localStorage.setItem("luacode", htmlEditor.getValue());
			 sleeptime = 0
			 sleep(0)
			 //currency = document.getElementById('botMenuCoin').value;
			 //patternlist = []
			 //Array.prototype.push.apply(patternlist,pattern)
			 btnStart.disabled = true; 
			 //tokenapi = document.getElementById("tokenkey").value; 
			 userBalances(); 
			 started_bal = balance; 
			 //amount = nextbet;
				var selectedGame = document.getElementById("gameselect").value;
				if(game === undefined){
					game = selectedGame
				}
				if(game == "hilo"){
				hiloBet(nextbet, startcard)
				} 
				if(game == "bluesamurai"){
				 samuraiBet(nextbet)
				}
				if(game == "darts"){
					if(fastmode){
						setTimeout(function () {
							dartsBet(nextbet, difficulty)
						}, 5);
						setTimeout(function () {
							dartsBet(nextbet, difficulty)
						}, 50);
					}  else {
						dartsBet(nextbet, difficulty)
					}
				}
				if(game == "tomeoflife"){
					if(fastmode){
						setTimeout(function () {
							tomeBet(nextbet, lines)
						}, 5);
						setTimeout(function () {
							tomeBet(nextbet, lines)
						}, 50);
					}  else {
						tomeBet(nextbet, lines)
					}
				
				} 
				if(game == "scarabspin"){
					if(fastmode){
						setTimeout(function () {
							scarabBet(nextbet, lines)
						}, 5);
						setTimeout(function () {
							scarabBet(nextbet, lines)
						}, 50);
					}  else {
						scarabBet(nextbet, lines)
					}
				
				} 
				if(game == "diamonds"){
					if(fastmode){
						setTimeout(function () {
							diamondBet(nextbet)
						}, 5);
						setTimeout(function () {
							diamondBet(nextbet)
						}, 50);
					}  else {
						diamondBet(nextbet)
					}
				
				} 
				if(game == "cases"){
					if(fastmode){
						setTimeout(function () {
							caseBet(nextbet, difficulty)
						}, 5);
						setTimeout(function () {
							caseBet(nextbet, difficulty)
						}, 50);
					}  else {
						caseBet(nextbet, difficulty)
					}
				
				} 
				if(game == "videopoker"){
					if(fastmode){
						setTimeout(function () {
							videopokerBet(nextbet)
						}, 5);
						setTimeout(function () {
							videopokerBet(nextbet)
						}, 50);
					}  else {
						videopokerBet(nextbet)
					}
				
				} 
				if(game == "rps"){
					if(fastmode){
						setTimeout(function () {
							rockpaperBet(nextbet, guesses)
						}, 5);
						setTimeout(function () {
							rockpaperBet(nextbet, guesses)
						}, 50);
					}  else {
						rockpaperBet(nextbet, guesses)
					}
				
				} 
				if(game == "flip"){
					if(fastmode){
						setTimeout(function () {
							flipBet(nextbet, guesses)
						}, 5);
						setTimeout(function () {
							flipBet(nextbet, guesses)
						}, 50);
					}  else {
						flipBet(nextbet, guesses)
					}
				
				} 
				if(game == "snakes"){
					if(fastmode){
						setTimeout(function () {
							snakesBet(nextbet, difficulty, rolls)
						}, 5);
						setTimeout(function () {
							snakesBet(nextbet, difficulty, rolls)
						}, 50);
					}  else {
						snakesBet(nextbet, difficulty, rolls)
					}
				
				} 
				if(game == "pump"){
					if(fastmode){
						setTimeout(function () {
							pumpBet(nextbet, pumps, difficulty)
						}, 5);
						setTimeout(function () {
							pumpBet(nextbet, pumps, difficulty)
						}, 50);
					}  else {
						pumpBet(nextbet, pumps, difficulty)
					}
				
				} 
				if(game == "baccarat"){
					if(fastmode){
						setTimeout(function () {
							baccaratbet(tie, player, banker)
						}, 5);
						setTimeout(function () {
							baccaratbet(tie, player, banker)
						}, 50);
					}  else {
						baccaratbet(tie, player, banker)
					}
				
				} 
				if(game == "dragontower"){
					if(fastmode){
						setTimeout(function () {
							dragontowerBet(nextbet, difficulty, eggs)
						}, 5);
						setTimeout(function () {
							dragontowerBet(nextbet, difficulty, eggs)
						}, 50);
					}  else {
						dragontowerBet(nextbet, difficulty, eggs)
					}
				
				} 			
				if(game == "roulette"){
					if(fastmode){
						setTimeout(function () {
							roulettebet(chips)
						}, 5);
						setTimeout(function () {
							roulettebet(chips)
						}, 50);
					}  else {
						roulettebet(chips)
					}
				
				} 
				if(game == "wheel"){
					if(fastmode){
						setTimeout(function () {
							wheelbet(nextbet, segments, risk)
						}, 5);
						setTimeout(function () {
							wheelbet(nextbet, segments, risk)
						}, 50);
					}  else {
						wheelbet(nextbet, segments, risk)
					}
				
				} 		
				if(game == "plinko"){
					if(fastmode){
						setTimeout(function () {
							plinkobet(nextbet, rows, risk)
						}, 5);
						setTimeout(function () {
							plinkobet(nextbet, rows, risk)
						}, 50);
					}  else {
						plinkobet(nextbet, rows, risk)
					}
				
				} 
				if(game == "mines"){
					if(fastmode){
						setTimeout(function () {
							minebet(nextbet, fields, mines)
						}, 5);
						setTimeout(function () {
							minebet(nextbet, fields, mines)
						}, 50);
					}  else {
						minebet(nextbet, fields, mines)
					}
				
				}
				if(game == "keno"){
					if(fastmode){
						setTimeout(function () {
							kenobet(nextbet, numbers, risk)
						}, 5);
						setTimeout(function () {
							kenobet(nextbet, numbers, risk)
						}, 50);
					}  else {
						kenobet(nextbet, numbers, risk)
					}
				
				}
				if(game == "dice"){
					if(fastmode){
						setTimeout(function () {
							DiceBet(nextbet, chance, bethigh)
						}, 5);
						setTimeout(function () {
							DiceBet(nextbet, chance, bethigh)
						}, 50);
					}  else {
						DiceBet(nextbet, chance, bethigh)
					}
				
				}
				if(game == "limbo"){
					if(fastmode){
						setTimeout(function () {
							LimboBet(nextbet, target);
						}, 5);
						setTimeout(function () {
							LimboBet(nextbet, target);
						}, 50);
					}  else {
						LimboBet(nextbet, target);
					}
				
				}
			 
			 drawChart();
			`, 0);
		}		

	

}
var btnStart = document.getElementById("botStartButton");

btnStart.addEventListener('click', function() {  if(document.getElementById("tokenkey").value.length < 96){return;}; start();}, false);

var btnStop = document.getElementById("botStopButton");
btnStop.addEventListener('click', function() {  btnStart.disabled = false; stop(); }, false);

/*
var btnKey= document.getElementById("getkey");
btnKey.addEventListener('click', function() {  
	if(getCookie("session") != undefined){
		tokenapi = getCookie("session"); 
		document.getElementById("tokenkey").value = tokenapi;
		localStorage.setItem("apitoken", tokenapi);
		initUser()
		startSocket();
	}
}, false);*/




function startSocket() {
    isReconnecting = false;
  // Close any existing sockets
  for (let s in opensocket) {
    opensocket[s].close();
  }
  opensocket = [];

  websocket = new WebSocket('wss://' + mirror + '/_api/websockets', 'graphql-transport-ws');
  opensocket.push(websocket);

	//isReconnecting = false;
	//scheduleReconnect();

  websocket.onopen = () => {
    //isReconnecting = true;

    websocket.send(JSON.stringify({
      type: "connection_init",
      payload: {
        accessToken: tokenapi,
        language: "en",
        lockdownToken: "s5MNWtjTM5TvCMkAzxov"
      }
    }));
	
	//clearInterval(pingInterval);
	//pingInterval = null;
	for (var i=0; i<pingSent.length; i++) {
	  clearTimeout(pingSent[i]);
	}
	pingSent = [];
	
	pingSent.push(setInterval(() => {
    if (websocket.readyState === WebSocket.OPEN) {
      websocket.send(JSON.stringify({ type: "ping" }));
      // Optional: Log for debugging
      // console.log("Ping sent");
    }
	}, 20000))
  };

  websocket.onmessage = (event) => {
    const data = event.data;
    const obj = JSON.parse(data);

    if (data.includes("connection_ack")) {
      subscribeToChannels();
    }

	if(obj.type === "complete"){
		//isReconnecting = false;
		//scheduleReconnect();
		return;
	} 

	if (obj.type === "pong") {
		return;
	}	
	
				if (obj.hasOwnProperty("payload")) {
				if(obj.payload.hasOwnProperty("errors")){
					//isReconnecting = false;
					//scheduleReconnect();
					//return;
				}				
				
				if (obj.payload.hasOwnProperty("data")) {
				if (obj.payload.data != undefined){
					isReconnecting = true;
				if (obj.payload.data.hasOwnProperty("availableBalances")) {
					if(obj.payload.data.availableBalances.balance.currency == currency){
					if(simrunning == false){
						var balan = document.getElementById("botBalance");
						balan.innerHTML = obj.payload.data.availableBalances.balance.amount.toFixed(8);
						current_balance = obj.payload.data.availableBalances.balance.amount;
						balance = current_balance;
						}
					}
				}
				if(obj.payload.data.hasOwnProperty("crash") && game == "crash" ){
					previousbet = nextbet;
					
					if(obj.payload.data.crash.event.status == "in_progress"){
						
						finished_round = false
						multiplier_start = obj.payload.data.crash.event.multiplier
						const counterEl = document.getElementById('result');
						 const randomValue = Math.random() * 100; // target number
						animateCounter(counterEl, obj.payload.data.crash.event.multiplier, 400, 2); // 1.5s duration
						//document.getElementById("result").innerHTML = obj.payload.data.crash.event.multiplier.toFixed(2) + 'x'
					} 
					
					if(obj.payload.data.crash.event.result == "autocashout")
					{
						cashedoutauto = true;
						//bet_has_been_made = false;
						color = "#05f711";
						bet_found = true;
						win = true;
						lastBet.win = true;
						lastBet.amount = previousbet;
						lastBet.payoutMultiplier = target;
						
						//win
						winstreak++;
						wins++;
						losestreak = 0;
						betcount++;
						bets = betcount;
						
					
						current_profit = parseFloat(nextbet * target) - parseFloat(nextbet);
						profit_total += parseFloat(nextbet * target) - parseFloat(nextbet);
						wagered += parseFloat(nextbet);
						
						var row = document.createElement("tr");
					
					
					
						row.style.background = "#91F190";
					
					
						var tdbets = document.createElement("td");
						var tdamount = document.createElement("td");
						var tdhigh = document.createElement("td");
						var tdTargetChance = document.createElement("td");
						var tdRollChance= document.createElement("td");
						var tdProfit = document.createElement("td");
						var tdPayout = document.createElement("td");
						var tdTargetNumber = document.createElement("td");
						var tdRollNumber = document.createElement("td");
						var tdNonce = document.createElement("td");
						var tdBetID = document.createElement("td");
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = nextbet.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "checked";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = target.toFixed(4) + ""
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + target.toFixed(4)
						//lastBet.targetNumber = obj.payload.data.crash.event.cashoutAt;
						tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = game;
						tdBetID.innerHTML = obj.payload.data.crash.event.id;
						tdPayout.innerHTML = parseFloat(nextbet * target).toFixed(8);
						

						
						row.appendChild(tdbets);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdRollChance);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdNonce);
						row.appendChild(tdBetID);
						var table = document.getElementById("botHistory");							
						table.prepend(row);
		
						if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
						{
							table.deleteRow(table.rows.length - 1);
						}
					
						if(winstreak > losestreak){
							currentstreak = winstreak;
						} else {
							currentstreak = -losestreak;
						}
					
						if(highest_bet[highest_bet.length-1] < nextbet){
							highest_bet.pop();
							highest_bet.push(nextbet);
						}
						if(highest_profit[highest_profit.length-1] < profit_total){
							highest_profit.pop();
							highest_profit.push(profit_total);
						}
						if(lowest_profit[lowest_profit.length-1] > profit_total){
							lowest_profit.pop();
							lowest_profit.push(profit_total);
						}
						if(highest_streak[highest_streak.length-1] < currentstreak){
							highest_streak.pop();
							highest_streak.push(currentstreak);
						}
						if(lowest_streak[lowest_streak.length-1] > currentstreak){
							lowest_streak.pop();
							lowest_streak.push(currentstreak);
						}

						balance = current_balance;
						profit = profit_total;
						previousbet = nextbet;
						currentprofit = current_profit;
						
						
						
						updateChart();
						
						document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
						document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
						document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
						document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
						document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
						document.getElementById("botBets").innerHTML = bets;
						document.getElementById("botWins").innerHTML = wins;
						document.getElementById("botLosses").innerHTML = losses;
						document.getElementById("botCurrentStreak").innerHTML = currentstreak;
						document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
						document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
						document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
						
						lastBet.percent = (profit_total / started_bal * 100)
					
					
						
						
						//amount = nextbet;
						
						lastBet.amount = previousbet;
						lastBet.target = target;

						dobet();
							
						
						
					}
					if(obj.payload.data.crash.event.result == "busted"){
						
						color = "#f72a42"
						current_profit = -parseFloat(nextbet);
						profit_total += -parseFloat(nextbet);
						wagered += parseFloat(nextbet);
						losses++;
						losestreak++
						winstreak = 0;
						lastBet.payoutMultiplier = 0;
						win = false;
						lastBet.win = false;
						lastBet.amount = previousbet;
						lastBet.payoutMultiplier = 0;
						
						betcount++;
						bets = betcount;
						
						var row = document.createElement("tr");
					
						
						row.style.background = "#FFC0CB";
			
						
						var tdbets = document.createElement("td");
						var tdamount = document.createElement("td");
						var tdhigh = document.createElement("td");
						var tdTargetChance = document.createElement("td");
						var tdRollChance= document.createElement("td");
						var tdProfit = document.createElement("td");
						var tdPayout = document.createElement("td");
						var tdTargetNumber = document.createElement("td");
						var tdRollNumber = document.createElement("td");
						var tdNonce = document.createElement("td");
						var tdBetID = document.createElement("td");
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = nextbet.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "checked";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = (0).toFixed(4) + ""
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + target.toFixed(4)
						lastBet.targetNumber = target;
						tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = game;
						tdBetID.innerHTML = "";
						tdPayout.innerHTML = ""
						
						
						
						row.appendChild(tdbets);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdRollChance);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdNonce);
						row.appendChild(tdBetID);
						
						var table = document.getElementById("botHistory");							
						table.prepend(row);
		
						if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
						{
							table.deleteRow(table.rows.length - 1);
						}
					
						if(winstreak > losestreak){
							currentstreak = winstreak;
						} else {
							currentstreak = -losestreak;
						}
					
						if(highest_bet[highest_bet.length-1] < nextbet){
							highest_bet.pop();
							highest_bet.push(nextbet);
						}
						if(highest_profit[highest_profit.length-1] < profit_total){
							highest_profit.pop();
							highest_profit.push(profit_total);
						}
						if(lowest_profit[lowest_profit.length-1] > profit_total){
							lowest_profit.pop();
							lowest_profit.push(profit_total);
						}
						if(highest_streak[highest_streak.length-1] < currentstreak){
							highest_streak.pop();
							highest_streak.push(currentstreak);
						}
						if(lowest_streak[lowest_streak.length-1] > currentstreak){
							lowest_streak.pop();
							lowest_streak.push(currentstreak);
						}

						balance = current_balance;
						profit = profit_total;
						previousbet = nextbet;
						currentprofit = current_profit;
						
						
						
						updateChart();
						
						document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
						document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
						document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
						document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
						document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
						document.getElementById("botBets").innerHTML = bets;
						document.getElementById("botWins").innerHTML = wins;
						document.getElementById("botLosses").innerHTML = losses;
						document.getElementById("botCurrentStreak").innerHTML = currentstreak;
						document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
						document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
						document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
						
						lastBet.percent = (profit_total / started_bal * 100)
						
	
						
						
						//amount = nextbet;
						
						lastBet.amount = previousbet;
						lastBet.target = target;
						
						dobet();

				
					}
					if(obj.payload.data.crash.event.status == "crash"){
							crash_bet_placed = false;
							slide_bet_placed = false;
							make_slide_bet = false;
							finished_round = true
							
							document.getElementById("result").innerHTML = "Crash at " + obj.payload.data.crash.event.multiplier.toFixed(2);
							const loader1 = document.querySelector('.loader');
							loader1.style.display = 'inline-block';
							//var prog = document.getElementById("progress");
							//var elem = document.getElementById("myBar");
							//prog.style.display = "none";
							//elem.style.width = "0%";
							//betcount++;
							//bets = betcount;
							lastBet.Roll = obj.payload.data.crash.event.multiplier;
							
							
							var row = document.createElement("tr");
							//betcount++;
							row.style.background = "#e8e9eb";
							//win = null
							//lastBet.win = null
							
							var tdbets = document.createElement("td");
							var tdamount = document.createElement("td");
							var tdhigh = document.createElement("td");
							var tdTargetChance = document.createElement("td");
							var tdRollChance= document.createElement("td");
							var tdProfit = document.createElement("td");
							var tdPayout = document.createElement("td");
							var tdTargetNumber = document.createElement("td");
							var tdRollNumber = document.createElement("td");
							var tdNonce = document.createElement("td");
							var tdBetID = document.createElement("td");
							
							tdbets.innerHTML = ""
							tdamount.innerHTML = "CrashAt"
							
							var tdcheck = document.createElement("input");
							tdcheck.type = "checkbox";
							tdcheck.name = "checked";
							tdcheck.checked = "checked";
							tdcheck.id = "checked";
							
							tdhigh.appendChild(tdcheck);
							tdTargetChance.innerHTML = lastBet.Roll.toFixed(4) + "";
							tdRollChance.innerHTML = ""
							tdProfit.innerHTML = ""
							tdTargetNumber.innerHTML = ""
							//lastBet.targetNumber = target_multi;
							tdRollNumber.innerHTML = lastBet.Roll.toFixed(4) + "";
							tdNonce.innerHTML = game;
							tdBetID.innerHTML = "";
							tdPayout.innerHTML = "";
							
							
							row.appendChild(tdbets);
							row.appendChild(tdamount);
							row.appendChild(tdhigh);
							row.appendChild(tdTargetChance);
							row.appendChild(tdRollChance);
							row.appendChild(tdProfit);
							row.appendChild(tdPayout);
							row.appendChild(tdTargetNumber);
							row.appendChild(tdRollNumber);
							row.appendChild(tdNonce);
							row.appendChild(tdBetID);
							
							var table = document.getElementById("botHistory");							
							table.prepend(row);
			
							if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
							{
								table.deleteRow(table.rows.length - 1);
							}
							
							if(cashedoutauto == false){
								
								
							}
							
							
	
						} 
					
						
						/*if(obj.payload.data.crash.event.result == "autocashout")
						{
							cashedoutauto = true;
						}*/
						
						if(obj.payload.data.crash.event.nextRoundIn < 5000 && obj.payload.data.crash.event.nextRoundIn > 200){
								slide_game_ran = false
								crash_game_ran = false
								if(run_clicked){
								
									if(game == "crash" && crash_bet_placed == false){
										crash_bet_placed = true
		
										crashbet(nextbet, target);
									} 
									if(game == "slide" && slide_bet_placed == false){
										id = {}
										gamelist = {}
										slide_bet_placed = true									
										betlist.forEach(function(value){
											slidebet(value[0], value[1], value[2])
										});
										betlist = []
										
										
										
									}
								}
							
							//win = false;
							//lastBet.win = false;
							//document.getElementById("listed").innerHTML = "";
							

							
							
						} 
						if(obj.payload.data.crash.event.status == "pending"){
							const loader1 = document.querySelector('.loader');
							loader1.style.display = 'none';
							document.getElementById("result").innerHTML = ""
							////lastBet.win = null;
							cashedoutauto = false;
							//bet_has_been_made = false
							//dobet_run = false
							//win = null;
							
						}
						
					 
			
								
			} else if(obj.payload.data.hasOwnProperty("slide") && game == "slide"){
			
					if(obj.payload.data.slide.event.status == "result" ){
							slide_bet_placed = false
							crash_bet_placed = false
							make_slide_bet = false;
							betlist = []
							previousbet = nextbet;
							
							document.getElementById("result").innerHTML = "Slide at " + obj.payload.data.slide.event.multiplier.toFixed(2);
							const loader1 = document.querySelector('.loader');
							loader1.style.display = 'none';
							//var prog = document.getElementById("progress");
							//var elem = document.getElementById("myBar");
							//prog.style.display = "none";
							//elem.style.width = "0%";
							if(run_clicked == true){
								betcount++;
								bets = betcount;
							}
							
							lastBet.Roll = obj.payload.data.slide.event.multiplier;
							var row = document.createElement("tr");
							//betcount++;
							row.style.background = "#e8e9eb";
							//win = null
							//lastBet.win = null
							
							var tdbets = document.createElement("td");
							var tdamount = document.createElement("td");
							var tdhigh = document.createElement("td");
							var tdTargetChance = document.createElement("td");
							var tdRollChance= document.createElement("td");
							var tdProfit = document.createElement("td");
							var tdPayout = document.createElement("td");
							var tdTargetNumber = document.createElement("td");
							var tdRollNumber = document.createElement("td");
							var tdNonce = document.createElement("td");
							var tdBetID = document.createElement("td");
							
							tdbets.innerHTML = "";
							tdamount.innerHTML = "SlideAt"
							
							var tdcheck = document.createElement("input");
							tdcheck.type = "checkbox";
							tdcheck.name = "checked";
							tdcheck.checked = "checked";
							tdcheck.id = "checked";
							
							tdhigh.appendChild(tdcheck);
							tdTargetChance.innerHTML = lastBet.Roll.toFixed(4) + "";
							tdRollChance.innerHTML = ""
							tdProfit.innerHTML = ""
							tdTargetNumber.innerHTML = ""
							//lastBet.targetNumber = target_multi;
							tdRollNumber.innerHTML = lastBet.Roll.toFixed(4) + "";
							tdNonce.innerHTML = game;
							tdBetID.innerHTML = "";
							tdPayout.innerHTML = "";
							
							
							row.appendChild(tdbets);
							row.appendChild(tdamount);
							row.appendChild(tdhigh);
							row.appendChild(tdTargetChance);
							row.appendChild(tdRollChance);
							row.appendChild(tdProfit);
							row.appendChild(tdPayout);
							row.appendChild(tdTargetNumber);
							row.appendChild(tdRollNumber);
							row.appendChild(tdNonce);
							row.appendChild(tdBetID);
							
							var table = document.getElementById("botHistory");							
							table.prepend(row);
			
							if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
							{
								table.deleteRow(table.rows.length - 1);
							}
							
							setTimeout(() => {
								dobet();
								
								target_multi = 99 / chance;
							}, "5000");
					
					}
			
					
			
					
						
					
						if(obj.payload.data.slide.event.__typename == "MultiplayerSlideBet"){
						
							if(obj.payload.data.slide.event.result == "autocashout"){
								betlist = []
								color = "#05f711";
								bet_found = true;
								win = true;
								lastBet.win = true;
								lastBet.amount = previousbet;
								lastBet.payoutMultiplier = obj.payload.data.slide.event.payoutMultiplier;
								
								//obj2 = (99 / obj.payload.data.slide.event.cashoutAt)
								//object1 = { obj2: win }
								
								id[gamelist[obj.payload.data.slide.event.id]] = win
								//win
								winstreak++;
								wins++;
								losestreak = 0;
							    //starting_done = true;
								current_profit = parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								profit_total += parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								wagered += parseFloat(obj.payload.data.slide.event.amount);
								
								var row = document.createElement("tr");

								row.style.background = "#91F190";

								var tdbets = document.createElement("td");
								var tdamount = document.createElement("td");
								var tdhigh = document.createElement("td");
								var tdTargetChance = document.createElement("td");
								var tdRollChance= document.createElement("td");
								var tdProfit = document.createElement("td");
								var tdPayout = document.createElement("td");
								var tdTargetNumber = document.createElement("td");
								var tdRollNumber = document.createElement("td");
								var tdNonce = document.createElement("td");
								var tdBetID = document.createElement("td");
								
								tdbets.innerHTML = betcount;
								tdamount.innerHTML = obj.payload.data.slide.event.amount.toFixed(8)
								
								var tdcheck = document.createElement("input");
								tdcheck.type = "checkbox";
								tdcheck.name = "checked";
								tdcheck.checked = "checked";
								tdcheck.id = "checked";
								
								tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = obj.payload.data.slide.event.cashoutAt.toFixed(4) + ""
								tdRollChance.innerHTML = ""
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + obj.payload.data.slide.event.cashoutAt.toFixed(4) + "";
								//lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.Roll.toFixed(4) + "";
								tdNonce.innerHTML = game;
								tdBetID.innerHTML = obj.payload.data.slide.event.gameId;
								tdPayout.innerHTML = obj.payload.data.slide.event.payout.toFixed(8);

			
								row.appendChild(tdbets);
								row.appendChild(tdamount);
								row.appendChild(tdhigh);
								row.appendChild(tdTargetChance);
								row.appendChild(tdRollChance);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdNonce);
								row.appendChild(tdBetID);
								var table = document.getElementById("botHistory");							
								
								
								table.prepend(row);
								
				
								if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
								{
									table.deleteRow(table.rows.length - 1);
								}
							
								if(winstreak > losestreak){
									currentstreak = winstreak;
								} else {
									currentstreak = -losestreak;
								}
							
								if(highest_bet[highest_bet.length-1] < nextbet){
									highest_bet.pop();
									highest_bet.push(nextbet);
								}
								if(highest_profit[highest_profit.length-1] < profit_total){
									highest_profit.pop();
									highest_profit.push(profit_total);
								}
								if(lowest_profit[lowest_profit.length-1] > profit_total){
									lowest_profit.pop();
									lowest_profit.push(profit_total);
								}
								if(highest_streak[highest_streak.length-1] < currentstreak){
									highest_streak.pop();
									highest_streak.push(currentstreak);
								}
								if(lowest_streak[lowest_streak.length-1] > currentstreak){
									lowest_streak.pop();
									lowest_streak.push(currentstreak);
								}

								balance = current_balance;
								profit = profit_total;
								previousbet = nextbet;
								currentprofit = current_profit;
		
								
								
								updateChart();
													
								document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
								document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
								document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
								document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
								document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
								document.getElementById("botBets").innerHTML = bets;
								document.getElementById("botWins").innerHTML = wins;
								document.getElementById("botLosses").innerHTML = losses;
								document.getElementById("botCurrentStreak").innerHTML = currentstreak;
								document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
								document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
								document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
								
								lastBet.percent = (profit_total / started_bal * 100)
								
							
								/*
								dobet();
					
								amount = nextbet;
								target_multi = 99 / chance;
								*/
							}
						
							
							if (obj.payload.data.slide.event.result == "busted"){
								betlist = []
								color = "#f72a42"
								losses++;
								losestreak++
								winstreak = 0;
								lastBet.amount = previousbet;
								win = false;
								lastBet.win = false;
								id[gamelist[obj.payload.data.slide.event.id]] = win
								//obj2 = (99 / obj.payload.data.slide.event.cashoutAt)
								//object1 = { obj2: win }
								
							
								current_profit = parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								profit_total += parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								wagered += parseFloat(obj.payload.data.slide.event.amount);
								
								var row = document.createElement("tr");
								
								
								row.style.background = "#FFC0CB";
								
								var tdbets = document.createElement("td");
								var tdamount = document.createElement("td");
								var tdhigh = document.createElement("td");
								var tdTargetChance = document.createElement("td");
								var tdRollChance= document.createElement("td");
								var tdProfit = document.createElement("td");
								var tdPayout = document.createElement("td");
								var tdTargetNumber = document.createElement("td");
								var tdRollNumber = document.createElement("td");
								var tdNonce = document.createElement("td");
								var tdBetID = document.createElement("td");
								
								tdbets.innerHTML = betcount;
								tdamount.innerHTML = obj.payload.data.slide.event.amount.toFixed(8)
								
								var tdcheck = document.createElement("input");
								tdcheck.type = "checkbox";
								tdcheck.name = "checked";
								tdcheck.checked = "checked";
								tdcheck.id = "checked";
								
								tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = (0).toFixed(4) + "";
								tdRollChance.innerHTML = ""
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + obj.payload.data.slide.event.cashoutAt.toFixed(4) + "";
								//lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.Roll.toFixed(4) + "";
								tdNonce.innerHTML = game;
								tdBetID.innerHTML = obj.payload.data.slide.event.gameId;
								tdPayout.innerHTML = obj.payload.data.slide.event.payout.toFixed(8);
								
								
								row.appendChild(tdbets);
								row.appendChild(tdamount);
								row.appendChild(tdhigh);
								row.appendChild(tdTargetChance);
								row.appendChild(tdRollChance);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdNonce);
								row.appendChild(tdBetID);
								var table = document.getElementById("botHistory");							
								
								
								table.prepend(row);
								
				
								if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
								{
									table.deleteRow(table.rows.length - 1);
								}
							
								if(winstreak > losestreak){
									currentstreak = winstreak;
								} else {
									currentstreak = -losestreak;
								}
							
								if(highest_bet[highest_bet.length-1] < nextbet){
									highest_bet.pop();
									highest_bet.push(nextbet);
								}
								if(highest_profit[highest_profit.length-1] < profit_total){
									highest_profit.pop();
									highest_profit.push(profit_total);
								}
								if(lowest_profit[lowest_profit.length-1] > profit_total){
									lowest_profit.pop();
									lowest_profit.push(profit_total);
								}
								if(highest_streak[highest_streak.length-1] < currentstreak){
									highest_streak.pop();
									highest_streak.push(currentstreak);
								}
								if(lowest_streak[lowest_streak.length-1] > currentstreak){
									lowest_streak.pop();
									lowest_streak.push(currentstreak);
								}

								balance = current_balance;
								profit = profit_total;
								//previousbet = amount;
								currentprofit = current_profit;
			
								
								
								updateChart();
								
								document.getElementById("botProfit").innerHTML = profit_total.toFixed(8);
								document.getElementById("botWagered").innerHTML = wagered.toFixed(8);
								document.getElementById("botHighProfit").innerHTML = Math.max.apply(null, highest_profit).toFixed(8);
								document.getElementById("botHighLose").innerHTML = Math.min.apply(null, lowest_profit).toFixed(8);
								document.getElementById("botHighBet").innerHTML = Math.max.apply(null, highest_bet).toFixed(8);
								document.getElementById("botBets").innerHTML = bets;
								document.getElementById("botWins").innerHTML = wins;
								document.getElementById("botLosses").innerHTML = losses;
								document.getElementById("botCurrentStreak").innerHTML = currentstreak;
								document.getElementById("botHighLowStreak").innerHTML = Math.max.apply(null, highest_streak) + " / " + Math.min.apply(null, lowest_streak);
								document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
								document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
								
								lastBet.percent = (profit_total / started_bal * 100)
													
								
								
								/*
								dobet();
					
								amount = nextbet;
								target_multi = 99 / chance;
								*/
								
							}
						}
						
							

	
							
	
				
						
						
					
						if(obj.payload.data.slide.event.nextRoundIn < 15000 && obj.payload.data.slide.event.nextRoundIn > 1000){
							
							document.getElementById("result").innerHTML = ""
							const loader1 = document.querySelector('.loader');
							loader1.style.display = 'inline-block';
							
							//const timerElement = document.getElementById("timerDown");	
							//updateCountdown(timerElement, obj.payload.data.slide.event.nextRoundIn, 30);
								/*if(win == null){
									win = true;
									lastBet.win = true;
								}*/
								
								
								
								
								lastBet.amount = previousbet;
								lastBet.target = target;
								
								target_multi = 99 / chance;
								
								
								slide_game_ran = false
								crash_game_ran = false
								
								if(run_clicked){
									if(game == "crash" && crash_bet_placed == false){
										crash_bet_placed = true

										crashbet(nextbet, target);
									}
									if(game == "slide" && slide_bet_placed == false){
										slide_bet_placed = true
										id = {}
										gamelist = {}
										betlist.forEach(function(value){
											slidebet(value[0], value[1], value[2])
										});
										betlist = []
										
										
									}
									
									
								}
								

						}
					
					
						if(obj.payload.data.slide.event.status == "pending"){
										
							//lastBet.win = null;
							//win = null;
							//winid = {};
		
						}
						
									
					}
				
				}
				}
			}
  };

  websocket.onerror = (error) => {
    //console.warn('WebSocket error:', error);
	isReconnecting = false;
    //scheduleReconnect();
  };

  websocket.onclose = (event) => {
    //console.warn('WebSocket closed:', event.code, event.reason);
	isReconnecting = false;
    //scheduleReconnect();
  };
}

window.addEventListener('online', () => {
  //console.log("Back online. Reconnecting WebSocket...");
  isReconnecting = false;
  //scheduleReconnect();
});

window.addEventListener('offline', () => {
  //console.warn("Connection lost. Waiting to reconnect...");
});

function reconnectHandle(){
	for (var i=0; i<connectionTimeout.length; i++) {
	  clearTimeout(connectionTimeout[i]);
	}
	connectionTimeout = [];
	
	connectionTimeout.push(setTimeout(() => {
	  if(!isReconnecting){
		  startSocket();
	  }
	  reconnectHandle();
    }, reconnectDelay))
}

reconnectHandle();

function scheduleReconnect() {
	for (var i=0; i<connectObj.length; i++) {
	  clearTimeout(connectObj[i]);
	}
	connectObj = [];
	if (!isReconnecting) {
    //isReconnecting = true;
    connectObj.push(setTimeout(() => {
      //console.log("Reconnecting WebSocket...");
	  if(!isReconnecting){
	   //startSocket();
	  }
    }, reconnectDelay))
  }
}

function subscribeToChannels() {
  websocket.send(JSON.stringify({
    id: "e0f09352-0cc1-4485-8acf-ca53caccb5a8",
    type: "subscribe",
    payload: {
      query: `subscription AvailableBalances {
        availableBalances {
          amount
          identifier
          balance {
            amount
            currency
          }
        }
      }`
    }
  }));

  websocket.send(JSON.stringify({
    id: "3c099e10-dd7d-4a93-a86c-f2fe0082a6f3",
    type: "subscribe",
    payload: {
      query: `subscription Crash {
        crash {
          event {
            ... on MultiplayerCrash {
              ...MultiplayerCrash
            }
            ... on MultiplayerCrashBet {
              ...MultiplayerCrashBet
            }
            __typename
          }
        }
      }

      fragment MultiplayerCrash on MultiplayerCrash {
        id status multiplier startTime nextRoundIn crashpoint elapsed timestamp
        cashedIn { id user { id name } payoutMultiplier gameId amount payout currency result updatedAt cashoutAt btcAmount: amount(currency: btc) }
        cashedOut { id user { id name } payoutMultiplier gameId amount payout currency result updatedAt cashoutAt btcAmount: amount(currency: btc) }
      }

      fragment MultiplayerCrashBet on MultiplayerCrashBet {
        id user { id name } payoutMultiplier gameId amount payout currency result updatedAt cashoutAt btcAmount: amount(currency: btc)
      }`
    }
  }));
	
  websocket.send(JSON.stringify({
    id: "dfd28075-20ec-455b-b652-27a1a9d93e05",
    type: "subscribe",
    payload: {
      query: `subscription slide {
        slide {
          event {
            __typename
            ... on MultiplayerSlide {
              ...MultiplayerSlide
            }
            ... on MultiplayerSlideBet {
              id user { id name } payoutMultiplier gameId amount payout currency result updatedAt cashoutAt btcAmount: amount(currency: btc)
            }
          }
        }
      }

      fragment MultiplayerSlide on MultiplayerSlide {
        __typename id status multiplier startTime nextRoundIn elapsed timestamp
        cashedIn { id user { id name preferenceHideBets } payoutMultiplier gameId amount payout currency result updatedAt cashoutAt btcAmount: amount(currency: btc) }
        numbers
      }`
    }
  }));
  
}

addBot();
