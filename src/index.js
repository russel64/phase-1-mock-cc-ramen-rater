// write your code here

fetch('http://localhost:3000/ramens')
.then( res => res.json() )
.then( data => {
    console.log(data)
    const ramen = data
    ramenImages(ramen)
    ramenDetailsUpdate(ramen)
    
})

function ramenImages(ramen){
    let ramenMenu = document.getElementById('ramen-menu')
    let ramenPics = document.createElement('img')
    ramenPics.src = ramen.image
    ramenMenu.append(ramenPics);
}

let ramenDetails = document.querySelector('#ramen-detail')
let ramenPic = document.getElementsByClassName('detail-image')
let ramenName = document.querySelector('.name')
let ramenRestaurant = document.querySelector('.restaurant')
let ramenRating = document.getElementsByTagName('h3')[2]
let ramenCommnet = document.getElementsByTagName('h3')[3]

function ramenDetailsUpdate(ramen){
    ramenPic.src = ramen.image
    ramenName.textContent = ramen.name
    ramenRestaurant.textContent = ramen.restaurant 
    ramenRating.textContent = ramen.rating 
    ramenComment = ramen.comment 
}

