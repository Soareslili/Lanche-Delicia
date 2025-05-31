import React, { useState } from 'react';
import Header from './pages/components/Header';
import Hero from './pages/components/hero';
import Modal from './pages/components/modal';

function App() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter(item => item.id !== productId));
  };

  const openCart = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <Header openCart={openCart} />
      <Hero addToCart={addToCart} />
      <Modal show={showModal} cart={cart} closeModal={closeModal} removeFromCart={removeFromCart} />
    </>
  );
}

export default App;