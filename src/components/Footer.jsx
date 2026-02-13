import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white mt-20">

            <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <h1 className="text-3xl font-bold text-green-300">FoxNut</h1>
                    <p className="mt-4 text-gray-200">
                        Premium quality organic makhana for healthy lifestyle.
                        Fresh • Crunchy • Healthy
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6 text-2xl">

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://www.instagram.com/ankitverma19_?igsh=MTBvZTloNTFzNjdhYQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className="cursor-pointer" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://www.instagram.com/ankitverma19_?igsh=MTBvZTloNTFzNjdhYQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaInstagram className="cursor-pointer" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://www.instagram.com/ankitverma19_?igsh=MTBvZTloNTFzNjdhYQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaTwitter className="cursor-pointer" />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.2 }}
                            href="https://www.instagram.com/ankitverma19_?igsh=MTBvZTloNTFzNjdhYQ=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaYoutube className="cursor-pointer" />
                        </motion.a>

                    </div>

                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-xl font-semibold text-green-300 mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-gray-200">
                        <li className="hover:text-green-400 cursor-pointer">Home</li>
                        <li className="hover:text-green-400 cursor-pointer">Shop</li>
                        <li className="hover:text-green-400 cursor-pointer">About</li>
                        <li className="hover:text-green-400 cursor-pointer">Contact</li>
                    </ul>
                </div>

                {/* Products */}
                <div>
                    <h2 className="text-xl font-semibold text-green-300 mb-4">Products</h2>
                    <ul className="space-y-2 text-gray-200">
                        <li>Classic Makhana</li>
                        <li>Masala Makhana</li>
                        <li>Chocolate Makhana</li>
                        <li>Peri Peri Makhana</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h2 className="text-xl font-semibold text-green-300 mb-4">Subscribe</h2>
                    <p className="text-gray-200">Get latest offers & updates</p>

                    <div className="flex mt-4">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="px-4 py-2 rounded-l-lg w-full text-black outline-none"
                        />
                        <button className="bg-green-500 px-5 rounded-r-lg hover:bg-green-600">
                            Join
                        </button>
                    </div>
                </div>

            </div>

            {/* Bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center border-t border-green-700 py-4 text-gray-300"
            >
                © 2026 Ankit Kumar Verma. All rights reserved.
            </motion.div>


        </footer>
    );
};

export default Footer;
