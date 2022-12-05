const tabs = document.querySelectorAll(".skillWrap li");
const tabviews = document.querySelectorAll(".skillinfo .skills");
const tabs2 = document.querySelectorAll(".info h4");
const tabviews2 = document.querySelectorAll(".info p");
const tabviewsport2 = document.querySelectorAll(".porttabWrap .list");

tabviews[0].classList.add("on");
tabviews2[0].classList.add("on");
tabs2[0].classList.add("on");
tabviewsport2[0].classList.add("on");

tabs.forEach(function(item,index){
    item.addEventListener("click",function(){
        tabviews.forEach(function(item,index){
            item.classList.remove("on");
            tabs[index].classList.remove("on");
        });
        tabviews[index].classList.add("on");
        item.classList.add("on");
    });
});

tabs2.forEach(function(item,index){
    item.addEventListener("click",function(){
        tabviews2.forEach(function(item,index){
            item.classList.remove("on");
            tabs2[index].classList.remove("on");
            tabviewsport2[index].classList.remove("on");
        });
        tabviewsport2[index].classList.add("on");
        tabviews2[index].classList.add("on");
        item.classList.add("on");
    });
});