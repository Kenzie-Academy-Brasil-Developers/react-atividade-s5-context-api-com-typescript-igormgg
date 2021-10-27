import { useCart } from "../../providers/Cart";
import { products } from "../Products";
import { ProductListContainer } from "./styles";

const ProductList = () => {
  const { addProduct } = useCart();

  const handleClick = (item) => {
    addProduct(item);
  };

  return (
    <ProductListContainer>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <h1>{item.id}</h1>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.name} />
            <h3>{item.description}</h3>
            <h4>R$ {item.price}</h4>
            <button onClick={() => handleClick(item)}>
              Adicionar ao carrinho
            </button>
          </li>
        ))}
      </ul>
    </ProductListContainer>
  );
};

export default ProductList;
