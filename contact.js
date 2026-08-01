
    const contactForm = document.getElementById("contactForm");
    const successPopup = document.getElementById("successPopup");

    contactForm.addEventListener("submit", function(event){
        event.preventDefault();

        successPopup.classList.add("show");

        contactForm.reset();

        setTimeout(function(){
            successPopup.classList.remove("show");
        }, 3000);
    });