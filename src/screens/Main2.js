import React from 'react'
import './Main2.css'
import Main2Img from './main2-img.png'
const Main2 = () => {
  return (
    <div>
      <div className='main2-a1'>
        Getting Started<br />
        See how PatientNotes works
      </div>
      <div style={{ margin: "30px" }}><img src={Main2Img} style={{ width: "60vw", height: "auto" }} /></div>
      <div className='buttons' style={{ padding: "10px", margin: "10px" }}>
        <button style={{ backgroundColor: "blue", color: "white", borderRadius: "30px", margin: "5px" }}>Try it now -less than two min to started</button>
        <button style={{
          borderRadius: "30px"
        }}>Speak to our team</button>
      </div>
    </div>
  )
}

export default Main2
