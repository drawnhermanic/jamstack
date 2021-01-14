const messages = [
  "...dog face 🐶",
  "...hotdog 🌭",
  "...dog 🐕",
  "...cat 🐱"
];

  var message = messages[Math.floor(Math.random() * Math.floor(messages.length))];

  document.querySelector(".message").append(message);