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
        console.log(theData);
        $("#quizData").append(`<h2>${data.name}</h2>`);
        //console.log(data.result.results[0].category);

        for(let i in theData) {
            console.log(theData[i].category);
            $("#quizData").append(`<p>${theData[i].category}</p>`);
        }

        console.log("passed the array");
        /*for(let item in theData){
            console.log(theData[item]);
            
        }*/
    });
});