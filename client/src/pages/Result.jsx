import { useState } from "react";
import { assets } from "../assets/assets";

const Result = () => {
    const [image, setImage] = useState(assets.sample_img_1)
    const [isImageLoaded, setIsImageLoaded] = useState(true)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState("")

    const onSubmithandler = async (e) => {
        e.preventDefault()

    }

    return (
        <form onSubmit={onSubmithandler} className="flex flex-col min-h-[90vh] justify-center items-center px-4 sm:px-6">
            {/* Image and Loading Text */}
            <div className="flex flex-col items-center">
                <div className="relative">
                    <img
                        src={image}
                        className="max-w-full sm:max-w-sm rounded-md shadow-lg"
                        alt="Sample Preview"
                    />
                    <span
                        className={` absolute left-0 bottom-0 bg-blue-500 h-1 ${loading ? " w-full transition-all duration-[10s]" : "w-0"}`}>
                    </span>
                </div>
                <p className={!loading ? "hidden" : "mt-4 text-gray-500 text-sm sm:text-base"}>Loading...</p>
            </div>

            {/* Input and Button */}
            {
                !isImageLoaded &&
                <div className="flex flex-wrap w-full max-w-lg bg-neutral-900/80 text-white text-sm mt-8 rounded-full p-1">
                    {/* Input Field */}
                    <input
                        onChange={(e) => setInput(e.target.value)} value={input}
                        className="flex-1 min-w-0 bg-transparent outline-none text-white pl-4 pr-2 py-2 rounded-full placeholder-gray-400"
                        type="text"
                        placeholder="Describe what you want"
                    />
                    {/* Generate Button */}
                    <button
                        className="bg-blue-500 px-6 py-2 text-white text-sm font-medium rounded-full hover:bg-blue-600 transition duration-300 flex-shrink-0"
                    >
                        Generate
                    </button>
                </div>
            }
            {
                isImageLoaded &&
                <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
                    <p onClick={() => { setIsImageLoaded(false) }} className="bg-transparent border border-black text-black px-8 py-3 rounded-full cursor-pointer">Generate another</p>
                    <a href={image} download className="bg-black px-10 py-3 rounded-full cursor-pointer">Download</a>
                </div>
            }

        </form >
    );
};

export default Result;