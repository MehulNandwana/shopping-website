import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, cartItems, updateQuantity,navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleQuantityChange = (itemId, size, value) => {
    if (value === '' || value === 0) return;
    updateQuantity(itemId, size, Number(value));
  };

  if (cartData.length === 0) {
    return <p className="text-center text-gray-500">Your cart is empty.</p>;
  }

  return (
    <div>
      {cartData.map((item) => {
        const productData = products.find((product) => product._id === item._id);
        if (!productData) {
          console.warn(`Product with ID ${item._id} not found.`);
          return null;
        }
        return (
          <div
            key={`${item._id}-${item.size}`}
            className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4"
          >
            <div className="flex items-start gap-6">
              <img className="w-15 sm:w-20" src={productData.image[0]} alt="" />
              <div>
                <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                <div className="flex items-center gap-5 mt-2">
                  <p>
                    {currency}
                    {productData.price}
                  </p>
                  <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                </div>
              </div>
            </div>
            <input
              onChange={(e) => handleQuantityChange(item._id, item.size, e.target.value)}
              className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
              type="number"
              min={1}
              defaultValue={item.quantity}
            />
            <img
              onClick={() => updateQuantity(item._id, item.size, 0)}
              className="w-4 mr-4 sm:w-5 cursor-pointer"
              src={assets.bin_icon || ''}
              alt="Delete"
            />
          </div>
        );
      })}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className='w-full text-end'>
            <button onClick = {()=>navigate('/place-order')}className='bg-black text-white text-sm my-8 px-8 py-3'>PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
