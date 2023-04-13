// Desafio 1 - Crie a função compareTrue
const compareTrue = (parametro1, parametro2) => {
  const trueExpresion = (parametro1 === true && parametro2 === true) ? true : false;
  return trueExpresion;
};

// Desafio 2 - Crie a função splitSentence
const splitSentence = (string) => {
  return string.split(' '); 
};

// Desafio 3 - Crie a função concatName
const concatName = (array) => {
  return `${array[array.length-1]}, ${array[0]}`;
};

// Desafio 4 - Crie a função footballPoints
const footballPoints = (wins, ties) => {
  return (wins * 3) + ties;
};

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

// Desafio 7 - Crie a função catAndMouse
const catAndMouse = (mouse, cat1, cat2) => {
  let verificacao1 = ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) ? 'cat1' : 'cat2';
  let verificação = ((Math.abs(cat1 - mouse)) === (Math.abs(cat2 - mouse))) ? `os gatos trombam e o rato foge` : verificacao1;
  return verificação;
};

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
// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
