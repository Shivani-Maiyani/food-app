import logo from './logo.svg';
import './App.css';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './Store/CartProvider';

function App() {

  const [cartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <>
    <div>
    <CartProvider>
    {cartIsShown && <Cart onClose={hideCartHandler}/> }
      <Header onCartShow={showCartHandler}/>
        <main>
        <Meals/>
        </main>
        </CartProvider>
    </div>
     
    </>
    
    
  );
}

export default App;
