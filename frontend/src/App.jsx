import React, { useState } from "react";
import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import logo from "../public/logo.png";
import SearchComponent from "./components/SearchComponent";
import { Menu, X, Phone } from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="flex">
        <button
          className="block md:hidden focus:outline-none ml-4"
          onClick={toggleMenu}
        >
          <Menu />
        </button>
        <div className="flex py-4 container mx-auto max-w-5xl md:justify-between justify-center items-center">
          <div className="">
            <img src={logo} alt="Skin & You Clinic Logo" className="" />
          </div>
          <div className=" hidden w-full md:flex justify-end gap-3 items-center">
            <p className="text-orange-500"> <Phone size={20}/></p>

            <p>+91 99200 33331 / 022 43154000</p>

          </div>
        </div>
      </header>
      <nav
        className={`fixed top-0 left-0 h-full bg-orange-500 text-white z-20 p-4 transition-transform duration-300 ease-in-out ${isMenuOpen ? "transform translate-x-0" : "transform -translate-x-full"
          } md:relative md:transform-none md:flex md:justify-between md:items-center`}
      >
        <button
          className="absolute md:hidden right-2 "
          onClick={toggleMenu}
        >
          <X />
        </button>
        <ul className="flex flex-col md:flex-row md:justify-between md:items-center container text-white font-semibold mx-auto max-w-5xl hover:cursor-pointer">
          <li className="mx-4 my-2 md:my-0 hover:underline">Home</li>
          <li className="mx-4 my-2 md:my-0 hover:underline">About Us</li>
          <li className="mx-4 my-2 md:my-0 hover:underline">Services</li>
          <li className="mx-4 my-2 md:my-0 hover:underline">Gallery</li>
          <li className="mx-4 my-2 md:my-0 hover:underline">Contact Us</li>
          <SearchComponent />
        </ul>
      </nav>
      <CarouselComponent />

      <footer className="bg-orange-500 text-center text-white py-8 mt-8">
        <h2 className="text-2xl font-bold">A LEADING SKIN LASERS & DERMATOLOGY CLINIC IN MUMBAI</h2>
      </footer>
    </div>
  );
}

export default App;
