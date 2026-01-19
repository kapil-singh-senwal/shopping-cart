import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  
  const dispatch = useDispatch()
  function handleRemoveFromCart(){
    dispatch(removeFromCart(cartItem.id))
  }
    return (
    <>
      <div className="flex flex-col md:flex-row items-center p-5 justify-between border-2 border-[#7886C7] mt-2 mb-2 rounded-xl">
        <div className="flex flex-col md:flex-row items-center p-3 gap-5">
          <img
            src={cartItem?.image}
            className="h-28 w-28 object-contain rounded-lg"
            alt={cartItem?.title}
          />
          <div className="self-center space-y-5">
            <h1 className="text-lg text-gray-700 font-bold truncate max-w-[150px] sm:max-w-[200px] md:max-w-[130px]">{cartItem?.title}</h1>
            <p className="text-gray-700 font-extrabold">${cartItem?.price}</p>
          </div>
        </div>
        
        <div className="shrink-0">
          <button
            onClick={
              handleRemoveFromCart
            }
            className="bg-[#3B38A0] text-white border-2 rounded-lg font-bold p-4 w-full cursor-pointer transition-colors duration-300"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
