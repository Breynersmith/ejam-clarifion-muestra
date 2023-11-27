import { useEffect, useState } from 'react'
import ContainerLeft from "./ContainerLeft"
import ContainerRight from "./ContainerRight"



function SeccionProduct() {
  const [showModal, setShowModal] = useState(false);
  const [ancho, setAncho] = useState(window.innerWidth);

 const showModalHandler = () => {
    setShowModal(!showModal);
  };

  const handleResize = () => {
    setAncho(window.innerWidth);
  };

  useEffect(() => {
    // Agregar el evento resize cuando el componente se monta
    window.addEventListener('resize', handleResize);

    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="p-2 mb-12">
      {showModal && (
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={showModalHandler}
        >
        <div className='  bg-[#f4f4f4cb] rounded-xl text-center w-1/3 h-1/3 p-12 mx-auto mt-36 shadow-lg'>
        <p>Este es solo un proyecto de mi portafolio.</p>
        <p>Gracias por tu visita.</p>
        <button onClick={showModalHandler} className='mt-6 text-sky-600 '> CERRAR</button>
        </div>
        </div>

      )}
      <div className="lg:px-28 lg:flex lg:gap-5">


        <div className='lg:w-full'>
          <ContainerLeft ancho={ancho} />
        </div>
        <div className='lg:w-full'>
          <ContainerRight ancho={ancho} showModalHandler={showModalHandler} />
        </div>
      </div>
    </div>
  )
}

export default SeccionProduct
