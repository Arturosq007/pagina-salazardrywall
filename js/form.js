function sendEmail (){
    Email.send({
    Host : "smtp.gmail.com",
    Username : "arturosq007@gmail.com",
    Password : "password",
    To : 'arturosq007@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "And this is the body" 
    }).then(
    message => alert(message)
    );
    
}
