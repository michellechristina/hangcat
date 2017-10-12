'use strict'
var ui = {
    messageDiv: document.getElementById("message"),
    debugDiv: document.getElementById("debug"),
    secretWordDiv: document.getElementById("secretWord"),
    hangcatDiv: document.getElementById("hangcat"),
    alphabetDiv: document.getElementById("alphabet"),
    scoreboardDiv: document.getElementById("scoreboard"),
    winSpan: document.getElementById("win"),
    loseSpan: document.getElementById("lose"),

    msg: function(message) {
        this.messageDiv.innerHTML=message;
    },

    debug: function(message) {
        this.debugDiv.innerHTML=`<pre>${JSON.stringify(message, null, 2)}</pre>`;
    },
    addSecretWordToDisplay: function(){
        game.lettersInSecretWord.forEach(function(letter) {
            var div = document.createElement('div');
            div.dataset.letter = letter;
            div.classList = "letter";
            div.innerHTML = "_";
            ui.secretWordDiv.appendChild(div);
        });
    },
    start: function(){
        this.addSecretWordToDisplay();
        this.msg("Let the Game Begin");
        this.debug(game);
    }
}

