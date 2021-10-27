import { useCart } from "../../providers/Cart";
import { products } from "../Products";
import { ProductListContainer } from "./styles";

const ProductList = () => {
  const { addProduct, cart } = useCart();

  const handleClick = (item) => {
    const findProduct = cart.find((prd) => prd.id === item.id);

    if (!cart.includes(findProduct)) {
      addProduct(item);
    }
  };

  return (
    <ProductListContainer>
      <h5>Produtos</h5>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
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
