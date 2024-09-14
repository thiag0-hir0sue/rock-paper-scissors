function play(playerChoice) {
    // Defining the game options
    const options = ['rock', 'paper', 'scissors'];
    
    // Randomly selecting the computer's choice
    const computerChoice = options[Math.floor(Math.random() * 3)];
    
    let result = '';

    // Determining the result of the game
    if (playerChoice === computerChoice) {
        result = 'It\'s a tie! Both chose ' + playerChoice;
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win! ' + playerChoice + ' beats ' + computerChoice;
    } else {
        result = 'You lose! ' + computerChoice + ' beats ' + playerChoice;
    }

    // Displaying the result on the page
    document.getElementById('result').innerText = result;
}
