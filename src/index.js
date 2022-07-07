// write your code here
const menuRamen = document.getElementById("ramen-menu")
const detailsRamen = document.getElementById("ramen-detail")
const nameRamen = document.getElementsByClassName("name")

function getRamen(){
    fetch('http://localhost:3000/ramens')
         .then(data => data.json())
         .then(ramen => renderRamen(ramen))

    const form = document.getElementById("new-ramen")
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        const newArray = Array.from(form)
        const objRamen = {}

        objRamen.name = newArray[0].value
        objRamen.restaurant = newArray[1].value
        objRamen.image = newArray[2].value
        objRamen.rating = newArray[3].value
        objRamen.comment = newArray[4].value
        
        renderRamen([objRamen])
        
    })
}

const renderRamen = (data) => {
    
    data.forEach(bowlRamen => {
        const image = document.createElement("img")
        image.src = bowlRamen.image
        menuRamen.append(image)

        image.addEventListener("click", function(event){
            event.preventDefault()
            const bigImage = document.querySelector(".detail-image")
            bigImage.src = bowlRamen.image
            const bigName = document.querySelector(".name")
            bigName.innerHTML = bowlRamen.name
            const bigRestaurant = document.querySelector(".restaurant")
            bigRestaurant.innerHTML = bowlRamen.restaurant
            const bigRating = document.querySelector("#rating-display")
            bigRating.innerHTML = bowlRamen.rating
            const bigComment = document.querySelector("#comment-display")
            bigComment.innerHTML = bowlRamen.comment
        
        })    
        
    })
    menuRamen.append()
    
}

getRamen()

        












        // name restaurant rating-display comment-display
        // objRamen.name = document.getElementById('new-name').value
        // objRamen.restaurant = document.getElementById('new-restaurant').value
        // objRamen.image = document.getElementById('new-image').value
        // objRamen.rating = document.getElementById('new-rating').value
        // objRamen.comment = document.getElementById('new-comment').value



























































//         const menu = document.getElementById("ramen-menu")
//         const details = document.getElementById('ramen-detail')
//         const ramenBtn = document.querySelector('#now-ramen-btn')
//         // const restaurant = details.getElementByClassName('restaurant')
//         // const commentSpan = document.getElementById('comment-display')
//         // const ratingSpan = document.getElementById('rating-display')

// const getRamen = () => 
// {
//     return fetch('http://localhost:3000/ramens')
//     .then(data => data.json())
//     .then(ramen => renderRamen(ramen))
// }

// const renderRamen = (data) =>
// {      
//     data.forEach(ramen => {
//     const img = document.createElement('img');
//     img.setAttribute('src', ramen.image)
    
//     img.addEventListener('click', (event) => {
//         document.querySelector('details-Images').src = ramen.image
//         document.querySelector('.name').innerHTML = ramen.name
//         document.querySelector('rating-display').innerHTML = ramen.rating
//     })

//     menu.append(img)
//     })
 
//     const postRamen = (ramen) => {
    
//     }
    
// }
// getRamen()











































// const menu = getElementById('ramen-menu')

// const getRamen = () => 
// {
//     fetch('http://localhost:3000/ramens')
//     .then(data => data.json())
//     .then(ramen => renderRamen(ramen))
// }

// const renderRamen = (data) => 
// {
//     data.forEach(() =>{
//     const img = document.createElement('img')
//     img.setAttribute('src',data.image)
    

//     img.addEventListener('click', (e) => {
        



//     })

//     menu.append(img)

//     })

    
// }


// getRamen()