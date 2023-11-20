import './header.styles.css'
import { useState } from 'react'

export default function Header() {
  const [index, setIndex] = useState(0)
  const listItems = [
    {
      title: '30-DAY SATISFACTION GUARANTEE',
      img: 'img/bange-check.svg'
    },
    {
      title: 'Free delivery on orders over $40.00',
      img: 'img/icons-transport.svg'
    },
    {
      title: '50.000+ HAPPY CUSTOMERS',
      img: 'img/icons-heart.svg'
    },
    {
      title: '100% Money Back Guarantee',
      img: 'img/bange-check.svg'
    }
  ]
  const nextItem = () => {
    let newIndex = index + 1
    if (newIndex > 3) {
      newIndex = 0
    }
    
    setIndex(newIndex)
  }

  const backItem = () => {
    let newIndex = index - 1
    if (newIndex < 0) {
      newIndex = 3
    }
    setIndex(newIndex)
  }

  return (
    <div className="header">

      <div className="header-items header-item-1">
        <p><img src={listItems[index].img} alt=" bange check" />
      {listItems[index].title}</p>
      </div>
      <div className="header-items header-item-2">
        <p><img src={listItems[index].img} alt="icons delivery" />
      {listItems[index].title}</p>
      </div>
      <div className="header-items header-item-3">
        <p><img src={listItems[index].img} alt="icons transport" />
      {listItems[index].title}</p>
      </div>
      <div className="header-items header-item-4">
        <p><img src={listItems[index].img} alt="arrow-sync" />
      {listItems[index].title}</p>
      </div>
      <div className='button-box'>
        <button onClick={backItem}><i className="fa-solid fa-chevron-up fa-rotate-270"></i></button>
        <button onClick={nextItem}><i className="fa-solid fa-chevron-up fa-rotate-90"></i></button>
      </div>
    </div>
  )
}
