import './App.css';

import Home from './components/Home';
import {Routes,Route} from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';
import Cart from "./components/Cart";
import Navbar from './components/Navbar';
import { Checkout } from './components/Checkout';
import { OrderPlaced } from './components/OrderPlaced';

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>}/>
        <Route  path="/products/:id" element={<Product/>}/>
        <Route  path="/cart" element={<Cart/>} />
        <Route  path="/checkout" element={<Checkout/>} />
        <Route  path="/orderPlaced" element={<OrderPlaced/>} />
        <Route  path="/home" element={<Home/>} />
      </Routes>
    
    </div>
  );
}

export default App;