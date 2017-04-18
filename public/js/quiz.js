$(() => {
    $.ajax({
        url: '/show-quiz',
        method: 'POST',
        data: {
            name: "Quiz"
        }
    })
    .then((data) => {
        let theData = data.result.results;
        let answersArray = [];
        let questionCounter = 0;

        displayQuestion(theData, questionCounter);

        /**
         * Function that is called when the user clicks the next button
         */
        $('#next').on('click', function (e){
            e.preventDefault();
            removeAnswers(answersArray);
            questionCounter++;
            displayQuestion(theData, questionCounter);
        });

        /**
         * Function that is called when the user cliecks the previous button
         */
        $('#prev').on('click', function (e){
            e.preventDefault();
            removeAnswers(answersArray);
            questionCounter--;
            if(questionCounter >= 0){
                displayQuestion(theData, questionCounter);
            }
        });

        /**
         * Function to print the question to the DOM elements, then populate the answer array.
         * @param {Object} data 
         * @param {Integer} questionCounter 
         */
        function displayQuestion(data, questionCounter) {
            $("#quizCategory").text(`Category: ${data[questionCounter].category}`);
            $("#question").text(`Question: ${data[questionCounter].question}`);
            populateAnswers(data, questionCounter);
            checkAnswer();
        }

        /**
         * Function that populates the answers array with the correct and wrong answers.
         * @param {*} data 
         * @param {*} questionCounter 
         */
        function populateAnswers(data, questionCounter){
            //push the correct answer to the array
            answersArray.push(data[questionCounter].correct_answer);

            //loop through answer array defined in JSON object
            for(let i = 0; i < data[questionCounter].incorrect_answers.length; i++){
                //push the wrong answers to the array
                answersArray.push(data[questionCounter].incorrect_answers[i]);
            }

            //sort array then loop through the array to populate the buttons
            answersArray.sort();
            loopArray(answersArray);
        }

        /**
         * Function that removes the contents of the answers array
         * @param {Array} answers 
         */
        function removeAnswers(answers){
            answers.splice(0, answers.length)
        }

        /**
         * Function to loop through the answers
         * @param {Array} answers 
         */
        function loopArray(answers){
            for(let i = 0; i < answers.length; i++){
                populateButtons(i, answers[i]);
            }
        }

        /**
         * Function that populates the DOM with the correct and wrong answers
         * @param {Integer} position 
         * @param {String} answer 
         */
        function populateButtons(position, answer) {
            $(`#answer${position}`).text(`${answer}`);
        }

        function checkAnswer(){
            //Get the correct anser from the data object
            let correctAnswer = theData[questionCounter].correct_answer;
            //Get the answers from the DOM and store them in a variable
            let answer = document.getElementsByTagName('a');
            for(i = 0; i < answer.length; i++){
                $(`#answer${i}`).on('click', function(e){
                    e.preventDefault();
                    if($(this).text() == correctAnswer){
                        console.log("Correct!");
                    } else {
                        console.log("Incorrect");
                    }
                });
            } 
        }

    });
});