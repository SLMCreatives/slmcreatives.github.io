function comingSoon() {
    alert("Coming Soon!");
    console.log("Coming Soon!");
}
    const x = document.querySelector(".contact-form");
    const y = document.querySelector(".contact-overlay");

function toggleForm() {

    if (!x.style.display || x.style.display === "none") {
        x.style.display = "flex",
        x.style.opacity = "1", 
        y.style.height = "200vh"
        ;
    } else {
        x.style.display = "none",
        x.style.opacity = "0",
        y.style.height = "0vh"
        ;
    }
}



