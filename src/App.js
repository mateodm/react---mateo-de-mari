import Navbar from "./components/Navbar"
import Card from "./components/Card"


function App() {
  let stock = [
    { id: 1, nombre: "Mesa", precio: "1000", img: "./logo.svg", },
    { id: 2, nombre: "Silla", precio: "500", img: "./logo.svg", },
    { id: 3, nombre: "Estante", precio: "800", img: "./logo.svg", }
  ]



  return (
    <div>
    <Navbar/>
    { stock.map(({nombre, precio, img}) => (
      <Card
      nombre = {nombre}
      precio = {precio}
      img = {img}
      />)
      )}
    </div>  
  )
}

export default App;
