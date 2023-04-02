import { Bars4Icon } from '@heroicons/react/24/outline'

const Navbar = () => {
  return (
    <div className='py-5'>
        <div className='w-[90%] mx-auto flex justify-between items-center '>
            <div className='text-3xl font-bold text-violet-950'>
                CR
            </div>

            <div className='md:flex space-x-6 font-semibold hidden'>
                <div className='hover:text-violet-950 cursor-pointer px-2'>
                    Home
                </div>
                <div className='hover:text-violet-950 cursor-pointer px-2'>
                    About
                </div>
                <div className='hover:text-violet-950 cursor-pointer px-2'>
                    Vehicle Models
                </div>
                <div className='hover:text-violet-950 cursor-pointer px-2'>
                    Our Team
                </div>
                <div className='hover:text-violet-950 cursor-pointer px-2'>
                    Contact
                </div>
            </div>

            <div className='hidden md:flex space-x-3 font-semibold transition-all duration-300 ease-in-out'>
                <button className='py-2 px-4 hover:text-violet-950 border-[1.5px] border-white '>
                    Sign In
                </button>

                <button className='py-2 px-4 bg-black text-white shadow-lg border-[1.5px] border-black hover:bg-white hover:text-black '>
                    Register
                </button>
            </div>

            <div className='md:hidden'>
              <Bars4Icon className='w-7' />  
            </div>
        </div>
    </div>
  )
}

export default Navbar