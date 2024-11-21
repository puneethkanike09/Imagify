import { useContext } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
    const { user, setShowLogin } = useContext(AppContext);

    const navigate = useNavigate();

    // Animation Variants
    const navbarVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
    };

    const dropdownVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className="flex items-center justify-between py-4"
        >
            {/* Logo */}
            <Link to={"/"}>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    className="w-28 sm:w-32 lg:w-40"
                    src={assets.logo}
                    alt=""
                />
            </Link>

            <div>
                {user ? (
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Credits Button */}
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            onClick={() => navigate('/buy')}
                            className="flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full transition-all duration-700"
                        >
                            <img className="w-5" src={assets.credit_star} alt="" />
                            <p className="text-xs sm:text-sm font-medium text-gray-600">
                                Credits left : 50
                            </p>
                        </motion.button>
                        {/* Greeting */}
                        <motion.p
                            className="text-gray-600 max-sm:hidden pl-4"
                            whileHover={{ scale: 1.05 }}
                        >
                            Hi, Puneeth
                        </motion.p>
                        {/* Profile Dropdown */}
                        <div className="relative group">
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                className="w-10 drop-shadow"
                                src={assets.profile_icon}
                                alt=""
                            />
                            <motion.div
                                initial="hidden"
                                animate="hidden"
                                whileHover="visible"
                                variants={dropdownVariants}
                                className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12"
                            >
                                <ul className="list-none m-0 p-2 bg-white rounded-md border text-sm">
                                    <li
                                        className="py-1 px-2 cursor-pointer pr-10 hover:bg-gray-100"
                                        onClick={() => console.log("Logout Clicked")}
                                    >
                                        Logout
                                    </li>
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 sm:gap-5">
                        {/* Pricing Link */}
                        <motion.p
                            whileHover={{ scale: 1.05 }}
                            onClick={() => navigate('/buy')}
                            className="cursor-pointer"
                        >
                            Pricing
                        </motion.p>
                        {/* Login Button */}
                        <motion.button
                            variants={buttonVariants}
                            whileHover="hover"
                            onClick={() => setShowLogin(true)}
                            className="bg-zinc-800 text-white px-7 py-2 sm:px-10 text-sm rounded-full"
                        >
                            Login
                        </motion.button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default Navbar;
