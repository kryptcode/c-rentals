import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid'

const Footer = () => {
  return (
    <div className='py-10 text-center md:text-left border-t-2'>
        <div className='w-[95%] mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-24'>
            <div className='flex-1'>
                <h2 className='text-2xl font-medium mb-3'>
                    <span className='font-bold uppercase '>Car</span> Rental
                </h2>
                <p className='text-gray-600 font-medium mb-4 '>
                We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
                </p>
                <div className='flex space-x-3 justify-center md:justify-start items-center'>
                    <PhoneIcon className='h-6' />
                    <div className='font-semibold'>
                    (234) 444+444+4444
                    </div>
                </div>
                <div className='flex space-x-3 justify-center md:justify-start items-center mt-3'>
                    <EnvelopeIcon className='h-6' />
                    <div className='font-semibold'>
                        rentoidlong@gmail.com
                    </div>
                </div>
            </div>

            <div className='flex-1 space-y-4 font-medium'>
                <h4 className='text-2xl font-bold'>COMPANY</h4>
                <p className='cursor-pointer hover:underline'>Abuja</p>
                <p className='cursor-pointer hover:underline'>Careers</p>
                <p className='cursor-pointer hover:underline'>Mobile</p>
                <p className='cursor-pointer hover:underline'>Blog</p>
                <p className='cursor-pointer hover:underline'>How we work</p>
            </div>

            <div className='flex-1 space-y-4 font-medium uppercase'>
                <h4 className='text-2xl font-bold'>Working Hours</h4>
                <p>Mon - Fri: 9:00AM - 9:00PM</p>
                <p>Sat: 9:00AM - 7:00PM</p>
                <p>Sun: 12:00AM - 7:00PM</p>
            </div>

            <div className='flex-1 space-y-4 font-medium'>
                <h4 className='text-2xl font-bold'>
                    SUBSCRIPTION
                </h4>
                <p>Subscribe your Email address for latest news & updates.</p>
                <input type="email" className='p-2 border rounded-lg' placeholder='Enter Email Address' />
                <button className='bg-black text-white w-full py-1.5'>
                    Submit
                </button>
            </div>
        </div>
    </div>
  )
}

export default Footer