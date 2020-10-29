import ProductList from './components/ProductList/productList.component'
import Cart from './components/Cart/cart.component';
import './App.css';
import productData from './data/products';

function App() {
  return (
    <div className="App">
        <h1>Welcome to React Shopping Store</h1>
        <ProductList data={productData}/>
        <Cart />
    </div>
  );
}

export default App;
