var game = {
    secretWord: "",
    dictionary: ["wonderland", "tweedledee", "whiterabbit", "alice", "cheshirecat", "redqueen"],
    lettersInSecretWord: [],
    win: 0,
    lose: 0,
    guesses: 6,

    updateAnswer: function () {
        this.secretWord = this.dictionary[Math.floor(Math.random() * this.dictionary.length)];
      },
    
    getLettersInSecretWord: function() {
       this.lettersInSecretWord=this.secretWord.split("")
    },
    
    guessedLetters: [],

    start: function() {
        lettersYouveGuessed=[],
        this.updateAnswer(),
        this.getLettersInSecretWord(),
        this.guesses = 6
    }
    
}
