import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
    return (
        <div className="min-h-screen pt-28 px-6 bg-white text-center">

            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold text-green-700">
                Your Cart 🛒
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 p-10 shadow-xl rounded-2xl max-w-xl mx-auto bg-green-50">
                <p className="text-lg text-gray-600">Your cart is empty</p>

                <Link to="/shop">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-8 py-3 bg-green-600 text-white rounded-full shadow-lg"
                    >
                        Shop Now
                    </motion.button>
                </Link>
            </motion.div>

        </div>
    );
};

export default Cart;
