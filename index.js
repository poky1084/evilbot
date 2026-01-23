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
  z-index: 900;
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
  z-index: 900;
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
  color: #000;
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
		  <span>
            <button class="btn-grad" id="showConsolePopup">Show UI</button>
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
</body>

<!-- Console Popup (Hidden by default) -->
<div id="consolePopup" class="console-popup" style="display: none; border: 2px solid #333; border-radius: 8px; z-index: 10000; padding: 5px; box-shadow: 0 4px 20px rgba(0,0,0,0.5);">
  <div id="movePopup" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; border-bottom: 1px solid #333; padding-bottom: 1px;">
    <h3 style="margin: 0; color: #fff;">Game UI</h3>
    <button id="closeLimboConsole" style="background: #ff4444; color: white; border: none; border-radius: 4px; padding: 5px 10px; cursor: pointer;">Close</button>
  </div>
  
      <div class="tab-content active" id="consoleTab">
        <div class="console-content">
            <div class="command-history" id="commandHistory">
                <div class="top-bar">
                    <div class="number-container" id="numberContainer">
                        <!-- Numbers will be generated by JavaScript -->
                    </div>
                </div>
                <div class="roller">
                    <div class="jumping2" id="jumpingArea">
                        <div class="digits2" id="digitsContainer">
                            <div class="digit2">0</div>
                            <div class="digit2">0</div>
                            <div class="digit2">.</div>
                            <div class="digit2">0</div>
                            <div class="digit2">0</div>
                        </div>
                    </div>
                    <div style="height:12px"></div>
                    <div class="meta2">
                        <div class="payout2">Chance: <strong id="chanceMeta">50.00%</strong></div>
                        <div class="payout2">Payout: <strong id="payoutMeta">2.00x</strong></div>
                        <div class="payout2">Result: <strong id="resultMeta">-</strong></div>
                    </div>
                </div>
            </div>
            
            <div class="slider-wrap" id="sliderWrap">
                <div class="target"></div>
                <input type="range" id="chanceSlider" min="0" max="100" value="50.00" step="0.01">
                <div id="resultBubble" class="result-bubble">50.00</div>
            </div>
        </div>
    </div>
</div>

<!-- Overlay for limbo popup -->

<style>
/* Add high z-index to the bot container to ensure it's below the popup */
.tab-content {
    display: none;
    height: calc(100% - 60px);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.tab-content.active {
    display: flex;
    flex-direction: column;
}

.tab-content {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.console-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.command-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.top-bar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    justify-content: flex-end;
    font-family: 'Courier New', monospace;
}

.number-container {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding: 0 20px;
    font-family: 'Courier New', monospace;
}

.number {
    font-family: 'Courier New', monospace;
    font-size: 16px;
    font-weight: bold;
    margin: 0 8px;
    padding: 0;
    text-align: center;
    background: none;
    border: none;
    box-shadow: none;
    transition: transform 0.3s ease;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.win {
    color: #06d614;
}

.loss {
    color: #c4c1c0;
}

.separator {
    color: rgba(196, 193, 192, 0.3);
    margin: 0 4px;
    transition: transform 0.3s ease;
}

.new-number {
    animation: slideInFromRight 0.3s ease forwards;
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.roller {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 36px;
    border-radius: 12px;
    background: transparent;
    border: 1px solid rgba(196, 193, 192, 0.14);
}

.jumping2 {
    height: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
}
.digits2 {
    display: flex;
    gap: 6px;
}

.digit2 {
    width: 72px;
    height: 96px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 800;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.meta2 {
    display: flex;
    gap: 10px;
    align-items: center;
}

.payout2 {
    background: rgba(255, 255, 255, 0.03);
    padding: 8px;
    border-radius: 8px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}


.slider-wrap {
    padding: 10px;
    background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent);
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 20px;
}

.target {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.target .value {
    font-weight: 700;
    font-size: 20px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}


.result-bubble {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 12px;
    transition: left .35s cubic-bezier(.2,.9,.2,1),background .2s;
	background: #c4c1c0; /* Changed from #0ea5e9 */
    color: #fff;
}

.result-bubble.win {
    background: #c4c1c0;
}

.result-bubble.lose {
    background: #3b3a39;
}

.console-popup {
  font-family: Arial, sans-serif;
  /* Increased z-index from 1000 to 10000 */
  z-index: 10000 !important;
  width: 80%;
    max-width: 700px;
    height: 460px;
	position: fixed; 
	top: 50%; 
	left: 50%; 
	transform: translate(-50%, -50%); 
	background: #1e1e1e;
}



.limbo-console-content {
  padding: 10px;
}

.limbo-command-history {
  background: #2a2a2a;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
}

.limbo-top-bar {
  background: #333;
  padding: 5px 10px;
  border-radius: 4px;
  margin-bottom: 10px;
}

.limbo-number-container {
  display: flex;
  gap: 5px;
  overflow-x: auto;
}

.limbo-roller {
  text-align: center;
}

.limbo-jumping {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.limbo-digits {
  display: flex;
  justify-content: center;
  gap: 5px;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.limbo-digit {
  background: rgba(0,0,0,0.3);
  padding: 5px 10px;
  border-radius: 4px;
}

.limbo-meta {
  display: flex;
  justify-content: space-around;
  color: #ccc;
  font-size: 14px;
}

.limbo-payout {
  margin: 0 10px;
}

.limbo-slider-wrap {
  position: relative;
  margin-top: 20px;
  padding: 0 10px;
}

#limboChanceSlider {
  width: 100%;
  height: 8px;
  background: #333;
  border-radius: 4px;
  outline: none;
  -webkit-appearance: none;
}

#limboChanceSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: #667eea;
  border-radius: 50%;
  cursor: pointer;
}

#limboChanceSlider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: #667eea;
  border-radius: 50%;
  cursor: pointer;
  border: none;
}

.limbo-result-bubble {
  position: absolute;
  top: -30px;
  background: #667eea;
  color: white;
  padding: 3px 8px;
  border-radius: 4px;
  font-size: 12px;
  transform: translateX(-50%);
  pointer-events: none;
}

.limbo-target {
  position: absolute;
  top: -5px;
  width: 2px;
  height: 20px;
  background: #ff4444;
  transform: translateX(-50%);
  pointer-events: none;
}

/* Make sure all other elements have lower z-index */
#botHeader, #botBody, #botMain, #botMenu, .bot-menu2, .bot-stats-container, 
#botWrapControl, #chartContainer, #botWrapHistory, #botTabMenu, 
#botWrapMode, #botControlMenu, #botFooter {
  position: relative;
  z-index: auto;
}
#chanceSlider {
    width: 100%;
    margin: 0;
}

input[type=range] {
    width: 90%;
    height: 11px;
    border-radius: 6px;
    appearance: none;
    background: background: linear-gradient(90deg, #000 0%, #c4c1c0 50%, #5c5b5a 50%, #5c5b5a 100%);
    outline: none;
}

input[type=range]::-webkit-slider-thumb {
    appearance: none;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #c4c1c0;
    cursor: pointer;
}

input[type=range]::-moz-range-thumb {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #c4c1c0;
    cursor: pointer;
}

.status-buttons {
    display: flex;
    gap: 1px;
    align-items: center;
    top: -6px;
}

.status-btn {
    background: none;
    border: none;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    padding: 2px 8px;
    transition: all 0.2s ease;
}

.status-btn:hover {
    color: #fff;
    background: rgba(196, 193, 192, 0.1);
    border-radius: 3px;
}

.status-btn:active {
    transform: translateY(1px);
}

.status-bar > .status-buttons {
    transform: translateY(-6px);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
}

.stat-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 8px 10px;
    background: rgba(59, 58, 57, 0.91);
    border: 1px solid rgba(196, 193, 192, 0.2);
    border-width: 0 0 1px 1px;
    min-height: 40px;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
}

.stat-row:nth-child(odd) {
    border-left-width: 1px;
}

.stat-row:nth-last-child(-n+2) {
    border-bottom-width: 1px;
}

.stat-label {
    color: rgba(196, 193, 192, 0.8);
    text-shadow: var(--text-shadow);
    font-weight: bold;
    font-size: 17px;
    white-space: nowrap;
    margin: 0;
    padding: 0;
}

.stat-value {
    font-weight: bold;
    font-size: 17px;
    text-shadow: var(--text-shadow);
    text-align: right;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    min-width: 150px;
    color: #c4c1c0;
}

.stat-value.positive {
    color: #05e836;
    text-shadow: 0 0 5px rgba(196, 193, 192, 0.7);
}

.stat-value.negative {
    color: #ff3333;
    text-shadow: 0 0 5px rgba(255, 51, 51, 0.7);
}

@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-row {
        border-width: 0 1px 1px 1px;
    }
    
    .stat-row:first-child {
        border-top-width: 1px;
    }
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
}

.transparent-bg-element {
}

.transparent-bg-element::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
}



.skip-btn {
    margin-left: 15px;
    font-size: 40px;
    background: rgba(196, 193, 192, 0.1);
    border: 1px solid rgba(196, 193, 192, 0.3);
    border-radius: 6px;
    color: #c4c1c0;
    cursor: pointer;
    padding: 10px 15px;
    transition: all 0.2s ease;
}

.skip-btn:hover:not(:disabled) {
    background: rgba(196, 193, 192, 0.2);
    transform: scale(1.1);
}

.skip-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}



.url-bar::before {
    content: "🌐 ";
    margin-right: 6px;
    font-size: 10px;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
}



.header-data {
    font-weight: bold;
    text-shadow: var(--text-shadow);
}

.window-header {
    background-color: rgba(59, 58, 57, 0.91);
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(196, 193, 192, 0.3);
    cursor: move;
    user-select: none;
}



.window-tabs {
    font-family: 'Courier New', monospace;
    display: flex;
    background-color: rgba(59, 58, 57, 0.91);
    border-bottom: 1px solid rgba(196, 193, 192, 0.2);
    padding: 0 6px;
    cursor: move;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.tabs-container {
    display: flex;
    flex: 1;
    cursor: move;
}

.window-controls {
    display: flex;
    gap: 10px;
    margin-left: auto;
    padding: 0 10px;
    cursor: default;
}

.control-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
}

.close { background-color: #ff5f56; }
.minimize { background-color: #ffbd2e; }
.maximize { background-color: #27c93f; }

.tab {
    padding: 5px 16px;
    color: rgba(196, 193, 192, 0.7);
    text-shadow: var(--text-shadow);
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    user-select: none;
}











.matrix-column {
    position: absolute;
    top: 0;
    width: 20px;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    text-shadow: 0 0 5px #ffffff;
    animation: fall linear infinite;
    user-select: none;
}

@keyframes fall {
    from { transform: translateY(-100%); }
    to   { transform: translateY(100%); }
}



.blink {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50%     { opacity: 0.5; }
}

.terminal-content {
    padding: 13px 15px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-size: 14px;
    flex: 1;
    overflow-y: auto;
    cursor: pointer;
    user-select: text;
}

.main-content {
    flex: 1;
    overflow-y: auto;
    cursor: text;
    user-select: text;
}

.chart-container {
    background: rgba(91, 90, 89, 0.2);
    border: 1px solid rgba(196, 193, 192, 0.2);
    border-radius: 10px;
    height: 150px;
    margin: 10px 20px;
    cursor: default;
    user-select: none;
    position: relative;
}

#chartContainer {
    width: 100%;
    height: 100%;
    cursor: default;
    user-select: none;
}

.command-line, .output, .prompt, .command {
    user-select: text;
    cursor: text;
}

.command-line {
    margin-bottom: 10px;
}

.output {
    margin-bottom: 5px;
    line-height: 1.4;
}








body.header-visible {
    padding-top: 50px;
    transition: padding-top 0.3s ease;
}

.code-content {
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    background: rgba(59, 58, 57, 0.91);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(196, 193, 192, 0.2);
    height: 100%;
    overflow-y: auto;
    margin: 10px;
}

.log-content {
    font-family: 'Courier New', monospace;
    background: rgba(59, 58, 57, 0.91);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(196, 193, 192, 0.2);
    flex: 1;
    overflow-y: auto;
    margin: 10px;
    margin-bottom: 0;
}

.log-entry {
    margin-bottom: 1px;
    padding-bottom: 1px;
    border-bottom: 1px solid rgba(196, 193, 192, 0.1);
}

.log-time {
    color: rgba(196, 193, 192, 0.6);
    text-shadow: var(--text-shadow);
    font-size: 12px;
    margin-right: 10px;
}



.console-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.console-input-container {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    background: transparent;
    border-top: 1px solid rgba(196, 193, 192, 0.2);
    margin-top: auto;
    width: 100%;
    box-sizing: border-box;
}



.prompt {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}



.input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
}



.cursor {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 20px;
    background-color: #c4c1c0;
    opacity: 0;
    transition: opacity 0.2s;
}

.blinking {
    animation: blink 1s infinite;
}

.tab-content {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.code-js {
    position: relative;
    height: 100%;
    width: 100%;
}

.CodeMirror {
    background: rgba(255, 255, 255, 0.05) !important;
    border-radius: 8px;
    font-size: 14px;
    height: 97% !important;
    width: 100% !important;
}

.CodeMirror-scroll {
    min-height: 97% !important;
}

.CodeMirror-gutters {
    background: rgba(255, 255, 255, 0.1) !important;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
}

.CodeMirror-linenumber {
    color: rgba(255, 255, 255, 0.5) !important;
}

.CodeMirror-cursor {
    border-left: 1px solid #ffffff !important;
}

.cm-keyword { color: #ff9d9d !important; }
.cm-atom { color: #ff9d9d !important; }
.cm-number { color: #ffcc66 !important; }
.cm-def { color: #9cdcfe !important; }
.cm-variable { color: #9cdcfe !important; }
.cm-variable-2 { color: #9cdcfe !important; }
.cm-property { color: #9cdcfe !important; }
.cm-operator { color: #ff9d9d !important; }
.cm-comment { color: #6a9955 !important; }
.cm-string { color: #ce9178 !important; }
.cm-string-2 { color: #ce9178 !important; }
.cm-meta { color: #9cdcfe !important; }
.cm-builtin { color: #ff9d9d !important; }
.cm-tag { color: #569cd6 !important; }
.cm-attribute { color: #9cdcfe !important; }
.cm-header { color: #ff9d9d !important; }
.cm-hr { color: #ff9d9d !important; }
.cm-link { color: #569cd6 !important; }

.command-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.top-bar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
    justify-content: flex-end;
    font-family: 'Courier New', monospace;
}

.number-container {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding: 0 20px;
    font-family: 'Courier New', monospace;
}

.number {
    font-family: 'Courier New', monospace;
    font-size: 16px;
    font-weight: bold;
    margin: 0 8px;
    padding: 0;
    text-align: center;
    background: none;
    border: none;
    box-shadow: none;
    transition: transform 0.3s ease;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.win {
    color: #06d614;
}

.loss {
    color: #c4c1c0;
}

.separator {
    color: rgba(196, 193, 192, 0.3);
    margin: 0 4px;
    transition: transform 0.3s ease;
}

.new-number {
    animation: slideInFromRight 0.3s ease forwards;
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slider-wrap {
    padding: 10px;
    background: linear-gradient(180deg, rgba(255,255,255,0.01), transparent);
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 20px;
}

#chanceSlider {
    width: 100%;
    margin: 0;
}

input[type=range] {
    width: 90%;
    height: 11px;
    border-radius: 6px;
    appearance: none;
    background: background: linear-gradient(90deg, #c4c1c0 0%, #c4c1c0 50%, #5c5b5a 50%, #5c5b5a 100%);
    outline: none;
}

input[type=range]::-webkit-slider-thumb {
    appearance: none;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #c4c1c0;
    cursor: pointer;
}

input[type=range]::-moz-range-thumb {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #c4c1c0;
    cursor: pointer;
}

.target {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.target .value {
    font-weight: 700;
    font-size: 20px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.result-bubble {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 6px 10px;
    border-radius: 8px;
    font-size: 12px;
    transition: left .35s cubic-bezier(.2,.9,.2,1),background .2s;
	background: #c4c1c0; /* Changed from #0ea5e9 */
    color: #fff;
}

.result-bubble.win {
    background: #c4c1c0;
}

.result-bubble.lose {
    background: #3b3a39;
}

.roller {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 36px;
    border-radius: 12px;
    background: transparent;
    border: 1px solid rgba(196, 193, 192, 0.14);
}

.jumping {
    height: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.digits {
    display: flex;
    gap: 6px;
}

.digit {
    width: 72px;
    height: 96px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 800;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.meta {
    display: flex;
    gap: 10px;
    align-items: center;
}

.payout {
    background: rgba(255, 255, 255, 0.03);
    padding: 8px;
    border-radius: 8px;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
}

.status-buttons {
    display: flex;
    gap: 1px;
    align-items: center;
    top: -6px;
}

.status-btn {
    background: none;
    border: none;
    color: #c4c1c0;
    text-shadow: var(--text-shadow);
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    padding: 2px 8px;
    transition: all 0.2s ease;
}

.status-btn:hover {
    color: #fff;
    background: rgba(196, 193, 192, 0.1);
    border-radius: 3px;
}

.status-btn:active {
    transform: translateY(1px);
}

.status-bar > .status-buttons {
    transform: translateY(-6px);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
}

.stat-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 8px 10px;
    background: rgba(59, 58, 57, 0.91);
    border: 1px solid rgba(196, 193, 192, 0.2);
    border-width: 0 0 1px 1px;
    min-height: 40px;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
}

.stat-row:nth-child(odd) {
    border-left-width: 1px;
}

.stat-row:nth-last-child(-n+2) {
    border-bottom-width: 1px;
}

.stat-label {
    color: rgba(196, 193, 192, 0.8);
    text-shadow: var(--text-shadow);
    font-weight: bold;
    font-size: 17px;
    white-space: nowrap;
    margin: 0;
    padding: 0;
}

.stat-value {
    font-weight: bold;
    font-size: 17px;
    text-shadow: var(--text-shadow);
    text-align: right;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    min-width: 150px;
    color: #c4c1c0;
}

.stat-value.positive {
    color: #05e836;
    text-shadow: 0 0 5px rgba(196, 193, 192, 0.7);
}

.stat-value.negative {
    color: #ff3333;
    text-shadow: 0 0 5px rgba(255, 51, 51, 0.7);
}

@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-row {
        border-width: 0 1px 1px 1px;
    }
    
    .stat-row:first-child {
        border-top-width: 1px;
    }
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
}

.transparent-bg-element {
}

.transparent-bg-element::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.4;
    z-index: -1;
}


.skip-btn {
    margin-left: 15px;
    font-size: 40px;
    background: rgba(196, 193, 192, 0.1);
    border: 1px solid rgba(196, 193, 192, 0.3);
    border-radius: 6px;
    color: #c4c1c0;
    cursor: pointer;
    padding: 10px 15px;
    transition: all 0.2s ease;
}

.skip-btn:hover:not(:disabled) {
    background: rgba(196, 193, 192, 0.2);
    transform: scale(1.1);
}

.skip-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

</style>`)
 
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

var gameUI = false;

  const showConsoleBtn = document.getElementById('showConsolePopup');
  const closeConsoleBtn = document.getElementById('closeLimboConsole');
  const consolePopup = document.getElementById('consolePopup');
 
  
  // Show popup when button is clicked
  showConsoleBtn.addEventListener('click', function() {
    consolePopup.style.display = 'block';
	gameUI = true;
	//darkorLight(!dark);
    
  });
  
  // Close popup when close button is clicked
  closeConsoleBtn.addEventListener('click', function() {
    consolePopup.style.display = 'none';
	gameUI = false;
    
  });
  
  // Close popup when clicking on overlay
  
  
  // Close popup with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && consolePopup.style.display === 'block') {
      consolePopup.style.display = 'none';
	  gameUI = false;
      
    }
  });


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
var manualhilo = false;
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
let dark = true;
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
var donecashout = false;
let active_blackjack = false;

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
		dark = false;
    } else {
		dark = true;
	}
    
    // Toggle theme when switch is clicked
    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
			darkorLight(this.checked)
            botContainer.classList.add('light-theme');
            localStorage.setItem('botTheme', 'light');
        } else {
			darkorLight(this.checked)
            botContainer.classList.remove('light-theme');
            localStorage.setItem('botTheme', 'dark');
        }
    });


function changegame(gamer) {
    // Get references to the elements
    const sliderWrap = document.getElementById('sliderWrap');
    const rollerElement = document.querySelector('.roller');
    const hiloSection = document.querySelector('.hilo-section');
    const kenoSection = document.querySelector('.keno-section');
    const jumpingArea = document.getElementById('jumpingArea');
    const chanceMeta = document.getElementById('chanceMeta');
    const payoutMeta = document.getElementById('payoutMeta');
    const resultMeta = document.getElementById('resultMeta');
    const metaDiv = document.querySelector('.meta');
	const minesSection = document.querySelector('.mines-section');
	const topbar = document.querySelector('.top-bar');
	const baccaratSection = document.querySelector('.baccarat-section');
    const blackjackSection = document.querySelector('.blackjack-section');
	
    if (gamer === "dice") {
        // Show dice elements
		if (topbar) topbar.style.display = 'flex';
        if (rollerElement) rollerElement.style.display = 'flex';
        if (sliderWrap) sliderWrap.style.display = 'flex';
        // Hide HILO and Keno sections
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
        if (minesSection) minesSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        game = 'dice';
    } else if (gamer === "limbo") {
		if (topbar) topbar.style.display = 'flex';
        if (rollerElement) rollerElement.style.display = 'flex';
        if (sliderWrap) sliderWrap.style.display = 'none';
        // Hide HILO and Keno sections
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
        if (minesSection) minesSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        game = 'limbo';
    } else if (gamer === "hilo") {
		if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
        if (minesSection) minesSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        // Show HILO section
        if (hiloSection) hiloSection.style.display = 'block';
        
        game = 'hilo';
    } else if (gamer === "keno") {
		if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (hiloSection) hiloSection.style.display = 'none';
        if (minesSection) minesSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        // Show Keno section
        if (kenoSection) kenoSection.style.display = 'block';
        
        game = 'keno';
    } else if (gamer === "mines") {
		if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
		if (baccaratSection) baccaratSection.style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
        // Show Keno section
        if (minesSection) minesSection.style.display = 'block';
        
        game = 'mines';
    } else if (gamer === "baccarat") {
        if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
		if (minesSection) minesSection.style.display = 'none';
        // Show Baccarat section
        if (baccaratSection) baccaratSection.style.display = 'block';
		document.querySelector('.baccarat-bet-info').style.display = 'none';
		document.querySelector('.result-display').style.display = 'none';
		 if (blackjackSection) blackjackSection.style.display = 'none';
		
        game = 'baccarat';
    } else if (gamer === "blackjack"){
		
		if (topbar) topbar.style.display = 'none';
        if (rollerElement) rollerElement.style.display = 'none';
        if (sliderWrap) sliderWrap.style.display = 'none';
        if (hiloSection) hiloSection.style.display = 'none';
        if (kenoSection) kenoSection.style.display = 'none';
		if (minesSection) minesSection.style.display = 'none';
        // Show Baccarat section
        if (baccaratSection) baccaratSection.style.display = 'none';
		
		 if (blackjackSection) blackjackSection.style.display = 'block';
		 document.querySelector('.bet-info-item1').style.display = 'none';
		 document.querySelector('.bet-info-item2').style.display = 'none';
		 document.querySelector('.bet-info-label3').style.display = 'none';
		 document.querySelector('.blackjack-bet-info').style.display = 'none';
		 
		game = 'blackjack';
		}
		//game = gamer;
		
	}
	
	

const chanceSlider = document.getElementById('chanceSlider');
		 const resultBubble = document.getElementById('resultBubble');
		 const sliderWrap = document.getElementById('sliderWrap');
		   const digitsContainer = document.getElementById('digitsContainer');
		   
    const jumpingArea = document.getElementById('jumpingArea');
    const chanceMeta = document.getElementById('chanceMeta');
    const payoutMeta = document.getElementById('payoutMeta');
    const resultMeta = document.getElementById('resultMeta');
		   
		 let side = 'below';
		 let isSliderInteracted = false;
		  let lastResult = null;
		 
		 function updateUI(){
      const t = parseFloat(lastBet.target);
     
      //const chance = computeChance(t);
      
      
      // Update slider appearance based on interaction and side
      updateSliderAppearance();
      
      // position bubble over the slider according to current slider value
      //animateBubble(t);
    }
	
	
	
	function updateSliderAppearance() {
    const slider = document.getElementById('chanceSlider');
    const value = parseFloat(slider.value);
    
    if (!isSliderInteracted) {
        // Default state - show full area based on selected side
        if (side === 'below') {
            // Roll Low: #c4c1c0 from left to slider position
            slider.style.background = `linear-gradient(90deg,#c4c1c0 0%,#c4c1c0 ${value}%,#5c5b5a ${value}%,#5c5b5a 100%)`;
        } else {
            // Roll High: #c4c1c0 from slider position to right
            slider.style.background = `linear-gradient(90deg,#5c5b5a 0%,#5c5b5a ${value}%,#c4c1c0 ${value}%,#c4c1c0 100%)`;
        }
    } else {
        // After interaction - show proper win/lose areas based on selected side
        if (side === 'below') {
            // Roll Low: #c4c1c0 on the left side (lower numbers)
            slider.style.background = `linear-gradient(90deg,#c4c1c0 0%,#c4c1c0 ${value}%,#5c5b5a ${value}%,#5c5b5a 100%)`;
        } else {
            // Roll High: #c4c1c0 on the right side (higher numbers)
            slider.style.background = `linear-gradient(90deg,#5c5b5a 0%,#5c5b5a ${value}%,#c4c1c0 ${value}%,#c4c1c0 100%)`;
        }
    }
}
	
	chanceSlider.addEventListener('input', () => {
      isSliderInteracted = true;
      updateUI();
    });
    
    // Track slider interaction
    chanceSlider.addEventListener('mousedown', () => {
      isSliderInteracted = true;
    });
    
    chanceSlider.addEventListener('touchstart', () => {
      isSliderInteracted = true;
    });

    updateUI();
	
 

function setSliderValue(newValue) {
    const slider = document.getElementById('chanceSlider');
    
    // Convert to number and round to 2 decimals
    const numericValue = parseFloat(newValue);
    const roundedValue = Math.round((numericValue + Number.EPSILON) * 100) / 100;
    
    // Ensure within min/max bounds
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const clampedValue = Math.min(Math.max(roundedValue, min), max);
    
    // Set the slider value (it will handle rounding based on step)
    slider.value = clampedValue.toFixed(2);
    
    
    // Trigger events
    slider.dispatchEvent(new Event('input', { bubbles: true }));
    slider.dispatchEvent(new Event('change', { bubbles: true }));
}
	

function animateBubble(val, isWin = null){
      const bubble = document.getElementById('resultBubble');
      const slider = document.getElementById('chanceSlider');

      const sliderWidth = slider.offsetWidth;
      const newPct = val / 100;
      const newPos = newPct * sliderWidth;

      // Read previous left using computed style so we keep last position
      const computed = window.getComputedStyle(bubble).left;
      const prevLeft = computed ? parseFloat(computed) : newPos;

      // Show decimal value in bubble
      bubble.textContent = val.toFixed(2);

      // Set bubble color based on win/lose state
      if (isWin === true) {
        bubble.classList.remove('lose');
        bubble.classList.add('win');
      } else if (isWin === false) {
        bubble.classList.remove('win');
        bubble.classList.add('lose');
      } else {
        // Reset to default color when no result
        bubble.classList.remove('win', 'lose');
      }

      // Animate horizontal move and keep final position
      bubble.animate([
        { left: prevLeft + 'px' },
        { left: newPos + 'px' }
      ],{
        duration: 200,
        easing: 'ease-out'
      });

      bubble.style.left = newPos + 'px';
    }
	
	function rollOnce(target111, result1, win1){
	
		const resultPercent = result1
      // Compute win condition using slider value (0..100)
      const targetPercent = target111
 

      lastResult = result1

      // Animate digits and bubble
	  addNewNumber(lastResult, win1);
      animateJump(lastResult);
     animateBubble(resultPercent, win1)

	side = bethigh ? 'above' : 'below';
    setSliderValue(targetPercent)
    updateSliderAppearance();
     
    }


 function animateJump(finalNumber){
    // finalNumber is between 0.01 and 99.99
    const formatted = finalNumber.toFixed(2);
    const digits = formatted.split('');
    const boxes = digitsContainer.children;

    for(let i=0; i<boxes.length; i++){
        const box = boxes[i];
        if(digits[i] === '.') {
            box.textContent = '.';
        } else {
            box.textContent = digits[i];
        }
        // Remove any transform applied during animation
        box.style.transition = '';
        box.style.transform = '';
    }
}

function initBubble(){
      const slider = document.getElementById('chanceSlider');
      const bubble = document.getElementById('resultBubble');
      const pct = parseFloat(slider.value)/100;
      const rect = slider.getBoundingClientRect();
      const wrapRect = sliderWrap.getBoundingClientRect();
      const pos = Math.round(pct * rect.width) + (rect.left - wrapRect.left);
      bubble.style.left = pos + 'px';
    }
	
	initBubble();


    // Helper: crypto-strong random number between 0 (inclusive) and 1 (exclusive)


    function computePayout(chance) {
      // simplified house edge 1%
      const houseEdge = 0.01;
      const payout = (100 / (chance || 1)) * (1 - houseEdge);
      return payout;
    }
	const numberContainer = document.getElementById('numberContainer');
        let autoAddInterval = null;
        let previousNumberElement = null;
        
        function generateRandomNumber() {
            // Generate a random number between 0.01 and 99.99
            return (Math.random() * 99.98 + 0.01).toFixed(2);
        }
        
	
	     
        function moveNumberLeft(numberElement) {
            // Move the previous number slightly to the left
            numberElement.style.transform = 'translateX(-10px)';
            
            // Also move its separator if it has one
            const index = Array.from(numberContainer.children).indexOf(numberElement);
            if (index > 0) {
                const separator = numberContainer.children[index - 1];
                if (separator.classList.contains('separator')) {
                    separator.style.transform = 'translateX(-10px)';
                }
            }
        }
        
        function removeOldNumbers() {
            // Remove elements from the left until container is reasonable size
            while (numberContainer.scrollWidth > window.innerWidth * 1.5 && numberContainer.children.length > 4) {
                numberContainer.removeChild(numberContainer.children[0]);
                numberContainer.removeChild(numberContainer.children[0]);
            }
        }
        
        function startAutoAdd() {
            if (!autoAddInterval) {
                autoAddInterval = setInterval(() => {
                    addNewNumber(generateRandomNumber());
                }, 1000);
            }
        }
        
        function stopAutoAdd() {
            if (autoAddInterval) {
                clearInterval(autoAddInterval);
                autoAddInterval = null;
            }
        }
        
        function clearNumbers() {
            numberContainer.innerHTML = '';
            previousNumberElement = null;
        }
	
	function addNewNumber(numberValue, win1) {
            // If there's a previous number, move it left
            if (previousNumberElement) {
                moveNumberLeft(previousNumberElement);
            }
            
            // Create number element
            const number = document.createElement('span');
            number.className = 'number new-number';
            number.textContent = numberValue.toFixed(2);
            
            // Randomly assign win or loss status
            const win = win1
            number.classList.add(win ? 'win' : 'loss');
            
            // Add separator if there are existing numbers
            if (numberContainer.children.length > 0) {
                const separator = document.createElement('span');
                separator.className = 'separator';
                separator.textContent = '|';
                numberContainer.appendChild(separator);
            }
            
            // Add the new number
            numberContainer.appendChild(number);
            
            // Update previous number reference
            previousNumberElement = number;
            
            // Remove animation class after animation completes
            setTimeout(() => {
                number.classList.remove('new-number');
            }, 300);
            
            // Remove old numbers if container gets too wide
            if (numberContainer.scrollWidth > window.innerWidth * 2) {
                removeOldNumbers();
            }
        }
	
	
function getRandomHiLoStartCard() {
  const suits = ['H', 'D', 'C', 'S'];
  const ranks = [
    { name: 'A', value: 1 },
    { name: '2', value: 2 },
    { name: '3', value: 3 },
    { name: '4', value: 4 },
    { name: '5', value: 5 },
    { name: '6', value: 6 },
    { name: '7', value: 7 },
    { name: '8', value: 8 },
    { name: '9', value: 9 },
    { name: '10', value: 10 },
    { name: 'J', value: 11 },
    { name: 'Q', value: 12 },
    { name: 'K', value: 13 }
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomRank = ranks[Math.floor(Math.random() * ranks.length)];

  return {
    card: `${randomRank.name} of ${randomSuit}`,
    rank: randomRank.name,
    suit: randomSuit,
    value: randomRank.value
  };
}

// Example usage:
const startCard = getRandomHiLoStartCard();

function handleLossRoundCard(betData) {
    // For loss rounds, we need to get the last round that was actually played
    const rounds = betData.state?.rounds || [];
    const lastRound = rounds.length > 0 ? rounds[rounds.length - 1] : null;
    
    if (lastRound) {
        // This is a normal loss
        feedCard(
            lastRound.card,
            rounds.length + 1,
            lastRound.guess,
            'lose', // Always lose for loss rounds
            lastRound.payoutMultiplier
        );
    } else {
        // No rounds played - immediate loss on first card
        // Use the start card
        feedCard(
            betData.state?.startCard || startcard,
            1,
            null,
            'lose',
            0
        );
    }
    
    // Update game status to show loss
    const gameStatus = document.getElementById('gameStatus');
    gameStatus.textContent = 'LOSE';
    gameStatus.style.color = '#ff4757';
}

startcard = {rank:"A", suit: "C"}

// Add HILO updateCurrentCardDisplay(startcard, 0, false) Card Container to the console tab
const consoleContent = document.querySelector('#consoleTab .console-content');

// Create HILO game section - insert after the top-bar
const topBar = document.querySelector('.top-bar');
const hiloSection = document.createElement('div');
hiloSection.className = 'hilo-section';
hiloSection.innerHTML = `
    
    <div class="current-card-info">
        <div class="current-card-display" id="currentCardDisplay">
            <div class="card-placeholder">Draw a card to start</div>
        </div>
        <div class="card-stats" id="cardStats">
            <div>Cards: <span id="cardCount">0</span></div>
            <div>Wins: <span id="winCount">0</span></div>
            <div>Losses: <span id="lossCount">0</span></div>
            <div>Multiplier: <span id="currentMultiplier">1.00x</span></div>
            <div>Status: <span id="gameStatus" style="color:#ffbd2e">READY</span></div>
        </div>
    </div>
    <div class="cards-container" id="cardsContainer">
        <div class="cards-sequence" id="cardsSequence">
            <!-- Cards will be added here dynamically -->
        </div>
    </div>
`;

// Insert after the top bar
topBar.parentNode.insertBefore(hiloSection, topBar.nextSibling);

// Add CSS for HILO game with overlay guess elements
const hiloStyles = document.createElement('style');
hiloStyles.textContent = `
    .hilo-section {
        background: transparent;
        border: 1px solid rgba(196, 193, 192, 0.2);
        border-radius: 10px;
        padding: 1px;
        position: relative;
    }

    .hilo-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .hilo-title {
        color: #c4c1c0;
        text-shadow: var(--text-shadow);
        font-weight: bold;
        font-size: 16px;
        font-family: 'Courier New', monospace;
    }

    .hilo-controls {
        display: flex;
        gap: 5px;
    }

    .current-card-info {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        padding: 2px;
        background: rgba(91, 90, 89, 0.2);
        border-radius: 8px;
        border: 1px solid rgba(196, 193, 192, 0.1);
    }

    .current-card-display {
        flex: 1;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 8px;
        border: 1px solid rgba(196, 193, 192, 0.1);
    }

    .card-stats {
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 10px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 6px;
        border: 1px solid rgba(196, 193, 192, 0.1);
        min-width: 150px;
    }

    .card-stats div {
        color: rgba(196, 193, 192, 0.8);
        font-size: 13px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
    }

    .card-stats span {
        color: #c4c1c0;
        font-weight: bold;
    }

    .card-placeholder {
        color: rgba(196, 193, 192, 0.4);
        font-style: italic;
        font-size: 14px;
    }

    .cards-container {
        margin-top: 10px;
    }

    .cards-sequence {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        max-height: 250px;
        overflow-x: auto;
        overflow-y: hidden;
        padding: 15px 5px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        min-height: 140px;
        position: relative;
        gap: 0;
    }

    .card-wrapper {
        position: relative;
        margin: 0 25px;
        flex-shrink: 0;
    }

    .card {
        width: 80px;
        height: 110px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 20px;
        position: relative;
        transition: all 0.2s ease;
        border: 3px solid transparent;
        cursor: pointer;
        user-select: none;
        z-index: 2;
    }

    .card:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
    }

    .card.red {
        background: linear-gradient(135deg, #2f3542, #1e272e);
        color: #ffffff;
    }

    .card.black {
        background: linear-gradient(135deg, #2f3542, #1e272e);
        color: #ffffff;
    }
	
	.card.white {
        background: #ffffff;
        color: #000000;
    }

    /* Winning card has green border */
    .card.win {
        border-color: #2ed573 !important;
        box-shadow: 0 0 15px rgba(46, 213, 115, 0.5);
        animation: winPulse 2s infinite;
    }

    /* Losing card has red border */
    .card.lose {
        border-color: #ff4757 !important;
        box-shadow: 0 0 15px rgba(255, 71, 87, 0.5);
        opacity: 0.9;
    }

    /* Starting card (no guess yet) */
    .card.start {
        border-color: #ffbd2e !important;
        border-style: double;
        border-width: 4px;
    }

    /* Game over - disabled state */
    .card.game-over {
        border-color: #ff4757 !important;
        border-style: dashed;
        opacity: 0.7;
        cursor: not-allowed;
    }

    @keyframes winPulse {
        0% { box-shadow: 0 0 5px rgba(46, 213, 115, 0.5); }
        50% { box-shadow: 0 0 20px rgba(46, 213, 115, 0.8); }
        100% { box-shadow: 0 0 5px rgba(46, 213, 115, 0.5); }
    }

    .card-value {
        font-size: 28px;
        margin-bottom: 5px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .card-suit {
        font-size: 18px;
        opacity: 0.9;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        margin-bottom: 5px;
    }

    .card-multiplier {
        position: absolute;
        bottom: 5px;
        font-size: 11px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.6);
        padding: 2px 6px;
        border-radius: 10px;
        color: #ffd700;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        min-width: 35px;
        text-align: center;
        z-index: 3;
    }

    .card-new {
        animation: cardSlideIn 0.3s ease forwards;
    }

    @keyframes cardSlideIn {
        from {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .card-index {
        position: absolute;
        top: 5px;
        left: 5px;
        font-size: 10px;
        opacity: 0.7;
        color: inherit;
        background: rgba(0, 0, 0, 0.3);
        padding: 1px 4px;
        border-radius: 3px;
        z-index: 3;
    }

    /* Guess indicator overlay BETWEEN cards */
    .guess-overlay {
        position: absolute;
        top: 50%;
        left: 1px;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 45px;
        height: 45px;
        background: rgba(59, 58, 57, 0.95);
        border-radius: 50%;
        border: 2px solid;
        z-index: 4;
        pointer-events: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    .guess-overlay.higher {
        border-color: #ff3838;
        background: rgba(59, 58, 57, 0.95);
        color: #ff3838;
    }

    .guess-overlay.lower {
        border-color: #3742fa;
        background: rgba(59, 58, 57, 0.95);
        color: #3742fa;
    }

    .guess-overlay.equal {
        border-color: #ffbd2e;
        background: rgba(59, 58, 57, 0.95);
        color: #ffbd2e;
    }

    .guess-overlay.skip {
        border-color: #ffa500;
        background: rgba(59, 58, 57, 0.95);
        color: #9b59b6;
    }

    .guess-overlay.win {
        border-color: #2ed573 !important;
        background: rgba(59, 58, 57, 0.95);
        color: #2ed573 !important;
        animation: guessWinPulse 1.5s infinite;
    }
	

    .guess-overlay.lose {
        border-color: #ff4757 !important;
        background: rgba(59, 58, 57, 0.95);
        color: #ff4757 !important;
        opacity: 0.8;
    }

    .guess-symbol {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 2px;
    }

    .guess-text {
        font-size: 9px;
        font-weight: bold;
        opacity: 0.9;
        letter-spacing: 0.5px;
    }

    @keyframes guessWinPulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.1); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }

    /* HILO Game Controls */
    .hilo-game-controls {
        display: flex;
        gap: 10px;
        margin-top: 15px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .hilo-action-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 6px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 13px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        flex: 1;
        min-width: 120px;
    }

    .hilo-action-btn:hover {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-2px);
    }

    .hilo-action-btn.higher {
        border-color: #ff3838;
        color: #ff3838;
    }

    .hilo-action-btn.lower {
        border-color: #3742fa;
        color: #3742fa;
    }

    .hilo-action-btn.equal {
        border-color: #ffbd2e;
        color: #ffbd2e;
    }

    .hilo-action-btn.skip {
        border-color: #9b59b6;
        color: #9b59b6;
    }

    .hilo-action-btn.cashout {
        border-color: #2ed573;
        color: #2ed573;
        min-width: 140px;
    }

    .hilo-action-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    /* Stats for current card display */
    .current-card {
        width: 70px;
        height: 95px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 20px;
        position: relative;
        border: 3px solid;
    }

    .current-card-multiplier {
        position: absolute;
        bottom: 5px;
        font-size: 10px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.7);
        padding: 2px 6px;
        border-radius: 10px;
        color: #ffd700;
    }

    /* Game over overlay */
    .game-over-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10;
        border-radius: 8px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
    }

    .game-over-overlay.active {
        opacity: 1;
        visibility: visible;
    }

    .game-over-text {
        color: #ff4757;
        font-size: 24px;
        font-weight: bold;
        text-shadow: 0 0 10px rgba(255, 71, 87, 0.5);
        font-family: 'Courier New', monospace;
    }

    /* Skip animation */
    @keyframes skipPulse {
        0% { transform: translate(-50%, -50%) scale(1); }
        50% { transform: translate(-50%, -50%) scale(1.2); }
        100% { transform: translate(-50%, -50%) scale(1); }
    }

    .guess-overlay.skip {
        animation: skipPulse 2s infinite;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .cards-sequence {
            padding: 15px 3px;
        }
        
        .card-wrapper {
            margin: 0 20px;
        }
        
        .card {
            width: 70px;
            height: 95px;
        }
        
        .guess-overlay {
            width: 40px;
            height: 40px;
            left: 1px;
        }
        
        .guess-symbol {
            font-size: 36px;
        }
        
        .guess-text {
            font-size: 8px;
        }
        
        .hilo-game-controls {
            gap: 8px;
        }
        
        .hilo-action-btn {
            min-width: 100px;
            font-size: 12px;
            padding: 6px 12px;
        }
        
        .current-card-info {
            flex-direction: column;
            gap: 15px;
        }
        
        .card-stats {
            width: 100%;
        }
    }

    @media (max-width: 480px) {
        .card-wrapper {
            margin: 0 15px;
        }
        
        .card {
            width: 60px;
            height: 85px;
        }
        
        .guess-overlay {
            width: 35px;
            height: 35px;
            left: 1px;
        }
        
        .guess-symbol {
            font-size: 36px;
        }
        
        .guess-text {
            font-size: 7px;
        }
        
        .card-value {
            font-size: 24px;
        }
        
        .card-suit {
            font-size: 16px;
        }
        
        .hilo-action-btn {
            min-width: 80px;
            font-size: 11px;
            padding: 5px 10px;
        }
        
        .hilo-game-controls {
            gap: 5px;
        }
    }
	
	.guess-overlay {
    position: absolute;
    top: 50%;
    left: -12px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: rgba(59, 58, 57, 0.95);
    border-radius: 50%;
    border: 2px solid;
    z-index: 4;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
}

.guess-symbol {
    font-size: 24px;
    font-weight: bold;
    line-height: 0.9; /* Adjust this value */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

/* Center the guess-text as well */
.guess-text {
    position: absolute;
    bottom: -25px;
    font-size: 9px;
    font-weight: bold;
    opacity: 0.9;
    letter-spacing: 0.5px;
    text-align: center;
    width: 100%;
    white-space: nowrap;
}

/* Symbol-specific adjustments */
.guess-overlay.higher .guess-symbol,
.guess-overlay.higherEqual .guess-symbol {
    margin-top: 15px; /* Up arrow needs no adjustment or positive adjustment */
}

.guess-overlay.lower .guess-symbol,
.guess-overlay.lowerEqual .guess-symbol {
    margin-top: -14px; /* Down arrow needs more negative margin */
}

.cards-container .guess-overlay.skip {
    border-color: #ffa500 !important;
    color: #ffa500 !important;
}

/* Or even more specific */
#cardsSequence .card-wrapper .guess-overlay.skip {
    border-color: #ffa500 !important;
    color: #ffa500 !important;
}

.cards-container {
    margin-top: 10px;
    width: 100%;
}

.cards-sequence {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-height: 250px;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 5px 5px 5px 1px; /* Important: left padding */
    background: rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    min-height: 140px;
    position: relative;
    gap: 0;
    width: 100%;
    flex-wrap: nowrap;
    box-sizing: border-box;
}

.card-wrapper {
    position: relative;
    margin: 0 24px 0 0; /* Only right margin */
    flex-shrink: 0;
}

/* Add left margin to first card only */
.cards-sequence .card-wrapper:first-child {
    margin-left: 25px;
}
`;

document.head.appendChild(hiloStyles);

// HILO Game Variables
let currentCard = null;
let cardHistory = [];
let cardIndex = 0;
let winCount = 0;
let lossCount = 0;
let currentMultiplier = 1.00;
let lastGuess = null;
let lastGuessResult = null;
let sequenceItems = [];
let gameActive = false;
let gameOver = false;

// Card deck definition
const cardDeck = [
    { value: 'A', suit: '♠', color: 'black', numeric: 1 },
    { value: '2', suit: '♠', color: 'black', numeric: 2 },
    { value: '3', suit: '♠', color: 'black', numeric: 3 },
    { value: '4', suit: '♠', color: 'black', numeric: 4 },
    { value: '5', suit: '♠', color: 'black', numeric: 5 },
    { value: '6', suit: '♠', color: 'black', numeric: 6 },
    { value: '7', suit: '♠', color: 'black', numeric: 7 },
    { value: '8', suit: '♠', color: 'black', numeric: 8 },
    { value: '9', suit: '♠', color: 'black', numeric: 9 },
    { value: '10', suit: '♠', color: 'black', numeric: 10 },
    { value: 'J', suit: '♠', color: 'black', numeric: 11 },
    { value: 'Q', suit: '♠', color: 'black', numeric: 12 },
    { value: 'K', suit: '♠', color: 'black', numeric: 13 },
    { value: 'A', suit: '♥', color: 'red', numeric: 1 },
    { value: '2', suit: '♥', color: 'red', numeric: 2 },
    { value: '3', suit: '♥', color: 'red', numeric: 3 },
    { value: '4', suit: '♥', color: 'red', numeric: 4 },
    { value: '5', suit: '♥', color: 'red', numeric: 5 },
    { value: '6', suit: '♥', color: 'red', numeric: 6 },
    { value: '7', suit: '♥', color: 'red', numeric: 7 },
    { value: '8', suit: '♥', color: 'red', numeric: 8 },
    { value: '9', suit: '♥', color: 'red', numeric: 9 },
    { value: '10', suit: '♥', color: 'red', numeric: 10 },
    { value: 'J', suit: '♥', color: 'red', numeric: 11 },
    { value: 'Q', suit: '♥', color: 'red', numeric: 12 },
    { value: 'K', suit: '♥', color: 'red', numeric: 13 },
    { value: 'A', suit: '♦', color: 'red', numeric: 1 },
    { value: '2', suit: '♦', color: 'red', numeric: 2 },
    { value: '3', suit: '♦', color: 'red', numeric: 3 },
    { value: '4', suit: '♦', color: 'red', numeric: 4 },
    { value: '5', suit: '♦', color: 'red', numeric: 5 },
    { value: '6', suit: '♦', color: 'red', numeric: 6 },
    { value: '7', suit: '♦', color: 'red', numeric: 7 },
    { value: '8', suit: '♦', color: 'red', numeric: 8 },
    { value: '9', suit: '♦', color: 'red', numeric: 9 },
    { value: '10', suit: '♦', color: 'red', numeric: 10 },
    { value: 'J', suit: '♦', color: 'red', numeric: 11 },
    { value: 'Q', suit: '♦', color: 'red', numeric: 12 },
    { value: 'K', suit: '♦', color: 'red', numeric: 13 },
    { value: 'A', suit: '♣', color: 'black', numeric: 1 },
    { value: '2', suit: '♣', color: 'black', numeric: 2 },
    { value: '3', suit: '♣', color: 'black', numeric: 3 },
    { value: '4', suit: '♣', color: 'black', numeric: 4 },
    { value: '5', suit: '♣', color: 'black', numeric: 5 },
    { value: '6', suit: '♣', color: 'black', numeric: 6 },
    { value: '7', suit: '♣', color: 'black', numeric: 7 },
    { value: '8', suit: '♣', color: 'black', numeric: 8 },
    { value: '9', suit: '♣', color: 'black', numeric: 9 },
    { value: '10', suit: '♣', color: 'black', numeric: 10 },
    { value: 'J', suit: '♣', color: 'black', numeric: 11 },
    { value: 'Q', suit: '♣', color: 'black', numeric: 12 },
    { value: 'K', suit: '♣', color: 'black', numeric: 13 }
];

// Function to draw a random card
function drawRandomCard() {
    const randomIndex = Math.floor(Math.random() * cardDeck.length);
    return { ...cardDeck[randomIndex] };
}

// Function to draw a card based on rank value (1-13)
function drawCardByRank(rank) {
    const validRank = Math.max(1, Math.min(13, rank));
    const matchingCards = cardDeck.filter(card => card.numeric === validRank);
    if (matchingCards.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingCards.length);
        return { ...matchingCards[randomIndex] };
    }
    return drawRandomCard();
}

// Helper function to get suit name
function getSuitName(suitSymbol) {
    const suitNames = {
        'S': '♠',
        'H': '♥',
        'D': '♦',
        'C': '♣'
    };
    return suitNames[suitSymbol] || 'Unk';
}

// Helper function to get numeric value
function getNumericValue(cardValue) {
    const values = {
        'A': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10,
        'J': 11, 'Q': 12, 'K': 13
    };
    return values[cardValue] || 1;
}

// Function to update game status


// Function to update stats display


// Function to create a guess overlay element (NO MULTIPLIER on guess)
function createGuessOverlay(guessType, result = null) {
    const guessElement = document.createElement('div');
    guessElement.className = `guess-overlay ${guessType}`;
    
    if (result !== null) {
        guessElement.classList.add(result);
    }
    
    let symbol, text;
    switch(guessType) {
        case 'higherEqual':
            symbol = '⌃';
            text = 'HIGHER';
            break;
        case 'lowerEqual':
            symbol = '⌄';
            text = 'LOWER';
            break;
        case 'equal':
            symbol = '=';
            text = 'EQUAL';
            break;
        case 'skip':
            symbol = '»';
            text = 'SKIP';
            break;
		case 'higher':
            symbol = '⌃';
            text = 'HIGHER';
            break;
		case 'lower':
            symbol = '⌄';
            text = 'LOWER';
            break;
        default:
            symbol = '?';
            text = 'GUESS';
    }
    
    guessElement.innerHTML = `
        <div class="guess-symbol">${symbol}</div>
        <div class="guess-text">${text}</div>
    `;
	

    return guessElement;
}

// Function to create a card wrapper with card and guess overlay
function createCardWrapper(card, cardNumber, guessType = null, guessResult = null, multiplier = null, isGameOver = false) {
    const cardWrapper = document.createElement('div');
    cardWrapper.className = 'card-wrapper';
    
    let cardClass = `card black card-new`; // card color for all cards
	if (dark) {
		cardClass = `card white card-new`;
	}
    if (cardNumber === 1) {
        cardClass += ' start';
    } else if (guessResult === 'win') {
        cardClass += ' win';
    } else if (guessResult === 'lose') {
        cardClass += ' lose';
        if (isGameOver) {
            cardClass += ' game-over';
			multiplier = 0
        }
    }
    
    // Create card
    const cardElement = document.createElement('div');
    cardElement.className = cardClass;
    cardElement.innerHTML = `
        <span class="card-index">#${cardNumber}</span>
        <div class="card-value">${card.rank}</div>
        <div class="card-suit">${getSuitName(card.suit)}</div>
        ${cardNumber > 1 && multiplier ? `<div class="card-multiplier">${parseFloat(multiplier.toFixed(2))}x</div>` : ''}
    `;
    

	
    let resultText = '';
    if (guessResult === 'win') resultText = ' - WIN';
    else if (guessResult === 'lose') resultText = ' - LOSE';
    else if (cardNumber === 1) resultText = ' - START';
    
    
    
    // Add click event to show details
    
    
    cardWrapper.appendChild(cardElement);
    
    // Add guess overlay if this is not the first card
    if (cardNumber > 1 && guessType) {
        const guessOverlay = createGuessOverlay(guessType, guessResult);
        cardWrapper.appendChild(guessOverlay);
    }
    
    return cardWrapper;
}

// Function to update current card display
function updateCurrentCardDisplay(card, multiplier = null, isGameOver = false) {
    const currentCardDisplay = document.getElementById('currentCardDisplay');
    
    if (card) {
        let cardClass = `card black`;
		if (dark) {
			cardClass = `card white`;
		}
        if (cardIndex === 1) {
            cardClass += ' start';
        } else if (isGameOver) {
            cardClass += '';
			multiplier = 0
        }
        
        currentCardDisplay.innerHTML = `
			<div class="${cardClass}">
				<span class="card-index">#${cardIndex}</span>
				<div class="card-value">${card.rank}</div>
				<div class="card-suit">${getSuitName(card.suit)}</div>
				${multiplier && cardIndex > 1 ? `<div class="card-multiplier">${parseFloat(multiplier.toFixed(2))}x</div>` : ''}
			</div>
			<button class="skip-btn" id="skipCardBtn" onclick="handleClick()" title="Skip card">»</button>
		`;
    } else {
        //currentCardDisplay.innerHTML = '<div class="card-placeholder">Click to start</div>';
    }
}

function updateExistingCard(cardWrapper, card, cardIndex, lastGuess, guessResult, currentMultiplier) {
    const cardElement = cardWrapper.querySelector('.card');
    const isLosingCard = guessResult === 'lose';
    
    // Update card classes
    cardElement.className = `card black`;
    if (cardIndex === 1) {
        cardElement.classList.add('start');
    } else if (guessResult === 'win') {
        cardElement.classList.add('win');
    } else if (guessResult === 'lose') {
        cardElement.classList.add('lose');
        if (isLosingCard) {
            cardElement.classList.add('game-over');
        }
    }
    
    // Update card content
    cardElement.innerHTML = `
        <span class="card-index">#${cardIndex}</span>
        <div class="card-value">${card.rank}</div>
        <div class="card-suit">${getSuitName(card.suit)}</div>
        ${cardIndex > 1 && currentMultiplier ? `<div class="card-multiplier">${parseFloat(currentMultiplier.toFixed(2))}x</div>` : ''}
    `;
    
	
	
    // Update or add guess overlay
    const existingOverlay = cardWrapper.querySelector('.guess-overlay');
    if (cardIndex > 1 && lastGuess) {
        if (existingOverlay) {
            // Update existing overlay
            existingOverlay.className = `guess-overlay ${lastGuess}`;
            if (guessResult) {
                existingOverlay.classList.add(guessResult);
            }
            let symbol, text;
            switch(lastGuess) {
                case 'higherEqual':
                    symbol = '⌃'; text = 'HIGHER'; break;
                case 'lowerEqual':
                    symbol = '⌄'; text = 'LOWER'; break;
                case 'equal':
                    symbol = '='; text = 'EQUAL'; break;
                case 'skip':
                    symbol = '»'; text = 'SKIP'; break;
                case 'higher':
                    symbol = '⌃'; text = 'HIGHER'; break;
                case 'lower':
                    symbol = '⌄'; text = 'LOWER'; break;
                default:
                    symbol = '?'; text = 'GUESS';
            }
            existingOverlay.innerHTML = `
                <div class="guess-symbol" style="">${symbol}</div>
                <div class="guess-text">${text}</div>
            `;
			
		
        } else {
            // Create new overlay
            const guessOverlay = createGuessOverlay(lastGuess, guessResult);
            cardWrapper.appendChild(guessOverlay);
        }
    } else if (existingOverlay && cardIndex <= 1) {
        // Remove overlay for first card
        cardWrapper.removeChild(existingOverlay);
    }
}

function updateCardStats() {
    const cardsSequence = document.getElementById('cardsSequence');
    const cardWrappers = cardsSequence.querySelectorAll('.card-wrapper');
    const cardCount = cardWrappers.length;
    
    // Count wins and losses
    let winCount = 0;
    let lossCount = 0;
    let currentMultiplier = 1.00;
    
    cardWrappers.forEach(wrapper => {
        const cardElement = wrapper.querySelector('.card');
        if (cardElement) {
            if (cardElement.classList.contains('win')) winCount++;
            if (cardElement.classList.contains('lose')) lossCount++;
            
            // Get multiplier from the last card
            const multiplierElement = wrapper.querySelector('.card-multiplier');
            if (multiplierElement) {
                const multiplierText = multiplierElement.textContent;
                const multiplierValue = parseFloat(multiplierText);
                if (!isNaN(multiplierValue) && multiplierValue > currentMultiplier) {
                    currentMultiplier = multiplierValue;
                }
            }
        }
    });
    
    // Update stats display
    document.getElementById('cardCount').textContent = cardCount;
    document.getElementById('winCount').textContent = winCount;
    document.getElementById('lossCount').textContent = lossCount;
    document.getElementById('currentMultiplier').textContent = currentMultiplier.toFixed(2) + 'x';
    
    // Update game status
    const gameStatus = document.getElementById('gameStatus');
    if (cardCount === 0) {
        gameStatus.textContent = 'READY';
        gameStatus.style.color = '#ffbd2e';
    } else if (cardWrappers[cardWrappers.length - 1]?.querySelector('.card')?.classList.contains('lose')) {
        gameStatus.textContent = 'LOSE';
        gameStatus.style.color = '#ff4757';
    } else {
        gameStatus.textContent = 'ACTIVE';
        gameStatus.style.color = '#2ed573';
    }
}

function resetCards() {
    const cardsSequence = document.getElementById('cardsSequence');
    
    cardsSequence.innerHTML = '';
    //document.getElementById('currentCardDisplay').innerHTML = '<div class="card-placeholder">Click to start</div>';
    
    currentCard = null;
    cardHistory = [];
    cardIndex = 0;
    
    // Reset counts
    winCount = 0;
    lossCount = 0;
    currentMultiplier = 1.00;
    lastGuess = null;
    lastGuessResult = null;
    sequenceItems = [];
    
    // Update stats display
    updateCardStats();
}

// Main function to feed a new card with optional multiplier
function feedCard(card, cardIndex, lastGuess, guessResult, currentMultiplier) {
    if (!card) {
        //console.warn('No card provided to feedCard');
        return;
    }
	if (!running) {
    startcard = card
	}
    const cardsSequence = document.getElementById('cardsSequence');
    
    // IMPORTANT: Always add the card for loss rounds
    const isLosingCard = guessResult === 'lose';
    
    // For loss cards, we should always show them
    if (isLosingCard) {
        // Clear any existing "lose" card to prevent duplicates
        const existingLoseCards = cardsSequence.querySelectorAll('.card.lose');
        existingLoseCards.forEach(loseCard => {
            const wrapper = loseCard.closest('.card-wrapper');
            if (wrapper) {
                cardsSequence.removeChild(wrapper);
            }
        });
    }
    
    // Check if we already have this card to prevent duplicates
    const existingCards = cardsSequence.querySelectorAll('.card-wrapper');
    
    // For loss cards, we want to add them regardless
    if (!isLosingCard && existingCards.length >= cardIndex) {
        // Card at this index already exists, update it instead
        if (existingCards[cardIndex - 1]) {
            updateExistingCard(existingCards[cardIndex - 1], card, cardIndex, lastGuess, guessResult, currentMultiplier);
            updateCardStats();
            cardsSequence.scrollLeft = cardsSequence.scrollWidth;
            return;
        }
    }
    
    // Create new card wrapper
    const cardWrapper = createCardWrapper(card, cardIndex, lastGuess, guessResult, currentMultiplier, isLosingCard);
    
    // Add to sequence
    cardsSequence.appendChild(cardWrapper);
    
    // Update current card display
    updateCurrentCardDisplay(card, currentMultiplier, isLosingCard);
    
    // Remove animation class after animation completes
    setTimeout(() => {
        const cardElement = cardWrapper.querySelector('.card');
        if (cardElement) {
            cardElement.classList.remove('card-new');
        }
    }, 300);
    
    // Scroll to right (horizontal scrolling)
    cardsSequence.scrollLeft = cardsSequence.scrollWidth;
    
    // Update game stats
    updateCardStats();
}


// Event Listeners
document.getElementById('drawCardBtn')?.addEventListener('click', () => {
  
});



// Add HILO game controls to the UI
function addHILOGameControls() {
    const hiloSection = document.querySelector('.hilo-section');
    
    const gameControls = document.createElement('div');
    gameControls.className = 'hilo-game-controls';
    gameControls.innerHTML = `
        <button class="hilo-action-btn lower" id="guessLowerBtn">Guess LOWER</button>
        <button class="hilo-action-btn equal" id="guessEqualBtn">Guess EQUAL</button>
        <button class="hilo-action-btn higher" id="guessHigherBtn">Guess HIGHER</button>
        <button class="hilo-action-btn skip" id="guessSkipBtn">Guess SKIP</button>
        <button class="hilo-action-btn cashout" id="cashoutBtn">CASHOUT</button>
    `;
    
    hiloSection.appendChild(gameControls);
    
    // Add event listeners for HILO game
    document.getElementById('guessLowerBtn')?.addEventListener('click', () => {
		running = false;
		manualhilo = true;
		let guesser = "lowerEqual"
		if(currentBet?.state?.rounds?.at(-1)?.card?.rank === "K"){
			guesser = "lower"
		}
		if(currentBet.state.rounds.length === 0 && currentBet?.state?.startCard?.rank === "K"){
			guesser = "lower"
		}
		
		if(currentBet?.state?.rounds?.at(-1)?.card?.rank === "A"){
			return;
		}
		if(currentBet.state.rounds.length === 0 && currentBet?.state?.startCard?.rank === "A"){
			return;
		}
		hiloNext(guesser);
    });
    
    document.getElementById('guessEqualBtn')?.addEventListener('click', () => {
		running = false;
		manualhilo = true;
        hiloNext("equal");
    });
    
    document.getElementById('guessHigherBtn')?.addEventListener('click', () => {
		running = false;
		manualhilo = true;
		let guesser = "higherEqual"
		if(currentBet?.state?.rounds?.at(-1)?.card?.rank === "A"){
			guesser = "higher"
		}
		if(currentBet.state.rounds.length === 0 && currentBet?.state?.startCard?.rank === "A"){
			guesser = "higher"
		}
		
		if(currentBet?.state?.rounds?.at(-1)?.card?.rank === "K"){
			return;
		}
		if(currentBet.state.rounds.length === 0 && currentBet?.state?.startCard?.rank === "K"){
			return;
		}
		hiloNext(guesser);

    });
    
    document.getElementById('guessSkipBtn')?.addEventListener('click', () => {
		running = false;
		manualhilo = true;
        hiloNext("skip");
       
    });
    
    document.getElementById('cashoutBtn')?.addEventListener('click', () => {
		running = false;
		manualhilo = true;
        hiloCash();
    });
}

// Initialize HILO game controls
addHILOGameControls();




secondTheme = `
:root {
    --text-color: #000000;
    --text-shadow: 0 0 5px rgba(56, 55, 54, 0.5);
    --bg-color: #e6e6e6;
}

.window-container {
    width: 80%;
    max-width: 800px;
    height: 500px;
    background-color: rgba(230, 230, 230, 0.98);
    border-radius: 20px;
    overflow: hidden;
    position: fixed;
    margin: 20px auto;
    box-shadow: 0 0 30px rgba(56, 55, 54, 0.3);
    border: 1px solid rgba(56, 55, 54, 0.5);
    z-index: 9999;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Courier New', monospace;
    justify-content: center;
    align-items: center;
}

.minimized-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    background-color: rgba(230, 230, 230, 0.91);
    border-bottom: 2px solid rgba(56, 55, 54, 0.6);
    box-shadow: 0 4px 25px rgba(56, 55, 54, 0.3);
    z-index: 10000;
    font-family: 'Courier New', monospace;
    display: none;
    align-items: center;
    padding: 0 20px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #000000;
    text-shadow: var(--text-shadow);
    font-size: 14px;
    font-weight: bold;
}

.header-left {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: bold;
}

.header-center {
    display: flex;
    align-items: center;
    gap: 35px;
    font-weight: bold;
}

.header-right {
    display: flex;
    align-items: center;
    gap: 20px;
    font-weight: bold;
}

.url-bar {
    background: rgba(230, 230, 230, 0.91);
    border: 1px solid rgba(56, 55, 54, 0.4);
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: bold;
    color: #000000;
    text-shadow: var(--text-shadow);
    min-width: 180px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(56, 55, 54, 0.2);
}

.url-bar::before {
    content: "🌐 ";
    margin-right: 6px;
    font-size: 10px;
}

.status-indicator {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
}

.status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #000000;
    animation: blink 1s infinite;
    box-shadow: 0 0 8px #000000;
}

.header-data {
    font-weight: bold;
    text-shadow: var(--text-shadow);
}

.window-header {
    background-color: rgba(230, 230, 230, 0.91);
    padding: 12px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgba(56, 55, 54, 0.3);
    cursor: move;
    user-select: none;
}

.window-title {
    font-size: 18px;
    font-weight: bold;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.window-tabs {
    font-family: 'Courier New', monospace;
    display: flex;
    background-color: rgba(230, 230, 230, 0.91);
    border-bottom: 1px solid rgba(56, 55, 54, 0.2);
    padding: 0 6px;
    cursor: move;
    justify-content: space-between;
    align-items: center;
    user-select: none;
}

.tabs-container {
    display: flex;
    flex: 1;
    cursor: move;
}

.window-controls {
    display: flex;
    gap: 10px;
    margin-left: auto;
    padding: 0 10px;
    cursor: default;
}

.control-btn {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
}

.close { background-color: #ff5f56; }
.minimize { background-color: #ffbd2e; }
.maximize { background-color: #27c93f; }

.tab {
    padding: 5px 16px;
    color: rgba(56, 55, 54, 0.7);
    text-shadow: var(--text-shadow);
    cursor: pointer;
    font-size: 13px;
    font-weight: bold;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    user-select: none;
}

.tab:hover {
    background-color: rgba(56, 55, 54, 0.1);
    color: #000000;
}

.tab.active {
    color: #000000;
    border-bottom: 2px solid #000000;
    background-color: rgba(56, 55, 54, 0.05);
}

.tab-content {
    display: none;
    height: calc(100% - 60px);
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

#logContent {
    flex: 1;
    overflow-y: auto;
}

.tab-content::-webkit-scrollbar {
    display: none;
}

.tab-content.active {
    display: flex;
    flex-direction: column;
}

.matrix-container {
    position: absolute;
    top: 90px;
    left: 0;
    width: 100%;
    height: calc(100% - 90px);
    opacity: 0.1;
    pointer-events: none;
    user-select: none;
}

.matrix-column {
    position: absolute;
    top: 0;
    width: 20px;
    font-size: 18px;
    text-align: center;
    color: #000000;
    text-shadow: 0 0 5px #000000;
    animation: fall linear infinite;
    user-select: none;
}

@keyframes fall {
    from { transform: translateY(-100%); }
    to   { transform: translateY(100%); }
}

.status-bar {
    position: absolute;
    bottom: 3px;
    width: 100%;
    background-color: rgba(230, 230, 230, 0.91);
    padding: 5px 15px;
    font-size: 14px;
    border-top: 1px solid rgba(56, 55, 54, 0.3);
    display: flex;
    justify-content: space-between;
    color: #000000;
    text-shadow: var(--text-shadow);
    cursor: move;
    user-select: none;
    height: 20px;
}

.blink {
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50%     { opacity: 0.5; }
}

.terminal-content {
    padding: 13px 15px;
    color: #000000;
    text-shadow: var(--text-shadow);
    font-size: 14px;
    flex: 1;
    overflow-y: auto;
    cursor: pointer;
    user-select: text;
}

.main-content {
    flex: 1;
    overflow-y: auto;
    cursor: text;
    user-select: text;
}

.chart-container {
    background: rgba(210, 210, 210, 0.2);
    border: 1px solid rgba(56, 55, 54, 0.2);
    border-radius: 10px;
    height: 150px;
    margin: 10px 20px;
    cursor: default;
    user-select: none;
    position: relative;
}

#chartContainer {
    width: 100%;
    height: 100%;
    cursor: default;
    user-select: none;
}

.command-line, .output, .prompt, .command {
    user-select: text;
    cursor: text;
}

.command-line {
    margin-bottom: 10px;
}

.output {
    margin-bottom: 5px;
    line-height: 1.4;
}

.prompt {
    color: #000000;
    text-shadow: var(--text-shadow);
    font-weight: bold;
}

.command {
    color: #000000;
    text-shadow: var(--text-shadow);
}

::selection {
    background: rgba(56, 55, 54, 0.3);
    color: #000000;
}

::-moz-selection {
    background: rgba(56, 55, 54, 0.3);
    color: #000000;
}

body.header-visible {
    padding-top: 50px;
    transition: padding-top 0.3s ease;
}

.code-content {
    font-family: 'Courier New', monospace;
    white-space: pre-wrap;
    background: rgba(230, 230, 230, 0.91);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(56, 55, 54, 0.2);
    height: 100%;
    overflow-y: auto;
    margin: 10px;
}

.log-content {
    font-family: 'Courier New', monospace;
    background: rgba(230, 230, 230, 0.91);
    padding: 15px;
    border-radius: 5px;
    border: 1px solid rgba(56, 55, 54, 0.2);
    flex: 1;
    overflow-y: auto;
    margin: 10px;
    margin-bottom: 0;
}

.log-entry {
    margin-bottom: 1px;
    padding-bottom: 1px;
    border-bottom: 1px solid rgba(56, 55, 54, 0.1);
}

.log-time {
    color: rgba(56, 55, 54, 0.6);
    text-shadow: var(--text-shadow);
    font-size: 12px;
    margin-right: 10px;
}

.log-message {
    color: #000000;
    text-shadow: var(--text-shadow);
}

.console-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
}

.console-input-container {
    display: flex;
    align-items: center;
    padding: 15px 20px;
    background: transparent;
    border-top: 1px solid rgba(56, 55, 54, 0.2);
    margin-top: auto;
    width: 100%;
    box-sizing: border-box;
}

.console-prompt {
    color: #000000;
    text-shadow: var(--text-shadow);
    font-weight: bold;
    font-family: 'Courier New', monospace;
    font-size: 14px;
    white-space: nowrap;
    margin-right: 10px;
}

.console-input {
    background: transparent;
    border: none;
    outline: none;
    color: #000000;
    text-shadow: var(--text-shadow);
    font-family: 'Courier New', monospace;
    font-size: 14px;
    flex: 1;
    caret-color: #000000;
    width: 100%;
}

.prompt {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
}

.prompt-text {
    color: #000000;
    text-shadow: var(--text-shadow);
    margin-right: 8px;
}

.input-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 0;
}

.instructions {
    margin-top: 15px;
    font-size: 12px;
    color: #000000;
    text-shadow: var(--text-shadow);
}




.cursor {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 20px;
    background-color: #000000;
    opacity: 0;
    transition: opacity 0.2s;
}

.blinking {
    animation: blink 1s infinite;
}

.tab-content {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.code-js {
    position: relative;
    height: 100%;
    width: 100%;
}

.CodeMirror {
    background: rgba(0, 0, 0, 0.05) !important;
    border-radius: 8px;
    font-size: 14px;
    height: 97% !important;
    width: 100% !important;
}

.CodeMirror-scroll {
    min-height: 97% !important;
}

.CodeMirror-gutters {
    background: rgba(0, 0, 0, 0.1) !important;
    border-right: 1px solid rgba(0, 0, 0, 0.15);
}

.CodeMirror-linenumber {
    color: rgba(0, 0, 0, 0.5) !important;
}

.CodeMirror-cursor {
    border-left: 1px solid #000000 !important;
}

.cm-keyword { color: #ff5f56 !important; }
.cm-atom { color: #ff5f56 !important; }
.cm-number { color: #ff8c00 !important; }
.cm-def { color: #0066cc !important; }
.cm-variable { color: #0066cc !important; }
.cm-variable-2 { color: #0066cc !important; }
.cm-property { color: #0066cc !important; }
.cm-operator { color: #ff5f56 !important; }
.cm-comment { color: #228b22 !important; }
.cm-string { color: #8b4513 !important; }
.cm-string-2 { color: #8b4513 !important; }
.cm-meta { color: #0066cc !important; }
.cm-builtin { color: #ff5f56 !important; }
.cm-tag { color: #000080 !important; }
.cm-attribute { color: #0066cc !important; }
.cm-header { color: #ff5f56 !important; }
.cm-hr { color: #ff5f56 !important; }
.cm-link { color: #000080 !important; }

.command-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    width: 100%;
    position: relative;
}

.top-bar {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: transparent;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    overflow: hidden;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    justify-content: flex-end;
    font-family: 'Courier New', monospace;
}

.number-container {
    display: flex;
    align-items: center;
    height: 100%;
    white-space: nowrap;
    padding: 0 20px;
    font-family: 'Courier New', monospace;
}

.number {
    font-family: 'Courier New', monospace;
    font-size: 16px;
    font-weight: bold;
    margin: 0 8px;
    padding: 0;
    text-align: center;
    background: none;
    border: none;
    box-shadow: none;
    transition: transform 0.3s ease;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.win {
    color: #1fa807;
}

.loss {
    color: #000000 ;
}

.separator {
    color: rgba(56, 55, 54, 0.3);
    margin: 0 4px;
    transition: transform 0.3s ease;
}

.new-number {
    animation: slideInFromRight 0.3s ease forwards;
}

@keyframes slideInFromRight {
    from {
        opacity: 0;
        transform: translateX(50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.slider-wrap {
    padding: 10px;
    background: linear-gradient(180deg, rgba(0,0,0,0.01), transparent);
    border-radius: 10px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    max-width: 600px;
    margin: 0 auto;
    margin-top: auto;
    margin-bottom: 20px;
}

#chanceSlider {
    width: 100%;
    margin: 0;
}

input[type=range] {
    width: 90%;
    height: 11px;
    border-radius: 6px;
    appearance: none;
    background: linear-gradient(90deg, #000000 0%, #000000 50%, #a0a0a0 50%, #a0a0a0 100%);
    outline: none;
}

input[type=range]::-webkit-slider-thumb {
    appearance: none;
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #000000;
    cursor: pointer;
}

input[type=range]::-moz-range-thumb {
    width: 23px;
    height: 23px;
    border-radius: 50%;
    background: #111;
    border: 3px solid #000000;
    cursor: pointer;
}

.target {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.target .value {
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.result-bubble {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #0ea5e9;
    padding: 6px 10px;
    border-radius: 8px;
    color: #fff;
    font-size: 12px;
    transition: left .35s cubic-bezier(.2,.9,.2,1),background .2s;
}

.result-bubble.win {
    background: #e6e6e6;
}

.result-bubble.lose {
    background: #000000;
}

.roller {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 36px;
    border-radius: 12px;
    background: transparent;
    border: 1px solid rgba(56, 55, 54, 0.14);
}

.jumping {
    height: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
}

.digits {
    display: flex;
    gap: 6px;
}

.digit {
    width: 72px;
    height: 96px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 48px;
    font-weight: 800;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.meta {
    display: flex;
    gap: 10px;
    align-items: center;
}

.payout {
    background: rgba(0, 0, 0, 0.03);
    padding: 8px;
    border-radius: 8px;
    color: #000000;
    text-shadow: var(--text-shadow);
}

.status-buttons {
    display: flex;
    gap: 1px;
    align-items: center;
    top: -6px;
}

.status-btn {
    background: none;
    border: none;
    color: #000000;
    text-shadow: var(--text-shadow);
    font-family: 'Courier New', monospace;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
    padding: 2px 8px;
    transition: all 0.2s ease;
}

.status-btn:hover {
    color: #000000;
    background: rgba(56, 55, 54, 0.1);
    border-radius: 3px;
}

.status-btn:active {
    transform: translateY(1px);
}

.status-bar > .status-buttons {
    transform: translateY(-6px);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    border-collapse: collapse;
}

.stat-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: 8px 10px;
    background: rgba(230, 230, 230, 0.91);
    border: 1px solid rgba(56, 55, 54, 0.2);
    border-width: 0 0 1px 1px;
    min-height: 40px;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
}

.stat-row:nth-child(odd) {
    border-left-width: 1px;
}

.stat-row:nth-last-child(-n+2) {
    border-bottom-width: 1px;
}

.stat-label {
    color: black;
    text-shadow: var(--text-shadow);
    font-weight: bold;
    font-size: 17px;
    white-space: nowrap;
    margin: 0;
    padding: 0;
}

.stat-value {
    font-weight: bold;
    font-size: 17px;
    text-shadow: var(--text-shadow);
    text-align: right;
    white-space: nowrap;
    margin: 0;
    padding: 0;
    min-width: 150px;
    color: #000000;
}

.stat-value.positive {
    color: #1fa807;
    text-shadow: 0 0 5px rgba(56, 55, 54, 0.7);
}

.stat-value.negative {
    color: #ff3333;
    text-shadow: 0 0 5px rgba(255, 51, 51, 0.7);
}

@media (max-width: 768px) {
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-row {
        border-width: 0 1px 1px 1px;
    }
    
    .stat-row:first-child {
        border-top-width: 1px;
    }
}

.stat-history {
    flex: 1;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    width: 100%;
    position: relative;
}

.transparent-bg-element {
}

.transparent-bg-element::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0.25;
    z-index: -1;
}

* {
    color: #000000;
    text-shadow: var(--text-shadow);
}

.skip-btn {
    margin-left: 15px;
    font-size: 40px;
    background: rgba(56, 55, 54, 0.1);
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    color: #d9d9d9;
    cursor: pointer;
    padding: 10px 15px;
    transition: all 0.2s ease;
}

.skip-btn:hover:not(:disabled) {
    background: rgba(56, 55, 54, 0.2);
    transform: scale(1.1);
}

.skip-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

`

  
  // Even simpler: Update existing guess-overlay elements directly
function updateExistingGuessOverlays() {
    // Get all guess-overlay elements
    const guessOverlays = document.querySelectorAll('.guess-overlay');
    
	if (!dark){
    // Update each one
    guessOverlays.forEach(overlay => {
        overlay.style.background = '#3b3a39'; // Gray
        overlay.style.backgroundColor = '#3b3a39'; // Gray
    });
	} else {
		guessOverlays.forEach(overlay => {
        overlay.style.background = '#e8e8e8'; // Gray
        overlay.style.backgroundColor = '#e8e8e8'; // Gray
    });
	}
	
	
}

// Call this function after the HILO section is created
// You can call it in your initialization code
// Wait 1 second for everything to load
  
  function darkorLight(opt){
	  dark = opt
      
	  if(dark){
			const consolepop = document.querySelector('.console-popup');
			consolepop.style.background = "#d1d1d1"
			
			const cardStats = document.getElementById('cardStats');

			// Get ALL elements inside cardStats
			const allElements = cardStats.getElementsByTagName('*');

			// Loop through and change each element
			for (let element of allElements) {
				element.style.color = 'white';
			}
			const controls = document.querySelector('.hilo-game-controls');
			const allElements2 = controls.getElementsByTagName('button');

			// Loop through and change each element
			for (let element2 of allElements2) {
				element2.style.background = '#4f4f4d';
			}
			
			const allCards = document.querySelectorAll('.card-wrapper .card');
   
			// Light theme - white cards
			allCards.forEach(card => {
				card.style.background = '#ffffff';
				card.style.color = '#000000';
			});
			const card1 = document.querySelector('.current-card-display .card');
			card1.classList.replace('black', 'white');
	  } else {
			const consolepop = document.querySelector('.console-popup');
			consolepop.style.background = "#1e1e1e"
			const cardStats = document.getElementById('cardStats');

			// Get ALL elements inside cardStats
			const allElements = cardStats.getElementsByTagName('*');

			// Loop through and change each element
			for (let element of allElements) {
				//element.style.color = 'gray';
			}
			const controls = document.querySelector('.hilo-game-controls');
			const allElements2 = controls.getElementsByTagName('button');

			// Loop through and change each element
			for (let element2 of allElements2) {
				element2.style.background = '#4f4f4d';
			}
			
			
			const allCards = document.querySelectorAll('.card-wrapper .card');
			allCards.forEach(card => {
				card.style.backgroundColor = '#2f3542';
				card.style.color = '#ffffff';
			});

			
				const card1 = document.querySelector('.current-card-display .card');

				// Or using replace() if supported
				card1.classList.replace('white', 'black');

	  }
			/*
	  		const cardStats = document.getElementById('cardStats');

			// Get ALL elements inside cardStats
			const allElements = cardStats.getElementsByTagName('*');

			// Loop through and change each element
			for (let element of allElements) {
				element.style.color = 'white';
			}
			const controls = document.querySelector('.hilo-game-controls');
			const allElements2 = controls.getElementsByTagName('button');

			// Loop through and change each element
			for (let element2 of allElements2) {
				element2.style.background = '#d1d1cf';
			}
			
			const allCards = document.querySelectorAll('.card-wrapper .card');
   
			// Light theme - white cards
			allCards.forEach(card => {
				card.style.background = '#ffffff';
				card.style.color = '#000000';
			});
			const card1 = document.querySelector('.current-card-display .card');
			card1.classList.replace('black', 'white');
			*/
	  
			
	  
	  setTimeout(() => {
    // Try the direct method first
    //setGuessOverlayGrayDirectly();
    
    // Also update any existing elements
    updateExistingGuessOverlays();
		
		// Set up a mutation observer to update new elements
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.addedNodes.length) {
					updateExistingGuessOverlays();
				}
			});
		});
		
		// Start observing the cards container
		const cardsContainer = document.getElementById('cardsContainer');
		if (cardsContainer) {
			observer.observe(cardsContainer, {
				childList: true,
				subtree: true
			});
		}
	}, 300); 
	  
	 
  }


function makeCurrentCardClickable() {
    const currentCardDisplay = document.getElementById('currentCardDisplay');
    
    // Add click event to the display area
    currentCardDisplay.addEventListener('click', function(e) {
        // Don't trigger if clicking on child elements that have their own handlers
        if (e.target.classList.contains('card') || 
            e.target.classList.contains('card-placeholder') ||
            e.target.closest('.card') ||
            this === e.target) {
            running = false;
			manualhilo = true;
            if (!running) {
                // Get random card
				//stop()
                manualhilo = true
                // Reset and show new card
                resetCards();
                //feedCard(startcard, 1, null, null, 1);
                 hiloBet(nextbet, startcard);
                // Log the action
                
                
                // If you want to immediately start a bet with this card
                // Uncomment the line below:
                // if (game === "hilo") hiloBet(nextbet, startcard);
            } else {
                //log("Cannot change card while bot is running");
            }
        }
    });
    
    // Add hover indication
    currentCardDisplay.style.cursor = 'pointer';
    currentCardDisplay.title = "Click to start new game";
}
updateCurrentCardDisplay(startcard, 0, false)
// Call this function after initializing the HILO section
makeCurrentCardClickable();

function handleClick() {
    //console.log('Button clicked!');
	if (!running) {
		
		 const randomCard = drawRandomCard();
                const newStartCard = {
                    rank: randomCard.value, 
                    suit: randomCard.suit === '♠' ? 'S' : 
                          randomCard.suit === '♥' ? 'H' :
                          randomCard.suit === '♦' ? 'D' : 'C'
                };
                
                // Update global startcard variable
                startcard = newStartCard;
         updateCurrentCardDisplay(startcard, 0, false);
    }
}

function feedableKenoResult(selectedNumbers, resultNumbers, risk, payoutMultiplier) {
    
    
    // Store the results in keno variables (should already be 0-39 from API)
    kenoSelectedNumbers = [...selectedNumbers].sort((a, b) => a - b);
    kenoResults = [...resultNumbers].sort((a, b) => a - b);
    kenoLastResults = [...kenoResults];
    
    // Set risk level if valid
    const validRisks = ['low', 'classic', 'medium', 'high'];
    if (validRisks.includes(risk.toLowerCase())) {
        setRiskLevel(risk.toLowerCase());
    } else {
        setRiskLevel('classic');
    }
    
    // Calculate matches
    kenoMatches = kenoSelectedNumbers.filter(num => kenoResults.includes(num)).length;
    kenoDisplayingMatch = true;
    
    // Update all UI elements
    updateKenoSelectionDisplay();
    updateMultipliersRow();
    updateSelectionInfo();
    
    // Display the results - convert to display numbers (1-40)
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (resultNumbersContainer) {
        resultNumbersContainer.innerHTML = '';
        
        kenoResults.forEach((number, index) => {
            
                const resultNumber = document.createElement('div');
                resultNumber.className = 'keno-result-number';
                resultNumber.textContent = number + 1; // Convert 0-39 to 1-40 for display
                
                if (kenoSelectedNumbers.includes(number)) {
                    resultNumber.classList.add('match');
                }
                
                resultNumbersContainer.appendChild(resultNumber);
                
                // Update tile display
                updateKenoSelectionDisplay();
                
                if (index === kenoResults.length - 1) {
                    
                        updateMultipliersRow();
                        //log(`Keno Feed: Selected ${kenoSelectedNumbers.length} numbers, matched ${kenoMatches}. Payout: ${payoutMultiplier}x`);
                    
                }
            
        });
    }
    
    //log(`Keno results fed: ${selectedNumbers.length} selected, ${resultNumbers.length} drawn, ${kenoMatches} matches, ${risk} risk, ${payoutMultiplier}x payout`);
}

// First, update the changegame function to include Keno
let kenoDisplayingMatch = false;

// Add Keno CSS styles
const kenoStyles = document.createElement('style');
kenoStyles.textContent = `
    .keno-section {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 6px;
        padding: 8px;
        margin-bottom: 6px;
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto 6px;
    }

    .keno-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .keno-title {
        color: #c4c1c0;
        text-shadow: var(--text-shadow);
        font-weight: bold;
        font-size: 12px;
        font-family: 'Courier New', monospace;
    }

    .keno-controls {
        display: flex;
        gap: 6px;
    }

    .keno-content-wrapper {
        display: flex;
        gap: 8px;
        align-items: flex-start;
    }

    .keno-board-container {
        flex: 1;
    }

    .keno-board {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 3px;
        background: rgba(59, 58, 57, 0.9);
        padding: 6px;
        border-radius: 5px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 510px;
        height: 300px;
        overflow: hidden;
    }

    .keno-tile {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(91, 90, 89, 0.8);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 2px;
        color: #c4c1c0;
        font-weight: bold;
        font-size: 10px;
        cursor: pointer;
        transition: all 0.15s ease;
        user-select: none;
        min-height: 0;
        min-width: 0;
    }

    .keno-tile:hover {
        background: rgba(196, 193, 192, 0.2);
        transform: scale(1.02);
    }

    .keno-tile.selected {
        background: rgba(178, 79, 232, 0.3);
        border-color: #9f0eed;
        color: #3b82f6;
        box-shadow: 0 0 4px rgba(59, 130, 246, 0.3);
    }

    .keno-tile.winning {
        background: rgba(46, 213, 115, 0.5);
        border-color: #0af26a;
        color: #2ed573;
        box-shadow: 0 0 5px rgba(46, 213, 115, 0.5);
        animation: pulse 1s infinite;
    }

    .keno-tile.result {
        background: rgba(92, 90, 90, 0.3);
        border-color: #7d7a7b;
        color: #ababab;
    }

    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); }
        100% { transform: scale(1); }
    }

    .keno-side-panel {
        width: 180px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .keno-side-buttons {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .keno-btn {
        padding: 8px 10px;
        border: none;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.15s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 100%;
    }

    .keno-btn:hover:not(:disabled) {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-1px);
    }

    .keno-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    .keno-btn.play {
        background: rgba(46, 213, 115, 0.1);
        border-color: #2ed573;
        color: #2ed573;
    }

    .keno-btn.clear {
        background: rgba(255, 71, 87, 0.1);
        border-color: #eb4034;
        color: #ff4757;
    }

    .keno-btn.auto {
        background: rgba(59, 130, 246, 0.1);
        border-color: #3b82f6;
        color: #3b82f6;
    }

    .keno-multipliers-container {
        margin-top: 8px;
    }

    .keno-multipliers {
        margin-bottom: 8px;
        background: rgba(59, 58, 57, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        overflow: hidden;
    }

    .multipliers-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 6px;
        background: rgba(59, 58, 57, 0.95);
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .multipliers-title {
        color: #c4c1c0;
        font-weight: bold;
        font-size: 10px;
    }

    .multipliers-risks {
        display: flex;
        gap: 4px;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 4px;
    }

    .risk-btn {
        padding: 2px 6px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 2px;
        background: rgba(59, 58, 57, 0.8);
        color: rgba(196, 193, 192, 0.7);
        font-size: 11px;
        cursor: pointer;
        transition: all 0.15s ease;
        flex: 1;
        min-width: 40px;
    }

    .risk-btn:hover {
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
    }

    .risk-btn.active {
        background: rgba(59, 130, 246, 0.2);
        border-color: #3b82f6;
        color: #3b82f6;
    }

    .multipliers-row {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        padding: 6px;
        justify-content: center;
        align-items: center;
        min-height: 60px;
    }

    .multiplier-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        padding: 4px 3px;
        background: rgba(59, 58, 57, 0.6);
        border-radius: 3px;
        border: 1px solid rgba(196, 193, 192, 0.1);
        transition: all 0.15s ease;
    }

    .multiplier-item.current-selection {
        background: rgba(59, 130, 246, 0.15);
        border-color: rgba(59, 130, 246, 0.3);
    }

    .multiplier-item.current-match {
        background: rgba(46, 213, 115, 0.2);
        border-color: rgba(46, 213, 115, 0.4);
        transform: scale(1.05);
        box-shadow: 0 0 5px rgba(46, 213, 115, 0.2);
    }

    .hit-count {
        color: rgba(196, 193, 192, 0.9);
        font-size: 9px;
        font-weight: bold;
        margin-bottom: 1px;
    }

    .multiplier-value {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        font-weight: bold;
    }

    .multiplier-amount {
        color: #2ed573;
    }

    .multiplier-amount.zero {
        color: rgba(255, 71, 87, 0.6);
    }

    .multiplier-x {
        color: rgba(196, 193, 192, 0.6);
        font-size: 9px;
        margin-left: 1px;
    }

    .selection-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 4px 0 0 0;
        margin-top: 2px;
        border-top: 1px solid rgba(196, 193, 192, 0.1);
    }

    .selection-text {
        color: rgba(196, 193, 192, 0.7);
        font-size: 8px;
    }

    .current-matches {
        color: #2ed573;
        font-weight: bold;
        font-size: 9px;
        margin-top: 1px;
    }

    .keno-selection-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding: 6px;
        background: rgba(59, 58, 57, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.3);
    }

    .selected-numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        max-width: 60%;
    }

    .selected-number {
        background: rgba(59, 130, 246, 0.2);
        color: #3b82f6;
        padding: 2px 4px;
        border-radius: 2px;
        font-size: 9px;
        font-weight: bold;
        border: 1px solid rgba(59, 130, 246, 0.3);
    }

    .keno-counter {
        font-size: 11px;
        color: #c4c1c0;
        font-weight: bold;
    }

    .keno-counter span {
        color: #3b82f6;
        font-size: 12px;
    }

    .keno-results {
        background: rgba(59, 58, 57, 0.3);
        padding: 8px;
        border-radius: 5px;
        border: 1px solid rgba(196, 193, 192, 0.1);
        margin-bottom: 8px;
    }

    .keno-results-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .keno-results-title {
        color: #c4c1c0;
        font-weight: bold;
        font-size: 11px;
    }

    .keno-result-numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        justify-content: center;
        min-height: 26px;
    }

    .keno-result-number {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 71, 87, 0.2);
        border: 1px solid #ff4757;
        border-radius: 50%;
        color: #ff4757;
        font-weight: bold;
        font-size: 10px;
        animation: resultPop 0.3s ease-out;
    }

    .keno-result-number.match {
        background: rgba(46, 213, 115, 0.3);
        border-color: #2ed573;
        color: #2ed573;
        transform: scale(1.06);
    }

    @keyframes resultPop {
        0% { transform: scale(0); }
        70% { transform: scale(1.06); }
        100% { transform: scale(1); }
    }

    .keno-game-info {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 6px;
        margin-bottom: 8px;
    }

    .keno-info-box {
        background: rgba(59, 58, 57, 0.3);
        padding: 6px;
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.1);
        text-align: center;
    }

    .keno-info-label {
        color: rgba(196, 193, 192, 0.7);
        font-size: 9px;
        margin-bottom: 2px;
    }

    .keno-info-value {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
    }

    .keno-info-value.win {
        color: #2ed573;
    }

    .keno-info-value.lose {
        color: #ff4757;
    }

    .match-indicator {
        background: rgba(46, 213, 115, 0.2);
        color: #2ed573;
        border: 1px solid rgba(46, 213, 115, 0.3);
    }

    /* Dark theme adjustments */
    .dark .keno-tile {
        background: rgba(255, 255, 255, 0.05);
        color: #000000;
    }

    .dark .keno-tile:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    .dark .keno-tile.selected {
        background: rgba(59, 130, 246, 0.2);
        color: #000000;
    }

    .dark .keno-tile.winning {
        background: rgba(10, 242, 106, 0.3);
        color: #000000;
    }

    .dark .keno-tile.result {
        background: rgba(255, 71, 87, 0.2);
        color: #000000;
    }

    .dark .keno-selection-info,
    .dark .keno-results,
    .dark .keno-info-box,
    .dark .keno-multipliers {
        background: rgba(255, 255, 255, 0.05);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .keno-section {
            max-width: 100%;
            padding: 6px;
        }
        
        .keno-content-wrapper {
            flex-direction: column;
        }
        
        .keno-side-panel {
            width: 100%;
        }
        
        .keno-board {
            width: 100%;
            height: 300px;
            max-width: 100%;
            gap: 2px;
            padding: 4px;
        }

        .keno-tile {
            font-size: 9px;
        }

        .multiplier-item {
            min-width: 35px;
            padding: 3px 2px;
        }

        .hit-count {
            font-size: 8px;
        }

        .multiplier-value {
            font-size: 9px;
        }

        .keno-game-info {
            grid-template-columns: repeat(2, 1fr);
        }

        .keno-buttons {
            flex-direction: column;
        }

        .selected-numbers {
            max-width: 50%;
        }
    }

    @media (max-width: 480px) {
        .keno-board {
            grid-template-columns: repeat(4, 1fr);
            grid-template-rows: repeat(10, 1fr);
            height: 400px;
            gap: 1px;
            padding: 3px;
        }

        .keno-tile {
            font-size: 8px;
        }

        .multiplier-item {
            min-width: 30px;
            padding: 2px 1px;
        }

        .hit-count {
            font-size: 7px;
        }

        .multiplier-value {
            font-size: 8px;
        }

        .keno-game-info {
            grid-template-columns: 1fr;
        }

        .selected-numbers {
            max-width: 40%;
        }
    }
`;

document.head.appendChild(kenoStyles);

// Keno Game Variables
let kenoSelectedNumbers = [];
let kenoResults = [];
let kenoLastResults = [];
let kenoGameActive = false;
let kenoMatches = 0;
let currentRiskLevel = 'classic';

// Define risk multipliers based on your template
const riskMultipliers = {
    low: [
        [0.7, 1.85],
        [0, 2, 3.80],
        [0, 1.10, 1.38, 26],
        [0, 0, 2.20, 7.90, 90],
        [0, 0, 1.50, 4.20, 13, 300],
        [0, 0, 1.10, 2, 6.20, 100, 700],
        [0, 0, 1.10, 1.60, 3.50, 15, 225, 700],
        [0, 0, 1.10, 1.50, 2, 5.50, 39, 100, 800],
        [0, 0, 1.10, 1.30, 1.70, 2.50, 7.50, 50, 250, 1000],
        [0, 0, 1.10, 1.20, 1.30, 1.80, 3.50, 13, 50, 250, 1000]
    ],
    classic: [
        [0, 3.96],
        [0, 1.90, 4.50],
        [0, 1.00, 3.10, 10.40],
        [0, 0.80, 1.80, 5.00, 22.5],
        [0, 0.25, 1.40, 4.10, 16.5, 36],
        [0, 0, 1.00, 3.68, 7, 16.5, 40],
        [0, 0, 0.47, 3.00, 4.50, 14, 31, 60],
        [0, 0, 0, 2.20, 4, 13, 22, 55, 70],
        [0, 0, 0, 1.55, 3, 8, 15, 44, 60, 85],
        [0, 0, 0, 1.40, 2.25, 4.5, 8, 17, 50, 80, 100]
    ],
    medium: [
        [0.4, 2.75],
        [0, 1.8, 5.10],
        [0, 0, 2.8, 50],
        [0, 0, 1.7, 10, 100],
        [0, 0, 1.40, 4, 14, 390],
        [0, 0, 0, 3, 9, 180, 710],
        [0, 0, 0, 2, 7, 30, 400, 800],
        [0, 0, 0, 2, 4, 11, 67, 400, 900],
        [0, 0, 0, 2, 2.5, 5, 15, 100, 500, 1000],
        [0, 0, 0, 1.60, 2, 4, 7, 26, 100, 500, 1000]
    ],
    high: [
        [0, 3.96],
        [0, 0, 17.10],
        [0, 0, 0, 81.5],
        [0, 0, 0, 10, 259],
        [0, 0, 0, 4.5, 48, 450],
        [0, 0, 0, 0, 11, 350, 710],
        [0, 0, 0, 0, 7, 90, 400, 800],
        [0, 0, 0, 0, 5, 20, 270, 600, 900],
        [0, 0, 0, 0, 4, 11, 56, 500, 800, 1000],
        [0, 0, 0, 0, 3.5, 8, 13, 63, 500, 800, 1000]
    ]
};

// Create Keno section and add it to the console tab
function createKenoSection() {
    const consoleContent = document.querySelector('#consoleTab .console-content');
    
    // Create Keno section - insert after the top-bar
    const topBar = document.querySelector('.top-bar');
    const kenoSection = document.createElement('div');
    kenoSection.className = 'keno-section';
    kenoSection.style.display = 'none'; // Hidden by default
    kenoSection.innerHTML = `
        <div class="keno-content-wrapper">
            <div class="keno-board-container">
                <div class="keno-board" id="kenoBoard">
                    <!-- Keno tiles (1-40) will be generated here -->
                </div>
                
                <!-- MULTIPLIERS SECTION -->
                <div class="keno-multipliers-container">
                    <div class="keno-multipliers">
                        <div class="multipliers-risks">
                            <button class="risk-btn" data-risk="low">LOW</button>
                            <button class="risk-btn active" data-risk="classic">CLASSIC</button>
                            <button class="risk-btn" data-risk="medium">MEDIUM</button>
                            <button class="risk-btn" data-risk="high">HIGH</button>
                        </div>
                        <div class="multipliers-row" id="kenoMultipliersRow">
                            <!-- Multipliers will be populated here based on selection -->
                            <div class="multiplier-item">
                                <div class="hit-count">0</div>
                                <div class="multiplier-value">
                                    <span class="multiplier-amount zero">0</span>
                                    <span class="multiplier-x">x</span>
                                </div>
                            </div>
                            <div class="multiplier-item">
                                <div class="hit-count">1</div>
                                <div class="multiplier-value">
                                    <span class="multiplier-amount">1.85</span>
                                    <span class="multiplier-x">x</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="keno-side-panel">
                <div class="keno-side-buttons">
                    <button class="keno-btn play" id="kenoPlayBtn">PLAY KENO</button>
                    <button class="keno-btn clear" id="kenoClearBtn">CLEAR SELECTION</button>
                    <button class="keno-btn auto" id="kenoAutoBtn">AUTO SELECT</button>
                </div>
                
                <div class="keno-selection-info">
                    <div class="selected-numbers" id="kenoSelectedNumbers">
                        <div class="selected-number">No numbers selected</div>
                    </div>
                    <div class="keno-counter">
                        Selected: <span id="kenoSelectedCount">0</span>/10
                    </div>
                </div>
                
                <div class="keno-results">
                    <div class="keno-results-header">
                        <div class="keno-results-title">WINNING NUMBERS</div>
                    </div>
                    <div class="keno-result-numbers" id="kenoResultNumbers">
                        <div class="keno-result-number">-</div>
                    </div>
                </div>
                
                <div class="keno-game-info">
                    <div class="keno-info-box">
                        <div class="keno-info-label">MATCHES</div>
                        <div class="keno-info-value" id="kenoCurrentMatches">0</div>
                    </div>
                    <div class="keno-info-box">
                        <div class="keno-info-label">SELECTED</div>
                        <div class="keno-info-value" id="kenoCurrentSelection">0</div>
                    </div>
                    <div class="keno-info-box">
                        <div class="keno-info-label">RISK</div>
                        <div class="keno-info-value" id="kenoCurrentRisk">CLASSIC</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert after the top bar
    topBar.parentNode.insertBefore(kenoSection, topBar.nextSibling);
    
    // Initialize Keno board
    initializeKenoBoard();
    
    // Initialize multipliers row for 0 selected (default)
    updateMultipliersRow();
    
    // Update selection info
    updateSelectionInfo();
    
    // Add event listeners
    document.getElementById('kenoClearBtn')?.addEventListener('click', clearKenoSelection);
    document.getElementById('kenoPlayBtn')?.addEventListener('click', playKenoGame);
    document.getElementById('kenoAutoBtn')?.addEventListener('click', autoSelectKenoNumbers);
    
    // Add event listeners for risk buttons
    document.querySelectorAll('.risk-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            setRiskLevel(this.dataset.risk);
        });
    });
}

// Set risk level and update multipliers
function setRiskLevel(risk) {
    currentRiskLevel = risk;
    
    // Update active button
    document.querySelectorAll('.risk-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.risk === risk);
    });
    
    // Update risk display
    const riskElement = document.getElementById('kenoCurrentRisk');
    if (riskElement) {
        riskElement.textContent = risk.toUpperCase();
    }
    
    // Update multipliers row
    updateMultipliersRow();
}

// Update multipliers row based on current risk level and selected tiles
function updateMultipliersRow() {
    const multipliersRow = document.getElementById('kenoMultipliersRow');
    if (!multipliersRow) return;
    
    const selectedCount = kenoSelectedNumbers.length;
    const multipliers = riskMultipliers[currentRiskLevel];
    
    multipliersRow.innerHTML = '';
    
    // Only show multipliers if we have a selection
    if (selectedCount > 0 && selectedCount <= 10) {
        const currentMultipliers = multipliers[selectedCount - 1];
        
        // Create multiplier items for all possible hits (0 to selectedCount)
        for (let hitCount = 0; hitCount < currentMultipliers.length; hitCount++) {
            const multiplierItem = document.createElement('div');
            multiplierItem.className = 'multiplier-item';
            multiplierItem.dataset.hitCount = hitCount;
            
            // Get multiplier value
            const multiplierValue = currentMultipliers[hitCount];
            
            // Add hit count
            const hitCountElement = document.createElement('div');
            hitCountElement.className = 'hit-count';
            hitCountElement.textContent = hitCount;
            
            // Add multiplier value with "x"
            const multiplierValueElement = document.createElement('div');
            multiplierValueElement.className = 'multiplier-value';
            
            const amountSpan = document.createElement('span');
            amountSpan.className = multiplierValue === 0 ? 'multiplier-amount zero' : 'multiplier-amount';
            
            // Format multiplier value
            if (multiplierValue === 0) {
                amountSpan.textContent = '0';
            } else if (multiplierValue >= 1000) {
                amountSpan.textContent = multiplierValue.toFixed(0);
            } else if (multiplierValue >= 100) {
                amountSpan.textContent = multiplierValue.toFixed(1);
            } else if (multiplierValue >= 10) {
                amountSpan.textContent = multiplierValue.toFixed(2);
            } else {
                amountSpan.textContent = multiplierValue.toFixed(2);
            }
            
            const xSpan = document.createElement('span');
            xSpan.className = 'multiplier-x';
            xSpan.textContent = 'x';
            
            multiplierValueElement.appendChild(amountSpan);
            multiplierValueElement.appendChild(xSpan);
            
            multiplierItem.appendChild(hitCountElement);
            multiplierItem.appendChild(multiplierValueElement);
            
            // Highlight current match count only when displaying results
            if (kenoDisplayingMatch && hitCount === kenoMatches) {
                multiplierItem.classList.add('current-match');
            }
            
            multipliersRow.appendChild(multiplierItem);
        }
    } else {
        // Show default/placeholder when no selection
        const placeholder = document.createElement('div');
        placeholder.className = 'multiplier-item';
        placeholder.style.width = '100%';
        placeholder.style.textAlign = 'center';
        placeholder.style.padding = '12px';
        placeholder.style.color = 'rgba(196, 193, 192, 0.7)';
        placeholder.style.fontSize = '10px';
        placeholder.textContent = 'Select 1-10 tiles to see multipliers';
        multipliersRow.appendChild(placeholder);
    }
}

// Update selection info display
function updateSelectionInfo() {
    const currentSelectionElement = document.getElementById('kenoCurrentSelection');
    const currentMatchesElement = document.getElementById('kenoCurrentMatches');
    
    if (currentSelectionElement) {
        currentSelectionElement.textContent = kenoSelectedNumbers.length;
    }
    
    if (currentMatchesElement) {
        currentMatchesElement.textContent = kenoMatches;
        currentMatchesElement.className = kenoMatches > 0 ? 'keno-info-value win' : 'keno-info-value';
    }
}

// Initialize Keno board with 40 tiles
function initializeKenoBoard() {
    const kenoBoard = document.getElementById('kenoBoard');
    if (!kenoBoard) return;
    
    kenoBoard.innerHTML = '';
    
    // Create 40 tiles - display 1-40 but store 0-39 internally
    for (let i = 0; i < 40; i++) {
        const tile = document.createElement('div');
        tile.className = 'keno-tile';
        tile.textContent = i + 1; // Display 1-40 to user
        tile.dataset.number = i; // Store 0-39 internally
        
        tile.addEventListener('click', () => toggleKenoNumber(i));
        
        kenoBoard.appendChild(tile);
    }
    
    updateKenoSelectionDisplay();
}

// Toggle number selection
function toggleKenoNumber(number) {
    if (kenoGameActive) return;
    
    const index = kenoSelectedNumbers.indexOf(number);
    
    if (index === -1) {
        // Add number if not already selected and less than 10
        if (kenoSelectedNumbers.length < 10) {
            kenoSelectedNumbers.push(number);
            kenoSelectedNumbers.sort((a, b) => a - b);
        }
    } else {
        // Remove number if already selected
        kenoSelectedNumbers.splice(index, 1);
    }
    
    updateKenoSelectionDisplay();
    updateMultipliersRow();
    updateSelectionInfo();
}



// Update Keno selection display
function updateKenoSelectionDisplay() {
    const selectedNumbersContainer = document.getElementById('kenoSelectedNumbers');
    const selectedCountElement = document.getElementById('kenoSelectedCount');
    const kenoBoard = document.getElementById('kenoBoard');
    
    if (!selectedNumbersContainer || !selectedCountElement || !kenoBoard) return;
    
    // Update selected count
    const count = kenoSelectedNumbers.length;
    selectedCountElement.textContent = count;
    
    // Update selected numbers display - show display numbers (1-40)
    if (count === 0) {
        selectedNumbersContainer.innerHTML = '<div class="selected-number">No numbers selected</div>';
    } else {
        selectedNumbersContainer.innerHTML = kenoSelectedNumbers
            .map(num => `<div class="selected-number">${num + 1}</div>`) // Convert 0-39 to 1-40 for display
            .join('');
    }
    
    // Update tile states
    const tiles = kenoBoard.querySelectorAll('.keno-tile');
    tiles.forEach(tile => {
        const tileNumber = parseInt(tile.dataset.number); // This is 0-39
        
        // Remove all state classes
        tile.classList.remove('selected', 'winning', 'result');
        
        // Add selected class if number is selected
        if (kenoSelectedNumbers.includes(tileNumber)) {
            tile.classList.add('selected');
        }
        
        // Add result classes if we have results
        if (kenoResults.includes(tileNumber)) {
            if (kenoSelectedNumbers.includes(tileNumber)) {
                tile.classList.add('winning');
            } else {
                tile.classList.add('result');
            }
        }
    });
    
    // Update play button state
    const playBtn = document.getElementById('kenoPlayBtn');
    if (playBtn) {
        playBtn.disabled = count === 0 || kenoGameActive;
    }
}

// Clear Keno selection
function clearKenoSelection() {
    if (kenoGameActive) return;
    
    kenoSelectedNumbers = []; // Already 0-39 compatible
    kenoMatches = 0;
    kenoResults = [];
    kenoDisplayingMatch = false;
    
    updateKenoSelectionDisplay();
    updateMultipliersRow();
    updateSelectionInfo();
    
    // Clear results display
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (resultNumbersContainer) {
        resultNumbersContainer.innerHTML = '<div class="keno-result-number">-</div>';
    }
}
// Auto-select random Keno numbers
function autoSelectKenoNumbers() {
    if (kenoGameActive) return;
    
    // Clear existing selection
    kenoSelectedNumbers = [];
    kenoMatches = 0;
    kenoResults = [];
    kenoDisplayingMatch = false;
    
    // Select random number of numbers (1-10)
    const numToSelect = 10;
    
    // Create array of all possible numbers (0-39)
    const allNumbers = Array.from({ length: 40 }, (_, i) => i);
    
    // Shuffle array and take first numToSelect numbers
    for (let i = allNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allNumbers[i], allNumbers[j]] = [allNumbers[j], allNumbers[i]];
    }
    
    kenoSelectedNumbers = allNumbers.slice(0, numToSelect).sort((a, b) => a - b);
    updateKenoSelectionDisplay();
    updateMultipliersRow();
    updateSelectionInfo();
    
    // Clear results display
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (resultNumbersContainer) {
        resultNumbersContainer.innerHTML = '<div class="keno-result-number">-</div>';
    }
}

// Play Keno game
function playKenoGame() {
	if(running) return;
    if (kenoSelectedNumbers.length === 0 || kenoGameActive) return;
    
    // Get bet amount from your system
    const betamount = nextbet;
    const numbers = [...kenoSelectedNumbers]; // Already 0-39 internally
    const risk = currentRiskLevel;
    
    // Call your kenobet function with 0-39
    kenobet(nextbet, numbers, risk);
    
    // Keep UI disabled while waiting for result
    kenoGameActive = true;
    document.getElementById('kenoPlayBtn').disabled = true;
    document.getElementById('kenoClearBtn').disabled = true;
    document.getElementById('kenoAutoBtn').disabled = true;
    
    // Log display numbers (1-40) for user feedback
    const displayNumbers = numbers.map(n => n + 1).join(', ');
    //log(`Placing Keno bet: ${numbers.length} numbers (${displayNumbers}), ${risk} risk, ${formatCurrency(betamount)}`);
}


// Animate Keno results display
function animateKenoResults() {
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (!resultNumbersContainer) return;
    
    // Clear container
    resultNumbersContainer.innerHTML = '';
    
    // Display each result number with delay
    kenoResults.forEach((number, index) => {
        
        const resultNumber = document.createElement('div');
        resultNumber.className = 'keno-result-number';
        resultNumber.textContent = number;
        
        // Check if this is a match with selected numbers
        if (kenoSelectedNumbers.includes(number)) {
            resultNumber.classList.add('match');
        }
        
        resultNumbersContainer.appendChild(resultNumber);
        
        // Update tile display
        updateKenoSelectionDisplay();
        
        // If this is the last result, set displaying match flag and update
        if (index === kenoResults.length - 1) {
            setTimeout(() => {
                kenoDisplayingMatch = true; // Set flag to show current match
                updateMultipliersRow(); // Update with current match highlight
                finalizeKenoGame();
            }, 1); // Small delay after last number appears
        } // 100ms delay between each number
    });
}

// Finalize Keno game
function finalizeKenoGame() {
    // Update multipliers row with current match highlight
    updateMultipliersRow();
    updateSelectionInfo();
    
    // Re-enable buttons
    document.getElementById('kenoPlayBtn').disabled = false;
    document.getElementById('kenoClearBtn').disabled = false;
    document.getElementById('kenoAutoBtn').disabled = false;
    
    kenoGameActive = false;
    
    // Log the result
    //log(`Keno: Selected ${kenoSelectedNumbers.length} numbers, matched ${kenoMatches}. ${kenoMatches > 0 ? 'WIN!' : 'LOSE'}`);
}

// Calculate Keno payout based on current risk level
function calculateKenoPayout(matches, numbersSelected) {
    if (numbersSelected < 1 || numbersSelected > 10) return 0;
    
    const multipliers = riskMultipliers[currentRiskLevel];
    if (numbersSelected - 1 < multipliers.length && matches < multipliers[numbersSelected - 1].length) {
        return multipliers[numbersSelected - 1][matches];
    }
    
    return 0;
}

// Clear Keno results display
function clearKenoResultsDisplay() {
    const resultNumbersContainer = document.getElementById('kenoResultNumbers');
    if (resultNumbersContainer) {
        resultNumbersContainer.innerHTML = '<div class="keno-result-number">-</div>';
    }
}

// Update Keno for dark theme
function updateKenoForDarkTheme() {
    const kenoSection = document.querySelector('.keno-section');
    if (!kenoSection) return;
    
    if (dark) {
        kenoSection.classList.add('dark');
    } else {
        kenoSection.classList.remove('dark');
    }
}

// Initialize Keno when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create Keno section
    createKenoSection();
    
    // Add Keno to available functions
    availableFunctions['keno'] = () => {
        changegame('keno');
        return 'Switched to Keno game';
    };
    
    // Add feedable function to available functions
    availableFunctions['feedKeno'] = (selectedNumbers, resultNumbers, risk, payoutMultiplier) => {
        // Parse arrays if they're strings
        let selectedArr, resultArr;
        
        try {
            selectedArr = Array.isArray(selectedNumbers) ? selectedNumbers : JSON.parse(selectedNumbers);
            resultArr = Array.isArray(resultNumbers) ? resultNumbers : JSON.parse(resultNumbers);
        } catch (e) {
            return 'Error: Invalid array format. Use [1,2,3] format.';
        }
        
        feedableKenoResult(selectedArr, resultArr, risk, payoutMultiplier);
        return `Keno results fed: ${selectedArr.length} selected, ${resultArr.length} drawn`;
    };
    
    // Update Keno display when theme changes
    
});

function displayToInternalNumber(displayNum) {
    // Convert 1-40 to 0-39
    return displayNum - 1;
}

function internalToDisplayNumber(internalNum) {
    // Convert 0-39 to 1-40
    return internalNum + 1;
}
// Also call createKenoSection when your bot initializes
//setTimeout(createKenoSection, 100);
createKenoSection();
// Replace the existing minesStyles and createMinesSection functions with these corrected versions:


const minesStyles = document.createElement('style');
minesStyles.textContent = `
    .mines-section {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 6px;
        padding: 8px;
        margin-bottom: 6px;
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto 6px;
    }

    .mines-content-wrapper {
        display: flex;
        gap: 15px;
        align-items: flex-start;
    }

    .mines-left-panel {
        flex: 1;
    }

    .mines-right-panel {
        width: 200px;
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .mines-board {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 4px;
        background: rgba(59, 58, 57, 0.9);
        padding: 8px;
        border-radius: 5px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 300px;
        height: 300px;
        margin: 0 auto;
    }

    .mines-tile {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(91, 90, 89, 0.8);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 4px;
        color: #c4c1c0;
        font-weight: bold;
        font-size: 14px;
        cursor: pointer;
        transition: all 0.2s ease;
        user-select: none;
        position: relative;
        min-height: 50px;
    }

    .mines-tile:hover:not(.revealed):not(.mine):not(.gem) {
        background: rgba(196, 193, 192, 0.2);
        transform: scale(1.02);
    }

    .mines-tile.selected {
        background: rgba(59, 130, 246, 0.3);
        border-color: #3b82f6;
        color: #3b82f6;
        box-shadow: 0 0 4px rgba(59, 130, 246, 0.3);
    }

    .mines-tile.revealed {
        background: rgba(59, 58, 57, 0.6);
        border-color: rgba(196, 193, 192, 0.2);
        cursor: default;
    }

    .mines-tile.mine {
        background: rgba(255, 71, 87, 0.5) !important;
        border-color: #ff4757 !important;
        color: #ff4757;
        animation: minePulse 0.5s ease-in-out;
    }

    .mines-tile.mine::before {
        content: "X";
        font-size: 18px;
        font-weight: bold;
    }

    .mines-tile.gem {
        background: rgba(46, 213, 115, 0.5) !important;
        border-color: #2ed573 !important;
        color: #2ed573;
    }

    .mines-tile.gem::before {
        content: "✓";
        font-size: 18px;
        font-weight: bold;
    }

    @keyframes minePulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }

    .mines-tile .tile-number {
        font-size: 12px;
        color: rgba(196, 193, 192, 0.8);
        position: absolute;
        top: 2px;
        left: 4px;
    }

    .mines-side-buttons {
        display: flex;
        flex-direction: column;
        gap: 6px;
    }

    .mines-btn {
        padding: 8px 10px;
        border: none;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.15s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 100%;
    }

    .mines-btn:hover:not(:disabled) {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-1px);
    }

    .mines-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    .mines-btn.play {
        background: rgba(46, 213, 115, 0.1);
        border-color: #2ed573;
        color: #2ed573;
    }

    .mines-btn.clear {
        background: rgba(255, 71, 87, 0.1);
        border-color: #ff4757;
        color: #ff4757;
    }

    .mines-btn.cashout {
        background: rgba(255, 184, 46, 0.1);
        border-color: #ffb82e;
        color: #ffb82e;
    }

    .mines-settings {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        margin-bottom: 8px;
    }

    .mines-setting {
        display: flex;
        flex-direction: column;
        gap: 2px;
    }

    .mines-setting label {
        color: rgba(196, 193, 192, 0.7);
        font-size: 9px;
    }

    .mines-setting select,
    .mines-setting input {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 3px;
        color: #c4c1c0;
        padding: 4px 6px;
        font-size: 10px;
        outline: none;
    }

    .mines-setting select:focus,
    .mines-setting input:focus {
        border-color: #3b82f6;
    }

    .mines-multiplier-display {
        font-size: 24px;
        font-weight: bold;
        color: #ffb82e;
        text-shadow: 0 0 10px rgba(255, 184, 46, 0.5);
        text-align: center;
        margin: 15px 0;
        padding: 10px;
        background: rgba(59, 58, 57, 0.3);
        border-radius: 6px;
        border: 1px solid rgba(255, 184, 46, 0.3);
    }

    .mines-selected-display {
        margin-top: 8px;
        max-height: 100px;
        overflow-y: auto;
    }

    .mines-selected-numbers {
        display: flex;
        flex-wrap: wrap;
        gap: 3px;
        margin-top: 4px;
    }

    .mines-selected-number {
        background: rgba(59, 130, 246, 0.2);
        color: #3b82f6;
        padding: 2px 6px;
        border-radius: 3px;
        font-size: 10px;
        font-weight: bold;
        border: 1px solid rgba(59, 130, 246, 0.3);
    }

    /* Dark theme adjustments */
    .dark .mines-tile {
        background: rgba(255, 255, 255, 0.05);
        color: #000000;
    }

    .dark .mines-tile:hover:not(.revealed):not(.mine):not(.gem) {
        background: rgba(0, 0, 0, 0.1);
    }

    .dark .mines-tile.selected {
        background: rgba(59, 130, 246, 0.2);
        color: #000000;
    }

    .dark .mines-tile.revealed {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .mines-tile.mine {
        background: rgba(255, 71, 87, 0.5) !important;
        color: #ff4757 !important;
    }

    .dark .mines-multiplier-display {
        background: rgba(255, 255, 255, 0.05);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .mines-section {
            max-width: 100%;
            padding: 6px;
        }
        
        .mines-content-wrapper {
            flex-direction: column;
        }
        
        .mines-right-panel {
            width: 100%;
        }
        
        .mines-board {
            width: 280px;
            height: 280px;
            gap: 3px;
            padding: 6px;
        }

        .mines-tile {
            min-height: 45px;
            font-size: 12px;
        }

        .mines-tile .tile-number {
            font-size: 10px;
        }

        .mines-settings {
            grid-template-columns: 1fr;
        }
    }

    @media (max-width: 480px) {
        .mines-board {
            width: 250px;
            height: 250px;
            gap: 2px;
            padding: 4px;
        }

        .mines-tile {
            min-height: 40px;
            font-size: 11px;
        }

        .mines-tile .tile-number {
            font-size: 9px;
        }

        .mines-btn {
            font-size: 10px;
            padding: 6px 8px;
        }
    }
	
	.mines-tile.mine {
        background: rgba(255, 71, 87, 0.5) !important;
        border-color: #ff4757 !important;
        color: #ff4757;
        animation: minePulse 0.5s ease-in-out;
    }

    .mines-tile.mine.clicked {
        background: rgba(217, 9, 9, 0.3) !important; /* Dark red for clicked bomb */
        border-color: #e65757 !important;
        color: #ff4757;
        animation: clickedMinePulse 0.5s ease-in-out;
    }

    @keyframes clickedMinePulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.2); }
        100% { transform: scale(1); }
    }
	


`;

document.head.appendChild(minesStyles);

/// Mines Game Variables
let minesSelectedNumbers = [];
let minesGameActive = false;
let minesRevealedCount = 0;
let currentMinesCount = 3;
let currentMinesMultiplier = 1.0;
let minesGameResult = null;
let minesBetActive = false;
let minesBoardState = Array(25).fill('hidden');
let actualMinePositions = [];
let lastClickedMine = null;
let currentGameIdentifier = null;
let isWaitingForResponse = false;


// Create Mines section and add it to the console tab
function createMinesSection() {
    const consoleContent = document.querySelector('#consoleTab .console-content');
    
    const topBar = document.querySelector('.top-bar');
    const minesSection = document.createElement('div');
    minesSection.className = 'mines-section';
    minesSection.style.display = 'none';
    minesSection.innerHTML = `
        <div class="mines-content-wrapper">
            <div class="mines-left-panel">
                <div class="mines-board" id="minesBoard"></div>
            </div>
            
            <div class="mines-right-panel">
                <div class="mines-multiplier-display" id="minesCurrentMultiplier">1.0000x</div>
                
                <div class="mines-settings">
                    <div class="mines-setting">
                        <select id="minesCount">
                            ${Array.from({length: 24}, (_, i) => 
                                `<option value="${i + 1}" ${i + 1 === 1 ? 'selected' : ''}>${i + 1} Mine${i + 1 > 1 ? 's' : ''}</option>`
                            ).join('')}
                        </select>
                    </div>
                </div>
                
                <div class="mines-side-buttons">
                    <button class="mines-btn play" id="minesPlayBtn">PICK RANDOM</button>
                    <button class="mines-btn cashout" id="minesCashoutBtn">CASHOUT</button>
                    <button class="mines-btn clear" id="minesClearBtn">PLACE BET</button>
                </div>
                
                <div class="mines-selected-display">
                    <div class="mines-info-label">SELECTED TILES</div>
                    <div class="mines-selected-numbers" id="minesSelectedNumbers">
                        <div class="mines-selected-number">None</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    topBar.parentNode.insertBefore(minesSection, topBar.nextSibling);
    
    initializeMinesBoard();
    updateMinesBoardDisplay();
    // Add event listeners
    document.getElementById('minesClearBtn')?.addEventListener('click', startMines);
    document.getElementById('minesPlayBtn')?.addEventListener('click', pickRandomTile);
    document.getElementById('minesCashoutBtn')?.addEventListener('click', minesCashout);
    document.getElementById('minesCount')?.addEventListener('change', function() {
        currentMinesCount = parseInt(this.value);
        //completeGameReset();
    });
}
// Calculate multiplier for Mines game
let usedNumbers = [];
const totalNumbers = 25;

function generateUniqueRandom() {
    // Reset if all numbers have been used
    if (usedNumbers.length >= totalNumbers) {
        usedNumbers = [];
    }
    
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * totalNumbers) + 1; // 1-25
    } while (usedNumbers.includes(randomNumber));
    
    usedNumbers.push(randomNumber);
    return randomNumber;
}

function pickRandomTile() { 
	if(running) return;
	const minesDiv = document.querySelectorAll('.mines-tile.mine');
	if (minesDiv.length > 0) {
		return;
	}
	if(usedNumbers.length > 24){
		//console.log('all numbers picked')
		return;
	}
    // Pick a random hidden tile
    const randomIndex = generateUniqueRandom() - 1;
	
	
    const tileIndex = randomIndex;
    
    // Temporarily show a "loading" state on the tile
    const tile = document.querySelector(`.mines-tile[data-index="${tileIndex}"]`);
    if (tile) {
        tile.classList.add('selected');
        tile.style.opacity = '0.7';
    }
  
    // Call minesNext with selected field (1-25 format)
    minesNext([tileIndex]);
}

// Update Mines board display based on current state





// Initialize Mines board with 25 tiles (1-25)
function initializeMinesBoard() {
    const minesBoard = document.getElementById('minesBoard');
    if (!minesBoard) return;
    
    minesBoard.innerHTML = '';
    
    for (let i = 0; i < 25; i++) {
        const tile = document.createElement('div');
        tile.className = 'mines-tile';
        tile.dataset.index = i;
        tile.dataset.number = i + 1;
        
        const tileNumber = document.createElement('div');
        tileNumber.className = 'tile-number';
        tileNumber.textContent = i + 1;
        tile.appendChild(tileNumber);
        
        // Add click event directly
        
        
        minesBoard.appendChild(tile);
    }
	
	const minesSelect = document.getElementById("minesCount");
	//let mines = parseInt(minesSelect.value);

	minesSelect.addEventListener("change", () => {
		mines = parseInt(minesSelect.value);
	});
    

}

function startMines() {
		if(running) return;
		minesStart(nextbet, mines);
   

}

// Update Mines board display based on current state


function handleTileClick(event) {
    
    const tile = event.currentTarget;
    const tileIndex = parseInt(tile.dataset.index);
    
    
    
    // Don't allow clicking on revealed tiles
    if (tile.classList.contains('revealed') || tile.classList.contains('gem') || 
        tile.classList.contains('mine')) {
        
        return;
    }
    
    // Add selected class immediately
    tile.classList.add('selected');

    
    // Add a visual indicator immediately
    tile.style.opacity = '0.7';
    
    // Get tile position (1-25)
    const tilePosition = tileIndex;
    usedNumbers.push(tilePosition);
    
    // Call minesNext with selected field
    minesNext([tilePosition]);
    

}

// Update Mines board display based on current state

function updateMinesBoardDisplay() {
    const minesBoard = document.getElementById('minesBoard');
    if (!minesBoard) return;
    
    usedNumbers = [];
    const tiles = minesBoard.querySelectorAll('.mines-tile');
    tiles.forEach((tile, index) => {
        // Save if this tile was just clicked/selected
        const wasSelected = tile.classList.contains('selected');
        
        // Remove all classes except tile-number
        tile.className = 'mines-tile';
        tile.style.opacity = '1';
        tile.style.backgroundColor = ''; // Reset debug color
        tile.dataset.index = index;
        tile.dataset.number = index + 1;
        
        // Ensure tile number exists
        let tileNumber = tile.querySelector('.tile-number');
        if (!tileNumber) {
            tileNumber = document.createElement('div');
            tileNumber.className = 'tile-number';
            tileNumber.textContent = index + 1;
            tile.innerHTML = '';
            tile.appendChild(tileNumber);
        } else {
            tileNumber.textContent = index + 1;
        }
        
        // Remove existing click event
        tile.addEventListener('click', handleTileClick);
        
        // Update based on state
        const state = minesBoardState[index];
        if (state === 'gem') {
            tile.classList.add('gem', 'revealed');
        } else if (state === 'mine') {
            tile.classList.add('mine', 'revealed');
        } else if (state === 'mine-clicked') {
            tile.classList.add('mine', 'clicked', 'revealed');
        } else if (minesBetActive && minesGameActive && minesGameResult === null) {
            // Hidden tile - make clickable if game is active and not ended
            
            // If this tile was just selected, keep the selected class
            if (wasSelected) {
               
                tile.classList.add('selected');
                tile.style.opacity = '0.7';
            }
            
            
        }
    });
}


// Initialize Mines when the page loads

createMinesSection();

function completeGameReset() {
    minesSelectedNumbers = [];
    minesGameActive = false;
    minesRevealedCount = 0;
    minesGameResult = null;
    minesBetActive = false;
    minesBoardState = Array(25).fill('hidden');
    actualMinePositions = [];
    
    // Reset UI
    document.getElementById('minesPlayBtn').disabled = false;
    document.getElementById('minesCashoutBtn').disabled = false;
    document.getElementById('minesClearBtn').disabled = false;
    
    updateMinesBoardDisplay()
}
// Helper function to manually trigger UI update (call this when you get API response)
function updateMinesUIFromResponse(response) {
    if (!response) {
		console.log('noo resp')
        return;
    }
	
	let resp = response.minesBet || response.minesNext || response.minesCashout || response.user.activeCasinoBet
	
	let rounds = resp.state.rounds;
	let mines = resp.state.mines;

	const multiplierElement = document.getElementById("minesCurrentMultiplier");
	multiplierElement.textContent = rounds[rounds.length - 1].payoutMultiplier.toFixed(4) + "x"

	if (!resp.active){
		
	}

	if (Array.isArray(mines)) {
		const tiles = minesBoard.querySelectorAll('.mines-tile');
		tiles.forEach((tile, index) => {
			tile.removeEventListener('click', handleTileClick);
		});
		
		// Add 'mine' or 'mine revealed' to each field in rounds
		rounds.forEach(round => {
			const fieldNumber = round.field;
			const tile = document.querySelector(`.mines-tile[data-index="${fieldNumber}"]`);
			if (!tile) return;

			if (mines.includes(fieldNumber)) {
				tile.classList.add('mine', 'clicked', 'revealed'); 
			} else {
				 // Clicked but not a mine
				
			}
		});

		// Add 'mine' to non-matching tiles (mines that were not revealed)
		mines.forEach(mineField => {
			// Skip already revealed tiles
			const alreadyRevealed = rounds.some(r => r.field === mineField);
			if (alreadyRevealed) return;

			const tile = document.querySelector(`.mines-tile[data-index="${mineField}"]`);
			if (!tile) return;

			tile.classList.add('mine'); // Non-revealed mine
		});
		
		rounds.forEach(round => {
			const { field, payoutMultiplier } = round;
			const tile = document.querySelector(`.mines-tile[data-index="${field}"]`);
			if (!tile) return;

			// Check if payoutMultiplier is greater than 1
			if (payoutMultiplier >= 1) {
				tile.classList.add('gem', 'revealed');
			}
		});
		
	} else {
		rounds.forEach(round => {
			const { field, payoutMultiplier } = round;
			const tile = document.querySelector(`.mines-tile[data-index="${field}"]`);
			if (!tile) return;

			// Check if payoutMultiplier is greater than 1
			if (payoutMultiplier >= 1) {
				tile.classList.add('gem', 'revealed');
			}
		});
		
	}
}

// Updated Baccarat CSS styles
const baccaratStyles = document.createElement('style');
baccaratStyles.textContent = `
    .baccarat-section {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 6px;
        padding: 8px;
        margin-bottom: 6px;
        position: relative;
        width: 100%;
        max-width: 800px;
        margin: 0 auto 6px;
    }

    .baccarat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .baccarat-title {
        color: #c4c1c0;
        text-shadow: var(--text-shadow);
        font-weight: bold;
        font-size: 12px;
        font-family: 'Courier New', monospace;
    }

    .baccarat-game-area {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .baccarat-betting-area {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
    }

    .betting-option {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 8px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s ease;
        position: relative;
    }

    .betting-option:hover {
        background: rgba(196, 193, 192, 0.1);
        transform: translateY(-2px);
    }

    .betting-option.active {
        background: rgba(59, 130, 246, 0.2);
        border-color: #3b82f6;
        box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
    }

    .betting-option.active.player-bet {
        background: rgba(59, 130, 246, 0.2);
        border-color: #3b82f6;
        box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
    }

    .betting-option.active.banker-bet {
        background: rgba(59, 130, 246, 0.2);
        border-color: #3b82f6;
        box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
    }

    .betting-option.active.tie-bet {
        background: rgba(255, 165, 0, 0.2); 
        border-color: #ffa500;
        box-shadow: 0 0 8px rgba(255, 165, 0, 0.3);
    }

    .betting-option.winner {
        background: rgba(46, 213, 115, 0.3);
        border-color: #2ed573;
        box-shadow: 0 0 10px rgba(46, 213, 115, 0.5);
    }

    .betting-option .option-label {
        color: #c4c1c0;
        font-size: 12px;
        font-weight: bold;
        margin-bottom: 4px;
    }

    .betting-option .option-payout {
        color: #2ed573;
        font-size: 11px;
        font-weight: bold;
    }

    .betting-option .bet-amount {
        position: absolute;
        top: 4px;
        right: 4px;
        background: rgba(0, 0, 0, 0.6);
        color: #c4c1c0;
        font-size: 10px;
        padding: 2px 4px;
        border-radius: 3px;
        display: none;
    }

    .betting-option.active .bet-amount {
        display: block;
    }

    .cards-display-area {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 10px;
    }

    .player-area, .banker-area {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
    }

    .player-area.active {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    .banker-area.active {
        border-color: #ff4757;
        background: rgba(255, 71, 87, 0.1);
    }

    /* Remove the area winner classes */
    .player-area.winner,
    .banker-area.winner {
        background: rgba(59, 58, 57, 0.9);
        border-color: rgba(196, 193, 192, 0.3);
        box-shadow: none;
    }

    .area-label {
        color: #c4c1c0;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        text-transform: uppercase;
    }

    .cards-container {
        display: flex;
        gap: 5px;
        min-height: 100px;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 5px;
        border-radius: 4px;
        border: 1px solid transparent;
        transition: all 0.3s ease;
    }

    /* Only color the cards container for winner */
    .cards-container.winner {
        background: rgba(46, 213, 115, 0.15);
        border-color: #2ed573;
        box-shadow: 0 0 10px rgba(46, 213, 115, 0.3);
    }

    /* HiLo-style cards */
    .baccarat-card {
        width: 60px;
        height: 80px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
        border: 2px solid rgba(255, 255, 255, 0.1);
        position: relative;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .baccarat-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        border-radius: 6px;
        z-index: 1;
    }

    .baccarat-card.new {
        animation: cardDeal 0.5s ease-out;
    }

    @keyframes cardDeal {
        0% {
            opacity: 0;
            transform: translateY(-20px) rotate(-5deg);
        }
        100% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
        }
    }

    /* HiLo-style card colors */
    .baccarat-card.red {
        background: linear-gradient(135deg, #ff3b3b, #ff6b6b);
        border-color: #ff9999;
    }

    .baccarat-card.black {
        background: linear-gradient(135deg, #1a1a1a, #333333);
        border-color: #666666;
    }

    .baccarat-card.red .card-rank,
    .baccarat-card.red .card-suit {
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .baccarat-card.black .card-rank,
    .baccarat-card.black .card-suit {
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .card-rank {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 2px;
        z-index: 2;
        position: relative;
        font-family: 'Arial', sans-serif;
    }

    .card-suit {
        font-size: 32px;
        z-index: 2;
        position: relative;
    }

    .empty-card {
        width: 60px;
        height: 80px;
        border-radius: 8px;
        border: 2px dashed rgba(196, 193, 192, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: rgba(196, 193, 192, 0.3);
        font-size: 24px;
        background: rgba(59, 58, 57, 0.5);
    }

    .total-score {
        margin-top: 8px;
        padding: 4px 8px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 3px;
        color: #c4c1c0;
        font-size: 12px;
        font-weight: bold;
    }

    .result-display {
        text-align: center;
        padding: 8px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
        margin-top: 5px;
    }

    .result-text {
        color: #c4c1c0;
        font-size: 13px;
        font-weight: bold;
    }

    .result-text.win {
        color: #2ed573;
        text-shadow: 0 0 5px rgba(46, 213, 115, 0.5);
    }

    .result-text.lose {
        color: #ff4757;
        text-shadow: 0 0 5px rgba(255, 71, 87, 0.5);
    }

    .baccarat-controls {
        display: flex;
        gap: 8px;
        justify-content: center;
        margin-top: 10px;
    }

    .baccarat-btn {
        padding: 6px 12px;
        border: none;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 11px;
        cursor: pointer;
        transition: all 0.15s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        min-width: 100px;
    }

    .baccarat-btn:hover:not(:disabled) {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-1px);
    }

    .baccarat-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    .baccarat-btn.play {
        background: rgba(46, 213, 115, 0.1);
        border-color: #2ed573;
        color: #2ed573;
    }

    .baccarat-btn.clear {
        background: rgba(255, 71, 87, 0.1);
        border-color: #ff4757;
        color: #ff4757;
    }

    .baccarat-bet-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 8px;
        background: rgba(59, 58, 57, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        margin-top: 8px;
    }

    .bet-info-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex: 1;
    }

    .bet-info-label {
        color: rgba(196, 193, 192, 0.7);
        font-size: 9px;
        margin-bottom: 2px;
    }

    .bet-info-value {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
    }

    .bet-info-value.win {
        color: #2ed573;
    }

    .bet-info-value.lose {
        color: #ff4757;
    }

    .bet-amounts-display {
        display: flex;
        justify-content: space-between;
        gap: 5px;
        margin-top: 5px;
        font-size: 10px;
        color: rgba(196, 193, 192, 0.8);
    }

    .bet-amount-item {
        text-align: center;
        flex: 1;
    }

    /* Dark theme adjustments */
    .dark .baccarat-section {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .betting-option,
    .dark .player-area,
    .dark .banker-area,
    .dark .result-display,
    .dark .baccarat-bet-info {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .baccarat-card {
        background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
        color: #000000;
    }

    .dark .baccarat-card.red {
        background: linear-gradient(135deg, #ff3b3b, #ff6b6b);
    }

    .dark .baccarat-card.black {
        background: linear-gradient(135deg, #333333, #444444);
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .baccarat-betting-area,
        .cards-display-area {
            flex-direction: column;
            gap: 8px;
        }
        
        .betting-option,
        .player-area,
        .banker-area {
            width: 100%;
        }
        
        .baccarat-card {
            width: 50px;
            height: 70px;
        }
        
        .card-rank {
            font-size: 20px;
        }
        
        .card-suit {
            font-size: 24px;
        }
        
        .empty-card {
            width: 50px;
            height: 70px;
        }
        
        .baccarat-controls {
            flex-wrap: wrap;
        }
        
        .baccarat-btn {
            flex: 1;
            min-width: 80px;
        }
    }
`;

document.head.appendChild(baccaratStyles);

// Baccarat Game Variables
let baccaratBetType = {}; // Object to track multiple bets: {player: amount, banker: amount, tie: amount}
let baccaratGameActive = false;
let baccaratBetAmounts = {
    player: 0,
    banker: 0,
    tie: 0
};
let totalBetAmount = 0;
let baccaratResult = null;
let lastBaccaratResponse = null;

// Create Baccarat section and add it to the console tab
function createBaccaratSection() {
    const consoleContent = document.querySelector('#consoleTab .console-content');
    
    const topBar = document.querySelector('.top-bar');
    const baccaratSection = document.createElement('div');
    baccaratSection.className = 'baccarat-section';
    baccaratSection.style.display = 'none';
    baccaratSection.innerHTML = `
        <div class="baccarat-game-area">
            <!-- Betting Area -->
            <div class="baccarat-betting-area">
                <div class="betting-option" data-bet="player" id="playerBetOption">
                    <div class="bet-amount">0</div>
                    <div class="option-label">PLAYER</div>
                    <div class="option-payout">1:1</div>
                </div>
                <div class="betting-option" data-bet="tie" id="tieBetOption">
                    <div class="bet-amount">0</div>
                    <div class="option-label">TIE</div>
                    <div class="option-payout">8:1</div>
                </div>
                <div class="betting-option" data-bet="banker" id="bankerBetOption">
                    <div class="bet-amount">0</div>
                    <div class="option-label">BANKER</div>
                    <div class="option-payout">0.95:1</div>
                </div>
            </div>
            
            <!-- Bet Amounts Summary -->
            <div class="bet-amounts-display" id="betAmountsSummary">
                <div class="bet-amount-item">Player: 0.00000000</div>
                <div class="bet-amount-item">Tie: 0.00000000</div>
				<div class="bet-amount-item">Banker: 0.00000000</div>
            </div>
            
            <!-- Cards Display Area -->
            <div class="cards-display-area">
                <div class="player-area" id="playerArea">
                    <div class="area-label">PLAYER</div>
                    <div class="cards-container" id="playerCardsContainer">
                        <div class="empty-card">?</div>
                        <div class="empty-card">?</div>
                        <div class="empty-card">+</div>
                    </div>
                    <div class="total-score" id="playerScore">Score: -</div>
                </div>
                
                <div class="banker-area" id="bankerArea">
                    <div class="area-label">BANKER</div>
                    <div class="cards-container" id="bankerCardsContainer">
                        <div class="empty-card">?</div>
                        <div class="empty-card">?</div>
                        <div class="empty-card">+</div>
                    </div>
                    <div class="total-score" id="bankerScore">Score: -</div>
                </div>
            </div>
            
            <!-- Result Display -->
            <div class="result-display">
                <div class="result-text" id="baccaratResult">Place your bet and click PLAY</div>
            </div>
            
            <!-- Controls -->
            <div class="baccarat-controls">
                <button class="baccarat-btn play" id="baccaratPlayBtn">PLAY BACCARAT</button>
                <button class="baccarat-btn clear" id="baccaratClearBtn">CLEAR ALL BETS</button>
            </div>
            
            <!-- Bet Info -->
            <div class="baccarat-bet-info">
                <div class="bet-info-item">
                    <div class="bet-info-label">TOTAL BET</div>
                    <div class="bet-info-value" id="totalBetAmount">0.00000000</div>
                </div>
                <div class="bet-info-item">
                    <div class="bet-info-label">WINNING BETS</div>
                    <div class="bet-info-value" id="winningBets">-</div>
                </div>
                <div class="bet-info-item">
                    <div class="bet-info-label">TOTAL PAYOUT</div>
                    <div class="bet-info-value" id="totalPayout">0.00000000</div>
                </div>
            </div>
        </div>
    `;
    
    // Insert after the top bar
    topBar.parentNode.insertBefore(baccaratSection, topBar.nextSibling);
    
    // Add event listeners
    document.querySelectorAll('.betting-option').forEach(option => {
        option.addEventListener('click', () => toggleBaccaratBet(option.dataset.bet));
    });
    
    document.getElementById('baccaratPlayBtn')?.addEventListener('click', playBaccaratGame);
    document.getElementById('baccaratClearBtn')?.addEventListener('click', clearBaccaratBet);
}

// Toggle Baccarat bet (allow multiple selections)
function toggleBaccaratBet(betType) {
    if (baccaratGameActive) return;
    
    const option = document.querySelector(`.betting-option[data-bet="${betType}"]`);
    const betAmount = nextbet; // Use current nextbet amount
    
    // Toggle the bet
    if (nextbet[betType] > 0) {
        // Remove bet
        //nextbet[betType] = 0;
        option.classList.remove('active', `${betType}-bet`);
        option.querySelector('.bet-amount').textContent = '0';
    } else {
        // Add bet
        //nextbet[betType] = betAmount;
        option.classList.add('active', `${betType}-bet`);
        option.querySelector('.bet-amount').textContent = betAmount;
    }
    
    // Calculate total bet
    totalBetAmount = nextbet.player + nextbet.banker + nextbet.tie;
    
    // Update bet info
    updateBetInfoDisplay();
    
    // Enable/disable play button based on if any bets are placed
    //document.getElementById('baccaratPlayBtn').disabled = totalBetAmount <= 0;
    
    // Update bet variables

}

// Update bet information display
function updateBetInfoDisplay() {
    // Update bet amounts summary
    document.getElementById('betAmountsSummary').innerHTML = `
        <div class="bet-amount-item">Player: ${nextbet.player}</div>
        <div class="bet-amount-item">Tie: ${nextbet.tie}</div>
		<div class="bet-amount-item">Banker: ${nextbet.banker}</div>
    `;
    
    // Update total bet
    document.getElementById('totalBetAmount').textContent = 0;
}

let betamount = {player: 0,banker: 0,tie: 0};
// Clear all Baccarat bets
function clearBaccaratBet() {
    // Reset all bet amounts
    baccaratBetAmounts = nextbet
    totalBetAmount = 0;
    baccaratGameActive = false;
    
    // Reset UI
    document.querySelectorAll('.betting-option').forEach(option => {
        option.classList.remove('active', 'player-bet', 'banker-bet', 'tie-bet', 'winner');
        //option.querySelector('.bet-amount').textContent = '0';
    });
    
    // Reset cards containers
    document.getElementById('playerCardsContainer').classList.remove('winner');
    document.getElementById('bankerCardsContainer').classList.remove('winner');
    
    //document.getElementById('baccaratPlayBtn').disabled = true;
    
    // Reset bet info
    updateBetInfoDisplay();
    document.getElementById('winningBets').textContent = '-';
    document.getElementById('winningBets').className = 'bet-info-value';
    document.getElementById('totalPayout').textContent = '0.00000000';
    document.getElementById('totalPayout').className = 'bet-info-value';
    
    // Reset result display
    document.getElementById('baccaratResult').textContent = 'Place your bet and click PLAY';
    document.getElementById('baccaratResult').className = 'result-text';
    
    // Reset player/banker areas
    document.getElementById('playerArea').className = 'player-area';
    document.getElementById('bankerArea').className = 'banker-area';
    
    // Reset cards
    resetBaccaratCards();
    
    // Reset bet variables

}

// Reset Baccarat cards display
function resetBaccaratCards() {
    const playerCardsContainer = document.getElementById('playerCardsContainer');
    const bankerCardsContainer = document.getElementById('bankerCardsContainer');
    
    playerCardsContainer.innerHTML = `
        <div class="empty-card">?</div>
        <div class="empty-card">?</div>
        <div class="empty-card">+</div>
    `;
    
    bankerCardsContainer.innerHTML = `
        <div class="empty-card">?</div>
        <div class="empty-card">?</div>
        <div class="empty-card">+</div>
    `;
    
    document.getElementById('playerScore').textContent = 'Score: -';
    document.getElementById('bankerScore').textContent = 'Score: -';
}

// Play Baccarat game
function playBaccaratGame() {
	if(running) return;
   
    
    baccaratGameActive = true;
    
    // Disable controls during game
    //document.getElementById('baccaratPlayBtn').disabled = true;
    //document.getElementById('baccaratClearBtn').disabled = true;
    
    // Reset winner highlights
    document.getElementById('playerCardsContainer').classList.remove('winner');
    document.getElementById('bankerCardsContainer').classList.remove('winner');
    document.querySelectorAll('.betting-option').forEach(option => {
        option.classList.remove('winner');
    });
    
    // Place bet using your existing baccaratbet function
    baccaratbet(nextbet.tie, nextbet.player, nextbet.banker);
}

// Function to display Baccarat results from JSON response
function displayBaccaratResult(baccaratResponse) {
    if (!baccaratResponse) return;
    
    lastBaccaratResponse = baccaratResponse;
    
    const betData = baccaratResponse.baccaratBet || baccaratResponse;
    const state = betData.state || {};
    
    // Get cards
    const playerCards = state.playerCards || [];
    const bankerCards = state.bankerCards || [];
    const result = state.result || '';
    
    // Clear existing cards
    const playerCardsContainer = document.getElementById('playerCardsContainer');
    const bankerCardsContainer = document.getElementById('bankerCardsContainer');
    
    playerCardsContainer.innerHTML = '';
    bankerCardsContainer.innerHTML = '';
    
    // Display player cards
    playerCards.forEach((card, index) => {
        const cardElement = createBaccaratCardElement(card, index);
        playerCardsContainer.appendChild(cardElement);
    });
    
    // Fill remaining slots
    for (let i = playerCards.length; i < 3; i++) {
        const emptyCard = document.createElement('div');
        emptyCard.className = 'empty-card';
        if (i === 2) emptyCard.textContent = '+';
        playerCardsContainer.appendChild(emptyCard);
    }
    
    // Display banker cards
    bankerCards.forEach((card, index) => {
        const cardElement = createBaccaratCardElement(card, index);
        bankerCardsContainer.appendChild(cardElement);
    });
    
    // Fill remaining slots
    for (let i = bankerCards.length; i < 3; i++) {
        const emptyCard = document.createElement('div');
        emptyCard.className = 'empty-card';
        if (i === 2) emptyCard.textContent = '+';
        bankerCardsContainer.appendChild(emptyCard);
    }
    
    // Calculate scores
    const playerScore = calculateBaccaratScore(playerCards);
    const bankerScore = calculateBaccaratScore(bankerCards);
    
    // Update scores
    document.getElementById('playerScore').textContent = `Score: ${playerScore}`;
    document.getElementById('bankerScore').textContent = `Score: ${bankerScore}`;
    
    // Determine winner and highlight ONLY the cards container
    let winner = '';
    
    if (result) {
        winner = result.toUpperCase();
        
        // Highlight ONLY the winning cards container
        if (result === 'player') {
            playerCardsContainer.classList.add('winner');
        } else if (result === 'banker') {
            bankerCardsContainer.classList.add('winner');
        } else if (result === 'tie') {
            playerCardsContainer.classList.add('winner');
            bankerCardsContainer.classList.add('winner');
        }
    }
    
    // Update result display
    const resultElement = document.getElementById('baccaratResult');
    resultElement.textContent = winner ? `${winner} WINS!` : 'RESULT PENDING';
    
    // Calculate winnings and update UI
    calculateAndDisplayWinnings(result, betData);
    
    // Re-enable controls
    //document.getElementById('baccaratPlayBtn').disabled = true;
    //document.getElementById('baccaratClearBtn').disabled = false;
    
    baccaratGameActive = false;
}

// Calculate and display winnings
function calculateAndDisplayWinnings(result, betData) {
    let totalPayout = 0;
    let winningBetsText = '';
    
    // Check which bets won
    const winningBets = [];
    
    if (result === 'player' && nextbet.player > 0) {
        const payout = nextbet.player * 2; // 1:1 payout
        totalPayout += payout;
        winningBets.push('Player');
        document.getElementById('playerBetOption').classList.add('winner');
    }
    
    if (result === 'banker' && nextbet.banker > 0) {
        const payout = nextbet.banker * 1.95; // 0.95:1 payout
        totalPayout += payout;
        winningBets.push('Banker');
        document.getElementById('bankerBetOption').classList.add('winner');
    }
    
    if (result === 'tie' && nextbet.tie > 0) {
        const payout = nextbet.tie * 9; // 8:1 payout
        totalPayout += payout;
        winningBets.push('Tie');
        document.getElementById('tieBetOption').classList.add('winner');
    }
    
    // Update winning bets display
    if (winningBets.length > 0) {
        winningBetsText = winningBets.join(', ');
        document.getElementById('winningBets').textContent = winningBetsText;
        document.getElementById('winningBets').className = 'bet-info-value win';
        document.getElementById('baccaratResult').className = 'result-text win';
    } else if (result) {
        document.getElementById('winningBets').textContent = 'None';
        document.getElementById('winningBets').className = 'bet-info-value lose';
        document.getElementById('baccaratResult').className = 'result-text lose';
    }
    
    // Update total payout
    if (totalPayout > 0) {
        document.getElementById('totalPayout').textContent = totalPayout.toFixed(8);
        document.getElementById('totalPayout').className = 'bet-info-value win';
    } else {
        document.getElementById('totalPayout').textContent = '0.00000000';
        document.getElementById('totalPayout').className = 'bet-info-value';
    }
    
    // If betData has actual payout, use it
    if (betData && betData.payout) {
        document.getElementById('totalPayout').textContent = parseFloat(betData.payout).toFixed(8);
    }
}

// Create Baccarat card element with HiLo style
function createBaccaratCardElement(card, index) {
    const cardElement = document.createElement('div');
    cardElement.className = 'baccarat-card new';
    
    // Determine color based on suit
    const suit = card.suit || '';
    const rank = card.rank || '';
    
    if (suit === 'H' || suit === 'D') {
        cardElement.classList.add('red');
    } else {
        cardElement.classList.add('black');
    }
    
    // Get suit symbol
    const suitSymbol = getSuitSymbol(suit);
    
    cardElement.innerHTML = `
        <div class="card-rank">${rank}</div>
        <div class="card-suit">${suitSymbol}</div>
    `;
    
    // Remove animation class after animation completes
    setTimeout(() => {
        cardElement.classList.remove('new');
    }, 500);
    
    return cardElement;
}

// Get suit symbol
function getSuitSymbol(suit) {
    switch(suit) {
        case 'S': return '♠';
        case 'H': return '♥';
        case 'D': return '♦';
        case 'C': return '♣';
        default: return '?';
    }
}

// Calculate Baccarat score
function calculateBaccaratScore(cards) {
    if (!cards || cards.length === 0) return 0;
    
    let total = 0;
    
    cards.forEach(card => {
        const rank = card.rank || '';
        let value = 0;
        
        switch(rank) {
            case 'A': value = 1; break;
            case '2': value = 2; break;
            case '3': value = 3; break;
            case '4': value = 4; break;
            case '5': value = 5; break;
            case '6': value = 6; break;
            case '7': value = 7; break;
            case '8': value = 8; break;
            case '9': value = 9; break;
            case '10':
            case 'J':
            case 'Q':
            case 'K': value = 0; break;
            default: value = parseInt(rank) || 0;
        }
        
        total += value;
    });
    
    // Baccarat: only the last digit counts (modulo 10)
    return total % 10;
}

// Initialize Baccarat when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create Baccarat section
    createBaccaratSection();
    
    // Add Baccarat to available functions
    availableFunctions['baccarat'] = () => {
        changegame('baccarat');
        return 'Switched to Baccarat game';
    };
    
    // Add feedable function for Baccarat
    availableFunctions['feedBaccarat'] = (jsonResponse) => {
        try {
            const response = typeof jsonResponse === 'string' ? JSON.parse(jsonResponse) : jsonResponse;
            displayBaccaratResult(response);
            return `Baccarat results fed: ${response.baccaratBet?.state?.result || 'Unknown result'}`;
        } catch (e) {
            return 'Error: Invalid JSON format for Baccarat response';
        }
    };
});

// Also call createBaccaratSection when your bot initializes
//setTimeout(createBaccaratSection, 100);
createBaccaratSection();
// Add Blackjack CSS styles after the baccaratStyles
// Add Blackjack CSS styles after the baccaratStyles

let blackjackGameActive = false;
let blackjackBetAmount = 0;
let currentBlackjackResponse = null;
let currentHandIndex = 0;
let previousDealerCards = [];
let previousPlayerHands = [];

// Add Blackjack CSS styles after the baccaratStyles
const blackjackStyles = document.createElement('style');
blackjackStyles.textContent = `
    .blackjack-section {
        background: rgba(59, 58, 57, 0.6);
        border: 1px solid rgba(196, 193, 192, 0.4);
        border-radius: 6px;
        padding: 8px;
        margin-bottom: 6px;
        position: relative;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto 6px;
    }

    .blackjack-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
        padding-bottom: 6px;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .blackjack-title {
        color: #c4c1c0;
        text-shadow: var(--text-shadow);
        font-weight: bold;
        font-size: 12px;
        font-family: 'Courier New', monospace;
    }

    .blackjack-game-area {
        display: flex;
        flex-direction: row;
        gap: 20px;
        min-height: 400px;
    }

    .cards-side {
        flex: 3;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }

    .controls-side {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 200px;
        max-width: 300px;
    }

    .dealer-area, .player-area-blackjack {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
    }

    .dealer-area.active {
        border-color: #ff4757;
        background: rgba(255, 71, 87, 0.1);
    }

    .player-area-blackjack.active {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    .area-label {
        color: #c4c1c0;
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 8px;
        text-transform: uppercase;
        width: 100%;
        text-align: left;
    }

    .cards-container-blackjack {
        display: flex;
        gap: 8px;
        min-height: 80px;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 8px;
        border-radius: 4px;
        background: rgba(0, 0, 0, 0.2);
        margin-bottom: 8px;
        width: 100%;
    }

    .blackjack-card {
        width: 50px;
        height: 70px;
        border-radius: 6px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
        border: 1px solid rgba(255, 255, 255, 0.1);
        position: relative;
        transition: all 0.3s ease;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        overflow: hidden;
    }

    .blackjack-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05));
        border-radius: 6px;
        z-index: 1;
    }

    .blackjack-card.red {
        background: linear-gradient(135deg, #ff3b3b, #ff6b6b);
        border-color: #ff9999;
    }

    .blackjack-card.black {
        background: linear-gradient(135deg, #1a1a1a, #333333);
        border-color: #666666;
    }

    .blackjack-card.red .card-rank,
    .blackjack-card.red .card-suit {
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .blackjack-card.black .card-rank,
    .blackjack-card.black .card-suit {
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .blackjack-card.new {
        animation: cardDeal 0.5s ease-out;
    }

    .card-rank {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 2px;
        z-index: 2;
        position: relative;
        font-family: 'Arial', sans-serif;
    }

    .card-suit {
        font-size: 24px;
        z-index: 2;
        position: relative;
    }

    .hand-info {
        display: flex;
        justify-content: flex-start;
        gap: 20px;
        margin-top: 8px;
        width: 100%;
    }

    .hand-value {
        color: #c4c1c0;
        font-size: 12px;
        font-weight: bold;
        background: rgba(0, 0, 0, 0.3);
        padding: 4px 8px;
        border-radius: 3px;
    }

    .hand-actions {
        color: #c4c1c0;
        font-size: 11px;
        font-style: italic;
    }

    .blackjack-controls {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 10px;
    }

    .blackjack-btn {
        padding: 10px 16px;
        border: none;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-weight: bold;
        font-size: 12px;
        cursor: pointer;
        transition: all 0.2s ease;
        background: rgba(196, 193, 192, 0.1);
        color: #c4c1c0;
        border: 1px solid rgba(196, 193, 192, 0.3);
        width: 100%;
        text-align: center;
    }

    .blackjack-btn:hover:not(:disabled) {
        background: rgba(196, 193, 192, 0.2);
        transform: translateY(-2px);
    }

    .blackjack-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
        transform: none !important;
    }

    .blackjack-btn.hit {
        background: rgba(46, 213, 115, 0.1);
        border-color: #2ed573;
        color: #2ed573;
    }

    .blackjack-btn.stand {
        background: rgba(255, 71, 87, 0.1);
        border-color: #ff4757;
        color: #ff4757;
    }

    .blackjack-btn.double {
        background: rgba(59, 130, 246, 0.1);
        border-color: #3b82f6;
        color: #3b82f6;
    }

    .blackjack-btn.split {
        background: rgba(255, 165, 0, 0.1);
        border-color: #ffa500;
        color: #ffa500;
    }

    .blackjack-btn.insurance {
        background: rgba(155, 89, 182, 0.1);
        border-color: #9b59b6;
        color: #9b59b6;
    }

    .blackjack-btn.noinsurance {
        background: rgba(196, 193, 192, 0.1);
        border-color: rgba(196, 193, 192, 0.3);
        color: #c4c1c0;
    }

    .blackjack-bet-info {
        display: flex;
        flex-direction: column;
        gap: 6px;
        padding: 8px;
        background: rgba(59, 58, 57, 0.9);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.3);
        margin-top: 15px;
    }

    .bet-info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 4px 0;
        border-bottom: 1px solid rgba(196, 193, 192, 0.1);
    }

    .bet-info-item:last-child {
        border-bottom: none;
    }

    .bet-info-label {
        color: rgba(196, 193, 192, 0.7);
        font-size: 10px;
    }

    .bet-info-value {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
    }

    .bet-info-value.win {
        color: #2ed573;
    }

    .bet-info-value.lose {
        color: #ff4757;
    }

    .result-display-blackjack {
        text-align: center;
        padding: 8px;
        background: rgba(59, 58, 57, 0.9);
        border: 1px solid rgba(196, 193, 192, 0.3);
        border-radius: 4px;
        margin-top: 15px;
    }

    .result-text-blackjack {
        color: #c4c1c0;
        font-size: 13px;
        font-weight: bold;
    }

    .result-text-blackjack.win {
        color: #2ed573;
        text-shadow: 0 0 5px rgba(46, 213, 115, 0.5);
    }

    .result-text-blackjack.lose {
        color: #ff4757;
        text-shadow: 0 0 5px rgba(255, 71, 87, 0.5);
    }

    .result-text-blackjack.push {
        color: #ffa500;
        text-shadow: 0 0 5px rgba(255, 165, 0, 0.5);
    }

    .player-hands-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .player-hand {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px;
        background: rgba(59, 58, 57, 0.7);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.2);
        width: 100%;
    }

    .player-hand.active {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    .player-hand-label {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
        margin-bottom: 5px;
        width: 100%;
        text-align: left;
    }

    /* Split layout */
    .split-hands-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 15px;
        margin-top: 10px;
        width: 100%;
    }

    .split-hand {
        flex: 1;
        min-width: 200px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 8px;
        background: rgba(59, 58, 57, 0.8);
        border-radius: 4px;
        border: 1px solid rgba(196, 193, 192, 0.2);
    }

    .split-hand.active {
        border-color: #3b82f6;
        background: rgba(59, 130, 246, 0.1);
    }

    .split-hand-label {
        color: #c4c1c0;
        font-size: 11px;
        font-weight: bold;
        margin-bottom: 5px;
        width: 100%;
        text-align: left;
    }

    /* Dark theme adjustments */
    .dark .blackjack-section {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .dealer-area,
    .dark .player-area-blackjack,
    .dark .result-display-blackjack,
    .dark .blackjack-bet-info {
        background: rgba(255, 255, 255, 0.05);
    }

    .dark .blackjack-card {
        background: linear-gradient(135deg, #e0e0e0, #f0f0f0);
        color: #000000;
    }

    .dark .blackjack-card.red {
        background: linear-gradient(135deg, #ff3b3b, #ff6b6b);
    }

    .dark .blackjack-card.black {
        background: linear-gradient(135deg, #333333, #444444);
    }

    /* Responsive adjustments */
    @media (max-width: 900px) {
        .blackjack-game-area {
            flex-direction: column;
        }
        
        .controls-side {
            max-width: 100%;
        }
        
        .split-hands-container {
            flex-direction: column;
        }
        
        .split-hand {
            min-width: 100%;
        }
        
        .blackjack-card {
            width: 45px;
            height: 63px;
        }
        
        .card-rank {
            font-size: 18px;
        }
        
        .card-suit {
            font-size: 20px;
        }
    }

    @media (max-width: 600px) {
        .cards-side {
            gap: 10px;
        }
        
        .dealer-area, .player-area-blackjack {
            padding: 8px;
        }
        
        .blackjack-card {
            width: 40px;
            height: 56px;
        }
        
        .card-rank {
            font-size: 16px;
        }
        
        .card-suit {
            font-size: 18px;
        }
        
        .hand-info {
            flex-direction: column;
            gap: 5px;
        }
    }
	 @keyframes blinkBorder {
        0%, 100% { border-color: transparent; }
        50% { border-color: currentColor; }
    }
    
    .blinking-border {
        animation: blinkBorder 0.5s ease-in-out infinite;
    }
    
    .blackjack-btn.insurance.blinking-border {
        border-color: #9b59b6;
    }
    
    .blackjack-btn.noinsurance.blinking-border {
        border-color: rgba(196, 193, 192, 0.3);
    }
`;

document.head.appendChild(blackjackStyles);


// Create Blackjack section
function createBlackjackSection() {
    const consoleContent = document.querySelector('#consoleTab .console-content');
    
    const topBar = document.querySelector('.top-bar');
    const blackjackSection = document.createElement('div');
    blackjackSection.className = 'blackjack-section';
    blackjackSection.style.display = 'none';
    blackjackSection.innerHTML = `
        <div class="blackjack-game-area">
            <!-- Left side: Cards -->
            <div class="cards-side">
                <!-- Dealer Area -->
                <div class="dealer-area" id="dealerArea">
                    <div class="area-label">DEALER</div>
                    <div class="cards-container-blackjack" id="dealerCardsContainer">
                        <div class="empty-card">?</div>
                        <div class="empty-card">?</div>
                    </div>
                    <div class="hand-info">
                        <div class="hand-value" id="dealerValue">Value: -</div>
                        <div class="hand-actions" id="dealerActions">Actions: -</div>
                    </div>
                </div>
                
                <!-- Player Hands Container -->
                <div id="playerHandsContainer">
                    <!-- Single hand or split hands will be dynamically added here -->
                </div>
            </div>
            
            <!-- Right side: Controls -->
            <div class="controls-side">
				<!-- Result Display -->
                <div class="result-display-blackjack">
                    <div class="result-text-blackjack" id="blackjackResult">Place your bet to start</div>
                </div>
                <!-- Controls -->
                <div class="blackjack-controls" id="blackjackControls">
                    <button class="blackjack-btn hit" id="hitBtn">HIT</button>
                    <button class="blackjack-btn stand" id="standBtn">STAND</button>
                    <button class="blackjack-btn double" id="doubleBtn">DOUBLE</button>
                    <button class="blackjack-btn split" id="splitBtn">SPLIT</button>
                    <button class="blackjack-btn insurance" id="insuranceBtn" >INSURANCE</button>
                    <button class="blackjack-btn noinsurance" id="noInsuranceBtn" >NO INSURANCE</button>
                    <button class="blackjack-btn" id="newGameBtn">NEW GAME</button>
                </div>
                
                
                
                <!-- Bet Info -->
                <div class="blackjack-bet-info">
                    <div class="bet-info-item1">
                        <div class="bet-info-label">BET AMOUNT</div>
                        <div class="bet-info-value" id="blackjackBetAmount">0.00000000</div>
                    </div>
                    <div class="bet-info-item3">
                        <div class="bet-info-label3">MULTIPLIER</div>
                        <div class="bet-info-value4" id="blackjackMultiplier">0.00x</div>
                    </div>
                    <div class="bet-info-item2">
                        <div class="bet-info-label">PAYOUT</div>
                        <div class="bet-info-value" id="blackjackPayout">0.00000000</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Insert after the top bar
    topBar.parentNode.insertBefore(blackjackSection, topBar.nextSibling);
    
    // Add event listeners
    document.getElementById('hitBtn')?.addEventListener('click', () => handleBlackjackAction('hit'));
    document.getElementById('standBtn')?.addEventListener('click', () => handleBlackjackAction('stand'));
    document.getElementById('doubleBtn')?.addEventListener('click', () => handleBlackjackAction('double'));
    document.getElementById('splitBtn')?.addEventListener('click', () => handleBlackjackAction('split'));
    document.getElementById('insuranceBtn')?.addEventListener('click', () => handleBlackjackAction('insurance'));
    document.getElementById('noInsuranceBtn')?.addEventListener('click', () => handleBlackjackAction('noInsurance'));
    document.getElementById('newGameBtn')?.addEventListener('click', startNewBlackjackGame);
}

// Handle Blackjack action
function handleBlackjackAction(action) {
	if (running) return;
    if (!blackjackGameActive) return;
    
    // Call blackjackNext with the selected action
    blackjackNext(action);
    
    // Update global action variable for auto-play
    if (running) {
        action = action;
    }
}

function resetBlackjackGame() {
    // Clear all containers
    const dealerCardsContainer = document.getElementById('dealerCardsContainer');
    const playerHandsContainer = document.getElementById('playerHandsContainer');
    
    if (dealerCardsContainer) {
        dealerCardsContainer.innerHTML = `
            <div class="empty-card">?</div>
            <div class="empty-card">?</div>
        `;
    }
    
    if (playerHandsContainer) {
        playerHandsContainer.innerHTML = '';
    }
    
    // Reset values
    document.getElementById('dealerValue').textContent = 'Value: -';
    document.getElementById('dealerActions').textContent = 'Actions: -';
    
    // Reset current hand index
    currentHandIndex = 0;
    
    // Reset card tracking
    previousDealerCards = [];
    previousPlayerHands = [];
    
    // Stop blinking
    stopBlinking();
    
    // Hide insurance buttons
    document.getElementById('insuranceBtn').style.display = 'block';
    document.getElementById('noInsuranceBtn').style.display = 'block';
    
    // Enable new game button
    document.getElementById('newGameBtn').disabled = false;
    
    // Reset result text
    document.getElementById('blackjackResult').textContent = 'Place your bet to start';
    document.getElementById('blackjackResult').className = 'result-text-blackjack';
}
// Start new Blackjack game
function startNewBlackjackGame() {
	if(running) return;
    if (blackjackGameActive) {
        // If game is already active, don't start new one
        return;
    }
    
    blackjackBetAmount = nextbet;
    
    // Update bet info display
    document.getElementById('blackjackBetAmount').textContent = blackjackBetAmount.toFixed(8);
    document.getElementById('blackjackMultiplier').textContent = '0.00x';
    document.getElementById('blackjackPayout').textContent = '0.00000000';
    
    // Reset result display
    document.getElementById('blackjackResult').textContent = 'Placing bet...';
    document.getElementById('blackjackResult').className = 'result-text-blackjack';
    
    // Disable all action buttons initially
    //disableBlackjackButtons(true);
    
    // Call blackjackBet
    blackjackBet(blackjackBetAmount);
    
    blackjackGameActive = true;
}

// Disable/enable Blackjack buttons
function disableBlackjackButtons(disabled) {
    const actionButtons = ['hitBtn', 'standBtn', 'doubleBtn', 'splitBtn', 'insuranceBtn', 'noInsuranceBtn'];
    
    actionButtons.forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) {
            btn.disabled = disabled;
        }
    });
    
    // Don't disable new game button
    document.getElementById('newGameBtn').disabled = false;
}

// Update Blackjack UI from JSON response
function updateBlackjackUI(json) {
    if (!json) return;
    
    currentBlackjackResponse = json;
    
    const betData = json.blackjackBet || json.blackjackNext || json.user.activeCasinoBet || json;
    const state = betData.state || {};
    const playerHands = state.player || [];
    const dealerHand = state.dealer?.[0] || { cards: [], value: 0, actions: [] };
    
    // Update dealer area
    updateDealerHand(dealerHand);
    
    // Update player hands
    updatePlayerHands(playerHands);
    
    // Update available actions for current hand
    updateAvailableActions(playerHands);
    
    // Update bet info
    updateBlackjackBetInfo(betData);
    
    // Check if we should blink insurance buttons
    if (dealerHand.cards[0]?.rank === 'A') {
        // Start blinking insurance buttons
		if(!playerHands[0].actions.includes('insurance') && !playerHands[0].actions.includes('noInsurance')){
			 blinkerBtn();
			 
		} else {
			
			stopBlinking();
		}
    } else {
        // Stop blinking if dealer doesn't have Ace
        stopBlinking();
    }
    
    // Update result if game is over
    if (!betData.active) {
        showBlackjackResult(betData);
        blackjackGameActive = false;
        stopBlinking(); // Stop blinking when game ends
    } else {
        blackjackGameActive = true;
        
        // If game is still active but no actions are showing, check for insurance
        if (playerHands.length > 0) {
            const currentHand = playerHands[currentHandIndex];
            const actions = currentHand?.actions || [];
            
            if (actions.length === 0) {
                // Check if dealer shows Ace
                if (dealerHand.cards[0]?.rank === 'A') {
                    document.getElementById('insuranceBtn').style.display = 'inline-block';
                    document.getElementById('noInsuranceBtn').style.display = 'inline-block';
                    document.getElementById('insuranceBtn').disabled = false;
                    document.getElementById('noInsuranceBtn').disabled = false;
                }
            }
        }
    }
    
    // Always enable new game button after response
    document.getElementById('newGameBtn').disabled = false;
}

// Update dealer hand display
function updateDealerHand(dealerHand) {
    const dealerCardsContainer = document.getElementById('dealerCardsContainer');
    const dealerValueElement = document.getElementById('dealerValue');
    const dealerActionsElement = document.getElementById('dealerActions');
    
    if (!dealerCardsContainer) return;
    
    // Clear existing cards
    dealerCardsContainer.innerHTML = '';
    
    // Display dealer cards
    dealerHand.cards.forEach((card, index) => {
        // Check if this is a new card by comparing with previous state
        const isNewCard = index >= previousDealerCards.length;
        const cardElement = createBlackjackCardElement(card, index, isNewCard);
        dealerCardsContainer.appendChild(cardElement);
    });
    
    // Update tracking
    previousDealerCards = [...dealerHand.cards];
    
    // Update value and actions
    dealerValueElement.textContent = `Value: ${dealerHand.value}`;
    dealerActionsElement.textContent = `Actions: ${dealerHand.actions.join(', ')}`;
}

// Update player hands display (supports splits)
function updatePlayerHands(playerHands) {
    const playerHandsContainer = document.getElementById('playerHandsContainer');
    
    if (!playerHandsContainer) return;
    
    // Clear existing hands
    playerHandsContainer.innerHTML = '';
    
    if (playerHands.length === 1) {
        // Single hand layout
        const hand = playerHands[0];
        const handElement = document.createElement('div');
        handElement.className = `player-hand ${currentHandIndex === 0 ? 'active' : ''}`;
        
        const handLabel = document.createElement('div');
        handLabel.className = 'player-hand-label';
        handLabel.textContent = 'PLAYER';
        
        const cardsContainer = document.createElement('div');
        cardsContainer.className = 'cards-container-blackjack';
        
        // Get previous hand cards for comparison
        const previousHand = previousPlayerHands[0] || { cards: [] };
        
        // Add cards to this hand
        hand.cards.forEach((card, cardIndex) => {
            // Check if this is a new card
            const isNewCard = cardIndex >= previousHand.cards.length;
            const cardElement = createBlackjackCardElement(card, cardIndex, isNewCard);
            cardsContainer.appendChild(cardElement);
        });
        
        const handInfo = document.createElement('div');
        handInfo.className = 'hand-info';
        
        const handValue = document.createElement('div');
        handValue.className = 'hand-value';
        handValue.textContent = `Value: ${hand.value}`;
        
        const handActions = document.createElement('div');
        handActions.className = 'hand-actions';
        handActions.textContent = `Actions: ${hand.actions.join(', ')}`;
        
        handInfo.appendChild(handValue);
        handInfo.appendChild(handActions);
        
        handElement.appendChild(handLabel);
        handElement.appendChild(cardsContainer);
        handElement.appendChild(handInfo);
        
        playerHandsContainer.appendChild(handElement);
    } else {
        // Split hands layout - display side by side
        const splitContainer = document.createElement('div');
        splitContainer.className = 'split-hands-container';
        
        playerHands.forEach((hand, index) => {
            const splitHand = document.createElement('div');
            splitHand.className = `split-hand ${index === currentHandIndex ? 'active' : ''}`;
            splitHand.id = `splitHand${index}`;
            
            const handLabel = document.createElement('div');
            handLabel.className = 'split-hand-label';
            handLabel.textContent = `HAND ${index + 1}`;
            
            const cardsContainer = document.createElement('div');
            cardsContainer.className = 'cards-container-blackjack';
            
            // Get previous hand cards for comparison
            const previousHand = previousPlayerHands[index] || { cards: [] };
            
            // Add cards to this split hand
            hand.cards.forEach((card, cardIndex) => {
                // Check if this is a new card
                const isNewCard = cardIndex >= previousHand.cards.length;
                const cardElement = createBlackjackCardElement(card, cardIndex, isNewCard);
                cardsContainer.appendChild(cardElement);
            });
            
            const handInfo = document.createElement('div');
            handInfo.className = 'hand-info';
            
            const handValue = document.createElement('div');
            handValue.className = 'hand-value';
            handValue.textContent = `Value: ${hand.value}`;
            
            const handActions = document.createElement('div');
            handActions.className = 'hand-actions';
            handActions.textContent = `Actions: ${hand.actions.join(', ')}`;
            
            handInfo.appendChild(handValue);
            handInfo.appendChild(handActions);
            
            splitHand.appendChild(handLabel);
            splitHand.appendChild(cardsContainer);
            splitHand.appendChild(handInfo);
            
            splitContainer.appendChild(splitHand);
        });
        
        playerHandsContainer.appendChild(splitContainer);
    }
    
    // Update tracking - deep copy to preserve card counts
    previousPlayerHands = playerHands.map(hand => ({
        cards: [...hand.cards],
        value: hand.value,
        actions: [...hand.actions]
    }));
}

function blinkerBtn() {
    const insuranceBtn = document.getElementById('insuranceBtn');
    const noInsuranceBtn = document.getElementById('noInsuranceBtn');
    
    if (!insuranceBtn || !noInsuranceBtn) {
        console.error('Insurance buttons not found');
        return;
    }
    
    // Toggle blinking class
    insuranceBtn.classList.toggle('blinking-border');
    noInsuranceBtn.classList.toggle('blinking-border');
    
    // If blinking is being turned on, also ensure buttons are visible
    if (insuranceBtn.classList.contains('blinking-border')) {
        insuranceBtn.style.display = 'inline-block';
        noInsuranceBtn.style.display = 'inline-block';
        
        // Enable buttons if they were disabled
        insuranceBtn.disabled = false;
        noInsuranceBtn.disabled = false;
    }
}

// Optionally, add a function to stop blinking
function stopBlinking() {
    const insuranceBtn = document.getElementById('insuranceBtn');
    const noInsuranceBtn = document.getElementById('noInsuranceBtn');
    
    if (insuranceBtn && noInsuranceBtn) {
        insuranceBtn.classList.remove('blinking-border');
        noInsuranceBtn.classList.remove('blinking-border');
    }
}

// Update available actions for current hand
function updateAvailableActions(playerHands) {
    if (playerHands.length === 0) {
        // No hands yet, disable all action buttons
        //disableBlackjackButtons(true);
        return;
    }
    
    const currentHand = playerHands[currentHandIndex];
    const actions = currentHand?.actions || [];
    
	if (actions.includes('insurance') || actions.includes('noInsurance')) {
        stopBlinking(); // Stop blinking when insurance is no longer relevant
    }
    
	
    // Enable/disable buttons based on available actions
    //document.getElementById('hitBtn').disabled = !actions.includes('hit');
    //document.getElementById('standBtn').disabled = !actions.includes('stand');
    //document.getElementById('doubleBtn').disabled = !actions.includes('double');
    //document.getElementById('splitBtn').disabled = !actions.includes('split');
    
    // Show/hide insurance buttons if dealer shows Ace and insurance is available
    const dealerHand = currentBlackjackResponse?.blackjackBet?.state?.dealer?.[0] || 
                      currentBlackjackResponse?.blackjackNext?.state?.dealer?.[0];
    
    if (dealerHand?.cards?.[0]?.rank === 'A' && actions.includes('insurance')) {
        document.getElementById('insuranceBtn').style.display = 'inline-block';
        document.getElementById('noInsuranceBtn').style.display = 'inline-block';
        document.getElementById('insuranceBtn').disabled = false;
        document.getElementById('noInsuranceBtn').disabled = false;
    } else {
        document.getElementById('insuranceBtn').style.display = 'block';
        document.getElementById('noInsuranceBtn').style.display = 'block';
    }
    
    // Log for debugging
   // console.log('Available actions:', actions);
    //console.log('Hit enabled:', !actions.includes('hit'));
    //console.log('Stand enabled:', !actions.includes('stand'));
}

// Update Blackjack bet information
function updateBlackjackBetInfo(betData) {
    document.getElementById('blackjackBetAmount').textContent = parseFloat(betData.amount || 0).toFixed(8);
    document.getElementById('blackjackMultiplier').textContent = `${parseFloat(betData.payoutMultiplier || 0).toFixed(2)}x`;
    document.getElementById('blackjackPayout').textContent = parseFloat(betData.payout || 0).toFixed(8);
}

// Show Blackjack result
function showBlackjackResult(betData) {
    const resultElement = document.getElementById('blackjackResult');
    const payout = parseFloat(betData.payout || 0);
    const betAmount = parseFloat(betData.amount || 0);
    const Multiplier = parseFloat(betData.payoutMultiplier || 0);
    
	if (Multiplier >= 1) {
        resultElement.textContent = 'WIN!';
        resultElement.className = 'result-text-blackjack win';
    } else if (payout === betAmount && payout > 0) {
        resultElement.textContent = 'PUSH';
        resultElement.className = 'result-text-blackjack push';
    } else {
        resultElement.textContent = 'LOSE';
        resultElement.className = 'result-text-blackjack lose';
    }
    
    // Disable all action buttons when game is over
    //disableBlackjackButtons(true);
    document.getElementById('blackjackMultiplier').textContent = `${parseFloat(betData.payoutMultiplier || 0).toFixed(2)}x`;
    document.getElementById('blackjackMultiplier').style.fontSize = '27px';
	document.getElementById('blackjackMultiplier').style.color = '#e6af0b';
	// Hide insurance buttons
    document.getElementById('insuranceBtn').style.display = 'block';
    document.getElementById('noInsuranceBtn').style.display = 'block';
    
    // Enable new game button
    document.getElementById('newGameBtn').disabled = false;
    
    // Game is no longer active
    blackjackGameActive = false;
}

// Create Blackjack card element
function createBlackjackCardElement(card, index, isNewCard = true) {
    const cardElement = document.createElement('div');
    cardElement.className = 'blackjack-card';
    
    // Only add animation class if this is a new card
    if (isNewCard) {
        cardElement.classList.add('new');
    }
    
    // Determine color based on suit
    const suit = card.suit || '';
    const rank = card.rank || '';
    
    if (suit === 'H' || suit === 'D') {
        cardElement.classList.add('red');
    } else {
        cardElement.classList.add('black');
    }
    
    // Get suit symbol
    const suitSymbol = getSuitSymbol(suit);
    
    cardElement.innerHTML = `
        <div class="card-rank">${rank}</div>
        <div class="card-suit">${suitSymbol}</div>
    `;
    
    // Remove animation class after animation completes (only if it was added)
    if (isNewCard) {
        setTimeout(() => {
            cardElement.classList.remove('new');
        }, 500);
    }
    
    return cardElement;
}

// Initialize Blackjack when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Create Blackjack section
    createBlackjackSection();
    
    // Initialize button states
    setTimeout(() => {
        // Ensure new game button is enabled on startup
        const newGameBtn = document.getElementById('newGameBtn');
        if (newGameBtn) {
            newGameBtn.disabled = false;
        }
        
        // Ensure action buttons are disabled initially
        //disableBlackjackButtons(true);
        
        // Hide insurance buttons
        const insuranceBtn = document.getElementById('insuranceBtn');
        const noInsuranceBtn = document.getElementById('noInsuranceBtn');
        if (insuranceBtn && noInsuranceBtn) {
            insuranceBtn.style.display = 'block';
            noInsuranceBtn.style.display = 'block';
        }
    }, 500);
});

// Also call createBlackjackSection when your bot initializes
//setTimeout(createBlackjackSection, 100);
createBlackjackSection()

function minesStart(betsize, mines) {
    betRequest({
        url: '_api/casino/mines/bet',
        body: { amount: betsize, currency, minesCount: mines },
        retryParams: [betsize, fields, mines]
    });
}

function minesNext(fields) {
    betRequest({
        url: '_api/casino/mines/next',
        body: { fields },
        retryParams: [fields]
    });
}

function minesCashout() {
	if(running) return;
    betRequest({
        url: '_api/casino/mines/cashout',
        body: {identifier: randomString(21)},
        retryParams: []
    });
}

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

(function() {
  const pop = document.getElementById('consolePopup');
  const movePop = document.getElementById('movePopup');
	
  let isDragging = false;
  let currentX;
  let currentY;
  let initialX;
  let initialY;
  let xOffset = 0;
  let yOffset = 0;

  movePop.addEventListener('mousedown', dragStart);
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

      setTranslate(currentX, currentY, pop);
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

changegame(game);

darkorLight(!dark);

activeBet();
activeBetMines()
activeBetBJ();
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
		donecashout = false;
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
		if(json.errors != null || cashedoutauto || donecashout){ 

		} else {
		manualcash = true;
		crash_bet_placed = false;
        cbamount = json.data.multiplayerCrashCashout.payout - json.data.multiplayerCrashCashout.amount;
        cbtarget = json.data.multiplayerCrashCashout.payoutMultiplier;
        log(`Crash manual | multiplier: ${cbtarget.toFixed(2)} | Profit: ${cbamount.toFixed(8)}`);
		donecashout = true
		
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
	changegame(game);
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
	changegame(game);
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
            console.log("res not ok")
        }
        return res.json();
    })
    .then(json => data(json))
    .catch(err => {
        if (running) {
           // console.log("Caught error status:", err.status);

            //if (err.status === 403) {
                setTimeout(() => {
			console.log("error status " + err.status);
			
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
				baccarat:    () => runBet(baccaratbet, [nextbet.tie, nextbet.player, nextbet.banker]),
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

			if (game in gameFunctions){
					if(active_blackjack){
						active_blackjack = false;
						blackjackNext("stand");				
					} else {
						gameFunctions[game](); 
					}
				}
			}	
					
					
                }, 2000);
            //} 
			/*else {
                setTimeout(() => {
                    //console.log("betrequest");
					if (running) {
						betRequest({ url, body, retryParams, retryDelay });
					}
                }, 2000);
            }*/
        }
    });
}

function activeBet(){
	var body = {}
	
	fetch('https://' + mirror + '/_api/casino/active-bet/hilo', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outbet(json))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
									
		}, "2000");
	});
}

function outbet(json){
	 if (json.user.activeCasinoBet != null) {
			feedCard(
				{rank: json.user.activeCasinoBet.state.startCard.rank, suit: json.user.activeCasinoBet.state.startCard.suit},
				1,
				json.user.activeCasinoBet.state.rounds.at(1)?.guess,
				json.user.activeCasinoBet.state.rounds.at(1)?.payoutMultiplier > 0.98 ? "win" : "lose",
				json.user.activeCasinoBet.state.rounds.at(1)?.payoutMultiplier
			);
			for (var i = 0; i < json.user.activeCasinoBet.state.rounds.length; i++)
			{
				feedCard(
					{rank: json.user.activeCasinoBet.state.rounds[i].card.rank, suit: json.user.activeCasinoBet.state.rounds[i].card.suit},
					i+2,
					json.user.activeCasinoBet.state.rounds[i].guess,
					json.user.activeCasinoBet.state.rounds[i].payoutMultiplier > 0.98 ? "win" : "lose",
					json.user.activeCasinoBet.state.rounds[i].payoutMultiplier
				);
			}
			
			currentBet = json.user.activeCasinoBet;
	}	
}

function activeBetMines(){
	var body = {}
	
	fetch('https://' + mirror + '/_api/casino/active-bet/mines', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outbetmine(json))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
									
		}, "2000");
	});
}

function outbetmine(json){
	 if (json.user.activeCasinoBet != null) {
			updateMinesUIFromResponse(json);  
	}	
}


function activeBetBJ(){
	var body = {}
	
	fetch('https://' + mirror + '/_api/casino/active-bet/blackjack', {
		method: 'post',
		body:    JSON.stringify(body),
		headers: { 'Content-Type': 'application/json','x-access-token': tokenapi},
	})
	.then(res => res.json())
	.then(json => outbetbj(json))
	.catch(function(err, json) {
		console.log(err);
		setTimeout(() => {
									
		}, "2000");
	});
}

function outbetbj(json){

	 if (json.user.activeCasinoBet != null) {
		 	active_blackjack = true;
			updateBlackjackUI(json);
	}	
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
	resetCards();
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
					activeBet();
				}
				if(game==="mines"){
					activeBetMines()
				}
				if(game==="blackjack"){
					activeBetBJ();
				};
				
				hiloguess = round()
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
			
			if(gameUI){
			 clearBaccaratBet();
             displayBaccaratResult(json);
			}
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
			
			if(gameUI){
			feedableKenoResult(
				bet.state.selectedNumbers,  // Should be 0-39
				bet.state.drawnNumbers,     // Should be 0-39
				bet.state.risk,
				bet.payoutMultiplier
			);
			
			kenoGameActive = false;
			document.getElementById('kenoPlayBtn').disabled = false;
			document.getElementById('kenoClearBtn').disabled = false;
			document.getElementById('kenoAutoBtn').disabled = false;
			}
            //break;
        }    
		if (gameType === "minesBet" && bet.active){
			running = false
			
			completeGameReset();
            updateMinesUIFromResponse(json);
		}	
		if (gameType === "minesNext"){
			if(!bet.active){
			lastBet.Roll = bet.state.mines;
            const rounds1 = bet.state.rounds;
            const minefield = bet.state.mines;
            const str_field = rounds1.map(round => round.field);
            
            const hitmines = str_field.filter(n => minefield.includes(n));
            
            lastBet.target = str_field.length;
            lastBet.targetNumber = `${minefield.length}|${str_field.length}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = hitmines;
			}
			running = false
			if(true){
            updateMinesUIFromResponse(json);
			}
		}
		if (gameType === "minesCashout"){
			lastBet.Roll = bet.state.mines;
            const rounds1 = bet.state.rounds;
            const minefield = bet.state.mines;
            const str_field = rounds1.map(round => round.field);
            
            const hitmines = str_field.filter(n => minefield.includes(n));
            
            lastBet.target = str_field.length;
            lastBet.targetNumber = `${minefield.length}|${str_field.length}`;
            
            // UI Updates
            tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(4) + "x";
            tdTargetNumber.innerHTML = lastBet.targetNumber;
            tdRollNumber.innerHTML = hitmines;
			
			running = false
			if(true){
            updateMinesUIFromResponse(json);
			}
		}		
		
        if (gameType === "minesBet"){
			if(gameUI){
			completeGameReset();
			}
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
			if(gameUI){
			updateMinesUIFromResponse(json); 
			}
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
			if(true){
					resetBlackjackGame()
					//running = false
					updateBlackjackUI(json);
			}
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
			if(true){
			stopBlinking();
			//running = false
			updateBlackjackUI(json);
			}
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
			//console.log(currentBet, hiloguess)
			
			const lastCard11 = currentBet?.state?.rounds?.at(-1)?.card?.rank || currentBet?.state?.startCard?.rank;
                    
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
					guessed = guesses[hiloguess][lastCard11] || guesses[hiloguess].default;
				} else {
					guessed = guesses[hiloguess];
				}
			}
			
			 if (bet.payoutMultiplier < 1) {
				// Immediate loss on first card
				if(true){
				handleLossRoundCard(bet);
				}
			} else {
				// Normal start
				//const lastCard11 = currentBet?.state?.rounds?.at(-1)?.card?.rank || currentBet?.state?.startCard?.rank;
				
				// (Rest of your existing code for handling guesses)
				if(true){
				feedCard(startcard, 1, guessed, 1, 1)
				}
			}
			if(manualhilo){
				running = false
			}
			
			
        }    
        if (gameType === "hiloNext"){
			if (bet.active) {
				// Active game continues
				cashout_done = false;
				currentBet = bet;
				
				const lastRound = currentBet.state.rounds.at(-1);
				if (lastRound) {
					const resultlast = lastRound.payoutMultiplier >= 0.98 ? 'win' : 'lose';
					if(true){
					feedCard(
						lastRound.card,
						currentBet.state.rounds.length + 1,
						lastRound.guess,
						resultlast,
						lastRound.payoutMultiplier
					);
					}
				}
				
			} else {
				// Game ended (loss)
				cashout_done = true;
				lastBet.Roll = bet.payoutMultiplier;
				lastBet.target = 0;
				
				// Process cards
				const cards = [];
				cards.push(bet.state.startCard.rank);
				bet.state.rounds.forEach((index) => {
					cards.push(index.card.rank);
				});
				lastBet.targetNumber = "";
				
				// UI Updates
				tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(2) + "x";
				tdTargetNumber.innerHTML = cards.join(",");
				tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(2);
				tdRollChance.innerHTML = "";
				
				// Handle card display for loss
				if(true){
				handleLossRoundCard(bet);
				sleep(300)
				}
			}
			if(manualhilo){
				running = false
			}
		}
        // In the hiloCashout section:
		if (gameType === "hiloCashout"){
			cashout_done = true;
			lastBet.Roll = bet.payoutMultiplier;
			lastBet.target = 0;
			
			// Process cards
			const cards = [];
			cards.push(bet.state.startCard.rank);
			bet.state.rounds.forEach((index) => {
				cards.push(index.card.rank);
			});
			lastBet.targetNumber = "";
			
			// UI Updates
			tdTargetChance.innerHTML = bet.payoutMultiplier.toFixed(2) + "x";
			tdTargetNumber.innerHTML = cards.join(",");
			tdRollNumber.innerHTML = bet.payoutMultiplier.toFixed(2);
			tdRollChance.innerHTML = ""
			
			// Handle card display for loss
			if (bet.payoutMultiplier < 0.98) {
				if(true){
				// This is a loss
				handleLossRoundCard(bet);
				}
			} else {
				// This is a win (cashout with profit)
				const lastRound = bet.state.rounds.at(-1);
				if (lastRound) {
					if(true){
					feedCard(
						lastRound.card,
						bet.state.rounds.length + 1,
						lastRound.guess,
						'win',
						lastRound.payoutMultiplier
					);
					}
				}
			}
			if(true){
			resetCards();
			}
			if(manualhilo){
				running = false
			}
		}
		}
		
		
		if(game != "hilo" && game != "blackjack"){
			cashout_done = true
		}
		if(!bet.active){
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
		if (gameType === "diceRoll" || gameType === "limboBet"){
			if(gameUI){
			rollOnce(bet.state.target, lastBet.Roll, lastBet.win)
			resultMeta.textContent = win ? 'win' : 'lose';
			}
			
		}
		
		var value = document.getElementById("botMenuMode").value;
		if(value == "lua"){
			sendLua();
		} else if(value == "js"){
			if(game === "hilo" || game === "blackjack"){
			if(cashout_done && !manualhilo) {
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
		
		if(hiloguess == 3 && bet.active && running == false && manualhilo == false && cashout_done == false && game === "hilo" && win == false){
			//cashout_done = true
			log("run cashout 1")
			hiloCash()
		}
		}
		if (running && !samuraiskip) {
		//sleepfor(sleeptime).then(() => {
		setTimeout(() => {
        //sleeptime = 0;
        if (!running) return;
		sleeptime = 0;

        const gameHandlers = {
            hilo: () => {
                if (cashout_done) {
                    cashout_done = false;
                    hiloBet(nextbet, startcard);
                } else {
                    const lastCard = currentBet?.state?.rounds?.at(-1)?.card?.rank || currentBet?.state?.startCard?.rank;
                    
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
						log("run cashout 2")
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
            baccarat: () => baccaratbet(nextbet.tie, nextbet.player, nextbet.banker),
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
		//changegame(game);
        if (gameHandlers[game]) {
            gameHandlers[game]();
        }
		}, sleeptime);
    //});
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
		manualhilo = false;
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
			changegame(game);
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
				baccarat: () => baccaratbet(nextbet.tie, nextbet.player, nextbet.banker),
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
					setTimeout(runBet, 10);
					setTimeout(runBet, 150);
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
			changegame(game);
			runBet = (fn, args = []) => {
				if (fastmode) {
					if(game != "blackjack" && game != "hilo" && game != "bluesamurai"){
					setTimeout(() => fn(...args), 10);
					setTimeout(() => fn(...args), 150);
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
				baccarat:    () => runBet(baccaratbet, [nextbet.tie, nextbet.player, nextbet.banker]),
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
						
					
						current_profit = parseFloat(lastBet.payout) - parseFloat(lastBet.amount);
						profit_total += current_profit;
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
						tdamount.innerHTML = lastBet.amount.toFixed(8)
						
						var tdcheck = document.createElement("input");
						tdcheck.type = "checkbox";
						tdcheck.name = "checked";
						tdcheck.checked = "";
						tdcheck.id = "checked";
						
						tdhigh.appendChild(tdcheck);
						tdTargetChance.innerHTML = bet.crash.event.payout.cashoutAt.toFixed(2) + ""
						tdRollChance.innerHTML = ""
						tdProfit.innerHTML = current_profit.toFixed(8)
						tdTargetNumber.innerHTML = ">" + bet.crash.event.payout.cashoutAt.toFixed(2)
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
						
						
						//lastBet.target = target;

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
						//target = parseFloat(target.toFixed(2))
						color = "#f72a42"
						current_profit = parseFloat(lastBet.payout)-parseFloat(lastBet.amount);
						profit_total += current_profit
						wagered += parseFloat(lastBet.amount);
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
						tdTargetNumber.innerHTML = ">" + bet.crash.event.cashoutAt.toFixed(2)
						lastBet.targetNumber = bet.crash.event.cashoutAt;
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
						
						
						//lastBet.target = lastBet.amount;
						
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
												const lastCard = currentBet?.state?.rounds?.at(-1)?.card?.rank || currentBet?.state?.startCard?.rank;
												
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
										baccarat: () => baccaratbet(nextbet.tie, nextbet.player, nextbet.banker),
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
												const lastCard = currentBet?.state?.rounds?.at(-1)?.card?.rank || currentBet?.state?.startCard?.rank;
												
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
										baccarat: () => baccaratbet(nextbet.tie, nextbet.player, nextbet.banker),
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
								const lastCard = currentBet?.state?.rounds?.at(-1)?.card?.rank || currentBet?.state?.startCard?.rank;
								
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
						baccarat: () => baccaratbet(nextbet.tie, nextbet.player, nextbet.banker),
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
setTimeout(() => {
   //darkorLight(!dark);
}, 3000);
addBot();





