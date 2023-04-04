import ct from '../../assets/about/ct.png'
import ro from '../../assets/about/ro.png'
import rs from '../../assets/about/rs.png'

const Ac = () => {
  return (
    <div className='my-16 text-center md:text-left'>
        <div className="w-[85%] md:w-[75%] mx-auto mt-8 flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10">
            <img src="https://car-rental-ten.vercel.app/static/media/about-main.ed0137841dc67d61ec95.jpg" alt="" className='flex-1' />

            <div className='flex-1'>
                <h5 className='text-2xl font-semibold mb-3'>About Company</h5>
                <h2 className='font-bold text-4xl md:text-5xl mb-6'>You start the engine and your adventure begins</h2>

                <p className='text-gray-600 font-medium mb-8'>
                Certain but she but shyness why cottage. Guy the put instrument sir entreaties affronting. Pretended exquisite see cordially the you. Weeks quiet do vexed or whose. Motionless if no to affronting imprudence no precaution. My indulged as disposal strongly attended.
                </p>

                <div className='flex flex-col md:flex-row space-y-5 md:space-y-0 items-center justify-between'>
                    <div className='space-y-2'>
                        <img src={ct} alt="" />
                        <div className='flex space-x-2'>
                            <div className='text-5xl font-bold'>
                                20
                            </div>
                            <div className='text-gray-600 font-medium'>
                            Car <br /> Types
                            </div>
                        </div>
                    </div>
                    
                    <div className='space-y-2'>
                        <img src={ro} alt="" />
                        <div className='flex space-x-2'>
                            <div className='text-5xl font-bold'>
                                80
                            </div>
                            <div className='text-gray-600 font-medium'>
                            Repair <br /> Outlets
                            </div>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <img src={rs} alt="" />
                        <div className='flex space-x-2'>
                            <div className='text-5xl font-bold'>
                                75
                            </div>
                            <div className='text-gray-600 font-medium'>
                            Repair <br /> Shops
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Ac