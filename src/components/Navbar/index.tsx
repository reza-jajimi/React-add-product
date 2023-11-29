import { ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

type navItemsType = {
  name: string;
  path: string;
}[];

const navItems: navItemsType = [
  { name: "Products", path: "products" },
  { name: "Add product", path: "add_new_product" },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto h-20 text-white flex items-center justify-between">
      <button className="block md:hidden ml-2">
        <span className="text-3xl">&#9776;</span>
      </button>

      <div className="flex">
        <Link className="ml-9 md:ml-1" to="/">
          <h5 className="text-2xl text-center font-semibold">LOGO</h5>
        </Link>

        <ul className="ml-14 hidden md:flex ju">
          {navItems.map((item, index) => (
            <li key={index} className="mx-3 p-1">
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <ul className="flex gap-3">
        <li>
          <UserIcon className="h-6 w-6" />
        </li>
        <li>
          <ShoppingCartIcon className="h-6 w-7" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
