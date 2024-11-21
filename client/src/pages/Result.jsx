import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const Result = () => {
    const [image, setImage] = useState(assets.sample_img_1);
    const [isImageLoaded, setIsImageLoaded] = useState(true);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");

    const onSubmithandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setLoading(false), 10000); // Simulate loading for 10 seconds
    };

    // Animation Variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    const loadingBarVariants = {
        hidden: { width: "0%" },
        visible: { width: "100%", transition: { duration: 10 } },
    };

    const inputButtonVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    const buttonGroupVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.3, staggerChildren: 0.2 } },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    };

    return (
        <form
            onSubmit={onSubmithandler}
            className="flex flex-col min-h-[90vh] justify-center items-center px-4 sm:px-6"
        >
            {/* Image and Loading Text */}
            <div className="flex flex-col items-center">
                <motion.div
                    className="relative"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <img
                        src={image}
                        className="max-w-full sm:max-w-sm rounded-md shadow-lg"
                        alt="Sample Preview"
                    />
                    <motion.span
                        className={`absolute left-0 bottom-0 bg-blue-500 h-1`}
                        variants={loadingBarVariants}
                        initial="hidden"
                        animate={loading ? "visible" : "hidden"}
                    />
                </motion.div>
                <p
                    className={`${!loading ? "hidden" : "mt-4 text-gray-500 text-sm sm:text-base"
                        }`}
                >
                    Loading...
                </p>
            </div>

            {/* Input and Button */}
            <AnimatePresence>
                {!isImageLoaded && (
                    <motion.div
                        className="flex flex-wrap w-full max-w-lg bg-neutral-900/80 text-white text-sm mt-8 rounded-full p-1"
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={inputButtonVariants}
                    >
                        {/* Input Field */}
                        <input
                            onChange={(e) => setInput(e.target.value)}
                            value={input}
                            className="flex-1 min-w-0 bg-transparent outline-none text-white pl-4 pr-2 py-2 rounded-full placeholder-gray-400"
                            type="text"
                            placeholder="Describe what you want"
                        />
                        {/* Generate Button */}
                        <button className="bg-blue-500 px-6 py-2 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition duration-300 flex-shrink-0">
                            Generate
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Buttons for Download and Regenerate */}
            <AnimatePresence>
                {isImageLoaded && (
                    <motion.div
                        className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full"
                        variants={buttonGroupVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.p
                            onClick={() => setIsImageLoaded(false)}
                            className="bg-transparent border border-black text-black px-8 py-3 rounded-full cursor-pointer"
                            variants={buttonVariants}
                        >
                            Generate another
                        </motion.p>
                        <motion.a
                            href={image}
                            download
                            className="bg-black px-10 py-3 rounded-full cursor-pointer"
                            variants={buttonVariants}
                        >
                            Download
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </form>
    );
};

export default Result;
