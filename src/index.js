import './style/_settings.scss'

window.scrollToPage = (id) => {
    id.scrollIntoView({behavior: 'smooth'});
}

window.showMenuMobile = () =>{
    const nav = document.querySelector("nav")
    if(nav.style.display  === "flex"){
        nav.style.display = "none";

    }else {
        nav.style.display = "flex";
    }
}


/*Scroll click sur l'arrow pour remonter l'utilisateur*/

window.addEventListener("scroll", () => {
    let arrowUp = document.querySelector(".gotoTop")
    if(window.scrollY >= 50){
        arrowUp.style.display = "flex"
    }
    else{
        arrowUp.style.display = "none"
    }
})


document.querySelector(".gotoTop").addEventListener("click", () => {
    scrollToPage(document.querySelector("body")) 
})