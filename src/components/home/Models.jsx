import { useRecoilState } from 'recoil';
import { modelState } from '../../atoms/modelAtom';
import data from '../../constants/data.json'


const Models = () => {
    const [model, setModel] = useRecoilState(modelState)


    
  return (
    <div>
        <div className="w-[95%] mx-auto py-6">
            <div className="text-center mb-6">
                <h4 className="text-xl font-semibold">
                    Vehicle Models 
                </h4>
                <h2 className="text-4xl font-bold my-1 md:my-2 ">
                    Our rental fleet
                </h2>
                <p className="text-gray-600 w-2/3 md:w-1/2 mx-auto font-medium">
                Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
                </p>
            </div>

            <section className='flex flex-col px-8 md:flex-row space-y-6 md:space-y-0 md:space-x-12'>
                <div className='flex flex-col flex-1 space-y-3'>
                    {
                        data.map(vehicle => (
                            <div 
                                key={vehicle.id} 
                                className={`${model == vehicle.id && 'bg-black text-white'}  py-1.5 md:py-3.5 px-4  border  cursor-pointer text-sm md:text-lg font-semibold`}
                                onClick={() => setModel(vehicle.id)}
                            >
                                {vehicle.name}
                            </div>
                        ))
                    }
                </div>

                <div className='flex-[2] '>
                    <img src={data[model].img} className='w-full' alt="" />
                </div>

                <div className='flex-1 '>
                    <div className='border-2 border-gray-500'>
                        <div className='flex space-x-2 md:text-lg p-2 border-b-2 bg-black text-white  border-gray-600'>
                            <div className='font-bold  '>
                                N {data[model].price}
                            </div>
                            <span className='font-semibold'>
                                / rent per day
                            </span>
                        </div>

                        <div className='p-2 border-b-2  border-gray-600 flex items-center justify-between text-gray-500 font-medium text-sm space-x-5'>
                            <div className='flex-1'>
                                Model
                            </div>
                            <div className='h-6 bg-gray-500 w-[2px] ' />
                            <div className='flex-1'>
                            {data[model].model}
                            </div>
                        </div>
                        
                        <div className='p-2 border-b-2  border-gray-600 flex items-center justify-between text-gray-500 font-medium text-sm space-x-5'>
                            <div className='flex-1'>
                                Mark
                            </div>
                            <div className='h-6 bg-gray-500 w-[2px] ' />
                            <div className='flex-1'>
                            {data[model].mark}
                            </div>
                        </div>

                        <div className='p-2 border-b-2  border-gray-600 flex items-center justify-between text-gray-500 font-medium text-sm space-x-5'>
                            <div className='flex-1'>
                                Year
                            </div>
                            <div className='h-6 bg-gray-500 w-[2px] ' />
                            <div className='flex-1'>
                            {data[model].year}
                            </div>
                        </div>
                        <div className='p-2 border-b-2  border-gray-600 flex items-center justify-between text-gray-500 font-medium text-sm space-x-5'>
                            <div className='flex-1'>
                                Doors
                            </div>
                            <div className='h-6 bg-gray-500 w-[2px] ' />
                            <div className='flex-1'>
                            {data[model].doors}
                            </div>
                        </div>
                        <div className='p-2 border-b-2  border-gray-600 flex items-center justify-between text-gray-500 font-medium text-sm space-x-5'>
                            <div className='flex-1'>
                                AC
                            </div>
                            <div className='h-6 bg-gray-500 w-[2px] ' />
                            <div className='flex-1'>
                            {data[model].AC}
                            </div>
                        </div>
                        <div className='p-2 border-b-2  border-gray-600 flex items-center justify-between text-gray-500 font-medium text-sm space-x-5'>
                            <div className='flex-1'>
                                Transmission
                            </div>
                            <div className='h-6 bg-gray-500 w-[2px] ' />
                            <div className='flex-1'>
                            {data[model].Transmission}
                            </div>
                        </div>
                        <div className='p-2 flex items-center justify-between text-gray-500 font-medium text-sm space-x-5'>
                            <div className='flex-1'>
                                Fuel
                            </div>
                            <div className='h-6 bg-gray-500 w-[2px] ' />
                            <div className='flex-1'>
                            {data[model].Fuel}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default Models