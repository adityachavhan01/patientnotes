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
      <div style={{ margin: "30px", position: "relative", paddingBottom: "56.25%", height: 0, width: "100vw" }}>
        <iframe
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
          src="https://www.youtube.com/embed/sS8JudAtJhA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen>
        </iframe>
      </div>

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
