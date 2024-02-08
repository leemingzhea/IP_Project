function checkAnswers() {
    const correctAnswers = ['True', 'False'];
    const resultElement = document.getElementById('result');
    const selectedAnswers = document.querySelectorAll('input[type="radio"]:checked');

    if (selectedAnswers.length === correctAnswers.length) {
        const isAllCorrect = Array.from(selectedAnswers).every((answer, index) => {
            return answer.value === correctAnswers[index];
        });

        if (isAllCorrect) {
            resultElement.textContent = 'Correct! 50 points awarded.';
            resultElement.style.color = 'green';
            localStorage.setItem('points', 50); 
        } else {
            resultElement.textContent = 'Incorrect! No points awarded.';
            resultElement.style.color = 'red'; 
            localStorage.setItem('points', 0); 
        }
    } else {
        resultElement.textContent = 'Please answer all questions.';
        resultElement.style.color = 'red'; 
    }
}