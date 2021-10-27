import "./reset.css";
import "./App.css";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">Context Api com Typescript</header>
      <main>
        <ProductList />
        <Cart />
      </main>
    </div>
  );
}

export default App;
