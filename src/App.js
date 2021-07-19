import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const [isCartDiplayed, setIsCartDisplayed] = useState(false);

  const showCartHander = () => {
    setIsCartDisplayed(true);
  }

  const hikeCartHandler = () => {
    setIsCartDisplayed(false);
  }

  return <React.Fragment>
    {isCartDiplayed && <Cart onClose={hikeCartHandler}/>}
    <Header onShowCart={showCartHander}/>
    <main>
      <Meals/>
    </main>
  </React.Fragment>;
}

export default App;
