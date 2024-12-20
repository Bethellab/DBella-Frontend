import gallery1 from '../../../assets/image/gallery1.png'
import gallery2 from '../../../assets/image/gallery2.png'
import gallery5 from '../../../assets/image/gallery5.png'
import gallery3 from '../../../assets/image/gallery3.png'
import gallery4 from '../../../assets/image/gallery4.png'

const Gallery = () => {
  return (
    <div className="bg-white">
        <div className="py-12 lg:mx-32">
            <div className='flex items-center gap-10'>
                <div>
                    <h1 className="text-lg font-semibold border-b-4 border-emerald-600 w-4">Gallery</h1>
                    <p className="text-3xl mt-2 font-['Cormorant_Garamond'] ">Our Immersive Beautiful Environment</p>

                    <div className='flex mt-8 gap-4'>
                        <img src={gallery1} />
                        <img src={gallery2} />
                    </div>
                    <div className='flex mt-8 gap-4'>
                        <img src={gallery3} />
                        <img src={gallery4} />
                    </div>
                </div>

                <div>
                    <img src={gallery5} />
                </div>

            </div>
       
        </div>
   
      
    </div>
  )
}

export default Gallery
