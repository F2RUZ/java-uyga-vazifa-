let elForm = document.querySelector("#form");
let elBtn = document.querySelector("#btn");
let elTitle = document.querySelector("#title");
let inputName = document.querySelector("#name");
let inputPass = document.querySelector("#pass");
let inputEmail = document.querySelector("#email");

let userName = "Muslim";
let password = "0000";
let email = "programistc7@gmail.com";

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let nameValue = inputName.value;
  let passValue = inputPass.value;
  let emailValue = inputEmail.value;

  if (
    nameValue === userName &&
    passValue === password &&
    emailValue === email
  ) {
    elForm.remove();
    elTitle.innerHTML = `Siz muvofaqqiyatli ro'yxatdan o'tdingiz✍️✍️✍️✍️`;
    elTitle.className = "text-center text-success";
  } else {
    elForm.remove();

    elTitle.innerHTML = `Malumotlar xato kiritildi ❌❌❌  `;
    elTitle.className = "text-danger text-center";
  }
});
