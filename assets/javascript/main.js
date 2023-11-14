$(document).ready(function () {
    $('#icon').click(function () {
        $('ul').toggleClass('show');
    })
});

const floating = document.querySelector('.floating-button')

window.addEventListener('scroll', e => {
    if (window.scrollY > 0) {
        floating.classList.add('floating-button-on-scroll')
    } else {
        floating.classList.remove('floating-button-on-scroll')
    }
})

let idx = 0
const textArray = [
    "Abdi Rabbani",
    "Portfolio"
]

setInterval(() => {
    document.title = textArray[idx++ % textArray.length]
}, 1500);

AOS.init();

function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_5peu99o"
    const templateID = "template_1pvy4zl"

    emailjs.send(serviceID, templateID, params).then((response) => {
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("message").value = ""
        console.log(response);
        alert('success send message')
    }).catch((e) => {
        console.log(e);
    })
}