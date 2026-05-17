function validateEmail(email) {
  
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);

}

document.querySelector(".btn-started-free").addEventListener("click", () => {

    const errorMessage = document.querySelector(".error-message");

    const email = document.querySelector("#email").value;

    if (validateEmail(email)) {

        errorMessage.style.opacity = "0";
        
    } else {

        errorMessage.style.opacity = "1";

    }

});