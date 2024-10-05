const emojis = ["💪", "🔥", "🐉"];

document.querySelectorAll('.emoji').forEach(emoji => {
    emoji.addEventListener('click', function() {
        const player1 = this.textContent;
        const player2 = emojis[Math.floor(Math.random() * emojis.length)];
        const result = determineWinner(player1, player2);
        document.getElementById('result').textContent = `You chose ${player1}, opponent chose ${player2}. ${result}`;
    });
});

function determineWinner(player1, player2) {
    const rules = {
        "💪": "🔥",  // 💪 beats 🔥
        "🔥": "🐉",  // 🔥 beats 🐉
        "🐉": "💪"   // 🐉 beats 💪
    };

    if (player1 === player2) {
        return "It's a draw!";
    } else if (rules[player1] === player2) {
        return "You win!";
    } else {
        return "You lose!";
    }
}
