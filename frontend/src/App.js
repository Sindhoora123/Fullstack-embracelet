import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';
import Womenbanner from './Components/Assets/Womenbanner';
import Menbanner from './Components/Assets/Menbanner';
import Kidbanner from './Components/Assets/Kidbanner';
import { ShopContextProvider } from './Context/ShopContext'; // ✅ Make sure to import




function App() {
  return (
    <div>
      <ShopContextProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/men' element={<ShopCategory banner={<Menbanner/>} category="men"/>}/>
        <Route path='/women' element={<ShopCategory banner={<Womenbanner/>} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={<Kidbanner/>} category="kids"/>}/>
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
      </ShopContextProvider>
      

      
    </div>
  );
}

export default App;
