import { ChevronRightIcon, CurrencyDollarIcon, MapPinIcon, CalendarDaysIcon } from '@heroicons/react/24/solid'

const Book = () => {
  return (
    <div className='py-5' data-aos="flip-down">
        <div className='w-[95%] mx-auto shadow-2xl bg-gray-400/10 rounded-lg p-5 '>
            <h4 className='text-2xl font-bold mb-6'>
                Book a car
            </h4>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 items-end'>
                <div>
                    <div className='flex space-x-4 items-center font-semibold mb-2'>
                        <CurrencyDollarIcon className='h-5' />
                        <div>
                            Select your Car Type *
                        </div>
                    </div>
                    <select className='w-full py-3 pl-3 rounded-md ' >
                        <option value="">--Select your car type --</option>
                        <option value="">Golf</option>
                        <option value="">Lacs</option>
                        <option value="">Dann</option>
                    </select>
                </div>
                
                <div>
                    <div className='flex space-x-4 items-center font-semibold mb-2'>
                        <MapPinIcon className='h-5' />
                        <div>
                            Pick-up *
                        </div>
                    </div>
                    <select className='w-full py-3 pl-3 rounded-md ' >
                        <option value="">--Select pick up location   --</option>
                        <option value="">Golf</option>
                        <option value="">Lacs</option>
                        <option value="">Dann</option>
                    </select>
                </div>

                <div>
                    <div className='flex space-x-4 items-center font-semibold mb-2'>
                        <MapPinIcon className='h-5' />
                        <div>
                            Drop-off *
                        </div>
                    </div>
                    <select className='w-full py-3 pl-3 rounded-md ' >
                        <option value="">--Select drop-off location --</option>
                        <option value="">Golf</option>
                        <option value="">Lacs</option>
                        <option value="">Dann</option>
                    </select>
                </div>

                <div>
                    <div className='flex space-x-4 items-center font-semibold mb-2'>
                        <CalendarDaysIcon className='h-5' />
                        <div>
                            Pick-Up *
                        </div>
                    </div>
                    <input type="date" className='w-full py-2 pl-2 bg-gray-200 rounded-md' />
                </div>
                
                <div>
                    <div className='flex space-x-4 items-center font-semibold mb-2'>
                        <CalendarDaysIcon className='h-5' />
                        <div>
                            Drop-Off *
                        </div>
                    </div>
                    <input type="date" className='w-full py-2 pl-2 bg-gray-200 rounded-md' />
                </div>

                <input type="button" value="Search" className='bg-black text-white py-2 font-semibold cursor-pointer transition-all duration-300 ease-in-out ' />
            </div>
        </div>
    </div>
  )
}

export default Book