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

        for(let i = 0; i < 1; i++) {
            $("#quizCategory").append(`<p>${theData[i].category}</p>`);
            $("#question").append(`<p>${theData[i].question}</p>`);
            $("#correct").append(`<p>${theData[i].correct_answer}</p>`);
            
            for(let j = 0; j < theData[i].incorrect_answers.length; j++){
                $(`#answer${j}`).append(`<p>${theData[i].incorrect_answers[j]}</p>`);
            }
        }

    });
});

/*math.random the divs for the incorrect questions*/