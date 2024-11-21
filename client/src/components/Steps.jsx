import { useNavigate } from "react-router-dom"
import { assets, stepsData } from "../assets/assets"

const Steps = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col items-center justify-center my-24">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-5 sm:mb-10">
                How to use
            </h1>
            <div className="space-y-4 w-full max-w-3xl text-sm">
                {
                    stepsData.map((item, index) => (
                        <div className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg" key={index}>
                            <img src={item.icon} alt="" />
                            <div>
                                <h2 className="text-xl font-medium">{item.title}</h2>
                                <p className="text-gray500">{item.description}</p>
                            </div>
                        </div>
                    ))
                }


            </div>
            <button onClick={() => { navigate('/result'); scrollTo(0, 0) }} className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full"><img className="h-6" src={assets.star_group} alt="" />Get started </button>
        </div>
    )
}

export default Steps
