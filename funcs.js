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

function onSubmit() {
/*   Email.send({
    SecureToken : "a0736a0e-3ef5-474d-8eb6-20dfda312748",
    To : 'sulaiman@slmcreatives.com',
    From : "namialus.shafiq@gmail.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message),
  console.log("suceess")
);
} */

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "sulaiman@slmcreatives.com",
    Password : "E76F6D91BDFA8F4F6812C8401284FCDD2F71",
    To : 'sulaiman@slmcreatives.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}





