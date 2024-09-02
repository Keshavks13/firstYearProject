
//color change 
const root= document.querySelector(":root");
let countColor=1;
function changeTheme(){
    if(countColor==4){
        countColor=0;
    }
    if(countColor==0){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#001005");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00ff51");
    }
    else if(countColor===1){
        root.style.setProperty("--bg-color", "#080808;");
        root.style.setProperty("--second-bg-color", "#100010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#f200ff");
    }
    else if(countColor==2){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#000b10");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#00c3ff");
    }
    else if(countColor==3){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#0d1000");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#c3ff00");
    }
    else if(countColor==4){
        root.style.setProperty("--bg-color", "#080808");
        root.style.setProperty("--second-bg-color", "#020010");
        root.style.setProperty("--text-color", "white");
        root.style.setProperty("--main-color", "#0d00ff");
    }
    countColor++;
}

