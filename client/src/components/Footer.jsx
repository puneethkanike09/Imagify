import { assets } from "../assets/assets";
import { FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="flex items-center justify-between gap-4 py-3 mt-20 ">
            {/* Logo */}
            <img className="w-28 sm:w-32 lg:w-40" src={assets.logo} alt="Footer Logo" />

            {/* Copyright Text */}
            <p className="flex-1 border-l border-gray-700 pl-4 text-sm text-gray-500 max-sm:hidden">
                Copyright © Puneeth.k | All rights reserved.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
                {/* Instagram */}
                <a
                    href="https://www.instagram.com/k_puneeth_gowda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-600 transition duration-300"
                >
                    <FaInstagram size={28} />
                </a>

                {/* GitHub */}
                <a
                    href="https://github.com/puneethkanike09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-black transition duration-300"
                >
                    <FaGithub size={28} />
                </a>

                {/* WhatsApp */}
                <a
                    href="https://wa.me/917975187240"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-green-600 transition duration-300"
                >
                    <FaWhatsapp size={28} />
                </a>
            </div>
        </div>
    );
};

export default Footer;
