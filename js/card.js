'use strict';

const cards1 = document.querySelectorAll('.card');

cards1.forEach(card => {
  card.addEventListener('click', function() {
    this.classList.toggle('flip'); // This toggles the 'flip' class to flip the card
  });
});


function CandyHorror() {
  this.peopleInRoom = [];

  this.loadPeopleFromMemory = function () {
    let valuesFromStorage = JSON.parse(localStorage.getItem('characters'));
    this.peopleInRoom = valuesFromStorage;
  };
}

let candyHorrorRoom = new CandyHorror();
candyHorrorRoom.loadPeopleFromMemory();

function renderRoomData() {

  let cardContainer = document.getElementById('cardContainer');


  for (let i = 0; i < candyHorrorRoom.peopleInRoom.length; i++) {
    if(candyHorrorRoom.peopleInRoom[i].roomLocation === 2){

      let mainDiv = document.createElement('div');
      mainDiv.className = ('card ' + i);

      let div1 = document.createElement('div');
      div1.className = 'card-front';

      let div2 = document.createElement('div');
      div2.className = 'card-back';

      let div3 = document.createElement('div');
      div3.className = 'card-back';

      let placedImage = document.createElement('img');
      placedImage.src = candyHorrorRoom.peopleInRoom[i].fileLocation;
      div1.appendChild(placedImage);
      mainDiv.appendChild(div1);

      if (candyHorrorRoom.peopleInRoom[i].isKiller) {
        let ptag1 = document.createElement('p');
        ptag1.innerHTML = candyHorrorRoom.peopleInRoom[i].clue3;
        let ptag2 = document.createElement('p');
        ptag2.innerHTML = candyHorrorRoom.peopleInRoom[i].clue4;
        let breakTag = document.createElement('br');
        div2.appendChild(ptag1);
        div2.appendChild(breakTag);
        div2.appendChild(ptag2);
        mainDiv.appendChild(div2);
      } else {
        let tempTag = document.createElement('p');
        tempTag.innerHTML = candyHorrorRoom.peopleInRoom[i].clue1;
        let temptag2 = document.createElement('p');
        temptag2.innerHTML = candyHorrorRoom.peopleInRoom[i].clue2;
        let otherTag = document.createElement('br');
        div2.appendChild(tempTag);
        div2.appendChild(otherTag);
        div2.appendChild(temptag2);
        mainDiv.appendChild(div2);
      }

      cardContainer.appendChild(mainDiv);
    }else{
      //console.log('they do not belong in this room');
    }
  }
}

let timeLeft = 90; // 2 minutes in seconds
let timer = document.getElementById('timer');

function startTimer() {

  let countdown = setInterval(function() {
    if (timeLeft <= 0) {
      clearInterval(countdown);
      timer.innerHTML = 'Time\'s up!';
      const collection1 = document.getElementsByClassName('card-front');
      console.log(collection1);
      for(let i=collection1.length-1; i>=0; i--){
        console.log(collection1[i]);
        collection1.item(i).className = 'blackout';
      }
      const collection2 = document.getElementsByClassName('card-back');
      for(let i=collection2.length-1; i>=0; i--){
        collection2.item(i).className = 'blackout';
      }

      console.log('timer ended');
    } else {
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      timer.innerHTML = minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      timeLeft--;
    }
  }, 1000); // run the countdown every second
}

renderRoomData();
//console.log(candyHorrorRoom);

