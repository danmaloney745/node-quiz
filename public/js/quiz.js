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
        let questionsArray = [];

        for(let i = 0; i < 1; i++) {
            $("#quizCategory").append(`<p>Category: ${theData[i].category}</p>`);
            $("#question").append(`<p>Question: ${theData[i].question}</p>`);
            //$("#correct").text(`${theData[i].correct_answer}`);
            questionsArray.push(theData[i].correct_answer);

            for(let j = 0; j < theData[i].incorrect_answers.length; j++){
                questionsArray.push(theData[i].incorrect_answers[j]);
                populateButtons(randomPos());
            }
        }

        function randomPos() {
            return Math.round(Math.random()* 4) + 0;
        };

        function populateButtons(position) {
            $(`#answer${position}`).text(`${questionsArray[position]}`);
        }
    });
});
