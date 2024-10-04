/**
 * 1. 숫자 버튼 클릭시 input에 클릭한 숫자 보여주기
 * 2. C 버튼 클릭시 초기화
 * 3. 사칙연산 버튼 클릭시 그에 해당하는 연산하기
 * 4. = 버튼 클릭시 결과 보여주기
 */
document.addEventListener('DOMContentLoaded', e => {
  calDisplay();
})

function calDisplay(){
  let calculate = [];
  let result = 0;
  let operator = [];

  const display = document.getElementById('display');
  display.value = 0;

  // 2. C 버튼 클릭시 초기화
  document.querySelector('.button-clear').addEventListener('click', e => {
    e.preventDefault();
    document.getElementById('display').value = '';
    calculate = [];
    operator = [];
    result = 0;
    display.value = 0;
  })
  
  document.querySelectorAll('.button').forEach((ele) => {
    ele.value = ele.innerHTML;
    ele.addEventListener('click', e => {
      
      if(!isNaN(Number(e.target.value))){// 1. 숫자 버튼 클릭시 input에 클릭한 숫자 보여주기
        display.value += e.target.value;
      } else {
        let number = display.value;
        if(e.target.value !== '='){
          operator.push(e.target.value);
          result = Number(number);
          display.value = ''; 
        } else { // 4. = 버튼 클릭시 결과 보여주기
          switch(operator.pop()){ // 3. 사칙연산 버튼 클릭시 그에 해당하는 연산하기
            case '+':
              result += Number(number);
              break;
            case '-':
              result -= Number(number);
              break;
            case '*':
              result *= Number(number);
              break;
            case '/':
              result /= Number(number);
              break;
          }
          display.value = result;
        }
      }
    })
  })
}