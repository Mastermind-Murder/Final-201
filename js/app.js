'use srict';

//Constructor function for all Characters
function Character(name, age, fileLocation, defaultWeapon) {

  this.name = name;
  this.age = age;
  this.fileLocation = fileLocation;
  this.defaultWeapon = defaultWeapon;
  this.id = this.name + this.age;

  this.isKiller = false;
  this.timesUsed = 0;// need to use this somewhere

  this.backStory = '';
  this.badAlibi = '';
  this.goodAlibi = '';

  this.roomLocation = 0;
}



//function to change the status of the killer
Character.prototype.setIsKiller = function (setKiller) {
  this.isKiller = setKiller;
};


//Getter methods for each Character object
Character.prototype.checkIsKiller = function () {
  return this.isKiller;
};

Character.prototype.getBackStory = function () {
  return (this.backStory);
};

Character.prototype.getBadAlibi = function () {
  return this.badAlibi;
};

Character.prototype.getGoodAlibi = function () {
  return this.goodAlibi;
};


//setters for each charachter object
Character.prototype.setBackStory = function (someText) {
  this.backStory = someText;
};

Character.prototype.setBadAlibi = function (someText) {
  this.badAlibi = someText;
};

Character.prototype.setGoodAliby = function (someText) {
  this.goodAlibi = someText;
};

//set the room location for player
Character.prototype.setRoomLocation = function (newRoom) {
  this.roomLocation = newRoom;
};


//generating random players
let charachter1 = new Character('Kyle', 33, 'some text Location', 'hammer');
let charachter2 = new Character('Kimmy', 20, 'Other file location', 'phone');
let charachter3 = new Character('Kamau', 27, 'file Location', 'uber');

charachter1.setBackStory('this person likes dolls');
charachter2.setBackStory('Another back story');
charachter3.setBackStory('the last random back sotry');

charachter1.setBadAlibi('this is a bad alibi');
charachter2.setBadAlibi('this is another bad aliby');
charachter3.setBadAlibi('this is the third bad alibi');

charachter1.setGoodAliby('this is a good alibi');
charachter1.setGoodAliby('this is another 2 good alibi');
charachter1.setGoodAliby('this is the thrid good alibi');


//charachter collection constructor this will hold all characters for the game
function CharacterCollection() {
  this.collectionOfCharacters = [];
}

//method to check to see if Character is already in the collection
CharacterCollection.prototype.addCharacter = function (Character) {

  if (this.collectionOfCharacters.includes(Character)) {
    console.log('character is already in array');

  } else {
    this.collectionOfCharacters.push(Character);
  }
};


//creating location for all players to be stored --Testing here --
let ourTotalPlayers = new CharacterCollection();
ourTotalPlayers.addCharacter(charachter1);
ourTotalPlayers.addCharacter(charachter2);
ourTotalPlayers.addCharacter(charachter3);
ourTotalPlayers.addCharacter(charachter1);

// console.log(ourTotalPlayers);


//Constructor for the GamePlay Characters during game session
function GamePlayCharacters(arrayOfCharacters) {
  this.charachtersInPlay = arrayOfCharacters;
  this.winGame; //to be used with boolean true false TODO: make method to win the game
  //Todo: implement counter for number of guesses total and number of guesses limit?
  this.guessedKiller = 0;
  this.guessLimit = 10; //setting to 10 for now

}




GamePlayCharacters.prototype.removeCharacter = function (Character) {
  for (let i = 0; i < this.charachtersInPlay.collectionOfCharacters.length; i++) {
    if (Character.id === this.charachtersInPlay.collectionOfCharacters[i].id) {
      this.charachtersInPlay.collectionOfCharacters.splice(i, 1);
    }
  }
};

GamePlayCharacters.prototype.generateKiller = function () {
  let randomKiller = Math.floor(Math.random() * this.charachtersInPlay.collectionOfCharacters.length);
  this.charachtersInPlay.collectionOfCharacters[randomKiller].setIsKiller(true);
  //reference collectionsOfCharacters because that is the name of the attribute given in the Characters collection object
  //characters in play comes from GamePlay characters object
};

GamePlayCharacters.prototype.resetGame = function () {
  for (let i = 0; i < this.charachtersInPlay.collectionOfCharacters.length; i++) {
    this.charachtersInPlay.collectionOfCharacters[i].setIsKiller(false);
  }
};

//assign rooms for characters in Collection Of Characters array
GamePlayCharacters.prototype.assignRooms = function () {
  let rooms = [1, 2,1,2];

  //shuffle array for rooms
  for (let i = rooms.length - 1; i > 0; i--) {
    //generate random number
    let j = Math.floor(Math.random() * (i + 1));
    let temp = rooms[i];
    rooms[i] = rooms[j];
    rooms[j] = temp;

    console.log(`this is J: ${j} and this is temp: ${temp} the value of i is: ${i} rooms.length is eqaul to ${rooms.length - 1}`);
  }

  for (let i = 0; i < this.charachtersInPlay.collectionOfCharacters.length; i++) {
    let roomAssignment = rooms[i];
    this.charachtersInPlay.collectionOfCharacters[i].setRoomLocation(roomAssignment);
  }
};

//this will check if selected item is a killer
GamePlayCharacters.prototype.checkIfSelectedIsKiller = function(guessedCharacter){

  do{
    for(let i = 0; i< this.charachtersInPlay.collectionOfCharacters.length; i++){
      if(guessedCharacter.checkIsKiller()){
        this.winGame = true;
        console.log("guessed the killer");
      } else{
        this.guessedKiller++;
        console.log(`${this.guessedKiller} is current guessed killer count `);
      }
    }

  }while (this.guessedKiller < this.guessLimit);//check here

};


//global functions for game
function startTheGame(GamePlayCharacters) {
  GamePlayCharacters.resetGame();
  GamePlayCharacters.assignRooms();
  GamePlayCharacters.generateKiller();
}
















//For --Testing Below --

let ourPlayersGame = new GamePlayCharacters(ourTotalPlayers);
// ourPlayersGame.resetGame();
// ourPlayersGame.assignRooms();
console.log(ourPlayersGame);
// ourPlayersGame.generateKiller();
// console.log(ourPlayersGame);
//ourPlayersGame.removeCharacter(charachter1);
// console.log(ourPlayersGame);
startTheGame(ourPlayersGame);

console.log(ourPlayersGame);
