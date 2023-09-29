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


const randomRest = ["https://smashburger.com","https://www.apolloburger.com","https://www.meltyway.com/index.html"]

function randomButton (array){
	let ran = Math.floor(Math.random()*array.length)
	return array[ran]
}

document.getElementById('random').addEventListener('click', () =>{
	let restaurant = randomButton(randomRest)
	console.log(restaurant)
	document.getElementById('test').textContent = restaurant
})
