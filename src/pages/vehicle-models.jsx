import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import data from '../constants/data.json'
import { StarIcon, TruckIcon } from "@heroicons/react/24/solid"
import Footer from "../components/Footer"
import Modal from "../components/Modal"
import { useRecoilValue } from "recoil"
import { modalOpenState } from "../atoms/modalAtom"

const VehicleModels = () => {

    const modal = useRecoilValue(modalOpenState)

  if(modal) {
    return (
      <Modal />
    )
  }

  return (
    <div>
        <Navbar />

        <div className="w-[90%] mx-auto mt-8">
            <h2 className="text-3xl font-bold">
                Vehicle Models
            </h2>
            <div className="mt-3 font-semibold">
                <Link className="hover:text-violet-950" to={'/'}>
                    Home
                </Link>
                {' '} / Vehicle Models
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  w-[80%] mx-auto my-16  ">
            {
                data.map(car => (
                    <div key={car.id} className="border shadow-lg">
                        <div>
                            <img src={car.img2} alt="" className="h-64 w-full object-cover" />
                        </div>

                        <div className="p-5">
                            <div className="flex justify-between mb-4">
                                <div>
                                    <h1 className="text-2xl font-extrabold mb-1.5">
                                        {car.name2}
                                    </h1>
                                    <div className="flex space-x-1">
                                        <StarIcon className="h-4 text-[#ffc933] " />
                                        <StarIcon className="h-4 text-[#ffc933] " />
                                        <StarIcon className="h-4 text-[#ffc933] " />
                                        <StarIcon className="h-4 text-[#ffc933] " />
                                        <StarIcon className="h-4 text-[#ffc933] " />
                                    </div>
                                </div>

                                <div>
                                    <div className="text-xl font-bold">
                                        N {car.price}
                                    </div>
                                    <div className="text-center font-medium">
                                        per day
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between mb-3">
                                <div className="flex space-x-2 items-center">
                                    <TruckIcon className="h-6" />
                                    <div className="text-gray-500 font-semibold text-lg">
                                        {car.model}
                                    </div>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <div className="text-gray-500 font-semibold text-lg">
                                        {car.doors}
                                    </div>
                                    <TruckIcon className="h-6" />
                                </div>
                            </div>
                            
                            <div className="flex justify-between mb-5">
                                <div className="flex space-x-2 items-center">
                                    <TruckIcon className="h-6" />
                                    <div className="text-gray-500 font-semibold text-lg">
                                        {car.Transmission}
                                    </div>
                                </div>
                                <div className="flex space-x-2 items-center">
                                    <div className="text-gray-500 font-semibold text-lg">
                                        {car.Fuel}
                                    </div>
                                    <TruckIcon className="h-6" />
                                </div>
                            </div>

                            <div className="h-[1px] bg-gray-300 mb-5" />

                            <button className="py-4 rounded-lg w-full text-lg font-semibold bg-black text-white hover:opacity-80 transition-all duration-300 ease-in-out ">
                                Book Ride
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>

        <Footer />
    </div>
  )
}

export default VehicleModels