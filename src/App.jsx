import React, { useState } from 'react';
import styles from './App.module.scss';

const DATA = [
  // БУРГЕРЫ
  { id: 1, cat: 'Бургеры', name: 'Z-Burger Premium', price: 420, weight: '400г', hit: true, img: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=500' },
  { id: 2, cat: 'Бургеры', name: 'Double Cheese', price: 350, weight: '350г', hit: false, img: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500' },
  { id: 3, cat: 'Бургеры', name: 'Мексиканский Чикен', price: 310, weight: '320г', hit: false, img: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500' },
  
  // ДОНЕРЫ / ШАУРМА
  { id: 4, cat: 'Шаурма', name: 'ЭкиДос Классик', price: 220, weight: '450г', hit: true, img: 'https://avatars.mds.yandex.net/get-altay/15278128/2a0000019758a0cd9c07b9ceba0408bc6d85/orig' },
  { id: 5, cat: 'Шаурма', name: 'Донер в батоне', price: 210, weight: '400г', hit: false, img: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500' },
  { id: 6, cat: 'Шаурма', name: 'Сырный Донер', price: 250, weight: '480г', hit: false, img: 'https://avatars.mds.yandex.net/i?id=75081943afa564758742a1e5463ef391_l-7051380-images-thumbs&n=13' },

  // СНЭКИ
  { id: 7, cat: 'Снэки', name: 'Фри по-бельгийски', price: 150, weight: '180г', hit: false, img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=500' },
  { id: 8, cat: 'Снэки', name: 'Крылышки Баффало', price: 320, weight: '6 шт', hit: true, img: 'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500' },
  { id: 9, cat: 'Снэки', name: 'Наггетсы Куриные', price: 190, weight: '9 шт', hit: false, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=500' },
  { id: 10, cat: 'Снэки', name: 'Луковые Кольца', price: 170, weight: '150г', hit: false, img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=500' },

  // КОМБО
  { id: 11, cat: 'Комбо', name: 'Сет на Двоих', price: 850, weight: '1.2кг', hit: true, img: 'https://images.unsplash.com/photo-1610614819513-58e34989848b?w=500' },
  { id: 12, cat: 'Комбо', name: 'Детский Набор', price: 390, weight: '400г', hit: false, img: 'https://avatars.mds.yandex.net/i?id=b352ccdffa5450a350719eaa2a4b54b0_l-5233341-images-thumbs&n=13' },

  // НАПИТКИ
  { id: 13, cat: 'Напитки', name: 'Лимонад Базилик', price: 180, weight: '400мл', hit: false, img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500' },
  { id: 14, cat: 'Напитки', name: 'Кола со льдом', price: 90, weight: '500мл', hit: false, img: 'https://avatars.mds.yandex.net/i?id=da76852118edd691e9b1456309fe7c5b_l-5877892-images-thumbs&n=13' },
  { id: 15, cat: 'Напитки', name: 'Айс Ти Персик', price: 120, weight: '400мл', hit: false, img: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500' },
];

const CATS = ['Все', 'Бургеры', 'Шаурма', 'Снэки', 'Комбо', 'Напитки'];

function App() {
  const [activeCat, setActiveCat] = useState('Все');
  const [cartCount, setCartCount] = useState(0);

  const filtered = activeCat === 'Все' ? DATA : DATA.filter(i => i.cat === activeCat);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>EKIDOS<span>PRO</span></div>
        <div className={styles.location}>📍 Бишкек, центр</div>
      </header>

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
                <div className={styles.price}>{item.price}<span>сом</span></div>
                <button className={styles.buyBtn} onClick={() => setCartCount(c => c + 1)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <div className={styles.cartFloating}>
        <div className={styles.cartContent}>
          <span className={styles.icon}>🛒</span>
          <span>В корзине: {cartCount} товаров</span>
        </div>
        <button className={styles.checkoutBtn}>Оформить</button>
      </div>
    </div>
  );
}

export default App;