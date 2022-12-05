
const header = document.querySelector("#header");
const move = document.querySelectorAll(".move");
const gnb = document.querySelectorAll(".gnb > li");
const leftText = document.querySelectorAll(".left_text");

let secStart = [];
window.addEventListener("scroll",function(){
    //tag의 위치값 가져옴 -> 스크롤할 때마다
    //구역 위치값
    for(let i=0; i<move.length; i++){
        secStart[i] = move[i].offsetTop;
    }
    let scTop = window.scrollY;
    //스크롤바의 위치가 cont2 구역의 시작 위치값 -40을 위치보다 크다면 
    // offsetTop
    for(let i=0; i<gnb.length; i++){
        if(scTop >= secStart[i]){
            for(let j=0; j<gnb.length; j++){
                gnb[j].classList.remove("on");
            }
            gnb[i].classList.add("on");
        }
    }
    leftText[0].style.right = (scTop / 3) + "px";
    leftText[1].style.right = (scTop / 5) + "px";
    leftText[2].style.right = (scTop / 8) + "px";
});

//gnb 클릭시 구역별로 나타내기
scrollTocont(gnb);

function scrollTocont(tag){
    for(let i=0; i<gnb.length; i++){
        tag[i].addEventListener("click",function(e){
        e.preventDefault();
        //해당 섹션구역의 위치값으로 스크롤바가 부드럽게 이동
        let scrollMove = move[i].offsetTop;
        window.scrollTo({
            top:scrollMove,
            behavior:"smooth"
        });
    });
    }
}