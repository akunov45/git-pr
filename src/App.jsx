import LandingPage from "./components/LandingPage"
import React, { useState } from 'react';
import './App.css';
import { ChefHat, ShoppingCart, Trash2, X, Star } from 'lucide-react';
import styles from './App.module.scss'
// import './App.scss'
import HomePage from './pages/HomePage'
import Header from './components/Header'

const MENU = [
  { id: 1, name: "ЧЕРНАЯ ПАСТА", price: 900, desc: "Премиальные чернила каракатицы и тигровые креветки.", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=800" },
  { id: 2, name: "БОЛОНЬЕЗЕ", price: 450, desc: "Традиционное рагу из мраморной говядины с томатами.", img: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800" },
  { id: 3, name: "КАРБОНАРА", price: 480, desc: "Сливочный соус, выдержанный сыр и хрустящий бекон.", img: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800" },
];

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Добавить в корзину
  const addToCart = (item) => {
    setCart([...cart, { ...item, cartId: Date.now() }]);
  };

  // Удалить из корзины
  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  // Общая сумма
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);


  return (
    <div className="app-container">
      <Header />
      {/* Навигация */}
      <nav className="navbar">
        <div className="logo">
          <ChefHat size={32} />
          АРГЕН РЕСТО
        </div>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={20} />
          {cart.length > 0 && <span>{cart.length}</span>}
          <span>Корзина</span>
        </button>
      </nav>

      {/* Hero */}
      <header className="hero">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '15px' }}>
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#d4af37" color="#d4af37" />)}
        </div>
        <h1>АРГЕН РЕСТО</h1>
        <p style={{ letterSpacing: '4px', opacity: 0.7 }}>ИТАЛЬЯНСКИЕ ТРАДИЦИИ В БИШКЕКЕ</p>
      </header>

      {/* Сетка меню */}
      <main className="menu-grid">
        {MENU.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.name} className="card-img" />
            <div className="card-body">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-desc">{item.desc}</p>
              <div className="card-footer">
                <div className="price">{item.price} <span>сом</span></div>
                <button className="buy-btn" onClick={() => addToCart(item)}>
                  Заказать
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Модальное окно корзины */}
      {isCartOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <X className="close-modal" onClick={() => setIsCartOpen(false)} />
            <h2 style={{ marginBottom: '25px', textAlign: 'center' }}>ВАШ ЗАКАЗ</h2>

            {cart.length === 0 ? (
              <p style={{ textAlign: 'center', color: '#666' }}>Корзина пока пуста...</p>
            ) : (
              <>
                <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
                  {cart.map((item) => (
                    <div key={item.cartId} className="cart-item">
                      <div>
                        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                        <div style={{ color: '#d4af37' }}>{item.price} сом</div>
                      </div>
                      <Trash2
                        size={18}
                        color="#ff4444"
                        style={{ cursor: 'pointer' }}
                        onClick={() => removeFromCart(item.cartId)}
                      />
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '30px', borderTop: '2px solid #222', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.4rem', fontWeight: '800' }}>
                    <span>ИТОГО:</span>
                    <span>{totalPrice} сом</span>
                  </div>
                  <button className="checkout-btn" onClick={() => {
                    alert('Заказ принят! Арген Ресто готовит вашу пасту.');
                    setCart([]);
                    setIsCartOpen(false);
                  }}>
                    ОФОРМИТЬ ЗАКАЗ
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <LandingPage />
    </div>
  );
}

export default App;