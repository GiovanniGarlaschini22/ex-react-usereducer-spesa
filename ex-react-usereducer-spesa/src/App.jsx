import {useState} from 'react';
import '../index.css';

function App() {

  // MILESTONE 1 //
  /*
  - Parti dall’array products fornito;
  - Crea un componente che mostra la lista dei prodotti;
  - Per ogni prodotto, mostra:
      - Nome
      - Prezzo
  Obiettivo: Vedere un elenco leggibile di tutti i prodotti con nome e prezzo.
  */


  // MILESTONE 2 //
  /*
  - Aggiungi uno stato locale addedProducts (inizialmente un array vuoto) per rappresentare i prodotti nel carrello;
  - Per ogni prodotto della lista, aggiungi un bottone "Aggiungi al carrello":
        - Al click del bottone, usa una funzione addToCart per:
        - Aggiungere il prodotto al carrello se non è già presente, con una proprietà quantity = 1.
        - Se il prodotto è già nel carrello, ignora l’azione.
  - Sotto alla lista dei prodotti, mostra una lista dei prodotti nel carrello se addedProducts contiene almeno un elemento.
      Per ogni prodotto nel carrello, mostra:
        - Nome
        - Prezzo
        - Quantità
  Obiettivo: L’utente può aggiungere prodotti al carrello e vedere una lista dei prodotti aggiunti.
  */


  // MILESTONE 3 //
  /*
  - Al click successivo del bottone "Aggiungi al carrello", se il prodotto è già presente:
      - Usa una funzione updateProductQuantity per incrementare la proprietà quantity del prodotto esistente;
  - Per ogni prodotto nel carrello, aggiungi un bottone "Rimuovi dal carrello":
      - Al click, usa una funzione removeFromCart per rimuovere il prodotto dal carrello;
  - Sotto alla lista del carrello, mostra il totale da pagare:
      - Calcola il totale moltiplicando il prezzo per la quantità di ogni prodotto e somma tutti i risultati;
  Obiettivo: Gestire l’aggiunta, la rimozione e il calcolo del totale del carrello in modo dinamico.
  */

  const products = [
    { name: 'Mela', price: 0.5 },
    { name: 'Pane', price: 1.2 },
    { name: 'Latte', price: 1.0 },
    { name: 'Pasta', price: 0.7 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existing = cart.find(p => p.name === product.name);
    if (existing) {
      setCart(cart.map(p => p.name === product.name ? {...p, quantity: p.quantity + 1} : p));
    } else {
      setCart([...cart, {...product, quantity: 1}]);
    }
  };

  const removeFromCart = (name) => setCart(cart.filter(p => p.name !== name));
  
  const total = cart.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <div className="app-container">
      <h1 className="main-title">Shopping Cart</h1>
      
      <h2 className="section-title">Products</h2>
      <ul className="products-list">
        {products.map((p, i) => (
          <li key={i} className="product-item">
            <div>
              <span className="product-name">{p.name}</span> - 
              <span className="product-price"> {p.price.toFixed(2)}€</span>
            </div>
            <button onClick={() => addToCart(p)} className="btn btn-add">Add</button>
          </li>
        ))}
      </ul>

      {cart.length > 0 ? (
        <>
          <h2 className="section-title">Cart</h2>
          <ul className="cart-list">
            {cart.map((p, i) => (
              <li key={i} className="cart-item">
                <div className="cart-item-info">
                  <span>{p.name}</span>
                  <span className="product-price">{p.price.toFixed(2)}€</span>
                  <span className="quantity-badge">Qnt: {p.quantity}</span>
                </div>
                <button onClick={() => removeFromCart(p.name)} className="btn btn-remove">Remove</button>
              </li>
            ))}
          </ul>
          
          <div className="total-section">
            <h3 className="total-amount">Total: {total.toFixed(2)}€</h3>
            <button className="btn btn-checkout">Checkout</button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <p>Empty cart</p>
        </div>
      )}
    </div>
  );
}

export default App;