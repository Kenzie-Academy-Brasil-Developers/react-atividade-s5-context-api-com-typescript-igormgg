import { useCart } from "../../providers/Cart";
import { CartContainer } from "./styles";

const Cart = () => {
  const { cart, deleteProduct } = useCart();

  const handleClick = (item) => {
    deleteProduct(item);
  };

  return (
    <CartContainer>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <h1>{item.id}</h1>
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.name} />
            <h3>{item.description}</h3>
            <h4>R$ {item.price}</h4>
            <button onClick={() => handleClick(item)}>
              Remover do carrinho
            </button>
          </li>
        ))}
      </ul>
    </CartContainer>
  );
};

export default Cart;
