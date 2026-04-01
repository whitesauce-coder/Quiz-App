let start = document.getElementById("startButton")
start.addEventListener("click", popClose)
function popClose() {
    console.log("work")
}



fetch("data.json")
    .then(response => response.json())
    .then(dataDrop => {
        let dataArray = dataDrop

        let questionBox = document.getElementById("question");
        let optionBox = document.getElementById("option");
        let currentIndex = 0;
        let selected = null;
        let skip = document.getElementById('skip')
        let submit = document.getElementById('submit')


    
        let next=document.getElementById("next")
        next.onclick = () => {
            currentIndex++;

            if (currentIndex < dataArray.length) {
                selected = null; // reset
                loadQuestion();
            } else {
                alert("Quiz Finished 🎉");
            }
        };
        
        
        function loadQuestion() {
            let q = dataArray[currentIndex];

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
                    console.log("Selected:", index);
                };

                optionBox.appendChild(div);
            });
        }
        loadQuestion();
    })

    .catch(error => {
        alert("Error loading JSON:", error)
    });

