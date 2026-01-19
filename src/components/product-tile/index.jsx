import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../store/slices/cart-slice";

export default function ProductTile({ product }) {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state);

  function handleAddToCart() {
    dispatch(addToCart(product));
  }

  function handleRemoveFromCart(){
    dispatch(removeFromCart(product.id))
  }
  return (
    <div>
      <div className="group flex flex-col items-center border-2 border-[#7886C7] gap-3 p-4 h-96 rounded-xl">
        <div className="h-45">
          <img
            src={product?.image}
            alt={product?.title}
            className="object-contain h-full w-full"
          />
        </div>
        <div>
          <h1 className="w-40 truncate mt-3 text-gray-700 font-bold text-lg">
            {product?.title}
          </h1>
        </div>
        <div className="flex items-center justify-center w-full mt-5">
          <button
            onClick={cart.some((item) => item.id === product.id)? handleRemoveFromCart :handleAddToCart}
            className={`${cart.some((item) => item.id === product.id) ? 'bg-[#3B38A0]' : 'bg-[#7886C7] hover:bg-[#3B38A0]'} text-white border-2 rounded-lg font-bold p-4 w-full cursor-pointer transition-colors duration-300`}
          >
            {cart.some((item) => item.id === product.id)
              ? "Remove from cart"
              : "Add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}
