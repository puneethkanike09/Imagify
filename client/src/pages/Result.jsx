import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import { motion } from "framer-motion";

const Result = () => {
    const [image, setImage] = useState(assets.sample_img_1);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState("");

    const { generateImage } = useContext(AppContext);

    const onSubmithandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (input) {
            const image = await generateImage(input);
            if (image) {
                setIsImageLoaded(true);
                setImage(image);
            }
        }
        setLoading(false);
    };

    return (
        <form onSubmit={onSubmithandler} className="flex flex-col min-h-[90vh] justify-center items-center px-4 sm:px-6">
            {/* Image and Loading Text */}
            <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    className="relative"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <motion.img
                        src={image}
                        className="max-w-full sm:max-w-sm rounded-md shadow-lg"
                        alt="Sample Preview"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 1 }}
                    />
                    <motion.span
                        className={`absolute left-0 bottom-0 bg-blue-500 h-1 ${loading ? "w-full" : "w-0"}`}
                        animate={{ width: loading ? "100%" : "0%" }}
                        transition={{ duration: 10 }}
                    ></motion.span>
                </motion.div>
                <p className={!loading ? "hidden" : "mt-4 text-gray-500 text-sm sm:text-base"}>Loading...</p>
            </motion.div>

            {/* Input and Button */}
            {!isImageLoaded && (
                <motion.div
                    className="flex flex-wrap w-full max-w-lg bg-neutral-900/80 text-white text-sm mt-8 rounded-full p-1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <input
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        className="flex-1 min-w-0 bg-transparent outline-none text-white pl-4 pr-2 py-2 rounded-full placeholder-gray-400"
                        type="text"
                        placeholder="Describe what you want"
                    />
                    <motion.button
                        className="bg-blue-500 px-6 py-2 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition duration-300 flex-shrink-0"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Generate
                    </motion.button>
                </motion.div>
            )}

            {/* Result Buttons */}
            {isImageLoaded && (
                <motion.div
                    className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.p
                        onClick={() => setIsImageLoaded(false)}
                        className="bg-transparent border border-black text-black px-8 py-3 rounded-full cursor-pointer hover:bg-gray-200 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Generate another
                    </motion.p>
                    <motion.a
                        href={image}
                        download
                        className="bg-black px-10 py-3 rounded-full cursor-pointer hover:bg-gray-800 transition"
                        whileHover={{ scale: 1.1 }}
                    >
                        Download
                    </motion.a>
                </motion.div>
            )}
        </form>
    );
};

export default Result;
