import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);
  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  console.log(cart, totalCart);

  return (
    <div className="flex justify-center">
      {cart && cart.length ? (
        <div className="max-w-6xl min-[1440px]:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 min-[1440px]:grid-cols-4 gap-10 py-4">
            <div className="md:col-span-2 min-[1440px]:col-span-3">
                <div className="flex flex-col p-3">
                    {
                        cart.map(cartItem => <CartTile cartItem={cartItem}/>)
                    }
                </div>
            </div>
            <div className="md:col-span-1">
                <div className="flex flex-col justify-center items-end p-5 space-y-5">
                    <h1 className="font-bold text-lg text-[#7886C7]">Your Cart Summary </h1>
                    <p>
                        <span className="text-gray-800 font-bold">Total Item</span>
                        <span>:{cart.length}</span>
                    </p>
                    <p>
                        <span className="text-gray-800 font-bold">Total Amount</span>
                        <span>: ${totalCart.toFixed(2)}</span>
                    </p>
                </div>
            </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to="/">
            <button className="bg-[#7886C7] text-white border-2 rounded-lg font-bold p-4">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
