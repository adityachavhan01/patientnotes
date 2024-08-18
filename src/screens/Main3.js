import React from 'react'
import './Main3.css'
import img1 from '../images/main3Img1.png'
import img2 from '../images/main3img2.png'
import img3 from '../images/main3img3.png'
import Main3Content from '../components/Main3Content'
const Main3 = () => {
    return (
        <div>
            <div className='main3-container'>
                <div className='main3-content1'>
                    Meet Our Customers<br />
                    Used in thousands of clinical <br />
                    sessions worldwide
                </div>
                <div className='main3-content2'>
                    <Main3Content img={img1} desc={<>Patient Notes get to the core of pelvic <br />health document</>} />
                    <Main3Content img={img2} desc={<>Swift steps for the podiatrist using <br />PatientNotes on the Road</>} />
                    <Main3Content img={img3} desc={<>Patient Notes get to the core of pelvic <br />health document</>} />
                </div>
                <div className='main3-content3'>

                </div>
            </div>
        </div >
    )
}

export default Main3
