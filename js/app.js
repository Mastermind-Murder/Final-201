'use srict';


//Constructor function for all Characters
function Character(name, age, fileLocation) {

  this.name = name;
  this.age = age;
  this.fileLocation = fileLocation;
  this.defaultWeapon;
  this.id = this.name + this.age;
  //TODO: GETTER AND SETTER BELOW
  this.howDied = `${this.name} has been found dead, wounds look like they got hit with ${this.defaultWeapon} please investigate`;
  this.clue1;
  this.clue2;
  this.clue3;
  this.isKiller = false;
  this.timesUsed = 0;// need to use this somewhere

  this.backStory = '';
  this.badAlibi = '';
  this.goodAlibi = '';
  this.backStory;
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

Character.prototype.getHowDied = function () {
  return this.howDied;
};

Character.prototype.getClue1 = function () {
  return this.clue1;
};

Character.prototype.getClue2 = function () {
  return this.clue2;
};

Character.prototype.getClue3 = function () {
  return this.clue3;
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

Character.prototype.setDefaultWeapon = function (text) {
  this.defaultWeapon = (text);
};

Character.prototype.setHowDied = function (txt) {
  this.howDied = txt;
};

Character.prototype.setClue1 = function (txt) {
  this.clue1 = txt;
};

Character.prototype.setClue2 = function (txt) {
  this.clue2 = txt;
};

Character.prototype.setClue3 = function (txt) {
  this.clue3 = txt;
};

//TODO: have getter method for picture file.


//generating random players
// let charachter1 = new Character('Kyle', 33, 'some text Location', 'hammer');
// let charachter2 = new Character('Kimmy', 20, 'Other file location', 'phone');
// let charachter3 = new Character('Kamau', 27, 'file Location', 'uber');




let gameCharacter1 = new Character('Robert Thomas', 35, 'assets for clue game/Robert Thomas (younger brother, 1).jpg');
let gameCharacter2 = new Character('Samantha Thomas', 38, 'assets for clue game/Samantha Thomas (wife, 2).jpg');
let gameCharacter3 = new Character('Richard Johnson', 33, 'assets for clue game/Richard Johnson (business partner, 3).jpg');
let gameCharacter4 = new Character('Cynthia Green', 42, 'assets for clue game/Cynthia Green (personal assistant, 4).jpg');
let gameCharacter5 = new Character('Eric Davis', 39, 'assets for clue game/Eric Davis (bodyguard, 5).jpg', 'Railgun');
let gameCharacter6 = new Character('Caroline Rogers', 35, 'assets for clue game/Caroline Rogers, (Victim\'s ex-girlfriend, 6).jpg');
let gameCharacter7 = new Character('William Jones', 43, 'assets for clue game/William Jones (accountant, 7).jpg');
let gameCharacter8 = new Character('Rebecca Taylor', 45, 'assets for clue game/Rebecca Taylor (secretary, 8).jpg');
let gameCharacter9 = new Character('Anthony Brown', 43, 'assets for clue game/Anthony Brown (Competitor, 9).jpg');
let gameCharacter10 = new Character('Lisa Williams', 38, 'assets for clue game/Lisa Williams (neighbor, 10).jpg');
let gameCharacter11 = new Character('Timothy Baker', 41, 'assets for clue game/Timothy Baker (chauffeur, 11).jpg');
let gameCharacter12 = new Character('Maria Rodriguez', 37, 'assets for clue game/Maria Rodriguez (housekeeper, 12).jpg');
let gameCharacter13 = new Character('Lawrence Campbell', 41, 'assets for clue game/Lawrence Campbell (former employee, 13).jpg');
let gameCharacter14 = new Character('Jessica Parker', 42, 'assets for clue game/Jessica Parker (former lover, 14).jpg');
let gameCharacter15 = new Character('Patrick Nelson', 69, 'assets for clue game/Patrick Nelson (lawyer, 15).jpg');
let gameCharacter16 = new Character('Michael Wright', 38, 'assets for clue game/Michael Wright (stockbroker, 16).jpg');
let gameCharacter17 = new Character('Rachel Scott', 41, 'assets for clue game/Rachel Scott (journalist-friend, 17).jpg');
let gameCharacter18 = new Character('Samuel Young', 37, 'assets for clue game/Samuel Young (rival, 18).jpg');
let gameCharacter19 = new Character('Emily Collins', 32, 'assets for clue game/Emily Collins (doctor, 19).jpg');
let gameCharacter20 = new Character('Jacob Martinez', 40, 'assets for clue game/Jacob Martinez (security guard, 20).jpg ');

gameCharacter1.setBadAlibi('Robert claimed to have been at home at the time of the murder, but there was no one who could verify his alibi.');
gameCharacter1.setGoodAliby('Robert claimed to have been at a business meeting at the time of the murder, and several colleagues confirmed his alibi.');
gameCharacter2.setGoodAliby('Samantha claimed to have been out of town on a business trip at the time of the murder, and her flight records and hotel receipts corroborated her story.');
gameCharacter3.setGoodAliby('Richard claimed to have been at a business meeting at the time of the murder, and several colleagues confirmed his alibi.');
gameCharacter4.setGoodAliby('Cynthia claimed to have been at home with her family at the time of the murder, and her family members confirmed her alibi.');
gameCharacter5.setGoodAliby('Eric claimed to have been on duty guarding Alexander’s house at the time of the murder, and several neighbors confirmed seeing him there.');

gameCharacter6.setGoodAliby('Caroline claimed to have been out with friends at the time of the murder, and several of her friends confirmed her alibi.');
gameCharacter7.setGoodAliby('William claimed to have been working late at his office at the time of the murder, and his colleagues confirmed his alibi.');
gameCharacter8.setGoodAliby('Rebecca claimed to have been at a yoga class at the time of the murder, and the instructor and several classmates confirmed her alibi.');
gameCharacter9.setGoodAliby('Anthony claimed to have been out of town on a business trip at the time of the murder, and his flight records and hotel receipts corroborated his story.');
gameCharacter10.setGoodAliby('Lisa claimed to have been at home with her husband at the time of the murder, and her husband confirmed her alibi.');

gameCharacter11.setGoodAliby('Timothy claimed to have been driving Alexander to a business meeting at the time of the murder, and several witnesses confirmed seeing them together.');
gameCharacter12.setGoodAliby('Maria claimed to have been cleaning another house at the time of the murder, and her employer confirmed her alibi.');
gameCharacter13.setGoodAliby('Lawrence claimed to have been out of town on vacation at the time of the murder, and his travel records and hotel receipts corroborated his story.');
gameCharacter14.setGoodAliby('Jessica claimed to have been at home with her husband at the time of the murder, and her husband confirmed her alibi.');
gameCharacter15.setGoodAliby('Patrick claimed to have been in his office at the time of the murder, and several colleagues confirmed his alibi.');

gameCharacter16.setGoodAliby('Michael claimed to have been at home with his family at the time of the murder, and his family members confirmed his alibi.');
gameCharacter17.setGoodAliby('Rachel claimed to have been at a press conference at the time of the murder, and several colleagues confirmed her alibi.');
gameCharacter18.setGoodAliby('Samuel claimed to have been at home with his family at the time of the murder, and his family members confirmed his alibi.');
gameCharacter19.setGoodAliby('Emily claimed to have been at the hospital at the time of the murder, and hospital records confirmed her story.');
gameCharacter20.setGoodAliby('Jacob claimed to have been on duty guarding Alexander’s office at the time of the murder, and several colleagues confirmed his alibi.');

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

CharacterCollection.prototype.addBadAlibi = function () {
  for (let i = 0; i < this.collectionOfCharacters.length; i++) {
    this.collectionOfCharacters[i].setBadAlibi('Claimed to have been at home at the time of the murder, but there was no one who could verify his alibi.');
  }
};


//creating location for all players to be stored --Testing here --
let ourTotalPlayers = new CharacterCollection();
ourTotalPlayers.addCharacter(gameCharacter1);
ourTotalPlayers.addCharacter(gameCharacter2);
ourTotalPlayers.addCharacter(gameCharacter3);
ourTotalPlayers.addCharacter(gameCharacter4);
ourTotalPlayers.addCharacter(gameCharacter5);
ourTotalPlayers.addCharacter(gameCharacter6);
ourTotalPlayers.addCharacter(gameCharacter7);
ourTotalPlayers.addCharacter(gameCharacter8);
ourTotalPlayers.addCharacter(gameCharacter9);
ourTotalPlayers.addCharacter(gameCharacter10);
ourTotalPlayers.addCharacter(gameCharacter11);
ourTotalPlayers.addCharacter(gameCharacter12);
ourTotalPlayers.addCharacter(gameCharacter13);
ourTotalPlayers.addCharacter(gameCharacter14);
ourTotalPlayers.addCharacter(gameCharacter15);
ourTotalPlayers.addCharacter(gameCharacter16);
ourTotalPlayers.addCharacter(gameCharacter17);
ourTotalPlayers.addCharacter(gameCharacter18);
ourTotalPlayers.addCharacter(gameCharacter19);
ourTotalPlayers.addCharacter(gameCharacter20);

ourTotalPlayers.addBadAlibi();
console.log(ourTotalPlayers);


//||||||||||||Constructor for the GamePlay Characters during game session ||||||||||||||||||||||||||||||
function GamePlayCharacters(arrayOfCharacters) {
  this.charachtersInPlay = arrayOfCharacters;
  this.winGame; //to be used with boolean true false TODO: make method to win the game
  //Todo: implement counter for number of guesses total and number of guesses limit?
  this.guessedKiller = 0;
  this.guessLimit = 10; //setting to 10 for now
  this.playableCharacters;

}

GamePlayCharacters.prototype.selectGameplayCharacters = function () {
  let tempCharacters = [];
  let countToBePushed = 10;
  let generatedNumbers = [];

  do {
    let randomNumber = Math.floor(Math.random() * this.charachtersInPlay.collectionOfCharacters.length);

    if (generatedNumbers.includes(randomNumber)) {
      console.log(`this number ${randomNumber} is already used`);
    } else {
      tempCharacters.push(this.charachtersInPlay.collectionOfCharacters[randomNumber]);
      countToBePushed--;
    }
    generatedNumbers.push(randomNumber);

  } while (countToBePushed > 0);

  this.playableCharacters = tempCharacters;

};



GamePlayCharacters.prototype.removeCharacter = function (Character) {
  for (let i = 0; i < this.charachtersInPlay.collectionOfCharacters.length; i++) {
    if (Character.id === this.charachtersInPlay.collectionOfCharacters[i].id) {
      this.charachtersInPlay.collectionOfCharacters.splice(i, 1);
    }
  }
};

GamePlayCharacters.prototype.generateKiller = function () {
  let randomKiller = Math.floor(Math.random() * this.playableCharacters.length);
  this.playableCharacters[randomKiller].isKiller = true;
};
  //reference collectionsOfCharacters because that is the name of the attribute given in the Characters collection object
  //characters in play comes from GamePlay characters object

GamePlayCharacters.prototype.resetGame = function () {
  for (let i = 0; i < this.charachtersInPlay.length; i++) {
    this.playableCharacters[i].setIsKiller(false);
  }
};

//assign rooms for characters in Collection Of Characters array
GamePlayCharacters.prototype.assignRooms = function () {
  let rooms = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2];

  //shuffle array for rooms
  for (let i = rooms.length - 1; i > 0; i--) {
    //generate random number
    let j = Math.floor(Math.random() * (i + 1));
    let temp = rooms[i];
    rooms[i] = rooms[j];
    rooms[j] = temp;

    //console.log(`this is J: ${j} and this is temp: ${temp} the value of i is: ${i} rooms.length is eqaul to ${rooms.length - 1}`);
  }

  for (let i = 0; i < this.playableCharacters.length; i++) {
    let roomAssignment = rooms[i];
    this.playableCharacters[i].setRoomLocation(roomAssignment);
  }
};

//this will check if selected item is a killer
GamePlayCharacters.prototype.checkIfSelectedIsKiller = function (guessedCharacter) {

  do {
    for (let i = 0; i < this.charachtersInPlay.collectionOfCharacters.length; i++) {
      if (guessedCharacter.checkIsKiller()) {
        this.winGame = true;
        console.log('guessed the killer');
        alert('The killer was captured/killed');
      } else {
        this.guessedKiller++;
        console.log(`${this.guessedKiller} is current guessed killer count `);
      }
    }

  } while (this.guessedKiller < this.guessLimit);//check here

};

GamePlayCharacters.prototype.assignInfo = function () {
 
  let backStory=`${this.playableCharacters[0].name} :The victim's business partner who was in severe debt and stood to gain financially from the victim's death`
  this.playableCharacters[0].backStory=backStory;
  
  let backStory2=`${this.playableCharacters[1].name} The victim's ex-friend who had a history of stalking him and was angry over their recent fallout.`
  this.playableCharacters[1].backStory=backStory2;
 
  let backStory3=`${this.playableCharacters[2].name} A former employee who was fired by the victim and had a long-standing grudge against him.`
  this.playableCharacters[2].backStory=backStory3;
  
  let backStory4=`${this.playableCharacters[3].name} A jealous colleague who was passed over for a promotion that the victim received.`
  this.playableCharacters[3].backStory=backStory4;
  
  let backStory5=`${this.playableCharacters[4].name} A rival business partner who wanted to eliminate the victim as competition in the industry.`
  this.playableCharacters[4].backStory=backStory5;
  
  let backStory6=`${this.playableCharacters[5].name} The victim's current bestfriend who had a volatile relationship with him and was known to have fits of rage.`
  this.playableCharacters[5].backStory=backStory6;
  
  let backStory7=`${this.playableCharacters[6].name} The victim's neighbor who had a long-standing feud over a property dispute.`
  this.playableCharacters[6].backStory=backStory7;
  
  let backStory8=`${this.playableCharacters[7].name} The victim's sibling who was struggling financially and stood to inherit a large sum of money from the victim's estate.`
  this.playableCharacters[7].backStory=backStory8;
  
  let backStory9=`${this.playableCharacters[8].name} The victim's former business partner who was forced out of the company and wanted revenge.`
  this.playableCharacters[8].backStory=backStory9;

  
  let backStory10=`${this.playableCharacters[9].name} The victim's personal assistant who was caught stealing money from his accounts and was threatened with exposure.`
  this.playableCharacters[9].backStory=backStory10;
}

//global function for game
function startTheGame(GamePlayCharacters) {
  GamePlayCharacters.selectGameplayCharacters();
  GamePlayCharacters.resetGame();
  GamePlayCharacters.assignRooms();
  GamePlayCharacters.assignInfo();
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

startTheGame(ourPlayersGame);
let imageOneEl = document.getElementById('character1');
let imageTwoEl = document.getElementById('character2');
let imageThreeEl = document.getElementById('character3');
let imageFourEl = document.getElementById('character4');
let imageFiveEl = document.getElementById('character5');
let imageSixEl = document.getElementById('character6');
let imageSevenEl = document.getElementById('character7');
let imageEightEl = document.getElementById('character8');
let imageNineEl = document.getElementById('character9');
let imageTenEl = document.getElementById('character10');
console.log(ourPlayersGame.playableCharacters[0].fileLocation);

imageOneEl.src = ourPlayersGame.playableCharacters[0].fileLocation;
imageTwoEl.src = ourPlayersGame.playableCharacters[1].fileLocation;
imageThreeEl.src = ourPlayersGame.playableCharacters[2].fileLocation;
imageFourEl.src = ourPlayersGame.playableCharacters[3].fileLocation;
imageFiveEl.src = ourPlayersGame.playableCharacters[4].fileLocation;
imageSixEl.src = ourPlayersGame.playableCharacters[5].fileLocation;
imageSevenEl.src = ourPlayersGame.playableCharacters[6].fileLocation;
imageEightEl.src = ourPlayersGame.playableCharacters[7].fileLocation;
imageNineEl.src = ourPlayersGame.playableCharacters[8].fileLocation;
imageTenEl.src = ourPlayersGame.playableCharacters[9].fileLocation;
console.log(ourPlayersGame);

console.log(ourPlayersGame);