// Desafio 11 - Crie a função generatePhoneNumber
const verifArray = (array) => {
  let verifyNumber = true; 
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let index in array) {
    if (array[index] < 0 || array[index] > 9){
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  let counter = {}; 
  array.forEach(num => {
    if (counter[num]) {
      counter[num] += 1; 
    } else {
      counter[num] = 1
    }
  });
    for (let numb in counter) {
      if (counter[numb] >= 3) {
        verifyNumber = false;
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
    return verifyNumber; 
};

const generatePhoneNumber = (array) => {
  let validation = verifArray(array);
  if (validation === true) {
    const formated = (`(${array.slice(0, 2).join('')}) ${array.slice(2 , 7).join('')}-${array.slice(7).join('')}`);
    return formated;
  } else {
    return validation;
  }
};

// Desafio 12 -  Crie a função triangleCheck
const firstCondition = (lineA, lineB, lineC) => {
  const conditionA = ((lineA < (lineB + lineC)) && (lineA > Math.abs(lineB - lineC))) ? true : false;
  const conditionB = ((lineB < (lineA + lineC)) && (lineB > Math.abs(lineA - lineC))) ? true : false;
  const conditionC = ((lineC < (lineA + lineB)) && (lineC > Math.abs(lineA - lineB))) ? true : false;
  const condition1 = (conditionA === true && conditionB === true && conditionC === true) ? true : false
  return condition1;
};

const secondCondition = (lineA, lineB, lineC) => {
  const conditionA = ((lineA < (lineB + lineC))) ? true : false;
  const conditionB = ((lineB < (lineA + lineC))) ? true : false;
  const conditionC = ((lineC < (lineA + lineB))) ? true : false;
  const condition2 = (conditionA === true && conditionB === true && conditionC === true) ? true : false
  return condition2;
};

const triangleCheck = (lineA, lineB, lineC) => {
  const endConditional = (firstCondition(lineA, lineB, lineC) === true || secondCondition(lineA, lineB, lineC) === true) ? true : false;
  return endConditional;
}; 

// Desafio 13 - Crie a função hydrate

const searchNumber = (string) => {
  let onlyNumber = 0;
  for (let letter in string) {
    onlyNumber += Number((string[letter].replace(/[^0-9]/g,'')))
  }
  return onlyNumber;
};

const hydrate = (string) => {
  if (searchNumber(string) === 1) {
    return `${searchNumber(string)} copo de água`
  } return `${searchNumber(string)} copos de água`
};

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
