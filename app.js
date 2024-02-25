const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
	// Get random number between 0 and 3.
	const randomNumber = getRandomNumber();
	console.log(randomNumber);

	// PROBLEM: When you click the button repeatedly, the randomNumber variable stays the same.
	// Suggestion: IF the second number generated is the same as the previous, skip it.

	/* Target the index from the array, based on the random 
    number that was generated. */
	document.body.style.backgroundColor = colors[randomNumber];
	color.innerHTML = colors[randomNumber];
});

function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}
