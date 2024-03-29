import propTypes from 'prop-types'

import Title from './Title'
function ContainerLeft(props) {
    return (
        <div className='ContainerLeft'>
            {props.ancho < 600 && <Title />}
            <img src="img/img-product.png" alt="imagen producto" />

            <div className='mt-5 lg:flex flex-wrap hidden gap-5'>
                <img src="img/foto-user.png" alt="" className='w-16 ' />

                <div className=''>
                    <p className='flex gap-1'>
                        <img src="img/icon-estrellita.svg" alt="icono" />
                        <img src="img/icon-estrellita.svg" alt="icono" />
                        <img src="img/icon-estrellita.svg" alt="icono" />
                        <img src="img/icon-estrellita.svg" alt="icono" />
                        <img src="img/icon-estrellita.svg" alt="icono" />
                    </p>
                    <p className='flex gap-5 mt-2 text-[#41ba59]'><span className='text-xl font-medium text-black'>Ken T.</span>
                        <img src="img/bange-check1.svg" alt="" className='w-5' />Verified Customer
                    </p>
                </div>
                <p >
                    “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon.
                    When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I
                    could breathe better. Wonderful.”
                </p>
            </div>


        </div>
    )
}

ContainerLeft.propTypes = {
    ancho: propTypes.number
}

export default ContainerLeft
