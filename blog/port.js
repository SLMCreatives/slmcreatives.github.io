
import website from "./portfolio.js";

const websiteR = website.reverse();
let portfolioContainer = document.querySelector(".project-grid");

websiteR.forEach((website) => {
    portfolioContainer.innerHTML += ` 
    
    <div onclick="window.open('${website.url}', '_blank')" class="card" style="background-image: url(${website.img})"> <p>${website.client}</p> </div>  `
    
    ;

})