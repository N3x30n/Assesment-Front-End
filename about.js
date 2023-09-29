console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully')
}

function compliment(){
	alert(`You look just as dapper as this kitten :)`)
}

let form = document.querySelector('#contact');
let image = document.querySelector('img')
form.addEventListener('submit', handleSubmit);
image.addEventListener('mouseover', compliment)


