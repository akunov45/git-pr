import React, { useState } from 'react';
import { ChefHat, ShoppingCart, Trash2, X, Star, MapPin } from 'lucide-react';
import styles from './App.module.scss'; // Убедись, что этот файл существует
import './App.css'; 

const DATA = [
  { id: 1, cat: 'Бургеры', name: 'Z-Burger Premium', price: 420, weight: '400г', hit: true, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500' },
  { id: 2, cat: 'Бургеры', name: 'Double Cheese', price: 350, weight: '350г', hit: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
  { id: 4, cat: 'Шаурма', name: 'ЭкиДос Классик', price: 220, weight: '450г', hit: true, img: 'https://avatars.mds.yandex.net/get-altay/15278128/2a0000019758a0cd9c07b9ceba0408bc6d85/orig' },
  { id: 7, cat: 'Снэки', name: 'Фри по-бельгийски', price: 150, weight: '180г', hit: false, img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500' },
  { id: 13, cat: 'Напитки', name: 'Лимонад Базилик', price: 180, weight: '400мл', hit: false, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500' },
  // Добавь остальные товары сюда в таком же формате
];

const CATS = ['Все', 'Бургеры', 'Шаурма', 'Снэки', 'Напитки'];

function App() {
  const [activeCat, setActiveCat] = useState('Все');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Фильтрация товаров
  const filtered = activeCat === 'Все' ? DATA : DATA.filter(i => i.cat === activeCat);

  // Функции корзины
  const addToCart = (item) => {
    setCart([...cart, { ...item, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="app-container">
      {/* Шапка */}
      <header className={styles.header}>
        <div className={styles.logo}>
          <ChefHat size={32} /> EKIDOS<span>PRO</span>
        </div>
        <div className={styles.location}>
          <MapPin size={18} /> Бишкек, центр
        </div>
        <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
          <ShoppingCart size={20} />
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          <span>Корзина</span>
        </button>
      </header>

      {/* Hero секция */}
      <section className="hero">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '5px', marginBottom: '15px' }}>
          {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="#d4af37" color="#d4af37" />)}
        </div>
        <h1>АРГЕН РЕСТО</h1>
        <p style={{ letterSpacing: '4px', opacity: 0.7 }}>ЛУЧШИЙ ВКУС В ГОРОДЕ</p>
      </section>

      {/* Категории */}
      <div className={styles.categories}>
        {CATS.map(c => (
          <div 
            key={c} 
            className={`${styles.catItem} ${activeCat === c ? styles.active : ''}`}
            onClick={() => setActiveCat(c)}
          >
            {c}
          </div>
        ))}
      </div>

      {/* Сетка товаров */}
      <main className={styles.grid}>
        {filtered.map(item => (
          <div key={item.id} className={`${styles.card} ${item.hit ? styles.hitCard : ''}`}>
            {item.hit && <div className={styles.hitBadge}>ХИТ</div>}
            <div className={styles.imgBox}>
              <img src={item.img} alt={item.name} loading="lazy" />
            </div>
            <div className={styles.info}>
              <h3>{item.name}</h3>
              <div className={styles.meta}>
                <span>{item.cat}</span>
                <span>{item.weight}</span>
              </div>
              <div className={styles.priceRow}>
                <div className={styles.price}>{item.price} <span>сом</span></div>
                <button className={styles.buyBtn} onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </main>

      {/* Плавающая кнопка корзины (снизу) */}
      {cart.length > 0 && (
        <div className={styles.cartFloating} onClick={() => setIsCartOpen(true)}>
          <div className={styles.cartContent}>
            <span className={styles.icon}>🛒</span>
            <span>В корзине: {cart.length} товаров</span>
          </div>
          <button className={styles.checkoutBtn}>{totalPrice} сом</button>
        </div>
      )}

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
                    alert('Заказ принят! Мы уже начинаем готовить.');
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
    </div>
  );
}

export default App;