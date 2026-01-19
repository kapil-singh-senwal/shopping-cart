import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="text-[#7886C7] font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide uppercase italic">
              Shopping Cart
            </h1>
          </div>
        </Link>
        <ul className="flex list-none items-center gap-6 text-gray-800 font-semibold pr-3">
          <Link to={"/"}>
            <li className="cursor-pointer list-none">Home</li>
          </Link>
          <Link to={"/cart"}>
            <li className="cursor-pointer list-none flex items-center">
              Cart
              {cart.length > 0 ? (
                <span className="ml-2 bg-[#7886C7] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  {cart.length}
                </span>
              ) : (
                ""
              )}
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}