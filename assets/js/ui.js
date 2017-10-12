var ui = {
    messageDiv: document.getElementById("message"),
    debug: document.getElementById("debug"),
    secretWordDiv: document.getElementById("secretWord"),
    hangcatDiv: document.getElementById("hangcat"),
    alphabetDiv: document.getElementById("alphabet"),
    scoreboardDiv: document.getElementById("scoreboard"),
    winSpan: document.getElementById("win"),
    loseSpan: document.getElementById("lose"),

    msg: function(message) {
        this.messageDiv.innerHTML=message;
    }
}