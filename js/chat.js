let chat = document.querySelector("#messages");

let input = document.querySelector("#inputMessage");

let btnSubmit = document.querySelector("#btnSend");
 
const webSocket = new WebSocket('ws://localhost:5500');
 
webSocket.onmessage = function(e) {
    const data = JSON.parse(e.data);

    chat.innerHTML += '<div class="msg">' + data.message + '</div>'
};
 
btnSubmit.addEventListener("click", () => {

    message = input.value;

    webSocket.send(JSON.stringify({
        'message': message
    }));

    input.value = '';

})