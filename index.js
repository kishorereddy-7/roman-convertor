const symbols = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

let isNumToRoman = true;

const resultHeader = document.getElementById("resultHeader");
const container = document.getElementsByClassName("container")[0];
const converterInput = document.getElementById("converterInput");
const converterButton = document.getElementById("romanToNumber");
const romanValueList = document.getElementById("romanValueList");

const converter = (val) => {
  if (isNumToRoman) {
    let res = "";
    for (const key in symbols) {
      while (symbols[key] <= val) {
        val -= symbols[key];
        res += key;
      }
    }
    resultHeader.innerHTML = res;
  } else {
    let number = 0;
    for (let i = val.length - 1; i >= 0; i--) {
      if (symbols[val[i]] >= (symbols[val[i + 1]] || 0)) {
        number += symbols[val[i]];
      } else {
        number -= symbols[val[i]];
      }
    }
    resultHeader.innerHTML = number;
  }
};

const onInputChange = (event) => {
  converter(event?.target?.value);
};

const onClickConvertorButton = () => {
  isNumToRoman = !isNumToRoman;
  if (isNumToRoman) {
    converterInput.type = "number";
    converterInput.placeholder = "Number to Roman";
    converterInput.max = "3999";
    converterButton.innerHTML = "Convert Roman to Number";
  } else {
    converterInput.type = "text";
    converterInput.placeholder = "Roman to Number";
    converterInput.maxLength = 15;
    converterButton.innerHTML = "Convert Number to Roman";
  }
};

Object.keys(symbols)?.forEach((key) => {
  romanValueList.innerHTML += `<li>${key}: ${symbols[key]}</li>`;
});
