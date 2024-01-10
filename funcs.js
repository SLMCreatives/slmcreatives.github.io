function comingSoon() {
    alert("Coming Soon!");
    console.log("Coming Soon!");
}
    const x = document.querySelector(".contact-form");
    const y = document.querySelector(".contact-overlay");

function toggleForm() {

    if (!x.style.opacity || x.style.opacity === "0") {
        x.style.opacity = "1", 
        y.style.height = "100vh"
        ;
    } else {
        x.style.opacity = "0",
        y.style.height = "0vh"
        ;
    }
}



