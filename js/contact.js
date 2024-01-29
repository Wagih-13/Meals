let submitBtn;
function ContactUs() {
  submitBtn = document.getElementById("submitBtn");

  document.getElementById("name").addEventListener("focus", () => {
    nameInputTouched = true;
  });

  document.getElementById("email").addEventListener("focus", () => {
    emailInputTouched = true;
  });

  document.getElementById("phone").addEventListener("focus", () => {
    phoneInputTouched = true;
  });

  document.getElementById("age").addEventListener("focus", () => {
    ageInputTouched = true;
  });

  document.getElementById("password").addEventListener("focus", () => {
    passwordInputTouched = true;
  });

  document.getElementById("retypePassword").addEventListener("focus", () => {
    retypePasswordInputTouched = true;
  });
}

let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let retypePasswordInputTouched = false;

function inputsValidation() {
  if (nameInputTouched) {
    if (nameValidation()) {
      document
        .getElementById("nameAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("nameAlert")
        .classList.replace("d-none", "d-block");
    }
  }
  if (emailInputTouched) {
    if (emailValidation()) {
      document
        .getElementById("emailAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("emailAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (phoneInputTouched) {
    if (phoneValidation()) {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("phoneAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (ageInputTouched) {
    if (ageValidation()) {
      document
        .getElementById("ageAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("ageAlert")
        .classList.replace("d-none", "d-block");
    }
  }

  if (passwordInputTouched) {
    if (passwordValidation()) {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("passwordAlert")
        .classList.replace("d-none", "d-block");
    }
  }
  if (retypePasswordInputTouched) {
    if (retypePasswordValidation()) {
      document
        .getElementById("retypePasswordAlert")
        .classList.replace("d-block", "d-none");
    } else {
      document
        .getElementById("retypePasswordAlert")
        .classList.replace("d-none", "d-block");
    }
  }
  function nameValidation() {
    return /^[a-zA-Z ]+$/.test(document.getElementById("name").value);
  }

  function emailValidation() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      document.getElementById("email").value
    );
  }

  function phoneValidation() {
    return /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/.test(
      document.getElementById("phone").value
    );
  }

  function ageValidation() {
    return /^[1-9]\d*$/.test(document.getElementById("age").value);
  }

  function passwordValidation() {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(
      document.getElementById("password").value
    );
  }

  function retypePasswordValidation() {
    return (
      document.getElementById("retypePassword").value ==
      document.getElementById("retypePasswordAlert")
    );
  }

  if (
    nameValidation() &&
    emailValidation() &&
    phoneValidation() &&
    ageValidation() &&
    passwordValidation() &&
    retypePasswordValidation()
  ) {
    document.getElementById("submitBtn").removeAttribute("disabled");
  } else {
    document.getElementById("submitBtn").setAttribute("disabled", true);
  }
}
