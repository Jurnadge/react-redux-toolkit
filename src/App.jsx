import "./App.css";
import ProductList from "./component/ProductList";
import { fetchProduct } from "./redux/features/productSlice";
import store from "./redux/store/allStore";

function App() {
  return (
    <>
      <h1>coy</h1>
      <ProductList />
    </>
  );
}

export default App;
