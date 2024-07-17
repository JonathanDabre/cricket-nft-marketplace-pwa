// components/pages/CartPage.jsx

import React from 'react';
import { useRouter } from 'next/router';

function CartPage({ cartItems, removePurchasedPictures }) {
  const router = useRouter();

  const handlePay = () => {
    removePurchasedPictures(cartItems);
    router.replace('/'); // Navigate back to home page
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="h-[100vh] px-10 md:px-0 mx-auto text-white max-w-md mt-8">
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      {cartItems.length > 0 ? (
        <div className="bg-[#16151A] shadow-md rounded-lg p-5">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-2">
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-600">${item.price}</p>
              </div>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => removePurchasedPictures([item])}
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4">
            <p className="font-semibold">Total:</p>
            <p className="font-semibold">${totalPrice}</p>
          </div>
          <button
            onClick={handlePay}
            className="bg-gradient-to-br from-[#510EA1] to-[#4528DC] text-white py-2  px-5 mt-4 rounded hover:bg-green-600 transition-colors duration-300"
          >
            Pay
          </button>
        </div>
      ) : (
        <p className="text-start text-[#8E8E8E]">No items in cart.</p>
      )}
    </div>
  );
}

export default CartPage;
