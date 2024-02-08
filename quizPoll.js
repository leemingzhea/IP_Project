function vote(optionId) {
    const votedOption = document.getElementById(optionId);
    const votedContainer = votedOption.closest('.option');

    // Display the result
    displayResult(optionId);

    // Add the voted class to trigger the animation
    votedContainer.classList.add('voted');

    // Remove the class after the animation completes (1s)
    setTimeout(() => {
        votedContainer.classList.remove('voted');
    }, 1000);
}

function displayResult(optionId) {
    const resultContainer = document.getElementById('poll-result');
    const championName = getChampionName(optionId);

    resultContainer.textContent = `You have voted for ${championName}!`;
}

function getChampionName(championValue) {
    switch (championValue) {
        case 'option1':
            return 'Leona';
        case 'option2':
            return 'Diana';
        default:
            return 'Unknown Champion';
    }
}