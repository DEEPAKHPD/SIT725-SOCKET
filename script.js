const socket = new WebSocket('ws://localhost:8080');
const output = document.getElementById('output');

socket.onopen = () => {
  console.log('WebSocket connection opened');
  setInterval(() => {
    const randomNumber = Math.floor(Math.random() * 100);
    socket.send(`Random Number is: ${randomNumber}`);
    console.log(`Random Number is: ${randomNumber}`);
  }, 1000);
};

socket.onmessage = event => {
  output.innerHTML += `<br>Server: ${event.data}`;
};

socket.onclose = () => {
  console.log('WebSocket connection closed');
};
