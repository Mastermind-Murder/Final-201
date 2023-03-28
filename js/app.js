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

Character.prototype.getHowDied = function(){
  return this.howDied;
};

Character.prototype.getClue1 = function(){
  return this.clue1;
};

Character.prototype.getClue2 = function(){
  return this.clue2;
};

Character.prototype.getClue3 = function(){
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

Character.prototype.setDefaultWeapon = function(text){
  this.defaultWeapon = (text);
};

Character.prototype.setHowDied = function(txt){
  this.howDied = txt;
};

Character.prototype.setClue1 = function(txt){
  this.clue1 = txt;
};

Character.prototype.setClue2 = function(txt){
  this.clue2 = txt;
};

Character.prototype.setClue3 = function(txt){
  this.clue3 = txt;
};

//TODO: have getter method for picture file.


//generating random players
// let charachter1 = new Character('Kyle', 33, 'some text Location', 'hammer');
// let charachter2 = new Character('Kimmy', 20, 'Other file location', 'phone');
// let charachter3 = new Character('Kamau', 27, 'file Location', 'uber');




let gameCharacter1 = new Character('Robert Thomas',29,'assets for clue game/Robert Thomas (younger brother, 1).jpg');
let gameCharacter2 = new Character('Samantha Thomas',26, 'assets for clue game/Samantha Thomas (wife, 2).jpg');
let gameCharacter3 = new Character('Richard Johnson',21, 'assets for clue game/Richard Johnson (business partner, 3).jpg');
let gameCharacter4 = new Character('Cynthia Green', 22, 'assets for clue game/Cynthia Green (personal assistant, 4).jpg');
let gameCharacter5 = new Character('Eric Davis', 25, 'assets for clue game/Eric Davis (bodyguard, 5).jpg', 'Railgun');
let gameCharacter6 = new Character('Caroline Rogers',28, 'assets for clue game/Caroline Rogers, (Victim\'s ex-girlfriend, 6).jpg');
let gameCharacter7 = new Character('William Jones',43, 'assets for clue game/William Jones (accountant, 7).jpg');
let gameCharacter8 = new Character('Rebecca Taylor',45, 'assets for clue game/Rebecca Taylor (secretary, 8).jpg');
let gameCharacter9 = new Character('Anthony Brown',13, 'assets for clue game/Anthony Brown (Competitor, 9).jpg');
let gameCharacter10 = new Character('Lisa Williams',23, 'assets for clue game/Lisa Williams (neighbor, 10).jpg');
let gameCharacter11 = new Character('Timothy Baker',41, 'assets for clue game/Timothy Baker (chauffeur, 11).jpg');
let gameCharacter12 = new Character('Maria Rodriguez',37, 'assets for clue game/Maria Rodriguez (housekeeper, 12).jpg');
let gameCharacter13 = new Character('Lawrence Campbell', 41, 'assets for clue game/Lawrence Campbell (former employee, 13).jpg');
let gameCharacter14 = new Character('Jessica Parker',42, 'assets for clue game/Jessica Parker (former lover, 14).jpg');
let gameCharacter15 = new Character('Patrick Nelson', 69, 'assets for clue game/Patrick Nelson (lawyer, 15).jpg');
let gameCharacter16 = new Character('Michael Wright', 38, 'assets for clue game/Michael Wright (stockbroker, 16).jpg');
let gameCharacter17 = new Character('Rachel Scott',26, 'assets for clue game/Rachel Scott (journalist-friend, 17).jpg');
let gameCharacter18 = new Character('Samuel Young',12, 'assets for clue game/Samuel Young (rival, 18).jpg');
let gameCharacter19 = new Character('Emily Collins',15, 'assets for clue game/Emily Collins (doctor, 19).jpg');
let gameCharacter20 = new Character('Jacob Martinez', 27,'assets for clue game/Jacob Martinez (security guard, 20).jpg ');

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
gameCharacter20.setGoodAliby(' Jacob claimed to have been on duty guarding Alexander’s office at the time of the murder, and several colleagues confirmed his alibi.');

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

CharacterCollection.prototype.addBadAlibi = function(){
  for(let i =0; i<this.collectionOfCharacters.length;i++){
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

GamePlayCharacters.prototype.selectGameplayCharacters = function(){
  let tempCharacters = [];
  let countToBePushed = 10;
  let generatedNumbers = [];

  do{
    let randomNumber = Math.floor(Math.random() * this.charachtersInPlay.collectionOfCharacters.length);

    if(generatedNumbers.includes(randomNumber)){
      console.log(`this number ${randomNumber} is already used`);
    }else{
      tempCharacters.push(this.charachtersInPlay.collectionOfCharacters[randomNumber]);
      countToBePushed--;
    }
    generatedNumbers.push(randomNumber);

  }while(countToBePushed > 0);

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
  let randomKiller = Math.floor(Math.random() * this.charachtersInPlay.collectionOfCharacters.length);
  this.playableCharacters[randomKiller].setIsKiller(true);
  //reference collectionsOfCharacters because that is the name of the attribute given in the Characters collection object
  //characters in play comes from GamePlay characters object
};

GamePlayCharacters.prototype.resetGame = function () {
  for (let i = 0; i < this.charachtersInPlay.length; i++) {
    this.playableCharacters[i].setIsKiller(false);
  }
};

//assign rooms for characters in Collection Of Characters array
GamePlayCharacters.prototype.assignRooms = function () {
  let rooms = [1,1,1,1,1,2,2,2,2,2];

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
GamePlayCharacters.prototype.checkIfSelectedIsKiller = function(guessedCharacter){

  do{
    for(let i = 0; i< this.charachtersInPlay.collectionOfCharacters.length; i++){
      if(guessedCharacter.checkIsKiller()){
        this.winGame = true;
        console.log('guessed the killer');
        alert('The killer was captured/killed');
      } else{
        this.guessedKiller++;
        console.log(`${this.guessedKiller} is current guessed killer count `);
      }
    }

  }while (this.guessedKiller < this.guessLimit);//check here

};

GamePlayCharacters.prototype.assignInfo = function(){
  let inkpen  = ['inkpen', 'hole in eye socket', 'hole in neck', 'blood coming from chest'];
  for(let i = 0; i < inkpen.length; i++){
    this.playableCharacters[0].setDefaultWeapon(inkpen[0]);
    this.playableCharacters[0].setClue1(inkpen[1]);
    this.playableCharacters[0].setClue2(inkpen[2]);
    this.playableCharacters[0].setClue2(inkpen[3]);
  }
};
















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

console.log(ourPlayersGame);
