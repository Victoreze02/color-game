const COLORS = ["red", "blue", "green", "yellow", "purple", "orange"];
        let targetColor = "";
        let score = 0;

        function startNewGame() {
            targetColor = COLORS[Math.floor(Math.random() * COLORS.length)];
            document.getElementById("colorBox").style.backgroundColor = targetColor;
            document.getElementById("gameStatus").textContent = "Guess the correct color!";
            generateColorOptions();
        }

        function generateColorOptions() {
            const optionsContainer = document.getElementById("colorOptions");
            optionsContainer.innerHTML = "";
            COLORS.forEach(color => {
                const button = document.createElement("button");
                button.classList.add("colorOption");
                button.style.backgroundColor = color;
                button.setAttribute("data-testid", "colorOption");
                button.onclick = () => handleGuess(color);
                optionsContainer.appendChild(button);
            });
        }

        function handleGuess(color) {
            if (color === targetColor) {
                score++;
                document.getElementById("gameStatus").textContent = "Correct! 🎉";
            } else {
                document.getElementById("gameStatus").textContent = "Wrong! Try again. ❌";
            }
            document.getElementById("score").textContent = `Score: ${score}`;
        }

        document.getElementById("newGameButton").addEventListener("click", startNewGame);
        
        startNewGame();