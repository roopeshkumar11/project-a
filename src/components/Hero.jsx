import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import herimg from "../assets/herimg.png"

const Hero = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center px-6 md:px-12 pt-24">

            <div className="grid md:grid-cols-2 gap-10 items-center w-full max-w-7xl">

                {/* LEFT TEXT */}
                <div className="text-center md:text-left">

                    <motion.h1
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl sm:text-5xl md:text-6xl font-bold text-green-800 leading-tight"
                    >
                        Shuddh Desi Makhana <br />
                        <span className="text-green-600">Healthy Swad, Fit Life</span>
                    </motion.h1>


                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="mt-6 text-gray-600 text-base md:text-lg"
                    >
                        Organic makhana full of protein and taste.
                        Best healthy snack for gym & diet lovers.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.3 }}
                        className="mt-8 flex gap-4 justify-center md:justify-start"
                    >
                        <Link to="/shop">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-8 py-3 bg-green-600 text-white rounded-full shadow-lg"
                            >
                                Shop Now
                            </motion.button>
                        </Link>

                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="px-8 py-3 border-2 border-green-600 text-green-700 rounded-full"
                        >
                            Explore
                        </motion.button>
                    </motion.div>
                </div>

                {/* RIGHT IMAGE + FLOAT ANIMATION */}
                <div className="flex justify-center relative">

                    {/* Main Image */}
                    <motion.img
                        src={herimg}
                        alt="makhana"
                        className="w-72 md:w-96 drop-shadow-2xl"
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                    />

                    {/* floating circle */}
                    <motion.div
                        className="absolute w-20 h-20 bg-green-300 rounded-full top-10 left-10 opacity-40"
                        animate={{ y: [0, 30, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                    />

                    <motion.div
                        className="absolute w-12 h-12 bg-green-500 rounded-full bottom-10 right-10 opacity-40"
                        animate={{ y: [0, -25, 0] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                    />

                </div>

            </div>
        </div>
    );
};

export default Hero;
