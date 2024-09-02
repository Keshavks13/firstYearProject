const myH3= document.querySelector(".myH3")
window.addEventListener("load", function(){
  myH3.classList.add("h3Trans");
})

//padding after load

const socialMediaDivUp = document.querySelector(".socialMediaDivUp");

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            socialMediaDivUp.classList.add("padding");
            observer.unobserve(socialMediaDivUp); // Stop observing once the transition is applied
        }
    });
}, { threshold: 0.1 });

observer.observe(socialMediaDivUp);


//theme change
const root= document.querySelector(":root")
const img= document.querySelector(".imgSocial");
const flame= document.querySelector(".flame-img");
function callFb(){
    root.style.setProperty("--bg-color", "#080808;");
    root.style.setProperty("--second-bg-color", "#000c10");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--main-color", "#0088ff");
    img.src="facebook.webp";
    img.classList.remove("instaShadow");
    img.classList.remove("ytShadow");
    img.classList.add("fbShadow");
    flame.src="flameFb.png"
}
function callInsta(){
    root.style.setProperty("--bg-color", "#080808;");
    root.style.setProperty("--second-bg-color", "#0d0010");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--main-color", "#9900ff");
    img.src="insta.png";
    img.classList.remove("fbShadow");
    img.classList.remove("ytShadow");
    img.classList.add("instaShadow")
    flame.src="flameInsta.png"
}
function callYt(){
    root.style.setProperty("--bg-color", "#080808;");
    root.style.setProperty("--second-bg-color", "#100002");
    root.style.setProperty("--text-color", "white");
    root.style.setProperty("--main-color", "#ff0015");
    img.src="youtube.webp";
    img.classList.remove("instaShadow");
    img.classList.remove("fbShadow");
    img.classList.add("ytShadow")
    flame.src="flameYT.png"
}

let count=0;
function changeTheme(){
    console.log("hy i am keshav singhania")
    count++;
    if(count==1){
        callFb();
    }
    else if(count==2){
        callInsta();
    }
    else if(count==3){
        callYt();
        count=0;
    }
}