import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import "./Card.css"

export default function Card({img, h2, p }) {
  return (
    <div className="card">
        <img src={img} alt={h2} />
      <h2>{h2}</h2>
      <p>{p}</p>
      <FaArrowRightLong className='icon' />
    </div>
  )
}


