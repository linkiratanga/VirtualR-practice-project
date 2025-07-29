import logo from "../assets/logo.png";
import { navItems } from "../constants/DataSets";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavBar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggle = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav className="sticky top-0 z-50 py-4 backdrop-blur-md border-b border-white/50">
      <div className="container mx-auto px-4 relative text-sm ">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-14">
            {navItems.map((cur, idx) => (
              <li key={idx}>
                <a href={cur.href}>{cur.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex jusify-center items-center space-x-12">
            <a href="http://" className="py-1 px-4 border rounded-md">
              {" "}
              Sign In
            </a>
            <a
              href=""
              className="py-1 px-4 rounded-md bg-gradient-to-br from-orange-400 to-orange-800"
            >
              Create an account
            </a>
          </div>
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggle}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="lg:hidden flex flex-col fixed right-0 z-20 w-2/3 justify-center items-center py-6 space-y-4 bg-gray-900">
            <ul className="space-y-4">
              {navItems.map((cur, idx) => (
                <li key={idx}>
                  <a href={cur.href}> {cur.label}</a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 text-sm">
              <a href="http://" className="px-4 py-2 border rounded-md">
                Sign In
              </a>
              <a
                href=""
                className="py-1 px-4 flex items-center rounded-md bg-gradient-to-br from-orange-400 to-orange-800"
              >
                Create an account
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
