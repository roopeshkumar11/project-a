import { motion } from "framer-motion";
import herimg from "../assets/herimg.png"
const About = () => {
    return (
        <div className="min-h-screen pt-28 px-6 md:px-12 bg-green-50">

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                <div className="flex justify-center">
                    <motion.img
                        src={herimg}
                        alt="FoxNut"
                        className="w-[320px] md:w-[420px] lg:w-[500px] drop-shadow-2xl"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                    />
                </div>


                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-4xl font-bold text-green-700">
                        About FoxNut
                    </h1>

                    <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                        FoxNut is a premium healthy snack brand dedicated to delivering the
                        finest quality organic makhana across India. We believe that healthy
                        food should be both nutritious and delicious. Our makhana is carefully
                        sourced from trusted farmers and processed with modern techniques to
                        maintain purity, freshness and taste.
                    </p>

                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                        Our mission is to promote a healthy lifestyle by providing snacks that
                        are rich in protein, low in fat and full of natural goodness. Whether
                        you are a fitness enthusiast, a working professional, or someone who
                        loves mindful eating, FoxNut offers the perfect guilt-free snack for
                        every moment.
                    </p>

                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                        We focus on quality, hygiene and customer satisfaction. Every pack of
                        FoxNut makhana is prepared with care to ensure maximum crunch and
                        flavor. Join us in our journey to make healthy snacking a daily habit
                        and experience the authentic taste of premium foxnuts.
                    </p>

                    {/* stats section */}
                    <div className="grid grid-cols-3 gap-6 mt-8 text-center">
                        <div>
                            <h2 className="text-3xl font-bold text-green-700">5000+</h2>
                            <p className="text-gray-600">Happy Customers</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-green-700">100%</h2>
                            <p className="text-gray-600">Organic Product</p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-green-700">4.8⭐</h2>
                            <p className="text-gray-600">Customer Rating</p>
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>
    );
};

export default About;
