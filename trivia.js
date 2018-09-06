let questions = [{
    ques: "What is a darker cigar called?",
    ans: ["Connecticut", "Maduro", "Cohiba", "Montecristo"],
    name: "maduro",
    correct: "Maduro",
    divClass: ".maduro"
},
{
    ques: "What is a lighter cigar called?",
    ans: ["Connecticut", "Maduro", "Cohiba", "Montecristo"],
    name: "connecticut",
    correct: "Connecticut",
    divClass: ".connecticut"
},
{
    ques: "Who has master roller Steve Saka not rolled cigars for?",
    ans: ["Liga Privada", "Joya de Nicaragua", "Dunbarton Tobacco and Trust", "Padron"],
    name: "padron",
    correct: "Padron",
    divClass: ".padron"
},
{
    ques: "What was the 2016 cigar of the year according to Cigar Aficionado?",
    ans: ["La Flor Dominicana Andalusian Bull", "Oliva Serie V Melanio", "Buenaventura Crema C300", "The Unicorn"],
    name: "bull",
    correct: "La Flor Dominicana Andalusian Bull",
    divClass: ".bull"
},
{
    ques: "What was the 2017 cigar of the year according to Cigar Aficionado?",
    ans: ["Arturo Fuente Eye of the Shark", "Oliva Serie V Melanio", "The Unicorn", "My Father CT"],
    name: "shark",
    correct: "Arturo Fuente Eye of the Shark",
    divClass: ".shark"
},
{
    ques: "Which company is not named for it's owner?",
    ans: ["Rocky Patel", "Fuente", "Drew Estate", "Buenaventura"],
    name: "buenaventura",
    correct: "Buenaventura",
    divClass: ".buenaventura"
},
{
    ques: "What is the leaf that gives most of the flavor?",
    ans: ["Cap", "Filler", "Binder", "Wrapper"],
    name: "wrapper",
    correct: "Wrapper",
    divClass: ".wrapper"
},
{
    ques: "Which leaf puts out the most smoke?",
    ans: ["Cap", "Filler", "Binder", "Wrapper"],
    name: "filler",
    correct: "Filler",
    divClass: ".filler"
},
{
    ques: "What is the technical term for a torpedo roll?",
    ans: ["Belicoso", "Fat Joe", "Nub", "California roll"],
    name: "belicoso",
    correct: "Belicoso",
    divClass: ".belicoso"
},
{
    ques: "What is the term for 3 cigars twisted and woven together?",
    ans: ["Belicoso", "Padron", "Cohiba", "Culebra"],
    name: "culebra",
    correct: "Culebra",
    divClass: ".culebra"
}
] // end questions object

let labels = ["first", "second", "third", "forth"];

// click to start then display quesions
let startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(90);
questionDisplay();
});

// function for displaying questions
let questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (let j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (let i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
let countdown = function(seconds) {

let timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (let i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
let gradeQuiz = $('#sub-but').on('click', function() {

let correctAnswers = 0;
let wrongAnswers = 0;
let unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (let i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
    console.log(`${correctAnswers}`)
} else {
    wrongAnswers++;
    console.log(`${wrongAnswers}`)
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers)});