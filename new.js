const randomRest = [
    {
        link: "https://smashburger.com",
        name: "SmashBurger",
    },
    {
        link: "https://www.apolloburger.com",
        name: "Apollo Burger",
    },
    {
        link: "https://www.meltyway.com/index.html",
        name: "Melty Way",
    },
    {
        link: "http://sabaideethaicuisine.com",
        name: "Sabaidee Thai Cuisine"
    },
    {
        link: "https://locations.randrbbq.com/ut/lehi/lehi/",
        name: "R&R BBQ"
    },
    {
        link: "https://taqueria27.com",
        name: "Taqueria 27"
    },
    {
        link: "https://www.hhc.ooo",
        name: "Houstons Hot Chicken",
    },
    {
        link: "https://www.slapfishrestaurant.com/restaurant/lehi-ut/ut?utm_source=gmb&utm_medium=yext",
        name: "SlapFish Coastal Seafood Kitchen"
    },
    {
        link: "https://www.tsunamiutah.com",
        name: "Tsunami Sushi Bar",}
]

    let ran;
function randomButton (array){
	ran = Math.floor(Math.random()*array.length)
	return array[ran]
}

document.getElementById('random').addEventListener('click', () =>{
	let restaurant = randomButton(randomRest).link
    let name = randomButton(randomRest).name

	console.log(restaurant)
    console.log(name)
	document.getElementById('test').setAttribute('href', restaurant)
    document.getElementById('test').textContent = name

})
