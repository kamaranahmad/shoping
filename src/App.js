import logo from './logo.svg';
import './App.css';
import Cart from './pages/Cart'
import {Link,Route,Routes} from "react-router-dom"
import Login from './pages/Login';
import HomeScreen from './screens/HomeScreen'
import ProductScree from './screens/ProductScreen'
import ProductScreen from './screens/ProductScreen';

function App() {
  return (<>

<header className="row">
        <div>
          <Link className="brand" to="/">amazona</Link>
        </div>
        <div>
          <Link to="/cart">Cart</Link>
          <Link to="/login">login</Link>
        </div>
      </header>

    <Routes>
      
      <Route path='/' element={<HomeScreen />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/product/:id" element={<ProductScreen/>}></Route>
      <Route path="/product/"  element={<HomeScreen/>}></Route>

    </Routes>
      
     <div className="grid-container">
      
      
      
      <footer className="row center">All right reserved</footer>
    </div>
    </>
  );
}

export default App;
