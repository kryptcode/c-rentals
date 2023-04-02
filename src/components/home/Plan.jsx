import Select from '../../assets/home/select-car.png'
import Drive from '../../assets/home/drive.png'
import Contact from '../../assets/home/contact-op.png'


const Plan = () => {
  return (
    <div className='my-6'>
        <div className='w-[80%] mx-auto py-6 text-center'>
            <h5 className='text-2xl font-semibold '>
                Plan your trip now
            </h5>
            <h2 className='text-4xl font-extrabold my-3 '>
                Quick & easy car rental
            </h2>

            <div className='flex  flex-col md:flex-row justify-between md:items-end' >
                <div className='p-2 flex flex-col items-center space-y-3'>
                    <img src={Select} alt="" />
                    <h4 className='text-lg font-bold '>
                        Select Car
                    </h4>
                    <p className='text-gray-500'>
                    We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs
                    </p>
                </div>
                
                <div className='p-2 flex flex-col items-center space-y-3'>
                    <img src={Contact} alt="" />
                    <h4 className='text-lg font-bold '>
                        Contact Operator
                    </h4>
                    <p className='text-gray-500'>
                    Our knowledgeable and friendly operators are always ready to help with any questions or concerns 
                    </p>
                </div>
                
                <div className='p-2 flex flex-col items-center space-y-3'>
                    <img src={Drive} alt="" />
                    <h4 className='text-lg font-bold '>
                        Let's Drive
                    </h4>
                    <p className='text-gray-500'>
                    Whether you're hitting the open road, we've got you covered with our wide range of cars
                    </p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Plan