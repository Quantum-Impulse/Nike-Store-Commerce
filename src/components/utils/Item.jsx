import { StarIcon, ShoppingBagIcon } from '@heroicons/react/24/solid'
import React from 'react'

const Item = ({id, color, shadow, title, text, img, btn, rating, price}) => {
  return (
    <>
        <div className={`relative bg-gradient-to-b ${color} ${shadow} grid items-center justify-items-center`}>
            <div className='grid items-center justify-items-center'>
                <h1 className='text-slate-200 text-xl lg:text-lg md:text-text-base font-medium filter drop-shadow'>{title}</h1>
                
                <p className='text-slate-200 filter drop-shadow text-base md:text-sm font-normal'>{text}</p>
                
                <div className='flex items-center justify-between w-28'>
                    <h1 className=''>{price}</h1>
                </div>
                
                <div className='flex items-center justify-between w-28'>
                    <StarIcon className='icon-style text-slate-900'/>
                    <h1 className=''>{rating}</h1>
                </div>
                
                <div className='flex items-center justify-between w-28'>
                    <button type= 'button' className=''> <ShoppingBagIcon className='icon-style text-slate-900'/> </button>
                    <button type='button' className=''> {btn} </button>
                </div>
            </div>
            <div className='flex items-center justify-between w-28'>
                <img src={img} alt='img/item-img' className=''/>
            </div>
        </div>
    </>
  )
}

export default Item