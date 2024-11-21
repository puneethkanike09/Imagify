import { useContext, useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const Login = () => {

    const [state, setState] = useState("Login")
    const { showLogin, setShowLogin } = useContext(AppContext)

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        }
    }, [])

    return (
        <div className="absolute left-0 top-0 bottom-0 right-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <form className="relative bg-white p-6 sm:p-10 rounded-xl text-slate-500 w-full max-w-md mx-4">
                <h1 className="text-center text-2xl text-neutral-700 font-medium mb-6">
                    {state}
                </h1>
                {state !== "Login" && <div className="border px-4 py-3 flex items-center gap-3 rounded-full">
                    <FaUser className="text-slate-400 text-lg" />
                    <input
                        className="outline-none text-sm flex-1"
                        type="text"
                        placeholder="Full name"
                        required
                    />
                </div>}
                <div className="border px-4 py-3 flex items-center gap-3 rounded-full mt-4">
                    <FaEnvelope className="text-slate-400 text-lg" />
                    <input
                        className="outline-none text-sm flex-1"
                        type="email"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="border px-4 py-3 flex items-center gap-3 rounded-full mt-4">
                    <FaLock className="text-slate-400 text-lg" />
                    <input
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
                {state === "Login" ? <p className="mt-5 text-center text-sm">
                    Do not have an account?{" "}
                    <span onClick={() => setState("SignUp")} className="text-blue-600 cursor-pointer">
                        Sign up
                    </span>
                </p>
                    :
                    <p className="mt-5 text-center text-sm">
                        have an account?{" "}
                        <span onClick={() => setState("Login")} className="text-blue-600 cursor-pointer">
                            Login
                        </span>
                    </p>}

                <FaTimes
                    onClick={() => setShowLogin(false)}
                    className="absolute top-5 right-5 cursor-pointer text-xl text-slate-400 hover:text-slate-700"
                />
            </form>
        </div>
    );
};

export default Login;
