import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [dAddress, setAddress] = useState(false); 
  const [cartPage, setCartPage] = useState(true); 
  const cartItems = useSelector((store) => store.cart.items || []);
  const totalRate = cartItems.reduce((sum, item) => sum + (item?.rate || 0), 0);

  const navigate = useNavigate()

  const handleAddressPage = () => {
    setCartPage(false);
    setAddress(true); 
  };

  const handleBackToCart = () => {
    setAddress(false); 
    setCartPage(true); 
  };

  const handleCheckOut= () => {
    navigate("/checkout/")
  }

  return (
    <>
      {/* Cart Page */}
      {cartPage && (
        <div className="overflow-y-auto max-h-screen pb-20">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item?.id} className="border m-4 flex">
                <img
                  src={item?.cloudinaryImageId}
                  alt=""
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h2 className="text-wrap text-sm">{item?.name || 'No name'}</h2>
                  <p className="text-gray-500 mt-2">{item?.weight}</p>
                  <p className="mt-2 font-bold">₹ {item?.rate || 'No Price'}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="font-bold m-4">Your cart is empty.</p>
          )}
        </div>
      )}

      {/* Fixed "View Cart" Button */}
      {cartPage && (
        <div className="fixed bottom-4 left-3 right-4 bg-green-700 text-white flex items-center justify-between rounded-xl px-4 py-1 m-2 shadow-lg z-50">
          <div className="font-semibold">
            <p>{cartItems.length} Items</p>
            <p>₹{totalRate}</p>
          </div>
          <button
            className="font-semibold focus:outline-none"
            onClick={handleAddressPage}
          >
            View Cart <span className="text-white font-extrabold">{"->"}</span>
          </button>
        </div>
      )}

      {dAddress && (
        <div className="p-4">
          <h1 className="text-xl font-bold mb-4">Select Delivery Address</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="house" className="block font-semibold">
                Apartment Name / House No. <span className="font-bold text-red-400">*</span>
              </label>
              <input
                type="text"
                id="house"
                required
                placeholder="Enter House No./ Apartment Name"
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold">
                Address <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                id="address"
                required
                placeholder="Enter Full Address..."
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="pincode" className="block font-semibold">
                Area/Block <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="text"
                id="pincode"
                required
                placeholder="H-block ph-6"
                
                className="w-full border rounded p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="pincode" className="block font-semibold">
                PinCode <span className="text-red-500 font-bold">*</span>
              </label>
              <input
                type="number"
                id="pincode"
                required
                placeholder="Enter Pincode"
                className="w-full border rounded p-2"
              />
            </div>
          </form>
          <button
            className="mt-4 bg-gray-700 text-white px-4 py-2 rounded"
            onClick={handleBackToCart}
          >
            Back to Cart
          </button>

          <button
            className="mt-4 bg-green-700 text-white px-4 ml-16 py-2 rounded"
            onClick={handleCheckOut}
          >
            Confirm
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;
