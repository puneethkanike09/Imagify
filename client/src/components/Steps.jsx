import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { assets, stepsData } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Steps = () => {
    const { user, setShowLogin } = useContext(AppContext)
    const navigate = useNavigate();

    const onClickhandler = () => {
        if (user) {
            navigate('/result');
            setTimeout(() => {
                window.scrollTo(0, 0); // Ensure this executes after navigation
            }, 0);
        } else {
            setShowLogin(true);
        }
    };



    // Animation Variants
    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const stepsContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    };

    const stepVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
        hover: { scale: 1.03, transition: { duration: 0.0, ease: "easeInOut" } },
    };

    const buttonVariants = {
        hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center justify-center my-24"
        >
            {/* Heading */}
            <motion.h1
                variants={headingVariants}
                className="text-3xl sm:text-4xl font-semibold mb-5 sm:mb-10"
            >
                How to use
            </motion.h1>

            {/* Steps */}
            <motion.div
                variants={stepsContainerVariants}
                className="space-y-4 w-full max-w-3xl text-sm"
            >
                {stepsData.map((item, index) => (
                    <motion.div
                        variants={stepVariants}
                        whileHover="hover"
                        className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer transition-all duration-300 rounded-lg"
                        key={index}
                    >
                        <img src={item.icon} alt="" />
                        <div>
                            <h2 className="text-xl font-medium">{item.title}</h2>
                            <p className="text-gray-500">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Button */}
            <motion.button
                whileHover="hover"
                variants={buttonVariants}
                onClick={onClickhandler}
                className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
            >
                <img className="h-6" src={assets.star_group} alt="" />
                Get started
            </motion.button>
        </motion.div>
    );
};

export default Steps;
