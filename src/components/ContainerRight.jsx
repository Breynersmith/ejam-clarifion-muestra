import Title from './Title'
import './containerRight.styles.css'
import proptypes from 'prop-types'

function ContainerRight(props) {

  return (
    <div className='product-container-right'>
               {props.ancho > 600 && <Title />}
               
                <div className='product-container-right-box-1'>
                    <img src="img/img-1.png" alt="clarifion"  className='img-clarifion'/>
                    <div className='product-container-right-box-1-description'>
                        <div>
                            <h4>Clarifion Air Ionizer</h4>
                            <p>
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                                <img src="img/icon-estrellita.svg" alt="icono estrellita calificacion" />
                            </p>
                            <p className='price'>$180 <span>$84</span></p>
                        </div>
                        <div className='stock'><input type="radio" name="" id="" style={{ marginRight: '10px' }} />12 left in Stock</div>
                        <p>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers
                            with a simple.</p>
                    </div>
                </div>
                <div className='product-container-right-box-2'>
                    <p><img src="img/icons-chulito.svg" alt="" />Negative Ion Technology may help with allergens</p>
                    <p> <img src="img/icons-chulito.svg" alt="" />Designed for air rejuvenation</p>
                    <p> <img src="img/icons-chulito.svg" alt="" />Perfect for every room in all types of places.</p>
                </div>
                <div className='product-container-right-box-3'>
                    <p>
                    <img src="img/icon-porcentaje.svg" alt="" />
                    Save <span>53% </span>and get <span>6 extra Clarifision</span> for only <span>$14 Each.</span>
                    </p>
                </div>
                <div className='product-container-right-box-4'>
                <button> YES - CLAIM MY DISCOUNT</button>
                <div className='pagos' style={{display: 'flex', flexWrap: 'wrap'}}>
                    <p> Free Shipping</p>
                    <p style={{display: 'flex', gap: '5px'}}> 
                        <img src="img/icon-candado-gray.svg" alt="" style={{marginRight: '5px'}}/>
                        Secure 256-Bit SSL Encryption</p>
                    <p>
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
                <p className='parrafo'>No thanks, I don’t want this.</p>
                <p className='parrafo-garantia'><img src="img/garantia.png" alt="imagen garantia" />
                If you are not completely thrilled with your Clarifion - We have a 30 day satisfaction guarantee. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!
                </p>
                
            </div>
  )
}

ContainerRight.propTypes = {
  ancho: proptypes.number
}

export default ContainerRight
