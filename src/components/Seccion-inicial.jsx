
function SeccionInicial() {
  return (
    <div className=''>
        <div className="flex justify-around p-5" >
          <img src="img/logo-clarifion.svg" alt="" className="w-1/3"/>
          <img src="img/segurity.svg" alt="" className="w-1/3" />
        </div>
       <div className="text-center w-11/12 px-2 font-['Manrope']">
            <h1 className="text-3xl"> Wait ! your order in progress.</h1>
            <p className="text-md">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        </div>
        <div className='w-full flex gap-2 mt-5 text-xs py-5 justify-center px-8'>
            <div className=""><img src="img/bange-check1.svg" alt="" className="m-auto mb-2"/><span className="hidden">Step 1 :</span> Cart Review</div>
            <div className=""> <img src="img/bange-check1.svg" alt="" className="m-auto mb-2" /><span className="hidden">Step 2 :</span> Checkout</div>

            <div className=""><img src="img/circle-3.svg" alt="" className="m-auto mb-2"/><span className="hidden">Step 3 :</span> Special Offer</div>

            <div className=""><img src="img/circle-4.svg" alt="" className="m-auto mb-2"/><span className="hidden">Step 4 :</span> Confirmation</div>
        </div>
    </div>
  )
}

export default SeccionInicial
