import { useEffect, useState } from 'react'
import ContainerLeft from "./ContainerLeft"
import ContainerRight from "./ContainerRight"



function SeccionProduct() {
  const [ancho, setAncho] = useState(window.innerWidth);

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
      <div className="lg:px-28 lg:flex lg:gap-5">

        <div className='lg:w-full'>
          <ContainerLeft ancho={ancho} />
        </div>
        <div className='lg:w-full'>
          <ContainerRight ancho={ancho} />
        </div>
      </div>
    </div>
  )
}

export default SeccionProduct
