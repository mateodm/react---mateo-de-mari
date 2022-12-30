import Navbar from "./components/Navbar"
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
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/carrito" />
        <Route path="/checkout" />
        <Route path="/:categoria" />
      </Routes>
    </Router>
    </div>
  )
}

export default App;
