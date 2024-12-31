import brandstoryimg from '../../../assets/image/brandstoryimg.png'

const BrandStory = () => {
    return (
        <div className='bg-white'>

            <div className='flex flex-col lg:flex-row items-start justify-between'>
                <div >
                    <div className='m-6 lg:my-44 lg:mx-24'>
                        <h1 className='font-medium text-lg border-b-4 border-b-emerald-600 whitespace-nowrap w-6'>Brand Story</h1>
                        <h1 className="font-['Cormorant_Garamond'] text-3xl lg:text-5xl mt-2 ">Our Journey to <br /> Wellness Excellence</h1>

                        <p className='lg:w-[500px] mt-2 text-gray-600'>At D'Bellas Glow, we started with a vision: to create a serene sanctuary where self-care isn’t a luxury, but a lifestyle. From our humble beginnings, we’ve grown into a trusted haven for beauty and wellness, committed to excellence and personalized care.</p>

                        <div className='mt-8 lg:mt-16 space-y-4'>
                            <h1 className='font-medium text-lg text-gray-900'>Our mission is simple: </h1>
                            <p className='text-md text-gray-600'>To empower our clients to look and feel their best in every aspect of <br /> life.</p>
                        </div>
                    </div>



                </div>
                <img src={brandstoryimg} />
            </div>


        </div>
    )
}

export default BrandStory
