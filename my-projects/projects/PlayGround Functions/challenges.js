// Desafio 1 - Crie a função compareTrue
const compareTrue = (text1, text2) => {
  return text1 === text2;
};
// -------------------[DESAFIO 1]------------------------------
const compararHTML = () => {
  const text1 = document.querySelector('#inputText').value;
  const text2 = document.querySelector('#inputText2').value;
  const addTxt = document.querySelector('.result');

  if(text1 === '' || text2 === '') {
    alert('É preciso adicionar uma palavra no campo de texto');
  } else if (compareTrue(text1, text2)) {
    addTxt.innerHTML = `A string <strong><em>${text1}</em></strong> é exatamente igual à string <strong><em>${text2}</em></strong>.`;
  } else {
    addTxt.innerHTML = `A string <strong><em>${text1}</em></strong> é diferente da string <strong><em>${text2}</em></strong>.`;
  }
};

// ------------------------------------------------------------

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => {
  return string.split(' ');
};

// -------------------[DESAFIO 2]------------------------------
const btnSeg = document.querySelector('#btnSeg');
btnSeg.addEventListener('click', () => {
  const textAreaSeg = document.querySelector('#segDes').value;;
  const resultSeg = document.querySelector('.resultSeg');
  resultSeg.innerHTML= splitSentence(textAreaSeg);
})

// ------------------------------------------------------------
// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  return `${array[array.length-1]}, ${array[0]}`;
};

// -------------------[DESAFIO 3]------------------------------
const btnTer = document.querySelector('#btnTer');
btnTer.addEventListener('click', () => {
  const resulTer = document.querySelector('#resulTer');
  const textAreaTer = splitSentence(document.querySelector('#textAreaTer').value);
  resulTer.innerText = concatName(textAreaTer);
})
// ------------------------------------------------------------
// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  return (wins * 3) + ties;
};
// -------------------[DESAFIO 4]------------------------------
const btnQua = document.querySelector('#btnQua');
btnQua.addEventListener('click', () => {
  const iptWin = Number(document.querySelector('#win').value);
  const iptTies = Number(document.querySelector('#ties').value);
  const resulQua = document.querySelector('#resulQua')
  resulQua.innerText = `A pessoa player fez ${footballPoints(iptWin, iptTies)} pontos`
})
// ------------------------------------------------------------
// Desafio 5 - Crie a função highestCount
const MayorNumber = (array) => {
  let MayorNumberArray = array[0];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > MayorNumberArray) {
      MayorNumberArray = array[i]
    }
  }
  return MayorNumberArray
};

const highestCount = (array) => {
  let searchNumber = MayorNumber(array);
  let counterNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === searchNumber) {
      counterNumber += 1;
    }
  }
  return counterNumber; 
};
// -------------------[DESAFIO 5]------------------------------
  const btnQuin = document.querySelector('#btnQuin');
  btnQuin.addEventListener('click', () => {
    const numQuin = document.querySelector('#numQuin').value;
    const resulQuin = document.querySelector('#resulQuin');
    resulQuin.innerText = `O maior número do array é: ${MayorNumber(numQuin)} e ele aparece ${highestCount(numQuin)} vezes.`
  })
// ------------------------------------------------------------
// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
const calcTriangleArea = (base, height) => {
  return (base * height) / 2;
};

const calcRectangleArea = (base, height) => {
  return base * height;
};

const calcAllAreas = (base, height, form) => {
  if (form === 'triângulo') {
    return `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    return `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } return `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
};
// -------------------[DESAFIO 6]------------------------------
const btnSex = document.querySelector('#btnSex')
btnSex.addEventListener('click', () => {
  const forma = document.querySelector('#forma').value;
  const bas = Number(document.querySelector('#bas').value);
  const alt = Number(document.querySelector('#alt').value);
  const resulSex = document.querySelector('#resulSex');
  if (forma == 'triângulo'){
    resulSex.innerText = calcAllAreas(bas, alt, forma)
  } else {
    resulSex.innerText = calcAllAreas(bas, alt, forma)
  }
})
// ------------------------------------------------------------
// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let verificacao1 = ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) ? 'cat1' : 'cat2';
  let verificação = ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) ? `os gatos trombam e o rato foge` : verificacao1;
  return verificação;
};
// -------------------[DESAFIO 7]------------------------------

// ------------------------------------------------------------
// Desafio 8 - Crie a função fizzBuzz
const fizzBuzz = (array) => {
  let newArray = [];
  for (let numero in array) {
    if (array[numero] % 3 !== 0 && array[numero] % 5 !== 0) {
      newArray.push('bug!');
    } else if (array[numero] % 3 === 0 && array[numero] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[numero] % 5 === 0 && array[numero] % 3 !== 0) {
      newArray.push('buzz');
    } else if (array[numero] % 3 === 0 && array[numero] % 5 !== 0) {
      newArray.push('fizz');
    }
  }
  return newArray;
};
// -------------------[DESAFIO 8]------------------------------

// ------------------------------------------------------------
// Desafio 9 - Crie a função encode e a função decode
const encode = (string) => {
  let newString = string.split('') // separando letra por letra para verificação
  let arrayEncode = [];
  for (letters in newString){ // 
    if(newString[letters] === 'a') {
      arrayEncode.push ('1');
    } else if(newString[letters] === 'e') {
      arrayEncode.push ('2');
    } else if (newString[letters] === 'i') {
      arrayEncode.push ('3');
    } else if (newString[letters] === 'o') {
      arrayEncode.push ('4');
    } else if (newString[letters] === 'u') {
      arrayEncode.push ('5');
    } else {
      arrayEncode.push(newString[letters]);
    }
  }
  return arrayEncode.join('');
};
const decode = (string) => {
  let newString = string.split('') // separando letra por letra para verificação
  let arrayEncode = [];
  for (letters in newString){ // 
    if(newString[letters] === '1') {
      arrayEncode.push ('a');
    } else if(newString[letters] === '2') {
      arrayEncode.push ('e');
    } else if (newString[letters] === '3') {
      arrayEncode.push ('i');
    } else if (newString[letters] === '4') {
      arrayEncode.push ('o');
    } else if (newString[letters] === '5') {
      arrayEncode.push ('u');
    } else {
      arrayEncode.push(newString[letters]);
    }
  }
  return arrayEncode.join('');
};
// -------------------[DESAFIO 9]------------------------------

// ------------------------------------------------------------
// Desafio 10 - Crie a função techList
const techList = (array, string) => {
  if (array.length === 0) {
    return array;
  } let arrayOrg = array.sort();
  let arrayObj = [];
  for (let tech in arrayOrg) {
    arrayObj.push({tech: arrayOrg[tech], name: string});
  }
  return arrayObj;
};
// -------------------[DESAFIO 10]------------------------------

// ------------------------------------------------------------