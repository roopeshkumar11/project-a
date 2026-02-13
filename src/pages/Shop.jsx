import ProductCard from "../components/ProductCard";
import imgch from "../assets/imgch.png";
import imgmashala from "../assets/imgmashala.png";
import imgonion from "../assets/imgonion.png"
const Shop = () => {

  const products = [
    {
      id: 1,
      name: "Masala Makhana",
      price: 249,
      image: imgmashala   // ✅ correct
    },
    {
      id: 2,
      name: "Cream & Onion Makhana",
      price: 299,
      image: imgonion      // ✅ correct
    },
    {
      id: 3,
      name: "Chocolate Makhana",
      price: 349,
      image: imgch 
    }
  ];

  return (
    <div className="min-h-screen pt-28 px-6 bg-green-50">

      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Our Products
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            id={p.id}
            name={p.name}
            price={p.price}
            image={p.image}
          />
        ))}
      </div>

    </div>
  );
};

export default Shop;
