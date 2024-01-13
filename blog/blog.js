
import blog from "./blog-copy.js";

let blogContainer = document.getElementById("blog-container");





blog.forEach((blog) => {
    blogContainer.innerHTML += ` <div class="hero">${blog.title} <a id="read-more-button" class="button-read" data-id="${blog.id}">Read More</a></div> `;

});

    const readButton = document.querySelectorAll("#read-more-button");
    const backButton = `<a href="/pages/blog.html" class="button-read"><i class="fa fa-arrow-left"></i> Back </a>`

    readButton.forEach((readButton) => {
        readButton.addEventListener("click", () => {
            let x = readButton;
            let xIndex = x.getAttribute("data-id") - 1 ;
            window.scrollTo(0, 300);    
            blogContainer.innerHTML = `${backButton} ${blog[xIndex].title} ${blog[xIndex].content}`;
        });
    });


