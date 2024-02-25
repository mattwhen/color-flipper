const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const clipboard = document.querySelector('.clipboard');

btn.addEventListener('click', function () {
	let hexColor = '#';

	for (let i = 0; i < 6; i++) {
		// Push values in an array until we get 6 characters.
		hexColor += hex[getRandomNumber()];
		// Target the index of hex by generating a random number.
	}

	document.body.style.backgroundColor = hexColor;
	color.textContent = hexColor;
	clipboard.style.display = 'inline-block';
	console.log(color.value);
});

function getRandomNumber() {
	return Math.floor(Math.random() * hex.length);
}

async function copyHex() {
	try {
		navigator.clipboard.writeText(color.textContent);
	} catch (error) {
		console.error('Error copying hex', error);
	}
}
