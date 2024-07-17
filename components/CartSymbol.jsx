import React from 'react';
import { useRouter } from 'next/router';
import { MdOutlineShoppingCart } from 'react-icons/md';

function CartSymbol() {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push('/cart')}
      className="fixed bottom-4 right-4 bg-gradient-to-br from-[#510EA1] to-[#4528DC] text-white p-4 text-lg md:text-2xl rounded-full shadow-lg cursor-pointer flex items-center justify-center"
    >
      <MdOutlineShoppingCart />
    </div>
  );
}

export default CartSymbol;
