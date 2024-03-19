const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const jobSelect = document.querySelector("#job");
const birthDate = document.querySelector("#birthDate");
const rgInput = document.querySelector("#validarRG");
const modal = document.querySelector("#modal");
const closeButton = document.querySelector("#close-button");
const modalMessage = document.querySelector(".modal-message");

function isEmailValid(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

function validarData(data) {
  const regex = /^\d{2}\/\d{2}\/\d{2}$/;
  return regex.test(data);
}

function validarRG(rg) {
  const regex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/
  return regex.test(rg);
}

function exibirModal(mensagem) {
  modalMessage.textContent = mensagem;
  modal.style.display = "block";
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (nameInput.value === "") {
    exibirModal("Por favor, preencha o seu nome");
    return;
  }

  if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
    exibirModal("Por favor, preencha um e-mail válido");
    return;
  }

  if (jobSelect.value === "") {
    exibirModal("Por favor, selecione a sua situação");
    return;
  }

  if (birthDate.value === "" || !validarData(birthDate.value)) {
    exibirModal("Data de nascimento inválida. Use o formato dd/mm/aa.");
    return;
  }

  if (rgInput.value === "" || !validarRG(rgInput.value)) {
    exibirModal("RG inválido. Use o formato xx.xxx.xxx-x.");
    return;
  }

  exibirModal("Formulário preenchido corretamente!");
});

closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
