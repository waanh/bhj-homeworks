let timerElement = document.getElementById('timer');
        let timerValue = parseInt(timerElement.textContent);

        let intervalId = setInterval(() => {
            timerValue--;
            timerElement.textContent = timerValue;

            if (timerValue <= 0) {
                clearInterval(intervalId); 
                alert('Вы победили в конкурсе!'); 
            }
        }, 1000);