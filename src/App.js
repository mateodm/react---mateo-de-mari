import Navbar from "./components/Navbar"
import Footer from "./components/Footer.jsx"
import Carousel from "./components/Carousel";
import Error404 from "./components/Error404"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemContentListener/ItemListCointainer.jsx"
import ItemDetailContainer from "./components/ItemContentListener/ItemDetailContainer.jsx";
import "./index.css";
import { useEffect } from "react"

function App() {
  return (
    <div>
    <Router> 
            <Navbar />
      <Routes>
      <Route path="/" element={<ItemListContainer/>} />
        <Route path="/react---mateo-de-mari" element={<ItemListContainer/>} />
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="/categoria/:categoria" element= {<ItemListContainer/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/carrito" />
        <Route path="/checkout" />
        <Route path="/:categoria" />
      </Routes>
      <Footer />
    </Router>
    </div>
  )
}

export default App;
