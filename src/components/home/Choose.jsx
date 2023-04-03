import ccd from '../../assets/home/ccd.png'
import aip from '../../assets/home/aip.png'
import nhc from '../../assets/home/nhc.png'

const Choose = () => {
  return (
    <div className="mt-4">
        <div className="w-[80%] mx-auto py-6">
            <div className="flex justify-center items-center mt-5">
                <img src="https://car-rental-ten.vercel.app/static/media/main.70cd75042bdf42515d92.png" alt="" />
            </div>

            <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-32 text-center md:text-left'>
                <div className='flex-1'>
                    <h5 className='font-semibold text-2xl'>
                        Why Choose Us
                    </h5>
                    <h3 className='text-4xl font-bold my-3'>
                    Best valued deals you will ever find
                    </h3>
                    <p className='text-gray-600 text-sm font-medium mb-5'>
                    Discover the best deals you'll ever find with our unbeatable offers. We're dedicated to providing you with the best value for your money, so you can enjoy top-quality services and products without breaking the bank. Our deals are designed to give you the ultimate renting experience, so don't miss out on your chance to save big.
                    </p>
                    <button className='py-1.5 px-4 bg-black text-white hover:shadow-lg'>
                        Find Details
                    </button>
                </div>

                <div className='flex-1 space-y-5'>
                    <div className='flex flex-col md:flex-row items-center md:space-x-2'>
                        <img src={ccd} alt="" className='flex-1' />

                        <div className='flex-[3] '>
                            <h4 className='text-xl font-semibold mb-2'>Cross Country Drive</h4>
                            <p className='text-gray-600 '>
                                Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.
                            </p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row items-center md:space-x-2'>
                        <img src={aip} alt="" className='flex-1' />

                        <div className='flex-[3] '>
                            <h4 className='text-xl font-semibold mb-2'>All Inclusive Pricing</h4>
                            <p className='text-gray-600 '>
                            Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.
                            </p>
                        </div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row items-center md:space-x-2'>
                        <img src={nhc} alt="" className='flex-1' />

                        <div className='flex-[3] '>
                            <h4 className='text-xl font-semibold mb-2'>No Hidden Charges</h4>
                            <p className='text-gray-600 '>
                            Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose