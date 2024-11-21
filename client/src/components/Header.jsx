import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Header = () => {
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

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
    };

    const buttonVariants = {
        hover: { scale: 1.1, transition: { duration: 0.3, ease: "easeInOut" } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
        }),
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center items-center text-center my-20"
        >


            <motion.h1
                variants={textVariants}
                className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
            >
                Turn text to <span className="text-blue-600">image</span>, in seconds
            </motion.h1>

            <motion.button
                whileHover="hover"
                variants={buttonVariants}
                onClick={onClickhandler}

                className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"
            >
                Generate Images
                <img className="h-6" src={assets.star_group} alt="" />
            </motion.button>

            <motion.div
                className="flex flex-wrap justify-center mt-10 gap-3"
                initial="hidden"
                animate="visible"
            >
                {Array(6)
                    .fill("")
                    .map((item, index) => (
                        <motion.img
                            custom={index}
                            variants={imageVariants}
                            className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
                            src={index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2}
                            alt=""
                            key={index}
                            width={70}
                        />
                    ))}
            </motion.div>

            <motion.p
                variants={textVariants}
                className="mt-2 text-neutral-600"
            >
                Generated images from imagify
            </motion.p>
        </motion.div>
    );
};

export default Header;
