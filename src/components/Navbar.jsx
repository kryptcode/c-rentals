import { Bars4Icon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom";
import { useRecoilState } from 'recoil';
import { modalOpenState } from '../atoms/modalAtom';

const Navbar = () => {
    const [modal, setModal] = useRecoilState(modalOpenState)
  return (
    <div className='py-5'>
        <div className='w-[90%] mx-auto flex justify-between items-center '>
            <div className='text-3xl font-bold text-violet-950'>
                CR
            </div>

            <div className='md:flex space-x-6 font-semibold hidden'>
                <Link to='/'>
                    <div className='hover:text-violet-950 cursor-pointer px-2'>
                        Home
                    </div>                
                </Link>
                <Link to='/about'>
                    <div className='hover:text-violet-950 cursor-pointer px-2'>
                        About
                    </div>                
                </Link>
                <Link to='/vehicle-models'>
                    <div className='hover:text-violet-950 cursor-pointer px-2'>
                        Vehicle Models
                    </div>                
                </Link>
                <Link to='/team'>
                    <div className='hover:text-violet-950 cursor-pointer px-2'>
                        Our Team
                    </div>                
                </Link>
                <Link to='/contact'>                
                    <div className='hover:text-violet-950 cursor-pointer px-2'>
                        Contact
                    </div>
                </Link>
            </div>

            <div className='hidden md:flex space-x-3 font-semibold transition-all duration-300 ease-in-out'>
                <button className='py-2 px-4 hover:text-violet-950 border-[1.5px] border-white '>
                    Sign In
                </button>

                <button className='py-2 px-4 bg-black text-white shadow-lg border-[1.5px] border-black hover:bg-white hover:text-black '>
                    Register
                </button>
            </div>

            <div className='md:hidden' onClick={() => setModal(true)}>
              <Bars4Icon className='w-7' />  
            </div>
        </div>
    </div>
  )
}

export default Navbar