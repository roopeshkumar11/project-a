import { motion } from "framer-motion";
import { useState } from "react";

const ProductDetails = () => {

  const [qty,setQty] = useState(1);

  return (
    <div className="min-h-screen pt-28 px-6 md:px-12 bg-green-50">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
        initial={{opacity:0, x:-80}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8}}
        className="flex justify-center relative">

          <motion.img
            src="https://cdn-icons-png.flaticon.com/512/1046/1046784.png"
            alt="makhana"
            className="w-80 md:w-96 drop-shadow-2xl"
            animate={{y:[0,-15,0]}}
            transition={{repeat:Infinity, duration:4}}
          />

          {/* floating bg */}
          <motion.div
            className="absolute w-32 h-32 bg-green-300 rounded-full -z-10 opacity-30"
            animate={{scale:[1,1.2,1]}}
            transition={{repeat:Infinity, duration:4}}
          />
        </motion.div>

        {/* RIGHT DETAILS */}
        <motion.div
        initial={{opacity:0, x:80}}
        animate={{opacity:1, x:0}}
        transition={{duration:0.8}}>

          <h1 className="text-4xl font-bold text-green-800">
            Masala Fox Nut
          </h1>

          <p className="text-2xl font-bold text-green-600 mt-3">₹249</p>

          {/* rating */}
          <div className="flex gap-1 mt-3 text-yellow-400 text-xl">
            ⭐⭐⭐⭐⭐
            <span className="text-gray-600 text-sm ml-2">(120 reviews)</span>
          </div>

          <p className="mt-6 text-gray-600">
            Premium roasted makhana with delicious masala flavor. 
            Rich in protein and perfect healthy snack for daily use.
          </p>

          {/* quantity */}
          <div className="flex items-center gap-4 mt-8">
            <button 
            onClick={()=>qty>1 && setQty(qty-1)}
            className="px-4 py-2 bg-gray-200 rounded">-</button>

            <span className="text-xl font-semibold">{qty}</span>

            <button 
            onClick={()=>setQty(qty+1)}
            className="px-4 py-2 bg-gray-200 rounded">+</button>
          </div>

          {/* buttons */}
          <div className="flex gap-4 mt-8 flex-wrap">

            <motion.button
            whileHover={{scale:1.1}}
            whileTap={{scale:0.9}}
            className="px-8 py-3 bg-green-600 text-white rounded-full shadow-lg">
              Add to Cart 🛒
            </motion.button>

            <motion.button
            whileHover={{scale:1.1}}
            className="px-8 py-3 border-2 border-green-600 text-green-700 rounded-full">
              Buy Now ⚡
            </motion.button>

          </div>

          {/* extra info */}
          <div className="mt-10 space-y-2 text-gray-600">
            <p>✔ 100% Organic</p>
            <p>✔ High Protein Snack</p>
            <p>✔ Fast Delivery 3-5 days</p>
            <p>✔ Cash on Delivery Available</p>
          </div>

        </motion.div>

      </div>

    </div>
  );
};

export default ProductDetails;
