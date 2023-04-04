import heroImg from '../../assets/home/main-car.png'
import { CheckCircleIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <div className='py-3 mb-10' >
        <div className='w-[95%] mx-auto flex justify-between items-end '>
            <div className='flex-[2.8] py-24 md:py-32 text-center md:text-left '>
                <h5 className='text-2xl font-bold mb-3'>
                Plan your trip now
                </h5>
                <h2 className='text-6xl font-bold mb-3'>
                Save big with our car rental
                </h2>
                <p className='text-gray-700 font-medium mb-6'>
                Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                </p>

                <div className='flex space-x-4 justify-center md:justify-start'>
                    <div className='flex items-center space-x-3 py-2.5 px-5 border-2 border-black hover:shadow-lg cursor-pointer hover:scale-105'>
                        <div>
                        Book Ride
                        </div>
                        <CheckCircleIcon className='h-5' />
                    </div>

                    <div className='flex items-center space-x-3 py-2.5 px-5 bg-black text-white border-2 border-black hover:shadow-lg cursor-pointer hover:scale-105'>
                        <div>
                        Learn More
                        </div>
                        <ChevronRightIcon className='h-5' />
                    </div>
                </div>
            </div>
            <div className='flex-[6] hero-bg hidden md:block  py-10' >
                <img src={heroImg} className='w-full object-cover' alt="" />
            </div>            
        </div>
    </div>
  )
}

export default Hero