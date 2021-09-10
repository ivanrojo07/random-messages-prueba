const messages = [
    'Guillermo',
    'Ivan',
    'Montserrat',
    'Diego',
    'Pamela',
    'Ariana',
    "Pauline",
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = {randomMsg};