import React from 'react'
import './Main4.css'
import img from '../images/main4img1.png'
const Main4 = () => {
  return (
    <div>
      <div className='main4-container'>
        <div className='main4-content1'>
        <div className='content1'>Ensure the security and compliance of <br />your healthcare practice</div>
        <div className='content2'>PatientNotes prioritizes the security and confidentiality of your patients’ data.<br/> Our platform meets the highest standards for AI applications in medical<br/> clinics and hospitals.</div>
        </div>
        <div className='main4-content2'>
              <img src={img}></img>
        </div>
      </div>
    </div>
  )
}

export default Main4
