function comingSoon() {
    alert("Coming Soon!");
    console.log("Coming Soon!");
}
    const x = document.querySelector(".contact-form");

function toggleForm() {

    if (!x.style.display || x.style.display === "none") {
        x.style.display = "flex",
        x.style.opacity = "1"
        ;
    } else {
        x.style.display = "none",
        x.style.opacity = "0"
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
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
};
Email.send({
    SecureToken : "1b91d435-6949-4630-940a-b0afd0385060",
    To : 'sulaiman@slmcreatives.com',
    From : 'sulaiman@slmcreatives.com',
    Subject : "Mediklinik Affan Website Contact Form",
    Body : `Name: ${formData.name} <br> Email: ${formData.email}  <br> Message: ${formData.message}`
}).then(
  message => alert(message),
  console.log("suceess"),
  toggleForm()
);    

formzz.reset();
console.log("success", formData.email);

}






