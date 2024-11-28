import { useContext, useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
    const [state, setState] = useState("Login");
    const { showLogin, setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            if (state === "Login") {
                const { data } = await axios.post(backendUrl + "/api/user/login", {
                    email,
                    password,
                });

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem("token", data.token);
                    setShowLogin(false);
                } else {
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(backendUrl + "/api/user/register", {
                    name,
                    email,
                    password,
                });

                if (data.success) {
                    setToken(data.token);
                    setUser(data.user);
                    localStorage.setItem("token", data.token);
                    setShowLogin(false);
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    // Prevent body scroll when the modal is open
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    // Animation Variants
    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3 } },
        exit: { opacity: 0, transition: { duration: 0.3 } },
    };

    const formVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeIn" } },
    };

    return (
        <AnimatePresence>
            {showLogin && (
                <motion.div
                    variants={backdropVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="fixed top-0 left-0 w-full h-full z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center"
                >
                    <motion.form
                        onSubmit={onSubmitHandler}
                        variants={formVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="relative bg-white p-6 sm:p-10 rounded-xl text-slate-500 w-full max-w-md mx-4"
                    >
                        <h1 className="text-center text-2xl text-neutral-700 font-medium mb-6">
                            {state}
                        </h1>
                        {state !== "Login" && (
                            <div className="border px-4 py-3 flex items-center gap-3 rounded-full">
                                <FaUser className="text-slate-400 text-lg" />
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    className="outline-none text-sm flex-1"
                                    type="text"
                                    placeholder="Full name"
                                    required
                                />
                            </div>
                        )}
                        <div className="border px-4 py-3 flex items-center gap-3 rounded-full mt-4">
                            <FaEnvelope className="text-slate-400 text-lg" />
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                className="outline-none text-sm flex-1"
                                type="email"
                                placeholder="Email"
                                required
                            />
                        </div>
                        <div className="border px-4 py-3 flex items-center gap-3 rounded-full mt-4">
                            <FaLock className="text-slate-400 text-lg" />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                                className="outline-none text-sm flex-1"
                                type="password"
                                placeholder="Password"
                                required
                            />
                        </div>
                        <p className="text-sm text-blue-600 my-4 text-right cursor-pointer">
                            Forgot password?
                        </p>
                        <button className="bg-blue-600 text-white py-3 rounded-full w-full font-medium mt-4">
                            {state === "Login" ? "Login" : "Create Account"}
                        </button>
                        {state === "Login" ? (
                            <p className="mt-5 text-center text-sm">
                                Do not have an account?{" "}
                                <span
                                    onClick={() => setState("SignUp")}
                                    className="text-blue-600 cursor-pointer"
                                >
                                    Sign up
                                </span>
                            </p>
                        ) : (
                            <p className="mt-5 text-center text-sm">
                                Have an account?{" "}
                                <span
                                    onClick={() => setState("Login")}
                                    className="text-blue-600 cursor-pointer"
                                >
                                    Login
                                </span>
                            </p>
                        )}

                        <FaTimes
                            onClick={() => setShowLogin(false)}
                            className="absolute top-5 right-5 cursor-pointer text-xl text-slate-400 hover:text-slate-700"
                        />
                    </motion.form>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Login;
