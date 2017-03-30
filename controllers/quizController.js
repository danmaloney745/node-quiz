const rest = require('restler');

class Quiz {
    static showQuiz(req,res){
        res.render("show");
    }

    static getQuizData(req,res){
        rest.get('https://opentdb.com/api.php?amount=10&type=multiple').on('complete', function(result){
            if(result instanceof Error){
                console.log('Error: ', result.message);
                res.send(body);
            } else {
                res.send({
                    name: req.body.name,
                    result: result
                });
            }
        });
    }
}

module.exports = Quiz;