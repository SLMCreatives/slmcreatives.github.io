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

const formzz = document.querySelector('.contact-form');




formzz.addEventListener('submit', function(e){
    e.preventDefault();
    onSubmit();
})


function onSubmit() {
let formData = {
    firstName: document.getElementById('first-name').value,
    secondName: document.getElementById('second-name').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    subject: document.getElementById('subject').value,
    message: document.getElementById('message').value,
};
Email.send({
    SecureToken : "1b91d435-6949-4630-940a-b0afd0385060",
    To : 'sulaiman@slmcreatives.com',
    From : 'sulaiman@slmcreatives.com',
    Subject : "Soc Med Collaboration from SLM Creatives Website",
    Body : `Name: ${formData.firstName} + ${formData.secondName} <br> Email: ${formData.email} <br> Phone: ${formData.phone} <br> Subject: ${formData.subject} <br> Message: ${formData.message}`
}).then(
  message => alert(message),
  console.log("suceess"),
  formzz.reset(),
  toggleForm()
);    

formzz.reset();
console.log("success", formData.email);

}






