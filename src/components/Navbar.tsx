import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // ikon modern dari lucide-react



const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : "bg-transparent"}`}>
      <div className="w-full px-10 py-3 flex items-center justify-between">
        {/* Menu desktop */}
        <ul className="hidden md:flex space-x-8 text-white font-font-quicksand font-medium">
          <li><a href="#home" className="hover:text-[#2C7DA0]">Home</a></li>
          <li><a href="#destinations" className="hover:text-[#2C7DA0]">Jelajahi</a></li>
          <li><a href="#packages" className="hover:text-[#2C7DA0]">Paket Tur</a></li>
          <li><a href="#contact" className="hover:text-[#2C7DA0]">Contact</a></li>
        </ul>

        <a
          href="/"
          className="text-2xl font-montserrat font-bold text-white tracking-tight"
        >
          BEJALAN
        </a>

        <div className="flex items-center space-x-3">
            {/* Tombol Sign Up */}
            <button className="px-5 py-2 text-white font-quicksand font-medium hover:text-white">
                Sign Up
            </button>

            {/* Tombol Get Started */}
            <button className="px-5 py-2 bg-[#2C7DA0] text-white rounded-md font-quicksand font-medium hover:bg-[#256B8C] transition">
                Get Started
            </button>
        </div>

        {/* Tombol mobile */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 font-quicksand">
          <ul className="flex flex-col space-y-3 p-4">
            <li><a href="#home" className="block hover:text-[#2C7DA0]">Home</a></li>
            <li><a href="#destinations" className="block hover:text-[#2C7DA0]">Jelajahi</a></li>
            <li><a href="#packages" className="block hover:text-[#2C7DA0]">Paket Tur</a></li>
            <li><a href="#contact" className="block hover:text-[#2C7DA0]">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};



export default Navbar;