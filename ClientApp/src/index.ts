import "./css/main.css";

const divMessages: HTMLDivElement = document.querySelector("#divMessages");
const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
const btnSend: HTMLButtonElement = document.querySelector("#btnSend");

btnSend.addEventListener("click", send);

function send() {

  let text = tbMessage.value;

  let url = `api/data/${text}`;

  fetch(url, {
      method: 'GET',
      headers: {
          'Accept': 'application/json',
      },
  })
  .then(r => r.text())
  .then(txt => divMessages.innerHTML += txt );

}