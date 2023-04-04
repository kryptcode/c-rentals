import { XMarkIcon } from '@heroicons/react/24/outline'
import { modalOpenState } from '../atoms/modalAtom'
import { useRecoilState } from 'recoil'
import { Link } from 'react-router-dom'

const Modal = () => {
    const [modal, setModal] = useRecoilState(modalOpenState)
  return (
    <div className='h-screen absolute top-0 w-full bg-white text-black z-10'>
        <div className='flex justify-end p-6 px-8 '>
            <XMarkIcon className='h-8 font-bold' onClick={() => setModal(false)} />
        </div>

        <div className='h-4/5 flex flex-col space-y-16 items-center text-2xl font-semibold uppercase'>
            <div>
                <Link to='/' onClick={() => setModal(false)}>
                    Home
                </Link>
            </div>
            <div>
                <Link to='/about' onClick={() => setModal(false)}>
                    About
                </Link>
            </div>
            <div>
                <Link to='/vehicle-models' onClick={() => setModal(false)}>
                    Vehicle Models
                </Link>
            </div>
            <div>
                <Link to='/team' onClick={() => setModal(false)}>
                    Our Team
                </Link>
            </div>
            <div>
                <Link to='/contact' onClick={() => setModal(false)}>
                    Contact
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Modal