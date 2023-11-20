import './seccion-inicial.css'
function SeccionInicial() {
  return (
    <div className='seccion-inicial'>
        <div className="box-logo" >
          <img src="img/logo-clarifion.svg" alt="" />
          <img src="img/segurity.svg" alt="" />
        </div>
       <div className="main-content-box-title">
            <h1> Wait ! your order in progress.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <div className='main-content-box-steps'>
            <p><img src="img/bange-check1.svg" alt="" /><span>Step 1 :</span> Cart Review</p>
            <p> <img src="img/bange-check1.svg" alt="" /><span>Step 2 :</span> Checkout</p>

            <p><img src="img/circle-3.svg" alt="" /><span>Step 3 :</span> Special Offer</p>

            <p><img src="img/circle-4.svg" alt="" /><span>Step 4 :</span> Confirmation</p>
        </div>
    </div>
  )
}

export default SeccionInicial
