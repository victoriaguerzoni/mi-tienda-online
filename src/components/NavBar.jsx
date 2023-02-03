import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav>
        <div>
          <ul>
            <li><a href="#">libros y comics</a></li>
            <li><a href="#">Musica y peliculas</a></li>
            <li><a href="#">Juegos y juguetes</a></li>
          </ul>
        </div>
        <h1>Libreria</h1>
        <CartWidget/>        
    </nav>
  )
}

export default NavBar