let hitValue = 0;
        let score = 0;
        let timer = 60;

        function makeBubble() {
            let clutter = '';
            for (let i = 1; i <= 70; i++) {
                let rn = Math.floor(Math.random() * 10);
                clutter += `<div class="bubble">${rn}</div>`;
            }
            document.querySelector('#pbtm').innerHTML = clutter;
        }

        function runTimer() {
            let timing = setInterval(() => {
                if (timer > 0) {
                    timer--;
                    document.querySelector('#time').textContent = timer;
                } else {
                    clearInterval(timing);
                    document.querySelector('#pbtm').innerHTML = '';
                }
            }, 1000);
        }

        function setHitValue() {
            hitValue = Math.floor(Math.random() * 10);
            document.querySelector('#hit').textContent = hitValue;
        }

        function updateScore() {
            score += 10;
            document.querySelector('#score').textContent = score;
        }

        document.querySelector('#pbtm').addEventListener('click', (event) => {
            if (event.target.classList.contains('bubble')) {
                let clickedValue = Number(event.target.textContent);
                if (clickedValue === hitValue) {
                    updateScore();
                    makeBubble();
                    setHitValue();
                }
            }
        });

        makeBubble();
        runTimer();
        setHitValue();