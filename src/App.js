import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Error404 from "./components/Error404"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemContentListener/ItemListCointainer.jsx"
import ItemDetailContainer from "./components/ItemContentListener/ItemDetailContainer.jsx";

function App() {



  return (
    <div>
    <Router> 
            <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/item/:categoria/:id/:nombre" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/carrito" />
        <Route path="/checkout" />
      </Routes>
    </Router>
{/*     <div class="row d-flex justify-content-center">
        {stock.map(({ nombre, precio, img }, index) => (
          <Card
            key={index}
            nombre={nombre}
            precio={precio}
            img={img}
          />)
        )}
      </div> */}
    </div>
  )
}

export default App;
