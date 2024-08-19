import React from 'react'
import './Main4.css'
import Main4Content from '../components/Main4Content'
import img1 from '../images/main4img1.png'
import img2 from '../images/main4img2.png'
import img3 from '../images/main4img3.png'

const Main4 = () => {
  return (
    <div>
      <div className='main4-container'>
        <div className='main4-content1'>
          <div className='content1'>Ensure the security and compliance of <br />your healthcare practice</div>
          <div className='content2'>PatientNotes prioritizes the security and confidentiality of your patients’ data.<br /> Our platform meets the highest standards for AI applications in medical<br /> clinics and hospitals.</div>
        </div>
        <div className='main4-content2'>
          <Main4Content img={img1} desc={<>Patient Notes get to the core of pelvic <br />health document</>} />
          <Main4Content img={img2} desc={<>Swift steps for the podiatrist using <br />PatientNotes on the Road</>} />
          <Main4Content img={img3} desc={<>Patient Notes get to the core of pelvic <br />health document</>} />
        </div>
      </div>
    </div>
  
  )
}

export default Main4
