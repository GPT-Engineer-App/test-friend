import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Logo" className="h-8 w-8" />
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-gray-700 hover:text-gray-900">Fastighetssystem</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-gray-900">Om oss</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-gray-900">Pris</NavLink>
          <NavLink to="/" className="text-gray-700 hover:text-gray-900">Support</NavLink>
        </nav>
      </div>
      <div className="flex space-x-2">
        <Button variant="outline">Kom igång</Button>
        <Button>Logga in</Button>
      </div>
    </header>
  );
};

export default Header;