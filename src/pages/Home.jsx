
import { motion } from "framer-motion";
import React from "react";

import imgch from "../assets/imgch.png";
import imgmashala from "../assets/imgmashala.png";
import imgonion from "../assets/imgonion.png";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// product data
const products = [
  {
    id: 1,
    name: "Masala Makhana",
    price: 249,
    image: imgmashala
  },
  {
    id: 2,
    name: "Cream & Onion Makhana",
    price: 299,
    image: imgonion
  },
  {
    id: 3,
    name: "Chocolate Makhana",
    price: 349,
    image: imgch
  }
];

const Home = () => {
  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <Hero/>

      {/* FEATURES */}
      <section className="py-16 bg-white px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-center">

          {[
            {title:"100% Organic", desc:"Pure natural makhana directly from farms"},
            {title:"Healthy Snacks", desc:"Rich in protein & low calories"},
            {title:"Fast Delivery", desc:"Delivery all over India within 3-5 days"},
          ].map((item,i)=>(
            <motion.div
              key={i}
              initial={{opacity:0, y:60}}
              whileInView={{opacity:1, y:0}}
              transition={{duration:0.6, delay:i*0.2}}
              className="p-8 rounded-2xl shadow-lg bg-green-50 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-bold text-green-700">{item.title}</h2>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 bg-green-50 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">

          <motion.h2
            initial={{opacity:0, y:-40}}
            whileInView={{opacity:1, y:0}}
            className="text-4xl font-bold text-green-800"
          >
            Our Popular Products
          </motion.h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mt-14">

            {products.map((item,i)=>(
              <motion.div
                key={item.id}
                initial={{opacity:0, scale:0.8}}
                whileInView={{opacity:1, scale:1}}
                transition={{duration:0.5, delay:i*0.2}}
                whileHover={{y:-10}}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >

                {/* product image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-40 mx-auto h-40 object-contain"
                />

                {/* product name */}
                <h3 className="text-xl font-semibold mt-4">{item.name}</h3>

                {/* price */}
                <p className="text-green-600 font-bold mt-2">₹{item.price}</p>

                {/* button */}
                <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
                  Add to Cart 🛒
                </button>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-700 text-white text-center px-6">
        <motion.h2
          initial={{opacity:0, y:-30}}
          whileInView={{opacity:1, y:0}}
          className="text-4xl font-bold"
        >
          Eat Healthy, Live Better
        </motion.h2>

        <motion.p
          initial={{opacity:0}}
          whileInView={{opacity:1}}
          transition={{delay:0.3}}
          className="mt-4 text-lg"
        >
          Start your healthy snack journey today with FoxNut
        </motion.p>
<Link to="/shop">
        <motion.button
          whileHover={{scale:1.1}}
          whileTap={{scale:0.9}}
          className="mt-8 px-8 py-3 bg-white text-green-700 font-semibold rounded-full"
        >
          Shop Now
        </motion.button>
        </Link>
      </section>

      <Footer/>
    </div>
  );
};

export default Home;
   