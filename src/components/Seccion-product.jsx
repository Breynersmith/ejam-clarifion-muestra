import { useEffect, useState } from 'react'
import ContainerLeft from "./ContainerLeft"
import ContainerRight from "./ContainerRight"
import './Seccion-product.css'


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
    <div className="seccion-product">
        <div className="main-content">
            
        <div ><ContainerLeft ancho={ancho} /></div>
        <div><ContainerRight  ancho={ancho}/></div>
        </div>
    </div>
  )
}

export default SeccionProduct
