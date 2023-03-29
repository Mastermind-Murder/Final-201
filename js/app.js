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
  this.clue4;

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

GamePlayCharacters.prototype.save = function () {
  let stringifyValues = JSON.stringify(this.playableCharacters);
  localStorage.setItem('character',stringifyValues);
};

GamePlayCharacters.prototype.load = function () {
  let valuesFromStorage = JSON.parse(localStorage.getItem('characters'));
  if (valuesFromStorage) {
    valuesFromStorage.forEach(character => {
      this.playableCharacters.push(new Character(character.name, character.age, character.fileLocation));
    });
  }
};


GamePlayCharacters.prototype.assignInfo = function () {

  let backStory = `${this.playableCharacters[0].name} : The victim's business partner who was in severe debt and stood to gain financially from the victim's death`;
  this.playableCharacters[0].backStory = backStory;

  let clue1A = `${this.playableCharacters[0].name} : Was attending a business conference in another city at the time of the murder. Their attendance was confirmed by several colleagues and has a receipt for the hotel stay.`;
  this.playableCharacters[0].clue1 = clue1A;

  let clue2A = `${this.playableCharacters[0].name} : Was at home with their partner at the time of the murder. Their partner can confirm their whereabouts.`;
  this.playableCharacters[0].clue2 = clue2A;

  let clue3A = `${this.playableCharacters[0].name} : Was seen in the vicinity of the crime scene by a witness. Claims they were just taking a walk, but there are no security cameras or other witnesses to corroborate the story.`;
  this.playableCharacters[0].clue3 = clue3A;

  let clue4A = `${this.playableCharacters[0].name} : Was at a bar near the crime scene, but no one there remembers seeing them.`;
  this.playableCharacters[0].clue4 = clue4A;

  let backStory2 = `${this.playableCharacters[1].name} : The victim's ex-friend who had a history of stalking him and was angry over their recent fallout.`;
  this.playableCharacters[1].backStory = backStory2;

  let clue1B = `${this.playableCharacters[1].name} : was out of town visiting family at the time of the murder. Several family members can confirm their whereabouts and they also have a plane tickets and hotel receipts as proof.`;
  this.playableCharacters[1].clue1 = clue1B;

  let clue2B = `${this.playableCharacters[1].name} : was volunteering at a local soup kitchen at the time of the murder. The staff and clients can confirm their presence.
  `;
  this.playableCharacters[1].clue2 = clue2B;

  let clue3B = `${this.playableCharacters[1].name} : was seen arguing with the victim near the crime scene shortly before the murder. Claims it was a chance encounter and they just had a heated discussion, but the witness believes it was more serious.`;
  this.playableCharacters[1].clue3 = clue3B;

  let clue4B = `${this.playableCharacters[1].name} : Claims to have been at home alone at the time of the murder, but there is no one to corroborate their story..`;
  this.playableCharacters[1].clue4 = clue4B;

  let backStory3 = `${this.playableCharacters[2].name} : A former employee who was fired by the victim and had a long-standing grudge against him.`;
  this.playableCharacters[2].backStory = backStory3;

  let clue1C = `${this.playableCharacters[2].name} : was out of the country on a vacation with their family at the time of the murder. They have plane tickets and hotel receipts as proof.`;
  this.playableCharacters[2].clue1 = clue1C;

  let clue2C = `${this.playableCharacters[2].name} : was attending a family wedding out of town at the time of the murder. Several family members can confirm their whereabouts.`;
  this.playableCharacters[2].clue2 = clue2C;

  let clue3C = `${this.playableCharacters[2].name} : was seen in the victim's neighborhood around the time of the murder. Claims he was just passing through on their way to a meeting, but there are no other witnesses or evidence to support the story.`;
  this.playableCharacters[2].clue3 = clue3C;

  let clue4C = `${this.playableCharacters[2].name} : claims to have been working late at the office at the time of the murder, but there is no one to confirm the story.`;
  this.playableCharacters[2].clue4 = clue4C;

  let backStory4 = `${this.playableCharacters[3].name} : A jealous colleague who was passed over for a promotion that the victim received.`;
  this.playableCharacters[3].backStory = backStory4;

  let clue1D = `${this.playableCharacters[3].name} : Was out of town on a business trip at the time of the murder. Several colleagues can confirm their whereabouts and they have receipts for the travel expenses.`;
  this.playableCharacters[3].clue1 = clue1D;

  let clue2D = `${this.playableCharacters[3].name} : was attending a seminar at a local university at the time of the murder. The organizers and attendees can confirm their presence.`;
  this.playableCharacters[3].clue2 = clue2D;

  let clue3D = `${this.playableCharacters[3].name} : was seen arguing with the victim in their office on the day of the murder. Claims it was just a disagreement over a project, but other witnesses heard shouting and saw them storming out.`;
  this.playableCharacters[3].clue3 = clue3D;

  let clue4D = `${this.playableCharacters[3].name} : claims to have been at home watching TV at the time of the murder, but there is no one to confirm their story.`;
  this.playableCharacters[3].clue4 = clue4D;

  let backStory5 = `${this.playableCharacters[4].name} : A rival business partner who wanted to eliminate the victim as competition in the industry.`;
  this.playableCharacters[4].backStory = backStory5;

  let clue1E = `${this.playableCharacters[4].name} : was at a charity event at the time of the murder, and several high-profile guests can confirm their presence. They also donated a significant sum of money to the charity that evening, which was documented.`;
  this.playableCharacters[4].clue1 = clue1E;

  let clue2E = `${this.playableCharacters[4].name} : was meeting with their lawyers at the time of the murder, preparing for a lawsuit. The lawyers can confirm their presence.`;
  this.playableCharacters[4].clue2 = clue2E;

  let clue3E = `${this.playableCharacters[4].name} : was seen lurking around the victim's office building on the day of the murder. Claims they were just passing through, but no one else saw them in the area.`;
  this.playableCharacters[4].clue3 = clue3E;

  let clue4E = `${this.playableCharacters[4].name} : claims to have been at a bar across town at the time of the murder, but there is no one to confirm their story.`;
  this.playableCharacters[4].clue4 = clue4E;

  let backStory6 = `${this.playableCharacters[5].name} : The victim's current bestfriend who had a volatile relationship with him and was known to have fits of rage.`;
  this.playableCharacters[5].backStory = backStory6;

  let clue1F = `${this.playableCharacters[5].name} : was at a job interview at a law firm across town at the time of the murder, and the interviewer can confirm their presence. They also have an email invitation and a thank-you note from the interview as proof.`;
  this.playableCharacters[5].clue1 = clue1F;

  let clue2F = `${this.playableCharacters[5].name} : was volunteering at a homeless shelter at the time of the murder, and several staff and clients can confirm their presence. They also have a certificate of appreciation from the shelter as proof.`;
  this.playableCharacters[5].clue2 = clue2F;

  let clue3F = `${this.playableCharacters[5].name} : claims to have been at home alone at the time of the murder, but there is no one to corroborate their story. They also cannot provide any evidence of what they were doing at the time.`;
  this.playableCharacters[5].clue3 = clue3F;

  let clue4F = `${this.playableCharacters[5].name} : was seen arguing with the victim outside of a coffee shop near the crime scene on the day of the murder. They claim it was just a friendly disagreement, but witnesses saw them shouting and shoving each other.`;
  this.playableCharacters[5].clue4 = clue4F;

  let backStory7 = `${this.playableCharacters[6].name} : The victim's neighbor who had a long-standing feud over a property dispute.`;
  this.playableCharacters[6].backStory = backStory7;

  let clue1G = `${this.playableCharacters[6].name} : They were at a friend's house for a game night at the time of the murder, and several people can confirm their presence. They also have photos and social media posts from the night as proof.`;
  this.playableCharacters[6].clue1 = clue1G;

  let clue2G = `${this.playableCharacters[6].name} : They were volunteering at a homeless shelter at the time of the murder, and several staff and clients can confirm their presence.`;
  this.playableCharacters[6].clue2 = clue2G;

  let clue3G = `${this.playableCharacters[6].name} : They were seen arguing with the victim near the crime scene on the day of the murder. They claim it was just a heated discussion, but witnesses saw them physically pushing each other.`;
  this.playableCharacters[6].clue3 = clue3G;

  let clue4G = `${this.playableCharacters[6].name} : They claim to have been at home alone at the time of the murder, but there is no one to corroborate their story.`;
  this.playableCharacters[6].clue4 = clue4G;

  let backStory8 = `${this.playableCharacters[7].name} : The victim's sibling who was struggling financially and stood to inherit a large sum of money from the victim's estate.`;
  this.playableCharacters[7].backStory = backStory8;

  let clue1H = `${this.playableCharacters[7].name} : was out of town visiting parents at the time of the murder, and several family members can confirm their presence. They also has plane tickets and hotel receipts as proof.`;
  this.playableCharacters[7].clue1 = clue1H;

  let clue2H = `${this.playableCharacters[7].name} : was at a yoga class at the time of the murder, and several classmates can confirm their presence.`;
  this.playableCharacters[7].clue2 = clue2H;

  let clue3H = `${this.playableCharacters[7].name} : was seen arguing with the victim at a coffee shop on the day of the murder. Claims it was just a friendly disagreement, but witnesses saw them throwing a cup of coffee at the victim.`;
  this.playableCharacters[7].clue3 = clue3H;

  let clue4H = `${this.playableCharacters[7].name} : claims to have been at home studying at the time of the murder, but there is no one to confirm their story.`;
  this.playableCharacters[7].clue4 = clue4H;

  let backStory9 = `${this.playableCharacters[8].name} : The victim's former business partner who was forced out of the company and wanted revenge.`;
  this.playableCharacters[8].backStory = backStory9;

  let clue1I = `${this.playableCharacters[8].name} : was at a doctor's appointment at the time of the murder, and the doctor can confirm their presence. They also has a receipt from the appointment as proof.`;
  this.playableCharacters[8].clue1 = clue1I;

  let clue2I = `${this.playableCharacters[8].name} : was at a church service at the time of the murder, and several members of the congregation can confirm their presence.`;
  this.playableCharacters[8].clue2 = clue2I;

  let clue3I = `${this.playableCharacters[8].name} : was seen arguing with the victim in a parking lot near the crime scene on the day of the murder. Claims it was just a business disagreement, but witnesses saw them throwing a punch at the victim.`;
  this.playableCharacters[8].clue3 = clue3I;

  let clue4I = `${this.playableCharacters[8].name} : claims to have been at home sleeping at the time of the murder, but there is no one to confirm his story.`;
  this.playableCharacters[8].clue4 = clue4I;

  let backStory10 = `${this.playableCharacters[9].name} : The victim's personal assistant who was caught stealing money from his accounts and was threatened with exposure.`;
  this.playableCharacters[9].backStory = backStory10;

  let clue1J = `${this.playableCharacters[9].name} : was at a movie theater at the time of the murder, and several people who were there with them can confirm their presence. They also has a ticket stub as proof.`;
  this.playableCharacters[9].clue1 = clue1J;

  let clue2J = `${this.playableCharacters[9].name} : was at a restaurant having dinner with a friend at the time of the murder, and the friend can confirm their presence.`;
  this.playableCharacters[9].clue2 = clue2J;

  let clue3J = `${this.playableCharacters[9].name} : was seen arguing with the victim in a public park near the crime scene on the day of the murder. Claims it was just a minor dispute, but witnesses saw them hitting the victim with a purse`;
  this.playableCharacters[9].clue3 = clue3J;

  let clue4J = `${this.playableCharacters[9].name} : claims to have been at home studying at the time of the murder, but there is no one to confirm her story.`;
  this.playableCharacters[9].clue4 = clue4J;

};



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

function renderCharacterCards() {
  let imageOneEl = document.getElementById('character1');
  let storyOneEl = document.getElementById('story1');
  let imageTwoEl = document.getElementById('character2');
  let storyTwoEl = document.getElementById('story2');
  let imageThreeEl = document.getElementById('character3');
  let storyThreeEl = document.getElementById('story3');
  let imageFourEl = document.getElementById('character4');
  let storyFourEl = document.getElementById('story4');
  let imageFiveEl = document.getElementById('character5');
  let storyFiveEl = document.getElementById('story5');
  let imageSixEl = document.getElementById('character6');
  let storySixEl = document.getElementById('story6');
  let imageSevenEl = document.getElementById('character7');
  let storySevenEl = document.getElementById('story7');
  let imageEightEl = document.getElementById('character8');
  let storyEightEl = document.getElementById('story8');
  let imageNineEl = document.getElementById('character9');
  let storyNineEl = document.getElementById('story9');
  let imageTenEl = document.getElementById('character10');
  let storyTenEl = document.getElementById('story10');

  imageOneEl.src = ourPlayersGame.playableCharacters[0].fileLocation;
  storyOneEl.innerHTML = ourPlayersGame.playableCharacters[0].backStory;
  imageTwoEl.src = ourPlayersGame.playableCharacters[1].fileLocation;
  storyTwoEl.innerHTML = ourPlayersGame.playableCharacters[1].backStory;
  imageThreeEl.src = ourPlayersGame.playableCharacters[2].fileLocation;
  storyThreeEl.innerHTML = ourPlayersGame.playableCharacters[2].backStory;
  imageFourEl.src = ourPlayersGame.playableCharacters[3].fileLocation;
  storyFourEl.innerHTML = ourPlayersGame.playableCharacters[3].backStory;
  imageFiveEl.src = ourPlayersGame.playableCharacters[4].fileLocation;
  storyFiveEl.innerHTML = ourPlayersGame.playableCharacters[4].backStory;
  imageSixEl.src = ourPlayersGame.playableCharacters[5].fileLocation;
  storySixEl.innerHTML = ourPlayersGame.playableCharacters[5].backStory;
  imageSevenEl.src = ourPlayersGame.playableCharacters[6].fileLocation;
  storySevenEl.innerHTML = ourPlayersGame.playableCharacters[6].backStory;
  imageEightEl.src = ourPlayersGame.playableCharacters[7].fileLocation;
  storyEightEl.innerHTML = ourPlayersGame.playableCharacters[7].backStory;
  imageNineEl.src = ourPlayersGame.playableCharacters[8].fileLocation;
  storyNineEl.innerHTML = ourPlayersGame.playableCharacters[8].backStory;
  imageTenEl.src = ourPlayersGame.playableCharacters[9].fileLocation;
  storyTenEl.innerHTML = ourPlayersGame.playableCharacters[9].backStory;
}

function renderClues() {
  let clueOnePTEl = document.getElementById('clue1PT');
  let clueOneCHEl = document.getElementById('clue1CH');
  let clueTwoPTEl = document.getElementById('clue2PT');
  let clueTwoCHEl = document.getElementById('clue2CH');
  let clueThreePTEl = document.getElementById('clue3PT');
  let clueThreeCHEl = document.getElementById('clue3CH');
  let clueFourPTEl = document.getElementById('clue4PT');
  let clueFourCHEl = document.getElementById('clue4CH');


  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[0].clue1;
  console.log("string", ourPlayersGame.playableCharacters[0].clue1);
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[0].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[0].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[0].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[1].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[1].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[1].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[1].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[2].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[2].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[2].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[2].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[3].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[3].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[3].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[3].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[4].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[4].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[4].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[4].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[5].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[5].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[5].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[5].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[6].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[6].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[6].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[6].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[7].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[7].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[7].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[7].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[8].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[8].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[8].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[8].clue4;
  clueOnePTEl.innerHTML = ourPlayersGame.playableCharacters[9].clue1;
  clueTwoPTEl.innerHTML = ourPlayersGame.playableCharacters[9].clue2;
  clueThreePTEl.innerHTML = ourPlayersGame.playableCharacters[9].clue3;
  clueFourPTEl.innerHTML = ourPlayersGame.playableCharacters[9].clue4;
  // clueOneCHEl.innerHTML = ourPlayersGame.playableCharacters[0].clue1;
  // clueTwoCHEl.innerHTML = ourPlayersGame.playableCharacters[0].clue2;
  // clueThreeCHEl.innerHTML = ourPlayersGame.playableCharacters[0].clue3;
  // clueFourCHEl.innerHTML = ourPlayersGame.playableCharacters[0].clue4;
  // clueOneCHEl.innerHTML = ourPlayersGame.playableCharacters[1].clue1;
  // clueTwoCHEl.innerHTML = ourPlayersGame.playableCharacters[1].clue2;
  // clueThreeCHEl.innerHTML = ourPlayersGame.playableCharacters[1].clue3;
  // clueFourCHEl.innerHTML = ourPlayersGame.playableCharacters[1].clue4;
  // clueOneCHEl.innerHTML = ourPlayersGame.playableCharacters[2].clue1;
  // clueTwoCHEl.innerHTML = ourPlayersGame.playableCharacters[2].clue2;
  // clueThreeCHEl.innerHTML = ourPlayersGame.playableCharacters[2].clue3;
  // clueFourCHEl.innerHTML = ourPlayersGame.playableCharacters[2].clue4;
  // clueOneCHEl.innerHTML = ourPlayersGame.playableCharacters[3].clue1;
  // clueTwoCHEl.innerHTML = ourPlayersGame.playableCharacters[3].clue2;
  // clueThreeCHEl.innerHTML = ourPlayersGame.playableCharacters[3].clue3;
  // clueFourCHEl.innerHTML = ourPlayersGame.playableCharacters[3].clue4;
  // clueOneCHEl.innerHTML = ourPlayersGame.playableCharacters[4].clue1;

}

//global function for game
function startTheGame(GamePlayCharacters) {
  GamePlayCharacters.selectGameplayCharacters();
  GamePlayCharacters.resetGame();
  GamePlayCharacters.assignRooms();
  GamePlayCharacters.assignInfo();
  GamePlayCharacters.generateKiller();
  renderClues();
  renderCharacterCards();
}

startTheGame(ourPlayersGame);
// localStorage('game', JSON.stringify(ourPlayersGame));

console.log(ourPlayersGame);
ourPlayersGame.save();
