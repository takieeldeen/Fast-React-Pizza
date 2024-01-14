import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";

function DeleteItem(pizzaId) {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  return (
    <Button
      type="small"
      onClick={() => {
        console.log(cart);
        dispatch(deleteItem(pizzaId.pizzaId));
        console.log(pizzaId.pizzaId);
      }}
    >
      Delete
    </Button>
  );
}

export default DeleteItem;
