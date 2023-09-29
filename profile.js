console.log('Hello World')


function favColor(){
    alert('My Favorite Color is Purple')
}
function favPlace(){
    alert('My Favorite Place is Tokyo, Japan. Specifically in March and April')
}
function favRitual(){
    alert(`I don't have a favorite ritual. I'm not spoopy like that lol :p`)
}

document.getElementById('color').addEventListener('click', favColor)
document.getElementById('place').addEventListener('click', favPlace)
document.getElementById('ritual').addEventListener('click', favRitual)