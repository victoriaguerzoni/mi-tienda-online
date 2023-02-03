import React from 'react'
import ItemListcontainer from './containers/ItemListContainer';
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListcontainer greeting={"Bienvenidos a MITIENDAONLINE"}/>
    </div>
  )
}

export default App;
