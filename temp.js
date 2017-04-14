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

        $('#next').on('click', function (e){
            e.preventDefault();
            questionCounter++;
            displayQuestion(theData, questionCounter);
        });

        $('#prev').on('click', function (e){
            e.preventDefault();
            questionCounter--;
            if(questionCounter >= 0){
                displayQuestion(theData, questionCounter);
            }
        });

        function displayQuestion(data, questionCounter) {
            $("#quizCategory").text(`Category: ${data[questionCounter].category}`);
            $("#question").text(`Question: ${data[questionCounter].question}`);
            populateAnswers(data, questionCounter);
        }

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

        function loopArray(params){
            for(i = 0; i < params.length; i++){
                console.log(params[i]);
                populateButtons(i, params[i]);
            }
        }

        function populateButtons(position, answer) {
            $(`#answer${position}`).text(`${answer}`);
        }

    });
});
