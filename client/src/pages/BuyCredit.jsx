import { useContext } from "react"
import { assets, plans } from "../assets/assets"
import { AppContext } from "../context/AppContext"

const BuyCredit = () => {
    const { user } = useContext(AppContext)
    return (
        <div className="flex flex-wrap justify-center items-center gap-6 text-left pt-10 sm:pt-24 ">

            {
                plans.map((item, index) => (
                    <div className="bg-white/50 drop-shadow-sm border rounded-lg py-12 px-8
                    text-gray-600 hover:scale-105 transition-all duration-500" key={index}>
                        <img width={40} src={assets.logo_icon} alt="" />
                        <p className="mt-3 mb-1 font-semibold">{item.id}</p>
                        <p className="text-sm">{item.desc}</p>
                        <p className="mt-6">
                            <span className="text-3xl font-medium">₹{item.price}</span> / {item.credits} credits</p>
                        <button className="w-full text-white bg-black/80 mt-8 text-sm rounded-md py-2.5 min-w-52">
                            {user ? "Buy Now" : "Login to Buy"}
                        </button>
                    </div>
                ))
            }

        </div>
    )
}

export default BuyCredit
