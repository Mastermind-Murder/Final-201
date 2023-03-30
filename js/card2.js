//This flips the cards

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
    if(candyHorrorRoom.peopleInRoom[i].roomLocation === 1){

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
      console.log('they do not belong in this room');
    }
  }
}

renderRoomData();
console.log(candyHorrorRoom);


// let container = document.getElementById('image-container');
function quiz() {
  let entrance = prompt('You have entered the Candy Horror room are you prepared to see what lurks in the shadows?').toLowerCase();
  if ( entrance === 'yes') {
    alert('Embrace the sweet taste of all these treats but be prepared a mystery awaits!');
    // let image = document.createElement('img');
    // image.src = 'assets/chimages.jpg';
    // // container.appendChild(image);
    // // setTimeout(()=>{
    // //   container.removeChild(image);
    // // },10000);
  } else {
    alert('We do not blame you for being scared to enter!');
  }
}
quiz();
