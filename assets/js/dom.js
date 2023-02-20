/** scroll down header**/
const scrollDown = ()=> {
    const scrollHeader = document.querySelector(".l_header");
    this.scrollY >= 50 ? scrollHeader.classList.add("scroll_down") : scrollHeader.classList.remove("scroll_down");
};

window.addEventListener("scroll", scrollDown);


/** scroll up page**/
const scrollUp = ()=>{
    const scroll = document.querySelector("#scroll-up");
    
    this.scrollY >= 50 ? scroll.classList.add("scroll_up") : scroll.classList.remove("scroll_up");
};

window.addEventListener("scroll", scrollUp);

/** change text **/

let arrayText = ["Services", "Solution", "Template"];
let count = 0;
function changeTxtOnBanner(){
    let span = document.querySelector("#span-change");
    count = (++count) % arrayText.length;
    span.innerHTML = " " + arrayText[count];
}

setInterval(changeTxtOnBanner, 2000);




