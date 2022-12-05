//타이핑 작성 및 삭제 기능 구현
const text = document.querySelector(".typing");
let context = ["열정있는 퍼블리셔","도전적인 웹디자인","발전하는 개발자","창의적인 개발자"];

let stringNumber = 0; // 배열의 순번값
let charIndex = 0; // 해당 문자열의 순번값
let maxIndex; // 변수에 값을 할당하지 않았음

//자동 타이핑효과 구현
let autoTyping = setInterval(function(){
    typing(); //실제 타이핑 기능 구현코드가 들어가는 함수 만들어서 호출
},200);

function typing(){
    //글자가 타이핑 되는 구간
    if(charIndex < context[stringNumber].length){
        text.innerText += context[stringNumber].charAt(charIndex);
        charIndex++;
        //글자 타이핑이 다끝났을 때
        if(charIndex >= context[stringNumber].length){
            maxIndex = context[stringNumber].length;
            //2초가 지난 다음 자동실행 다시 시작
            delay();
        }
    }
    //글자가 사라지는 구간
    else if(maxIndex >= 0){
        text.innerText = context[stringNumber].substring(0,maxIndex);
        maxIndex--;
        if(maxIndex < 0){
            charIndex = 0;
            //글자가 다 사라졌으면 stringNumber 숫자값을 1씩 증가
            if(stringNumber == context.length-1){
                stringNumber = 0;
            }
            else{
                stringNumber++;
            }
            //2초뒤 자동실행 다시 시작
            delay();
        }
    }
}

function delay(){
    clearInterval(autoTyping);
    setTimeout(function(){
        autoTyping = setInterval(function(){
            typing();
        },200);
    },2000);
}