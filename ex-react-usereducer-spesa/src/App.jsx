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

  const [addedProducts, setAddedProducts] = useState([]);

  const addToCart = (product) => {
    const isAlreadyInCart = addedProducts.some(p => p.name === product.name);
    if (!isAlreadyInCart){
      setAddedProducts([...addedProducts, {...product, quantity: 1}]);
    }
  };
  return (
    <>
      <h1>Show products</h1>
      <ul>
        {products.map((p, i) => (
          <li key={i}>
            <p>{p.name} ({p.price.toFixed(2)}€)</p>
            <button
              onClick = {() => addToCart(p)}
            >
              Add to basket
            </button>
          </li>
        ))}
      </ul>
      {addedProducts.length > 0 && (
        <>
          <h2>Basket</h2>
          <ul>
            {addedProducts.map((p, i) => (
              <li key ={i}>
                <p>
                  {p.name} - {p.price.toFixed(2)}€ - Quantity: {p.quantity}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default App;