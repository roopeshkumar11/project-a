import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ id, name, price, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-2xl shadow-lg p-5 text-center hover:shadow-2xl transition"
    >
      {/* product image */}
      <Link to={`/product/${id}`}>
        <motion.img
          src={image}
          alt={name}
          className="w-40 mx-auto"
          whileHover={{ scale: 1.1 }}
        />
      </Link>

      {/* name */}
      <h2 className="text-xl font-bold mt-4 text-green-800">{name}</h2>

      {/* price */}
      <p className="text-green-600 font-semibold text-lg mt-1">₹{price}</p>

      {/* buttons */}
      <div className="flex justify-center gap-3 mt-4">

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-4 py-2 bg-green-600 text-white rounded-full"
        >
          Add Cart
        </motion.button>

        <Link to={`/product/${id}`}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-4 py-2 border border-green-600 text-green-700 rounded-full"
          >
            View
          </motion.button>
        </Link>

      </div>
    </motion.div>
  );
};

export default ProductCard;
