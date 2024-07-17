import { IoRemoveOutline } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { IoRemoveCircle } from "react-icons/io5";
import React, { useRef } from 'react';
import { useRouter } from 'next/router'; // Updated import for Next.js routing
import 'react-toastify/dist/ReactToastify.css';
import Picture from '../components/Picture';
import Credits from "../components/Credits";
import Banner from "../components/Banner";
import CartSymbol from "../components/CartSymbol";

function Home({ pictures, cartItems, setCartItems, addToCart, removeFromCart }) {
  const router = useRouter(); // Using Next.js router
  const auctionsRef = useRef(null); // Create a ref for the Auctions section

  const isInCart = (picture) => {
    return cartItems.some(item => item.id === picture.id);
  };

  // Function to handle "Explore" button click
  const handleExploreClick = () => {
    auctionsRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCreateClick = () => {
    router.push('/upload'); // Updated navigation for Next.js
  };

  return (
    <div className="">
      <Banner handleCreateClick={handleCreateClick} handleExploreClick={handleExploreClick}/>
      <div className="bg-[#09080D] py-20" ref={auctionsRef}> {/* Attach the ref here */}
        <div className="company px-10 text-lg flex text-[#540A98] mb-3">
          <div className="flex items-center">Auctions</div>
          <div className="text-4xl flex items-center"><IoRemoveOutline /></div>
        </div>
        <div className="px-10 text-4xl text-white font-semibold mb-5">
          Live Auctions
        </div>
        <div className="px-10 mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {pictures.map((picture) => (
            <div key={picture.id} className="bg-[#16151A] p-6 rounded-xl overflow-hidden shadow-lg">
              <Picture picture={picture} />
              <div className="p-4">
                <p className="text-lg mt-6 mb-4 text-white font-bold">{picture.title}</p>
                <div className="author flex mb-6 space-x-4">
                  <div className="avatar">
                    <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src="https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg" alt="Bordered avatar" />
                  </div>
                  <div className="text-white flex items-center text-sm font-semibold"><span>&#64;</span> Jon&apos;sChoice</div>
                </div>
                <div className="flex justify-between">
                  <p className="text-white text-lg font-semibold flex items-end">${picture.price}</p>
                  {isInCart(picture) ? (
                    <button
                      onClick={() => removeFromCart(picture)}
                      className="flex space-x-2 border-2 rounded-full text-white py-1 px-4 mt-2 border-[#16151A] bg-gradient-to-br from-[#e76868] to-[#920808] transition-colors duration-300"
                    >
                      <div className="text-xl flex items-end"><IoRemoveCircle /></div>
                      <div className="">Remove</div>
                    </button>
                  ) : (
                    <button
                      onClick={() => addToCart(picture)}
                      className="flex space-x-2 border-2 rounded-full text-white py-1 px-4 mt-2 hover:border-[#16151A] hover:bg-gradient-to-br hover:from-[#4528DC] hover:to-[#560892] transition-colors duration-300"
                    >
                      <div className="text-xl flex items-end"><PiHandbag /></div>
                      <div className="">Add to Cart</div>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="">
        <CartSymbol/>
      </div>
      <div className="">
        <Credits/>
      </div>
    </div>
  );
}

export default Home;
