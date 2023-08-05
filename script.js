const quizData = [
    {
      question: 'Question 1: Who taught Tanjiro the water-breathing technique?',
      options: ['Giyu Tomioka', 'Kyojuro Rengoku', 'Shinobu Kocho', 'Sakonji Urokodaki'],
      answer: 'Sakonji Urokodaki',
    },
    {
      question: 'Question 2: Who is The Serpent Hashira?',
      options: ['Giyu Tomioka', 'Muichiro Tokito', 'Sanemi Shinazugawa', 'Obanai Iguro'],
      answer: 'Obanai Iguro',
    },
    {
      question: 'Question 3: Whats the special type of sword that demon slayers wield to kill demons?',
      options: [ 'Fire katanas', 'Cursed katanas', 'Nichirin Sword', 'Lighting blades'],
      answer: 'Nichirin Sword',
    },
    {
      question: 'Question 4: What is Tanjiro last name?',
      options: ['Gengoro', 'Tontaro', 'Gonpachiro', 'Kamado'],
      answer: 'Kamado',
    },
    {
      question: 'Question 5: Which of the following is a demons weakness?',
      options: ['Sunlight','Water','Fire','Stones',],
      answer: 'Sunlight',
    },
    {
      question: 'Question 6: What did Tanjiro use to do before becoming a demon slayer? ',
      options: ['He was a cobbler', 'He was a coal burner', 'He used to sell fruits', 'He was a barber'],
      answer: 'He was a coal burner',
    },
    {
      question: 'Question 7: Who is the main villan of demon slayer?',
      options: ['Muzan jackson','Muzan kibutsuji','michael jackson','Michael kibutsuji',
      ],
      answer: 'Muzan kibutsuji',
    },
    {
      question: 'Question 8: What was the name of the drum demon who was removed from the Kizuki?',
      options: ['Emmu','Kyogai','Akaza','Hantengu',],
      answer: 'Kyogai',
    },
    {
      question: 'Question 9: Who is the god and creator of all demons?',
      options: ['Akaza', 'Gyokko', 'Kyogai', 'Muzan'],
      answer: 'Muzan',
    },
    {
      question: 'Question 10: Who uses the Thunder Breathing form as their technique?',
      options: ['Zenitsu', 'Inosuke', 'Genya', 'Kanao'],
      answer: 'Zenitsu',
    },
    {
      question: 'Question 11: The demon slaying weapons are injected with?',
      options: ['Nisteria flowers', 'Misteria flowers', 'Wisteria flowers', 'Histeria flowers'],
      answer: 'Wisteria flowers',
    }, 
    {
      question: 'Question 12: From Tanjiro’s family who turned into a demon?',
      options: ['His father', 'His sister', 'His mother', 'His grandparent'],
      answer: 'His sister',
    },
    {
      question: 'Question 13: The color of Nezuko’s eyes is:',
      options: ['Orange', 'White', 'Black', 'Pink'],
      answer: 'Pink',
    },
    {
      question: 'Question 14: Gyomei is the Hashira of:',
      options: ['Wind', 'Fire', 'Stone', 'Water'],
      answer: 'Stone',
    },
    {
      question: 'Question 15: Nezuko’s best power includes:',
      options: ['Pyrokinesis', 'Power of invisibility', 'Telekinesis', 'Teleportation'],
      answer: 'Pyrokinesis',
    },
    {
      question: 'Question 16: Who was raised by wild pigs?',
      options: ['Tanjiro', 'Inosuke', 'Zenitsu', 'Nezuko'],
      answer: 'Inosuke',
    },
    {
      question: 'Question 17: What type of bird serves as a messenger to Demon Slayers?',
      options: ['Eagle', 'Peacock', 'Hawks', 'Crows'],
      answer: 'Crows',
    },
    {
      question: 'Question 18: Which Demon Slayer always gets Tanjiro name wrong?',
      options: ['Inosuke Hashibira', 'Genya Shinazugawa', 'Zenitsu Agatsuma', 'Obanai Iguro'],
      answer: 'Inosuke Hashibira',
    },
    {
      question: 'Question 19: How many days did Tanjiro have to survive for the Final Selection?',
      options: ['3 days', '14 days', '9 days', '7 days'],
      answer: '7 days',
    },
    {
      question: 'Question 20: How many forms can Yoriichi use?',
      options: ['Thirteen forms', 'Fourteen forms', 'Fifteen forms', 'Sisteen forms'],
      answer: 'Thirteen forms',
    },
  ];
  
  const quizContainer = document.getElementById('quiz');
  const resultContainer = document.getElementById('result');
  const submitButton = document.getElementById('submit');
  const retryButton = document.getElementById('retry');
  const showAnswerButton = document.getElementById('showAnswer');
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectAnswers = [];
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function displayQuestion() {
    const questionData = quizData[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.className = 'question';
    questionElement.innerHTML = questionData.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.className = 'options';
  
    const shuffledOptions = [...questionData.options];
    shuffleArray(shuffledOptions);
  
    for (let i = 0; i < shuffledOptions.length; i++) {
      const option = document.createElement('label');
      option.className = 'option';
  
      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = 'quiz';
      radio.value = shuffledOptions[i];
  
      const optionText = document.createTextNode(shuffledOptions[i]);
  
      option.appendChild(radio);
      option.appendChild(optionText);
      optionsElement.appendChild(option);
    }
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
      const answer = selectedOption.value;
      if (answer === quizData[currentQuestion].answer) {
        score++;
      } else {
        incorrectAnswers.push({
          question: quizData[currentQuestion].question,
          incorrectAnswer: answer,
          correctAnswer: quizData[currentQuestion].answer,
        });
      }
      currentQuestion++;
      selectedOption.checked = false;
      if (currentQuestion < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'inline-block';
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
  }
  
  function retryQuiz() {
    currentQuestion = 0;
    score = 0;
    incorrectAnswers = [];
    quizContainer.style.display = 'block';
    submitButton.style.display = 'inline-block';
    retryButton.style.display = 'none';
    showAnswerButton.style.display = 'none';
    resultContainer.innerHTML = '';
    displayQuestion();
  }
  
  function showAnswer() {
    quizContainer.style.display = 'none';
    submitButton.style.display = 'none';
    retryButton.style.display = 'inline-block';
    showAnswerButton.style.display = 'none';
  
    let incorrectAnswersHtml = '';
    for (let i = 0; i < incorrectAnswers.length; i++) {
      incorrectAnswersHtml += `
        <p>
          <strong>Question:</strong> ${incorrectAnswers[i].question}<br>
          <strong>Your Answer:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
          <strong>Correct Answer:</strong> ${incorrectAnswers[i].correctAnswer}
        </p>
      `;
    }
  
    resultContainer.innerHTML = `
      <p>You scored ${score} out of ${quizData.length}!</p>
      <p>Incorrect Answers:</p>
      ${incorrectAnswersHtml}
    `;
  }
  
  submitButton.addEventListener('click', checkAnswer);
  retryButton.addEventListener('click', retryQuiz);
  showAnswerButton.addEventListener('click', showAnswer);
  
  displayQuestion();