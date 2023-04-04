import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { EnvelopeIcon, EnvelopeOpenIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import Modal from '../components/Modal'
import { useRecoilValue } from 'recoil'
import { modalOpenState } from '../atoms/modalAtom'

const Contact = () => {

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
                Contact
            </h2>
            <div className="mt-3 font-semibold">
                <Link className="hover:text-violet-950" to={'/'}>
                    Home
                </Link>
                {' '} / Contact
            </div>
        </div>

        <div className="w-[90%] mx-auto my-16 flex flex-col md:flex-row md:space-x-16 space-y-8 md:space-y-0">
            <div className='flex-1 text-center md:text-left'>
                <h2 className='text-5xl font-extrabold mb-4 '>Need additional <br /> information? </h2>
                <p className='text-gray-600 font-medium mb-8'>
                A multifaceted professional skilled in multiple <br /> fields of research, development as well as <br /> a learning specialist. Over 15 years of experience.
                </p>
                <div className='flex space-x-3 items-center justify-center md:justify-start font-semibold mb-5'>
                    <PhoneIcon className='h-5' />
                    <div>
                        (123) 456-7809
                    </div>
                </div>
                <div className='flex space-x-3 items-center justify-center md:justify-start font-semibold mb-5'>
                    <EnvelopeIcon className='h-5' />
                    <div>
                        crentals@gmail.com
                    </div>
                </div>
                <div className='flex space-x-3 items-center justify-center  md:justify-start font-semibold mb-5'>
                    <MapPinIcon className='h-5' />
                    <div>
                        Vespucci Beach, Los Santos
                    </div>
                </div>
            </div>

            <div className='flex-1 p-8 shadow-lg'>
                <div className='mb-5'>
                    <label className='block mb-2 font-semibold text-lg' htmlFor="">Full Name *</label>
                    <input type="text" className='outline-none p-2 w-full rounded-lg bg-gray-200 ' placeholder='e.g "Son Goku"'/>
                </div>
                <div className='mb-5'>
                    <label className='block mb-2 font-semibold text-lg' htmlFor="">Email *</label>
                    <input type="text" className='outline-none p-2 w-full rounded-lg bg-gray-200 ' placeholder='youremail@example.com'/>
                </div>
                <div className='mb-5'>
                    <label className='block mb-2 font-semibold text-lg' htmlFor="">Tell us about it *</label>
                    <textarea name="" id="" className='h-44 w-full outline-none p-2 rounded-lg bg-gray-200' placeholder='Write here...'></textarea>
                </div>
                <div className='flex w-full justify-center items-center space-x-6 text-xl font-semibold cursor-pointer bg-black text-white rounded-md py-2 mt-4'>
                    <EnvelopeOpenIcon className='h-6' />
                    <div>Send Message</div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
  )
}

export default Contact