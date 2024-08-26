const questions = [
    {// Question 1
        question: 'Wie lautet der Name des fliegenden Bisons von Aang?',
        correctAnswer: 'Appa',
        incorrectAnswers: ['Momo', 'Naga', 'Pabu']
    },
    {// Question 2
        question: 'Wer ist der Feuerlord, den Aang am Ende der Serie besiegen muss?',
        correctAnswer: 'Ozai',
        incorrectAnswers: ['Azula', 'Zuko', 'Iroh']
    },
    {// Question 3
        question: 'Aus welchem Stamm stammt Katara?',
        correctAnswer: 'Wasserstamm',
        incorrectAnswers: ['Feuernation', 'Luftnomaden', 'Erdkönigreich']
    },
    {// Question 4
        question: 'Wie heißt der Onkel von Prinz Zuko, der ihm oft weise Ratschläge gibt?',
        correctAnswer: 'Iroh',
        incorrectAnswers: ['Zhao', 'Roku', 'Sozin']
    },
    {// Question 5
        question: 'Wie heißt die Stadt, die von den Erdbändigern regiert wird und die eine riesige Metallmauer hat?',
        correctAnswer: 'Ba Sing Se',
        incorrectAnswers: ['Omashu', 'Republic City', 'Kyoshi Island']
    },
    {// Question 6
        question: 'Wie heißt der Avatar vor Aang?',
        correctAnswer: 'Roku',
        incorrectAnswers: ['Yangchen', 'Kyoshi', 'Korra']
    },
    {// Question 7
        question: 'Welche Fähigkeit erlernt Toph Beifong als erste Erdbändigerin?',
        correctAnswer: 'Metallbändigen',
        incorrectAnswers: ['Blutbändigen', 'Lavabändigen', 'Blitzbändigen']
    },
    {// Question 8
        question: 'Was ist der Name der Elitegruppe von Azula, die aus Mai und Ty Lee besteht?',
        correctAnswer: 'Di Dai Li',
        incorrectAnswers: ['Die Yuyan Bogenschützen', 'Die Kyoshi Kriegerinnen', 'Die Sandbändiger']
    },


    {// Question 9
        question: 'Wie heißt der Schwertmeister, der Sokka das Schwertkämpfen beibringt?',
        correctAnswer: 'Piandao',
        incorrectAnswers: ['Bumi', 'Jeong Jeong', 'Pakku']
    },
    {// Question 10
        question: 'Welche Kreatur begleitet Prinzessin Azula als Haustier?',
        correctAnswer: 'Feuerlord',
        incorrectAnswers: ['Drache', 'Rehe', 'Fledermaus']
    },
    {// Question 11
        question: 'Wie heißt der Geist der Bibliothek, die sich in der Wüste von Si Wong befindet?',
        correctAnswer: 'Wan Shi Tong',
        incorrectAnswers: ['Koh', 'Tui', 'La']
    },
    {// Question 12
        question: 'Welches Element beherrscht Aang als letztes, bevor er den Avatar-Zustand meistert?',
        correctAnswer: 'Feuer',
        incorrectAnswers: ['Erde', 'Wasser', 'Luft']
    },
    {// Question 13
        question: 'Wie heißt die Gruppe von Rebellen, die sich gegen die Feuernation stellt und Sokka sowie Katara hilft?',
        correctAnswer: 'Der Freiheitskämpfer von Jet',
        incorrectAnswers: ['Die Dai Li', 'Die Yuyan Bogenschützen', 'Die Wüstennomaden']
    },
    {// Question 14
        question: 'Wer zerstört die Mondgeisterfisch, um die Wasserbändiger zu schwächen?',
        correctAnswer: 'Admiral Zhao',
        incorrectAnswers: ['Zuko', 'Iroh', 'Azula']
    },
    {// Question 15
        question: 'Wie heißt der Name der Tochter des Feuerlords Ozai, die ihn am Ende der Serie unterstützt?',
        correctAnswer: 'Azula',
        incorrectAnswers: ['Mai', 'Ty Lee', 'Ursa']
    },
    {// Question 16
        question: 'Welches Instrument spielt Iroh, um Zuko zu beruhigen?',
        correctAnswer: 'Tsungi-Horn',
        incorrectAnswers: ['Flöte', 'Gitarre', 'Trommel']
    },
    {// Question 17
        question: 'Wie heißt die Mutter von Zuko und Azula?',
        correctAnswer: 'Ursa',
        incorrectAnswers: ['Azulon', 'Kya', 'Hama']
    },
    {// Question 18
        question: 'Was ist der Name der Insel, auf der Aang das erste Mal den Avatar-Zustand betritt?',
        correctAnswer: 'Kyoshi Insel',
        incorrectAnswers: ['Ember Island', 'Crescent Island', 'Whale Tail Island']
    },
    {// Question 19
        question: 'Wer ist der Anführer der Dai Li, der geheimen Polizei von Ba Sing Se?',
        correctAnswer: 'Long Feng',
        incorrectAnswers: ['Bumi', 'Pakku', 'Jeong Jeong']
    },
    {// Question 20
        question: 'Wie nennt man den Moment, in dem die vier Nationen ihre Kräfte vereinen, um gegen die Feuernation zu kämpfen?',
        correctAnswer: 'Die Invasion am Tag der Schwarzen Sonne',
        incorrectAnswers: ['Der Fall der Feuernation', 'Die Rückkehr des Avatars', 'Der Tag des Avatars']
    },
    {// Question 21
        question: 'Welches Tier ist Momo?',
        correctAnswer: 'Fliegender Lemur',
        incorrectAnswers: ['Feuervogel', 'Dachsmaulwurf', 'Eisbärhund']
    },
    {// Question 22
        question: 'Wie heißt die Königin von Omashu, die Tophs Mutter kennt?',
        correctAnswer: 'Königin Hou-Ting',
        incorrectAnswers: ['Königin Lian', 'Königin Meili', 'Königin Qiang']
    },
    {// Question 23
        question: 'Welche Fähigkeit benutzt Azula, um Aang während des finalen Kampfes zu überraschen?',
        correctAnswer: 'Blitzbändigen',
        incorrectAnswers: ['Feuerbändigen', 'Erdbändigen', 'Metallbändigen']
    },
    {// Question 24
        question: 'Wie heißt der Sohn von Feuerlord Ozai, der anfangs als Aangs Feind auftritt?',
        correctAnswer: 'Zuko',
        incorrectAnswers: ['Ozai', 'Sokka', 'Bumi']
    }



];

let currentQuestionIndex = 0;
let correctAnswersCount = 0;
let incorrectAnswers = [];
let selectedQuestions = [];

// Populate the dropdown with options
document.addEventListener('DOMContentLoaded', () => {
    const questionCountSelect = document.getElementById('question-count');
    // Add options from 8 to the total number of questions
    for (let i = 8; i <= questions.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        questionCountSelect.appendChild(option);
    }

    document.getElementById('start-quiz').addEventListener('click', startQuiz);
});
// Start the quiz
function startQuiz() {
    // Get the number of questions selected by the user
    const questionCount = parseInt(document.getElementById('question-count').value);
    //select questions
    selectedQuestions = questions.slice(0, questionCount);
    document.getElementById('initial-screen').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    setupGameBoard();
    loadQuestion(currentQuestionIndex);
}

function setupGameBoard() {
    const gameBoard = document.getElementById('game-board');
    gameBoard.innerHTML = ''; // Clear existing cells
    // Create a cell for each question
    selectedQuestions.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.classList.add('quiz-cell');
        cell.setAttribute('data-index', index);
        gameBoard.appendChild(cell);
    });
    // Position the cells in a circle
    const cells = document.querySelectorAll('.quiz-cell');
    // Radius of the circle
    const radius = 400;
    // Center of the circle
    const centerX = 500;
    // Center of the circle
    const centerY = 500;
    // Angle between each cell
    const angleStep = (2 * Math.PI) / cells.length;

    // Position each cell
    cells.forEach((cell, index) => {
        const angle = index * angleStep;
        const x = centerX + radius * Math.cos(angle) - cell.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angle) - cell.offsetHeight / 2;
        cell.style.transform = `translate(${x}px, ${y}px)`;
        cell.textContent = index + 1;
    });
}

// Load the question at the given index
function loadQuestion(index) {
    const questionElement = document.getElementById('question');// Get the question and answers

    const answersElement = document.getElementById('answers');// Get the question and answers

    const question = selectedQuestions[index];// Get the question object
    questionElement.textContent = question.question;// Display the question
    const allAnswers = [...question.incorrectAnswers, question.correctAnswer];// Combine correct and incorrect answers
    allAnswers.sort(() => Math.random() - 0.5);// Shuffle the answers
    answersElement.innerHTML = '';
    // Create a button for each answer
    allAnswers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(answer, index));
        answersElement.appendChild(button);
    });
}

// Check if the answer is correct
function checkAnswer(answer, index) {
    const cells = document.querySelectorAll('.quiz-cell');
    if (answer === selectedQuestions[index].correctAnswer) {
        cells[index].classList.add('correct');
        correctAnswersCount++;
    } else {
        cells[index].classList.add('incorrect');
        incorrectAnswers.push({
            question: selectedQuestions[index].question,
            givenAnswer: answer,
            correctAnswer: selectedQuestions[index].correctAnswer
        });
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < selectedQuestions.length) {
        loadQuestion(currentQuestionIndex);
    } else {
        displaySummary();
    }
}

// Display the summary screen
function displaySummary() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2>Quiz Summary</h2>
        <p>You answered ${correctAnswersCount} out of ${selectedQuestions.length} questions correctly.</p>
        <h3>Incorrect Answers:</h3>
        <ul>
            ${incorrectAnswers.map(answer => `
                <li>
                    <strong>Question:</strong> ${answer.question}<br>
                    <strong>Your Answer:</strong> ${answer.givenAnswer}<br>
                    <strong>Correct Answer:</strong> ${answer.correctAnswer}
                </li>
            `).join('')}
        </ul>
    `;
}