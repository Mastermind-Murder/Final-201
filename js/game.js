//This flips the cards

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});





// let inkpen  = ['inkpen', 'hole in eye socket', 'hole in neck', 'blood coming from chest'];
// for(let i = 0; i < inkpen.length; i++){
//   this.playableCharacters[0].setDefaultWeapon(inkpen[0]);
//   this.playableCharacters[0].setClue1(inkpen[1]);
//   this.playableCharacters[0].setClue2(inkpen[2]);
//   this.playableCharacters[0].setClue2(inkpen[3]);
// }

// let arsenic = ['Arsenic', 'foaming at the mouth', 'vomit near vivtim','blood coming from nose'];
// for(let i = 0; i < arsenic.length; i++){
//   this.playableCharacters[1].setDefaultWeapon(arsenic[0]);
//   this.playableCharacters[1].setClue1(arsenic[1]);
//   this.playableCharacters[1].setClue2(arsenic[2]);
//   this.playableCharacters[1].setClue2(arsenic[3]);
// }

// let candleHolder = ['candleholder', 'largebruise on forehead', 'large indentation on head', 'candle laying next to victim'];
// for(let i = 0; i < candleHolder.length; i++){
//   this.playableCharacters[2].setDefaultWeapon(candleHolder[0]);
//   this.playableCharacters[2].setClue1(candleHolder[1]);
//   this.playableCharacters[2].setClue2(candleHolder[2]);
//   this.playableCharacters[2].setClue2(candleHolder[3]);
// }

// let snakeBite = ['snake bite', '2 small holes in hand', 'bluish tint to lower arm', 'swelling of the hand'];
// for(let i = 0; i < snakeBite.length; i++){
//   this.playableCharacters[3].setDefaultWeapon(snakeBite[0]);
//   this.playableCharacters[3].setClue1(snakeBite[1]);
//   this.playableCharacters[3].setClue2(snakeBite[2]);
//   this.playableCharacters[3].setClue2(snakeBite[3]);
// }

// let carbonMonoxide = ['carbon monoxide', 'complained of being dizzy', 'complained of having a headache', 'did not speak coherently'];
// for(let i = 0; i < candleHolder.length; i++){
//   this.playableCharacters[4].setDefaultWeapon(carbonMonoxide[0]);
//   this.playableCharacters[4].setClue1(carbonMonoxide[1]);
//   this.playableCharacters[4].setClue2(carbonMonoxide[2]);
//   this.playableCharacters[4].setClue2(carbonMonoxide[3]);
// }

// let yoyo = ['yoyo', 'red marks on the neck', 'burst blood vessels around the eyes', 'purple bruises on the neck'];
// for(let i = 0; i < yoyo.length; i++){
//   this.playableCharacters[5].setDefaultWeapon(yoyo[0]);
//   this.playableCharacters[5].setClue1(yoyo[1]);
//   this.playableCharacters[5].setClue2(yoyo[2]);
//   this.playableCharacters[5].setClue2(yoyo[3]);
// }

// let champagneBottle = ['champagne bottle', 'broken glass around', 'shards of glass around head', 'blood splatter on the ceiling'];
// for(let i = 0; i < yoyo.champagneBottle; i++){
//   this.playableCharacters[6].setDefaultWeapon(champagneBottle[0]);
//   this.playableCharacters[6].setClue1(champagneBottle[1]);
//   this.playableCharacters[6].setClue2(champagneBottle[2]);
//   this.playableCharacters[6].setClue2(champagneBottle[3]);
// }

// let drowning = ['drowining', 'the hair is wet', 'the stomach looks bloated full of water', 'the body is laying un-naturaly'];
// for(let i = 0; i < drowning.champagneBottle; i++){
//   this.playableCharacters[7].setDefaultWeapon(drowning[0]);
//   this.playableCharacters[7].setClue1(drowning[1]);
//   this.playableCharacters[7].setClue2(drowning[2]);
//   this.playableCharacters[7].setClue2(drowning[3]);
// }

// let powerDrill = ['power drill', 'Nail-sized hole in the side of victim’s head', 'Drill bits scattered on the floor', 'An extension cord is splattered with blood nearby'];
// for(let i = 0; i < powerDrill.champagneBottle; i++){
//   this.playableCharacters[8].setDefaultWeapon(powerDrill[0]);
//   this.playableCharacters[8].setClue1(powerDrill[1]);
//   this.playableCharacters[8].setClue2(powerDrill[2]);
//   this.playableCharacters[8].setClue2(powerDrill[3]);
// }

// let vape = ['vape', 'hands are burned', 'small smoking device next to victim', 'pocket seems to have been burned'];
// for(let i = 0; i < vape.champagneBottle; i++){
//   this.playableCharacters[9].setDefaultWeapon(vape[0]);
//   this.playableCharacters[9].setClue1(vape[1]);
//   this.playableCharacters[9].setClue2(vape[2]);
//   this.playableCharacters[9].setClue2(vape[3]);
// }

