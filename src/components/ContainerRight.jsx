import Title from './Title'
import { useState } from 'react'
import proptypes from 'prop-types'

function ContainerRight(props) {

    const [ancho, setAncho] = useState(window.innerWidth);

    const handleWindow = () => {
        setAncho(window.innerWidth);
        console.log('el ancho de la ventana es :',ancho);
    };

    handleWindow
   console.log(ancho);

  return (
    <div className='mt-5'>
               {props.ancho > 600 && <Title />}
               
                <div className='flex gap-2'>
                    <img src="img/img-1.png" alt="clarifion"  className='w-24 h-24'/>
                    <div className=''>
                        <div className='ml-5 flex flex-col gap-2'>
                            <h4 className='relative font-[Manrope] text-sm md:text-base lg:text-lg'>Clarifion Air Ionizer</h4>
                            <p className='flex'>
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                            </p>
                            <p className='absolute  right-[8%] text-lg'>$180 <span className='text-[#528de5] font-bold text-xl'>$84</span></p>

                            <div className='flex gap-2 text-lg'><input type="radio" />12 left in Stock
                            </div>
                        </div>
                        
                        {ancho > 500 && <p className='mt-5 text-center font-[Manrope]'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers
                            with a simple.</p>}
                        
                    </div>
                    
                    
                </div>
                {ancho < 500 && <p className='mt-5 text-center font-[Manrope]'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers
                        with a simple.</p>}
                <div className='flex flex-col gap-2 mt-5'>
                    <p className='flex gap-2 text-sm'><img src="img/icons-chulito.svg" alt="" className='w-5' />Negative Ion Technology may help with allergens</p>
                    <p className='flex gap-2 text-sm'> <img src="img/icons-chulito.svg" alt="" className='w-5' />Designed for air rejuvenation</p>
                    <p className='flex gap-2 text-sm'> <img src="img/icons-chulito.svg" alt="" className='w-5' />Perfect for every room in all types of places.</p>
                </div>
                <div className='flex gap-5 mt-5 bg-[#EDF3FD] p-3 rounded-lg'>
                <img src="img/icon-porcentaje.svg" alt="" />
                    <p className='text-sm'>
                    
                    Save <span className='text-[#2C7EF8]'>53% </span>and get <span className='text-[#2C7EF8]'>6 extra Clarifision</span> for only <span className='text-[#2C7EF8]'>$14 Each.</span>
                    </p>
                </div>
                <div className='product-container-right-box-4'>
                <button className='bg-[#59AE43] rounded-xl text-white font-[Manrope] w-full mt-5 p-2 cursor-pointer hover:bg-[#5aa246]'> YES - CLAIM MY DISCOUNT</button>
                <div className='mt-5 flex flex-wrap gap-3 text-xs justify-center'>
                    <p> Free Shipping</p>
                    <p className='flex'> 
                        <img src="img/icon-candado-gray.svg" alt="" className='w-4 mr-2'/>
                        Secure 256-Bit SSL Encryption</p>
                    <p className='flex'>
                        <img src='img/icon-visa.svg' alt='icono visa'/>
                        <img src='img/icon-pay.svg' alt='icono pay'/>
                        <img src='img/icon-paypal.svg' alt='icono paypal'/>
                        <img src='img/icon-mastercard.svg' alt='icono mastercard'/>
                        <img src='img/icon-gpay.svg' alt='icono gpay'/>
                        <img src='img/icon-applepay.svg' alt='icono apple'/>
                        <img src='img/icon-amex.svg' alt='icono amex'/>

                    </p>
                </div>
                </div>
                <p className='text-red-500 text-center my-5 text-lg font-[Manrope]'>No thanks, I don’t want this.</p>
                <p className='flex gap-2 text-xs lg:text-base'><img src="img/garantia.png" alt="imagen garantia" className='w-14 h-14 lg:w-24 lg:h-24 lg:mr-5' />
                If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                </p>
                
            </div>
  )
}

ContainerRight.propTypes = {
  ancho: proptypes.number
}

export default ContainerRight
