import {  useState, useEffect  } from 'react';

export default function Header() {
  const [index, setIndex] = useState(0);
  const [anchoPantalla , setAnchoPantalla] = useState(window.innerWidth);

  const [showAll, setShowAll] = useState(false);
  
 const handleResize = () => {
    setAnchoPantalla(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIndex(0);
  }, [anchoPantalla]);

  useEffect(() => {
    if (anchoPantalla > 768) {
      setShowAll(true);
    } else {
      setShowAll(false);
    }
  }, [anchoPantalla]);


  

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

  

  const renderItems = showAll ? listItems : listItems.slice(index, index + 1);

  return (
    <div className="header flex gap-4 justify-center bg-sky-950 text-white w-full py-5 ">
      <button onClick={backItem}><i className="fa-solid fa-chevron-up fa-rotate-270  hover:text-gray-300 lg:hidden"></i></button>
      {renderItems.map((item, i) => (
        <p className='flex gap-1' key={i}>
          <img src={item.img} alt={item.title} />{item.title}
        </p>
      ))}
      <button onClick={nextItem}><i className="fa-solid fa-chevron-up fa-rotate-90  hover:text-gray-300 lg:hidden"></i></button>
    </div>
  );
}
