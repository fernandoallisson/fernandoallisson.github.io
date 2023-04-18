const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// ----------------------------------------------[ex01]-----------------------------------------------------
const criarTabela = (decemberDaysList) => {
  const lista = document.querySelector('#days');
  for (let numero of decemberDaysList) {
    const elementoLi = document.createElement('li');
    elementoLi.classList.add('day');
    elementoLi.innerText = numero;
    lista.appendChild(elementoLi);
    if(elementoLi.innerText == 24 || elementoLi.innerText == 25 || elementoLi.innerText == 31) {
      elementoLi.classList.add('holiday');
    };
    if ((elementoLi.innerText - decemberDaysList[5]) % 7 === 0) {
      elementoLi.classList.add('friday');
    }
  }
};
criarTabela(decemberDaysList);

// ----------------------------------------------[ex02]-----------------------------------------------------
let isYellow = false;
const btn = document.querySelector('#btn-holiday');
btn.addEventListener ('click', function () {
  const elem = document.querySelectorAll('.holiday');
  isYellow = !isYellow;
  if (isYellow) {
    elem.forEach((elem) => {
      elem.style.backgroundColor = 'yellow';
    });
  } else {
    elem.forEach((elem) => {
      elem.style.backgroundColor = "rgb(238,238,238)";
    });
  };
}); 
// ----------------------------------------------[ex03]-----------------------------------------------------
let isSextou = false;
let originalTexts = [];
const btnF = document.querySelector('#btn-friday');
btnF.addEventListener ('click', function () {
  const elem = document.querySelectorAll('.friday');
  isSextou = !isSextou;
  if (isSextou) {
    elem.forEach((elem, index) => {
      originalTexts[index] = elem.innerText;
      elem.innerText = 'Sextou!';
    });
  } else {
    elem.forEach((elem, index) => {
      elem.innerText = originalTexts[index];
    });
  };
}); 
// ----------------------------------------------[ex04]-----------------------------------------------------
document.addEventListener('mouseover', function(event) {
  const target = event.target;
  const eventClassList = target.classList;
  if (eventClassList.contains('day') || eventClassList.contains('holidays') || eventClassList.contains('friday')) {
    target.style.fontSize = '30px'
  }
});

document.addEventListener('mouseout', function(event) {
  const target = event.target;
  const eventClassList = target.classList;
  if (eventClassList.contains('day') || eventClassList.contains('holidays') || eventClassList.contains('friday')) {
    target.style.fontSize = '20px';
  }
});


// ----------------------------------------------[ex-bonus-01]-----------------------------------------------------

const btnGreen = document.querySelectorAll('.task')[0];
const btnRed = document.querySelectorAll('.task')[1];

let isSelectedGreen = false;
btnGreen.addEventListener('click', (e) => {
  isSelectedGreen = !isSelectedGreen
  if (isSelectedGreen) {
    e.target.classList.add('selected');
    e.target.style.width = '45px'
    e.target.style.height = '45px'
    bckGreen = e.target.style.backgroundColor;
  } else {
    e.target.classList.remove('selected');
    e.target.style.width = '35px'
    e.target.style.height = '35px'
    bckGreen = 'rgb(238,238,238)';

  }
});

let isSelectedRed = false;
let bckRed = '';
btnRed.addEventListener('click', (e) => {
  isSelectedRed = !isSelectedRed
  if (isSelectedRed) {
    e.target.classList.add('selected');
    e.target.style.width = '45px'
    e.target.style.height = '45px'
    bckRed = e.target.style.backgroundColor;
  } else {
    e.target.classList.remove('selected');
    e.target.style.width = '35px'
    e.target.style.height = '35px'
    bckRed = 'rgb(238,238,238)';
  }
});




let bacSelecGreen = true;
function changeBackgoundLiGreen () {
  document.addEventListener('click', function(event) {
    const target = event.target;
    const eventClassList = target.classList;
    bacSelecGreen = !bacSelecGreen;
    if (eventClassList.contains('day')) {
      if (isSelectedGreen && bacSelecGreen){
        target.style.backgroundColor = bckGreen;
        target.style.color = 'white';
      } else {
        target.style.backgroundColor = 'rgb(238,238,238)'
        target.style.color = '#777'
      }
    }
  });
}
changeBackgoundLiGreen();


let bacSelecRed = false;
function changeBackgoundLiRed () {
  document.addEventListener('click', function(event) {
  const target = event.target;
  const eventClassList = target.classList;
  bacSelecRed = !bacSelecRed;
  if (eventClassList.contains('day')) {
    if (isSelectedRed && bacSelecRed) {
      target.style.backgroundColor = bckRed;
      target.style.color = 'white';
    } else if (!isSelectedRed && bacSelecRed) {
      target.style.backgroundColor = 'rgb(238,238,238)'
      target.style.color = '#777'
    }
  }
});
}
changeBackgoundLiRed();














// ----------------------------------------------[ex-bonus-02]-----------------------------------------------------





  

