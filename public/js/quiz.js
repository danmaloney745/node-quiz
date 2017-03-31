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
        //counter used for randomising button output
        let counter = 0;

        //loop through JSON object
        for(let i = 0; i < 1; i++) {
            $("#quizCategory").append(`<p>Category: ${theData[i].category}</p>`);
            $("#question").append(`<p>Question: ${theData[i].question}</p>`);

            //push the correct answer to the array
            answersArray.push(theData[i].correct_answer);
            console.log(answersArray[0]);
            //loop through anser array defined in JSON object
            for(let j = 0; j < theData[i].incorrect_answers.length; j++){
                //push the wrong answers to the array
                answersArray.push(theData[i].incorrect_answers[j]);
            }

        }

        answersArray.sort();
        loopArray(answersArray);

        function loopArray(params){
            for(i = 0; i < params.length; i++){
                populateButtons(i, params[i]);
            }
        }

        function randomPos(counter) {
            return Math.round(Math.random()* counter) + 0;
        };

        function populateButtons(position, answer) {
            $(`#answer${position}`).text(`${answer}`);
        }
    });
});
