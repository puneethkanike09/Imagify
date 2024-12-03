import { useContext } from "react";
import { motion } from "framer-motion";
import { assets, plans } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const BuyCredit = () => {
    const { user } = useContext(AppContext);

    // Animation Variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger child cards for delayed appearance
                delayChildren: 0.3,
            },
        },
    };

    const buttonHoverVariants = {
        hover: {
            scale: 1.1,
            boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
            transition: { duration: 0.3 }
        },
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
                    className="bg-white/50 drop-shadow-md border rounded-lg py-12 px-8 text-gray-600 hover:scale-[1.03] transition-all duration-500"
                    key={index}
                    variants={cardVariants}
                    whileHover={{ scale: 1.05 }}
                >
                    <motion.img
                        width={40}
                        src={assets.logo_icon}
                        alt="Logo"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.7, ease: "backOut" }}
                    />
                    <motion.p
                        className="mt-3 mb-1 font-semibold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        {item.id}
                    </motion.p>
                    <motion.p
                        className="text-sm"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        {item.desc}
                    </motion.p>
                    <motion.p
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <span className="text-3xl font-medium">₹{item.price}</span> / {item.credits} credits
                    </motion.p>
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
