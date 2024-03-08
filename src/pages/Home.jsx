import React, { useEffect, useState } from 'react'
import  './Home.css'
const Home = () => {

    const [searchTerm, setSearchTerm] = useState('')
    const [filteredRestaurants, setFilteredRestaurants] = useState([])

    const restaurant = [
        {
            name: "restaurants A",
            cuisine: 'Italian',
            rating :4,
            distance:4,
            priceRange: 100
        },
        {
            name: "restaurants c",
            cuisine: 'Chinese',
            rating :2,
            distance:4,
            priceRange: 40
        },
        {
            name: "restaurants d",
            cuisine: 'French',
            rating :2,
            distance:10,
            priceRange: 230
        },
        {
            name: "restaurants e",
            cuisine: 'Chinese',
            rating :5,
            distance:4,
            priceRange: 40
        }, {
            name: "restaurants f",
            cuisine: 'Japanese',
            rating :0,
            distance:12,
            priceRange: 400
        },
        {
            name: "restaurants h",
            cuisine: 'Indian',
            rating :4,
            distance:3,
            priceRange: 420
        }
    ]

    useEffect(()=>{
        // filter restaurants based on search term
        const filtered = restaurant.filter((restaurant)=>
          restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
          restaurant.rating.toString().includes(searchTerm) ||  // Convert rating to string for comparison
          restaurant.priceRange.toString().toLowerCase().includes(searchTerm) ||
          restaurant.distance.toString().includes(searchTerm)   // Convert distance to string for comparison
        )
        setFilteredRestaurants(filtered)
    },[searchTerm])


    return (
        <div className='mainDiv'>
            <h1 >Mini Restaurant</h1>

            <input
             type="text"
                placeholder='Search by name or cuisine'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul>
                {filteredRestaurants.map((restaurant)=>(
                    <li key={restaurant.name}>
                         <p>Name :  {restaurant.name}</p>
                         <p>Cuisine :  {restaurant.cuisine}</p>
                         <p>Rating :  {restaurant.rating}</p>
                         <p>Price :  {restaurant.priceRange}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home
