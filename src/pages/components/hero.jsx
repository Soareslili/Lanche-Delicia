import { useState } from "react";
import hamb1 from "../../assets/hamb-1.png";
import hamb2 from "../../assets/hamb-2.png";
import hamb4 from "../../assets/hamb-4.png";
import refri1 from '../../assets/refri-1.png'
import laranja from '../../assets/laranja.webp'
import agua from '../../assets/agua.webp'
import brownie from '../../assets/brownie.webp'
import pudim from '../../assets/pudim-de-leite.jpg'
import torta from '../../assets/torta-de-limao-e-merengue.avif'



const Hero = ({ addToCart }) => {
    const [activeCategory, setActiveCategory] = useState("lanches");
 

    const products = [
        {
            id: 1,
            name: "X-Burger Especial",
            description: "Hambúrguer artesanal com queijo, alface, tomate, cebola e molho especial",
            price: 25.90,
            image: hamb1,
            category: "lanches",
        },
        {
            id: 2,
            name: "X-Bacon Supreme",
            description: "Hambúrguer artesanal com bacon crocante e cheddar",
            price: 27.90,
            image: hamb2,
            category: "lanches",
        },
        {
            id: 3,
            name: "X-Frango Grelhado",
            description: "Peito de frango grelhado com salada e molho especial",
            price: 24.50,
            image: hamb4,
            category: "lanches",
        },
        {
            id: 4,
            name: "Refrigerante Lata",
            description: "Coca-Cola, Pepsi, Guaraná ou Fanta - 350ml",
            price: 6.00,
            image: refri1,
            category: "bebidas"
        },
        {
            id: 5,
            name: "Suco Natural",
            description: "Laranja, limão, maracujá ou acerola - 500ml",
            price: 8.90,
            image: laranja,
            category: "bebidas"
        },

        {
            id: 6,
            name: "Agua Natural",
            description: "Água mineral sem gás ou com gás - 500ml",
            price: 3.90,
            image: agua,
            category: "bebidas"
        },
        {
            id: 7,
            name: "Brownie com Sorvete",
            description: "Brownie de chocolate quente com sorvete de baunilha",
            price: 14.90,
            image: brownie,
            category: "sobremesas"
        },
        {
            id: 8,
            name: "Pudim de Leite",
            description: "Pudim caseiro cremoso com calda de caramelo",
            price: 12.90,
            image: pudim,
            category: "sobremesas"
        },
        {
            id: 9,
            name: "Torta de Limão",
            description: "Torta de limão cremoso com raspa de limão",
            price: 13.00,
            image: torta,
            category: "sobremesas"
        }
    ];

    const filteredProducts = products.filter((product) => product.category === activeCategory);

    


    return (
        <section
            className="w-full min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-orange-50 py-10 overflow-x-hidden"
        >
            <div className="w-full max-w-7xl px-4 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-center">
                    Nossos <span className="text-orange-500">Cardápio</span>
                </h2>


                <div className="flex flex-wrap justify-center gap-4 mb-10">
                    <button
                        onClick={() => setActiveCategory("lanches")}
                        className={`px-6 py-2 rounded-xl shadow font-bold text-lg sm:text-xl transition ${activeCategory === "lanches"
                            ? "bg-orange-400 text-white"
                            : "bg-white text-gray-700 hover:bg-orange-100"
                            }`}
                    >
                        Lanches
                    </button>
                    <button
                        onClick={() => setActiveCategory("bebidas")}
                        className={`px-6 py-2 rounded-xl shadow font-bold text-lg sm:text-xl transition ${activeCategory === "bebidas"
                            ? "bg-orange-400 text-white"
                            : "bg-white text-gray-700 hover:bg-orange-100"
                            }`}
                    >
                        Bebidas
                    </button>
                    <button
                        onClick={() => setActiveCategory("sobremesas")}
                        className={`px-6 py-2 rounded-xl shadow font-bold text-lg sm:text-xl transition ${activeCategory === "sobremesas"
                            ? "bg-orange-400 text-white"
                            : "bg-white text-gray-700 hover:bg-orange-100"
                            }`}
                    >
                        Sobremesas
                    </button>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs mx-auto transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                className="w-full h-40 object-cover transform transition-transform duration-200 hover:scale-105"
                                src={product.image}
                                alt={product.name}
                            />
                            <div className="p-4">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">{product.name}</h3>
                                <p className="text-[#9D9CA8] text-base md:text-lg mb-2">{product.description}</p>
                                <div className="flex flex-row items-center justify-between mt-4">
                                    <p className="text-orange-500 font-bold text-lg">
                                        R$ {product.price.toFixed(2)}
                                    </p>
                                    <button
                                        className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 transition"
                                        onClick={() => addToCart(product)}
                                    >
                                        Adicionar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;