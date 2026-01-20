 document.body.insertAdjacentHTML("beforebegin", `
<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
 <style>
/* Scrollbar styling */
::-webkit-scrollbar {
  width: 10px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #2a2c2d;
}

::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #666;
}

/* Main bot container */
#bot {
  all: revert;
  width: 1000px;
  font-size: 12px !important;
  text-align: left;
  background: #313335;
  color: #fff;
  position: absolute;
  z-index: 2147483002;
  border: 1px solid #242628;
  border-radius: 4px;
  top: 50%; 
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 1;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.4);
  padding: 0;
  margin: 0; /* Reset margin */
}

/* Header and Footer - DARKER */
#botHeader,
#botFooter {
  cursor: move;
  height: 18px;
  padding: 2px 4px;
  background: #252729; /* Darker */
  border-bottom: 1px solid #1e2022; /* Darker border */
  margin: 0; /* Reset margin */
}

#botHeader {
  border-radius: 4px 4px 0 0; /* Match container radius */
}

#botFooter {
  border-top: 1px solid #1e2022;
  border-bottom: none;
  border-radius: 0 0 4px 4px; /* Match container radius */
}

.bot-toggle {
  cursor: pointer;
  padding: 3px;
  z-index: 2147483003;
}

/* Menu styling - SINGLE ROW and DARKER */
#botMenu {
  padding: 4px; /* Adjusted padding */
  background: #27292b; /* Darker */
  border-bottom: 1px solid #1e2022;
  display: flex;
  gap: 6px; /* Space between elements */
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap; /* Force single row */
  margin: 0; /* Reset margin */
  border-top: none; /* Remove any top border */
}

#botMenu select,
#botMenu span input[type=number],
#botMenu input[type="password"] {
  all: revert;
  background: #2d2f31 !important; /* Darker input background */
  color: #fff;
  padding: 3px 6px;
  border: 1px solid #3a3c3e;
  border-radius: 3px;
  font-size: 11px;
  height: 22px;
  margin: 0; /* Reset margin */
}

#botMenu span input[type=number] {
  width: 50px; /* More compact */
}

#botMenu input[type="password"] {
  width: 150px; /* Compact password field */
}

#botMenu span {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 11px;
  margin: 0; /* Reset margin */
}

/* Rounded toggle switch */
#bot .switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background: #3a3c3e; /* Dark gray when off */
  border-radius: 20px; /* Rounded */
  transition: background 0.3s;
  margin: 0; /* Reset margin */
}

#bot .switch input { 
  width: 0;
  height: 0;
  opacity: 0;
}

#bot .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px; /* Rounded */
  -webkit-transition: .4s;
  transition: .4s;
  background: #3a3c3e; /* Dark gray when off */
}

#bot .slider:before {
  content: "";
  position: absolute;
  height: 16px;
  width: 16px;
  left: 2px;
  bottom: 2px;
  border-radius: 50%; /* Round knob */
  -webkit-transition: .3s;
  transition: .3s;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0,0,0,0.3);
}

#bot input:checked + .slider {
  background: #d6d2d5; /* Green when on */
}

#bot input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

/* Buttons */
#bot .btn-grad {
  all: revert;
  cursor: pointer;
  text-align: center;
  transition: 0.3s;
  padding: 4px 8px;
  border: none;
  border-radius: 3px;
  background-color: #16a34a;
  color: white;
  font-weight: bold;
  font-size: 13px;
  margin: 0; /* Reset margin */
}

#bot .btn-grad:hover {
  background-color: #1d9c4d;
}

#bot .btn-grad:active {
  background-color: #13843f;
}

#bot .btn-grad:disabled {
  cursor: auto;
  opacity: .5;
  color: #ccc;
}

.btn-control {
  font-size: 14px !important;
}

/* Stats section - DARKER */
.bot-stats,
.bot-flex-container {
    display: flex;
    align-items: stretch;
    font-weight: bold;
    font-size: 15px !important;
    position: relative;
    background: #27292b; /* Darker */
    margin: 0; /* Reset margin */
    padding: 4px 0;
    border-bottom: 1px solid #1e2022;
}

.bot-stats div {
  flex-grow: 1;
  padding: 2px 12px;
  border-right: 1px solid #1e2022;
  margin: 0; /* Reset margin */
}

.bot-stats div:last-child {
  border-right: none;
}

.bot-stats div li {
  list-style: none;
  padding: 2px 0;
  margin: 0; /* Reset margin */
}

/* Menu 2 - DARKER */
.bot-menu2 {
  display: flex;
  font-size: 11px !important;
  background: #27292b; /* Darker */
  border-bottom: 1px solid #1e2022;
  padding: 3px 0;
  margin: 0; /* Reset margin */
}

.bot-menu2 span {
  padding: 2px 4px;
  text-align: center;
  margin: 0; /* Reset margin */
}

/* Fast mode positioning */
.fastmode {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  padding: 2px 5px;
  font-weight: bold;
  font-size: 11px;
  margin-left: auto;
  gap: 6px;
}

/* Tab and control menus */
#botTabMenu,
#botControlMenu {
  display: flex;
  flex-wrap: wrap;
  margin-top: 3px;
  gap: 4px;
}

#botTabMenu button,
#botControlMenu button {
  flex-basis: 0;
  flex-grow: 1;
  padding: 5px 2px;
  margin: 0; /* Reset margin */
}

/* Control buttons - DARKER BACKGROUND */
#botControlMenu {
  position: relative;
  margin-top: 10px;
  padding: 6px;
  background: #252729; /* Darker */
  border-top: 1px solid #1e2022;
  justify-content: flex-end;
}

/* Main content area */
#botBody {
  padding: 0;
  margin: 0; /* Reset margin */
}

/* Chart and history - DARKER */
#botChart,
#botWrapHistory {
  height: 160px;
  padding: 3px;
  background: #27292b; /* Darker */
  margin: 2; /* Reset margin */
}

#botWrapHistory {
  overflow-x: auto;
}

#botWrapHistory table {
  border-collapse: collapse;
  font-size: 10px !important;
  margin: 2; /* Reset margin */
}

#botWrapHistory table thead tr th {
  text-align: left;
  padding: 3px 5px;
  border: 1px solid #3a3c3e;
  background: #2d2f31; /* Darker header */
  font-weight: bold;
}

#botHistory tr {
  border-bottom: 1px solid #3a3c3e;
  color: #ddd !important;
}

#botHistory tr:last-child {
  border-bottom: 1px solid #3a3c3e;
}

#botHistory {
  all: revert;
  white-space: nowrap;
  padding: 3px 5px;
  border-right: 1px solid #3a3c3e;
  border-left: 1px solid #3a3c3e;
  background: #27292b; /* Darker cell background */
}

#botHistory tr td:first-child {
  border-left: 1px solid #3a3c3e;
}

#botHistory tr td:last-child {
  border-right: 1px solid #3a3c3e;
}

#botHistory tr td input {
  all: revert;
}

/* Code container - DARKER */
#botWrapMode {
  overflow: scroll;
  height: 260px;
  background: #252729; /* Darker */
  margin: 0; /* Reset margin */
}

.code-container {
  display: grid;
  position: relative;
  margin-bottom: 0;
  overflow: auto;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, .3);
  width: 100%;
  height: 220px;
  background: #252729; /* Darker */
  margin: 0; /* Reset margin */
}

.botSim, .code-lua, .code-js, #botWrapLog {
  grid-area: 1 / 1;
  width: 100%;
  overflow: auto;
  height: 220px;
}

.code-lua {
  visibility: hidden;
}

#botWrapLog {
  visibility: hidden;
  z-index: 10;
  background: #1e2022; /* Darker log background */
}

/* CodeMirror editor - DARKER */
.CodeMirror {
  height: 210px !important;
  min-height: 210px !important;
  background: #252729 !important; /* Darker */
  color: #fff !important;
}

.CodeMirror-gutters {
  background: #1e2022 !important; /* Darker */
  border-right: 1px solid #3a3c3e !important;
}

/* Textareas - DARKER */
#botSimLog, #botLog, #jscode, #luacode {
  background: #252729; /* Darker */
  color: #fff;
  border: 1px solid #3a3c3e;
  border-radius: 3px;
  font-size: 11px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px;
  margin: 0; /* Reset margin */
}

/* Result button with loader */
#bot .button-wrapper {
  position: relative;
  display: inline-block;
}

#bot .button-wrapper .loader {
  position: absolute;
  top: 30%;
  left: 46%;
  transform: translate(-50%, -50%) rotateZ(45deg);
  z-index: 2;
  pointer-events: none;
}

#timerDown {
  display: inline-block;
  color: #ffffff;
  font-size: 12px;
  width: 1em;
  height: 1em;
  position: absolute;
  top: 30%;
  left: 46%;
  z-index: 2;
}

/* Loader animation */
#bot .loader {
  display: none;
  color: #ffffff;
  font-size: 16px;
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

/* Additional styling */
#bot .clearfix::after {
  content: "";
  clear: both;
  display: table;
}

#bot .float-left {
  float: left !important;
  margin: 0; /* Reset margin */
}

#bot .float-right {
  float: right !important;
  margin: 0; /* Reset margin */
}

/* Link styling */
#bot a {
  color: #4fa3ff;
  text-decoration: none;
}

#bot a:hover {
  color: #6cb4ff;
  text-decoration: underline;
}

/* Adjustments for specific elements */
#result {
  font-size: 17px;
  min-width: 200px;
}

#userBal, #botStopOnWinButton, #botStopButton, #botStartButton {
  font-size: 12px;
}

/* Make the two main columns more compact */
.bot-flex-container > div {
  padding: 4px !important;
}

/* Adjust the right column layout */
.bot-flex-container > div:last-child {
  padding-left: 4px !important;
}

/* Make the control buttons at bottom more compact */
#botControlMenu button {
  min-width: 80px;
}



/* Specific adjustments for darker theme */
.bot-select, .gameselect, .mirrors, .thememod {
  background: #2d2f31 !important;
  color: #fff !important;
  border: 1px solid #3a3c3e !important;
  margin: 0; /* Reset margin */
}

.bot-select option, .gameselect option, .mirrors option, .thememod option {
  background: #2d2f31;
  color: #fff;
}

/* Input placeholders */

#bot input::placeholder {
  color: #aaa !important;
  opacity: 1;
}

/* Fix for file input */
#botOpenScript {
  background: #2d2f31 !important;
  color: #fff !important;
  border: 1px solid #3a3c3e !important;
  padding: 3px;
  border-radius: 3px;
  margin: 0; /* Reset margin */
}

/* Style for simulation inputs */
#serverseed, #clientseed, #nonce {
  background: #2d2f31 !important;
  color: #fff !important;
  border: 1px solid #3a3c3e !important;
  margin: 0; /* Reset margin */
}

#runinput {
  background: #2d2f31 !important;
  color: #fff !important;
  border: 1px solid #3a3c3e !important;
  margin: 0; /* Reset margin */
}

/* Stats labels */
.bot-stats .float-left {
  color: #aaa;
}

.bot-stats .float-right {
  color: #fff;
  font-weight: bold;
}

/* Reset all margins and padding on main elements */
#botMain, #botWrapControl, #botLUAMode, #botTabMenu, #botControlMenu {
  margin: 0;
  padding: 0;
}

/* Ensure no gap between header and menu */
#botHeader + #botBody #botMenu {
  margin-top: 0;
  border-top: none;
}

#botHistory tr td {
  padding: 3px 5px !important; /* Increased from 3px 5px */
}

#botHistory table thead tr th {
  padding: 3px 5px !important; /* Increased for header too */
}

/* LIGHT THEME STYLES */
#bot.light-theme {
    background: #f5f5f5 !important;
    color: #000 !important;
    border: 1px solid #ddd !important;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1) !important;
}

#bot.light-theme #botHeader,
#bot.light-theme #botFooter {
    background: #e0e0e0 !important;
    border-bottom: 1px solid #ccc !important;
    color: #000 !important;
}

#bot.light-theme #botMenu {
    background: #e8e8e8 !important;
    border-bottom: 1px solid #ccc !important;
}

#bot.light-theme #botMenu select,
#bot.light-theme #botMenu span input[type=number],
#bot.light-theme #botMenu input[type="password"],
#bot.light-theme .bot-select,
#bot.light-theme .gameselect,
#bot.light-theme .mirrors {
    background: #ffffff !important;
    color: #000 !important;
    border: 1px solid #bbb !important;
}

#bot.light-theme .bot-stats,
#bot.light-theme .bot-flex-container {
    background: #e8e8e8 !important;
    border-bottom: 1px solid #ccc !important;
    color: #000 !important;
}

#bot.light-theme .bot-stats div {
    border-right: 1px solid #ccc !important;
}

#bot.light-theme .bot-stats .float-left {
    color: #555 !important;
}

#bot.light-theme .bot-stats .float-right {
    color: #000 !important;
}

#bot.light-theme .bot-menu2 {
    background: #e8e8e8 !important;
    border-bottom: 1px solid #ccc !important;
}

#bot.light-theme #botControlMenu {
    background: #e0e0e0 !important;
    border-top: 1px solid #ccc !important;
}

#bot.light-theme #botChart,
#bot.light-theme #botWrapHistory {
    background: #f0f0f0 !important;
}

#bot.light-theme #botWrapHistory table thead tr th {
    background: #e8e8e8 !important;
    border: 1px solid #ccc !important;
    color: #000 !important;
}

#bot.light-theme #botHistory {
    background: #f0f0f0 !important;
    border-right: 1px solid #ccc !important;
    border-left: 1px solid #ccc !important;
    color: #000 !important;
}

#bot.light-theme #botHistory tr {
    border-bottom: 1px solid #ccc !important;
    color: #000 !important;
}

#bot.light-theme #botWrapMode,
#bot.light-theme .code-container {
    background: #ffffff !important;
}

#bot.light-theme .CodeMirror {
    background: #ffffff !important;
    color: #000 !important;
}

#bot.light-theme .CodeMirror-gutters {
    background: #f0f0f0 !important;
    border-right: 1px solid #ddd !important;
}

#bot.light-theme #botSimLog,
#bot.light-theme #botLog,
#bot.light-theme #jscode,
#bot.light-theme #luacode,
#bot.light-theme #serverseed,
#bot.light-theme #clientseed,
#bot.light-theme #nonce,
#bot.light-theme #runinput,
#bot.light-theme #botOpenScript,
#bot.light-theme #botMaxRows,
#bot.light-theme #botWrapLog {
    background: #ffffff !important;
    color: #000 !important;
    border: 1px solid #bbb !important;
}

#bot.light-theme .switch {
    background: #ccc !important;
}

#bot.light-theme .slider {
    background: #ccc !important;
}

#bot.light-theme input:checked + .slider {
    background: #d6d2d5 !important;
}

/* Scrollbar styling for light theme */
#bot.light-theme ::-webkit-scrollbar-track {
    background: #e0e0e0 !important;
}

#bot.light-theme ::-webkit-scrollbar-thumb {
    background: #aaa !important;
}

#bot.light-theme ::-webkit-scrollbar-thumb:hover {
    background: #888 !important;
}

/* Button styling for light theme */
#bot.light-theme .btn-grad {
    background-color: #4CAF50 !important;
    color: white !important;
}

#bot.light-theme .btn-grad:hover {
    background-color: #45a049 !important;
}

#bot.light-theme a {
    color: #0066cc !important;
}

#bot.light-theme a:hover {
    color: #0052a3 !important;
}

/* Placeholder text for light theme */
#bot.light-theme ::placeholder {
    color: #777 !important;
}
/* Make chartContainer darker with rounded corners */
#chartContainer {
  background: #1e2022 !important; /* Darker than main background #313335 */
  border-radius: 8px !important;
  border: 1px solid #2a2c2d !important;
}

/* Make botWrapHistory darker with rounded corners */
#botWrapHistory {
  background: #1e2022 !important; /* Darker than main background */
  border-radius: 8px !important;
  border: 1px solid #2a2c2d !important;
  margin-top: 4px !important;
}


#botWrapHistory table thead tr th {
  background: #252729 !important; /* Darker header */
}

#botWrapHistory table tbody {
  background: #1e2022 !important; /* Ensure body is also dark */
}

/* Make bot-stats darker with rounded corners */
.bot-stats {
  background: #1e2022 !important; /* Darker than main background */
  border-radius: 8px !important;
  border: 1px solid #2a2c2d !important;
  margin: 4px 0 !important;
  padding: 8px 0 !important;
  overflow: hidden;
}

.bot-stats div {
  border-right: 1px solid #2a2c2d !important;
}

/* Light theme adjustments */
#bot.light-theme #chartContainer {
  background: #e0e0e0 !important;
  border: 1px solid #ccc !important;
}

#bot.light-theme #botWrapHistory {
  background: #e0e0e0 !important;
  border: 1px solid #ccc !important;
}

#bot.light-theme #botWrapHistory table thead tr th {
  background: #d0d0d0 !important;
}

#bot.light-theme #botWrapHistory table tbody {
  background: #e0e0e0 !important;
}

#bot.light-theme .bot-stats {
  background: #e0e0e0 !important;
  border: 1px solid #ccc !important;
}

#bot.light-theme .bot-stats div {
  border-right: 1px solid #ccc !important;
}

/* Glowing effect for elements inside botMenu */
#botMenu select:hover,
#botMenu input:hover,
#botMenu span:hover,
#botMenu .switch:hover,
#botMenu .slider:hover {
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.8) !important;
  transition: box-shadow 0.2s ease-in-out !important;
  border-color: rgba(0, 255, 255, 0.5) !important;
  outline: none !important;
}

/* Special glow for the themeChange checkbox */
#botMenu #themeChange:hover + .slider {
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.8) !important;
}

/* Glow for the speedChange checkbox */
#botMenu #speedChange:hover + .slider {
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.8) !important;
}

/* Glowing effect for runinput specifically */
#runinput:hover {
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.9) !important;
  transition: box-shadow 0.2s ease-in-out !important;
  border-color: rgba(0, 255, 255, 0.6) !important;
  outline: none !important;
}

/* Light theme adjustments */
#bot.light-theme #botMenu select:hover,
#bot.light-theme #botMenu input:hover,
#bot.light-theme #botMenu span:hover,
#bot.light-theme #runinput:hover {
  box-shadow: 0 0 10px rgba(0, 150, 255, 0.7) !important;
  border-color: rgba(0, 150, 255, 0.5) !important;
}

/* Add this to your existing CSS, replacing the .bot-stats-container section */

/* Enhanced Statistics Container */
/* Enhanced Statistics Container */
.bot-stats-container {
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  color: #fff;
  padding: 0;
  background: #1e2022;
  border-radius: 8px;
  border: 1px solid #2a2c2d;
  margin: 4px 8px;
  overflow: hidden;
}

/* Stats Section with vertical separators */
.stats-section {
  flex: 1;
  min-width: 200px;
  padding: 12px 15px;
  position: relative;
}

/* Vertical separator between sections */
.stats-section:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 10px;
  right: 0;
  height: calc(100% - 20px);
  width: 1px;
  background: linear-gradient(to bottom, 
    transparent 0%, 
    #2a2c2d 10%, 
    #2a2c2d 90%, 
    transparent 100%);
}

/* Section title with bottom border */
.section-title {
  margin: 0 0 10px 0;
  padding-bottom: 8px;
  border-bottom: 1px solid #2a2c2d;
  font-size: 12px;
  font-weight: 600;
  color: #aaa;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* Stats items with row separators */
.stats-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0;
  padding: 6px 0;
  position: relative;
}

/* Horizontal separator between rows - FIXED: don't add to last item */
.stats-item:not(:last-child) {
  margin-bottom: 0;
}

.stats-item:not(:last-child)::after {
  content: '';
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(to right, 
    transparent 0%, 
    #2a2c2d 20%, 
    #2a2c2d 80%, 
    transparent 100%);
}

/* Enhanced hover effects - FIXED: Adjust for last item */
.stats-item:hover {
  background: rgba(42, 44, 45, 0.3);
  border-radius: 4px;
  padding: 6px 8px;
  margin: 0 -8px 0 -8px; /* Removed bottom margin on hover */
  z-index: 1;
}

/* Specifically handle the last item hover to prevent overflow */
.stats-item:last-child:hover {
  margin-bottom: 0;
}

/* Special handling: when last item is hovered, hide the separator of the previous item */
.stats-item:hover + .stats-item::after {
  opacity: 0;
}

.stats-label {
  text-align: left;
  font-weight: 500;
  color: #ccc;
  font-size: 15px;
  flex-shrink: 0;
}

.stats-value {
  text-align: right;
  font-weight: 600;
  color: #fff;
  font-size: 15px;
  flex-shrink: 0;
  margin-left: 10px;
}

/* Color coding for specific values */
#botProfit,
#botHighProfit,
#botCurrentStreak {
  color: #4CAF50;
}

#botPercentProfit.negative {
  color: #f44336;
}

/* Light theme adjustments */
#bot.light-theme .bot-stats-container {
  background: #e0e0e0;
  border: 1px solid #ccc;
  color: #333;
}

#bot.light-theme .stats-section:not(:last-child)::after {
  background: linear-gradient(to bottom, 
    transparent 0%, 
    #bbb 10%, 
    #bbb 90%, 
    transparent 100%);
}

#bot.light-theme .section-title {
  border-bottom: 1px solid #bbb;
  color: #666;
}

#bot.light-theme .stats-item:not(:last-child)::after {
  background: linear-gradient(to right, 
    transparent 0%, 
    #bbb 20%, 
    #bbb 80%, 
    transparent 100%);
}

#bot.light-theme .stats-label {
  color: #555;
}

#bot.light-theme .stats-value {
  color: #222;
}

#bot.light-theme #botProfit,
#bot.light-theme #botHighProfit,
#bot.light-theme #botCurrentStreak {
  color: #2E7D32;
}

#bot.light-theme #botPercentProfit.negative {
  color: #C62828;
}

#bot.light-theme .stats-item:hover {
  background: rgba(187, 187, 187, 0.3);
}

/* Responsive design */
@media (max-width: 900px) {
  .bot-stats-container {
    flex-direction: column;
    margin: 4px;
  }
  
  .stats-section {
    width: 100%;
    padding: 10px 15px;
  }
  
  .stats-section:not(:last-child)::after {
    top: auto;
    right: 15px;
    bottom: 0;
    left: 15px;
    height: 1px;
    width: calc(100% - 30px);
    background: linear-gradient(to right, 
      transparent 0%, 
      #2a2c2d 20%, 
      #2a2c2d 80%, 
      transparent 100%);
  }
  
  /* On mobile, adjust hover margins */
  .stats-item:hover {
    margin: 0 -8px 0 -8px;
  }
}

/* Update the existing CSS for these elements */

/* Add negative color for botProfit */
#botProfit.negative {
  color: #f44336 !important;
}

/* Add negative color for botCurrentStreak */
#botCurrentStreak.negative {
  color: #f44336 !important;
}

/* Light theme adjustments */
#bot.light-theme #botProfit.negative {
  color: #C62828 !important;
}

#bot.light-theme #botCurrentStreak.negative {
  color: #C62828 !important;
}

#botProfit.negative::before {
  content: "";
  margin-right: 2px;
}

#botProfit::before {
  content: "+";
  margin-right: 2px;
  font-size: 0.9em;
}#botProfit::before {
  margin-right: 2px;
  font-size: 0.9em;
}

#botProfit::before {
  margin-right: 2px;
  font-size: 0.9em;
}

.stats-value,
#result {
	font-variant-numeric: tabular-nums; /* Keeps numbers aligned but plain */
  font-feature-settings: "zero" 0;
  font-size: 15px;
}


/* Light theme select options */
#bot.light-theme .bot-select option,
#bot.light-theme .gameselect option,
#bot.light-theme .mirrors option,
#bot.light-theme .thememod option {
    background: #ffffff !important;
    color: #000000 !important;
}

/* Also style the dropdown when open in light theme */
#bot.light-theme .bot-select:focus,
#bot.light-theme .gameselect:focus,
#bot.light-theme .mirrors:focus,
#bot.light-theme .thememod:focus {
    background: #ffffff !important;
    color: #000000 !important;
}

/* Ensure the dropdown list itself has proper styling in light theme */
#bot.light-theme .bot-select option:hover,
#bot.light-theme .gameselect option:hover,
#bot.light-theme .mirrors option:hover,
#bot.light-theme .thememod option:hover {
    background: #f0f0f0 !important;
    color: #000000 !important;
}

/* For the dropdown arrow in light theme */

#bot.light-theme .thememod {
    background-repeat: no-repeat !important;
    background-position: right 8px center !important;
    background-size: 12px !important;
    padding-right: 30px !important;
	
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
	
	border: 2px solid black !important; /* Test border */
}

#botMenu select {
    
}

#bot, #bot * {
  font-family: Montserrat;
}

</style>

<body>

<div id="bot">
  <div id="botHeader">
    <div class="clearfix">
      <div class="float-left" style="padding-left: 3px; font-size: 11px;">
        #evilbot | stake.com | stake.us
      </div>
      <div class="float-right">
        <span class="bot-toggle" id="botToggleMinimal" style="">▼</span>
      </div>
    </div>
  </div>
  
  <div id="botBody"> 
    <div id="botMain">
      <!-- SINGLE ROW MENU - NO GAP -->
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
			<option value="primedice">primedice</option>
			<option value="mines">mines</option>
			<option value="keno">keno</option>
			<option value="plinko">plinko</option>
			<option value="hilo">hilo</option>
			<option value="blackjack">blackjack</option>
			<option value="wheel">wheel</option>
			<option value="roulette">roulette</option>
			<option value="dragontower">dragontower</option>
			<option value="baccarat">baccarat</option>
			<option value="chicken">chicken</option>
			<option value="drill">drill</option>
			<option value="tarot">tarot</option>
			<option value="pump">pump</option>
			<option value="flip">flip</option>
			<option value="darts">darts</option>
			<option value="snakes">snakes</option>
			<option value="bars">bars</option>
			<option value="packs">packs</option>
			<option value="cases">cases</option>
			<option value="rps">rps</option>
			<option value="tomeoflife">tomeoflife</option>
			<option value="scarabspin">scarabspin</option>
			<option value="bluesamurai">bluesamurai</option>
			<option value="diamonds">diamonds</option>
			<option value="crash">crash</option>
			<option value="slide">slide</option>
        </select>
        <select id="mirrors" class="mirrors"></select>
        <span>API:</span>
        <input type="password" id="tokenkey" value="" placeholder="API key">
        <span>Records</span>
        <input type="number" id="botMaxRows" value="20" style="width: 50px;">
		<div class="fastmode">Light:
          <label class="switch">
            <input id="themeChange" type="checkbox">
            <span class="slider"></span>
          </label>
        </div>
        <!--<select id="thememod" class="thememod">
          <option value="dark" selected="selected">dark</option>
          <option value="dark">light</option>
        </select>-->
        <span id="scriptName"></span>
        <div class="fastmode">Fast Mode:
          <label class="switch">
            <input id="speedChange" type="checkbox">
            <span class="slider"></span>
          </label>
        </div>
      </div>

      <div class="bot-menu2">
        <center>
          <span>
            <button class="btn-grad" id="resetstat">ResetStats</button>
          </span>
          <span>
            <button class="btn-grad" id="resetChart">ResetChart</button>
          </span>
          <span>
            <button class="btn-grad" id="deleteTable">ResetHistory</button>
          </span>
          <span>
            <button class="btn-grad" id="deleteLog">ResetLog</button>
          </span>
          <span>
            <button class="btn-grad" id="resetsee">ResetSeed</button>
          </span>
          <span>
            <button class="btn-grad" id="resetAlles">ResetAll</button>
          </span>
        </center>
      </div>

<div class="bot-stats-container">
  <div class="stats-section">
    <div class="stats-item">
      <span class="stats-label">Time:</span>
      <span class="stats-value" id="botTime">0:0:0:0</span>
    </div>
    <div class="stats-item">
      <span class="stats-label">Balance:</span>
      <span class="stats-value" id="botBalance">0.00000000</span>
    </div>
    <div class="stats-item">
      <span class="stats-label">Wagered:</span>
      <span class="stats-value">
        (<span id="botPercentWagered">0.00</span>x) 
        <span id="botWagered">0.00000000</span>
      </span>
    </div>
    <div class="stats-item">
      <span class="stats-label">Profit:</span>
      <span class="stats-value" id="botWrapPercentProfit">
        (<span id="botPercentProfit">0.00</span>%) 
        <span id="botProfit">0.00000000</span>
      </span>
    </div>
  </div>

  <div class="stats-section">
    <div class="stats-item">
      <span class="stats-label">HighBet:</span>
      <span class="stats-value" id="botHighBet">0.00000000</span>
    </div>
    <div class="stats-item">
      <span class="stats-label">HighLose:</span>
      <span class="stats-value" id="botHighLose">0.00000000</span>
    </div>
    <div class="stats-item">
      <span class="stats-label">HighProfit:</span>
      <span class="stats-value" id="botHighProfit">0.00000000</span>
    </div>
    <div class="stats-item">
      <span class="stats-label">High/Low-Streak:</span>
      <span class="stats-value" id="botHighLowStreak">0 / 0</span>
    </div>
  </div>

  <div class="stats-section">
    <div class="stats-item">
      <span class="stats-label">Bets:</span>
      <span class="stats-value" id="botBets">0</span>
    </div>
    <div class="stats-item">
      <span class="stats-label">Wins:</span>
      <span class="stats-value" id="botWins">0</span>
    </div>
    <div class="stats-item">
      <span class="stats-label">Losses:</span>
      <span class="stats-value" id="botLosses">0</span>
    </div>
    <div class="stats-item">
      <span class="stats-label">CurrentStreak:</span>
      <span class="stats-value" id="botCurrentStreak">0</span>
    </div>
  </div>
</div>

      <div class="bot-flex-container" id="botWrapControl">
        <div style="flex-grow: 1; width: 50%;">
          <div id="chartContainer" style="height: 160px; width:100%;"></div>

          <div id="botWrapHistory">
            <table>
              <thead>
                <tr>
                  <th>Bets</th>
				  <th>Game</th>
                  <th>Amount</th>
                  <th>High</th>
                  <th>Multiplier</th>
				  <th>Target</th>
				  <th>Roll</th>
                  <th>Profit</th>
                  <th>Payout</th>
                  <th>RollChance</th>
                  <th>BetID</th>
                </tr>
              </thead>
              <tbody id="botHistory"></tbody>
            </table>
          </div>
        </div>

        <div style="flex-grow: 1; width: 50%;">
          <div id="botTabMenu">
            <button class="btn-grad" id="botShowMode">Code</button>
            <button class="btn-grad" id="botShowLog">Log</button>
            <button class="btn-grad" id="botShowSim">Sim (dice)</button>
          </div>

          <div id="botWrapMode">
            <div id="botLUAMode">
              <div style="padding: 3px 2px">
                <button class="btn-grad" id="botSaveScriptButton">Save</button>
                <input style="margin: 0 3px; font-size: 11px;" type="file" id="botOpenScript" accept=".txt, .js, .lua">
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
}</textarea>
                </div>
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
end</textarea>
                </div>
                
                <div class="botSim">
                  ServerSeed:<input id="serverseed" type="text" style="width: 70%; margin: 2px;"><br>
                  ClientSeed:<input id="clientseed" type="text" style="width: 70%; margin: 2px;"><br>
                  Nonce:<input id="nonce" type="text" value="1" style="width: 70%; margin: 2px;"><br>
                  <button id="runsim" type="button" class="btn-grad" style="padding: 2px 5px;">Simulate</button>
                  <button id="stopsim" type="button" class="btn-grad" style="padding: 2px 5px;">Stop</button>
                  <textarea id="botSimLog" style="width: 100%; height: 120px; margin-top: 5px;"></textarea>
                </div>
                
                <div id="botWrapLog">
                  <textarea id="botLog" style="width: 100%; height: 180px; font-size: 13px;"></textarea>
                  <button class="btn-grad" id="runcmd" type="button" style="padding: 2px 5px;">Command</button>
                  <input id="runinput" type="text" style="padding: 2px; width: 65%;">
                </div>
              </div>
            </div>
          </div>

          <!-- Control buttons -->
          <div id="botControlMenu">
            <button id="botStartButton" class="btn-grad btn-control" style="width:70px;">Start</button>
            <button id="botStopButton" class="btn-grad btn-control" style="width:70px;">Stop</button>
            <div class="button-wrapper">
              <button id="result" class="btn-grad btn-control" style="width:230px;height:35px;"></button>
              <span class="loader"></span>
              <span id="timerDown"></span>
            </div>
            <button id="botStopOnWinButton" class="btn-grad btn-control">StopOnWin</button>
          </div>
        </div>
      </div>
    </div>
    
    <div id="botFooter">
      <div class="clearfix">
        <div id="infobar" class="float-left" style="padding-left: 3px; font-size: 12px; line-height: 18px;">
          <a href="https://github.com/poky1084" target="_blank" rel="noopener noreferrer">github.com/poky1084</a> | Discord: fisk_992 | Telegram: <a href="https://t.me/poky_1084" target="_blank" rel="noopener noreferrer">@poky_1084</a>
        </div>
        <div id="infospeed" class="float-right" style="font-size: 12px; line-height: 18px;">
          <span id="botSpeed">0</span>
          <span class="bot-toggle" id="botToggleHideControlBot">▲</span>
        </div>
      </div>
    </div>
  </div>
</div>
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
var running = false;
var nextbet = 0;
var win = false;
let bet = null;
let action = "stand";
let nextactions = "BLACKJACK_STAND"

var bethigh = false;
var chance = 49.5
var game = "dice";
var endgame = false;
var manualcash = false;

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

var lastBet = {'amount': 0, 'win': false, 'Roll': 0, 'payoutMultiplier': 0, 'chance': 0, 'target': 0, 'payout': 0, 'percent': 0, 'targetNumber': 0, 'name': null, 'id': null}

var dps = []
var chart = ''
var color = "red"

var started_bal = 0;

//var condition = "below";

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

let target1 = 2
let target2 = 24
let target3 = 34
let target4 = 68
let condition = "rollBetweenTwo"

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
let tiles = [2]
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
let steps = 1
let pick = 1

var stoponwin = false;
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
dobet = function(){};
progress = function(){};
var gamelist = {}
var makecount = 0
var currentcount = false;
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


    const themeSwitch = document.getElementById('themeChange');
    const botContainer = document.getElementById('bot');
    
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('botTheme') || 'dark';
    
    // Apply saved theme on page load
    if (savedTheme === 'light') {
        themeSwitch.checked = true;
        botContainer.classList.add('light-theme');
    }
    
    // Toggle theme when switch is clicked
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            botContainer.classList.add('light-theme');
            localStorage.setItem('botTheme', 'light');
        } else {
            botContainer.classList.remove('light-theme');
            localStorage.setItem('botTheme', 'dark');
        }
    });


function addBot(){

/*var svelt = document.getElementById("svelte");
if(svelt != undefined){
	//svelt.remove();
}*/



document.getElementById("result").style.cssText = `
  font-size: 18px !important;
    width: 230px;
    height: 35px;
`;

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
	theme: 'darcula',
    lineWrapping: false,
    scrollbarStyle: 'native'
});

htmlEditor2 = CodeMirror.fromTextArea(document.getElementById("jscode"), {
	lineNumbers: true,
	mode: 'javascript',
	theme: 'darcula',
    lineWrapping: false,
	scrollbarStyle: 'native'
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

/*setTimeout(() => {
 htmlEditor2.refresh();
 htmlEditor.refresh()
}, 2000);
*/

if(localStorage.getItem("luacode") != null){
	htmlEditor.setValue(localStorage.getItem("luacode"));
} 

function changeTheme(){
	/*
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
	*/
	
	//(function(){document.querySelectorAll('*').forEach(e=>e.style.fontFamily="'JetBrains Mono','Cascadia Code','Consolas',monospace");})();
	
	
	(function(){document.querySelectorAll('*').forEach(e=>e.style.fontFamily="'Montserrat'");})();
	
	//(function(){document.querySelectorAll('*').forEach(e=>e.style.fontFamily="'Montserrat', sans-serif");})();
	//(function(){document.querySelectorAll('*').forEach(e=>e.style.fontFamily="'Roboto', sans-serif");})();
	//(function(){document.querySelectorAll('*').forEach(e=>e.style.fontFamily="'Courier New', Courier, monospace");})();
	//(function(){document.querySelectorAll('*').forEach(e=>e.style.fontFamily="Arial, Helvetica, sans-serif");})();
	
	
	
	
	
	
}


if (localStorage.getItem("thememod") != null) {
	//document.getElementById("thememod").value = localStorage.getItem("thememod");
	changeTheme()
} else {
	changeTheme();
}

const inputHandler6 = function(e) {
	changeTheme();

}

//thememode = document.getElementById("thememod");
//thememode.addEventListener('change', inputHandler6);

htmlEditor.on("change", function (e) {
	localStorage.setItem("luacode", e.getValue());
});
htmlEditor2.on("change", function (e) {
	localStorage.setItem("jscode", e.getValue());
});

(function() {
  const bot = document.getElementById('bot');
  const header = document.getElementById('botHeader');
  const footer = document.getElementById('botFooter');
	
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  header.addEventListener('mousedown', dragStart);
  footer.addEventListener('mousedown', dragStart);
  document.addEventListener('mousemove', drag);
  document.addEventListener('mouseup', dragEnd);

  function dragStart(e) {
    // Don't drag if clicking on toggle button
    if (e.target.classList.contains('bot-toggle')) {
      return;
    }
    
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    isDragging = true;
  }

  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      xOffset = currentX;
      yOffset = currentY;

      setTranslate(currentX, currentY, bot);
    }
  }

  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;

    isDragging = false;
  }

  function setTranslate(xPos, yPos, el) {
    el.style.transform = `translate(calc(-50% + ${xPos}px), calc(-50% + ${yPos}px))`;
  }
})();

}

setTimeout(() => {
 htmlEditor2.refresh();
 htmlEditor.refresh()
}, 5000);

setTimeout(() => {
 htmlEditor2.refresh();
 htmlEditor.refresh()
}, 7000);

setTimeout(() => {
 htmlEditor2.refresh();
 htmlEditor.refresh()
}, 10000);


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
	for (var i=0; i<timeouts.length; i++) {
	  clearTimeout(timeouts[i]);
	}
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
		//makecount++;
		betlist.push([n, y, betidentifier])
		
	}
}

// Simplified functions with proper request handling
function dataslide(json, betidentifier) {
    if (!json?.data?.multiplayerSlideBet) return;
	makecount++;
    gamelist[json.data.multiplayerSlideBet.id] = betidentifier;
    log(`Slide bet placed. ID: ${betidentifier} | amount: ${json.data.multiplayerSlideBet.amount.toFixed(8)} | target: ${json.data.multiplayerSlideBet.cashoutAt.toFixed(2)}`);
    
    if (json.data.multiplayerSlideBet.slideResult === "pending") {
        slide_bet_placed = true;
    }
}

function datacrash(json) {
    if (!json?.data?.multiplayerCrashBet?.result) return;

    if (json.data.multiplayerCrashBet.result === "pending") {
        crash_bet_placed = true;
		manualcash = false;
        cbamount = json.data.multiplayerCrashBet.amount;
        cbtarget = json.data.multiplayerCrashBet.cashoutAt;
        log(`Crash bet placed | Amount: ${cbamount.toFixed(8)} | Target: ${cbtarget.toFixed(2)}`);
    }
}

function unvault(amount, pw){
    const body = {
        variables: {
        "currency":currency,
        "amount": parseFloat(amount.toFixed(8)),
        "password": pw
		},
        query: `mutation CreateVaultWithdrawal($currency: CurrencyEnum!, $amount: Float!, $password: String, $tfaToken: String, $oauthToken: String) {\n  createVaultWithdrawal(\n    currency: $currency\n    amount: $amount\n    password: $password\n    tfaToken: $tfaToken\n    oauthToken: $oauthToken\n  ) {\n    id\n    currency\n    amount\n    user {\n      id\n      hasEmailVerified\n      email\n      balances {\n        ...UserBalance\n      }\n    }\n    __typename\n  }\n}\n\nfragment UserBalance on UserBalance {\n  available {\n    amount\n    currency\n  }\n  vault {\n    amount\n    currency\n  }\n}`
    };
    
    makeRequest(body, outunvault);	
}

function outunvault(json){
	if(json.errors != undefined){
		log(json.errors[0].errorType);
	} else {
		log("Vault withdrawal of " + json.data.createVaultWithdrawal.amount.toFixed(8))
	}

}

// Improved fetch function with proper error handling
async function makeRequest(body, callback) {
    try {
        const res = await fetch(`https://${mirror}/_api/graphql`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 
                'Content-Type': 'application/json',
                'x-access-token': tokenapi 
            },
        });
        
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        
        const json = await res.json();
        callback(json);
    } catch (err) {
        console.error('Request failed:', err);
        if (running) setTimeout(() => {}, 2000);
    }
}

function crashclick(json) {
		if(json.errors != null || cashedoutauto){ 

		} else {
		manualcash = true;
		crash_bet_placed = false;
        cbamount = json.data.multiplayerCrashCashout.payout - json.data.multiplayerCrashCashout.amount;
        cbtarget = json.data.multiplayerCrashCashout.payoutMultiplier;
        log(`Crash manual | multiplier: ${cbtarget.toFixed(2)} | Profit: ${cbamount.toFixed(8)}`);
		
						//cashedoutauto = true;
						//bet_has_been_made = false;
						color = "#05f711";
						bet_found = true;
						win = true;
						lastBet.win = true;
						lastBet.amount = json.data.multiplayerCrashCashout.amount;
						lastBet.payoutMultiplier = json.data.multiplayerCrashCashout.payoutMultiplier;
						
						endgame = true;
						//win
						winstreak++;
						wins++;
						losestreak = 0;
						betcount++;
						bets = betcount;
						
					
						current_profit = parseFloat(lastBet.amount * lastBet.payoutMultiplier) - parseFloat(lastBet.amount);
						profit_total += current_profit
						wagered += parseFloat(lastBet.amount);
						
						var row = document.createElement("tr");
					
					
					
						row.style.color = "#91F190";
					
					
						var tdbets = document.createElement("td");
						var tdamount = document.createElement("td");
						var tdhigh = document.createElement("td");
						var tdTargetChance = document.createElement("td");
						var tdRollChance= document.createElement("td");
						var tdProfit = document.createElement("td");
						var tdPayout = document.createElement("td");
						var tdTargetNumber = document.createElement("td");
						//var tdRollNumber = document.createElement("td");
						var tdRollNumber = document.createElement("td");
						tdRollNumber.innerHTML = "";
						tdRollNumber.id = 'roll_' + Math.random().toString(36).substring(2, 15);
						
						var tdNonce = document.createElement("td");
						var tdBetID = document.createElement("td");
						
						window.lastRollCellId = tdRollNumber.id;
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = nextbet.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = lastBet.payoutMultiplier.toFixed(2) + ""
						tdRollChance.innerHTML = "manual";
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + json.data.multiplayerCrashCashout.cashoutAt.toFixed(2)
						//lastBet.targetNumber = obj.payload.data.crash.event.cashoutAt;
						//tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = game;
						tdBetID.innerHTML = `<span class="clickable-bet-id" data-betid="${json.data.multiplayerCrashCashout.id}" style="cursor: pointer; color: #007bff; text-decoration: underline;">View</span>`;
						//tdBetID.innerHTML = json.data.multiplayerCrashCashout.id;
						tdPayout.innerHTML = json.data.multiplayerCrashCashout.payout.toFixed(8);
						


						

						
						row.appendChild(tdbets);
						row.appendChild(tdNonce);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdRollChance);
						row.appendChild(tdBetID);
						
						

						// Store the ID somewhere accessible
						

						// Add a class or data attribute to identify it
						//row.classList.add('latest-bet');
						
						var table = document.getElementById("botHistory");		

						if(win){
							// Add a class to the row
							row.classList.add("win-row");
							// Or set style on all cells
							var cells = row.getElementsByTagName("td");
							for(var i = 0; i < cells.length; i++) {
								cells[i].style.color = "#058514";
							}
						} else {
							// For losses, you might want a different color
							//row.classList.add("loss-row");
							// Or set red color for losses
							//var cells = row.getElementsByTagName("td");
							//for(var i = 0; i < cells.length; i++) {
								//cells[i].style.color = "#F19091";
							//}
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

						current_balance += current_profit;
						balance = current_balance;
						profit = profit_total;
						previousbet = lastBet.amount;
						currentprofit = current_profit;
						
						
						
						updateChart();
						
						const profitElement = document.getElementById('botProfit');
						  //profitElement.textContent = value;
						  
						  // Add negative class if value is negative
						  if (profit_total < 0) {
							profitElement.classList.add('negative');
						  } else {
							profitElement.classList.remove('negative');
						  }
						  
							const streakElement = document.getElementById('botCurrentStreak');
						  //streakElement.textContent = value;
						  
						  // Check if it's negative or loss strea
						  if (currentstreak < 0) {
							streakElement.classList.add('negative');
						  } else {
							streakElement.classList.remove('negative');
						  }
			
						
						document.getElementById("botBalance").innerHTML = balance.toFixed(8);
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

function cashout() {
	if(!manualcash && !cashedoutauto){
		crashcash()
	}
}

function crashcash() {
    const body = {
        variables: {},
        query: `mutation MultiplayerCrashCashout {\n  multiplayerCrashCashout {\n    ...MultiplayerCrashBet\n  }\n}\n\nfragment MultiplayerCrashBet on MultiplayerCrashBet {\n  id\n  user {\n    id\n    name\n    preferenceHideBets\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n}`
    };
    
    makeRequest(body, crashclick);
}

function crashbet(amount, target) {
    const body = {
        variables: {
            cashoutAt: parseFloat(target.toFixed(2)),
            amount: parseFloat(amount.toFixed(8)),
            currency: currency
        },
        query: `mutation MultiplayerCrashBet($amount: Float!, $currency: CurrencyEnum!, $cashoutAt: Float!) {
            multiplayerCrashBet(amount: $amount, currency: $currency, cashoutAt: $cashoutAt) {
                ...MultiplayerCrashBet
                user { id activeCrashBet { ...MultiplayerCrashBet } }
            }
        }
        fragment MultiplayerCrashBet on MultiplayerCrashBet {
            id user { id name } payoutMultiplier gameId amount payout currency result
            updatedAt cashoutAt btcAmount: amount(currency: btc)
        }`
    };
    
    makeRequest(body, datacrash);
}

function slidebet(amount, target, betidentifier) {
    const body = {
        variables: {
            identifier: randomString(21),
            cashoutAt: parseFloat(target.toFixed(4)),
            amount: parseFloat(amount.toFixed(8)),
            currency: currency
        },
        query: `mutation MultiplayerSlideBet($amount: Float!, $currency: CurrencyEnum!, $cashoutAt: Float!, $identifier: String!) {
            multiplayerSlideBet(amount: $amount, currency: $currency, cashoutAt: $cashoutAt, identifier: $identifier) {
                __typename ...MultiplayerSlideBet
                user { id activeSlideBet { ...MultiplayerSlideBet } }
            }
        }
        fragment MultiplayerSlideBet on MultiplayerSlideBet {
            id user { id name preferenceHideBets } payoutMultiplier gameId amount payout
            currency slideResult: result updatedAt cashoutAt btcAmount: amount(currency: btc)
            active createdAt
        }`
    };
    
    makeRequest(body, (json) => dataslide(json, betidentifier));
}

function resetseed(client = randomString(10)) {
    const body = {
        operationName: "RotateSeedPair",
        variables: { seed: client },
        query: `mutation RotateSeedPair($seed: String!) {
            rotateSeedPair(seed: $seed) {
                clientSeed {
                    user {
                        id
                        activeClientSeed { id seed __typename }
                        activeServerSeed { id nonce seedHash nextSeedHash __typename }
                        __typename
                    }
                    __typename
                }
                __typename
            }
        }`
    };
    
    makeRequest(body, outseed);
}

function outseed(json) {
    if (json?.errors) {
        log(json.errors[0].errorType);
    } else {
        log("Seed has been reset.");
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
	userBalances(false);
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
//var userBalances1 = document.getElementById("userBal");
//userBalances1.addEventListener('click', function() { userBalances(); }, false);
var botStopOnWinButton = document.getElementById("botStopOnWinButton");
botStopOnWinButton.addEventListener('click', function() { stopOnWin() }, false);


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
    stoponwin = true; 
	botStopOnWinButton.disabled = true; 
	if (running == false) {start();}
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
	userBalances(false);	
}, "500");

function userBalances(newbal){

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
	.then(json => outbals(json, newbal))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
			//initUser();							
		}, "2000");
	});


}


(function repeat() {
  userBalances(false);
  setTimeout(repeat, 5000);
})();

function outbals(json, newbal){

	balance = 0
	var balan1 = document.getElementById("botBalance");
	balan1.innerHTML = balance.toFixed(8);
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
	if(newbal){
		started_bal = balance;
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
		log("Deposited " + json.data.createVaultDeposit.amount.toFixed(8) + " to vault.")
	}

}
function betRequest({ url, body, retryParams = [], retryDelay = 1000 }) {

    fetch(`https://${mirror}/${url}`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': tokenapi
        }
    })
    .then(res => {
        if (!res.ok) {
            // Manually throw an object with the status code
            throw { status: res.status };
        }
        return res.json();
    })
    .then(json => data(json))
    .catch(err => {
        if (running) {
           // console.log("Caught error status:", err.status);

            if (err.status === 403) {
                setTimeout(() => {
			console.log("error status 403");
			
			if (running) {
				
			runBet = (fn, args = []) => {
				fn(...args);
			};

			gameFunctions = {
				bars: 		 () => runBet(barsBet, [nextbet, difficulty, tiles]),
				hilo:        () => runBet(hiloBet, [nextbet, startcard]),
				bluesamurai: () => runBet(samuraiBet, [nextbet]),
				darts:       () => runBet(dartsBet, [nextbet, difficulty]),
				tomeoflife:  () => runBet(tomeBet, [nextbet, lines]),
				scarabspin:  () => runBet(scarabBet, [nextbet, lines]),
				diamonds:    () => runBet(diamondBet, [nextbet]),
				cases:       () => runBet(caseBet, [nextbet, difficulty]),
				videopoker:  () => runBet(videopokerBet, [nextbet]),
				rps:         () => runBet(rockpaperBet, [nextbet, guesses]),
				flip:        () => runBet(flipBet, [nextbet, guesses]),
				snakes:      () => runBet(snakesBet, [nextbet, difficulty, rolls]),
				pump:        () => runBet(pumpBet, [nextbet, pumps, difficulty]),
				baccarat:    () => runBet(baccaratbet, [tie, player, banker]),
				dragontower: () => runBet(dragontowerBet, [nextbet, difficulty, eggs]),
				roulette:    () => runBet(roulettebet, [chips]),
				wheel:       () => runBet(wheelbet, [nextbet, segments, risk]),
				plinko:      () => runBet(plinkobet, [nextbet, rows, risk]),
				mines:       () => runBet(minesbet, [nextbet, fields, mines]),
				keno:        () => runBet(kenobet, [nextbet, numbers, risk]),
				dice:        () => runBet(DiceBet, [nextbet, chance, bethigh]),
				limbo:       () => runBet(LimboBet, [nextbet, target]),
				packs:       () => runBet(packsBet, [nextbet]),
				blackjack:	 () => runBet(blackjackBet, [nextbet]),
				chicken: 	 () => runBet(chickenBet, [nextbet, difficulty, steps]),
				tarot: 	 	 () => runBet(tarotBet, [nextbet, difficulty]),
				drill: 	 	 () => runBet(drillBet, [nextbet, target, pick]),
				primedice:   () => runBet(PrimeBet, [nextbet, target1, target2, target3, target4, condition])
			};

			if (game in gameFunctions) gameFunctions[game]();
			}		
					
                }, 2000);
            } else {
                setTimeout(() => {
                    //console.log("betrequest");
					if (running) {
						betRequest({ url, body, retryParams, retryDelay });
					}
                }, 2000);
            }
        }
    });
}

function drillBet(amount, target, pick) {
    betRequest({
        url: '_api/casino/drill/bet',
        body: { amount, currency, identifier: randomString(21), target, pick },
        retryParams: [amount, target, pick]
    });
}

function tarotBet(amount, difficulty) {
    betRequest({
        url: '_api/casino/tarot/bet',
        body: { amount, currency, identifier: randomString(21), difficulty },
        retryParams: [amount, difficulty]
    });
}

function chickenBet(amount, difficulty, round) {
    betRequest({
        url: '_api/casino/chicken/bet',
        body: { amount, currency, identifier: randomString(21), difficulty, round },
        retryParams: [amount, difficulty, round]
    });
}

function packsBet(amount) {
    betRequest({
        url: '_api/casino/packs/bet',
        body: { amount, currency, identifier: randomString(21) },
        retryParams: [amount]
    });
}

function barsBet(amount, difficulty, tiles) {
    betRequest({
        url: '_api/casino/bars/bet',
        body: { amount, currency, identifier: randomString(21), difficulty, tiles },
        retryParams: [amount, difficulty, tiles]
    });
}

function blackjackBet(amount) {
    betRequest({
        url: '_api/casino/blackjack/bet',
        body: { identifier: randomString(21), currency, amount },
        retryParams: [amount]
    });
}

function blackjackNext(action) {
    betRequest({
        url: '_api/casino/blackjack/next',
        body: { action, identifier: randomString(21) },
        retryParams: [action]
    });
}

function hiloBet(amount, startCard) {
    betRequest({
        url: '_api/casino/hilo/bet',
        body: { identifier: randomString(21), currency, amount, startCard },
        retryParams: [amount, startCard]
    });
}

function hiloNext(guess) {
    betRequest({
        url: '_api/casino/hilo/next',
        body: { guess },
        retryParams: [guess]
    });
}

function hiloCash() {
    betRequest({
        url: '_api/casino/hilo/cashout',
        body: { identifier: randomString(21) }
    });
}

function dartsBet(amount, difficulty) {
    betRequest({
        url: '_api/casino/darts/bet',
        body: { currency, amount, identifier: randomString(21), difficulty },
        retryParams: [amount, difficulty]
    });
}

function videopokerBet(amount) {
    betRequest({
        url: '_api/casino/video-poker/bet',
        body: { currency, amount },
        retryParams: [amount]
    });
}

function samuraiBet(amount) {
    spinType = "complete";
    betRequest({
        url: '_api/casino/slots-samurai/bet',
        body: { currency, amount, identifier: randomString(21) },
        retryParams: [amount]
    });
}

function samuraiNext() {
    betRequest({
        url: '_api/casino/slots-samurai/next',
        body: { identifier: randomString(21) }
    });
}

function scarabBet(amount, lines) {
    betRequest({
        url: '_api/casino/slots/bet',
        body: { currency, amount, lines, identifier: randomString(21) },
        retryParams: [amount, lines]
    });
}

function tomeBet(amount, lines) {
    betRequest({
        url: '_api/casino/slots-tome-of-life/bet',
        body: { currency, amount, lines, identifier: randomString(21) },
        retryParams: [amount, lines]
    });
}

function diamondBet(amount) {
    betRequest({
        url: '_api/casino/diamonds/bet',
        body: { currency, amount, identifier: randomString(21) },
        retryParams: [amount]
    });
}

function caseBet(amount, difficulty) {
    betRequest({
        url: '_api/casino/cases/bet',
        body: { currency, amount, difficulty, identifier: randomString(21) },
        retryParams: [amount, difficulty]
    });
}

function flipBet(amount, guesses) {
    betRequest({
        url: '_api/graphql',
        body: {
            query: `mutation FlipBet($amount: Float!, $currency: CurrencyEnum!, $identifier: String, $guesses: [FlipConditionEnum!]!) {
                flipBet(amount: $amount, currency: $currency, identifier: $identifier, guesses: $guesses) {
                    ...CasinoBet
                    state { ...CasinoGameFlip }
                }
            }
            fragment CasinoBet on CasinoBet { id active payoutMultiplier amountMultiplier amount payout updatedAt currency game user { id name } }
            fragment CasinoGameFlip on CasinoGameFlip { currentRound payoutMultiplier playedRounds flips }`,
            variables: { amount, currency, identifier: randomString(21), guesses }
        },
        retryParams: [amount, guesses]
    });
}

function rockpaperBet(amount, guesses) {
    betRequest({
        url: '_api/casino/rock-paper-scissors/bet',
        body: { currency, amount, identifier: randomString(21), guesses },
        retryParams: [amount, guesses]
    });
}

function snakesBet(amount, difficulty, rollCount) {
    betRequest({
        url: '_api/casino/snakes/bet',
        body: { currency, amount, identifier: randomString(21), difficulty, rollCount },
        retryParams: [amount, difficulty, rollCount]
    });
}

function baccaratbet(tie, player, banker) {
    betRequest({
        url: '_api/casino/baccarat/bet',
        body: { currency, identifier: randomString(21), tie, player, banker },
        retryParams: [tie, player, banker]
    });
}

function dragontowerBet(amount, difficulty, eggs) {
    betRequest({
        url: '_api/casino/dragon-tower/bet',
        body: { amount, currency, identifier: randomString(21), difficulty, eggs },
        retryParams: [amount, difficulty, eggs]
    });
}

function roulettebet(selection) {
    const groups = { rows: [], parities: [], ranges: [], colors: [], numbers: [] };
    selection.forEach(obj => {
        if (obj.value.includes("row")) groups.rows.push(obj);
        else if (obj.value.includes("parity")) groups.parities.push(obj);
        else if (obj.value.includes("range")) groups.ranges.push(obj);
        else if (obj.value.includes("color")) groups.colors.push(obj);
        else if (obj.value.includes("number")) groups.numbers.push(obj);
    });

    betRequest({
        url: '_api/casino/roulette/bet',
        body: { currency, identifier: randomString(21), ...groups },
        retryParams: [selection]
    });
}

function wheelbet(amount, segments, risk) {
    betRequest({
        url: '_api/casino/wheel/spin',
        body: { amount, currency, identifier: randomString(21), risk, segments },
        retryParams: [amount, segments, risk]
    });
}

function plinkobet(amount, rows, risk) {
    betRequest({
        url: '_api/casino/plinko/bet',
        body: { amount, currency, identifier: randomString(21), risk, rows },
        retryParams: [amount, rows, risk]
    });
}

function kenobet(amount, numbers, risk) {
    betRequest({
        url: '_api/casino/keno/bet',
        body: { amount, currency, identifier: randomString(21), risk, numbers },
        retryParams: [amount, numbers, risk]
    });
}

function minebet(amount, fields, minesCount) {
    betRequest({
        url: '_api/casino/mines/bet',
        body: { amount, currency, identifier: randomString(21), minesCount, fields },
        retryParams: [amount, fields, minesCount]
    });
}

function pumpBet(amount, round, difficulty) {
    betRequest({
        url: '_api/casino/pump/bet',
        body: { amount, currency, identifier: randomString(21), round, difficulty },
        retryDelay: 2000,
        retryParams: [amount, round, difficulty]
    });
}

function LimboBet(amount, multiplierTarget) {
    betRequest({
        url: '_api/casino/limbo/bet',
        body: { multiplierTarget, identifier: randomString(21), amount, currency },
        retryDelay: 2000,
        retryParams: [amount, multiplierTarget]
    });
}

function PrimeBet(amount, target1, target2, target3, target4, condition) {
	if (condition === "rollBetween" || condition === "rollOutside"){
		target3 = null
		target4 = null
	}
    betRequest({
        url: '_api/casino/primedice-x/bet',
        body: { target1, target2, target3, target4, condition, identifier: randomString(21), amount, currency },
        retryDelay: 2000,
        retryParams: [amount, target1, target2, target3, target4, condition]
    });
}

function DiceBet(amount, chance, bethigh) {
    let target, cond;

    if (bethigh) {
        target = 100 - chance;
        cond = "above";
    } else {
        target = chance;
        cond = "below";
    }

    const isPrimedice = mirror.includes("primedice");
    const url = isPrimedice ? '_api/graphql' : '_api/casino/dice/roll';
    const body = isPrimedice ? {
        query: `mutation PrimediceRoll($amount: Float!, $target: Float!, $condition: CasinoGamePrimediceConditionEnum!, $currency: CurrencyEnum!) {
            primediceRoll(amount: $amount, target: $target, condition: $condition, currency: $currency) {
                ...CasinoBetFragment
                state { ...PrimediceStateFragment }
            }
        }
        fragment CasinoBetFragment on CasinoBet {
            id active payoutMultiplier amountMultiplier amount payout updatedAt currency game user { id name }
        }
        fragment PrimediceStateFragment on CasinoGamePrimedice {
            result target condition
        }`,
        variables: { target, condition: cond, amount, currency }
    } : {
        target, condition: cond, identifier: randomString(21), amount, currency
    };

    betRequest({
        url,
        body,
        retryDelay: 2000,
        retryParams: [amount, chance, bethigh]
    });
}


function updatePerformanceMetrics(){
	const endMS = performance.now();
	var meter = document.getElementById("botSpeed");
	measures.push(endMS - startMS)
	if(measures.length > 3){
		measures.shift()
	}
	meter.innerHTML = (1000 / (measures.reduce((partialSum, a) => partialSum + a, 0)/measures.length)).toFixed(1) + " bet/s"
	startMS = performance.now();	
}

function data(json){
		if(json.errors != null){
			if(!json.errors[0].errorType.includes("parallelCasinoBet")){
			log(json.errors[0].errorType + ". " +json.errors[0].message )
			errorgame = true
			}
			if(json.errors[0].errorType.includes("existingGame")){
				if(game==="hilo"){
					hiloNext("equal")
					return;
				}
				if(game==="mines"){
					//activeBetMines()
				}
				if(game==="blackjack"){
					
					action = "stand"	
					blackjackNext(action);
					return;
				};
				
				
							
			}
			if(game==="blackjack"){
			if(json.errors[0].errorType === "blackjackInvalidAction"){
				action = "noInsurance"
			} else {
				action = "stand"	
			}
			}
			
			cashout_done = false
			if(json.errors[0].errorType.includes("notFound")){
				cashout_done = true				
			}
			if(json.errors[0].errorType.includes("insignificantBet") && game === "hilo"){
				cashout_done = true
			}
			if(json.errors[0].errorType.includes("insignificantBet") && game === "blackjack"){
				cashout_done = true
			} 
			//return;
		} else {
		errorgame = false
		var table = document.getElementById("botHistory");
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
		
		var tdcheck = document.createElement("input");
		tdcheck.type = "checkbox";
		tdcheck.name = "checked";
		tdcheck.checked = bethigh;
		tdcheck.id = "checked";
		tdhigh.appendChild(tdcheck);
		
		if(!json.hasOwnProperty("data")){
			if(!json.hasOwnProperty("hiloNext") && !json.hasOwnProperty("hiloCashout"))
			{
				updatePerformanceMetrics()
			}
		} else {
			updatePerformanceMetrics()
		}
		
		const gameType = Object.keys(json)[0] === "data" ? Object.keys(json.data)[0] : Object.keys(json)[0]
		bet = Object.keys(json)[0] === "data" ? json.data[gameType] : json[gameType]
		
	
		if(json.data){
	
		if (gameType === "primediceRoll") {
            lastBet.Roll = bet.state.result;
            lastBet.target = bet.state.target;
            
            // Determine bet direction and calculate chance
            const bethigh = bet.state.condition !== "below";
            lastBet.chance = bethigh 
                ? 100 - 0.01 - bet.state.target 
                : bet.state.target;
            
            // Calculate target number
            lastBet.targetNumber = 99 / (bethigh ? (lastBet.chance - 0.01) : lastBet.chance);
            
            // UI Updates
            tdTargetChance.innerHTML = lastBet.chance.toFixed(4);
            tdRollChance.innerHTML = bethigh 
                ? (100 - 0.01 - bet.state.result).toFixed(4) 
                : bet.state.result.toFixed(4);
            tdTargetNumber.innerHTML = (bethigh ? ">" : "<") + lastBet.targetNumber.toFixed(4);
            tdRollNumber.innerHTML = bet.state.result.toFixed(2);
            //break;
        }
	
        if (gameType === "flipBet") {
            lastBet.Roll = bet.state.currentRound;
            lastBet.target = guesses.length;
            lastBet.targetNumber = guesses.length;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.Roll;
            //break;
		}
		}
		
		if (json && !json.data) {
		
		if (gameType === "drillBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = bet.state.target;
            lastBet.targetNumber = `${bet.state.target}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = bet.state.pick + "/" + bet.state.target.toFixed(4);
            tdRollNumber.innerHTML = bet.state.drillResults[bet.state.pick-1].multiplier;
		tdRollChance.innerHTML = bet.state.pick + "/" + bet.state.target.toFixed(4);;
            //break;
        } 
		
		if (gameType === "tarotBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = bet.state.difficulty;
            lastBet.targetNumber = `${bet.state.difficulty}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier;
            //break;
        } 
		
        if (gameType === "chickenBet"){
            lastBet.Roll = bet.state._deathPoint;
            lastBet.target = steps;
            lastBet.targetNumber = `${bet.state.difficulty}|${steps}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier;
            //break;
        } 	
		
		if (gameType === "barsBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = bet.state.tiles;
            lastBet.targetNumber = `${bet.state.difficulty}|${bet.state.tiles.length}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier;
            //break;
        }  
		
		if (gameType === "packsBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = null;
            lastBet.targetNumber = null
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier;
            //break;
        }  
		
		if (gameType === "primediceXBet"){
            lastBet.Roll = bet.state.result;
            lastBet.chance = 0
            lastBet.target = 0
            lastBet.targetNumber = 0
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x"
            tdRollChance.innerHTML = bet.state.condition;
            tdTargetNumber.innerHTML = bet.state.target1 + "|" + bet.state.target2 + "|" + bet.state.target3 + "|" + bet.state.target4;
            tdRollNumber.innerHTML = bet.state.result.toFixed(2);
            //break;
		}
		
		if (gameType === "diceRoll"){
            lastBet.Roll = bet.state.result;
            lastBet.chance = bet.state.condition === "below" 
                ? bet.state.target 
                : 100 - bet.state.target;
            lastBet.target = bet.state.target;
            lastBet.targetNumber = 99 / lastBet.chance;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdRollChance.innerHTML = bet.state.condition === "below" 
                ? bet.state.result.toFixed(4) 
                : (100 - bet.state.result).toFixed(4);
            tdTargetNumber.innerHTML = ">" + lastBet.targetNumber.toFixed(4);
            tdRollNumber.innerHTML = bet.state.result.toFixed(2);
            //break;
		}
        
		if (gameType === "limboBet"){
            lastBet.Roll = bet.state.result;
            lastBet.chance = 99 / bet.state.multiplierTarget;
            lastBet.target = bet.state.multiplierTarget;
            lastBet.targetNumber = bet.state.multiplierTarget;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdRollChance.innerHTML = (99 / bet.state.result).toFixed(4);
            tdTargetNumber.innerHTML = ">" + bet.state.multiplierTarget.toFixed(4);
            tdRollNumber.innerHTML = bet.state.result.toFixed(2);
            //break;
		}
        if (gameType === "pumpBet"){
            lastBet.Roll = bet.state._popPoint;
            lastBet.target = pumps;
            lastBet.targetNumber = pumps;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = pumps;
            tdRollNumber.innerHTML = bet.state._popPoint;
            //break;
		}
        if (gameType === "baccaratBet"){
            const value = document.getElementById("botMenuMode").value
            lastBet.Roll = value === "lua" 
                ? JSON.stringify(bet.state.result) 
                : bet.state.result;
                
            let bettext = "";
            if (bet.state.tie > 0) bettext += "t|";
            if (bet.state.banker > 0) bettext += "b|";
            if (bet.state.player > 0) bettext += "p";
            lastBet.target = 0;
            lastBet.targetNumber = bettext;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.Roll;
            //break;
		} 
        if (gameType === "dragonTowerBet"){
            lastBet.Roll = bet.state.currentRound;
            lastBet.target = eggs.length;
            lastBet.targetNumber = `${bet.state.difficulty}|${eggs.length}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier;
            //break;
        }    
        if (gameType === "rouletteBet"){
            lastBet.Roll = bet.state.result;
            lastBet.target = bet.state.numbers.length;
            lastBet.targetNumber = "";
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.Roll;
            //break;
        }    
        if (gameType === "wheelSpin"){
            lastBet.Roll = bet.state.result;
            lastBet.target = bet.state.segments;
            lastBet.targetNumber = `${bet.state.risk}|${bet.state.segments}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.Roll;
            //break;
        }    
        if (gameType === "plinkoBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = bet.state.rows;
            lastBet.targetNumber = `${bet.state.risk}|${bet.state.rows}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.Roll;
            //break;
        }    
        if (gameType === "kenoBet"){
            lastBet.Roll = bet.state.drawnNumbers;
            const kenofield = bet.state.selectedNumbers;
            const hitkeno = kenofield.filter(n => bet.state.drawnNumbers.includes(n));
            lastBet.target = kenofield.length;
            lastBet.targetNumber = `${bet.state.risk}|${kenofield.length}`;
            lastBet.hitCount = hitkeno.length;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.hitCount + "x";
            //break;
        }    
        if (gameType === "minesBet"){
            lastBet.Roll = bet.state.mines;
            const rounds = bet.state.rounds;
            const minefield = bet.state.mines;
            const str_field = rounds.map(round => round.field);
            
            const hitmines = str_field.filter(n => minefield.includes(n));
            
            lastBet.target = str_field.length;
            lastBet.targetNumber = `${minefield.length}|${str_field.length}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = hitmines;
            //break;
        }    
        if (gameType === "casesBet"){
            lastBet.Roll = bet.state.result;
            lastBet.target = bet.state.difficulty;
            lastBet.targetNumber = bet.state.difficulty;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = lastBet.Roll;
            //break;
        }    
        if (gameType === "snakesBet"){
            lastBet.target = rolls;
            lastBet.targetNumber = `${bet.state.difficulty}|${rolls}`;
            
            let snakecount = 0;
            Object.keys(bet.state.rounds).forEach(key => {
                if (bet.state.rounds[key].payoutMultiplier >= 1) {
                    snakecount++;
                }
            });
            lastBet.Roll = snakecount;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = snakecount;
            //break;
        }    
        if (gameType === "rockPaperScissorsBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = bet.state.difficulty;
            lastBet.targetNumber = guesses.length;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
            //break;
        }    
        if (gameType === "slotsTomeOfLifeBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = lines;
            lastBet.targetNumber = lines;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
            //break;
        }    
        if (gameType === "slotsBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = lines;
            lastBet.targetNumber = lines;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
            //break;
        }    
        if (gameType === "slotsSamuraiBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = 0;
            lastBet.targetNumber = spinType === "complete" ? "" : spinType;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
            
            // Special handling for next spin type
            if (bet.state.nextSpinType === "special" || bet.state.nextSpinType === "bonus") {
                samuraiNext();
                samuraiskip = true;
                spinType = bet.state.nextSpinType;
                return;
            }
            //break;
		}   
        if (gameType === "slotsSamuraiNext"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = 0;
            lastBet.targetNumber = spinType === "complete" ? "" : spinType;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
            
            samuraiskip = false;
            
            // Special handling for next spin type
            if (bet.state.nextSpinType === "special" || bet.state.nextSpinType === "bonus") {
                samuraiNext();
                spinType = bet.state.nextSpinType;
                samuraiskip = true;
                return;
            }
            //break;
        }    
        if (gameType === "diamondsBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = 0;
            lastBet.targetNumber = "";
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
            //break;
        }    
        if (gameType === "dartsBet"){
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = 0;
            lastBet.targetNumber = bet.state.difficulty;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
            //break;
        } 

		if (gameType === "blackjackBet"){
            if (bet.active) {
                // Active game continues
                cashout_done = false;
                currentBet = bet;
                
            } else {
                // Game ended
                cashout_done = true;
                lastBet.Roll = bet.payoutMultiplier;
                lastBet.target = 0;
             
                lastBet.targetNumber = "";
                
                // UI Updates
                tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
                tdTargetNumber.innerHTML = null;
                tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
                tdRollChance.innerHTML = null;
            }
        }    
        if (gameType === "blackjackNext"){
            if (bet.active) {
                // Active game continues
                cashout_done = false;
                currentBet = bet;
                
            } else {
                // Game ended
                cashout_done = true;
                lastBet.Roll = bet.payoutMultiplier;
                lastBet.target = 0;
             
                lastBet.targetNumber = "";
                
                // UI Updates
                tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
                tdTargetNumber.innerHTML = null;
                tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
                tdRollChance.innerHTML = null;
            }
            
        }    
	
        if (gameType === "hiloBet"){
            // Just set current bet for hiloBet (active game)
            currentBet = bet;
        }    
        if (gameType === "hiloNext"){
            if (bet.active) {
                // Active game continues
                cashout_done = false;
                currentBet = bet;
                
            } else {
                // Game ended
                cashout_done = true;
                lastBet.Roll = bet.payoutMultiplier;
                lastBet.target = 0;
                
                // Process cards
                const cards = [];
                cards.push(startcard.rank);
                bet.state.rounds.forEach((index) => {
                    cards.push(index.card.rank);
                });
                lastBet.targetNumber = "";
                
                // UI Updates
                tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
                tdTargetNumber.innerHTML = "";
                tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
                tdRollChance.innerHTML = cards.join(",");
            }
            
        }    
        if (gameType === "hiloCashout"){
            cashout_done = true;
            lastBet.Roll = bet.payoutMultiplier;
            lastBet.target = 0;
            
            // Process cards
            const cards = [];
            cards.push(startcard.rank);
            bet.state.rounds.forEach((index) => {
                cards.push(index.card.rank);
            });
            lastBet.targetNumber = "";
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = "";
            tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(4);
            tdRollChance.innerHTML = cards.join(",");
		}
		}
		
		
		if(game != "hilo" && game != "blackjack"){
			cashout_done = true
		}
		if(cashout_done){
			lastBet = {
				id: bet.id,
				name: bet.user.name,
				amount: bet.amount,
				payoutMultiplier: bet.payoutMultiplier,
				payout: bet.payout,
				Roll: lastBet.Roll,
				win: bet.payoutMultiplier >= 1
			};
			
			
			if (lastBet.win) {
				win = true;
				winstreak++;
				wins++;
				losestreak = 0;
				color = 'green'
			} else {
				win = false;
				losses++;
				losestreak++;
				winstreak = 0;
				color = 'red'
			}
			
			
			current_profit = parseFloat(bet.payout) - parseFloat(bet.amount);
			profit_total += current_profit;
			wagered += parseFloat(bet.amount);
			
			current_balance += current_profit;
			balance = current_balance;
			profit = profit_total;
			previousbet = lastBet.amount;
			currentprofit = current_profit;
			betcount++;
			bets = betcount;
			
					
			tdbets.innerHTML = bets;
			tdamount.innerHTML = bet.amount.toFixed(8);
			tdProfit.innerHTML = current_profit.toFixed(8);
			tdNonce.innerHTML = bet.game;
			tdBetID.innerHTML = `<span class="clickable-bet-id" data-betid="${bet.id}" style="cursor: pointer; color: #007bff; text-decoration: underline;">View</span>`;
			tdPayout.innerHTML = bet.payout.toFixed(8);
			
			row.appendChild(tdbets);
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);
			
			row.appendChild(tdBetID);	
			
			if(win){
				//row.style.color = "#91F190";
			} else {
				//row.style.background = "#FFC0CB";
			}
			


			if(win){
				// Add a class to the row
				row.classList.add("win-row");
				// Or set style on all cells
				var cells = row.getElementsByTagName("td");
				for(var i = 0; i < cells.length; i++) {
					cells[i].style.color = "#058514";
					//cells[i].style.background = "#74e374";
				}
			} else {
				// For losses, you might want a different color
				//row.classList.add("loss-row");
				// Or set red color for losses
				//var cells = row.getElementsByTagName("td");
				//for(var i = 0; i < cells.length; i++) {
					//cells[i].style.color = "#F19091";
				//}
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

		
			
			updateChart();
			
			
			  const profitElement = document.getElementById('botProfit');
			  //profitElement.textContent = value;
			  
			  // Add negative class if value is negative
			  if (profit_total < 0) {
				profitElement.classList.add('negative');
			  } else {
				profitElement.classList.remove('negative');
			  }
			  
				const streakElement = document.getElementById('botCurrentStreak');
			  //streakElement.textContent = value;
			  
			  // Check if it's negative or loss strea
			  if (currentstreak < 0) {
				streakElement.classList.add('negative');
			  } else {
				streakElement.classList.remove('negative');
			  }
			
			//document.getElementById("multi").innerHTML = toFixedNo(json.data.limboBet.state.result, 2);
			document.getElementById("botBalance").innerHTML = balance.toFixed(8);
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
		
		
		var value = document.getElementById("botMenuMode").value;
		if(value == "lua"){
			sendLua();
		} else if(value == "js"){
			if(game === "hilo" || game === "blackjack"){
			if(cashout_done) {
				dobet();
			} else {
				if (game === "hilo"){
					hiloguess = round()
				} else if (game === "blackjack"){
					nextactions = round()
					if(nextactions === "BLACKJACK_STAND"){
						action = "stand"
					} 
					if(nextactions === "BLACKJACK_SPLIT"){
						action = "split"
					} 
					if(nextactions === "BLACKJACK_HIT"){
						action = "hit"
					} 
					if(nextactions === "BLACKJACK_DOUBLE"){
						action = "double"
					} 	
					if(nextactions === "BLACKJACK_NOINSURANCE"){
						action = "noInsurance"
					} 
					if(nextactions === "BLACKJACK_INSURANCE"){
						action = "insurance"
					} 
				}
			}
			} else {
				dobet();
			}
			
			
		}
		if(win && stoponwin){
			stop()
		}
		
		if(hiloguess == 3 && running == false && cashout_done == false && game === "hilo" && win == false){
			//cashout_done = true
			hiloCash()
		}
		}
		if (running && !samuraiskip) {
		sleepfor(sleeptime).then(() => {
        sleeptime = 0;
        if (!running) return;

        const gameHandlers = {
            hilo: () => {
                if (cashout_done) {
                    cashout_done = false;
                    hiloBet(nextbet, startcard);
                } else {
                    const lastCard = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
                    
                    if ([2, 4, 5, 7].includes(hiloguess)) {
                        const guesses = {
                            2: 'equal',
                            7: 'skip',
                            5: {
                                A: 'higher',
                                K: 'equal',
                                Q: 'higherEqual',
                                J: 'higherEqual',
                                default: 'higherEqual'
                            },
                            4: {
                                A: 'equal',
                                K: 'lower',
                                Q: 'lowerEqual',
                                J: 'lowerEqual',
                                default: 'lowerEqual'
                            }
                        };
                        
                        let guessed;
                        if (hiloguess === 5 || hiloguess === 4) {
                            guessed = guesses[hiloguess][lastCard] || guesses[hiloguess].default;
                        } else {
                            guessed = guesses[hiloguess];
                        }
                        
                        hiloNext(guessed);
                    } else if (hiloguess === 3) {
                        hiloCash();
                    }
                }
            },
			blackjack: () => {
                if (cashout_done) {
                    cashout_done = false;
                    blackjackBet(nextbet);
                } else {
					blackjackNext(action);
                }
            },
			bars: () => barsBet(nextbet, difficulty, tiles),
            tomeoflife: () => tomeBet(nextbet, lines),
            scarabspin: () => scarabBet(nextbet, lines),
            bluesamurai: () => samuraiBet(nextbet),
            diamonds: () => diamondBet(nextbet),
            cases: () => caseBet(nextbet, difficulty),
            videopoker: () => videopokerBet(nextbet),
            rps: () => rockpaperBet(nextbet, guesses),
            flip: () => flipBet(nextbet, guesses),
            snakes: () => snakesBet(nextbet, difficulty, rolls),
            pump: () => pumpBet(nextbet, pumps, difficulty),
            baccarat: () => baccaratbet(tie, player, banker),
            dragontower: () => dragontowerBet(nextbet, difficulty, eggs),
            roulette: () => roulettebet(chips),
            wheel: () => wheelbet(nextbet, segments, risk),
            plinko: () => plinkobet(nextbet, rows, risk),
            mines: () => minebet(nextbet, fields, mines),
            keno: () => kenobet(nextbet, numbers, risk),
            dice: () => DiceBet(nextbet, chance, bethigh),
            limbo: () => LimboBet(nextbet, target),
            darts: () => dartsBet(nextbet, difficulty),
			packs: () => packsBet(nextbet), 
			chicken: () => chickenBet(nextbet, difficulty, steps),
			tarot: () => tarotBet(nextbet, difficulty),
			drill: () => drillBet(nextbet, target, pick),
			primedice: () => PrimeBet(nextbet, target1, target2, target3, target4, condition)
        };

        if (gameHandlers[game]) {
            gameHandlers[game]();
        }
    });
	}		
}


async function view(betId){
	const data = await fetchBetDetails(betId);
	log(data.data.bet.iid);
}

document.addEventListener('click', async function(e) {
    if (e.target.classList.contains('clickable-bet-id')) {
        const betId = e.target.getAttribute('data-betid');
        //console.log('Bet clicked:', betId);
        
        // Add your click handler logic here
        // Example: Fetch bet details, show modal, etc.
        
		const data = await fetchBetDetails(betId);
		const element21 = document.querySelector(`[data-betid="${betId}"]`);
		element21.innerHTML = `<button onclick="
		  const span = this.querySelector('span');
		  const originalText = span.textContent;
		  navigator.clipboard.writeText('${data.data.bet.iid}');
		  span.textContent = 'Copied!';
		  setTimeout(() => span.textContent = originalText, 1500);
		" style="cursor: pointer; color: #007bff;">
		  <span>${data.data.bet.iid}</span> | 
		</button><a href="https://${mirror}/casino/home?modal=bet&betId=${betId}" target="_blank" style="text-decoration: none;">Open</a>`;
		//log(data.data.bet.iid)
    }
});

async function fetchBetDetails(betId) {
    const response = await fetch('https://' + mirror + '/_api/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': tokenapi
        },
        body: JSON.stringify({
            "query": "query BetLookup($iid: String, $betId: String) {\n  bet(iid: $iid, betId: $betId) {\n    ...BetFragment\n  }\n}\n\nfragment BetFragment on Bet {\n  id\n  iid\n  type\n  scope\n  game {\n    name\n    icon\n    slug\n  }\n  bet {\n    ... on SportsbookXMultiBet {\n      ...XMultiBet\n    }\n    ... on CasinoBet {\n      ...CasinoBet\n      user {\n        id\n        name\n        preferenceHideBets\n      }\n    }\n    ... on EvolutionBet {\n      ...EvolutionBet\n      user {\n        id\n        name\n        preferenceHideBets\n      }\n    }\n    ... on MultiplayerCrashBet {\n      ...MultiplayerCrashBet\n      user {\n        id\n        name\n        preferenceHideBets\n      }\n    }\n    ... on MultiplayerSlideBet {\n      ...MultiplayerSlideBet\n      user {\n        id\n        name\n        preferenceHideBets\n      }\n    }\n    ... on SoftswissBet {\n      ...SoftswissBet\n      user {\n        id\n        name\n        preferenceHideBets\n      }\n    }\n    ... on ThirdPartyBet {\n      ...ThirdPartyBet\n    }\n    ... on SportBet {\n      ...SportBet\n      promotionBet {\n        payout\n        status\n        currency\n        payoutValue\n        promotion {\n          name\n        }\n      }\n      user {\n        id\n        name\n        preferenceHideBets\n      }\n    }\n    ... on SwishBet {\n      ...SwishBetFragment\n      user {\n        id\n        name\n        preferenceHideBets\n      }\n    }\n    ... on RacingBet {\n      ...RacingBet\n    }\n  }\n}\n\nfragment XMultiBet on SportsbookXMultiBet {\n  __typename\n  id\n  amount\n  active\n  currency\n  _betStatus: status\n  payoutMultiplier\n  cashoutMultiplier\n  cashoutDisabled\n  updatedAt\n  payout\n  createdAt\n  returnMultiplier\n  user {\n    id\n    name\n  }\n  promotionBet {\n    settleType\n    status\n    payout\n    currency\n    promotion {\n      name\n    }\n  }\n  adjustments {\n    id\n  }\n  outcomes {\n    __typename\n    id\n    updatedAt\n    ...SportBetOutcome_XMultiBet\n    ...RacingBetOutcone_XMultiBet\n    ...SwishBetOutcome_XMultiBetPrices\n  }\n}\n\nfragment SportBetOutcome_XMultiBet on SportsbookXMultiBetOutcome {\n  result {\n    _status: status\n  }\n  _market: market {\n    ... on SportMarket {\n      __typename\n      status\n      ...SportMarket\n    }\n  }\n  _fixture: fixture {\n    ... on SportFixture {\n      __typename\n      id\n      name\n      status\n      slug\n      provider\n      marketCount(status: [active, suspended])\n      extId\n      cashoutEnabled\n      data {\n        ...SportFixtureDataMatch\n        ...SportFixtureDataOutright\n        __typename\n      }\n      tournament {\n        ...TournamentTreeNested\n        cashoutEnabled\n        category {\n          sport {\n            cashoutEnabled\n            cashoutConfiguration {\n              baseLoad\n              cashoutEnabled\n              varianceSensitivity\n            }\n          }\n        }\n      }\n      eventStatus {\n        ...SportOutcomeFixtureEventStatus\n        ...EsportOutcomeFixtureEventStatus\n      }\n      ...SportFixtureLiveStreamExists\n    }\n  }\n  prices {\n    id\n    odds\n    outcome {\n      ... on SportMarketOutcome {\n        __typename\n        ...SportMarketOutcome\n        probabilities\n        voidFactor\n        payout\n      }\n    }\n  }\n}\n\nfragment SportMarket on SportMarket {\n  id\n  name\n  status\n  extId\n  specifiers\n  customBetAvailable\n  provider\n}\n\nfragment SportFixtureDataMatch on SportFixtureDataMatch {\n  startTime\n  competitors {\n    ...SportFixtureCompetitor\n  }\n  teams {\n    name\n    qualifier\n  }\n  tvChannels {\n    language\n    name\n    streamUrl\n  }\n  __typename\n}\n\nfragment SportFixtureCompetitor on SportFixtureCompetitor {\n  name\n  defaultName\n  extId\n  countryCode\n  abbreviation\n  iconPath\n}\n\nfragment SportFixtureDataOutright on SportFixtureDataOutright {\n  name\n  startTime\n  endTime\n  __typename\n}\n\nfragment TournamentTreeNested on SportTournament {\n  id\n  name\n  slug\n  category {\n    ...CategoryTreeNested\n    cashoutEnabled\n  }\n}\n\nfragment CategoryTreeNested on SportCategory {\n  id\n  name\n  slug\n  sport {\n    id\n    name\n    slug\n  }\n}\n\nfragment SportOutcomeFixtureEventStatus on SportFixtureEventStatusData {\n  homeScore\n  awayScore\n  matchStatus\n  clock {\n    matchTime\n    remainingTime\n  }\n  periodScores {\n    homeScore\n    awayScore\n    matchStatus\n  }\n  currentTeamServing\n  homeGameScore\n  awayGameScore\n  statistic {\n    yellowCards {\n      away\n      home\n    }\n    redCards {\n      away\n      home\n    }\n    corners {\n      home\n      away\n    }\n  }\n}\n\nfragment EsportOutcomeFixtureEventStatus on EsportFixtureEventStatus {\n  matchStatus\n  homeScore\n  awayScore\n  scoreboard {\n    homeGold\n    awayGold\n    homeGoals\n    awayGoals\n    homeKills\n    awayKills\n    gameTime\n    homeDestroyedTowers\n    awayDestroyedTurrets\n    currentRound\n    currentCtTeam\n    currentDefTeam\n    time\n    awayWonRounds\n    homeWonRounds\n    remainingGameTime\n  }\n  periodScores {\n    type\n    number\n    awayGoals\n    awayKills\n    awayScore\n    homeGoals\n    homeKills\n    homeScore\n    awayWonRounds\n    homeWonRounds\n    matchStatus\n  }\n  __typename\n}\n\nfragment SportFixtureLiveStreamExists on SportFixture {\n  id\n  betradarStream {\n    exists\n  }\n  imgArenaStream {\n    exists\n  }\n  abiosStream {\n    exists\n    stream {\n      startTime\n      id\n    }\n  }\n  geniussportsStream(deliveryType: hls) {\n    exists\n  }\n  statsPerformStream(getData: false) {\n    isAvailable\n    geoBlocked\n  }\n}\n\nfragment SportMarketOutcome on SportMarketOutcome {\n  __typename\n  id\n  active\n  odds\n  name\n  customBetAvailable\n}\n\nfragment RacingBetOutcone_XMultiBet on SportsbookXMultiBetOutcome {\n  runnerNumber\n  _marketType: marketType\n  _derivativeType: derivativeType\n  prices {\n    odds\n    _marketName: marketName\n    outcome {\n      ... on RacingOutcome {\n        __typename\n      }\n    }\n  }\n  result {\n    _status: status\n    resultedPrices\n    deadheatMultiplier\n  }\n  deductions {\n    key\n    name\n    percentage\n  }\n  _selectionSlots: selectionSlots {\n    runners {\n      id\n      finalPosition\n      runnerNumber\n      name\n      scratched\n      prices {\n        id\n        active\n        odds\n        market {\n          __typename\n          name\n          status\n        }\n      }\n    }\n    selections\n    type\n  }\n  _event: fixture {\n    ... on RacingEvent {\n      __typename\n      id\n      eventNumber\n      slug\n      startTime\n      status\n      stream {\n        url\n        exists\n        geoBlocked\n      }\n      runners {\n        scratched\n      }\n      meeting {\n        slug\n        racing {\n          slug\n          name\n        }\n        racingGroup {\n          slug\n          name\n        }\n        venue {\n          name\n          geoBlocked\n        }\n        category {\n          name\n          slug\n        }\n      }\n      topRunnerList(limit: 4) {\n        finalPosition\n        runnerNumber\n      }\n    }\n  }\n}\n\nfragment SwishBetOutcome_XMultiBetPrices on SportsbookXMultiBetOutcome {\n  prices {\n    lineType\n    id\n    odds\n    outcome {\n      ... on SwishMarketOutcome {\n        ...SwishMarketOutcomeFragment\n        market {\n          __typename\n          data {\n            atBat {\n              marketDurationStart\n              half\n              inning\n              pitcherName\n            }\n          }\n        }\n      }\n    }\n  }\n  providerBet {\n    status\n  }\n}\n\nfragment SwishMarketOutcomeFragment on SwishMarketOutcome {\n  __typename\n  id\n  line\n  over\n  under\n  push\n  gradeOver\n  gradeUnder\n  suspended\n  balanced\n  name\n  competitor {\n    id\n    name\n    stats {\n      name\n      dataConfirmed\n      played\n      starter\n    }\n  }\n  market {\n    id\n    game {\n      disabled\n      status\n      cashoutConfiguration {\n        baseLoad\n        cashoutEnabled\n        varianceSensitivity\n      }\n    }\n    inPlay\n    stat {\n      swishStatId\n      name\n      value\n      type\n    }\n    game {\n      id\n      fixture {\n        id\n        extId\n        name\n        slug\n        status\n        provider\n        swishGame {\n          swishSportId\n          status\n        }\n        eventStatus {\n          ...SportFixtureEventStatus\n          ...EsportFixtureEventStatus\n        }\n        data {\n          ... on SportFixtureDataMatch {\n            __typename\n            startTime\n            teams {\n              name\n              qualifier\n            }\n            competitors {\n              name\n              extId\n              countryCode\n              abbreviation\n            }\n          }\n          ... on SportFixtureDataOutright {\n            __typename\n            startTime\n            name\n          }\n        }\n        tournament {\n          id\n          slug\n          name\n          category {\n            id\n            slug\n            name\n            sport {\n              id\n              name\n              slug\n            }\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment SportFixtureEventStatus on SportFixtureEventStatusData {\n  __typename\n  homeScore\n  awayScore\n  matchStatus\n  clock {\n    matchTime\n    remainingTime\n  }\n  periodScores {\n    homeScore\n    awayScore\n    matchStatus\n  }\n  currentTeamServing\n  homeGameScore\n  awayGameScore\n  statistic {\n    yellowCards {\n      away\n      home\n    }\n    redCards {\n      away\n      home\n    }\n    corners {\n      home\n      away\n    }\n  }\n}\n\nfragment EsportFixtureEventStatus on EsportFixtureEventStatus {\n  matchStatus\n  homeScore\n  awayScore\n  scoreboard {\n    homeGold\n    awayGold\n    homeGoals\n    awayGoals\n    homeKills\n    awayKills\n    gameTime\n    homeDestroyedTowers\n    awayDestroyedTurrets\n    currentRound\n    currentCtTeam\n    currentDefTeam\n    time\n    awayWonRounds\n    homeWonRounds\n    remainingGameTime\n  }\n  periodScores {\n    type\n    number\n    awayGoals\n    awayKills\n    awayScore\n    homeGoals\n    homeKills\n    homeScore\n    awayWonRounds\n    homeWonRounds\n    matchStatus\n  }\n  __typename\n}\n\nfragment CasinoBet on CasinoBet {\n  id\n  active\n  payoutMultiplier\n  amountMultiplier\n  amount\n  payout\n  updatedAt\n  currency\n  game\n  user {\n    id\n    name\n  }\n}\n\nfragment EvolutionBet on EvolutionBet {\n  id\n  amount\n  currency\n  createdAt\n  payout\n  payoutMultiplier\n  user {\n    id\n    name\n  }\n  softswissGame: game {\n    id\n    name\n    edge\n  }\n}\n\nfragment MultiplayerCrashBet on MultiplayerCrashBet {\n  id\n  user {\n    id\n    name\n    preferenceHideBets\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n}\n\nfragment MultiplayerSlideBet on MultiplayerSlideBet {\n  id\n  user {\n    id\n    name\n    preferenceHideBets\n  }\n  payoutMultiplier\n  gameId\n  amount\n  payout\n  currency\n  slideResult: result\n  updatedAt\n  cashoutAt\n  btcAmount: amount(currency: btc)\n  active\n  createdAt\n}\n\nfragment SoftswissBet on SoftswissBet {\n  id\n  amount\n  currency\n  updatedAt\n  payout\n  payoutMultiplier\n  user {\n    id\n    name\n  }\n  softswissGame: game {\n    id\n    name\n    edge\n    extId\n    provider {\n      id\n      name\n    }\n  }\n}\n\nfragment ThirdPartyBet on ThirdPartyBet {\n  id\n  amount\n  currency\n  updatedAt\n  payout\n  payoutMultiplier\n  betReplay\n  user {\n    id\n    name\n  }\n  thirdPartyGame: game {\n    id\n    name\n    edge\n    extId\n    provider {\n      id\n      name\n    }\n  }\n}\n\nfragment SportBet on SportBet {\n  __typename\n  id\n  customBet\n  stakeShieldOfferOdds\n  amount\n  active\n  currency\n  status\n  payoutMultiplier\n  cashoutMultiplier\n  cashoutDisabled\n  updatedAt\n  payout\n  createdAt\n  potentialMultiplier\n  adjustments {\n    id\n    payoutMultiplier\n    updatedAt\n    createdAt\n  }\n  promotionBet {\n    settleType\n    status\n    payout\n    currency\n    promotion {\n      name\n    }\n  }\n  user {\n    id\n    name\n  }\n  bet {\n    iid\n  }\n  outcomes {\n    __typename\n    id\n    odds\n    totalOdds\n    status\n    outcome {\n      __typename\n      ...SportMarketOutcome\n      probabilities\n      voidFactor\n      payout\n    }\n    market {\n      ...SportMarket\n    }\n    fixture {\n      id\n      name\n      status\n      slug\n      provider\n      marketCount(status: [active, suspended])\n      extId\n      cashoutEnabled\n      data {\n        ...SportFixtureDataMatch\n        ...SportFixtureDataOutright\n        __typename\n      }\n      tournament {\n        ...TournamentTreeNested\n        cashoutEnabled\n        category {\n          sport {\n            cashoutEnabled\n            cashoutConfiguration {\n              baseLoad\n              cashoutEnabled\n              varianceSensitivity\n            }\n          }\n        }\n      }\n      eventStatus {\n        ...SportOutcomeFixtureEventStatus\n        ...EsportOutcomeFixtureEventStatus\n      }\n      ...SportFixtureLiveStreamExists\n    }\n  }\n}\n\nfragment SwishBetFragment on SwishBet {\n  __typename\n  active\n  amount\n  cashoutDisabled\n  potentialMultiplier\n  createdAt\n  currency\n  customBet\n  id\n  odds\n  payout\n  payoutMultiplier\n  adjustments {\n    id\n    payoutMultiplier\n    updatedAt\n    createdAt\n  }\n  promotionBet {\n    settleType\n    status\n    payout\n    currency\n    promotion {\n      name\n    }\n  }\n  updatedAt\n  status\n  user {\n    id\n    name\n    preferenceHideBets\n  }\n  outcomes {\n    __typename\n    id\n    odds\n    lineType\n    cancel\n    outcome {\n      ...SwishMarketOutcomeFragment\n      market {\n        data {\n          atBat {\n            marketDurationStart\n            half\n            inning\n            pitcherName\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment RacingBet on RacingBet {\n  __typename\n  id\n  active\n  amount\n  createdAt\n  updatedAt\n  currency\n  resultType\n  user {\n    id\n    name\n  }\n  outcomes {\n    id\n    updatedAt\n    prices {\n      odds\n      marketName\n    }\n    result {\n      resultedPrices\n      status\n      deadheatMultiplier\n    }\n    deductions {\n      key\n      name\n      percentage\n    }\n    type\n    derivativeType\n    event {\n      id\n      eventNumber\n      slug\n      startTime\n      status\n      stream {\n        url\n        exists\n        geoBlocked\n      }\n      runners {\n        scratched\n      }\n      meeting {\n        slug\n        racing {\n          slug\n          name\n        }\n        racingGroup {\n          slug\n          name\n        }\n        venue {\n          name\n          geoBlocked\n        }\n        category {\n          name\n          slug\n        }\n      }\n      topRunnerList(limit: 4) {\n        finalPosition\n        runnerNumber\n      }\n    }\n    selectionSlots {\n      runners {\n        ...RunnerOutcomeButton_RacingRunner\n      }\n      selections\n      type\n    }\n  }\n  payout\n  payoutMultiplier\n  adjustments {\n    id\n    payoutMultiplier\n    updatedAt\n    createdAt\n  }\n  promotionBet {\n    settleType\n    status\n    payout\n    currency\n    promotion {\n      name\n    }\n  }\n  betStatus: status\n  betPotentialMultiplier: potentialMultiplier\n}\n\nfragment RunnerOutcomeButton_RacingRunner on RacingRunner {\n  id\n  name\n  scratched\n  runnerNumber\n  barrierPosition\n  hcpDraw\n  attributes {\n    weight\n  }\n  careerStats {\n    last6Runs\n  }\n  jockey {\n    name\n  }\n  trainer {\n    name\n  }\n  prices {\n    id\n    active\n    odds\n    market {\n      name\n      status\n    }\n    ...RunnerOutcomeButton_RacingOutcome\n  }\n}\n\nfragment RunnerOutcomeButton_RacingOutcome on RacingOutcome {\n  id\n  active\n  odds\n  market {\n    name\n    status\n  }\n}",
            "variables": {
                "betId": betId  // Dynamic variable here
            }
        })
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    return await response.json();
}
	
    // Implement your actual API call here


function stop(){
	stoponwin = false;
	running = false;
	run_clicked = false;
	simrunning = false;
	cashout_done = false;
	btnStart.disabled = false;
	botStopOnWinButton.disabled = false;
	fastmode = false;
	mirror = document.getElementById("mirrors").value;
	document.getElementById("result").innerHTML = ""
	for (var i=0; i<timeouts.length; i++) {
	  clearTimeout(timeouts[i]);
	}
	timeouts = [];
	//dobet = function(){}
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
			row.appendChild(tdNonce);
			row.appendChild(tdamount);
			row.appendChild(tdhigh);
			row.appendChild(tdTargetChance);
			row.appendChild(tdTargetNumber);
			row.appendChild(tdRollNumber);
			row.appendChild(tdProfit);
			row.appendChild(tdPayout);
			row.appendChild(tdRollChance);
			row.appendChild(tdBetID);		
					
			

				
			
			
			
			if(win){
				//row.style.color = "#91F190";
			} else {
				//row.style.background = "#FFC0CB";
			}
			
			if(win){
				// Add a class to the row
				row.classList.add("win-row");
				// Or set style on all cells
				var cells = row.getElementsByTagName("td");
				for(var i = 0; i < cells.length; i++) {
					cells[i].style.color = "#058514";
				}
			} else {
				// For losses, you might want a different color
				//row.classList.add("loss-row");
				// Or set red color for losses
				//var cells = row.getElementsByTagName("td");
				//for(var i = 0; i < cells.length; i++) {
					//cells[i].style.color = "#F19091";
				//}
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
			
			const profitElement = document.getElementById('botProfit');
			  //profitElement.textContent = value;
			  
			  // Add negative class if value is negative
			  if (profit_total < 0) {
				profitElement.classList.add('negative');
			  } else {
				profitElement.classList.remove('negative');
			  }
			  
				const streakElement = document.getElementById('botCurrentStreak');
			  //streakElement.textContent = value;
			  
			  // Check if it's negative or loss strea
			  if (currentstreak < 0) {
				streakElement.classList.add('negative');
			  } else {
				streakElement.classList.remove('negative');
			  }
			
			
			var balan = document.getElementById("botBalance");
			balan.innerHTML = balance_sim.toFixed(8);
			//document.getElementById("multi").innerHTML = toFixedNo(json.limboBet.state.result, 2);
			document.getElementById("botBalance").innerHTML = balance.toFixed(8);
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
	//current_balance = 0;
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
	//started_bal = balance;

	profit = profit_total;
	currentprofit = current_profit;
	bets = betcount;
	document.getElementById("botPercentProfit").innerHTML = (profit_total / started_bal * 100).toFixed(2);
	document.getElementById("botPercentWagered").innerHTML = (wagered / started_bal).toFixed(2);
	
	
	resetChart();
	document.getElementById("botBalance").innerHTML = balance.toFixed(8);
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
        js.global:sleep(n)
    end`)()
	fengari.load(`function vault(n)
        js.global:vault(n)
    end`)()
	fengari.load(`function unvault(a, pw)
        return js.global:unvault(a, pw)
    end`)()
	fengari.load(`function username()
        return js.global:username()
    end`)()
	fengari.load(`function makebet(n, y, id)
        return js.global:makebet(n, y, id)
    end`)()
	fengari.load(`function cashout()
        return js.global:cashout()
    end`)()
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
	//tiles = JSON.parse(fengari.load(`return "[" .. table.concat(tiles or {1}, ",") .. "]"`));

    // Direct values
    chips = fengari.load(`return chips`)();
    if (chips !== undefined) chips = JSON.parse(chips);

    mines = fengari.load(`return mines`)();
    rows = fengari.load(`return rows`)();
    lines = fengari.load(`return lines`)();
    segments = fengari.load(`return segments`)();
    rolls = fengari.load(`return rolls`)();
    startcard = fengari.load(`return startcard`)();

	target1 = fengari.load(`return target1`)();
	target2 = fengari.load(`return target2`)();
	target3 = fengari.load(`return target3`)();
	target4 = fengari.load(`return target4`)();
	condition = fengari.load(`return condition`)();
	//action = getLua("action");
	steps = fengari.load(`return steps`)();
	pick = fengari.load(`return pick`)();

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
		fastmode = document.getElementById('speedChange').checked;
		mirror = document.getElementById("mirrors").value;
		run_clicked = true;
		sleeptime = 0;
		btnStart.disabled = true;
		dobet = function(){};
		progress = function(){};
		document.getElementById("result").innerHTML = ""
		currency = document.getElementById("botMenuCoin").value;
		
		if (document.getElementById("botMenuMode").value === "lua") {
			game = undefined;
			fengari.load('game=undefined')();

			const getEl = id => document.getElementById(id);
			const getLua = expr => fengari.load(`return ${expr}`)();
			const setFastMode = () => getEl('speedChange').checked;

			fastmode = setFastMode();
			fengari.load(`fastmode = ${fastmode}`)();
			fengari.load(`currency = nil`)();
			loadLua();

			let code = htmlEditor.getValue()
				.replace(/!=/g, "~=")
				.replace(/!/g, "not ")
				.replace(/(\w+\s*)\+=\s*(\w+)/g, '$1=$1+$2 ')
				.replace(/(\w+\s*)-\=\s*(\w+)/g, '$1=$1-$2 ')
				.replace(/(\w+\s*)\*=\s*(\w+)/g, '$1=$1*$2 ')
				.replace(/(\w+\s*)\/=\s*(\w+)/g, '$1=$1/$2 ');

			fengari.load(code)();
			currency = getLua("currency");
			
			if (currency === undefined){
				currency = document.getElementById("botMenuCoin").value;
			}
			
			// Direct Lua variable retrieval
			game = getLua("game");
			fastmode = getLua("fastmode");
			nextbet = getLua("nextbet");
			chance = getLua("chance");
			bethigh = getLua("bethigh");
			target = getLua("target");
			pumps = getLua("pumps");
			difficulty = getLua("difficulty");
			tie = getLua("tie");
			player = getLua("player");
			banker = getLua("banker");
			chips = getLua("chips");
			mines = getLua("mines");
			rows = getLua("rows");
			lines = getLua("lines");
			segments = getLua("segments");
			rolls = getLua("rolls");
			startcard = getLua("startcard");
			tokenapi = getLua("tokenapi");
			target1 = getLua("target1");
			target2 = getLua("target2");
			target3 = getLua("target3");
			target4 = getLua("target4");
			condition = getLua("condition");
			action = getLua("action");
			steps = getLua("steps");
			pick = getLua("pick");
			
			let eggs = JSON.parse(getLua('"[" .. table.concat(eggs or {1}, ",") .. "]"'));
			let fields = JSON.parse(getLua('"[" .. table.concat(fields or {1}, ",") .. "]"'));
			let numbers = JSON.parse(getLua('"[" .. table.concat(numbers or {1}, ",") .. "]"'));
			let guesses = getLua('table.concat(guesses or {1}, ",")').split(',');
			let tiles = JSON.parse(getLua('"[" .. table.concat(tiles or {1}, ",") .. "]"'));
			
			// Fallbacks
			if (!tokenapi) tokenapi = getEl("tokenkey").value;
			if (fastmode === undefined || fastmode === null) fastmode = setFastMode();
			if (!chips && chips !== 0) chips = [];

			localStorage.setItem("luacode", htmlEditor.getValue());

			//userBalances();
			userBalances(true);
			//started_bal = balance;

			if (!game) game = getEl("gameselect").value;

			const betFunctions = {
				bars: () => barsBet(nextbet, difficulty, tiles),
				hilo: () => hiloBet(nextbet, startcard),
				bluesamurai: () => samuraiBet(nextbet),
				darts: () => dartsBet(nextbet, difficulty),
				tomeoflife: () => tomeBet(nextbet, lines),
				scarabspin: () => scarabBet(nextbet, lines),
				diamonds: () => diamondBet(nextbet),
				cases: () => caseBet(nextbet, difficulty),
				rps: () => rockpaperBet(nextbet, guesses),
				flip: () => flipBet(nextbet, guesses),
				snakes: () => snakesBet(nextbet, difficulty, rolls),
				pump: () => pumpBet(nextbet, pumps, difficulty),
				baccarat: () => baccaratbet(tie, player, banker),
				dragontower: () => dragontowerBet(nextbet, difficulty, eggs),
				roulette: () => roulettebet(chips),
				wheel: () => wheelbet(nextbet, segments, risk),
				plinko: () => plinkobet(nextbet, rows, risk),
				mines: () => minebet(nextbet, fields, mines),
				keno: () => kenobet(nextbet, numbers, risk),
				dice: () => DiceBet(nextbet, chance, bethigh),
				limbo: () => LimboBet(nextbet, target),
				packs: () => packsBet(nextbet),
				blackjack: () => blackjackBet(nextbet),
				chicken: () => chickenBet(nextbet, difficulty, steps),
				tarot: () => tarotBet(nextbet, difficulty),
				drill: () => drillBet(nextbet, target, pick),
				primedice: () => PrimeBet(nextbet, target1, target2, target3, target4, condition)
			};

			const runBet = betFunctions[game];
			if (runBet) {
				if (fastmode) {
					if(game != "blackjack" && game != "hilo" && game != "bluesamurai"){
					setTimeout(runBet, 5);
					setTimeout(runBet, 50);
					} else {
						runBet();
					}
				} else {
					runBet();
				}
			}
			//userBalances();
			drawChart();
		} else if (document.getElementById("botMenuMode").value === "js") {
		game = document.getElementById("gameselect").value;

		setTimeout(htmlEditor2.getValue() + `
		
		localStorage.setItem("jscode", htmlEditor2.getValue());
;
			//userBalances();
			userBalances(true);
			//started_bal = balance;

			if (game === undefined) game = document.getElementById("gameselect").value;

			runBet = (fn, args = []) => {
				if (fastmode) {
					if(game != "blackjack" && game != "hilo" && game != "bluesamurai"){
					setTimeout(() => fn(...args), 5);
					setTimeout(() => fn(...args), 50);
					} else {
						fn(...args);
					}
				} else {
					fn(...args);
				}
			};

			gameFunctions = {
				bars: 		 () => runBet(barsBet, [nextbet, difficulty, tiles]),
				hilo:        () => runBet(hiloBet, [nextbet, startcard]),
				bluesamurai: () => runBet(samuraiBet, [nextbet]),
				darts:       () => runBet(dartsBet, [nextbet, difficulty]),
				tomeoflife:  () => runBet(tomeBet, [nextbet, lines]),
				scarabspin:  () => runBet(scarabBet, [nextbet, lines]),
				diamonds:    () => runBet(diamondBet, [nextbet]),
				cases:       () => runBet(caseBet, [nextbet, difficulty]),
				videopoker:  () => runBet(videopokerBet, [nextbet]),
				rps:         () => runBet(rockpaperBet, [nextbet, guesses]),
				flip:        () => runBet(flipBet, [nextbet, guesses]),
				snakes:      () => runBet(snakesBet, [nextbet, difficulty, rolls]),
				pump:        () => runBet(pumpBet, [nextbet, pumps, difficulty]),
				baccarat:    () => runBet(baccaratbet, [tie, player, banker]),
				dragontower: () => runBet(dragontowerBet, [nextbet, difficulty, eggs]),
				roulette:    () => runBet(roulettebet, [chips]),
				wheel:       () => runBet(wheelbet, [nextbet, segments, risk]),
				plinko:      () => runBet(plinkobet, [nextbet, rows, risk]),
				mines:       () => runBet(minebet, [nextbet, fields, mines]),
				keno:        () => runBet(kenobet, [nextbet, numbers, risk]),
				dice:        () => runBet(DiceBet, [nextbet, chance, bethigh]),
				limbo:       () => runBet(LimboBet, [nextbet, target]),
				packs:       () => runBet(packsBet, [nextbet]),
				blackjack:	 () => runBet(blackjackBet, [nextbet]),
				chicken: 	 () => runBet(chickenBet, [nextbet, difficulty, steps]),
				tarot: 	 	 () => runBet(tarotBet, [nextbet, difficulty]),
				drill: 	 	 () => runBet(drillBet, [nextbet, target, pick]),
				primedice:   () => runBet(PrimeBet, [nextbet, target1, target2, target3, target4, condition])
			};

			if (game in gameFunctions) gameFunctions[game]();
			drawChart();
			`, 0);	
	}
}
var btnStart = document.getElementById("botStartButton");

btnStart.addEventListener('click', function() {  if(document.getElementById("tokenkey").value.length < 96){return;}; start();}, false);

var btnStop = document.getElementById("botStopButton");
btnStop.addEventListener('click', function() {  btnStart.disabled = false; stop(); }, false);



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
				/*if(obj.payload.data.hasOwnProperty("slide")){ 
				if(obj.payload.data.slide.event.nextRoundIn < 3000){
							cashout()
				}
				}
				*/
				if(game === "crash" || game === "slide"){
				const gameType = Object.keys(obj.payload)[0] === "data" ? Object.keys(obj.payload.data)[0] : Object.keys(obj.payload)[0]
				bet = Object.keys(obj.payload)[0] === "data" ? obj.payload.data : obj.payload
				
				if(running){
					progress();
				}
				}
				if(obj.payload.data.hasOwnProperty("crash") && game == "crash" ){
					//previousbet = nextbet;
					
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
						
						
						lastBet = {
							id: bet.crash.event.id,
							amount: bet.crash.event.amount,
							payoutMultiplier: bet.crash.event.payoutMultiplier,
							payout: bet.crash.event.payout,
							win: bet.crash.event.payoutMultiplier >= 1,
							Roll: lastBet.Roll
						};
						
						//manualcash = false;
						target = parseFloat(target.toFixed(2))
						cashedoutauto = true;
						//bet_has_been_made = false;
						color = "#05f711";
						bet_found = true;
						win = true;
						
						
						endgame = true;
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
					
					
					
						row.style.color = "#91F190";
					
					
						var tdbets = document.createElement("td");
						var tdamount = document.createElement("td");
						var tdhigh = document.createElement("td");
						var tdTargetChance = document.createElement("td");
						var tdRollChance= document.createElement("td");
						var tdProfit = document.createElement("td");
						var tdPayout = document.createElement("td");
						var tdTargetNumber = document.createElement("td");
						//var tdRollNumber = document.createElement("td");
						var tdRollNumber = document.createElement("td");
						tdRollNumber.innerHTML = "";
						tdRollNumber.id = 'roll_' + Math.random().toString(36).substring(2, 15);
						
						var tdNonce = document.createElement("td");
						var tdBetID = document.createElement("td");
						
						window.lastRollCellId = tdRollNumber.id;
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = nextbet.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = target.toFixed(2) + ""
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + target.toFixed(2)
						//lastBet.targetNumber = obj.payload.data.crash.event.cashoutAt;
						//tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = game;
						tdBetID.innerHTML = `<span class="clickable-bet-id" data-betid="${bet.crash.event.id}" style="cursor: pointer; color: #007bff; text-decoration: underline;">View</span>`;
						tdPayout.innerHTML = parseFloat(nextbet * target).toFixed(8);
						


						

						
						row.appendChild(tdbets);
						row.appendChild(tdNonce);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdRollChance);
						row.appendChild(tdBetID);
						
						

						// Store the ID somewhere accessible
						

						// Add a class or data attribute to identify it
						//row.classList.add('latest-bet');
						
						var table = document.getElementById("botHistory");		

						if(win){
							// Add a class to the row
							row.classList.add("win-row");
							// Or set style on all cells
							var cells = row.getElementsByTagName("td");
							for(var i = 0; i < cells.length; i++) {
								cells[i].style.color = "#058514";
							}
						} else {
							// For losses, you might want a different color
							//row.classList.add("loss-row");
							// Or set red color for losses
							//var cells = row.getElementsByTagName("td");
							//for(var i = 0; i < cells.length; i++) {
								//cells[i].style.color = "#F19091";
							//}
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

						current_balance += current_profit;
						balance = current_balance;
						profit = profit_total;
						previousbet = lastBet.amount;
						currentprofit = current_profit;
						
						
						
						updateChart();
						
						const profitElement = document.getElementById('botProfit');
						  //profitElement.textContent = value;
						  
						  // Add negative class if value is negative
						  if (profit_total < 0) {
							profitElement.classList.add('negative');
						  } else {
							profitElement.classList.remove('negative');
						  }
						  
							const streakElement = document.getElementById('botCurrentStreak');
						  //streakElement.textContent = value;
						  
						  // Check if it's negative or loss strea
						  if (currentstreak < 0) {
							streakElement.classList.add('negative');
						  } else {
							streakElement.classList.remove('negative');
						  }
			
						
						document.getElementById("botBalance").innerHTML = balance.toFixed(8);
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
						
						
						lastBet.target = target;

						/*if(running){
							var value = document.getElementById("botMenuMode").value;
							if(value == "lua"){
								sendLua();
							} else if(value == "js"){
								dobet();
						}}*/
							
						
						
					}
					if(obj.payload.data.crash.event.result == "busted"){
						
						lastBet = {
							id: bet.crash.event.id,
							amount: bet.crash.event.amount,
							payoutMultiplier: bet.crash.event.payoutMultiplier,
							payout: bet.crash.event.payout,
							win: bet.crash.event.payoutMultiplier >= 1,
							Roll: lastBet.Roll
						};
						
						//manualcash = false;
						target = parseFloat(target.toFixed(2))
						color = "#f72a42"
						current_profit = -parseFloat(nextbet);
						profit_total += -parseFloat(nextbet);
						wagered += parseFloat(nextbet);
						losses++;
						losestreak++
						winstreak = 0;
						
						win = false;
						
						
						endgame = false;
						betcount++;
						bets = betcount;
						
						var row = document.createElement("tr");
					
						
						row.style.color = "#FFC0CB";
			
						
						var tdbets = document.createElement("td");
						var tdamount = document.createElement("td");
						var tdhigh = document.createElement("td");
						var tdTargetChance = document.createElement("td");
						var tdRollChance= document.createElement("td");
						var tdProfit = document.createElement("td");
						var tdPayout = document.createElement("td");
						var tdTargetNumber = document.createElement("td");
						//var tdRollNumber = document.createElement("td");
						var tdRollNumber = document.createElement("td");
						tdRollNumber.innerHTML = "";
						tdRollNumber.id = 'roll_' + Math.random().toString(36).substring(2, 15);
						var tdNonce = document.createElement("td");
						var tdBetID = document.createElement("td");
						
						window.lastRollCellId = tdRollNumber.id;
						
						tdbets.innerHTML = betcount;
						tdamount.innerHTML = nextbet.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = 0
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + target.toFixed(2)
						lastBet.targetNumber = target;
						tdRollNumber.innerHTML = ""
						tdNonce.innerHTML = game;
						tdBetID.innerHTML = `<span class="clickable-bet-id" data-betid="${bet.crash.event.id}" style="cursor: pointer; color: #007bff; text-decoration: underline;">View</span>`;
						tdPayout.innerHTML = ""
						
						
						
						row.appendChild(tdbets);
						row.appendChild(tdNonce);
						row.appendChild(tdamount);
						row.appendChild(tdhigh);
						row.appendChild(tdTargetChance);
						row.appendChild(tdTargetNumber);
						row.appendChild(tdRollNumber);
						row.appendChild(tdProfit);
						row.appendChild(tdPayout);
						row.appendChild(tdRollChance);
						row.appendChild(tdBetID);
						
						var table = document.getElementById("botHistory");	
						if(win){
							// Add a class to the row
							row.classList.add("win-row");
							// Or set style on all cells
							var cells = row.getElementsByTagName("td");
							for(var i = 0; i < cells.length; i++) {
								cells[i].style.color = "#058514";
							}
						} else {
							// For losses, you might want a different color
							//row.classList.add("loss-row");
							// Or set red color for losses
							//var cells = row.getElementsByTagName("td");
							//for(var i = 0; i < cells.length; i++) {
								//cells[i].style.color = "#F19091";
							//}
						}
						
						table.prepend(row);
						if (document.getElementById(window.lastRollCellId)) {
								document.getElementById(window.lastRollCellId).innerHTML = lastBet.Roll.toFixed(4);
								window.lastRollCellId = "null"
						}
		
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

						current_balance += current_profit;
						balance = current_balance;
						profit = profit_total;
						previousbet = lastBet.amount;
						currentprofit = current_profit;
						
						
						
						updateChart();
						
						const profitElement = document.getElementById('botProfit');
					  //profitElement.textContent = value;
					  
					  // Add negative class if value is negative
					  if (profit_total < 0) {
						profitElement.classList.add('negative');
					  } else {
						profitElement.classList.remove('negative');
					  }
					  
						const streakElement = document.getElementById('botCurrentStreak');
					  //streakElement.textContent = value;
					  
					  // Check if it's negative or loss strea
					  if (currentstreak < 0) {
						streakElement.classList.add('negative');
					  } else {
						streakElement.classList.remove('negative');
					  }
			
						
						document.getElementById("botBalance").innerHTML = balance.toFixed(8);
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
						
						
						lastBet.target = target;
						
						if(running){
								var value = document.getElementById("botMenuMode").value;
								if(value == "lua"){
									sendLua();
								} else if(value == "js"){
									dobet();
								}
								if(game != "crash" && game != "slide"){
									cashout_done = true;
									 const gameHandlers = {
										hilo: () => {
											if (cashout_done) {
												cashout_done = false;
												hiloBet(nextbet, startcard);
											} else {
												const lastCard = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
												
												if ([2, 4, 5, 7].includes(hiloguess)) {
													const guesses = {
														2: 'equal',
														7: 'skip',
														5: {
															A: 'higher',
															K: 'equal',
															Q: 'higherEqual',
															J: 'higherEqual',
															default: 'higherEqual'
														},
														4: {
															A: 'equal',
															K: 'lower',
															Q: 'lowerEqual',
															J: 'lowerEqual',
															default: 'lowerEqual'
														}
													};
													
													let guessed;
													if (hiloguess === 5 || hiloguess === 4) {
														guessed = guesses[hiloguess][lastCard] || guesses[hiloguess].default;
													} else {
														guessed = guesses[hiloguess];
													}
													
													hiloNext(guessed);
												} else if (hiloguess === 3) {
													hiloCash();
												}
											}
										},
										blackjack: () => {
											if (cashout_done) {
												cashout_done = false;
												blackjackBet(nextbet);
											} else {
												blackjackNext(action);
											}
										},
										bars: () => barsBet(nextbet, difficulty, tiles),
										tomeoflife: () => tomeBet(nextbet, lines),
										scarabspin: () => scarabBet(nextbet, lines),
										bluesamurai: () => samuraiBet(nextbet),
										diamonds: () => diamondBet(nextbet),
										cases: () => caseBet(nextbet, difficulty),
										videopoker: () => videopokerBet(nextbet),
										rps: () => rockpaperBet(nextbet, guesses),
										flip: () => flipBet(nextbet, guesses),
										snakes: () => snakesBet(nextbet, difficulty, rolls),
										pump: () => pumpBet(nextbet, pumps, difficulty),
										baccarat: () => baccaratbet(tie, player, banker),
										dragontower: () => dragontowerBet(nextbet, difficulty, eggs),
										roulette: () => roulettebet(chips),
										wheel: () => wheelbet(nextbet, segments, risk),
										plinko: () => plinkobet(nextbet, rows, risk),
										mines: () => minebet(nextbet, fields, mines),
										keno: () => kenobet(nextbet, numbers, risk),
										dice: () => DiceBet(nextbet, chance, bethigh),
										limbo: () => LimboBet(nextbet, target),
										darts: () => dartsBet(nextbet, difficulty),
										packs: () => packsBet(nextbet), 
										chicken: () => chickenBet(nextbet, difficulty, steps),
										tarot: () => tarotBet(nextbet, difficulty),
										drill: () => drillBet(nextbet, target, pick),
										primedice: () => PrimeBet(nextbet, target1, target2, target3, target4, condition)
									};

									if (gameHandlers[game]) {
										gameHandlers[game]();
									}
									}
								
								}

				
					}
					if(obj.payload.data.crash.event.status == "crash"){
							
							lastBet.Roll = obj.payload.data.crash.event.multiplier
							
							crash_bet_placed = false;
							slide_bet_placed = false;
							make_slide_bet = false;
							finished_round = true
							//manualcash = false;
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
							row.style.color = "#e8e9eb";
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
							//var tdRollNumber = document.createElement("td");
							//tdRollNumber.innerHTML = "";
							//tdRollNumber.id = 'roll_' + Math.random().toString(36).substring(2, 15);
							var tdNonce = document.createElement("td");
							var tdBetID = document.createElement("td");
							
							
							
							tdbets.innerHTML = ""
							tdamount.innerHTML = "CrashAt"
							
							var tdcheck = document.createElement("input");
							tdcheck.type = "checkbox";
							tdcheck.name = "checked";
							tdcheck.checked = "";
							tdcheck.id = "checked";
							
							tdhigh.appendChild(tdcheck);
							tdTargetChance.innerHTML = lastBet.Roll.toFixed(4) + "";
							tdRollChance.innerHTML = ""
							tdProfit.innerHTML = ""
							tdTargetNumber.innerHTML = ""
							//lastBet.targetNumber = target_multi;
							tdRollNumber.innerHTML = lastBet.Roll.toFixed(4);
							tdNonce.innerHTML = game;
							tdBetID.innerHTML = "";
							tdPayout.innerHTML = "";
							
							
							row.appendChild(tdbets);
							row.appendChild(tdNonce);
							row.appendChild(tdamount);
							row.appendChild(tdhigh);
							row.appendChild(tdTargetChance);
							row.appendChild(tdTargetNumber);
							row.appendChild(tdRollNumber);
							row.appendChild(tdProfit);
							row.appendChild(tdPayout);
							row.appendChild(tdRollChance);
							row.appendChild(tdBetID);
							
					
							
							
							var table = document.getElementById("botHistory");	
							
							if(!running){
								table.prepend(row);
				
								if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
								{
									table.deleteRow(table.rows.length - 1);
								}
							}
	
							if(endgame){
								endgame = null;
								if(running){
								var value = document.getElementById("botMenuMode").value;
								if(value == "lua"){
									sendLua();
								} else if(value == "js"){
									dobet();
								}
								if(game != "crash" && game != "slide"){
									cashout_done = true;
									 const gameHandlers = {
										hilo: () => {
											if (cashout_done) {
												cashout_done = false;
												hiloBet(nextbet, startcard);
											} else {
												const lastCard = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
												
												if ([2, 4, 5, 7].includes(hiloguess)) {
													const guesses = {
														2: 'equal',
														7: 'skip',
														5: {
															A: 'higher',
															K: 'equal',
															Q: 'higherEqual',
															J: 'higherEqual',
															default: 'higherEqual'
														},
														4: {
															A: 'equal',
															K: 'lower',
															Q: 'lowerEqual',
															J: 'lowerEqual',
															default: 'lowerEqual'
														}
													};
													
													let guessed;
													if (hiloguess === 5 || hiloguess === 4) {
														guessed = guesses[hiloguess][lastCard] || guesses[hiloguess].default;
													} else {
														guessed = guesses[hiloguess];
													}
													
													hiloNext(guessed);
												} else if (hiloguess === 3) {
													hiloCash();
												}
											}
										},
										blackjack: () => {
											if (cashout_done) {
												cashout_done = false;
												blackjackBet(nextbet);
											} else {
												blackjackNext(action);
											}
										},
										bars: () => barsBet(nextbet, difficulty, tiles),
										tomeoflife: () => tomeBet(nextbet, lines),
										scarabspin: () => scarabBet(nextbet, lines),
										bluesamurai: () => samuraiBet(nextbet),
										diamonds: () => diamondBet(nextbet),
										cases: () => caseBet(nextbet, difficulty),
										videopoker: () => videopokerBet(nextbet),
										rps: () => rockpaperBet(nextbet, guesses),
										flip: () => flipBet(nextbet, guesses),
										snakes: () => snakesBet(nextbet, difficulty, rolls),
										pump: () => pumpBet(nextbet, pumps, difficulty),
										baccarat: () => baccaratbet(tie, player, banker),
										dragontower: () => dragontowerBet(nextbet, difficulty, eggs),
										roulette: () => roulettebet(chips),
										wheel: () => wheelbet(nextbet, segments, risk),
										plinko: () => plinkobet(nextbet, rows, risk),
										mines: () => minebet(nextbet, fields, mines),
										keno: () => kenobet(nextbet, numbers, risk),
										dice: () => DiceBet(nextbet, chance, bethigh),
										limbo: () => LimboBet(nextbet, target),
										darts: () => dartsBet(nextbet, difficulty),
										packs: () => packsBet(nextbet), 
										chicken: () => chickenBet(nextbet, difficulty, steps),
										tarot: () => tarotBet(nextbet, difficulty),
										drill: () => drillBet(nextbet, target, pick),
										primedice: () => PrimeBet(nextbet, target1, target2, target3, target4, condition)
									};

									if (gameHandlers[game]) {
										gameHandlers[game]();
									}
									}
								
								}
								
								if (document.getElementById(window.lastRollCellId)) {
									document.getElementById(window.lastRollCellId).innerHTML = lastBet.Roll.toFixed(4);
									window.lastRollCellId = "null";
								}
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
					//console.log(obj.payload.data.slide.event.status)
					
					if(obj.payload.data.slide.event.status == "starting"){
					//currentcount = true;
				if(currentcount){
					currentcount = false;
				if(running){
				var value = document.getElementById("botMenuMode").value;
				if(value == "lua"){
					sendLua();
				} else if(value == "js"){
					dobet();
				}
				if(game != "crash" && game != "slide"){
					cashout_done = true;
					 const gameHandlers = {
						hilo: () => {
							if (cashout_done) {
								cashout_done = false;
								hiloBet(nextbet, startcard);
							} else {
								const lastCard = currentBet.state.rounds.at(-1)?.card.rank || currentBet.state.startCard.rank;
								
								if ([2, 4, 5, 7].includes(hiloguess)) {
									const guesses = {
										2: 'equal',
										7: 'skip',
										5: {
											A: 'higher',
											K: 'equal',
											Q: 'higherEqual',
											J: 'higherEqual',
											default: 'higherEqual'
										},
										4: {
											A: 'equal',
											K: 'lower',
											Q: 'lowerEqual',
											J: 'lowerEqual',
											default: 'lowerEqual'
										}
									};
									
									let guessed;
									if (hiloguess === 5 || hiloguess === 4) {
										guessed = guesses[hiloguess][lastCard] || guesses[hiloguess].default;
									} else {
										guessed = guesses[hiloguess];
									}
									
									hiloNext(guessed);
								} else if (hiloguess === 3) {
									hiloCash();
								}
							}
						},
						blackjack: () => {
							if (cashout_done) {
								cashout_done = false;
								blackjackBet(nextbet);
							} else {
								blackjackNext(action);
							}
						},
						bars: () => barsBet(nextbet, difficulty, tiles),
						tomeoflife: () => tomeBet(nextbet, lines),
						scarabspin: () => scarabBet(nextbet, lines),
						bluesamurai: () => samuraiBet(nextbet),
						diamonds: () => diamondBet(nextbet),
						cases: () => caseBet(nextbet, difficulty),
						videopoker: () => videopokerBet(nextbet),
						rps: () => rockpaperBet(nextbet, guesses),
						flip: () => flipBet(nextbet, guesses),
						snakes: () => snakesBet(nextbet, difficulty, rolls),
						pump: () => pumpBet(nextbet, pumps, difficulty),
						baccarat: () => baccaratbet(tie, player, banker),
						dragontower: () => dragontowerBet(nextbet, difficulty, eggs),
						roulette: () => roulettebet(chips),
						wheel: () => wheelbet(nextbet, segments, risk),
						plinko: () => plinkobet(nextbet, rows, risk),
						mines: () => minebet(nextbet, fields, mines),
						keno: () => kenobet(nextbet, numbers, risk),
						dice: () => DiceBet(nextbet, chance, bethigh),
						limbo: () => LimboBet(nextbet, target),
						darts: () => dartsBet(nextbet, difficulty),
						packs: () => packsBet(nextbet), 
						chicken: () => chickenBet(nextbet, difficulty, steps),
						tarot: () => tarotBet(nextbet, difficulty),
						drill: () => drillBet(nextbet, target, pick),
						primedice: () => PrimeBet(nextbet, target1, target2, target3, target4, condition)
					};

					if (gameHandlers[game]) {
						gameHandlers[game]();
					}
					}
				
				}
			}
					
					}
					
					if(obj.payload.data.slide.event.status == "result" ){
							currentcount = true;
							slide_bet_placed = false
							crash_bet_placed = false
							make_slide_bet = false;
							betlist = []
							previousbet = lastBet.amount;
							
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
							row.style.color = "#e8e9eb";
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
							tdcheck.checked = "";
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
							row.appendChild(tdNonce);
							row.appendChild(tdamount);
							row.appendChild(tdhigh);
							row.appendChild(tdTargetChance);
							row.appendChild(tdTargetNumber);
							row.appendChild(tdRollNumber);
							row.appendChild(tdProfit);
							row.appendChild(tdPayout);
							row.appendChild(tdRollChance);
							row.appendChild(tdBetID);
							
							var table = document.getElementById("botHistory");
							
							
							
							if(!running){
								table.prepend(row);
							
								if (table.rows.length > parseInt(document.getElementById("botMaxRows").value))
								{
									table.deleteRow(table.rows.length - 1);
								}
							}
				
					
					}
			
					
			
					
						
					
						if(obj.payload.data.slide.event.__typename == "MultiplayerSlideBet"){
						
							if(obj.payload.data.slide.event.result == "autocashout"){
								
								lastBet = {
									id: bet.slide.event.id,
									amount: bet.slide.event.amount,
									payoutMultiplier: bet.slide.event.payoutMultiplier,
									payout: bet.slide.event.payout,
									win: bet.slide.event.payoutMultiplier >= 1,
									Roll: lastBet.Roll
								};
								betlist = []
								color = "#05f711";
								bet_found = true;
								win = true;
								
								
								
								
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

								row.style.color = "#91F190";

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
								tdcheck.checked = "";
								tdcheck.id = "checked";
								
								tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = obj.payload.data.slide.event.cashoutAt.toFixed(4) + ""
								tdRollChance.innerHTML = ""
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + obj.payload.data.slide.event.cashoutAt.toFixed(4) + "";
								//lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.Roll.toFixed(4) + "";
								tdNonce.innerHTML = game;
								tdBetID.innerHTML = `<span class="clickable-bet-id" data-betid="${bet.slide.event.id}" style="cursor: pointer; color: #007bff; text-decoration: underline;">View</span>`;
								tdPayout.innerHTML = obj.payload.data.slide.event.payout.toFixed(8);

			
								row.appendChild(tdbets);
								row.appendChild(tdNonce);
								row.appendChild(tdamount);
								row.appendChild(tdhigh);
								row.appendChild(tdTargetChance);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdRollChance);
								row.appendChild(tdBetID);
								var table = document.getElementById("botHistory");							
								
								
								if(win){
									// Add a class to the row
									row.classList.add("win-row");
									// Or set style on all cells
									var cells = row.getElementsByTagName("td");
									for(var i = 0; i < cells.length; i++) {
										cells[i].style.color = "#058514";
									}
								} else {
									// For losses, you might want a different color
									//row.classList.add("loss-row");
									// Or set red color for losses
									//var cells = row.getElementsByTagName("td");
									//for(var i = 0; i < cells.length; i++) {
										//cells[i].style.color = "#F19091";
									//}
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
								
								current_balance += current_profit;
								balance = current_balance;
								profit = profit_total;
								previousbet = lastBet.amount;
								currentprofit = current_profit;
		
								
								
								updateChart();
												
								const profitElement = document.getElementById('botProfit');
							  //profitElement.textContent = value;
							  
							  // Add negative class if value is negative
							  if (profit_total < 0) {
								profitElement.classList.add('negative');
							  } else {
								profitElement.classList.remove('negative');
							  }
							  
								const streakElement = document.getElementById('botCurrentStreak');
							  //streakElement.textContent = value;
							  
							  // Check if it's negative or loss strea
							  if (currentstreak < 0) {
								streakElement.classList.add('negative');
							  } else {
								streakElement.classList.remove('negative');
							  }
			
												
								document.getElementById("botBalance").innerHTML = balance.toFixed(8);
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
								//currentcount += 1
								
								
								/*
								dobet();
					
								amount = nextbet;
								target_multi = 99 / chance;
								*/
							}
						
							
							if (obj.payload.data.slide.event.result == "busted"){
								
								
								lastBet = {
									id: bet.slide.event.id,
									amount: bet.slide.event.amount,
									payoutMultiplier: bet.slide.event.payoutMultiplier,
									payout: bet.slide.event.payout,
									win: bet.slide.event.payoutMultiplier >= 1,
									Roll: lastBet.Roll
								};
								
								betlist = []
								color = "#f72a42"
								losses++;
								losestreak++
								winstreak = 0;
								
								win = false;
								
								id[gamelist[obj.payload.data.slide.event.id]] = win
								//obj2 = (99 / obj.payload.data.slide.event.cashoutAt)
								//object1 = { obj2: win }
								
							
								current_profit = parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								profit_total += parseFloat(obj.payload.data.slide.event.payout) - parseFloat(obj.payload.data.slide.event.amount);
								wagered += parseFloat(obj.payload.data.slide.event.amount);
								
								var row = document.createElement("tr");
								
								
								row.style.color = "#FFC0CB";
								
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
								tdcheck.checked = "";
								tdcheck.id = "checked";
								
								tdhigh.appendChild(tdcheck);
								tdTargetChance.innerHTML = 0
								tdRollChance.innerHTML = ""
								tdProfit.innerHTML = current_profit.toFixed(8)
								tdTargetNumber.innerHTML = ">" + obj.payload.data.slide.event.cashoutAt.toFixed(4) + "";
								//lastBet.targetNumber = target_multi;
								tdRollNumber.innerHTML = lastBet.Roll.toFixed(4) + "";
								tdNonce.innerHTML = game;
								tdBetID.innerHTML = `<span class="clickable-bet-id" data-betid="${bet.slide.event.id}" style="cursor: pointer; color: #007bff; text-decoration: underline;">View</span>`;
								tdPayout.innerHTML = obj.payload.data.slide.event.payout.toFixed(8);
								
								
								row.appendChild(tdbets);
								row.appendChild(tdNonce);
								row.appendChild(tdamount);
								row.appendChild(tdhigh);
								row.appendChild(tdTargetChance);
								row.appendChild(tdTargetNumber);
								row.appendChild(tdRollNumber);
								row.appendChild(tdProfit);
								row.appendChild(tdPayout);
								row.appendChild(tdRollChance);
								row.appendChild(tdBetID);
								var table = document.getElementById("botHistory");							
								
								
								if(win){
									// Add a class to the row
									row.classList.add("win-row");
									// Or set style on all cells
									var cells = row.getElementsByTagName("td");
									for(var i = 0; i < cells.length; i++) {
										cells[i].style.color = "#058514";
									}
								} else {
									// For losses, you might want a different color
									//row.classList.add("loss-row");
									// Or set red color for losses
									//var cells = row.getElementsByTagName("td");
									//for(var i = 0; i < cells.length; i++) {
										//cells[i].style.color = "#F19091";
									//}
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
								
								current_balance += current_profit;
								balance = current_balance;
								profit = profit_total;
								previousbet = lastBet.amount;
								currentprofit = current_profit;
			
								
								
								updateChart();
								
								const profitElement = document.getElementById('botProfit');
								  //profitElement.textContent = value;
								  
								  // Add negative class if value is negative
								  if (profit_total < 0) {
									profitElement.classList.add('negative');
								  } else {
									profitElement.classList.remove('negative');
								  }
								  
									const streakElement = document.getElementById('botCurrentStreak');
								  //streakElement.textContent = value;
								  
								  // Check if it's negative or loss strea
								  if (currentstreak < 0) {
									streakElement.classList.add('negative');
								  } else {
									streakElement.classList.remove('negative');
								  }
			
								
								document.getElementById("botBalance").innerHTML = balance.toFixed(8);
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
								//currentcount += 1;
								
								
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