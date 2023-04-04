import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import staff from '../constants/staff.json'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import { useRecoilValue } from 'recoil'
import { modalOpenState } from '../atoms/modalAtom'

const Team = () => {

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
                Our Team
            </h2>
            <div className="mt-3 font-semibold">
                <Link className="hover:text-violet-950" to={'/'}>
                    Home
                </Link>
                {' '} / Our Team
            </div>
        </div>

        <div className='w-[80%] mx-auto my-16 grid grid-cols-1 md:grid-cols-3 gap-10'>
            {
                staff.map(psn => (
                    <div key={psn.id} className='shadow-lg text-center'>
                        <img src={psn.img} alt="" />

                        <div className='p-4'>
                            <h4 className='text-xl font-semibold'>
                                {psn.name}
                            </h4>
                            <p className='font-medium text-gray-600 mt-2'>
                                {psn.prof}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>

        <Footer />
    </div>
  )
}

export default Team