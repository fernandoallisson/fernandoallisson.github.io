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
// -------------------[DESAFIO 11]------------------------------
const btn11 = document.querySelector('#btn11');
btn11.addEventListener('click', () => {
  const numTel = document.querySelector("#numTel").value;
  const resul11 = document.querySelector('#resul11');
  console.log(numTel);
  resul11.innerHTML = generatePhoneNumber(numTel)
  alert('Desculpa, essa interface não está funcionando, você pode usá-la pelo console do navegador, usando a função generatePhoneNumber e passando como parâmetro um array de 11 números')
})
// -------------------------------------------------------------
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
  const endConditional = (firstCondition(lineA, lineB, lineC) === true || secondCondition(lineA, lineB, lineC) === true) ? `EXISTE um triângulo com essas medidas` : `NÃO existe um triângulo com essas medidas`;
  return endConditional;
}; 
// -------------------[DESAFIO 12]------------------------------
const btn12 = document.querySelector("#btn12");
btn12.addEventListener('click', () => {
  const line1 = document.querySelector("#line1").value;
  const line2 = document.querySelector("#line2").value;
  const line3 = document.querySelector("#line3").value;
  const resul12 = document.querySelector("#resul12");
  resul12.innerHTML = triangleCheck(line1, line2, line3)
})
// -------------------------------------------------------------
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
// -------------------[DESAFIO 13]------------------------------
const btn13 = document.querySelector("#btn13");
btn13.addEventListener('click', () => {
  const text13 = document.querySelector('#text13').value;
  const resul13 = document.querySelector('#resul13');
  resul13.innerHTML = hydrate(text13);
})
// -------------------------------------------------------------
