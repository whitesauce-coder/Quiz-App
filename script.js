
fetch("data.json")
    .then(response => response.json())
    .then(dataDrop => {
        let dataArray = dataDrop

        let questionBox = document.getElementById("question");
        let optionBox = document.getElementById("option");
        let currentIndex = 0;
        let selected = null;

        let updateScore = document.getElementById('updateScore')
        let answer = document.getElementById('answer')
        score = 0;

        let submit = document.getElementById('submit')
        submit.onclick = () => {
            if (selected === correctOption) {
                score++
                updateScore.innerText = "score: " + score;
                answer.innerText = "You Answer Correct."
            } else {
                answer.innerText = "You Answer Wrong."
            }
        };




        let next = document.getElementById("next")
        next.onclick = () => {
            currentIndex++;

            if (currentIndex < dataArray.length) {
                selected = null; // reset
                loadQuestion();
                answer.innerText = ""
                document.getElementById("seclected").innerText = ""
            } else {
                alert("Quiz Finished 🎉");
            }
        };

        let skip = document.getElementById('skip')
        skip.onclick = () => {
            currentIndex++;
            if (currentIndex < dataArray.length) {
                selected = null; // reset
                loadQuestion();
                answer.innerText = ""
                document.getElementById("seclected").innerText = ""
            } else {
                alert("Quiz Finished 🎉");
            }
        }




        function loadQuestion() {
            let q = dataArray[currentIndex];

            correctOption = q.correct;

            // show question
            questionBox.innerText = q.question;

            // clear old options
            optionBox.innerHTML = "";

            // show options
            q.options.forEach((opt, index) => {
                let div = document.createElement("div");
                div.innerText = opt;

                div.onclick = () => {
                    selected = index;
                    if (selected === 0) {
                        document.getElementById("seclected").innerText = "Selected: a";
                    }
                    else if (selected === 1) {
                        document.getElementById("seclected").innerText = "Selected: b";
                    }
                    else if (selected === 2) {
                        document.getElementById("seclected").innerText = "Selected: c";
                    }
                    else if (selected === 3) {
                        document.getElementById("seclected").innerText = "Selected: d";
                    }

                };

                optionBox.appendChild(div);
            });
        }
        loadQuestion();
    })

    .catch(error => {
        alert("Error loading JSON:", error)
    });

