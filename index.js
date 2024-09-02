const loaderPage= document.querySelector(".loader");
window.addEventListener("load",function(){
    setTimeout(function(){
        loaderPage.style.visibility="hidden"
    },500)
});


//calling sider
const slideBar=document.querySelector(".slideBar");
function openSlider(){
    slideBar.style.left="0%";
    slideBar.style.display="flex";
}
function closeSlider(){
    slideBar.style.left="100%";
    slideBar.style.display="none";
}

