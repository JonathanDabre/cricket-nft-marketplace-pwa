import '../styles/globals.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  const initialPictures = [
    { id: 1, title: 'Rohit Champ', url: 'https://bsmedia.business-standard.com/_media/bs/img/article/2024-07/02/full/1719895811-0482.jpg?im=FeatureCrop,size=(826,465)', price: 10 },
    { id: 2, title: 'Kohli Flag', url: 'https://www.cricbuzz.com/a/img/v1/980x654/i1/c509908/virat-kohli-signs-off-as-the-f.jpg', price: 15 },
    { id: 3, title: "Goated Duo", url: 'https://imageio.forbes.com/specials-images/imageserve/66832e10c50513644856ec37/Virat-Kohli-and-Rohit-Sharma-celebrate-India-s-victory-In-the-2024-T20-World-Cup/960x0.jpg?format=jpg&width=960', price: 15 },
    { id: 4, title: "Holy Trinity", url: 'https://images.hindustantimes.com/img/2024/07/05/550x309/ANI-20240629046-0_1720154375714_1720154399312.jpg', price: 15 },
    { id: 5, title: "Conquerers", url: 'https://www.icccricketschedule.com/wp-content/uploads/2024/06/Virat-Rohit.webp', price: 15 },
    { id: 6, title: "Celebration", url: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/384000/384057.6.jpg', price: 15 },
    { id: 7, title: "Ecstasy", url: 'https://imageio.forbes.com/specials-images/imageserve/66805329641a6b59f8d98463/CRICKET-WC-2024-T20-IND-RSA/960x0.jpg?format=jpg&width=960', price: 15 },
    { id: 8, title: "Redemption", url: 'https://revsportz.in/wp-content/uploads/2024/06/Hardik-Pandya-in-ICC-T20-WC-2024-Final-scaled.jpg', price: 15 },
    { id: 9, title: "Euphoric", url: 'https://images.mid-day.com/images/images/2024/jul/rohoit-winning-pic-new-a_d_d.webp', price: 15 },
    { id: 10, title: "Relief", url: 'https://lalluram.com/wp-content/uploads/2024/06/Rohit-Sharma-jjj.jpg', price: 15 },
    { id: 11, title: "Hoisted", url: 'https://cdn.newsnationtv.com/resize/460_-/images/2024/06/30/rohit-sharma-t20-world-cup-win-video-83.jpg', price: 15 },
    { id: 12, title: "Parade Paradise", url: 'https://morungexpress.com/uploads/2024/07/96104924_1720107888_1720106619131.JPG', price: 15 },
  ];

  const [pictures, setPictures] = useState(initialPictures);
  const [cartItems, setCartItems] = useState([]);

  const addPicture = (newPicture) => {
    setPictures([...pictures, newPicture]);
    toast.success('Photo uploaded successfully', {
      position: 'top-center',
    });
  };

  const isInCart = (picture) => {
    return cartItems.some(item => item.id === picture.id);
  };

  const addToCart = (picture) => {
    if (!isInCart(picture)) {
      setCartItems([...cartItems, picture]);
      toast.success('Added to cart', {
        position: 'top-center',
      });
    } else {
      toast.warn('This photo is already in the cart', {
        position: 'top-center',
      });
    }
  };

  const removeFromCart = (picture) => {
    const updatedCart = cartItems.filter(item => item.id !== picture.id);
    setCartItems(updatedCart);
    toast.info('Removed from cart', {
      position: 'top-center',
    });
  };

  const removePurchasedPictures = (purchasedPictures) => {
    setPictures(pictures.filter(item => !purchasedPictures.includes(item)));
    setCartItems(cartItems.filter(item => !purchasedPictures.includes(item)));
    toast.success('Purchase successful', {
      position: 'top-center',
    });
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        theme='dark'
        draggable
        pauseOnHover
      />
      <div className="py-4 bg-[#121117] text-sm font-bold">
        <nav className="px-10 mb-4 flex justify-start space-x-8">
          <div className="brand text-lg flex items-end text-white font-bold">JonChoice</div>
          <Link href="/" className={useRouter().pathname === '/' ? "text-white flex border-b-2 border-b-[#540A98] items-center" : "text-white flex items-center"}>
            Home
          </Link>
          <Link href="/upload" className={useRouter().pathname === '/upload' ? "text-white flex border-b-2 border-b-[#540A98] items-center" : "text-white flex items-center"}>
            Upload
          </Link>
          <Link href="/cart" className={useRouter().pathname === '/cart' ? "text-white flex border-b-2 border-b-[#540A98] items-center" : "text-white flex items-center"}>
            Cart
          </Link>
        </nav>
        <Component {...pageProps} pictures={pictures} cartItems={cartItems} setCartItems={setCartItems} addToCart={addToCart} removeFromCart={removeFromCart} addPicture={addPicture} removePurchasedPictures={removePurchasedPictures} />
      </div>
    </>
  );
}

export default MyApp;
