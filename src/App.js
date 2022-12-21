import Navbar from "./components/Navbar"
import Card from "./components/Card"


function App() {
  let stock = [
    { id: 1, nombre: "Mesa", precio: "1000", img: "./logo.svg", },
    { id: 2, nombre: "Silla", precio: "500", img: "./logo.svg", },
    { id: 3, nombre: "Estante", precio: "800", img: "./logo.svg", },
    { id: 4, nombre: "Televisor", precio: "2000", img: "./logo.svg", },
    { id: 5, nombre: "Parlante", precio: "600", img: "./logo.svg", },
    { id: 6, nombre: "Auriculares", precio: "300", img: "./logo.svg", }
  ]



  return (
    <div>
      <Navbar />
      <div class="row d-flex justify-content-center">
        {stock.map(({ nombre, precio, img }, index) => (
          <Card
            key={index}
            nombre={nombre}
            precio={precio}
            img={img}
          />)
        )}
      </div>
    </div>
  )
}

export default App;