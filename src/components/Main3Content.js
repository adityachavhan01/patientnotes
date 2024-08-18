import React from 'react'
import './Main3Content.css'
const Main3Content = (props) => {
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

export default Main3Content
