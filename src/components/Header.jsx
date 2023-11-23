import { useState, useEffect } from 'react';

export default function Header() {
  const [index, setIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const listItems = [
    {
      title: '30-DAY SATISFACTION GUARANTEE',
      img: 'img/bange-check.svg',
    },
    {
      title: 'Free delivery on orders over $40.00',
      img: 'img/icons-transport.svg',
    },
    {
      title: '50.000+ HAPPY CUSTOMERS',
      img: 'img/icons-heart.svg',
    },
    {
      title: '100% Money Back Guarantee',
      img: 'img/bange-check.svg',
    },
  ];

  const nextItem = () => {
    setIndex((prevIndex) => (prevIndex + 1) % listItems.length);
  };

  const backItem = () => {
    setIndex((prevIndex) => (prevIndex - 1 + listItems.length) % listItems.length);
  };

  useEffect(() => {
    const handleResize = () => {
      setShowAll(window.innerWidth > 600); // Cambia el valor de 600 según sea necesario
    };

    // Agregar el event listener para el manejo de cambios en el tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Limpieza del event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const renderItems = showAll ? listItems : [listItems[index]];

  return (
    <div className="header flex gap-6 justify-center bg-sky-950 text-white w-full py-5">
      <button onClick={backItem}><i className="fa-solid fa-chevron-up fa-rotate-270 mr-2 hover:text-gray-300 lg:hidden"></i></button>
      {renderItems.map((item, i) => (
        <div className='flex gap-1' key={i}>
          <img src={item.img} alt={item.title} />
          <p className="font-['Manrope']">{item.title}</p>
        </div>
      ))}
        
        <button onClick={nextItem}><i className="fa-solid fa-chevron-up fa-rotate-90 ml-2  hover:text-gray-300 lg:hidden"></i></button>
      
    </div>
  );
}
