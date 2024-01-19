
import blog from "./blog-copy.js";

let blogContainer = document.getElementById("blog-container");

const blogR = blog.reverse();
console.log(blogR);



blog.forEach((blog) => {
    blogContainer.innerHTML += ` <div class="hero">${blog.title} <a id="read-more-button" class="button-read" data-id="${blog.id}">Read More</a></div> `;

});

    const readButton = document.querySelectorAll("#read-more-button");
    const backButton = `<a href="/pages/blog.html" class="button-read"><i class="fa fa-arrow-left"></i> Back to Blog </a>`

    readButton.forEach((readButton) => {
        readButton.addEventListener("click", () => {
            let x = readButton;
            const blogR = blog.reverse();

            let xIndex = x.getAttribute("data-id") - 1;
            console.log(xIndex);
            window.scrollTo(0, 300);    
            blogContainer.innerHTML = `${backButton} ${blogR[xIndex].title} ${blogR[xIndex].content}`;


const url = new URL('https://slmcreatives.com/pages/blog.html?bid=1');
const params = new URLSearchParams(url.search);
params.set('bid', 2);
console.log(params);

        });
    });
