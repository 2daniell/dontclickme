document.addEventListener('DOMContentLoaded', () => {
    let count = 0;

    const counter = document.getElementById('Counter');

    document.getElementById('button').addEventListener('click', () => {
        const chance = Math.random();

        if (chance >= 0.5) {
            count++;
            counter.innerText = `Contador: ${count} vezes!`;
        } else {
            count = 0;
            counter.innerText = `Você perdeu! Contador reiniciado!`;
        }
    });
});