(() => {
    let playing = true,
        activeHole = 1,
        score = 0,
        misses = 0;

    const maxScore = 10,
          maxMisses = 5;

    const stop = () => playing = false,
          getHole = index => document.getElementById(`hole${index}`),
          deactivateHole = index => getHole(index).className = 'hole',
          activateHole = index => getHole(index).className = 'hole hole_has-mole',
          updateScore = () => document.getElementById('dead').textContent = score,
          updateMisses = () => document.getElementById('lost').textContent = misses,
          next = () => setTimeout(() => {
            if (!playing) {
                return;
            }
            deactivateHole(activeHole);
            activeHole = Math.floor(1 + Math.random() * 9);
            activateHole(activeHole);
            next();
          }, 800),
          checkGameStatus = () => {
            if (score >= maxScore) {
                alert('Вы победили в конкурсе!');
                resetGame();
            } else if (misses >= maxMisses) {
                alert('Игра окончена!');
                resetGame();
            }
          },
          resetGame = () => {
            score = 0;
            misses = 0;
            updateScore();
            updateMisses();
            playing = true;
            next();
          };

    for (let i = 1; i <= 9; i++) {
        getHole(i).onclick = () => {
            if (!playing) return;

            if (getHole(i).className.includes('hole_has-mole')) {
                score++;
                updateScore();
            } else {
                misses++;
                updateMisses();
            }

            checkGameStatus();
        };
    }

    next();
})();
