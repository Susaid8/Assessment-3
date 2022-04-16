const restaurants = ["Applebees", "Prestemon Park", "Francis A. Gross Golf Club"]

const showRestaurant = () => {
    const randomElement = restaurants[Math.floor (Math.random() * restaurants.length)]



const restaurantTitle = document.createElement('h3')
restaurantTitle.innerText= randomElement
let section = document.querySelector('section')
section.appendChild(restaurantTitle)

}

const restaurantButton = document.querySelector('#restaurant-selector')

restaurantButton.addEventListener('click', showRestaurant)