import propTypes from 'prop-types'
import './ContainerLeft.styles.css'

import Title from './Title'
function ContainerLeft(props) {
    return (
        <div className='ContainerLeft'>
            {props.ancho < 600 && <Title />}
            <img src="img/img-product.png" alt="imagen producto" className='img-producto'/>

            <div className='containerLeft-review'>
                    <img src="img/foto-user.png" alt="" />
                    
                    <div className='review-container'>
                    <p style={{ display: 'flex', gap: '5px', padding: '5px' }} className='estrellitas'>
                                <img src="img/icon-estrellita.svg" alt="icono" />
                                <img src="img/icon-estrellita.svg" alt="icono" />
                                <img src="img/icon-estrellita.svg" alt="icono" />
                                <img src="img/icon-estrellita.svg" alt="icono" />
                                <img src="img/icon-estrellita.svg" alt="icono" />
                    </p>
                    <p className='review-verified'><span>Ken T.</span>
                        <img src="img/bange-check1.svg" alt="" style={{ marginRight: '5px' }} />Verified Customer
                    </p>
                    </div>
            </div>
                
            
            
            <p className='review-text'>
                “As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon.
                When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I
                could breathe better. Wonderful.”
            </p>
            </div>



        

    )
}

ContainerLeft.propTypes = {
    ancho: propTypes.number
}

export default ContainerLeft
