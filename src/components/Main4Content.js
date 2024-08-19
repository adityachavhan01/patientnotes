import React from 'react'
import './Main4Content.css'
const Main4Content = (props) => {
  return (
    <div>
      <div className='content2-1'>
                <div className='img-content'>
                    <img src={props.img} />
                </div>
                <div className='content2-1-desc'>
                    {props.desc}
                </div>
            </div>
    </div>
  )
}

export default Main4Content
