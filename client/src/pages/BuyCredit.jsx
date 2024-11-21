import { useContext } from "react";
import { motion } from "framer-motion";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const BuyCredit = () => {
    const { user } = useContext(AppContext);

    // Animation Variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger appearance of child cards
            },
        },
    };

    const buttonHoverVariants = {
        hover: { scale: 1.1 },
    };

    return (
        <motion.div
            className="flex flex-wrap justify-center items-center gap-6 text-left pt-10 sm:pt-24"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {plans.map((item, index) => (
                <motion.div
                    className="bg-white/50 drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500"
                    key={index}
                    variants={cardVariants}
                >
                    <img width={40} src={assets.logo_icon} alt="" />
                    <p className="mt-3 mb-1 font-semibold">{item.id}</p>
                    <p className="text-sm">{item.desc}</p>
                    <p className="mt-6">
                        <span className="text-3xl font-medium">₹{item.price}</span> / {item.credits} credits
                    </p>
                    <motion.button
                        className="w-full text-white bg-black/80 mt-8 text-sm rounded-md py-2.5 min-w-52"
                        variants={buttonHoverVariants}
                        whileHover="hover"
                    >
                        {user ? "Buy Now" : "Login to Buy"}
                    </motion.button>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default BuyCredit;
